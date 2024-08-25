import { NextResponse } from "next/server";
import OpenAI from "openai";
import { PineconeClient } from "pinecone-client";
import { OpenAIEmbeddings } from "langchain/embeddings";

// Initialize OpenAI and Pinecone
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY,
  environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT,
});

// Function to query Pinecone for relevant documents
async function retrieveRelevantDocs(query) {
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  // Convert the query to an embedding
  const queryEmbedding = await embeddings.embed(query);

  // Search the Pinecone index for similar documents
  const result = await pinecone.query({
    topK: 5,
    vector: queryEmbedding,
    index: process.env.PINECONE_INDEX_NAME,
  });

  // Extract the content of the retrieved documents
  return result.matches.map((match) => match.metadata.content);
}

export async function POST(req) {
  try {
    const data = await req.json();
    const userMessage = data.find((msg) => msg.role === "user").content;
    const relevantDocs = await retrieveRelevantDocs(userMessage);
    const augmentedContent = relevantDocs.join("\n\n") + "\n\n" + userMessage;

    // Generate a response from OpenAI using the augmented prompt
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: augmentedContent }, ...data],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
