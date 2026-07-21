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
  liveUrl?: string;
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
    title: "Relay — Support & Lead Assistant",
    label: "AI integration",
    summary:
      "A website assistant that answers questions from FAQs, documents, and service pages while collecting visitor details for follow-up.",
    demoStack: "JavaScript retrieval + tested FastAPI API",
    stack: "FastAPI, embeddings, RAG, CRM integration",
    deliverables: [
      "Knowledge-base ingestion for FAQs, PDFs, and website content",
      "Lead capture flow with email-ready customer summaries",
      "Source-aware answers and simple admin update process",
    ],
    outcome:
      "Ideal for service businesses that want fewer repeated replies and better qualified website enquiries.",
    href: "/projects/ai-support-chatbot",
    liveUrl: "https://rongali-commits.github.io/support-lead-assistant/",
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
    title: "LedgerFlow — Invoice & Report Automation",
    label: "Python automation",
    summary:
      "A repeatable workflow that turns raw Excel or CSV files into clean reports, invoice PDFs, and email-ready summaries.",
    demoStack: "Browser CSV workflow + tested Python PDF pipeline",
    stack: "Python, Pandas, Excel/PDF templates, email APIs",
    deliverables: [
      "CSV and Excel cleanup with validation rules",
      "PDF invoice or report generation",
      "Export, email, and audit-friendly output folders",
    ],
    outcome:
      "Built for teams spending hours every week on spreadsheet formatting, reconciliation, and recurring reports.",
    href: "/projects/invoice-report-automation",
    liveUrl: "https://rongali-commits.github.io/invoice-report-automation/",
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
    title: "ProspectLab — Lead Intelligence Pipeline",
    label: "Data workflow",
    summary:
      "A web dashboard for collecting public business data, removing duplicates, cleaning records, and exporting qualified leads.",
    demoStack: "JavaScript dashboard + tested Python data pipeline",
    stack: "Python, Playwright, BeautifulSoup, Google Sheets API",
    deliverables: [
      "Public data extraction with responsible rate limits",
      "Duplicate detection and field normalization",
      "CSV and Google Sheets export for sales teams",
    ],
    outcome:
      "Useful for agencies, recruiters, real estate teams, and small sales teams that need cleaner prospect lists.",
    href: "/projects/lead-intelligence-dashboard",
    liveUrl: "https://rongali-commits.github.io/lead-intelligence-pipeline/",
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
    title: "Proofread — Document Review Workbench",
    label: "Document workflow",
    summary:
      "A transparent review workspace that matches documents against custom criteria, shows evidence, and exports a structured result.",
    demoStack: "JavaScript, local text analysis, evidence + JSON export",
    stack: "FastAPI, PDF/DOCX parsing, structured AI outputs",
    deliverables: [
      "Document upload and text extraction pipeline",
      "Custom scoring, tagging, and summary logic",
      "Structured CSV, JSON, or dashboard output",
    ],
    outcome:
      "Designed for recruiters, admins, and operations teams that need to review large batches of documents faster.",
    href: "/projects/document-resume-analyzer",
    liveUrl: "https://rongali-commits.github.io/document-review-workbench/",
    repository: "https://github.com/rongali-commits/document-review-workbench",
    challenge:
      "Teams lose time opening every PDF, copying details, and trying to compare documents with inconsistent formats.",
    solution:
      "A document analyzer that extracts structured fields, summarizes each file, and ranks items against custom rules.",
    metrics: ["Evidence shown", "Custom criteria", "Local processing"],
    workflow: ["Add text", "Set criteria", "Inspect evidence", "Export review"],
    features: [
      "Resume and PDF parsing",
      "Skill and keyword extraction",
      "Fit score and notes",
      "CSV or dashboard output",
    ],
  },
  {
    slug: "ai-content-workspace",
    title: "SourceRoom — Content Repurposing Workspace",
    label: "Creator tooling",
    summary:
      "A tool that turns long-form notes, articles, or transcripts into platform-ready posts, summaries, email drafts, and idea banks.",
    demoStack: "JavaScript, local editorial transforms, copy workflow",
    stack: "Next.js, model API, brand prompts, review + publishing",
    deliverables: [
      "Input workspace for transcript, blog, or notes",
      "Reusable prompt templates for different content formats",
      "Editable outputs for LinkedIn, email, short posts, and summaries",
    ],
    outcome:
      "Built for coaches, creators, agencies, and founders who want to publish more from one strong source asset.",
    href: "/projects/ai-content-workspace",
    liveUrl: "https://rongali-commits.github.io/content-repurposing-workspace/",
    repository: "https://github.com/rongali-commits/content-repurposing-workspace",
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
    label: "Independent research publication",
    summary:
      "A source-backed publication for research essays on history, science, philosophy, geopolitics, and the hidden forces shaping ordinary life.",
    demoStack: "Next.js, TypeScript, MDX, Vercel",
    stack: "Editorial strategy, web publishing, research workflow, design",
    deliverables: [
      "Essay-led publishing system and topic structure",
      "Readable editorial experience for long-form thinking",
      "Brand voice around curiosity, research, and intellectual exploration",
    ],
    outcome:
      "Demonstrates deep research, cross-domain synthesis, fact-checking, narrative structure, and clear long-form writing.",
    href: "https://noerong.com",
    external: true,
  },
];

export const internalProjects = projectShowcases.filter((project) => !project.external);

export function getProject(slug: string) {
  return internalProjects.find((project) => project.slug === slug);
}
