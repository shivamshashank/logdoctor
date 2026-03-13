import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}

      <aside className="w-64 border-r p-6 space-y-6">

        <h2 className="text-xl font-bold">🩺 LogDoctor</h2>

        <nav className="flex flex-col space-y-4 text-sm">

          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/upload">Upload Logs</Link>
          <Link href="/dashboard/incidents">Incidents</Link>
          <Link href="/dashboard/timeline">Timeline</Link>
          <Link href="/dashboard/errors">Error Explorer</Link>
          <Link href="/dashboard/reports">Reports</Link>
          <Link href="/dashboard/playground">Playground</Link>
          <Link href="/dashboard/settings">Settings</Link>

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )
}