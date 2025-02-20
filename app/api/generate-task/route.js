import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { title, description } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: "You are an AI task assistant." },
        {
          role: "user",
          content: `${description}`,
        },
      ],
    });

    if (!response.choices.length) throw new Error("No response from AI");

    return NextResponse.json({
      taskTitle: title,
      taskDescription: response.choices[0].message?.content?.trim(),
    });
  } catch (error) {
    console.error("Error generating task:", error);
    return NextResponse.json(
      { error: "Error generating task" },
      { status: 500 }
    );
  }
}
