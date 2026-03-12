# 🩺 LogDoctor

![GitHub stars](https://img.shields.io/github/stars/shivamshashank/logdoctor?style=social)
![GitHub forks](https://img.shields.io/github/forks/shivamshashank/logdoctor?style=social)
![GitHub issues](https://img.shields.io/github/issues/shivamshashank/logdoctor)
![License](https://img.shields.io/github/license/shivamshashank/logdoctor)

**LogDoctor** is an open-source AI tool that **diagnoses production logs and explains incidents instantly.**

💡 Paste logs → get root cause analysis.

🔗 **GitHub Repository:**
https://github.com/shivamshashank/logdoctor

---

# ✨ What LogDoctor Does

LogDoctor analyzes application logs using AI and produces a clear incident report including:

🔍 **Root cause analysis**
📊 **Incident timeline**
⚠️ **Error explanations**
🛠 **Suggested fixes**

Instead of manually scanning thousands of log lines, LogDoctor summarizes the problem in seconds.

---

# 🚀 Demo

Paste logs and get an explanation instantly.

Example logs:

```
[ERROR] database connection timeout
[WARN] redis connection failed
[ERROR] payment service unavailable
```

AI output:

```
Root Cause
Database service unreachable.

Impact
Payment service failed due to DB outage.

Suggested Fix
Restart database container and verify port connectivity.
```

---

# 🧠 Features

✅ AI-powered log analysis
✅ Root cause detection
✅ Incident timeline generation
✅ Error explanation engine
✅ Developer dashboard
✅ Example logs for testing

---

# 🧰 Tech Stack

## 🎨 Frontend

* Next.js
* Tailwind CSS
* shadcn UI

## ⚙️ Backend

* FastAPI
* PostgreSQL

## 🤖 AI

* OpenAI API

## 🔐 Authentication

* NextAuth with GitHub login

---

# 🆓 Free Tier

LogDoctor is **completely free for developers.**

Every user receives:

```
100 log analyses
```

There is **no premium plan.**

The goal of this project is to build a **simple AI debugging assistant for developers.**

---

# 🏗 Project Structure

```
logdoctor/

frontend/
backend/
examples/
docs/
README.md
```

---

# ⚙️ Run Locally

### Clone the repository

```
git clone https://github.com/shivamshashank/logdoctor
```

### Start backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

### Start frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# 📄 Example Logs

Try analyzing logs from:

```
examples/docker.log
examples/kubernetes.log
examples/node-error.log
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