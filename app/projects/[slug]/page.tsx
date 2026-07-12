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
    title: `${project.title} Live Demo | Rongali Chaitanya`,
    description: `Try the live ${project.title} demo by Rongali Chaitanya.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={`solo-site solo-${project.slug}`}>
      <nav className="solo-nav" aria-label={`${project.title} navigation`}>
        <Link className="brand" href="/" aria-label="Back to Rongali Chaitanya home">
          RC
        </Link>
        <div className="solo-product-name">
          <span>{project.label}</span>
          <strong>{project.title}</strong>
        </div>
        <div className="project-nav-links">
          <Link href="/#projects">All apps</Link>
          <a href="mailto:hello@rongalichaitanya.com">Hire me</a>
        </div>
      </nav>

      <section className="solo-hero">
        <aside className="solo-brief">
          <p className="eyebrow">Live product demo</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="solo-metrics">
            {project.metrics?.map((metric) => <span key={metric}>{metric}</span>)}
          </div>
          <div className="solo-actions">
            <a className="button primary" href="mailto:hello@rongalichaitanya.com">
              Build this for me
            </a>
            <Link className="button secondary" href="/">
              Portfolio
            </Link>
          </div>
        </aside>

        <section className="solo-app-shell" aria-label={`${project.title} live app`}>
          <div className="solo-app-toolbar">
            <div>
              <span>Live app</span>
              <strong>Interactive sample workflow</strong>
            </div>
            <em>Runs in browser</em>
          </div>
          <ProjectLiveDemo slug={project.slug} />
        </section>
      </section>

      <section className="solo-section">
        <div className="solo-section-heading">
          <p className="eyebrow">What this app proves</p>
          <h2>A complete client-ready workflow, packaged as a focused product.</h2>
        </div>
        <div className="solo-proof-grid">
          <article>
            <span>Problem</span>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>Solution</span>
            <p>{project.solution}</p>
          </article>
          <article>
            <span>Stack</span>
            <p>{project.stack}</p>
          </article>
        </div>
      </section>

      <section className="solo-section solo-workflow">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2>How the real client version would work.</h2>
        </div>
        <ol>
          {project.workflow?.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="solo-section solo-footer-cta">
        <div>
          <p className="eyebrow">Build a real version</p>
          <h2>Want this connected to real data, AI APIs, or your business workflow?</h2>
          <p>
            This public demo uses safe sample data. A production version can be
            connected to your documents, spreadsheet, website, CRM, email, or
            OpenAI API workflow.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@rongalichaitanya.com">
          hello@rongalichaitanya.com
        </a>
      </section>
    </main>
  );
}
