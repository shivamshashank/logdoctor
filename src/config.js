import os from 'os';
import path from 'path';
import fs from 'fs/promises';

const configDir = path.join(os.homedir(), '.logdoctor');
const configFile = path.join(configDir, 'config.json');

// Ensures the config directory exists and has the correct permissions
async function ensureConfigDir() {
    try {
        await fs.mkdir(configDir, { recursive: true, mode: '700' });
    } catch (error) {
        if (error.code !== 'EEXIST') {
            console.error('Error creating config directory:', error);
            process.exit(1);
        }
    }
}

export async function saveConfig(newConfig) {
    await ensureConfigDir();
    const currentConfig = await getConfig();
    const mergedConfig = { ...currentConfig, ...newConfig };
    await fs.writeFile(configFile, JSON.stringify(mergedConfig, null, 2), { mode: '600' });
}

export async function getConfig() {
    await ensureConfigDir();
    try {
        const configData = await fs.readFile(configFile, 'utf-8');
        return JSON.parse(configData);
    } catch (error) {
        // If the file doesn't exist or is invalid, return an empty object
        return {};
    }
}

export async function clearConfig() {
    try {
        await fs.unlink(configFile);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error('Error clearing config file:', error);
        }
    }
}