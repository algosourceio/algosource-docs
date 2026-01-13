import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DocSection, DocItem } from "@/lib/docs";
import { getDocPath } from "@/lib/docs";

/**
 * Doc Navigation Component
 * ========================
 * Previous/Next navigation at the bottom of doc pages
 */

interface DocNavigationProps {
  prev: { section: DocSection; doc: DocItem } | null;
  next: { section: DocSection; doc: DocItem } | null;
  className?: string;
}

export function DocNavigation({ prev, next, className }: DocNavigationProps) {
  return (
    <nav
      className={cn(
        "flex items-stretch gap-4 mt-16 pt-8 border-t border-white/10",
        className
      )}
    >
      {prev ? (
        <Link
          href={getDocPath(prev.section.slug, prev.doc.slug)}
          className="flex-1 group p-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2 text-white/40 text-sm mb-1">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono">Previous</span>
          </div>
          <div className="font-mono text-white group-hover:text-emerald-400 transition-colors">
            {prev.doc.title}
          </div>
          <div className="font-mono text-xs text-white/30 mt-1">
            {prev.section.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={getDocPath(next.section.slug, next.doc.slug)}
          className="flex-1 group p-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-right"
        >
          <div className="flex items-center justify-end gap-2 text-white/40 text-sm mb-1">
            <span className="font-mono">Next</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="font-mono text-white group-hover:text-emerald-400 transition-colors">
            {next.doc.title}
          </div>
          <div className="font-mono text-xs text-white/30 mt-1">
            {next.section.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
