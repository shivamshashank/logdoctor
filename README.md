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

LogDoctor analyzes application logs using AI to produce clear incident reports directly in your terminal.
It focuses on three core pillars:
1. **Local Data Sanitization (Privacy First)**
2. **Multi-Model AI Diagnosis**
3. **Developer-Native Workflow**

---

#  Demo

*(Add a GIF here showing you piping a messy log file into the CLI and getting a formatted markdown output)*

![LogDoctor CLI Demo](docs/images/demo.gif)

---

# 🧠 Features

### 1. 🛡️ Local Data Sanitization (Privacy First)
Regular expressions automatically strip Emails, IP addresses, JWTs, and AWS Keys locally. `user@gmail.com` becomes `[REDACTED_EMAIL]`. Your sensitive data never leaves your machine.

### 2. 🤖 Multi-Model AI Diagnosis
Bring your own key (BYOK). Choose your preferred AI engine—**OpenAI**, **Gemini**, or **Claude**—to pinpoint the root cause of the error and generate a suggested code fix.

### 3. 💻 Developer-Native Workflow
No context switching. Pipe messy, large log files directly into the CLI (e.g., `cat error.log | logdoctor analyze`) and get color-coded, formatted explanations directly in the terminal where you debug.

### 4. 📴 100% Offline Mode (Ollama Support)
For absolute zero-trust environments, LogDoctor integrates directly with **Ollama**. Analyze logs and generate fixes using local LLMs (like `llama3` or `mistral`) without a single byte of data leaving your machine.

### 5. 📎 Context-Aware Debugging
Provide source code files alongside your logs using the `-c` flag. LogDoctor will inject your codebase context into the prompt, resulting in hyper-accurate, project-specific code fixes.

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

# 🚀 Quick Start

```bash
# Configure your AI provider and API key
logdoctor config

# Analyze a log file
logdoctor analyze error.log

# Or pipe a file
cat error.log | logdoctor analyze

# Analyze with custom instructions and save output to a file
logdoctor analyze error.log -p "Focus on database connection errors" -o report.md

# Attach source code context to help the AI fix the error
logdoctor analyze error.log -c src/database.js

# Clear your stored configuration (log out)
logdoctor logout
```

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

    # Clear your stored configuration (log out)
    logdoctor logout

    # Analyze a log file
    logdoctor analyze examples/node-error.log

    # Or pipe a file to the command
    cat examples/pii-data.txt | logdoctor analyze

    # Analyze with custom instructions and save the output
    logdoctor analyze examples/node-error.log --prompt "Explain it to a junior dev" --output report.md
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