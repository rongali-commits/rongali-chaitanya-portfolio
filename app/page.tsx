import type { Metadata } from "next";
import { internalProjects } from "./projects/data";

const services = [
  {
    title: "Deep Research & Long-Form Writing",
    description:
      "Source-backed articles, essays, reports, and explainers built from a real question—not a recycled content brief.",
    points: ["Primary research", "Source synthesis", "Fact-checking", "Narrative structure"],
  },
  {
    title: "Technical & Business Content",
    description:
      "Clear writing for AI, software, operations, and unfamiliar subjects that need patient research before the first draft.",
    points: ["AI explainers", "White papers", "Case studies", "Founder content"],
  },
  {
    title: "Python Automation",
    description:
      "Reliable workflows for reports, spreadsheets, data cleanup, scraping, email, file processing, and repetitive operations.",
    points: ["Python", "Pandas", "Playwright", "APIs"],
  },
  {
    title: "Practical AI & Web Tools",
    description:
      "Source-aware assistants, document workflows, dashboards, and focused applications designed around a useful business outcome.",
    points: ["FastAPI", "RAG", "Next.js", "AI integration"],
  },
];

const engagements = [
  {
    title: "Research Article or Report",
    timeline: "4-10 days",
    description:
      "Turn a broad or difficult question into a source-backed piece with a clear argument and a reader-friendly structure.",
    includes: ["Research brief", "Source trail", "Edited final draft"],
  },
  {
    title: "Automation Sprint",
    timeline: "3-7 days",
    description:
      "Turn one repetitive spreadsheet, file, report, or data workflow into a dependable Python automation.",
    includes: ["Workflow map", "Working script or tool", "Clear handover notes"],
  },
  {
    title: "Research-to-Workflow System",
    timeline: "1-3 weeks",
    description:
      "Combine research, source organization, and software into a knowledge assistant, monitoring workflow, or editorial tool.",
    includes: ["Research structure", "Working interface", "Documented delivery"],
  },
];

const stats = [
  ["5+", "years in IT and practical software work"],
  ["3", "published, source-backed essays"],
  ["5", "independently deployed software products"],
  ["2", "professional service tracks"],
];

const skills = [
  "Deep research",
  "Long-form writing",
  "Source verification",
  "Research synthesis",
  "Technical explainers",
  "Editing",
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
    title: "Define the real question",
    text: "I clarify the reader or user, the evidence available, the outcome, and what a successful delivery must do.",
  },
  {
    title: "Research or map the workflow",
    text: "I gather credible sources for writing work or trace the inputs, rules, and edge cases for an automation.",
  },
  {
    title: "Write or build",
    text: "I create a structured draft or usable first version, then refine it against the brief and real feedback.",
  },
  {
    title: "Verify and deliver",
    text: "Claims, citations, inputs, failures, and final outputs are checked before a clear, documented handover.",
  },
];

const writingSamples = [
  {
    label: "History / philosophy",
    title: "World War II and the People Who Almost Existed",
    description:
      "A non-identity thought experiment about war, conception, and the fragile chain of events behind every human life.",
    proof: "Historical research, philosophical framing, careful counterfactual reasoning",
    href: "https://noerong.com/essays/world-war-ii-and-the-people-who-almost-existed",
  },
  {
    label: "Philosophy / science",
    title: "The Universe Is Not a Coffee Mug",
    description:
      "A skeptical examination of causality, cosmology, and why everyday intuition becomes unreliable at the edge of spacetime.",
    proof: "Conceptual explanation, scientific sourcing, accessible argument",
    href: "https://noerong.com/essays/the-universe-is-not-a-coffee-mug",
  },
  {
    label: "Geopolitics / history",
    title: "The British Empire Didn't Vanish. It Became Background Noise.",
    description:
      "An evidence-led argument about the institutional, linguistic, and political afterlife of formal empire.",
    proof: "Cross-domain synthesis, official sources, narrative analysis",
    href: "https://noerong.com/essays/the-british-empire-didnt-vanish-it-became-background-noise",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Research Writer & Python Automation Developer | Rongali Chaitanya",
  },
  description:
    "Research-based writing on complex subjects, plus Python automation, practical AI workflows, and focused web tools.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.rongalichaitanya.com/#profile-page",
  url: "https://www.rongalichaitanya.com",
  dateModified: "2026-07-21T20:30:00+05:30",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.rongalichaitanya.com/#rongali-chaitanya",
    name: "Rongali Chaitanya",
    url: "https://www.rongalichaitanya.com",
    mainEntityOfPage: "https://www.rongalichaitanya.com",
    description:
      "Independent research writer and Python automation developer creating source-backed content and practical software.",
    jobTitle: [
      "Research Writer",
      "Python Automation & AI Integration Developer",
      "Creator of Noerong",
    ],
    knowsAbout: [
      "Research writing",
      "Long-form content",
      "Source verification",
      "History",
      "Philosophy",
      "Science communication",
      "Python automation",
      "FastAPI",
      "AI integration",
      "Retrieval-augmented generation",
      "Next.js",
      "Business workflow automation",
    ],
    sameAs: [
      "https://github.com/rongali-commits",
      "https://www.linkedin.com/in/rongalichaitanya",
      "https://noerong.com/about",
    ],
    subjectOf: {
      "@type": "WebSite",
      "@id": "https://noerong.com/#website",
      name: "Noerong",
      url: "https://noerong.com",
      creator: { "@id": "https://www.rongalichaitanya.com/#rongali-chaitanya" },
    },
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
          <a href="#writing">Writing</a>
          <a href="#automation">Automation</a>
          <a href="#services">Services</a>
          <a href="#engagements">Hire</a>
          <a href="#about">About</a>
          <a href="#noerong">Noerong</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Research writing / Python automation / practical AI</p>
          <h1>I research complex subjects and automate repetitive work.</h1>
          <p className="hero-text">
            I write source-backed articles, reports, and explainers—and build
            Python automations, practical AI workflows, and focused web tools.
            Clients can hire me for either discipline or for projects where
            research and software need to work together.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:hello@rongalichaitanya.com">
              Discuss your brief
            </a>
            <a className="button secondary" href="#writing">
              Review my work
            </a>
          </div>
          <div className="proof-row" aria-label="Portfolio proof points">
            <span>Independent publication at Noerong</span>
            <span>Source-backed research and visible citations</span>
            <span>Live software with public repositories</span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Professional highlights">
          <div className="visual-topline">
            <span className="signal" aria-hidden="true" />
            <span>Available for writing and automation projects</span>
          </div>
          <div className="visual-flow">
            <div>
              <span>Start</span>
              <strong>A question or a workflow</strong>
            </div>
            <div>
              <span>Work</span>
              <strong>Research, writing, Python</strong>
            </div>
            <div>
              <span>Deliver</span>
              <strong>Clear content or a working system</strong>
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
        <span>Available for research writing and automation</span>
        <span>Replies within one business day</span>
      </section>

      <section className="section writing" id="writing">
        <div className="section-heading">
          <p className="eyebrow">Selected writing</p>
          <h2>Research-led essays that make difficult ideas readable.</h2>
          <p>
            Noerong is my independent publication and the clearest evidence of
            how I work: begin with a stubborn question, follow credible sources,
            test the argument, and preserve uncertainty where the evidence is incomplete.
          </p>
        </div>
        <div className="writing-grid">
          {writingSamples.map((sample) => (
            <article className="writing-card" key={sample.title}>
              <p className="project-label">{sample.label}</p>
              <h3>{sample.title}</h3>
              <p>{sample.description}</p>
              <div className="writing-proof">
                <span>Demonstrates</span>
                <strong>{sample.proof}</strong>
              </div>
              <a className="project-cta" href={sample.href} target="_blank" rel="noreferrer">
                Read on Noerong <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="automation">
        <div className="section-heading">
          <p className="eyebrow">Selected software</p>
          <h2>Five working products you can open, test, and inspect.</h2>
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
          <p className="eyebrow">Two disciplines, one standard</p>
          <h2>Work I can take from unclear to usable.</h2>
          <p>
            Choose research and writing, automation and software, or a combined
            project. In every case, I clarify the problem, show my reasoning,
            and deliver work that another person can inspect and use.
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
          <h2>You should talk to me when the subject or workflow is still messy.</h2>
        </div>
        <div className="fit-list">
          <article>
            <strong>A difficult subject needs a clear explanation</strong>
            <p>Research articles, white papers, explainers, reports, or narrative scripts.</p>
          </article>
          <article>
            <strong>The draft exists, but the thinking is thin</strong>
            <p>Source verification, structural editing, fact-checking, and stronger arguments.</p>
          </article>
          <article>
            <strong>People repeat work that software should handle</strong>
            <p>Spreadsheets, reports, data collection, document review, APIs, and dashboards.</p>
          </article>
        </div>
      </section>

      <section className="section about-band" id="about">
        <div>
          <p className="eyebrow">About me</p>
          <h2>Research writer and automation developer.</h2>
        </div>
        <div className="about-copy">
          <p>
            My work has two serious tracks. As a writer, I research across
            disciplines, compare sources and competing explanations, and turn
            complexity into clear long-form content. I am comfortable entering
            unfamiliar subjects because the method stays the same: define the
            question, find credible evidence, and earn every conclusion.
          </p>
          <p>
            As a developer, I bring 5+ years of IT and software experience to
            Python automation, APIs, scraping, data work, AI integration, and
            focused web tools. Both disciplines rely on the same habits: patient
            investigation, transparent reasoning, careful verification, and a
            clear final handover.
          </p>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading compact">
          <p className="eyebrow">Skill set</p>
          <h2>Research, editorial, and technical capabilities.</h2>
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
          <h2>Clear project shapes, not vague promises.</h2>
          <p>
            Start with a question, a content brief, or a repeated task. I will
            help define a bounded deliverable before the work begins.
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
          <p className="eyebrow">Independent publication</p>
          <h2>Noerong is my public research and writing practice.</h2>
        </div>
        <div className="noerong-panel">
          <p>
            Noerong publishes source-backed essays across history, science,
            philosophy, geopolitics, and human life. It is not a generic content
            site; it is where I demonstrate deep research, independent judgment,
            strong narrative structure, and respect for difficult evidence.
          </p>
          <p>
            I also accept commissioned research and writing across a broad range
            of subjects. The topic can change; the standard does not—credible
            sources, visible reasoning, clear prose, and honest uncertainty.
          </p>
          <a className="text-link" href="https://noerong.com" target="_blank" rel="me noreferrer">
            Read Noerong.com
          </a>
        </div>
      </section>

      <section className="section process">
        <div className="section-heading compact">
          <p className="eyebrow">Working style</p>
          <h2>A clear process from question to finished work.</h2>
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
          <h2>Tell me what you need understood, written, or automated.</h2>
          <p>
            Send me the topic or workflow, the intended audience or user, and
            the outcome you need. I can deliver a researched article or report,
            a Python automation, an AI-assisted workflow, or a focused web tool.
          </p>
          <ul className="contact-notes" aria-label="Helpful details to include">
            <li>The question, topic, or repeated task</li>
            <li>Available sources, files, websites, or data</li>
            <li>Audience, deliverable, deadline, and success criteria</li>
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
        <a href="https://www.linkedin.com/in/rongalichaitanya" target="_blank" rel="me noreferrer">
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
