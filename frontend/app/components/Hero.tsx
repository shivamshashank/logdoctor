import Link from "next/link"

export default function Hero() {
  return (
    <section className="text-center py-32">

      <h1 className="text-5xl font-bold">
        AI Log Analyzer
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        Paste logs → instantly get root cause analysis.
      </p>

      <div className="mt-10 space-x-4">
        <Link
          href="/auth"
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Get Started
        </Link>

        <Link
          href="https://github.com/shivamshashank/logdoctor"
          className="border px-6 py-3 rounded"
        >
          ⭐ Star on GitHub
        </Link>
      </div>

    </section>
  )
}