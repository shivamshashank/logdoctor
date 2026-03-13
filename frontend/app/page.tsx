import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-32">

      {/* HERO SECTION */}

      <section className="text-center pt-20">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Diagnose Production Logs <br /> with AI
        </h1>

        <p className="mt-6 text-lg text-zinc-500 max-w-2xl mx-auto">
          LogDoctor analyzes application logs and explains incidents instantly.
          Paste logs → get root cause analysis, timeline, and suggested fixes.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <Link
            href="/auth"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            href="https://github.com/shivamshashank/logdoctor"
            target="_blank"
            className="border px-6 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            ⭐ Star on GitHub
          </Link>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          What is LogDoctor?
        </h2>

        <p className="mt-6 text-zinc-500 leading-8">
          LogDoctor is an AI-powered debugging tool designed for developers and
          DevOps engineers. Instead of manually scanning thousands of log lines,
          LogDoctor analyzes logs automatically and generates an incident report
          explaining the root cause, timeline, and recommended fixes.
        </p>

        <p className="mt-4 text-zinc-500 leading-8">
          It works with logs from Docker, Kubernetes, Node.js, Python, and many
          other systems.
        </p>

      </section>

      {/* FEATURES */}

      <section>

        <h2 className="text-3xl font-bold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              🔍 Root Cause Detection
            </h3>

            <p className="text-zinc-500">
              AI analyzes logs and identifies the real cause of incidents
              instantly.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              📊 Incident Timeline
            </h3>

            <p className="text-zinc-500">
              Understand exactly when errors started and how they propagated
              through your system.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              ⚠ Error Explanation
            </h3>

            <p className="text-zinc-500">
              Click any error message and get an AI explanation with possible
              fixes.
            </p>
          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}

      <section>

        <h2 className="text-3xl font-bold text-center mb-16">
          Dashboard Preview
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h3 className="font-semibold mb-3">
              Log Upload
            </h3>

            <p className="text-sm text-zinc-500">
              Paste logs or upload files to start analysis.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h3 className="font-semibold mb-3">
              Incident Report
            </h3>

            <p className="text-sm text-zinc-500">
              AI generates a structured report including root cause and fixes.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h3 className="font-semibold mb-3">
              Error Explorer
            </h3>

            <p className="text-sm text-zinc-500">
              Explore detected errors and severity levels.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h3 className="font-semibold mb-3">
              Incident Timeline
            </h3>

            <p className="text-sm text-zinc-500">
              Visual timeline of system failures and anomalies.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="text-center">

        <h2 className="text-3xl font-bold">
          Start Debugging Smarter
        </h2>

        <p className="text-zinc-500 mt-4">
          Join developers using AI to analyze production logs faster.
        </p>

        <div className="mt-8 flex justify-center gap-6">

          <Link
            href="/auth"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Try LogDoctor
          </Link>

          <Link
            href="https://github.com/shivamshashank/logdoctor"
            target="_blank"
            className="border px-6 py-3 rounded-lg"
          >
            ⭐ Star on GitHub
          </Link>

        </div>

      </section>

    </div>
  )
}