import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getAllSections,
  getSectionBySlug,
  getDocBySlug,
  getAdjacentDocs,
  getBreadcrumbs,
} from "@/lib/docs";
import { Breadcrumbs, DocNavigation, TableOfContents } from "@/components/docs";

/**
 * Dynamic Docs Page
 * =================
 * Handles all doc routes via catch-all segment:
 * - /docs/[section] -> section index
 * - /docs/[section]/[page] -> specific page
 * 
 * MDX content is loaded dynamically from the content folder.
 */

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

// Generate static paths for all docs
export async function generateStaticParams() {
  const sections = getAllSections();
  const paths: { slug: string[] }[] = [];

  for (const section of sections) {
    // Section index
    paths.push({ slug: [section.slug] });

    // Individual pages
    for (const item of section.items) {
      if (item.slug !== "index") {
        paths.push({ slug: [section.slug, item.slug] });
      }
    }
  }

  return paths;
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) {
    return {
      title: "Documentation | AlgoSource",
      description: "Open source contributor documentation",
    };
  }

  const sectionSlug = slug[0];
  const docSlug = slug[1] || "index";
  const result = getDocBySlug(sectionSlug, docSlug);

  if (!result) {
    return {
      title: "Not Found | AlgoSource",
    };
  }

  return {
    title: `${result.doc.title} | AlgoSource Docs`,
    description: result.doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  
  // If no slug, this shouldn't happen (handled by /docs/page.tsx)
  if (!slug || slug.length === 0) {
    notFound();
  }

  const sectionSlug = slug[0];
  const docSlug = slug[1] || "index";

  // Validate section exists
  const section = getSectionBySlug(sectionSlug);
  if (!section) {
    notFound();
  }

  // Validate doc exists
  const docResult = getDocBySlug(sectionSlug, docSlug);
  if (!docResult) {
    notFound();
  }

  // Get navigation
  const { prev, next } = getAdjacentDocs(sectionSlug, docSlug);
  const breadcrumbs = getBreadcrumbs(sectionSlug, docSlug);

  // Dynamic import of MDX content using folder and file from config
  let Content: React.ComponentType;
  try {
    const mdxModule = await import(`@/content/docs/${section.folder}/${docResult.doc.file}.mdx`);
    Content = mdxModule.default;
  } catch {
    // If MDX file doesn't exist yet, show placeholder
    Content = () => (
      <div className="p-8 rounded-lg border border-white/10 bg-white/5">
        <p className="font-mono text-white/60 mb-4">
          This documentation page is coming soon.
        </p>
        <p className="font-mono text-sm text-white/40">
          Content file: <code className="text-emerald-400">content/docs/{section.folder}/{docResult.doc.file}.mdx</code>
        </p>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Main content */}
      <div className="flex-1 min-w-0 max-w-3xl mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        {/* Page header */}
        <header className="mb-8">
          <p className="font-mono text-sm text-emerald-400 mb-2">
            {section.title}
          </p>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-4">
            {docResult.doc.title}
          </h1>
          {docResult.doc.description && (
            <p className="font-mono text-lg text-white/60">
              {docResult.doc.description}
            </p>
          )}
        </header>

        {/* MDX content */}
        <article className="prose-custom">
          <Suspense fallback={<DocSkeleton />}>
            <Content />
          </Suspense>
        </article>

        {/* Prev/Next navigation */}
        <DocNavigation prev={prev} next={next} />
      </div>

      {/* Table of Contents (desktop only) */}
      <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 py-8 pr-6">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}

function DocSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-white/10 rounded w-3/4" />
      <div className="h-4 bg-white/10 rounded w-full" />
      <div className="h-4 bg-white/10 rounded w-5/6" />
      <div className="h-4 bg-white/10 rounded w-2/3" />
    </div>
  );
}
