import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Import custom components
import { Callout } from "./callout";
import { Warning } from "./warning";
import { CodeBlock, InlineCode } from "./code-block";
import { Checklist, ChecklistItem } from "./checklist";
import { NextSteps, NextStep } from "./next-steps";
import { Step, Steps } from "./steps";
import { Card, CardGrid } from "./card";

/**
 * MDX Components Export
 * =====================
 * This file defines all components available in MDX files.
 * 
 * Custom components (available without import in MDX):
 * - <Callout /> - Info/warning/error/success/tip callouts
 * - <Warning /> - Prominent warning boxes
 * - <Checklist /> + <ChecklistItem /> - Interactive checklists
 * - <NextSteps /> - Navigation cards
 * - <Step /> + <Steps /> - Numbered tutorial steps
 * - <Card /> + <CardGrid /> - Content cards
 * 
 * Standard elements are styled with the dark theme.
 */

export const mdxComponents: MDXComponents = {
  // Custom components
  Callout,
  Warning,
  Checklist,
  ChecklistItem,
  NextSteps,
  NextStep,
  Step,
  Steps,
  Card,
  CardGrid,

  // Override standard HTML elements
  h1: ({ children, ...props }) => (
    <h1
      className="font-mono text-3xl md:text-4xl font-bold text-white mb-6 mt-8 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, id, ...props }) => (
    <h2
      id={id}
      className="group font-mono text-2xl font-bold text-white mb-4 mt-12 first:mt-0 scroll-mt-20"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, id, ...props }) => (
    <h3
      id={id}
      className="group font-mono text-xl font-semibold text-white mb-3 mt-8 scroll-mt-20"
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }) => (
    <h4
      className="font-mono text-lg font-medium text-white mb-2 mt-6"
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }) => (
    <p className="font-mono text-white/70 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  a: ({ children, href, ...props }) => {
    const isExternal = href?.startsWith("http");
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href || "#"}
        className="font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },

  ul: ({ children, ...props }) => (
    <ul
      className="font-mono text-white/70 list-disc list-inside mb-4 space-y-2 pl-2"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      className="font-mono text-white/70 list-decimal list-inside mb-4 space-y-2 pl-2"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-emerald-500/50 pl-4 my-6 italic text-white/60"
      {...props}
    >
      {children}
    </blockquote>
  ),

  hr: (props) => <hr className="border-white/10 my-8" {...props} />,

  strong: ({ children, ...props }) => (
    <strong className="font-bold text-white" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="italic text-white/80" {...props}>
      {children}
    </em>
  ),

  code: ({ children, className, ...props }) => {
    // If it has a className, it's a code block (handled by rehype-pretty-code)
    if (className) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    // Otherwise it's inline code
    return <InlineCode>{children}</InlineCode>;
  },

  // Pre is handled by rehype-pretty-code, just add wrapper styling
  pre: ({ children, ...props }) => (
    <pre
      className="my-6 rounded-lg overflow-hidden bg-zinc-900 p-4 overflow-x-auto text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full font-mono text-sm border-collapse"
        {...props}
      >
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead className="border-b border-white/20" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th
      className="text-left px-4 py-3 font-medium text-white"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      className="px-4 py-3 text-white/70 border-b border-white/5"
      {...props}
    >
      {children}
    </td>
  ),

  tr: ({ children, ...props }) => (
    <tr className="hover:bg-white/5 transition-colors" {...props}>
      {children}
    </tr>
  ),

  img: ({ src, alt, ...props }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="rounded-lg border border-white/10"
        {...props}
      />
      {alt && (
        <figcaption className="mt-2 text-center font-mono text-sm text-white/40">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

// Re-export individual components for direct imports
export { Callout } from "./callout";
export { Warning } from "./warning";
export { CodeBlock, InlineCode } from "./code-block";
export { Checklist, ChecklistItem } from "./checklist";
export { NextSteps, NextStep } from "./next-steps";
export { Step, Steps } from "./steps";
export { Card, CardGrid } from "./card";
