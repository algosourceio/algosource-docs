import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Root Layout
 * ===========
 * Uses Geist Mono as the primary font throughout for a technical aesthetic.
 * Dark theme is set by default via CSS variables.
 */

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoSource | Open Source Contributor Guide",
  description:
    "A comprehensive guide to becoming an effective open source contributor. From your first commit to becoming a maintainer.",
  keywords: [
    "open source",
    "contributor guide",
    "git",
    "github",
    "contributing",
    "gsoc",
    "hacktoberfest",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
