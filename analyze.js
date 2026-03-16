import fs from 'fs';
import { scrub } from './scrubber.js';
import { getConfig } from './config.js';
import chalk from 'chalk';
import ora from 'ora';

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

    const spinner = ora('Scrubbing sensitive data...').start();
    const scrubbedLogs = scrub(logData);
    spinner.succeed('Data scrubbed.');

    // --- AI Integration Point ---
    const aiSpinner = ora(`Sending to ${config.provider} for analysis...`).start();
    // TODO: Replace this with your actual AI API call using `scrubbedLogs`
    setTimeout(() => {
        aiSpinner.succeed('AI analysis complete.');
        console.log(chalk.green('\n[AI Response would be displayed here]'));
    }, 1500);
}