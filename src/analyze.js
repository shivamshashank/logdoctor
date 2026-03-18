import fs from 'fs';
import { processLog } from './scrubber.js';
import { getConfig } from './config.js';
import { getInputStream, readStreamToString } from './utils/input.js';
import { analyzeWithAI } from './services/ai-service.js';
import chalk from 'chalk';
import ora from 'ora';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';

marked.setOptions({
    renderer: new TerminalRenderer({
        heading: chalk.bold.magenta, // Colors the ## Headings
        strong: chalk.bold.cyan,     // Colors **bold** text
        em: chalk.yellow,            // Colors *italic* text
        code: chalk.green            // Colors `inline code`
    })
});

export async function handleAnalyze(file, options) {
    const config = await getConfig();
    if (!config.provider || (config.provider !== 'ollama' && !config.apiKey)) {
        console.log(chalk.yellow('AI provider not configured. Please run `logdoctor config` first.'));
        return;
    }

    let inputStream;
    try {
        inputStream = await getInputStream(file);
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
        process.exit(1);
    }

    if (!inputStream) {
        console.log(chalk.red('Error: No log file specified and no data piped.'));
        console.log('Usage: `logdoctor analyze <file>` or `cat <file> | logdoctor analyze`');
        return;
    }

    const logData = await readStreamToString(inputStream);

    const spinner = ora('Running Enterprise Security Pipeline...').start();
    const scrubbedLogs = processLog(logData);
    spinner.succeed('Data scrubbed.');

    // Print the scrubbed logs to the terminal so the user can verify the redaction
    console.log(chalk.bold.blue('\n--- Scrubbed Logs (What the AI will see) ---'));
    console.log(scrubbedLogs);
    console.log(chalk.bold.blue('--- End of Logs ---\n'));

    // --- AI Integration Point ---
    let systemPrompt = `You are an elite DevOps engineer. Analyze the provided server logs and identify the root cause of the incident. 
Your output MUST be concise, professional, and formatted EXACTLY using the following Markdown structure:

## 🚨 Error Summary
[Brief 1-2 sentence summary of what failed]

## 🔍 Root Cause
[Detailed explanation of why it failed based on the logs]

## 🛠️ Actionable Fixes
[Step-by-step bullet points to resolve the issue. Provide code snippets if applicable]`;
    if (options.prompt) {
        systemPrompt += `\n\nAdditional user instructions: ${options.prompt}`;
    }
    let userPrompt = `Here are the scrubbed logs:\n\n${scrubbedLogs}`;

    if (options.context) {
        if (fs.existsSync(options.context)) {
            const contextData = fs.readFileSync(options.context, 'utf-8');
            userPrompt += `\n\nHere is the associated source code context (${options.context}):\n\n\`\`\`\n${contextData}\n\`\`\`\n`;
            console.log(chalk.cyan(`📎 Attached source code context: ${options.context}`));
        } else {
            console.log(chalk.yellow(`⚠️ Context file not found at ${options.context}. Proceeding without it.`));
        }
    }

    try {
        const reportContent = await analyzeWithAI(config, systemPrompt, userPrompt);

        console.log(chalk.green('\n================ AI DIAGNOSIS & FIX ================'));
        console.log(marked.parse(reportContent));
        console.log(chalk.green('====================================================\n'));

        if (reportContent && options.output) {
            fs.writeFileSync(options.output, reportContent, 'utf-8');
            console.log(chalk.green(`\n💾 Report successfully saved to ${options.output}`));
        }
    } catch (error) {
        console.error(chalk.red(`\nError: ${error.message}`));
    }
}