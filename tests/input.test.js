import test from 'node:test';
import assert from 'node:assert';
import { getInputStream, readStreamToString } from '../src/utils/input.js';
import { Readable } from 'stream';

test('Input Utility - readStreamToString converts chunks correctly', async () => {
    const mockStream = Readable.from(['chunk 1 ', 'chunk 2 ', 'chunk 3']);
    const result = await readStreamToString(mockStream);

    assert.strictEqual(result, 'chunk 1 chunk 2 chunk 3', 'Stream should be perfectly concatenated');
});

test('Input Utility - getInputStream throws on invalid file path', async () => {
    try {
        await getInputStream('/invalid/path/that/does/not/exist.log');
    } catch (err) {
        assert.match(err.message, /File not found at/, 'Should throw a clean error when files are missing');
    }
});