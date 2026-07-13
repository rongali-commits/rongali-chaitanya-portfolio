export type ProjectShowcase = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  demoStack?: string;
  stack: string;
  deliverables: string[];
  outcome: string;
  href: string;
  repository?: string;
  external?: boolean;
  challenge?: string;
  solution?: string;
  metrics?: string[];
  workflow?: string[];
  features?: string[];
};

export const projectShowcases: ProjectShowcase[] = [
  {
    slug: "ai-support-chatbot",
    title: "AI Customer Support & Lead Assistant",
    label: "AI integration",
    summary:
      "A website assistant that answers questions from FAQs, documents, and service pages while collecting visitor details for follow-up.",
    demoStack: "Next.js, React, TypeScript, rule-based intent routing",
    stack: "OpenAI API, embeddings, RAG, FastAPI, React",
    deliverables: [
      "Knowledge-base ingestion for FAQs, PDFs, and website content",
      "Lead capture flow with email-ready customer summaries",
      "Source-aware answers and simple admin update process",
    ],
    outcome:
      "Ideal for service businesses that want fewer repeated replies and better qualified website enquiries.",
    href: "/projects/ai-support-chatbot",
    repository: "https://github.com/rongali-commits/support-lead-assistant",
    challenge:
      "Small businesses answer the same customer questions every day, but most visitors still leave before contacting the team.",
    solution:
      "A support assistant that searches approved business knowledge, gives concise answers, and turns high-intent questions into lead records.",
    metrics: ["FAQ answers in seconds", "Lead capture built in", "Sources shown for trust"],
    workflow: ["Upload docs", "Index knowledge", "Answer visitors", "Send lead summary"],
    features: [
      "Website chat widget",
      "Document and FAQ search",
      "Lead qualification questions",
      "Admin-ready knowledge updates",
    ],
  },
  {
    slug: "invoice-report-automation",
    title: "Automated Invoice & Report System",
    label: "Python automation",
    summary:
      "A repeatable workflow that turns raw Excel or CSV files into clean reports, invoice PDFs, and email-ready summaries.",
    demoStack: "Next.js, React, TypeScript, in-browser CSV parsing",
    stack: "Python, Pandas, OpenPyXL, PDF generation, email APIs",
    deliverables: [
      "CSV and Excel cleanup with validation rules",
      "PDF invoice or report generation",
      "Export, email, and audit-friendly output folders",
    ],
    outcome:
      "Built for teams spending hours every week on spreadsheet formatting, reconciliation, and recurring reports.",
    href: "/projects/invoice-report-automation",
    repository: "https://github.com/rongali-commits/invoice-report-automation",
    challenge:
      "Manual spreadsheet cleanup is slow, inconsistent, and easy to break when the source file changes.",
    solution:
      "A Python workflow that validates rows, standardizes columns, calculates totals, and prepares polished report and invoice outputs.",
    metrics: ["2 hour task to minutes", "Validation before export", "PDF and CSV outputs"],
    workflow: ["Upload CSV", "Clean records", "Generate report", "Email outputs"],
    features: [
      "Excel and CSV parsing",
      "Data quality checks",
      "Invoice PDF preview",
      "Reusable report templates",
    ],
  },
  {
    slug: "lead-intelligence-dashboard",
    title: "Lead Intelligence Scraper Dashboard",
    label: "Data workflow",
    summary:
      "A web dashboard for collecting public business data, removing duplicates, cleaning records, and exporting qualified leads.",
    demoStack: "Next.js, React, TypeScript, safe sample lead data",
    stack: "Python, Playwright, BeautifulSoup, Google Sheets API",
    deliverables: [
      "Public data extraction with responsible rate limits",
      "Duplicate detection and field normalization",
      "CSV and Google Sheets export for sales teams",
    ],
    outcome:
      "Useful for agencies, recruiters, real estate teams, and small sales teams that need cleaner prospect lists.",
    href: "/projects/lead-intelligence-dashboard",
    repository: "https://github.com/rongali-commits/lead-intelligence-pipeline",
    challenge:
      "Sales teams often collect leads manually from public sources, then spend more time cleaning duplicates than contacting prospects.",
    solution:
      "A scraper dashboard that collects public records, normalizes fields, scores leads, and exports ready-to-use lists.",
    metrics: ["Public data only", "Deduplicated exports", "Google Sheets sync"],
    workflow: ["Choose source", "Collect records", "Clean and score", "Export leads"],
    features: [
      "Responsible scraping flow",
      "Lead quality scoring",
      "Duplicate detection",
      "CSV and Sheets export",
    ],
  },
  {
    slug: "document-resume-analyzer",
    title: "Document Intelligence & Resume Analyzer",
    label: "AI workflow",
    summary:
      "An AI-powered review tool that extracts key details from PDFs, resumes, and documents, then summarizes or ranks them against custom criteria.",
    demoStack: "Next.js, React, TypeScript, sample scoring workflow",
    stack: "Python, PDF parsing, OpenAI API, structured outputs",
    deliverables: [
      "Document upload and text extraction pipeline",
      "Custom scoring, tagging, and summary logic",
      "Structured CSV, JSON, or dashboard output",
    ],
    outcome:
      "Designed for recruiters, admins, and operations teams that need to review large batches of documents faster.",
    href: "/projects/document-resume-analyzer",
    challenge:
      "Teams lose time opening every PDF, copying details, and trying to compare documents with inconsistent formats.",
    solution:
      "A document analyzer that extracts structured fields, summarizes each file, and ranks items against custom rules.",
    metrics: ["Structured extraction", "Custom scoring", "Batch review"],
    workflow: ["Upload PDFs", "Extract fields", "Score criteria", "Export summary"],
    features: [
      "Resume and PDF parsing",
      "Skill and keyword extraction",
      "Fit score and notes",
      "CSV or dashboard output",
    ],
  },
  {
    slug: "ai-content-workspace",
    title: "AI Content Repurposing Workspace",
    label: "Creator tooling",
    summary:
      "A tool that turns long-form notes, articles, or transcripts into platform-ready posts, summaries, email drafts, and idea banks.",
    demoStack: "Next.js, React, TypeScript, browser-based text transforms",
    stack: "Next.js, OpenAI API, prompt workflows, local storage",
    deliverables: [
      "Input workspace for transcript, blog, or notes",
      "Reusable prompt templates for different content formats",
      "Editable outputs for LinkedIn, email, short posts, and summaries",
    ],
    outcome:
      "Built for coaches, creators, agencies, and founders who want to publish more from one strong source asset.",
    href: "/projects/ai-content-workspace",
    challenge:
      "Creators and agencies often have strong raw material, but turning it into multiple useful formats takes too long.",
    solution:
      "A focused AI workspace that transforms one source into drafts for different channels while keeping the user in editorial control.",
    metrics: ["One input to many formats", "Reusable prompts", "Editable outputs"],
    workflow: ["Paste source", "Choose formats", "Generate drafts", "Edit and publish"],
    features: [
      "Transcript and article input",
      "LinkedIn and email drafts",
      "Summary and idea outputs",
      "Reusable prompt presets",
    ],
  },
  {
    slug: "noerong-publishing-website",
    title: "Noerong Publishing Website",
    label: "Passion project",
    summary:
      "An independent publication for essays on history, science, philosophy, geopolitics, and the hidden forces shaping ordinary life.",
    demoStack: "Next.js, TypeScript, MDX, Vercel",
    stack: "Editorial strategy, web publishing, research workflow, design",
    deliverables: [
      "Essay-led publishing system and topic structure",
      "Readable editorial experience for long-form thinking",
      "Brand voice around curiosity, research, and intellectual exploration",
    ],
    outcome:
      "Shows the research-driven side of my work: patient thinking, clear writing, and the habit of turning broad questions into useful structure.",
    href: "https://noerong.com",
    external: true,
  },
];

export const internalProjects = projectShowcases.filter((project) => !project.external);

export function getProject(slug: string) {
  return internalProjects.find((project) => project.slug === slug);
}
