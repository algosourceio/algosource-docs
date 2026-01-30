import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M8 24L16 8L24 24H8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
      </svg>
      <span className="font-bold text-lg">AlgoSource Docs</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/algosource/algosource",
  },
  chat: {
    link: "https://discord.gg/algosource",
  },
  docsRepositoryBase: "https://github.com/algosource/algosource/tree/main/docs",
  
  // SEO
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – AlgoSource Docs",
      };
    }
    return {
      title: "AlgoSource Docs – The Complete Open Source Contribution Guide",
    };
  },

  // Head
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title ? title + " – AlgoSource Docs" : "AlgoSource Docs"} />
        <meta property="og:description" content="The complete guide to open source contribution. From your first PR to GSoC selection." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@algosource" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </>
    );
  },

  // Banner
  banner: {
    key: "algosource-launch",
    text: (
      <a href="https://algosource.in" target="_blank" rel="noreferrer">
        🚀 AlgoSource Platform is live! Explore 10,000+ projects and proposals →
      </a>
    ),
  },

  // Sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: false,
  },

  // Table of Contents
  toc: {
    backToTop: true,
    float: true,
  },

  // Navigation
  navigation: {
    prev: true,
    next: true,
  },

  // Footer
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} AlgoSource. Built with ❤️ for the open source community.
        </span>
        <div className="mt-2 flex gap-4 text-sm text-gray-500">
          <a href="https://algosource.in" className="hover:text-white transition-colors">
            Platform
          </a>
          <a href="https://algosource.in/privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="https://algosource.in/terms" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    ),
  },

  // Edit Link
  editLink: {
    text: "Edit this page on GitHub →",
  },

  // Feedback
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },

  // Dark mode
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },

  // Primary hue (green to match AlgoSource branding)
  primaryHue: 150,
  primarySaturation: 80,

  // Git timestamp
  gitTimestamp: function GitTimestamp({ timestamp }) {
    return (
      <span className="text-sm text-gray-500">
        Last updated: {timestamp.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    );
  },

  // Search
  search: {
    placeholder: "Search documentation...",
  },

  // Components customization
  components: {
    // Custom Callout styles are handled via CSS
  },
};

export default config;
