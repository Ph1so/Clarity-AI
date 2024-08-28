import { NextResponse } from "next/server";
import OpenAI from "openai";

// initialize openai client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

// currently empty but this would store document texts
const content = "";

// POST request to generate a message
export async function POST(req) {
  try {
    // this is the message from the user
    const data = await req.json();

    // generate a response from the chatbot
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: content }, ...data],
      model: "gpt-3.5-turbo",
    });

    // return response
    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    // return error if error occurs
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
