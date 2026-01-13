/**
 * Documentation Structure Configuration
 * =====================================
 * This is the SOURCE OF TRUTH for all documentation navigation.
 * 
 * Naming Convention:
 * - Folders: 00_, 01_, 02_ prefixes for ordering
 * - Files: 0a_, 0b_, 1a_, 1b_ prefixes for sub-ordering
 * - MDX files are placed in /content/docs for clean separation
 */

export interface DocItem {
  title: string;
  slug: string;
  file: string; // Actual file name with prefix
  description?: string;
}

export interface DocSection {
  id: string;
  title: string;
  slug: string;
  folder: string; // Actual folder name with prefix
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
    folder: "00_before-you-start",
    order: 0,
    description: "Most docs miss this. This section filters unserious contributors early.",
    items: [
      { title: "Overview", slug: "index", file: "0a_index", description: "What to know before contributing" },
      { title: "What Open Source Really Is", slug: "what-open-source-is", file: "0b_what-open-source-is", description: "And what it's not" },
      { title: "Common Myths", slug: "myths", file: "0c_myths", description: "Myths new contributors believe" },
      { title: "Time & Expectations", slug: "time-expectations", file: "0d_time-expectations", description: "The reality of open source" },
      { title: "Beginner vs Contributor vs Maintainer", slug: "roles", file: "0e_roles", description: "Understanding the hierarchy" },
      { title: "How Contributions Are Evaluated", slug: "evaluation", file: "0f_evaluation", description: "Reality check on what matters" },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    slug: "getting-started",
    folder: "01_getting-started",
    order: 1,
    description: "Your first steps into open source contribution.",
    items: [
      { title: "Overview", slug: "index", file: "1a_index", description: "Your first steps in open source" },
      { title: "Choosing Your First Contribution", slug: "choosing-contribution", file: "1b_choosing-contribution", description: "Docs, Tests, or Code?" },
      { title: "How to Fork a Repository", slug: "fork", file: "1c_fork", description: "Step-by-step forking guide" },
      { title: "Clone and Setup Locally", slug: "clone", file: "1d_clone", description: "Getting code on your machine" },
      { title: "Understanding Project Structure", slug: "project-structure", file: "1e_project-structure", description: "Navigating unfamiliar codebases" },
      { title: "Understanding Unknown Codebases", slug: "understand-codebase", file: "1f_understand-codebase", description: "Strategies for reading code" },
      { title: "Reading Project Files", slug: "project-files", file: "1g_project-files", description: "README, CONTRIBUTING, CODE_OF_CONDUCT" },
      { title: "Running the Project Locally", slug: "running-locally", file: "1h_running-locally", description: "Getting the project to run" },
      { title: "Common Setup Errors", slug: "setup-errors", file: "1i_setup-errors", description: "How to fix common issues" },
    ],
  },
  {
    id: "git-github",
    title: "Git & GitHub Essentials",
    slug: "git-github",
    folder: "02_git-github",
    order: 2,
    description: "Non-negotiable skills. Skip this and you'll create noise instead of value.",
    items: [
      { title: "Overview", slug: "index", file: "2a_index", description: "Master version control" },
      { title: "Git Basics You Must Know", slug: "basics", file: "2b_basics", description: "Essential git commands" },
      { title: "Branching Strategy", slug: "branching", file: "2c_branching", description: "How to organize branches" },
      { title: "Commit Messages", slug: "commits", file: "2d_commits", description: "Good vs bad examples" },
      { title: "Syncing Fork with Upstream", slug: "syncing", file: "2e_syncing", description: "Keeping your fork updated" },
      { title: "Resolving Merge Conflicts", slug: "conflicts", file: "2f_conflicts", description: "Handling conflicting changes" },
      { title: "Rewriting History", slug: "rewriting-history", file: "2g_rewriting-history", description: "Rebase, squash, and amend" },
      { title: "When Not to Force Push", slug: "force-push", file: "2h_force-push", description: "Avoiding destructive operations" },
    ],
  },
  {
    id: "first-contribution",
    title: "Making Your First Contribution",
    slug: "first-contribution",
    folder: "03_first-contribution",
    order: 3,
    description: "From finding issues to getting your code merged.",
    items: [
      { title: "Overview", slug: "index", file: "3a_index", description: "Your first pull request" },
      { title: "Finding Good First Issues", slug: "finding-issues", file: "3b_finding-issues", description: "And spotting fake ones" },
      { title: "Picking Issues That Get Merged", slug: "picking-issues", file: "3c_picking-issues", description: "Strategic issue selection" },
      { title: "Asking Questions the Right Way", slug: "asking-questions", file: "3d_asking-questions", description: "Get help without being ignored" },
      { title: "Claiming an Issue", slug: "claiming-issues", file: "3e_claiming-issues", description: "And when not to" },
      { title: "Writing Clean Code", slug: "clean-code", file: "3f_clean-code", description: "Code that maintainers love" },
      { title: "Adding Tests", slug: "adding-tests", file: "3g_adding-tests", description: "When required, when optional" },
      { title: "Documentation Contributions", slug: "documentation", file: "3h_documentation", description: "Contributions that matter" },
    ],
  },
  {
    id: "issues-prs",
    title: "Issues & Pull Requests",
    slug: "issues-prs",
    folder: "04_issues-prs",
    order: 4,
    description: "Deep dive into the GitHub workflow.",
    items: [
      { title: "Overview", slug: "index", file: "4a_index", description: "Mastering the workflow" },
      { title: "How to Raise a Good Issue", slug: "raising-issues", file: "4b_raising-issues", description: "Issues that get attention" },
      { title: "Bug Reports vs Feature Requests", slug: "issue-types", file: "4c_issue-types", description: "Know the difference" },
      { title: "Writing a High-Quality PR", slug: "writing-prs", file: "4d_writing-prs", description: "PRs that get merged" },
      { title: "PR Description Template", slug: "pr-template", file: "4e_pr-template", description: "What maintainers expect" },
      { title: "Responding to Code Reviews", slug: "code-reviews", file: "4f_code-reviews", description: "Handle feedback gracefully" },
      { title: "Handling Rejection", slug: "handling-rejection", file: "4g_handling-rejection", description: "Without burning bridges" },
      { title: "Iterating on Feedback", slug: "iterating-feedback", file: "4h_iterating-feedback", description: "Improve efficiently" },
      { title: "Closing PRs the Right Way", slug: "closing-prs", file: "4i_closing-prs", description: "Clean up after yourself" },
    ],
  },
  {
    id: "programs",
    title: "Open Source Programs",
    slug: "programs",
    folder: "05_programs",
    order: 5,
    description: "Programs that can accelerate your journey. This section prepares, not just informs.",
    items: [
      { title: "Overview", slug: "index", file: "5a_index", description: "All programs at a glance" },
      { title: "Google Summer of Code (GSoC)", slug: "gsoc", file: "5b_gsoc", description: "The complete guide" },
      { title: "Linux Foundation Mentorship (LFX)", slug: "lfx", file: "5c_lfx", description: "Enterprise open source" },
      { title: "Season of Bugs (SOB)", slug: "sob", file: "5d_sob", description: "Security-focused contributions" },
      { title: "Code for GovTech (C4GT)", slug: "c4gt", file: "5e_c4gt", description: "Government tech projects" },
      { title: "Erasmus+ / ESoC", slug: "erasmus-esoc", file: "5f_erasmus-esoc", description: "European programs" },
      { title: "Outreachy", slug: "outreachy", file: "5g_outreachy", description: "Internships for underrepresented groups" },
      { title: "Comparing All Programs", slug: "comparison", file: "5h_comparison", description: "Side-by-side comparison" },
    ],
  },
  {
    id: "choosing-org",
    title: "Choosing the Right Organization",
    slug: "choosing-org",
    folder: "06_choosing-org",
    order: 6,
    description: "Not all organizations are created equal.",
    items: [
      { title: "Overview", slug: "index", file: "6a_index", description: "Finding your fit" },
      { title: "Signals of a Healthy Organization", slug: "healthy-signals", file: "6b_healthy-signals", description: "What to look for" },
      { title: "Evaluating Code Quality", slug: "code-quality", file: "6c_code-quality", description: "Technical assessment" },
      { title: "Mentor Availability", slug: "mentor-availability", file: "6d_mentor-availability", description: "Responsiveness matters" },
      { title: "Activity Metrics That Matter", slug: "activity-metrics", file: "6e_activity-metrics", description: "Data-driven decisions" },
      { title: "Red Flags You Should Never Ignore", slug: "red-flags", file: "6f_red-flags", description: "Warning signs" },
      { title: "When to Leave an Organization", slug: "when-to-leave", file: "6g_when-to-leave", description: "Know when to walk away" },
    ],
  },
  {
    id: "proposals",
    title: "Writing a Winning Proposal",
    slug: "proposals",
    folder: "07_proposals",
    order: 7,
    description: "Most applicants fail here. This section is brutally practical.",
    items: [
      { title: "Overview", slug: "index", file: "7a_index", description: "Crafting compelling proposals" },
      { title: "Understanding the Problem Statement", slug: "problem-statement", file: "7b_problem-statement", description: "Read between the lines" },
      { title: "Researching Existing Solutions", slug: "research", file: "7c_research", description: "Do your homework" },
      { title: "Defining Clear Deliverables", slug: "deliverables", file: "7d_deliverables", description: "Concrete outcomes" },
      { title: "Creating a Realistic Timeline", slug: "timeline", file: "7e_timeline", description: "Week-by-week planning" },
      { title: "Technical Depth vs Buzzwords", slug: "technical-depth", file: "7f_technical-depth", description: "Show real knowledge" },
      { title: "Writing Style That Mentors Respect", slug: "writing-style", file: "7g_writing-style", description: "Communication matters" },
      { title: "Common Proposal Mistakes", slug: "mistakes", file: "7h_mistakes", description: "What to avoid" },
      { title: "Proposal Review Checklist", slug: "checklist", file: "7i_checklist", description: "Final verification" },
    ],
  },
  {
    id: "communication",
    title: "Communication & Etiquette",
    slug: "communication",
    folder: "08_communication",
    order: 8,
    description: "How to communicate effectively in open source.",
    items: [
      { title: "Overview", slug: "index", file: "8a_index", description: "Open source communication" },
      { title: "How Maintainers Think", slug: "maintainer-mindset", file: "8b_maintainer-mindset", description: "Understand their perspective" },
      { title: "Async Communication Best Practices", slug: "async-communication", file: "8c_async-communication", description: "Working across timezones" },
      { title: "Asking for Help", slug: "asking-help", file: "8d_asking-help", description: "Without being ignored" },
      { title: "Disagreements & Conflict Resolution", slug: "conflict-resolution", file: "8e_conflict-resolution", description: "Handle disagreements" },
      { title: "Public vs Private Communication", slug: "public-private", file: "8f_public-private", description: "Know the difference" },
      { title: "Respecting Time Zones", slug: "timezones", file: "8g_timezones", description: "Global collaboration" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Developer Setup",
    slug: "tooling",
    folder: "09_tooling",
    order: 9,
    description: "Essential developer tools and configurations.",
    items: [
      { title: "Overview", slug: "index", file: "9a_index", description: "Essential developer tools" },
      { title: "Code Editors & IDE Setup", slug: "editors", file: "9b_editors", description: "Configuring your environment" },
      { title: "Debugging Techniques", slug: "debugging", file: "9c_debugging", description: "Find and fix bugs" },
      { title: "Linters, Formatters & CI", slug: "linters-ci", file: "9d_linters-ci", description: "Code quality tools" },
      { title: "Understanding CI Failures", slug: "ci-failures", file: "9e_ci-failures", description: "Fix pipeline issues" },
      { title: "Logs, Stack Traces & Errors", slug: "logs-errors", file: "9f_logs-errors", description: "Reading error output" },
    ],
  },
  {
    id: "long-term",
    title: "Becoming a Long-Term Contributor",
    slug: "long-term",
    folder: "10_long-term",
    order: 10,
    description: "Moving beyond beginner contributions.",
    items: [
      { title: "Overview", slug: "index", file: "10a_index", description: "Sustaining your contributions" },
      { title: "Moving Beyond Good First Issues", slug: "beyond-first-issues", file: "10b_beyond-first-issues", description: "Level up your contributions" },
      { title: "Taking Ownership of Components", slug: "ownership", file: "10c_ownership", description: "Become a domain expert" },
      { title: "Helping Review PRs", slug: "reviewing-prs", file: "10d_reviewing-prs", description: "Give back to the community" },
      { title: "Writing Design Docs", slug: "design-docs", file: "10e_design-docs", description: "Document architecture" },
      { title: "Becoming a Maintainer", slug: "becoming-maintainer", file: "10f_becoming-maintainer", description: "The path to maintainership" },
      { title: "Burnout Prevention", slug: "burnout", file: "10g_burnout", description: "Sustainable contribution" },
    ],
  },
  {
    id: "career",
    title: "Career & Growth",
    slug: "career",
    folder: "11_career",
    order: 11,
    description: "Leverage open source for career opportunities.",
    items: [
      { title: "Overview", slug: "index", file: "11a_index", description: "Career benefits of open source" },
      { title: "How Open Source Impacts Hiring", slug: "hiring-impact", file: "11b_hiring-impact", description: "What employers think" },
      { title: "Building a Strong Profile", slug: "contributor-profile", file: "11c_contributor-profile", description: "Stand out from the crowd" },
      { title: "What Recruiters Look At", slug: "recruiter-perspective", file: "11d_recruiter-perspective", description: "Inside the hiring process" },
      { title: "Contributions as Case Studies", slug: "case-studies", file: "11e_case-studies", description: "Tell your story" },
      { title: "Resume & Portfolio Integration", slug: "resume-portfolio", file: "11f_resume-portfolio", description: "Showcase your work" },
    ],
  },
  {
    id: "faqs",
    title: "FAQs & Common Failures",
    slug: "faqs",
    folder: "12_faqs",
    order: 12,
    description: "Common questions and failure patterns.",
    items: [
      { title: "Overview", slug: "index", file: "12a_index", description: "Common questions answered" },
      { title: "Why PRs Get Ignored", slug: "prs-ignored", file: "12b_prs-ignored", description: "Understand the silence" },
      { title: "Why PRs Get Rejected", slug: "prs-rejected", file: "12c_prs-rejected", description: "Learn from rejection" },
      { title: "Not Feeling Good Enough", slug: "not-good-enough", file: "12d_not-good-enough", description: "Overcoming self-doubt" },
      { title: "Handling Imposter Syndrome", slug: "imposter-syndrome", file: "12e_imposter-syndrome", description: "You belong here" },
      { title: "When to Pause or Pivot", slug: "pause-pivot", file: "12f_pause-pivot", description: "Know when to step back" },
    ],
  },
  {
    id: "final-check",
    title: "Final Reality Check",
    slug: "final-check",
    folder: "13_final-check",
    order: 13,
    description: "The truth about what it takes to succeed.",
    items: [
      { title: "Overview", slug: "index", file: "13a_index", description: "Are you ready?" },
      { title: "Why Most People Quit", slug: "why-people-quit", file: "13b_why-people-quit", description: "The hard truth" },
      { title: "What Separates Top 1%", slug: "top-contributors", file: "13c_top-contributors", description: "Excellence in open source" },
      { title: "Your 30-Day Action Plan", slug: "action-plan", file: "13d_action-plan", description: "Start your journey" },
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
