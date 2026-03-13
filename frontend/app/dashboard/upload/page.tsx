"use client"

import { useState } from "react"

export default function UploadLogs() {

  const [logs, setLogs] = useState("")

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Upload Logs
      </h1>

      <textarea
        placeholder="Paste logs here..."
        className="w-full h-60 border p-4 rounded"
        value={logs}
        onChange={(e) => setLogs(e.target.value)}
      />

      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
        Analyze Logs
      </button>

    </div>
  )
}