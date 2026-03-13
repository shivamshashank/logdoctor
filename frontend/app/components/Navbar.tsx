import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-zinc-950 border-b border-zinc-800 shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-extrabold text-blue-500">🩺</span>
        <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">LogDoctor</h1>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/#about" className="text-zinc-300 hover:text-blue-400 transition font-medium">About</Link>
        <Link href="https://github.com/shivamshashank/logdoctor" target="_blank" className="text-zinc-300 hover:text-blue-400 transition font-medium">GitHub</Link>
        <Link href="/auth" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Login</Link>
      </div>
    </nav>
  )
}