import { Sidebar, MobileSidebar, ReadingProgress } from "@/components/docs";
import { DocsHeader } from "@/components/docs/header";

/**
 * Docs Layout
 * ===========
 * Main layout wrapper for all documentation pages.
 * 
 * Structure:
 * - Header (sticky)
 * - Reading progress indicator
 * - Sidebar (desktop: fixed left, mobile: slide-over)
 * - Main content area
 * - TOC (optional, handled by individual pages)
 */

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Reading progress bar */}
      <ReadingProgress />

      {/* Header */}
      <DocsHeader />

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-white/10">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
            <Sidebar />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar />
    </div>
  );
}
