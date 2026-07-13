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
    title: `${project.title} Interactive Prototype`,
    description: `Explore a transparent browser prototype of ${project.title}, including the workflow and production implementation blueprint.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Interactive Prototype`,
      description: `Explore the workflow, safe sample data, and production blueprint for ${project.title}.`,
      url: `/projects/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={`solo-site solo-${project.slug}`} id="project-main">
      <a className="skip-link" href="#project-demo">
        Skip to interactive prototype
      </a>
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
          <p className="eyebrow">Interactive browser prototype</p>
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

        <section
          className="solo-app-shell"
          id="project-demo"
          aria-label={`${project.title} interactive prototype`}
        >
          <div className="solo-app-toolbar">
            <div>
              <span>Prototype</span>
              <strong>Interactive workflow with safe sample data</strong>
            </div>
            <em>No external API calls</em>
          </div>
          <ProjectLiveDemo slug={project.slug} />
        </section>
      </section>

      <section className="solo-section">
        <div className="solo-section-heading">
          <p className="eyebrow">What this prototype demonstrates</p>
          <h2>A focused workflow, shown honestly from input to output.</h2>
        </div>
        <div className="solo-proof-grid">
          <article>
            <span>Problem</span>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>Prototype implementation</span>
            <p>{project.demoStack}</p>
          </article>
          <article>
            <span>Production blueprint</span>
            <p>{project.stack}</p>
          </article>
        </div>
      </section>

      <section className="solo-section solo-workflow">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2>How a production client version would work.</h2>
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
            AI API workflow, with validation, access controls, and deployment
            matched to your requirements.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@rongalichaitanya.com">
          hello@rongalichaitanya.com
        </a>
      </section>
    </main>
  );
}
