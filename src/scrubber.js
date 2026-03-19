// ============================================================================
// LOGDOCTOR ENTERPRISE SECRET SCANNER
// ============================================================================

export const SECRET_PATTERNS = {
    // ==========================================
    // EMAIL / PII
    // ==========================================
    EMAIL: [/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}\b/g, '[REDACTED_EMAIL]'],
    PHONE: [/\b\+?[1-9][0-9]{7,14}\b/g, '[REDACTED_PHONE]'],
    US_SSN: [/\b(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}\b/g, '[REDACTED_SSN]'],
    UK_NINO: [/\b[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z]\s*[0-9]{2}\s*[0-9]{2}\s*[0-9]{2}\s*[A-D]\b/ig, '[REDACTED_UK_NINO]'],
    CANADA_SIN: [/\b[1-9]\d{2}[-\s]?\d{3}[-\s]?\d{3}\b/g, '[REDACTED_CANADA_SIN]'],
    IPV4: [/\b((25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\b/g, '[REDACTED_IPV4]'],
    IPV6: [/\b([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b/g, '[REDACTED_IPV6]'],
    MAC_ADDRESS: [/\b([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})\b/g, '[REDACTED_MAC]'],
    DOB_YYYY_MM_DD: [/\b(?:19|20)\d\d[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])\b/g, '[REDACTED_DOB]'],

    // ==========================================
    // CREDIT CARDS & FINANCIAL
    // ==========================================
    VISA: [/\b4[0-9]{12}(?:[0-9]{3})?\b/g, '[REDACTED_CC]'],
    MASTERCARD: [/\b(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}\b/g, '[REDACTED_CC]'],
    AMEX: [/\b3[47][0-9]{13}\b/g, '[REDACTED_CC]'],
    DISCOVER: [/\b6(?:011|5[0-9]{2})[0-9]{12}\b/g, '[REDACTED_CC]'],
    DINERS_CLUB: [/\b3(?:0[0-5]|[68][0-9])[0-9]{11}\b/g, '[REDACTED_CC]'],
    JCB: [/\b(?:2131|1800|35\d{3})\d{11}\b/g, '[REDACTED_CC]'],
    IBAN: [/\b[A-Z]{2}\d{2}\s?(?:\w{4}\s?){2,7}\w{1,4}\b/g, '[REDACTED_IBAN]'],
    PAYPAL_BRAINTREE_ACCESS_TOKEN: [/\baccess_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}\b/g, '[REDACTED_BRAINTREE_TOKEN]'],
    PLAID_CLIENT_ID: [/\bclient_id:[a-f0-9]{24}\b/g, '[REDACTED_PLAID_CLIENT_ID]'],
    PLAID_SECRET: [/\bsecret:[a-f0-9]{24}\b/g, '[REDACTED_PLAID_SECRET]'],
    SQUARE_ACCESS_TOKEN: [/\bsq0atp-[0-9A-Za-z\-_]{22}\b/g, '[REDACTED_SQUARE_TOKEN]'],
    SQUARE_SECRET: [/\bsq0csp-[0-9A-Za-z\-_]{43}\b/g, '[REDACTED_SQUARE_SECRET]'],
    STRIPE_STANDARD_KEY: [/\b(?:sk|rk)_(?:test|live)_[0-9a-zA-Z]{24}\b/g, '[REDACTED_STRIPE_KEY]'],
    STRIPE_RESTRICTED_KEY: [/\brk_(?:test|live)_[0-9a-zA-Z]{24,99}\b/g, '[REDACTED_STRIPE_RESTRICTED]'],

    // ==========================================
    // CRYPTO
    // ==========================================
    BITCOIN: [/\b(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}\b/g, '[REDACTED_BTC]'],
    BTC_BECH32: [/\bbc1[a-z0-9]{39,59}\b/g, '[REDACTED_BTC]'],
    ETHEREUM: [/\b0x[a-fA-F0-9]{40}\b/g, '[REDACTED_ETH]'],
    LITECOIN: [/\b[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}\b/g, '[REDACTED_LTC]'],
    DOGECOIN: [/\bD{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}\b/g, '[REDACTED_DOGE]'],
    MONERO: [/\b4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}\b/g, '[REDACTED_XMR]'],
    RIPPLE: [/\br[0-9a-zA-Z]{24,34}\b/g, '[REDACTED_XRP]'],

    // ==========================================
    // CLOUD PROVIDERS
    // ==========================================
    AWS_ACCESS_KEY_ID: [/\b(AKIA|A3T|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}\b/g, '[REDACTED_AWS_ACCESS]'],
    AWS_MWS_KEY: [/\bamzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/g, '[REDACTED_AWS_MWS]'],
    AWS_SESSION_TOKEN: [/\b[A-Za-z0-9/+=]{16,}(?:[A-Za-z0-9/+=]{4})*(?:==)?\b/g, '[REDACTED_AWS_SESSION]'], // Often covered by entropy, but explicit pattern helps
    GOOGLE_API: [/\bAIza[0-9A-Za-z\-_]{35}\b/g, '[REDACTED_GCP_KEY]'],
    GOOGLE_OAUTH_TOKEN: [/\bya29\.[0-9A-Za-z_-]+\b/g, '[REDACTED_GOOGLE_OAUTH]'],
    GOOGLE_GCP_SERVICE_ACCOUNT: [/\b[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.iam\.gserviceaccount\.com\b/g, '[REDACTED_GCP_SA]'],
    AZURE_KEY: [/\b[0-9a-zA-Z]{32,64}\b/g, '[REDACTED_AZURE_KEY]'],
    DIGITALOCEAN_PAT: [/\bdop_v1_[a-f0-9]{64}\b/g, '[REDACTED_DIGITALOCEAN_TOKEN]'],
    ALIBABA_ACCESS_KEY: [/\bLTAI[a-zA-Z0-9]{16}\b/g, '[REDACTED_ALIBABA_KEY]'],
    TENCENT_SECRET_KEY: [/\bAKID[a-zA-Z0-9]{32}\b/g, '[REDACTED_TENCENT_KEY]'],
    IBM_CLOUD_API_KEY: [/\b[a-zA-Z0-9_-]{44}\b/g, '[REDACTED_IBM_CLOUD_KEY]'],
    ORACLE_CLOUD_TOKEN: [/\bocid1\.[a-z0-9_]+\.[a-z0-9_]+\.[a-z0-9_]+\.[a-z0-9_]+\b/g, '[REDACTED_ORACLE_TOKEN]'],

    // ==========================================
    // AI PROVIDERS
    // ==========================================
    OPENAI_KEY: [/\bsk-[A-Za-z0-9]{48}\b/g, '[REDACTED_OPENAI_KEY]'],
    OPENAI_PROJECT_KEY: [/\bsk-proj-[A-Za-z0-9_-]{48,}\b/g, '[REDACTED_OPENAI_PROJECT_KEY]'],
    ANTHROPIC_KEY: [/\bsk-ant-[A-Za-z0-9]{48,}\b/g, '[REDACTED_ANTHROPIC]'],
    COHERE_KEY: [/\bco-[A-Za-z0-9]{40}\b/g, '[REDACTED_COHERE]'],
    HUGGINGFACE_TOKEN: [/\bhf_[a-zA-Z0-9]{34}\b/g, '[REDACTED_HUGGINGFACE_TOKEN]'],
    REPLICATE_API_TOKEN: [/\br8_[a-zA-Z0-9]{37}\b/g, '[REDACTED_REPLICATE_TOKEN]'],
    MISTRAL_API_KEY: [/\b[a-zA-Z0-9]{32}\b/g, '[REDACTED_MISTRAL_KEY]'],
    PINECONE_API_KEY: [/\b[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\b/g, '[REDACTED_PINECONE_KEY]'],

    // ==========================================
    // GIT TOKENS
    // ==========================================
    GITHUB_PAT: [/\bghp_[A-Za-z0-9]{36}\b/g, '[REDACTED_GITHUB_PAT]'],
    GITHUB_OAUTH: [/\bgho_[A-Za-z0-9]{36}\b/g, '[REDACTED_GITHUB_OAUTH]'],
    GITHUB_APP: [/\bghu_[A-Za-z0-9]{36}\b/g, '[REDACTED_GITHUB_APP]'],
    GITHUB_REFRESH: [/\bghr_[A-Za-z0-9]{36}\b/g, '[REDACTED_GITHUB_REFRESH]'],
    GITHUB_FINE_GRAINED: [/\bgithub_pat_[A-Za-z0-9_]{80,}\b/g, '[REDACTED_GITHUB_FINE_GRAINED]'],
    GITLAB_PAT: [/\bglpat-[A-Za-z0-9_-]{20}\b/g, '[REDACTED_GITLAB_PAT]'],
    GITLAB_RUNNER: [/\bGR1348941[a-zA-Z0-9_-]{20}\b/g, '[REDACTED_GITLAB_RUNNER]'],
    BITBUCKET_CLIENT_ID: [/\b[a-zA-Z0-9]{32}\b/g, '[REDACTED_BITBUCKET_ID]'],

    // ==========================================
    // DEVOPS & INFRASTRUCTURE
    // ==========================================
    DOCKER_AUTH: [/auths.*"auth":\s*"[^"]+"/g, '[REDACTED_DOCKER_AUTH]'],
    KUBERNETES_TOKEN: [/\beyJhbGciOiJSUzI1NiIsImtpZCI6/g, '[REDACTED_K8S_TOKEN]'],
    TERRAFORM_SECRET: [/\bterraform_[A-Za-z0-9]{16,}\b/g, '[REDACTED_TF_SECRET]'],
    NPM_TOKEN: [/\b(npm_[a-zA-Z0-9]{36})\b/g, '[REDACTED_NPM_TOKEN]'],
    TRAVIS_CI_TOKEN: [/\b[a-zA-Z0-9]{22}\b/g, '[REDACTED_TRAVIS_TOKEN]'],
    CIRCLE_CI_TOKEN: [/\b[a-zA-Z0-9]{40}\b/g, '[REDACTED_CIRCLE_TOKEN]'],
    HEROKU_API_KEY: [/\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b/g, '[REDACTED_HEROKU_KEY]'],
    SONARQUBE_TOKEN: [/\bsqu_[0-9a-f]{40}\b/g, '[REDACTED_SONARQUBE_TOKEN]'],
    SNYK_TOKEN: [/\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b/g, '[REDACTED_SNYK_TOKEN]'],

    // ==========================================
    // SOCIAL, MESSAGING & COMMUNICATIONS
    // ==========================================
    SLACK_BOT_TOKEN: [/\bxoxb-[0-9]{10,13}-[0-9]{10,13}-[a-zA-Z0-9]{24}\b/g, '[REDACTED_SLACK_BOT_TOKEN]'],
    SLACK_USER_TOKEN: [/\bxoxp-[0-9]{10,13}-[0-9]{10,13}-[0-9]{10,13}-[a-zA-Z0-9]{32}\b/g, '[REDACTED_SLACK_USER_TOKEN]'],
    SLACK_APP_TOKEN: [/\bxapp-[1-9][0-9]{10,13}-[0-9]{10,13}-[a-zA-Z0-9]{64}\b/g, '[REDACTED_SLACK_APP_TOKEN]'],
    SLACK_WEBHOOK: [/hooks\.slack\.com\/services\/T[a-zA-Z0-9]{8,10}\/B[a-zA-Z0-9]{8,10}\/[a-zA-Z0-9]{24}/g, '[REDACTED_SLACK_WEBHOOK]'],
    DISCORD_BOT_TOKEN: [/\b[MNO][a-zA-Z0-9_-]{23,25}\.[a-zA-Z0-9_-]{6}\.[a-zA-Z0-9_-]{27,39}\b/g, '[REDACTED_DISCORD_TOKEN]'],
    DISCORD_WEBHOOK: [/discord\.com\/api\/webhooks\/[0-9]{17,19}\/[a-zA-Z0-9_-]{68}/g, '[REDACTED_DISCORD_WEBHOOK]'],
    TELEGRAM_BOT_TOKEN: [/\b[0-9]{9,10}:[a-zA-Z0-9_-]{35}\b/g, '[REDACTED_TELEGRAM_TOKEN]'],
    TWILIO_API_KEY: [/\bSK[0-9a-fA-F]{32}\b/g, '[REDACTED_TWILIO_KEY]'],
    TWILIO_ACCOUNT_SID: [/\bAC[a-zA-Z0-9_-]{32}\b/g, '[REDACTED_TWILIO_SID]'],
    SENDGRID_API_KEY: [/\bSG\.[a-zA-Z0-9_-]{22}\.[a-zA-Z0-9_-]{43}\b/g, '[REDACTED_SENDGRID_KEY]'],
    MAILGUN_API_KEY: [/\bkey-[0-9a-zA-Z]{32}\b/g, '[REDACTED_MAILGUN_KEY]'],
    MAILCHIMP_API_KEY: [/\b[0-9a-f]{32}-us[0-9]{1,2}\b/g, '[REDACTED_MAILCHIMP_KEY]'],
    POSTMARK_API_TOKEN: [/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/g, '[REDACTED_POSTMARK_TOKEN]'],
    WHATSAPP_API_TOKEN: [/\bEA[A-Za-z0-9]{100,}\b/g, '[REDACTED_WHATSAPP_TOKEN]'],

    // ==========================================
    // SAAS, E-COMMERCE & BUSINESS TOOLS
    // ==========================================
    SHOPIFY_ACCESS_TOKEN: [/\bshpat_[a-fA-F0-9]{32}\b/g, '[REDACTED_SHOPIFY_TOKEN]'],
    SHOPIFY_CUSTOM_APP: [/\bshpca_[a-fA-F0-9]{32}\b/g, '[REDACTED_SHOPIFY_CUSTOM]'],
    HUBSPOT_API_KEY: [/\bpat-(?:na1|eu1)-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\b/g, '[REDACTED_HUBSPOT_KEY]'],
    FIGMA_PAT: [/\bfigd_[a-zA-Z0-9\-_]{43}\b/g, '[REDACTED_FIGMA_PAT]'],
    NOTION_API_KEY: [/\bsecret_[a-zA-Z0-9]{43}\b/g, '[REDACTED_NOTION_KEY]'],
    AIRTABLE_API_KEY: [/\bkey[a-zA-Z0-9]{14}\b/g, '[REDACTED_AIRTABLE_KEY]'],
    AIRTABLE_PAT: [/\bpat[a-zA-Z0-9]{14}\.[a-zA-Z0-9]{64}\b/g, '[REDACTED_AIRTABLE_PAT]'],
    ZENDESK_OAUTH_TOKEN: [/\b[a-zA-Z0-9]{64}\b/g, '[REDACTED_ZENDESK_TOKEN]'],
    JIRA_API_TOKEN: [/\b[a-zA-Z0-9]{24}\b/g, '[REDACTED_JIRA_TOKEN]'],
    ALGOLIA_API_KEY: [/\b[a-f0-9]{32}\b/g, '[REDACTED_ALGOLIA_KEY]'],
    CONTENTFUL_DELIVERY_TOKEN: [/\b[a-zA-Z0-9\-_]{43}\b/g, '[REDACTED_CONTENTFUL_TOKEN]'],

    // ==========================================
    // OBSERVABILITY & ANALYTICS
    // ==========================================
    DATADOG_ACCESS_TOKEN: [/\b[a-fA-F0-9]{32}\b/g, '[REDACTED_DATADOG_TOKEN]'],
    DATADOG_APP_KEY: [/\b[a-fA-F0-9]{40}\b/g, '[REDACTED_DATADOG_APP_KEY]'],
    SPLUNK_API_TOKEN: [/\b[a-zA-Z0-9\-_]{254}\b/g, '[REDACTED_SPLUNK_TOKEN]'],
    NEW_RELIC_LICENSE_KEY: [/\b[A-Za-z0-9]{40}NRAL\b/g, '[REDACTED_NEW_RELIC_KEY]'],
    NEW_RELIC_REST_API: [/\bNRRA-[a-fA-F0-9]{42}\b/g, '[REDACTED_NEW_RELIC_API]'],
    SENTRY_TOKEN: [/\bsntrys_[a-zA-Z0-9\-_]{64}\b/g, '[REDACTED_SENTRY_TOKEN]'],

    // ==========================================
    // DATABASES
    // ==========================================
    POSTGRES_URI: [/postgres:\/\/[^:]+:[^@]+@[^\/]+/g, 'postgres://[REDACTED]@[REDACTED_HOST]'],
    MYSQL_URI: [/mysql:\/\/[^:]+:[^@]+@[^\/]+/g, 'mysql://[REDACTED]@[REDACTED_HOST]'],
    MONGO_URI: [/mongodb:\/\/[^:]+:[^@]+@[^\/]+/g, 'mongodb://[REDACTED]@[REDACTED_HOST]'],
    MONGO_SRV_URI: [/mongodb\+srv:\/\/[^:]+:[^@]+@[^\/]+/g, 'mongodb+srv://[REDACTED]@[REDACTED_HOST]'],
    REDIS_URI: [/redis:\/\/[^:]+:[^@]+@[^\/]+/g, 'redis://[REDACTED]@[REDACTED_HOST]'],
    FIREBASE_URL: [/.*firebaseio\.com/g, '[REDACTED_FIREBASE_URL]'],
    SUPABASE_URL: [/\bhttps:\/\/[a-z0-9]{20}\.supabase\.co\b/g, '[REDACTED_SUPABASE_URL]'],
    PLANETSCALE_PASSWORD: [/\bpscale_pw_[a-zA-Z0-9\-_]{43}\b/g, '[REDACTED_PLANETSCALE_PW]'],

    // ==========================================
    // PRIVATE KEYS, CERTS & AUTH
    // ==========================================
    PRIVATE_KEY: [/-----BEGIN .*?PRIVATE KEY-----[\s\S]*?-----END .*?PRIVATE KEY-----/g, '[REDACTED_PRIVATE_KEY]'],
    PGP_KEY: [/-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*?-----END PGP PRIVATE KEY BLOCK-----/g, '[REDACTED_PGP_KEY]'],
    SSH_OPENSSH_PRIVATE_KEY: [/-----BEGIN OPENSSH PRIVATE KEY-----[\s\S]*?-----END OPENSSH PRIVATE KEY-----/g, '[REDACTED_SSH_KEY]'],
    SSH_RSA_PRIVATE_KEY: [/-----BEGIN RSA PRIVATE KEY-----[\s\S]*?-----END RSA PRIVATE KEY-----/g, '[REDACTED_RSA_KEY]'],
    JWT: [/ey[a-zA-Z0-9-_]+\.ey[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+/g, '[REDACTED_JWT]'],
    BEARER_TOKEN: [/(?:Bearer|bearer)\s+[a-zA-Z0-9\-\._~\+\/]+=*/g, 'Bearer [REDACTED_TOKEN]'],
    URL_CREDENTIALS: [/(https?:\/\/)([^:\/\s]+:[^@\/\s]+)(@)/g, '$1[REDACTED_CREDENTIALS]$3'],
    BASIC_AUTH: [/(?:Basic|basic)\s+[a-zA-Z0-9\-\._~\+\/]+=*/g, 'Basic [REDACTED_BASIC_AUTH]'],
    OAUTH_ACCESS_TOKEN: [/\bya29\.[a-zA-Z0-9_-]{10,}\b/g, '[REDACTED_OAUTH_TOKEN]'],
    AUTH0_CLIENT_SECRET: [/\b[A-Za-z0-9\-_]{64}\b/g, '[REDACTED_AUTH0_SECRET]'],
};

// ----------------------------------------------------------------------------
// 1. Core Regex Scrubber
// ----------------------------------------------------------------------------
export function scrubText(text) {
    let result = text;
    for (const key in SECRET_PATTERNS) {
        const [regex, replacement] = SECRET_PATTERNS[key];
        result = result.replace(regex, replacement);
    }
    return result;
}

// ----------------------------------------------------------------------------
// 2. Entropy Secret Detector (Catches what regex misses)
// ----------------------------------------------------------------------------
function shannonEntropy(str) {
    const map = {};
    for (const c of str) map[c] = (map[c] || 0) + 1;
    let entropy = 0;
    for (const c in map) {
        const p = map[c] / str.length;
        entropy -= p * Math.log2(p);
    }
    return entropy;
}

export function detectHighEntropy(text) {
    // Finds long base64/hex-like strings
    const tokens = text.match(/[A-Za-z0-9\/+=]{20,}/g) || [];
    return tokens.filter(t => shannonEntropy(t) > 4.5);
}

// ----------------------------------------------------------------------------
// 3. Structured JSON Scrubber (For nested log objects)
// ----------------------------------------------------------------------------
export function scrubObject(obj) {
    if (typeof obj === "string") return scrubText(obj);
    if (Array.isArray(obj)) return obj.map(scrubObject);
    if (typeof obj === "object" && obj !== null) {
        const result = {};
        for (const k in obj) {
            result[k] = scrubObject(obj[k]);
        }
        return result;
    }
    return obj;
}

// ----------------------------------------------------------------------------
// 4. AI Prompt Scrubber (Heuristic fallback)
// ----------------------------------------------------------------------------
const HEURISTIC_KEYWORDS = 'password|passwd|pwd|secret|api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|session[_-]?id|bearer[_-]?token|private[_-]?key|config[_-]?key';

export function scrubPrompt(prompt) {
    const cleaned = scrubText(prompt);

    // 1. Catch assignment style (e.g. password=abc, secret: 123)
    let heuristicCleaned = cleaned.replace(new RegExp(`(${HEURISTIC_KEYWORDS})\\s*[:=]\\s*["']?[^\\s"',}]+["']?`, 'gi'), '$1=[REDACTED_HEURISTIC]');

    // 2. Catch JSON/Object style (e.g. "password": "abc")
    heuristicCleaned = heuristicCleaned.replace(new RegExp(`["']?(${HEURISTIC_KEYWORDS})["']?\\s*:\\s*["'][^"']+["']`, 'gi'), '"$1": "[REDACTED_HEURISTIC]"');

    return heuristicCleaned;
}

// ----------------------------------------------------------------------------
// 4.5 JSON Un-stringifier (Parses nested stringified JSON logs)
// ----------------------------------------------------------------------------
export function unstringifyObject(obj) {
    if (typeof obj === 'string') {
        try {
            const parsed = JSON.parse(obj);
            if (typeof parsed === 'object' && parsed !== null) {
                return unstringifyObject(parsed);
            }
        } catch (e) {
            // Not valid JSON, return original string
        }
        return obj;
    }
    if (Array.isArray(obj)) return obj.map(unstringifyObject);
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const k in obj) {
            result[k] = unstringifyObject(obj[k]);
        }
        return result;
    }
    return obj;
}

// ----------------------------------------------------------------------------
// 5. Final Processing Pipeline 
// ----------------------------------------------------------------------------
export function processLog(log) {
    // Step 1: Detect, un-stringify, and format JSON logs line by line
    const lines = log.split('\n');
    const processedLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            try {
                let parsed = JSON.parse(trimmed);
                parsed = unstringifyObject(parsed);
                parsed = scrubObject(parsed); // Scrub structured data before formatting
                return JSON.stringify(parsed, null, 2);
            } catch (e) {
                return line;
            }
        }
        return line;
    });
    let processedLog = processedLines.join('\n');

    // Step 2: Known pattern regex scrub
    let clean = scrubText(processedLog);

    // Step 3: High Entropy (unknown token) detection
    const secrets = detectHighEntropy(clean);
    const uniqueSecrets = [...new Set(secrets)]; // deduplicate
    for (const s of uniqueSecrets) {
        // Using split.join safely handles any errant regex chars in the token
        clean = clean.split(s).join('[REDACTED_ENTROPY_SECRET]');
    }

    // Step 4: Heuristic Prompt Scrubbing
    clean = scrubPrompt(clean);

    return clean;
}