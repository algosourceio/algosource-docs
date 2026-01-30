import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="AlgoSource Logo"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span className="font-bold text-lg">AlgoSource</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/algosourceio/algosource-docs/issues/new",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
      </svg>
    ),
  },
  chat: {
    link: "https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL",
    icon: <WhatsAppIcon className="w-6 h-6" />,
  },
  docsRepositoryBase: "https://github.com/algosourceio/algosource-docs/tree/main/docs",
  
  // Navbar extra content (similar to frontend navbar)
  navbar: {
    extraContent: (
      <div className="flex items-center gap-4">
        <a
          href="https://algosource.in/programs"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-sm font-medium text-gray-500 hover:text-emerald-500 transition-colors"
        >
          Programs
        </a>
        <a
          href="https://algosource.in/proposal"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-sm font-medium text-gray-500 hover:text-emerald-500 transition-colors"
        >
          Proposals
        </a>
        <a
          href="https://algosource.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-sm font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Platform
        </a>
      </div>
    ),
  },
  
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
      <div className="flex w-full flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AlgoSource Logo"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} AlgoSource. Made with ❤️ for the open source community.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="https://algosource.in" className="hover:text-emerald-500 transition-colors">
              Platform
            </a>
            <a href="https://algosource.in/terms" className="hover:text-emerald-500 transition-colors">
              Terms
            </a>
            <a href="https://algosource.in/privacy" className="hover:text-emerald-500 transition-colors">
              Privacy
            </a>
            <a href="https://algosource.in/disclaimer" className="hover:text-emerald-500 transition-colors">
              Disclaimer
            </a>
            <a href="https://algosource.in/changelog" className="hover:text-emerald-500 transition-colors">
              Changelog
            </a>
          </div>
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

  // Dark mode - allow toggling
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
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
