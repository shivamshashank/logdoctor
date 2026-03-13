"use client"

import { signIn } from "next-auth/react"
import { Github } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"

export default function AuthPage() {

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="w-full max-w-md border rounded-xl p-10 bg-white dark:bg-zinc-900">

        {/* Title */}

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome to LogDoctor
        </h1>

        <p className="text-center text-zinc-500 mb-8">
          Login or create an account to start analyzing logs.
        </p>

        {/* Google Login */}

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex items-center justify-center gap-3 w-full border py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* GitHub Login */}

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="flex items-center justify-center gap-3 w-full border py-3 rounded-lg mt-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          <Github size={20} />
          Continue with GitHub
        </button>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
          <span className="px-3 text-sm text-zinc-500">or</span>
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>

        {/* Email info */}

        <p className="text-sm text-center text-zinc-500">
          By continuing, you agree to LogDoctor’s terms of service.
        </p>

        {/* Back home */}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  )
}