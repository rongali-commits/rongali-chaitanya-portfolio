import type { Metadata } from "next";

const services = [
  {
    title: "AI Integration",
    description:
      "Custom chatbots, document assistants, OpenAI API workflows, RAG search, lead qualification, and AI features that fit into real business operations.",
    points: ["OpenAI API", "RAG systems", "Business chatbots", "AI workflows"],
  },
  {
    title: "Python Automation",
    description:
      "Automation for reports, spreadsheets, data cleanup, scraping, email workflows, file processing, and repetitive back-office tasks.",
    points: ["Pandas", "Playwright", "APIs", "Excel/CSV"],
  },
  {
    title: "Web Development",
    description:
      "Professional landing pages, dashboards, internal tools, forms, and lightweight full-stack apps built for practical use and quick deployment.",
    points: ["Next.js", "React", "FastAPI", "Vercel"],
  },
];

const projects = [
  {
    title: "AI Customer Support & Lead Assistant",
    label: "AI integration",
    summary:
      "A website assistant that answers questions from FAQs, documents, and service pages while collecting visitor details for follow-up.",
    stack: "OpenAI API, embeddings, RAG, FastAPI, React",
    deliverables: [
      "Knowledge-base ingestion for FAQs, PDFs, and website content",
      "Lead capture flow with email-ready customer summaries",
      "Source-aware answers and simple admin update process",
    ],
    outcome:
      "Ideal for service businesses that want fewer repeated replies and better qualified website enquiries.",
  },
  {
    title: "Automated Invoice & Report System",
    label: "Python automation",
    summary:
      "A repeatable workflow that turns raw Excel or CSV files into clean reports, invoice PDFs, and email-ready summaries.",
    stack: "Python, Pandas, OpenPyXL, PDF generation, email APIs",
    deliverables: [
      "CSV and Excel cleanup with validation rules",
      "PDF invoice or report generation",
      "Export, email, and audit-friendly output folders",
    ],
    outcome:
      "Built for teams spending hours every week on spreadsheet formatting, reconciliation, and recurring reports.",
  },
  {
    title: "Lead Intelligence Scraper Dashboard",
    label: "Data workflow",
    summary:
      "A web dashboard for collecting public business data, removing duplicates, cleaning records, and exporting qualified leads.",
    stack: "Python, Playwright, BeautifulSoup, Google Sheets API",
    deliverables: [
      "Public data extraction with responsible rate limits",
      "Duplicate detection and field normalization",
      "CSV and Google Sheets export for sales teams",
    ],
    outcome:
      "Useful for agencies, recruiters, real estate teams, and small sales teams that need cleaner prospect lists.",
  },
  {
    title: "Document Intelligence & Resume Analyzer",
    label: "AI workflow",
    summary:
      "An AI-powered review tool that extracts key details from PDFs, resumes, and documents, then summarizes or ranks them against custom criteria.",
    stack: "Python, PDF parsing, OpenAI API, structured outputs",
    deliverables: [
      "Document upload and text extraction pipeline",
      "Custom scoring, tagging, and summary logic",
      "Structured CSV, JSON, or dashboard output",
    ],
    outcome:
      "Designed for recruiters, admins, and operations teams that need to review large batches of documents faster.",
  },
  {
    title: "AI Content Repurposing Workspace",
    label: "Creator tooling",
    summary:
      "A tool that turns long-form notes, articles, or transcripts into platform-ready posts, summaries, email drafts, and idea banks.",
    stack: "Next.js, OpenAI API, prompt workflows, local storage",
    deliverables: [
      "Input workspace for transcript, blog, or notes",
      "Reusable prompt templates for different content formats",
      "Editable outputs for LinkedIn, email, short posts, and summaries",
    ],
    outcome:
      "Built for coaches, creators, agencies, and founders who want to publish more from one strong source asset.",
  },
  {
    title: "Noerong Publishing Website",
    label: "Passion project",
    summary:
      "An independent publication for essays on history, science, philosophy, geopolitics, and the hidden forces shaping ordinary life.",
    stack: "Editorial strategy, web publishing, research workflow, design",
    deliverables: [
      "Essay-led publishing system and topic structure",
      "Readable editorial experience for long-form thinking",
      "Brand voice around curiosity, research, and intellectual exploration",
    ],
    outcome:
      "Shows the research-driven side of my work: patient thinking, clear writing, and the habit of turning broad questions into useful structure.",
  },
];

const stats = [
  ["5+", "years in IT and practical software work"],
  ["3", "core services: AI, automation, web"],
  ["6", "client-ready project systems"],
  ["1", "independent publishing project"],
];

const skills = [
  "Python",
  "FastAPI",
  "Pandas",
  "Playwright",
  "OpenAI API",
  "RAG",
  "Embeddings",
  "Prompt workflows",
  "Next.js",
  "React",
  "TypeScript",
  "HTML/CSS",
  "REST APIs",
  "Google Sheets API",
  "GitHub",
  "Vercel",
];

const process = [
  {
    title: "Map the workflow",
    text: "I start with the real task, the data involved, and the business result you want.",
  },
  {
    title: "Build the working version",
    text: "I ship a usable first version quickly, then refine it with your actual data and feedback.",
  },
  {
    title: "Test the edges",
    text: "I check messy inputs, repeated runs, failures, exports, and deployment details.",
  },
  {
    title: "Hand over clearly",
    text: "You get a working tool, simple instructions, and support for the first improvements.",
  },
];

export const metadata: Metadata = {
  title: "Rongali Chaitanya | AI Integration, Python Automation & Web Development",
  description:
    "Professional portfolio of Rongali Chaitanya, an IT professional with 5 years of experience building AI integrations, Python automations, and practical web tools.",
};

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Rongali Chaitanya home">
          RC
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#noerong">Noerong</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI Integration / Python Automation / Web Development</p>
          <h1>Practical AI and automation systems for businesses.</h1>
          <p className="hero-text">
            I am Rongali Chaitanya, an IT professional with 5 years of
            experience building useful software around real workflows. I help
            teams automate repetitive work, integrate AI into their operations,
            and launch clean web tools that are easy to use.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:hello@rongalichaitanya.com">
              Email hello@rongalichaitanya.com
            </a>
            <a className="button secondary" href="#projects">
              View project systems
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Professional highlights">
          <div className="visual-topline">
            <span className="signal" aria-hidden="true" />
            <span>Available for freelance work</span>
          </div>
          <div className="visual-flow">
            <div>
              <span>Input</span>
              <strong>Data, docs, tasks</strong>
            </div>
            <div>
              <span>Build</span>
              <strong>AI + Python + Web</strong>
            </div>
            <div>
              <span>Output</span>
              <strong>Time saved, cleaner work</strong>
            </div>
          </div>
          <div className="visual-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Focused services for small teams, founders, and agencies.</h2>
          <p>
            I work best on projects where a business process can be made faster,
            clearer, or more reliable with the right combination of AI, Python,
            and a simple web interface.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-band" id="about">
        <div>
          <p className="eyebrow">About me</p>
          <h2>Builder, automation thinker, and curious generalist.</h2>
        </div>
        <div className="about-copy">
          <p>
            I bring 5 years of IT experience across software workflows,
            automation, integrations, and web delivery. My strength is turning
            a messy manual process into a clear tool: understand the workflow,
            choose the simplest technical path, and ship something the business
            can actually use.
          </p>
          <p>
            My stack is practical: Python for automation, APIs, scraping, and
            data work; OpenAI and RAG for AI features; and Next.js, React, and
            FastAPI for web tools and dashboards. I care about clean handover,
            readable implementation, and tools that continue to make sense after
            the first demo.
          </p>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading compact">
          <p className="eyebrow">Skill set</p>
          <h2>Tools I use to ship practical systems.</h2>
        </div>
        <div className="skill-cloud" aria-label="Skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Project systems</p>
          <h2>Complete portfolio projects ready to adapt for clients.</h2>
          <p>
            These are not random demos. Each one is shaped like a service that a
            real business can understand, buy, and use.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-details">
                <div>
                  <span>Stack</span>
                  <strong>{project.stack}</strong>
                </div>
                <div>
                  <span>Outcome</span>
                  <strong>{project.outcome}</strong>
                </div>
              </div>
              <ul>
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section noerong" id="noerong">
        <div>
          <p className="eyebrow">Passion project</p>
          <h2>Noerong is my independent publishing project.</h2>
        </div>
        <div className="noerong-panel">
          <p>
            Noerong is where I explore questions across history, science,
            philosophy, geopolitics, and human life. The publication is built
            around a simple instinct: question the obvious, follow the strange,
            and make complicated ideas readable without flattening them.
          </p>
          <p>
            It reflects how I like to think and work: research patiently,
            connect ideas across domains, test assumptions, and turn complexity
            into something clear enough for other people to use.
          </p>
          <a className="text-link" href="https://noerong.com" target="_blank" rel="noreferrer">
            Visit noerong.com
          </a>
        </div>
      </section>

      <section className="section process">
        <div className="section-heading compact">
          <p className="eyebrow">Working style</p>
          <h2>A clear process from idea to usable tool.</h2>
        </div>
        <ol className="process-list">
          {process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Start a project</p>
          <h2>Have a workflow that should not be manual anymore?</h2>
          <p>
            Send me the task, the data source, and the result you want. I can
            help turn it into an automation, AI assistant, dashboard, scraper,
            report system, or lightweight web app.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:hello@rongalichaitanya.com">
            hello@rongalichaitanya.com
          </a>
          <a className="button secondary" href="https://noerong.com" target="_blank" rel="noreferrer">
            Read Noerong
          </a>
        </div>
      </section>
    </main>
  );
}
