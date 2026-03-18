import inquirer from 'inquirer';
import chalk from 'chalk';
import { saveConfig, clearConfig } from './config.js';

export async function handleConfigure() {
    console.log(chalk.bold.blue('🩺 Welcome to LogDoctor Configuration\n'));

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'provider',
            message: 'Select your AI provider:',
            choices: ['openai', 'gemini', 'claude', 'ollama']
        },
        {
            type: 'password',
            name: 'apiKey',
            message: 'Enter your API key (stored locally and securely):',
            mask: '*',
            when: (answers) => answers.provider !== 'ollama'
        },
        {
            type: 'input',
            name: 'model',
            message: 'Enter your local Ollama model name (e.g., llama3, mistral):',
            default: 'llama3',
            when: (answers) => answers.provider === 'ollama'
        }
    ]);

    await saveConfig({
        provider: answers.provider,
        apiKey: answers.apiKey || '',
        model: answers.model || ''
    });

    console.log(chalk.green('\n✅ Configuration saved successfully!'));
    console.log('You can now use: ' + chalk.cyan('logdoctor analyze <file>'));
}

export async function handleLogout() {
    await clearConfig();
    console.log(chalk.green('✅ Successfully logged out and cleared stored API keys.'));
}