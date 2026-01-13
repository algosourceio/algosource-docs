import Link from "next/link";
import { ArrowRight, BookOpen, GitBranch, Users, Rocket, Star, Zap } from "lucide-react";
import { getAllSections } from "@/lib/docs";

/**
 * Docs Landing Page
 * =================
 * Overview of all documentation sections with quick links
 */

export default function DocsPage() {
  const sections = getAllSections();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-sm text-emerald-400">
            Open Source Contributor Guide
          </span>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
          Learn to contribute
          <br />
          <span className="text-white/40">to open source</span>
        </h1>
        <p className="font-mono text-lg text-white/60 max-w-2xl mb-8">
          A comprehensive guide to becoming an effective open source contributor.
          From your first commit to becoming a maintainer.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/before-you-start"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 font-mono text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/getting-started"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 font-mono text-sm text-white hover:bg-white/5 transition-colors"
          >
            Quick Start
          </Link>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid gap-4 sm:grid-cols-3 mb-16">
        <div className="p-5 rounded-lg border border-white/10 bg-white/5">
          <BookOpen className="h-6 w-6 text-emerald-400 mb-3" />
          <h3 className="font-mono font-medium text-white mb-2">
            Comprehensive
          </h3>
          <p className="font-mono text-sm text-white/50">
            From basics to advanced topics, covering everything you need.
          </p>
        </div>
        <div className="p-5 rounded-lg border border-white/10 bg-white/5">
          <Zap className="h-6 w-6 text-amber-400 mb-3" />
          <h3 className="font-mono font-medium text-white mb-2">
            Practical
          </h3>
          <p className="font-mono text-sm text-white/50">
            Real-world examples and actionable advice you can use today.
          </p>
        </div>
        <div className="p-5 rounded-lg border border-white/10 bg-white/5">
          <Users className="h-6 w-6 text-blue-400 mb-3" />
          <h3 className="font-mono font-medium text-white mb-2">
            Community
          </h3>
          <p className="font-mono text-sm text-white/50">
            Learn how to communicate and collaborate effectively.
          </p>
        </div>
      </div>

      {/* All sections */}
      <div className="mb-8">
        <h2 className="font-mono text-2xl font-bold text-white mb-6">
          All Sections
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              href={`/docs/${section.slug}`}
              className="group flex items-start gap-4 p-4 rounded-lg border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10 font-mono text-sm text-white/40 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                {index}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-mono font-medium text-white group-hover:text-emerald-400 transition-colors mb-1">
                  {section.title}
                </h3>
                <p className="font-mono text-sm text-white/40">
                  {section.items.length} articles
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
