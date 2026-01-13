import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * MDX Configuration
 * -----------------
 * Simplified configuration for Next.js 16 compatibility.
 * Remark/rehype plugins need to be serializable.
 */
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Enable MDX page extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withMDX(nextConfig);
