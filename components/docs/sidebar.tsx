"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAllSections, type DocSection } from "@/lib/docs";

/**
 * Sidebar Component
 * =================
 * Auto-generated navigation from docs configuration.
 * Features:
 * - Collapsible sections
 * - Active page highlighting
 * - Mobile slide-over
 * - Persists open state while navigating
 */

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const sections = getAllSections();
  
  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    // Initially expand the section containing the current page
    const currentSection = sections.find((s) =>
      pathname.startsWith(`/docs/${s.slug}`)
    );
    return new Set(currentSection ? [currentSection.id] : []);
  });

  // Auto-expand section when navigating
  useEffect(() => {
    const currentSection = sections.find((s) =>
      pathname.startsWith(`/docs/${s.slug}`)
    );
    if (currentSection && !expandedSections.has(currentSection.id)) {
      setExpandedSections((prev) => new Set([...prev, currentSection.id]));
    }
  }, [pathname, sections, expandedSections]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {sections.map((section) => (
        <SidebarSection
          key={section.id}
          section={section}
          isExpanded={expandedSections.has(section.id)}
          onToggle={() => toggleSection(section.id)}
          currentPath={pathname}
        />
      ))}
    </nav>
  );
}

interface SidebarSectionProps {
  section: DocSection;
  isExpanded: boolean;
  onToggle: () => void;
  currentPath: string;
}

function SidebarSection({
  section,
  isExpanded,
  onToggle,
  currentPath,
}: SidebarSectionProps) {
  const isActive = currentPath.startsWith(`/docs/${section.slug}`);
  const ChevronIcon = isExpanded ? ChevronDown : ChevronRight;

  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
          "hover:bg-white/5",
          isActive ? "text-white" : "text-white/60"
        )}
      >
        <ChevronIcon className="h-4 w-4 shrink-0" />
        <span className="truncate">{section.title}</span>
      </button>

      {isExpanded && (
        <div className="ml-4 pl-3 border-l border-white/10 flex flex-col gap-0.5 mt-1">
          {section.items.map((item) => {
            const href =
              item.slug === "index"
                ? `/docs/${section.slug}`
                : `/docs/${section.slug}/${item.slug}`;
            
            const isItemActive =
              currentPath === href ||
              (item.slug === "index" && currentPath === `/docs/${section.slug}`);

            return (
              <Link
                key={item.slug}
                href={href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-colors",
                  "hover:bg-white/5 hover:text-white",
                  isItemActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-white/50"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Mobile Sidebar Wrapper
 * Provides slide-over behavior on mobile
 */
export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/20 transition-colors"
        aria-label="Open navigation"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-over panel */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950 border-r border-white/10 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="font-mono text-sm font-medium text-white">
            Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5 text-white/60" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
