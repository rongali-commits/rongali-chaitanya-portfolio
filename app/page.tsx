import type { Metadata } from "next";
import { internalProjects } from "./projects/data";

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

const engagements = [
  {
    title: "Automation Sprint",
    timeline: "3-7 days",
    description:
      "Turn one repetitive spreadsheet, file, report, or scraping workflow into a reliable Python automation.",
    includes: ["Workflow map", "Working script or tool", "Simple handover notes"],
  },
  {
    title: "AI Assistant Build",
    timeline: "1-2 weeks",
    description:
      "Build a practical AI assistant for support, documents, lead capture, or internal knowledge search.",
    includes: ["Knowledge setup", "Chat or dashboard UI", "Prompt and source logic"],
  },
  {
    title: "Web Tool / Dashboard",
    timeline: "1-3 weeks",
    description:
      "Launch a focused web app for a business workflow, with clean UI and deployment-ready structure.",
    includes: ["Next.js or FastAPI build", "Forms and exports", "Vercel/GitHub deployment"],
  },
];

const stats = [
  ["5+", "years in IT and practical software work"],
  ["5", "independently deployed live products"],
  ["3", "focused ways to hire me"],
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
  title: {
    absolute: "Python Automation & AI Integration Developer | Rongali Chaitanya",
  },
  description:
    "I build Python automations, practical AI assistants, and focused web tools for agencies, founders, and operations teams.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.rongalichaitanya.com/#profile-page",
  url: "https://www.rongalichaitanya.com",
  dateModified: "2026-07-18",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.rongalichaitanya.com/#rongali-chaitanya",
    name: "Rongali Chaitanya",
    url: "https://www.rongalichaitanya.com",
    mainEntityOfPage: "https://www.rongalichaitanya.com",
    description:
      "Python automation and AI integration developer, writer, and creator of the independent publication Noerong.",
    jobTitle: [
      "Python Automation & AI Integration Developer",
      "Writer and Creator of Noerong",
    ],
    knowsAbout: [
      "Python automation",
      "FastAPI",
      "AI integration",
      "Retrieval-augmented generation",
      "Next.js",
      "Business workflow automation",
    ],
    sameAs: [
      "https://github.com/rongali-commits",
      "https://www.linkedin.com/in/rongali-chaitanya-29b4772a2",
      "https://noerong.com/about",
    ],
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Rongali Chaitanya home">
          RC
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#engagements">Hire</a>
          <a href="#about">About</a>
          <a href="#noerong">Noerong</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Python automation / practical AI / web tools</p>
          <h1>Rongali Chaitanya builds practical automation and AI tools.</h1>
          <p className="hero-text">
            I build Python automations, practical AI assistants, and focused
            dashboards for agencies, founders, and operations teams. Every
            engagement starts with a clear workflow and ends with working
            software, deployment, and documented handover.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:hello@rongalichaitanya.com">
              Discuss a project
            </a>
            <a className="button secondary" href="#projects">
              Open live projects
            </a>
          </div>
          <div className="proof-row" aria-label="Portfolio proof points">
            <span>5 independently hosted applications</span>
            <span>Public source + automated checks</span>
            <span>Clear, handover-focused delivery</span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Professional highlights">
          <div className="visual-topline">
            <span className="signal" aria-hidden="true" />
            <span>Available for focused freelance builds</span>
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

      <section className="trust-strip" aria-label="Availability and working details">
        <span>Based in India</span>
        <span>UTC+5:30</span>
        <span>Available for focused freelance builds</span>
        <span>Replies within one business day</span>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Five standalone products you can open, test, and inspect.</h2>
          <p>
            Every project has its own live application and public repository.
            The running browser implementation, tested backend code, and
            production extension are labelled separately so you can verify
            exactly what exists today.
          </p>
        </div>
        <div className="project-grid">
          {internalProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <a className="project-card-content" href={project.href}>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-details">
                  <div>
                    <span>Implemented and live</span>
                    <strong>{project.demoStack}</strong>
                  </div>
                  <div>
                    <span>Production extension</span>
                    <strong>{project.stack}</strong>
                  </div>
                </div>
                <ul>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </a>
              <div className="project-card-actions">
                {project.liveUrl && (
                  <a
                    className="project-cta"
                    href={project.liveUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open live app <span aria-hidden="true">↗</span>
                  </a>
                )}
                <a className="project-source" href={project.href}>
                  Case study
                </a>
                {project.repository && (
                  <a
                    className="project-source"
                    href={project.repository}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View source <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Work I can be hired for immediately.</h2>
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

      <section className="section fit-section">
        <div className="fit-panel">
          <p className="eyebrow">Best fit</p>
          <h2>You should talk to me if your team is still doing this manually.</h2>
        </div>
        <div className="fit-list">
          <article>
            <strong>Spreadsheets that keep coming back</strong>
            <p>Reports, invoices, CSV cleanup, and recurring operations work.</p>
          </article>
          <article>
            <strong>Customer questions that repeat</strong>
            <p>FAQs, document search, lead qualification, and support triage.</p>
          </article>
          <article>
            <strong>Data scattered across websites or tools</strong>
            <p>Public lead collection, API integrations, and dashboard views.</p>
          </article>
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

      <section className="section engagements" id="engagements">
        <div className="section-heading">
          <p className="eyebrow">Ways to hire me</p>
          <h2>Clear project shapes, not vague development hours.</h2>
          <p>
            Most good freelance projects start with one painful workflow. These
            are the three simplest ways to turn that workflow into something
            usable.
          </p>
        </div>
        <div className="engagement-grid">
          {engagements.map((engagement) => (
            <article className="engagement-card" key={engagement.title}>
              <div>
                <p className="project-label">{engagement.timeline}</p>
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
              </div>
              <ul>
                {engagement.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section noerong" id="noerong">
        <div>
          <p className="eyebrow">Writing and publishing</p>
          <h2>Creator and writer at Noerong.com.</h2>
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
          <a className="text-link" href="https://noerong.com" target="_blank" rel="me noreferrer">
            Read Noerong.com
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
          <h2>Tell me the task you want off your plate.</h2>
          <p>
            Send me the task, the data source, and the result you want. I can
            help turn it into an automation, AI assistant, dashboard, scraper,
            report system, or lightweight web app.
          </p>
          <ul className="contact-notes" aria-label="Helpful details to include">
            <li>What you do manually today</li>
            <li>Sample file, website, or data source</li>
            <li>Ideal outcome and timeline</li>
          </ul>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:hello@rongalichaitanya.com">
            hello@rongalichaitanya.com
          </a>
          <a className="button secondary" href="https://github.com/rongali-commits" target="_blank" rel="noreferrer">
            Review GitHub
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Rongali Chaitanya</span>
        <a href="mailto:hello@rongalichaitanya.com">Email</a>
        <a href="https://github.com/rongali-commits" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rongali-chaitanya-29b4772a2" target="_blank" rel="me noreferrer">
          LinkedIn
        </a>
        <a href="https://noerong.com" target="_blank" rel="me noreferrer">
          Noerong
        </a>
      </footer>
      </main>
    </>
  );
}
