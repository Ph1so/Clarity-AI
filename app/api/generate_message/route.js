import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const content = "";
export async function POST(req) {
  try {
    const data = await req.json();
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: content }, ...data],
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
