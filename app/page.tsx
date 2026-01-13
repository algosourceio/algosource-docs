import Link from "next/link";
import { ArrowRight, BookOpen, GitBranch, Users, Rocket, Terminal, Code, ExternalLink } from "lucide-react";

/**
 * Homepage
 * ========
 * Landing page for AlgoSource documentation site.
 * Features a hero section and quick links to documentation.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                <Terminal className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="font-mono font-bold text-white">AlgoSource</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/docs"
                className="font-mono text-sm text-white/60 hover:text-white transition-colors"
              >
                Docs
              </Link>
              <Link
                href="https://github.com/algosourceio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
              >
                GitHub
                <ExternalLink className="h-3 w-3" />
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-sm text-emerald-400">
              Open Source Contributor Guide
            </span>
          </div>
          
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Learn to contribute
            <br />
            <span className="text-white/30">to open source</span>
          </h1>
          
          <p className="font-mono text-lg md:text-xl text-white/50 max-w-2xl mb-10">
            A comprehensive guide for new contributors. From your first issue 
            to becoming a maintainer. Everything you need to succeed in open source.
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
              href="/docs"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 font-mono text-sm text-white hover:bg-white/5 transition-colors"
            >
              Browse Docs
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Comprehensive"
              description="From basics to advanced topics, covering the full contributor journey."
            />
            <FeatureCard
              icon={<GitBranch className="h-6 w-6" />}
              title="Practical"
              description="Real-world examples with Git, GitHub, and common workflows."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Community"
              description="Learn communication etiquette and collaboration best practices."
            />
            <FeatureCard
              icon={<Rocket className="h-6 w-6" />}
              title="Career Growth"
              description="Leverage open source for career opportunities and growth."
            />
          </div>
        </section>

        {/* Topics */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <h2 className="font-mono text-2xl font-bold text-white mb-8">
            What you&apos;ll learn
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TopicLink href="/docs/before-you-start" title="Before You Start" />
            <TopicLink href="/docs/getting-started" title="Getting Started" />
            <TopicLink href="/docs/git-github" title="Git & GitHub Essentials" />
            <TopicLink href="/docs/first-contribution" title="Making Your First Contribution" />
            <TopicLink href="/docs/issues-prs" title="Issues & Pull Requests" />
            <TopicLink href="/docs/programs" title="Open Source Programs" />
            <TopicLink href="/docs/proposals" title="Writing Proposals" />
            <TopicLink href="/docs/communication" title="Communication & Etiquette" />
            <TopicLink href="/docs/career" title="Career & Growth" />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-white/40">
              © 2024 AlgoSource. Open source contributor guide.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/docs"
                className="font-mono text-sm text-white/40 hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/algosourceio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-white/40 hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-5 rounded-lg border border-white/10 bg-white/5">
      <div className="text-emerald-400 mb-3">{icon}</div>
      <h3 className="font-mono font-medium text-white mb-2">{title}</h3>
      <p className="font-mono text-sm text-white/50">{description}</p>
    </div>
  );
}

function TopicLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all"
    >
      <span className="font-mono text-white group-hover:text-emerald-400 transition-colors">
        {title}
      </span>
      <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}
