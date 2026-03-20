#!/usr/bin/env bash

set -e

echo "🩺 Installing LogDoctor..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed."
    echo "LogDoctor requires Node.js (v18+) and npm to run."
    echo "Please install Node.js from https://nodejs.org/ and try again."
    exit 1
fi

# Install the package globally
echo "📦 Downloading and installing via npm..."
npm install -g logdoctor-cli

echo "✅ LogDoctor installed successfully!"
echo "🚀 Run 'logdoctor --help' to get started."