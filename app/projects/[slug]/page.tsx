import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, internalProjects } from "../data";
import { ProjectLiveDemo } from "./ProjectLiveDemo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return internalProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Rongali Chaitanya",
    };
  }

  return {
    title: `${project.title} | Rongali Chaitanya`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <nav className="project-nav" aria-label="Project navigation">
        <Link className="brand" href="/" aria-label="Back to Rongali Chaitanya home">
          RC
        </Link>
        <div className="project-nav-links">
          <Link href="/">Portfolio</Link>
          <Link href="/#projects">All projects</Link>
          <a href="mailto:hello@rongalichaitanya.com">Contact</a>
        </div>
      </nav>

      <section className="project-hero section">
        <div>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="hero-text">{project.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">
              View demo
            </a>
            <a className="button secondary" href="mailto:hello@rongalichaitanya.com">
              Build something similar
            </a>
          </div>
        </div>

        <aside className="project-summary-card" aria-label="Project summary">
          <div>
            <span>Stack</span>
            <strong>{project.stack}</strong>
          </div>
          <div>
            <span>Outcome</span>
            <strong>{project.outcome}</strong>
          </div>
          <div className="metric-list">
            {project.metrics?.map((metric) => <em key={metric}>{metric}</em>)}
          </div>
        </aside>
      </section>

      <section className="section project-story">
        <article>
          <p className="eyebrow">Problem</p>
          <h2>What this solves</h2>
          <p>{project.challenge}</p>
        </article>
        <article>
          <p className="eyebrow">Solution</p>
          <h2>How I would build it</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="section demo-section" id="demo">
        <div className="section-heading">
          <p className="eyebrow">Visible demo</p>
          <h2>What a client would see and understand.</h2>
          <p>
            This is a live portfolio demo. You can click, type, filter, and run
            sample workflows directly in the browser.
          </p>
        </div>
        <ProjectLiveDemo slug={project.slug} />
      </section>

      <section className="section project-build">
        <div className="deliverable-panel">
          <p className="eyebrow">Deliverables</p>
          <h2>What is included</h2>
          <ul>
            {project.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="workflow-panel">
          <p className="eyebrow">Workflow</p>
          <h2>Build flow</h2>
          <ol>
            {project.workflow?.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section project-features">
        <p className="eyebrow">Feature set</p>
        <h2>Designed to become a paid client solution.</h2>
        <div className="feature-grid">
          {project.features?.map((feature) => (
            <article key={feature}>
              <h3>{feature}</h3>
              <p>
                Built with a practical handover in mind: clear inputs,
                repeatable outputs, and enough structure to extend later.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact project-contact">
        <div>
          <p className="eyebrow">Turn this into your project</p>
          <h2>Need a similar system for a real workflow?</h2>
          <p>
            Send the task, files, website, or process you want automated. I can
            scope a focused first version and build it into a usable tool.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:hello@rongalichaitanya.com">
            hello@rongalichaitanya.com
          </a>
          <Link className="button secondary" href="/#projects">
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}
