"use client";

import { useEffect, useState } from "react";

/**
 * Table of Contents Component
 * ===========================
 * Auto-generates TOC from page headings (h2, h3)
 * Features:
 * - Scroll spy highlighting
 * - Smooth scroll on click
 * - Responsive behavior
 */

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from the page
  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName[1]),
    }));

    setHeadings(items);
  }, []);

  // Scroll spy
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={className}>
      <p className="font-mono text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
        On this page
      </p>
      <ul className="flex flex-col gap-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  // Update URL hash without scrolling
                  window.history.pushState(null, "", `#${heading.id}`);
                }
              }}
              className={`
                block font-mono text-sm transition-colors
                ${heading.level === 3 ? "pl-4" : ""}
                ${
                  activeId === heading.id
                    ? "text-emerald-400"
                    : "text-white/40 hover:text-white/80"
                }
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
