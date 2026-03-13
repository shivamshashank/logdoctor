export default function Timeline() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Incident Timeline
      </h1>

      <ul className="space-y-4">

        <li>12:01 — Database latency spike</li>
        <li>12:03 — Redis connection failed</li>
        <li>12:04 — API returns 500 errors</li>

      </ul>

    </div>
  )
}