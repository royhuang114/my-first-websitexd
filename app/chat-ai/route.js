import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
    try {
        const { userInput } = await request.json();

        if (!userInput) {
            return new Response(JSON.stringify({ error: '請提供使用者輸入' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "你是一個善於創作詩詞的AI助手。請使用繁體中文回應，並在回答中加入一首與使用者輸入內容相關的詩句。詩句要優美且富有意境，可以是新創作的，也可以是引用古詩詞。每次回應都應包含：1. 對使用者問題的回答 2. 相關的詩句創作或引用"
                },
                { role: "user", content: userInput }
            ],
            temperature: 0.9,
            max_tokens: 1000
        });

        const aiResponse = completion.choices[0].message.content;

        return new Response(JSON.stringify({ response: aiResponse }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('OpenAI API 錯誤:', error);

        return new Response(JSON.stringify({ error: '處理請求時發生錯誤' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

