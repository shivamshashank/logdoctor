import fs from 'fs';

export async function getInputStream(file) {
    if (file) {
        if (!fs.existsSync(file)) {
            throw new Error(`File not found at ${file}`);
        }
        return fs.createReadStream(file);
    }
    return !process.stdin.isTTY ? process.stdin : null;
}

export async function readStreamToString(stream) {
    let data = '';
    for await (const chunk of stream) {
        data += chunk.toString();
    }
    return data;
}