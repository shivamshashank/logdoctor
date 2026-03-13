export default function Incidents() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Incidents
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Error</th>
            <th className="p-3 text-left">Severity</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="p-3">12:01</td>
            <td className="p-3">Database</td>
            <td className="p-3">Connection Timeout</td>
            <td className="p-3 text-red-500">Critical</td>
          </tr>

        </tbody>

      </table>

    </div>
  )
}