import { describe, it } from 'node:test';
import assert from 'node:assert';
import { unstringifyObject, processLog } from '../src/scrubber.js';

describe('JSON Un-stringifier and Scrubber', () => {
    it('should recursively unstringify nested JSON strings', () => {
        const input = {
            message: "Server error",
            details: "{\"user\": \"test@example.com\", \"meta\": \"{\\\"retry\\\": true}\"}"
        };
        const expected = {
            message: "Server error",
            details: {
                user: "test@example.com",
                meta: {
                    retry: true
                }
            }
        };
        assert.deepStrictEqual(unstringifyObject(input), expected);
    });

    it('should safely ignore invalid JSON strings', () => {
        const input = { message: "This is {not} valid JSON" };
        assert.deepStrictEqual(unstringifyObject(input), input);
    });

    it('should format and scrub stringified JSON logs in processLog', () => {
        // A typical Pino/Winston log where details are stringified
        const logLine = `{"level":"error","message":"DB connection failed","context":"{\\"password\\":\\"secret123\\",\\"host\\":\\"127.0.0.1\\"}"}`;

        const processed = processLog(logLine);

        // Should be parsed, unstringified, scrubbed, and pretty-printed
        assert.ok(processed.includes('"level": "error"'), 'Should contain level error');
        assert.ok(processed.includes('"password": "[REDACTED_HEURISTIC]"'), 'Should scrub heuristic password');
        assert.ok(processed.includes('"host": "[REDACTED_IPV4]"'), 'Should scrub IPV4');
        assert.ok(processed.split('\n').length > 3, 'Should format to multiple lines');
    });
});
