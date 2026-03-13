export default function Features() {
  return (
    <section className="py-24 px-10">

      <h2 className="text-3xl font-bold text-center mb-16">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="bg-slate-900 p-6 rounded">
          <h3 className="text-xl font-semibold mb-3">
            🔍 Root Cause Analysis
          </h3>
          <p className="text-gray-400">
            AI analyzes logs and explains the real cause of incidents.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded">
          <h3 className="text-xl font-semibold mb-3">
            📊 Incident Timeline
          </h3>
          <p className="text-gray-400">
            Understand exactly when failures started.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded">
          <h3 className="text-xl font-semibold mb-3">
            ⚠ Error Explanations
          </h3>
          <p className="text-gray-400">
            Click an error and get an AI explanation instantly.
          </p>
        </div>

      </div>

    </section>
  )
}