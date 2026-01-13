import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@/components/mdx";

/**
 * MDX Components Configuration
 * ----------------------------
 * This file provides custom components to MDX content.
 * All components defined here are available in MDX files without imports.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
