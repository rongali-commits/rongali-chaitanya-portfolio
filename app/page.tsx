import type { Metadata } from "next";

const services = [
  {
    title: "AI Integration",
    description:
      "Chatbots, document assistants, OpenAI API workflows, lead capture, and practical AI features for small teams.",
  },
  {
    title: "Python Automation",
    description:
      "Excel cleanup, report generation, scraping, file workflows, email automation, and API-based task automation.",
  },
  {
    title: "Basic Web Development",
    description:
      "Landing pages, dashboards, internal tools, forms, and simple full-stack apps built around real business tasks.",
  },
];

const projects = [
  {
    title: "AI Support Chatbot",
    type: "Client-ready showcase",
    description:
      "A website chatbot trained on FAQs, PDFs, and business information to answer customers and capture qualified leads.",
    stack: "OpenAI API, RAG, Python, FastAPI, React",
    impact: "Reduces repeated support replies and turns visitors into leads.",
  },
  {
    title: "Automated Invoice & Report Generator",
    type: "Automation showcase",
    description:
      "Upload Excel or CSV files, clean the data, generate PDF reports, and prepare email-ready summaries.",
    stack: "Python, Pandas, OpenPyXL, PDF generation",
    impact: "Turns hours of spreadsheet work into a repeatable workflow.",
  },
  {
    title: "Lead Generation Scraper Dashboard",
    type: "Data workflow showcase",
    description:
      "Collect public business data, deduplicate it, enrich records, and export clean leads to CSV or Google Sheets.",
    stack: "Python, Playwright, BeautifulSoup, Google Sheets API",
    impact: "Helps sales and marketing teams build cleaner prospect lists faster.",
  },
  {
    title: "AI Resume & Document Analyzer",
    type: "AI workflow showcase",
    description:
      "Extract key details from resumes or documents, summarize them, and rank or classify files using custom criteria.",
    stack: "Python, OpenAI API, PDF parsing, embeddings",
    impact: "Speeds up document review for recruiters and admin-heavy teams.",
  },
  {
    title: "AI Content Repurposing Workspace",
    type: "Creator tool showcase",
    description:
      "Turn blogs, transcripts, and long-form notes into LinkedIn posts, short summaries, email drafts, and content ideas.",
    stack: "OpenAI API, Next.js, prompt workflows",
    impact: "Helps creators and agencies publish more from one source asset.",
  },
  {
    title: "Noerong Publishing Website",
    type: "Passion project",
    description:
      "A publishing website at noerong.com, built from personal curiosity and a love for creating useful, readable work online.",
    stack: "Editorial web publishing, content systems, web design",
    impact: "Shows consistency, taste, and ownership beyond client work.",
  },
];

const steps = [
  "Understand the task and the business result",
  "Build a working first version quickly",
  "Test with real data and edge cases",
  "Deliver clean instructions and support",
];

export const metadata: Metadata = {
  title: "Rongali Chaitanya | AI Integration & Python Automation",
  description:
    "Portfolio of Rongali Chaitanya, a freelance AI integration, Python automation, and web development builder.",
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
          <a href="#work">Work</a>
          <a href="#noerong">Noerong</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Available for freelance projects</p>
          <h1>AI automation and web tools that save businesses time.</h1>
          <p className="hero-text">
            I am Rongali Chaitanya, a builder focused on AI integrations,
            Python automation, and simple web development for businesses that
            want practical tools, not buzzwords.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:hello@rongalichaitanya.com">
              Start a project
            </a>
            <a className="button secondary" href="#work">
              View work
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portfolio highlights">
          <div className="status-row">
            <span className="status-dot" aria-hidden="true" />
            <span>Full-day availability for client work</span>
          </div>
          <div className="metric-grid">
            <div>
              <strong>AI</strong>
              <span>Chatbots, RAG, APIs</span>
            </div>
            <div>
              <strong>Python</strong>
              <span>Scripts, data, scraping</span>
            </div>
            <div>
              <strong>Web</strong>
              <span>Dashboards, forms, tools</span>
            </div>
            <div>
              <strong>Publishing</strong>
              <span>noerong.com</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">What I build</p>
          <h2>Freelance services with clear business outcomes.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading wide">
          <p className="eyebrow">Portfolio showcases</p>
          <h2>Projects designed to prove I can solve paid client problems.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <dl>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.stack}</dd>
                </div>
                <div>
                  <dt>Impact</dt>
                  <dd>{project.impact}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section noerong" id="noerong">
        <div className="noerong-copy">
          <p className="eyebrow">Passion project</p>
          <h2>Noerong is where I publish because I enjoy building online.</h2>
          <p>
            Alongside freelance work, I run noerong.com as a publishing website
            out of passion. It shows the part of me that likes shipping,
            experimenting, writing, and owning creative projects beyond client
            briefs.
          </p>
        </div>
        <a className="text-link" href="https://noerong.com" target="_blank" rel="noreferrer">
          Visit noerong.com
        </a>
      </section>

      <section className="section process">
        <div className="section-heading">
          <p className="eyebrow">How I work</p>
          <h2>Fast, practical, and easy to communicate with.</h2>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Let us build</p>
          <h2>Have a repetitive task or AI idea?</h2>
          <p>
            Send the workflow, data source, or business problem. I can turn it
            into a simple automation, chatbot, dashboard, or web tool.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@rongalichaitanya.com">
          Email hello@rongalichaitanya.com
        </a>
      </section>
    </main>
  );
}
