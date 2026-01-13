import Link from "next/link";
import { Github, BookOpen, Terminal, ArrowRight } from "lucide-react";

/**
 * Docs Header Component
 * =====================
 * Navigation header for the documentation section
 */

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
            <Terminal className="h-4 w-4 text-emerald-400" />
          </div>
          <span className="font-mono font-bold text-white">AlgoSource</span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/docs"
            className="font-mono text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Docs
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/algosourceio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-white/60 hover:text-white" />
          </Link>
          <Link
            href="/docs/before-you-start"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500/20 border border-emerald-500/30 font-mono text-sm text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
