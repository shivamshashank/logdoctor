# 🩺 LogDoctor

![GitHub stars](https://img.shields.io/github/stars/shivamshashank/logdoctor?style=social)
![GitHub forks](https://img.shields.io/github/forks/shivamshashank/logdoctor?style=social)
![GitHub issues](https://img.shields.io/github/issues/shivamshashank/logdoctor)
![License](https://img.shields.io/github/license/shivamshashank/logdoctor)

**LogDoctor** is an open-source, privacy-first CLI tool that **diagnoses production logs and explains incidents instantly right in your terminal.**

💡 Pipe logs → Scrub PII Locally → Get Root Cause Analysis.

🔗 **GitHub Repository:**
https://github.com/shivamshashank/logdoctor

---

# ✨ What LogDoctor Does

LogDoctor analyzes application logs using AI to produce clear incident reports. Unlike web-based AI wrappers, LogDoctor runs securely in your terminal and **locally scrubs sensitive data (PII, secrets, API keys)** before anything is sent to the LLM. 

*   🔍 **Root cause analysis**
*   🛡️ **Local PII & Secrets Scrubbing**
*   🤖 **Bring Your Own Key (OpenAI, Gemini, Claude)**
*   ⚠️ **Error explanations**
*   🛠️ **Suggested code fixes**

---

# 🚀 Demo

*(Add a GIF here showing you piping a messy log file into the CLI and getting a formatted markdown output)*

![LogDoctor CLI Demo](docs/images/demo.gif)

---

# 🧠 Features

*   **🔒 Local Data Sanitization:** Regular expressions automatically strip Emails, IP addresses, JWTs, and AWS Keys locally. `user@gmail.com` becomes `[REDACTED_EMAIL]`.
*   **🔀 Multi-Model Support:** Choose your preferred AI engine: **OpenAI**, **Gemini**, or **Claude**.
*   **🌍 Language Selection:** Choose the output language for explanations (e.g., English, Spanish, French) and specify your codebase language (Node.js, Python, Go) for tailored code fixes.
*   **⚡ Blazing Fast Streaming:** Streams large log files efficiently in Node.js without crashing your terminal memory.
*   **💻 Developer-Native Workflow:** No context switching. Get your fixes directly in the terminal where you debug.

---

# 🧰 Tech Stack

*   **Language:** Node.js / TypeScript
*   **CLI Framework:** `commander`
*   **Terminal UI:** `chalk` (colors), `ora` (spinners), `marked-terminal` (Markdown rendering)
*   **AI SDKs:** `@google/generative-ai`, `openai`, `@anthropic-ai/sdk`

---

# ⚙️ Installation

<details>
<summary>Install LogDoctor (Recommended)</summary>

Requires [Node.js v18+](https://nodejs.org/).

**macOS / Linux**
```bash
npm install -g logdoctor-cli
```

**Windows (PowerShell)**
```powershell
npm install -g logdoctor-cli
```

</details>

---

# ⚙️ Run Locally (for Development)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shivamshashank/logdoctor
    cd logdoctor
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Link the CLI:**
    This command makes `logdoctor` available globally on your machine, pointing to your local source code.
    ```bash
    npm link
    ```

4.  **Run the tool:**
    Now you can run the `logdoctor` command from any directory. Any changes you make to the code will be reflected immediately.
    ```bash
    # Configure your API key
    logdoctor config

    # Analyze a log file
    logdoctor analyze examples/node-error.log

    # Or pipe a file to the command
    cat examples/pii-data.txt | logdoctor analyze
    ```

---

# 🤝 Contributing

Contributions are welcome.

You can help by:

• improving log parsers
• adding new integrations
• improving AI prompts
• fixing bugs

Please open **issues or pull requests**.

---

# 👨‍💻 Author

**Shivam Shashank**

📧 Email: [shivamkumar872000@gmail.com](mailto:shivamkumar872000@gmail.com)

🔗 LinkedIn:
https://www.linkedin.com/in/shivam-shashank-2b5766217/

---

# ⭐ Support the Project

If you find **LogDoctor** useful, please **give the repository a star ⭐ on GitHub.**

It helps the project reach more developers.

👉 https://github.com/shivamshashank/logdoctor

---