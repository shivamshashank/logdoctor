// A map of regex patterns to scrub sensitive information
const SCRUB_PATTERNS = {
    // Matches email addresses
    EMAIL: [/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]'],

    // Matches IPv4 addresses
    IPV4: [/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[REDACTED_IPV4]'],

    // Matches IPv6 addresses (simplified)
    IPV6: [/(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/g, '[REDACTED_IPV6]'],

    // Matches common JWT patterns
    JWT: [/ey[a-zA-Z0-9-_]+\.ey[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+/g, '[REDACTED_JWT]'],

    // Matches AWS Access Key ID (AKIA...)
    AWS_ACCESS_KEY: [/AKIA[0-9A-Z]{16}/g, '[REDACTED_AWS_KEY]'],

    // Matches common credit card numbers (simple pattern, not Luhn-validated)
    CREDIT_CARD: [/\b(?:\d[ -]*?){13,16}\b/g, '[REDACTED_CREDIT_CARD]'],
};

/**
 * Scrubs a block of text for sensitive information (PII, secrets).
 * @param {string} text The input text to scrub.
 * @returns {string} The scrubbed text.
 */
export function scrub(text) {
    let scrubbedText = text;
    for (const key in SCRUB_PATTERNS) {
        const [regex, replacement] = SCRUB_PATTERNS[key];
        scrubbedText = scrubbedText.replace(regex, replacement);
    }
    return scrubbedText;
}