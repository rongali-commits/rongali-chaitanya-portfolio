import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, internalProjects } from "../data";

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
            This is a portfolio demo surface showing the workflow, screens, and
            business logic that would be adapted for a real client project.
          </p>
        </div>
        <DemoSurface slug={project.slug} />
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

function DemoSurface({ slug }: { slug: string }) {
  if (slug === "ai-support-chatbot") {
    return (
      <div className="demo-frame demo-chat">
        <div className="demo-sidebar">
          <span>Knowledge base</span>
          <strong>Service FAQ, pricing PDF, return policy, contact page</strong>
          <ul>
            <li>92 approved answers</li>
            <li>14 lead questions</li>
            <li>4 source documents</li>
          </ul>
        </div>
        <div className="chat-window">
          <div className="chat-message bot">Hi, I can help with pricing, availability, and booking.</div>
          <div className="chat-message user">Do you provide same-day service?</div>
          <div className="chat-message bot">
            Yes. Same-day slots are available before 3 PM. I can collect your
            location and preferred time.
          </div>
          <div className="lead-card">
            <span>Lead captured</span>
            <strong>Asha R. / Hyderabad / same-day enquiry</strong>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "invoice-report-automation") {
    return (
      <div className="demo-frame demo-invoice">
        <div className="automation-steps">
          {["Upload sales.csv", "Validate 1,248 rows", "Generate PDF", "Email summary"].map(
            (step) => (
              <div key={step}>
                <span>Done</span>
                <strong>{step}</strong>
              </div>
            ),
          )}
        </div>
        <div className="invoice-paper">
          <div>
            <span>Invoice report</span>
            <strong>July Operations</strong>
          </div>
          <dl>
            <div>
              <dt>Clean rows</dt>
              <dd>1,248</dd>
            </div>
            <div>
              <dt>Errors fixed</dt>
              <dd>37</dd>
            </div>
            <div>
              <dt>Total billed</dt>
              <dd>$18,420</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }

  if (slug === "lead-intelligence-dashboard") {
    return (
      <div className="demo-frame demo-leads">
        <div className="lead-kpis">
          <div>
            <span>Collected</span>
            <strong>486</strong>
          </div>
          <div>
            <span>Duplicates removed</span>
            <strong>61</strong>
          </div>
          <div>
            <span>Ready to export</span>
            <strong>425</strong>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Fit</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nova Clinics</td>
              <td>92</td>
              <td>Maps</td>
              <td>Qualified</td>
            </tr>
            <tr>
              <td>Peak Realty</td>
              <td>88</td>
              <td>Directory</td>
              <td>Qualified</td>
            </tr>
            <tr>
              <td>Urban Tutors</td>
              <td>81</td>
              <td>Search</td>
              <td>Review</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (slug === "document-resume-analyzer") {
    return (
      <div className="demo-frame demo-docs">
        <div className="candidate-score">
          <span>Top match</span>
          <strong>Priya S. / Automation Analyst / 94%</strong>
          <p>Python, Excel automation, API integrations, dashboard reporting.</p>
        </div>
        <div className="score-table">
          {[
            ["Python", "Strong"],
            ["Automation", "Strong"],
            ["Communication", "Good"],
            ["Availability", "Immediate"],
          ].map(([field, value]) => (
            <div key={field}>
              <span>{field}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="demo-frame demo-content">
      <div className="source-box">
        <span>Source input</span>
        <p>
          Paste one long article, transcript, idea note, or client brief. Choose
          the formats you want to generate.
        </p>
      </div>
      <div className="output-stack">
        <article>
          <span>LinkedIn post</span>
          <strong>3 short hooks and one polished draft</strong>
        </article>
        <article>
          <span>Email newsletter</span>
          <strong>Subject line, intro, body, CTA</strong>
        </article>
        <article>
          <span>Idea bank</span>
          <strong>10 follow-up post angles</strong>
        </article>
      </div>
    </div>
  );
}
