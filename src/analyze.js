import fs from 'fs';
import { processLog } from './scrubber.js';
import { getConfig } from './config.js';
import chalk from 'chalk';
import ora from 'ora';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Anthropic from '@anthropic-ai/sdk';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';

marked.setOptions({ renderer: new TerminalRenderer() });

async function getInputStream(file) {
    // If a file path is provided, create a read stream.
    if (file) {
        if (!fs.existsSync(file)) {
            console.error(chalk.red(`Error: File not found at ${file}`));
            process.exit(1);
        }
        return fs.createReadStream(file);
    }
    // Otherwise, check if data is being piped via stdin.
    if (!process.stdin.isTTY) {
        return process.stdin;
    }
    return null;
}

export async function handleAnalyze(file) {
    const config = await getConfig();
    if (!config.provider || !config.apiKey) {
        console.log(chalk.yellow('AI provider not configured. Please run `logdoctor config` first.'));
        return;
    }

    const inputStream = await getInputStream(file);
    if (!inputStream) {
        console.log(chalk.red('Error: No log file specified and no data piped.'));
        console.log('Usage: `logdoctor analyze <file>` or `cat <file> | logdoctor analyze`');
        return;
    }

    let logData = '';
    for await (const chunk of inputStream) {
        logData += chunk.toString();
    }

    const spinner = ora('Running Enterprise Security Pipeline...').start();
    const scrubbedLogs = processLog(logData);
    spinner.succeed('Data scrubbed.');

    // Print the scrubbed logs to the terminal so the user can verify the redaction
    console.log(chalk.bold.blue('\n--- Scrubbed Logs (What the AI will see) ---'));
    console.log(scrubbedLogs);
    console.log(chalk.bold.blue('--- End of Logs ---\n'));

    // --- AI Integration Point ---
    const systemPrompt = 'You are an elite DevOps engineer. Analyze the provided server logs, identify the root cause of the incident, and provide a concise explanation along with actionable, suggested fixes.';
    const userPrompt = `Here are the scrubbed logs:\n\n${scrubbedLogs}`;

    if (config.provider === 'openai') {
        const aiSpinner = ora(`Sending to OpenAI for analysis...`).start();
        try {
            const openai = new OpenAI({ apiKey: config.apiKey });
            const response = await openai.chat.completions.create({
                model: 'gpt-4o-mini', // Fast and cost-effective for log analysis
                messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
            });
            aiSpinner.succeed('AI analysis complete.');
            console.log(chalk.green('\n================ AI DIAGNOSIS & FIX ================'));
            console.log(marked.parse(response.choices[0].message.content));
            console.log(chalk.green('====================================================\n'));
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            console.error(chalk.red(`Error: ${error.message}`));
        }
    } else if (config.provider === 'gemini') {
        const aiSpinner = ora(`Sending to Gemini for analysis...`).start();
        try {
            const genAI = new GoogleGenerativeAI(config.apiKey);
            // Gemini 1.5 Flash is ideal for fast developer tools
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: systemPrompt });

            const result = await model.generateContent(userPrompt);
            const responseText = result.response.text();

            aiSpinner.succeed('AI analysis complete.');
            console.log(chalk.green('\n================ AI DIAGNOSIS & FIX ================'));
            console.log(marked.parse(responseText));
            console.log(chalk.green('====================================================\n'));
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            console.error(chalk.red(`Error: ${error.message}`));
        }
    } else if (config.provider === 'claude') {
        const aiSpinner = ora(`Sending to Claude for analysis...`).start();
        try {
            const anthropic = new Anthropic({ apiKey: config.apiKey });
            const msg = await anthropic.messages.create({
                model: "claude-3-haiku-20240307", // Fast and efficient for CLI tools
                max_tokens: 1024,
                system: systemPrompt,
                messages: [{ role: "user", content: userPrompt }],
            });

            aiSpinner.succeed('AI analysis complete.');
            console.log(chalk.green('\n================ AI DIAGNOSIS & FIX ================'));
            console.log(marked.parse(msg.content[0].text));
            console.log(chalk.green('====================================================\n'));
        } catch (error) {
            aiSpinner.fail('AI analysis failed.');
            console.error(chalk.red(`Error: ${error.message}`));
        }
    } else {
        console.log(chalk.yellow(`\nIntegration for ${config.provider} is not yet fully implemented. Stay tuned!`));
    }
}