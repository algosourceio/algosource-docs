# AlgoSource Documentation

The complete open source contribution guide built with [Nextra](https://nextra.site/).

## Getting Started

Install dependencies:

```bash
npm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
docs/
├── pages/                    # Documentation pages (MDX files)
│   ├── _meta.json           # Navigation configuration
│   ├── index.mdx            # Home page
│   ├── before-you-start/    # Section folders
│   ├── getting-started/
│   ├── git-github/
│   ├── first-contribution/
│   ├── issues-prs/
│   ├── programs/
│   ├── choosing-org/
│   ├── proposals/
│   ├── communication/
│   ├── tooling/
│   ├── long-term/
│   ├── career/
│   ├── faqs/
│   └── final-check/
├── styles/
│   └── globals.css          # Custom styles
├── public/                   # Static assets
├── theme.config.tsx          # Nextra theme configuration
├── next.config.mjs           # Next.js configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

## Adding Content

1. Create a new .mdx file in the appropriate folder under pages/
2. Add the page to the _meta.json file in that folder
3. Use Nextra components for rich content

## Tech Stack

- Next.js 14
- Nextra 2
- Tailwind CSS
- MDX
