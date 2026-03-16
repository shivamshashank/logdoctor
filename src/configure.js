import inquirer from 'inquirer';
import { saveConfig, getConfig, clearConfig } from './config.js';
import chalk from 'chalk';

export async function handleConfigure() {
    const currentConfig = await getConfig();

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'provider',
            message: 'Which AI provider do you want to use?',
            choices: ['openai', 'gemini', 'claude'],
            default: currentConfig.provider || 'openai',
        },
        {
            type: 'password',
            name: 'apiKey',
            message: (answers) => `Enter your ${answers.provider.toUpperCase()} API key (press Enter to keep existing):`,
            mask: '*',
        },
    ]);

    const newConfig = {
        provider: answers.provider,
        // Only update the key if the user provided a new one
        ...(answers.apiKey && { apiKey: answers.apiKey }),
    };

    await saveConfig(newConfig);
    console.log(chalk.green('✅ Configuration saved successfully!'));
}

export async function handleLogout() {
    await clearConfig();
    console.log(chalk.green('✅ Configuration cleared successfully. You are now logged out.'));
}