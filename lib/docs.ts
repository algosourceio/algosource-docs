/**
 * Documentation Structure Configuration
 * =====================================
 * This is the SOURCE OF TRUTH for all documentation navigation.
 * 
 * Architecture Decision:
 * - We use a config-driven approach rather than pure filesystem scanning
 * - This gives us explicit control over ordering, titles, and grouping
 * - But we still validate against actual files to catch broken links
 * - MDX files are placed in /content/docs for clean separation
 */

export interface DocItem {
  title: string;
  slug: string;
  description?: string;
}

export interface DocSection {
  id: string;
  title: string;
  slug: string;
  order: number;
  description?: string;
  items: DocItem[];
}

/**
 * Complete documentation structure
 * Each section maps to a folder, each item maps to an MDX file
 */
export const docsConfig: DocSection[] = [
  {
    id: "before-you-start",
    title: "Before You Start",
    slug: "before-you-start",
    order: 0,
    description: "Most docs miss this. This section filters unserious contributors early.",
    items: [
      { title: "Overview", slug: "index", description: "What to know before contributing" },
      { title: "What Open Source Really Is", slug: "what-open-source-is", description: "And what it's not" },
      { title: "Common Myths", slug: "myths", description: "Myths new contributors believe" },
      { title: "Time Commitment & Expectations", slug: "expectations", description: "The reality of open source" },
      { title: "Beginner vs Contributor vs Maintainer", slug: "roles", description: "Understanding the hierarchy" },
      { title: "How Contributions Are Evaluated", slug: "evaluation", description: "Reality check on what matters" },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    slug: "getting-started",
    order: 1,
    description: "Your first steps into open source contribution.",
    items: [
      { title: "Overview", slug: "index", description: "Your first steps in open source" },
      { title: "Getting Started in Open Source", slug: "introduction", description: "The beginning of your journey" },
      { title: "Choosing Your First Contribution", slug: "choosing-contribution", description: "Docs, Tests, or Code?" },
      { title: "How to Fork a Repository", slug: "fork", description: "Step-by-step forking guide" },
      { title: "Clone and Setup Locally", slug: "clone", description: "Getting code on your machine" },
      { title: "Understanding Project Structure", slug: "project-structure", description: "Navigating unfamiliar codebases" },
      { title: "How to Understand an Unknown Codebase", slug: "understand-codebase", description: "Strategies for reading code" },
      { title: "Reading Project Files", slug: "project-files", description: "README, CONTRIBUTING, CODE_OF_CONDUCT" },
      { title: "Running the Project Locally", slug: "running-locally", description: "Getting the project to run" },
      { title: "Common Setup Errors", slug: "setup-errors", description: "How to fix common issues" },
    ],
  },
  {
    id: "git-github",
    title: "Git & GitHub Essentials",
    slug: "git-github",
    order: 2,
    description: "Non-negotiable skills. Skip this and you'll create noise instead of value.",
    items: [
      { title: "Overview", slug: "index", description: "Master version control" },
      { title: "Git Basics You Must Know", slug: "basics", description: "Essential git commands" },
      { title: "Branching Strategy Explained", slug: "branching", description: "How to organize branches" },
      { title: "Commit Messages", slug: "commits", description: "Good vs bad examples" },
      { title: "Syncing Fork with Upstream", slug: "syncing", description: "Keeping your fork updated" },
      { title: "Resolving Merge Conflicts", slug: "conflicts", description: "Handling conflicting changes" },
      { title: "Rewriting History", slug: "rewriting-history", description: "Rebase, squash, and amend" },
      { title: "When Not to Force Push", slug: "force-push", description: "Avoiding destructive operations" },
    ],
  },
  {
    id: "first-contribution",
    title: "Making Your First Contribution",
    slug: "first-contribution",
    order: 3,
    description: "From finding issues to getting your code merged.",
    items: [
      { title: "Overview", slug: "index", description: "Your first pull request" },
      { title: "Finding Good First Issues", slug: "finding-issues", description: "And spotting fake ones" },
      { title: "Picking Issues That Get Merged", slug: "picking-issues", description: "Strategic issue selection" },
      { title: "Asking Questions the Right Way", slug: "asking-questions", description: "Get help without being ignored" },
      { title: "Claiming an Issue", slug: "claiming-issues", description: "And when not to" },
      { title: "Writing Clean, Reviewable Code", slug: "clean-code", description: "Code that maintainers love" },
      { title: "Adding Tests", slug: "adding-tests", description: "When required, when optional" },
      { title: "Documentation Contributions", slug: "documentation", description: "Contributions that matter" },
    ],
  },
  {
    id: "issues-prs",
    title: "Issues & Pull Requests",
    slug: "issues-prs",
    order: 4,
    description: "Deep dive into the GitHub workflow.",
    items: [
      { title: "Overview", slug: "index", description: "Mastering the workflow" },
      { title: "How to Raise a Good Issue", slug: "raising-issues", description: "Issues that get attention" },
      { title: "Bug Reports vs Feature Requests", slug: "issue-types", description: "Know the difference" },
      { title: "Writing a High-Quality PR", slug: "writing-prs", description: "PRs that get merged" },
      { title: "PR Description Template", slug: "pr-template", description: "What maintainers expect" },
      { title: "Responding to Code Reviews", slug: "code-reviews", description: "Handle feedback gracefully" },
      { title: "Handling Rejection", slug: "handling-rejection", description: "Without burning bridges" },
      { title: "Iterating on Feedback", slug: "iterating-feedback", description: "Improve efficiently" },
      { title: "Closing PRs the Right Way", slug: "closing-prs", description: "Clean up after yourself" },
    ],
  },
  {
    id: "programs",
    title: "Open Source Programs",
    slug: "programs",
    order: 5,
    description: "Programs that can accelerate your journey. This section prepares, not just informs.",
    items: [
      { title: "Overview", slug: "index", description: "All programs at a glance" },
      { title: "Google Summer of Code (GSoC)", slug: "gsoc", description: "The complete guide" },
      { title: "Linux Foundation Mentorship (LFX)", slug: "lfx", description: "Enterprise open source" },
      { title: "Season of Bugs (SOB)", slug: "sob", description: "Security-focused contributions" },
      { title: "Code for GovTech (C4GT)", slug: "c4gt", description: "Government tech projects" },
      { title: "Outreachy", slug: "outreachy", description: "Internships for underrepresented groups" },
      { title: "Hacktoberfest", slug: "hacktoberfest", description: "Annual contribution event" },
      { title: "Comparing All Programs", slug: "comparison", description: "Side-by-side comparison" },
    ],
  },
  {
    id: "choosing-org",
    title: "Choosing the Right Organization",
    slug: "choosing-org",
    order: 6,
    description: "Not all organizations are created equal.",
    items: [
      { title: "Overview", slug: "index", description: "Finding your fit" },
      { title: "Signals of a Healthy Organization", slug: "healthy-signals", description: "What to look for" },
      { title: "Evaluating Code Quality", slug: "code-quality", description: "Technical assessment" },
      { title: "Mentor Availability", slug: "mentor-availability", description: "Responsiveness matters" },
      { title: "Activity Metrics That Matter", slug: "activity-metrics", description: "Data-driven decisions" },
      { title: "Red Flags You Should Never Ignore", slug: "red-flags", description: "Warning signs" },
      { title: "When to Leave an Organization", slug: "when-to-leave", description: "Know when to walk away" },
    ],
  },
  {
    id: "proposals",
    title: "Writing a Winning Proposal",
    slug: "proposals",
    order: 7,
    description: "Most applicants fail here. This section is brutally practical.",
    items: [
      { title: "Overview", slug: "index", description: "Crafting compelling proposals" },
      { title: "Understanding the Problem Statement", slug: "problem-statement", description: "Read between the lines" },
      { title: "Researching Existing Solutions", slug: "research", description: "Do your homework" },
      { title: "Defining Clear Deliverables", slug: "deliverables", description: "Concrete outcomes" },
      { title: "Creating a Realistic Timeline", slug: "timeline", description: "Week-by-week planning" },
      { title: "Technical Depth vs Buzzwords", slug: "technical-depth", description: "Show real knowledge" },
      { title: "Writing Style That Mentors Respect", slug: "writing-style", description: "Communication matters" },
      { title: "Common Proposal Mistakes", slug: "mistakes", description: "What to avoid" },
      { title: "Proposal Review Checklist", slug: "checklist", description: "Final verification" },
    ],
  },
  {
    id: "communication",
    title: "Communication & Etiquette",
    slug: "communication",
    order: 8,
    description: "How to communicate effectively in open source.",
    items: [
      { title: "Overview", slug: "index", description: "Open source communication" },
      { title: "How Maintainers Think", slug: "maintainer-mindset", description: "Understand their perspective" },
      { title: "Async Communication Best Practices", slug: "async-communication", description: "Working across timezones" },
      { title: "Asking for Help", slug: "asking-help", description: "Without being ignored" },
      { title: "Disagreements & Conflict Resolution", slug: "conflict-resolution", description: "Handle disagreements" },
      { title: "Public vs Private Communication", slug: "public-private", description: "Know the difference" },
      { title: "Respecting Time Zones", slug: "timezones", description: "Global collaboration" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Developer Setup",
    slug: "tooling",
    order: 9,
    description: "Essential developer tools and configurations.",
    items: [
      { title: "Overview", slug: "index", description: "Essential developer tools" },
      { title: "Code Editors & IDE Setup", slug: "editors", description: "Configuring your environment" },
      { title: "Debugging Techniques", slug: "debugging", description: "Find and fix bugs" },
      { title: "Linters, Formatters & CI", slug: "linters-ci", description: "Code quality tools" },
      { title: "Understanding CI Failures", slug: "ci-failures", description: "Fix pipeline issues" },
      { title: "Logs, Stack Traces & Error Reports", slug: "logs-errors", description: "Reading error output" },
    ],
  },
  {
    id: "long-term",
    title: "Becoming a Long-Term Contributor",
    slug: "long-term",
    order: 10,
    description: "Moving beyond beginner contributions.",
    items: [
      { title: "Overview", slug: "index", description: "Sustaining your contributions" },
      { title: "Moving Beyond Good First Issues", slug: "beyond-first-issues", description: "Level up your contributions" },
      { title: "Taking Ownership of Components", slug: "ownership", description: "Become a domain expert" },
      { title: "Helping Review PRs", slug: "reviewing-prs", description: "Give back to the community" },
      { title: "Writing Design Docs", slug: "design-docs", description: "Document architecture" },
      { title: "Becoming a Maintainer", slug: "becoming-maintainer", description: "The path to maintainership" },
      { title: "Burnout Prevention", slug: "burnout", description: "Sustainable contribution" },
    ],
  },
  {
    id: "career",
    title: "Career & Growth",
    slug: "career",
    order: 11,
    description: "Leverage open source for career opportunities.",
    items: [
      { title: "Overview", slug: "index", description: "Career benefits of open source" },
      { title: "How Open Source Impacts Hiring", slug: "hiring-impact", description: "What employers think" },
      { title: "Building a Strong Contributor Profile", slug: "contributor-profile", description: "Stand out from the crowd" },
      { title: "What Recruiters Actually Look At", slug: "recruiter-perspective", description: "Inside the hiring process" },
      { title: "Turning Contributions into Case Studies", slug: "case-studies", description: "Tell your story" },
      { title: "Resume & Portfolio Integration", slug: "resume-portfolio", description: "Showcase your work" },
    ],
  },
  {
    id: "faqs",
    title: "FAQs & Common Failures",
    slug: "faqs",
    order: 12,
    description: "Common questions and failure patterns.",
    items: [
      { title: "Overview", slug: "index", description: "Common questions answered" },
      { title: "Why PRs Get Ignored", slug: "prs-ignored", description: "Understand the silence" },
      { title: "Why PRs Get Rejected", slug: "prs-rejected", description: "Learn from rejection" },
      { title: "I Don't Feel Good Enough", slug: "not-good-enough", description: "Overcoming self-doubt" },
      { title: "Handling Imposter Syndrome", slug: "imposter-syndrome", description: "You belong here" },
      { title: "When to Pause or Pivot", slug: "pause-pivot", description: "Know when to step back" },
    ],
  },
  {
    id: "final-check",
    title: "Final Reality Check",
    slug: "final-check",
    order: 13,
    description: "The truth about what it takes to succeed.",
    items: [
      { title: "Overview", slug: "index", description: "Are you ready?" },
      { title: "Why Most People Quit Open Source", slug: "why-people-quit", description: "The hard truth" },
      { title: "What Separates Top 1% Contributors", slug: "top-contributors", description: "Excellence in open source" },
      { title: "Your 30-Day Action Plan", slug: "action-plan", description: "Start your journey" },
    ],
  },
];

/**
 * Get all sections for sidebar
 */
export function getAllSections(): DocSection[] {
  return docsConfig.sort((a, b) => a.order - b.order);
}

/**
 * Get a specific section by slug
 */
export function getSectionBySlug(slug: string): DocSection | undefined {
  return docsConfig.find((section) => section.slug === slug);
}

/**
 * Get a specific doc item
 */
export function getDocBySlug(
  sectionSlug: string,
  docSlug: string
): { section: DocSection; doc: DocItem; index: number } | undefined {
  const section = getSectionBySlug(sectionSlug);
  if (!section) return undefined;

  const index = section.items.findIndex((item) => item.slug === docSlug);
  if (index === -1) return undefined;

  return { section, doc: section.items[index], index };
}

/**
 * Get previous and next docs for navigation
 */
export function getAdjacentDocs(
  sectionSlug: string,
  docSlug: string
): { prev: { section: DocSection; doc: DocItem } | null; next: { section: DocSection; doc: DocItem } | null } {
  const allSections = getAllSections();
  
  // Flatten all docs with their section info
  const allDocs: { section: DocSection; doc: DocItem }[] = [];
  for (const section of allSections) {
    for (const doc of section.items) {
      allDocs.push({ section, doc });
    }
  }

  // Find current index
  const currentIndex = allDocs.findIndex(
    (d) => d.section.slug === sectionSlug && d.doc.slug === docSlug
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  };
}

/**
 * Get breadcrumbs for a doc page
 */
export function getBreadcrumbs(
  sectionSlug: string,
  docSlug?: string
): { title: string; href: string }[] {
  const breadcrumbs: { title: string; href: string }[] = [
    { title: "Docs", href: "/docs" },
  ];

  const section = getSectionBySlug(sectionSlug);
  if (!section) return breadcrumbs;

  breadcrumbs.push({
    title: section.title,
    href: `/docs/${section.slug}`,
  });

  if (docSlug && docSlug !== "index") {
    const doc = section.items.find((item) => item.slug === docSlug);
    if (doc) {
      breadcrumbs.push({
        title: doc.title,
        href: `/docs/${section.slug}/${docSlug}`,
      });
    }
  }

  return breadcrumbs;
}

/**
 * Get the full path for a doc
 */
export function getDocPath(sectionSlug: string, docSlug: string): string {
  if (docSlug === "index") {
    return `/docs/${sectionSlug}`;
  }
  return `/docs/${sectionSlug}/${docSlug}`;
}

/**
 * Get total doc count
 */
export function getTotalDocCount(): number {
  return docsConfig.reduce((acc, section) => acc + section.items.length, 0);
}
