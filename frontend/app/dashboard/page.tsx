export default function Dashboard() {

  return (
    <div className="flex flex-col gap-10">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>
        <span className="text-sm text-zinc-400">LogDoctor AI Assistant</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 dark:bg-zinc-950 shadow-lg rounded-xl p-8 flex flex-col items-center border border-zinc-800">
          <span className="text-zinc-400 text-sm mb-2">Logs Analyzed</span>
          <span className="text-3xl font-bold text-blue-500">32 <span className="text-zinc-400">/ 100</span></span>
        </div>
        <div className="bg-zinc-900 dark:bg-zinc-950 shadow-lg rounded-xl p-8 flex flex-col items-center border border-zinc-800">
          <span className="text-zinc-400 text-sm mb-2">Errors Detected</span>
          <span className="text-3xl font-bold text-red-500">14</span>
        </div>
        <div className="bg-zinc-900 dark:bg-zinc-950 shadow-lg rounded-xl p-8 flex flex-col items-center border border-zinc-800">
          <span className="text-zinc-400 text-sm mb-2">Incidents</span>
          <span className="text-3xl font-bold text-yellow-400">5</span>
        </div>
      </div>

      {/* Recent Incidents Section */}
      <div className="bg-zinc-900 dark:bg-zinc-950 shadow-md rounded-xl p-8 border border-zinc-800">
        <h2 className="text-xl font-semibold mb-6 text-zinc-100">Recent Incidents</h2>
        <ul className="space-y-4">
          <li className="bg-zinc-800 rounded-lg px-4 py-3 text-zinc-200">Database connection timeout</li>
          <li className="bg-zinc-800 rounded-lg px-4 py-3 text-zinc-200">Redis service unavailable</li>
          <li className="bg-zinc-800 rounded-lg px-4 py-3 text-zinc-200">API 500 error spike</li>
        </ul>
      </div>
    </div>
  )
}