import React, { useState, useEffect } from "react";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Default to dark theme during SSR and before mount
  const isDark = !mounted || resolvedTheme === 'dark' || resolvedTheme === undefined;
  
  return (
    <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <img
        src={isDark ? "/logo.png" : "/logo-light-theme.png"}
        alt="AlgoSource Logo"
        width={28}
        height={28}
        className="rounded-md"
      />
      <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>AlgoSource</span>
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
    const { title, frontMatter } = useConfig();
    const { asPath } = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://algosource.in/docs";
    const canonicalUrl = `${siteUrl}${asPath === "/" ? "" : asPath}`;
    const pageTitle = title ? `${title} – AlgoSource Docs` : "AlgoSource Docs – The Complete Open Source Contribution Guide";
    
    // Dynamic description based on page content
    const defaultDescription = "The complete guide to open source contribution. Master GSoC, LFX, Outreachy with expert strategies, real examples, and proven techniques. From first PR to selection.";
    const description = frontMatter?.description || defaultDescription;
    
    const imageUrl = frontMatter?.image || `${siteUrl}/og-image.png`;

    // Keywords for different sections
    const defaultKeywords = "open source, contribution guide, GSoC, Google Summer of Code, LFX Mentorship, Outreachy, GitHub, pull requests, first contribution, open source programs, beginner friendly, code review, documentation, git tutorial, proposal writing";
    const keywords = frontMatter?.keywords || defaultKeywords;

    // Structured data with enhanced schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          "name": "AlgoSource",
          "url": "https://algosource.in",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://github.com/algosourceio",
            "https://algosource.in"
          ],
          "description": "Your gateway to open source opportunities. Discover programs, access proposals, and kickstart your journey in open source."
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "name": "AlgoSource Documentation",
          "url": siteUrl,
          "description": description,
          "publisher": {
            "@id": `${siteUrl}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}/#webpage`,
          "url": canonicalUrl,
          "name": pageTitle,
          "description": description,
          "isPartOf": {
            "@id": `${siteUrl}/#website`
          },
          "about": {
            "@id": `${siteUrl}/#organization`
          },
          "inLanguage": "en-US",
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0]
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}/#breadcrumb`,
          "itemListElement": asPath.split('/').filter(Boolean).map((segment, index, arr) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
            "item": `${siteUrl}/${arr.slice(0, index + 1).join('/')}`
          }))
        },
        // FAQPage schema for better AEO
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}/#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is GSoC and how to get selected?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Google Summer of Code (GSoC) is a global program that offers students stipends to contribute to open source projects. To get selected, you need to choose the right organization, contribute meaningfully before the application period, and write a compelling proposal."
              }
            },
            {
              "@type": "Question",
              "name": "How do I start contributing to open source?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start by finding beginner-friendly projects, understanding their codebase, fixing small issues or documentation, and gradually moving to more complex contributions. Focus on building relationships with maintainers."
              }
            },
            {
              "@type": "Question",
              "name": "What are the best open source programs for beginners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Popular programs include Google Summer of Code (GSoC), LFX Mentorship, Outreachy, Summer of Bitcoin, and MLH Fellowship. Each has different eligibility requirements and timelines."
              }
            }
          ]
        },
        // HowTo schema for guides
        {
          "@type": "HowTo",
          "@id": `${siteUrl}/#howto`,
          "name": "How to Become a Successful Open Source Contributor",
          "description": "A comprehensive guide to starting and succeeding in open source contributions",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Learn the Basics",
              "text": "Understand Git, GitHub, and basic contribution workflows"
            },
            {
              "@type": "HowToStep",
              "name": "Find Projects",
              "text": "Discover beginner-friendly projects that match your skills"
            },
            {
              "@type": "HowToStep",
              "name": "Make Your First Contribution",
              "text": "Start with documentation, bug fixes, or small features"
            },
            {
              "@type": "HowToStep",
              "name": "Build Relationships",
              "text": "Communicate effectively with maintainers and the community"
            },
            {
              "@type": "HowToStep",
              "name": "Apply to Programs",
              "text": "Prepare compelling proposals for GSoC, LFX, and other programs"
            }
          ]
        },
        // Course schema for educational content
        {
          "@type": "Course",
          "@id": `${siteUrl}/#course`,
          "name": "Open Source Contribution Masterclass",
          "description": "Complete guide covering everything from first PR to GSoC selection",
          "provider": {
            "@id": `${siteUrl}/#organization`
          },
          "educationalLevel": "Beginner to Advanced",
          "teaches": [
            "Git and GitHub fundamentals",
            "Open source contribution workflow",
            "Proposal writing for GSoC/LFX",
            "Communication with maintainers",
            "Code review best practices"
          ],
          "inLanguage": "en-US",
          "isAccessibleForFree": true
        }
      ]
    };

    return (
      <>
        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="AlgoSource" />
        <meta name="creator" content="AlgoSource" />
        <meta name="publisher" content="AlgoSource" />
        <meta name="application-name" content="AlgoSource Docs" />
        <meta name="theme-color" content="#10b981" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="AlgoSource Docs" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AlgoSource - Open Source Contribution Guide" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@algosource" />
        <meta name="twitter:creator" content="@algosource" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="AlgoSource - Open Source Contribution Guide" />

        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="developers, students, open source contributors" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Apple/iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AlgoSource Docs" />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* RSS Feed (if available) */}
        <link rel="alternate" type="application/rss+xml" title="AlgoSource Docs RSS Feed" href="/feed.xml" />

        {/* Favicons */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://algosource.in" />
        <link rel="dns-prefetch" href="https://algosource.in" />
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
