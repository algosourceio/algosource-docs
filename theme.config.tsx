import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <img
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
  
  // Disable default project and chat icons (we handle them in Navbar)
  project: {
    icon: null,
  },
  chat: {
    icon: null,
  },
  
  docsRepositoryBase: "https://github.com/algosourceio/algosource-docs/tree/main",
  
  // Navbar extra content (renders after search)
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
    const { asPath } = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://algosource.in/docs";
    const canonicalUrl = `${siteUrl}${asPath === "/" ? "" : asPath}`;
    const pageTitle = title ? `${title} – AlgoSource Docs` : "AlgoSource Docs – The Complete Open Source Contribution Guide";
    const description = "The complete guide to open source contribution. From your first PR to GSoC selection.";
    const imageUrl = `${siteUrl}/logo.png`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "AlgoSource",
          "url": siteUrl,
          "logo": imageUrl,
          "sameAs": [
            "https://github.com/algosourceio/algosource-docs",
            "https://algosource.in"
          ]
        },
        {
          "@type": "WebSite",
          "name": "AlgoSource Docs",
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "name": pageTitle,
          "url": canonicalUrl,
          "description": description
        }
      ]
    };

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="open source, contribution guide, GSoC, LFX, Outreachy, documentation, GitHub, pull requests" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="author" content="AlgoSource" />
        <meta name="application-name" content="AlgoSource Docs" />
        <meta name="theme-color" content="#10b981" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="AlgoSource Docs" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@algosource" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="/logo.png" type="image/png" />
        <link rel="icon" sizes="16x16" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
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
