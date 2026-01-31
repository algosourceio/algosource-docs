import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <Image
        src="/logo.png"
        alt="AlgoSource Logo"
        width={28}
        height={28}
        className="rounded-md"
      />
      <span className="font-bold text-lg tracking-tight text-white">AlgoSource</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  
  // Hide default project and chat icons (we handle them in Navbar)
  project: {
    link: "https://github.com/algosourceio/algosource-docs",
  },
  chat: {
    link: "https://chat.whatsapp.com/B9vSLumYFCs5IP2UszZnzL",
  },
  
  docsRepositoryBase: "https://github.com/algosourceio/algosource-docs/tree/main",
  
  // Navbar extra content
  navbar: {
    extraContent: <Navbar />,
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

  // // Banner
  // banner: {
  //   key: "algosource-launch",
  //   text: (
  //     <a href="https://algosource.in" target="_blank" rel="noreferrer">
  //       🚀 AlgoSource Platform is live! Explore 10,000+ projects and proposals →
  //     </a>
  //   ),
  // },

  // Sidebar - Professional styling with better organization
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },

  // Table of Contents
  toc: {
    backToTop: true,
    float: true,
    title: "On This Page",
  },

  // Navigation
  navigation: {
    prev: true,
    next: true,
  },

  // Footer
  footer: {
    component: <Footer />
  },

  // Edit Link
  editLink: {
    text: "Edit this page on GitHub →",
  },

  // Feedback - Link to GitHub issues
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
    useLink() {
      return "https://github.com/algosourceio/algosource-docs/issues/new?labels=feedback&title=Feedback%20for%20Documentation";
    },
  },

  // Dark mode - allow toggling
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },

  // Primary hue (green to match AlgoSource branding)
  primaryHue: 160,
  primarySaturation: 70,

  // Search - Ctrl+K to open
  search: {
    placeholder: "Search docs...",
  },

  // Components customization
  components: {
    // Custom Callout styles are handled via CSS
  },
};

export default config;
