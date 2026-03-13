import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogDoctor",
  description: "Diagnose production logs and explain incidents instantly using AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        {/* Navbar */}
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              🩺 LogDoctor
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-6 text-sm">

              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="hover:text-blue-600 transition"
              >
                About
              </Link>

              <Link
                href="https://github.com/shivamshashank/logdoctor"
                className="hover:text-blue-600 transition"
                target="_blank"
              >
                GitHub
              </Link>

              <Link
                href="/auth"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>

            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex justify-between">

            <p>© {new Date().getFullYear()} LogDoctor</p>

            <div className="flex gap-6">
              <a
                href="https://github.com/shivamshashank/logdoctor"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-shashank-2b5766217/"
                target="_blank"
              >
                LinkedIn
              </a>

              <a href="mailto:shivamkumar872000@gmail.com">
                Contact
              </a>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}