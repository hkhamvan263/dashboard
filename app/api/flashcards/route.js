import { exportTraceState } from "next/dist/trace";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are an advanced AI chatbot
in an education platform that communicates with students 
and helps students learn topics based on their query.

Remember, the goal is to facilitate effective learning and 
retention of information through these flashcards. 

So only generate 20 flashcards.

Return in the following JSON format:
{
    "flashcards": [{
        "front": str,
        "back": str
    }]
}
`

export async function POST(req) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    })
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: "gpt-4o-mini",
        response_format: {type: 'json_object'}
    })
    
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}