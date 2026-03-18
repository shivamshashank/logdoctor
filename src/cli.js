#!/usr/bin/env node

import { Command } from 'commander';
import { handleConfigure, handleLogout } from './configure.js';
import { handleAnalyze } from './analyze.js';

const program = new Command();

program
    .name('logdoctor')
    .description('Privacy-first AI log analysis in your terminal.')
    .version('0.1.0');

program
    .command('config')
    .description('Configure your AI provider and API key.')
    .action(handleConfigure);

program
    .command('logout')
    .description('Clear your stored AI provider and API key.')
    .action(handleLogout);

program
    .command('analyze')
    .description('Analyze a log file or piped input.')
    .argument('[file]', 'The path to the log file to analyze.')
    .option('-c, --context <path>', 'Attach a source code file for better AI context.')
    .option('-p, --prompt <prompt>', 'Add custom instructions for the AI.')
    .option('-o, --output <path>', 'Save the Markdown report to a file.')
    .action(handleAnalyze);

program.parse(process.argv);