import test from 'node:test';
import assert from 'node:assert';
import { analyzeWithAI } from '../src/services/ai-service.js';

test('AI Service - Rejects unsupported providers gracefully', async () => {
    const mockConfig = { provider: 'unknown-future-ai' };

    try {
        await analyzeWithAI(mockConfig, 'System Prompt', 'User Prompt');
    } catch (error) {
        assert.match(error.message, /Integration for unknown-future-ai is not yet fully implemented/, 'Should throw explicitly on unsupported integrations');
    }
});