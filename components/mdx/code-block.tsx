"use client";

import { useState, ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Code Block Component
 * ====================
 * Enhanced code block with copy button and language label
 * Works with rehype-pretty-code output
 */

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  title?: string;
  language?: string;
}

export function CodeBlock({
  children,
  className,
  title,
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeElement = document.querySelector(`[data-code-block="${title}"] code`);
    const text = codeElement?.textContent || "";
    
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn("group relative my-6 rounded-lg overflow-hidden", className)}
      data-code-block={title}
    >
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-white/10">
        <div className="flex items-center gap-3">
          {/* Decorative dots */}
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="font-mono text-xs text-white/40">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="font-mono text-xs text-white/40 uppercase">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4 text-white/40" />
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="bg-zinc-900 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

/**
 * Inline Code Component
 * =====================
 * Styled inline code
 */
export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-white/10 font-mono text-sm text-emerald-400">
      {children}
    </code>
  );
}
