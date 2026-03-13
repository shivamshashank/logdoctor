export default function About() {
  return (
    <section id="about" className="py-24 px-10 max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">
        What is LogDoctor?
      </h2>

      <p className="text-gray-400 leading-8">
        LogDoctor is an AI-powered debugging tool that analyzes application logs
        and identifies production incidents automatically.
      </p>

      <p className="text-gray-400 mt-4 leading-8">
        Instead of manually reading thousands of log lines, developers can paste
        logs into LogDoctor and receive an AI-generated report including root
        cause analysis, incident timeline, and suggested fixes.
      </p>

    </section>
  )
}