import OpenAI from 'openai';
import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import ora from 'ora';

export async function analyzeWithAI(config, systemPrompt, userPrompt) {
    if (config.provider === 'openai') {
        const aiSpinner = ora(`Sending to OpenAI for analysis...`).start();
        try {
            const openai = new OpenAI({ apiKey: config.apiKey });
            const response = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
            });
            aiSpinner.succeed('AI analysis complete.');
            return response.choices[0].message.content;
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            throw error;
        }
    } else if (config.provider === 'gemini') {
        const aiSpinner = ora(`Sending to Gemini for analysis...`).start();
        try {
            const ai = new GoogleGenAI({ apiKey: config.apiKey });
            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: userPrompt,
                config: { systemInstruction: systemPrompt }
            });
            aiSpinner.succeed('AI analysis complete.');
            return response.text;
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            const errorMessage = error.message || String(error);
            if (errorMessage.includes('429') || errorMessage.includes('quota') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
                throw new Error(`Rate Limit Exceeded: You have hit the Gemini API quota limits.\n💡 Tip: If you are using the free tier, please wait about a minute and try again.\n   If your log file is very large, try passing a smaller snippet to avoid hitting the Token Per Minute limit.`);
            }
            throw new Error(errorMessage);
        }
    } else if (config.provider === 'claude') {
        const aiSpinner = ora(`Sending to Claude for analysis...`).start();
        try {
            const anthropic = new Anthropic({ apiKey: config.apiKey });
            const msg = await anthropic.messages.create({
                model: "claude-3-haiku-20240307",
                max_tokens: 1024,
                system: systemPrompt,
                messages: [{ role: "user", content: userPrompt }],
            });
            aiSpinner.succeed('AI analysis complete.');
            return msg.content[0].text;
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            throw error;
        }
    } else if (config.provider === 'ollama') {
        const modelName = config.model || 'llama3';
        const aiSpinner = ora(`Sending to local Ollama (${modelName}) for 100% offline analysis...`).start();
        try {
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: modelName, messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }], stream: false })
            });
            if (!response.ok) throw new Error(`Ollama HTTP error! status: ${response.status}`);
            const data = await response.json();
            aiSpinner.succeed('Local AI analysis complete.');
            return data.message.content;
        } catch (error) {
            aiSpinner.fail('Local AI analysis failed.');
            throw new Error(`${error.message}\n💡 Tip: Ensure Ollama is running locally and the model is downloaded ('ollama run ${modelName}').`);
        }
    }

    throw new Error(`Integration for ${config.provider} is not yet fully implemented. Stay tuned!`);
}