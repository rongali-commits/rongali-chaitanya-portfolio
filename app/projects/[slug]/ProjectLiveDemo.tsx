"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type ProjectLiveDemoProps = {
  slug: string;
};

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

const sampleCsv = `client,service,amount,email,status
Nova Clinics,AI chatbot setup,850,nova@example.com,paid
Peak Realty,Lead scraper workflow,620,hello@peakrealty.com,pending
Urban Tutors,Monthly report automation,430,ops@urbantutors.com,paid
Bright Dental,Document analyzer,0,,review
Orbit Studio,Content workspace,390,team@orbitstudio.com,paid`;

const leadRecords = [
  { company: "Nova Clinics", industry: "Healthcare", source: "Maps", score: 92, status: "Qualified" },
  { company: "Peak Realty", industry: "Real Estate", source: "Directory", score: 88, status: "Qualified" },
  { company: "Urban Tutors", industry: "Education", source: "Search", score: 81, status: "Review" },
  { company: "LedgerWise", industry: "Finance", source: "Directory", score: 76, status: "Review" },
  { company: "FitLoop Studio", industry: "Wellness", source: "Maps", score: 69, status: "Nurture" },
  { company: "CloudCart", industry: "Ecommerce", source: "Search", score: 95, status: "Qualified" },
];

const candidates = [
  {
    name: "Priya S.",
    role: "Automation Analyst",
    resume:
      "Python automation specialist with Pandas, Excel reporting, REST API integrations, FastAPI dashboards, and client communication experience.",
  },
  {
    name: "Rahul M.",
    role: "Frontend Developer",
    resume:
      "React and Next.js developer who builds dashboards, forms, design systems, and API-connected internal tools for operations teams.",
  },
  {
    name: "Ananya K.",
    role: "Data Assistant",
    resume:
      "Experienced with spreadsheet cleanup, PDF review, CRM updates, data entry quality checks, and weekly reporting workflows.",
  },
];

const defaultSourceText =
  "AI automation helps small businesses save time by turning repetitive workflows into simple tools. A good system should understand the task, process the data, and produce an output the team can trust.";

export function ProjectLiveDemo({ slug }: ProjectLiveDemoProps) {
  if (slug === "ai-support-chatbot") return <ChatbotDemo />;
  if (slug === "invoice-report-automation") return <InvoiceDemo />;
  if (slug === "lead-intelligence-dashboard") return <LeadDashboardDemo />;
  if (slug === "document-resume-analyzer") return <DocumentAnalyzerDemo />;
  return <ContentWorkspaceDemo />;
}

function ChatbotDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi, I am a demo support assistant. Ask about pricing, same-day service, documents, or booking.",
    },
  ]);
  const [input, setInput] = useState("Do you provide same-day service?");
  const [lead, setLead] = useState("No lead captured yet");

  function answerQuestion(question: string) {
    const normalized = question.toLowerCase();
    if (normalized.includes("price") || normalized.includes("cost")) {
      setLead("Pricing enquiry / send package details");
      return "Starter automation projects usually begin with a focused workflow, sample data, and a clear deliverable. I would confirm scope first, then share a fixed quote.";
    }
    if (normalized.includes("same") || normalized.includes("book")) {
      setLead("Booking enquiry / same-day interest");
      return "Yes, same-day support can be offered when the workflow is clear. I would collect the task, data source, and deadline before starting.";
    }
    if (normalized.includes("document") || normalized.includes("pdf")) {
      setLead("Document automation lead");
      return "I can build document assistants that search PDFs, extract details, summarize files, and produce structured outputs.";
    }
    setLead("General enquiry / needs follow-up");
    return "I can help with AI integrations, Python automations, scraping, dashboards, and web tools. Share the manual task and I can suggest the simplest build.";
  }

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    const reply = answerQuestion(question);
    setMessages((current) => [
      ...current,
      { role: "user", text: question },
      { role: "bot", text: reply },
    ]);
    setInput("");
  }

  return (
    <div className="live-demo live-chat">
      <div className="live-demo-panel">
        <span>Knowledge base</span>
        <strong>Service FAQ, pricing notes, document automation scope, contact policy</strong>
        <div className="demo-stat-grid">
          <div>
            <strong>92</strong>
            <span>approved answers</span>
          </div>
          <div>
            <strong>14</strong>
            <span>lead questions</span>
          </div>
        </div>
        <button className="mini-button" type="button" onClick={() => setInput("What does this cost?")}>
          Ask pricing
        </button>
        <button className="mini-button" type="button" onClick={() => setInput("Can you analyze PDF documents?")}>
          Ask documents
        </button>
      </div>

      <div className="live-chat-window">
        <div className="chat-scroll" aria-live="polite">
          {messages.map((message, index) => (
            <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="live-form" onSubmit={submitQuestion}>
          <input
            aria-label="Ask the chatbot"
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a customer question..."
            value={input}
          />
          <button type="submit">Ask</button>
        </form>
        <div className="lead-card">
          <span>Lead status</span>
          <strong>{lead}</strong>
        </div>
      </div>
    </div>
  );
}

function InvoiceDemo() {
  const [csv, setCsv] = useState(sampleCsv);
  const [ran, setRan] = useState(true);

  const rows = useMemo(() => parseCsv(csv), [csv]);
  const errors = rows.filter((row) => !row.email || row.amount <= 0);
  const cleanRows = rows.filter((row) => row.email && row.amount > 0);
  const total = cleanRows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="live-demo live-invoice">
      <div className="live-demo-panel">
        <span>Editable CSV input</span>
        <textarea
          aria-label="Invoice CSV input"
          onChange={(event) => setCsv(event.target.value)}
          value={csv}
        />
        <button className="mini-button strong" type="button" onClick={() => setRan(true)}>
          Run automation
        </button>
      </div>

      <div className="live-results">
        <div className="demo-stat-grid three">
          <div>
            <strong>{rows.length}</strong>
            <span>rows read</span>
          </div>
          <div>
            <strong>{errors.length}</strong>
            <span>rows flagged</span>
          </div>
          <div>
            <strong>${total.toLocaleString()}</strong>
            <span>clean total</span>
          </div>
        </div>
        {ran && (
          <div className="invoice-preview">
            <span>Generated report preview</span>
            <strong>Automation Report / July Operations</strong>
            <p>
              Processed {rows.length} records, prepared {cleanRows.length} invoice-ready
              rows, and flagged {errors.length} row for review.
            </p>
            <table>
              <tbody>
                {cleanRows.slice(0, 3).map((row) => (
                  <tr key={`${row.client}-${row.service}`}>
                    <td>{row.client}</td>
                    <td>{row.service}</td>
                    <td>${row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function LeadDashboardDemo() {
  const [industry, setIndustry] = useState("All");
  const [minimumScore, setMinimumScore] = useState(75);

  const filtered = leadRecords.filter((lead) => {
    const industryMatch = industry === "All" || lead.industry === industry;
    return industryMatch && lead.score >= minimumScore;
  });
  const exportPreview = filtered
    .map((lead) => `${lead.company},${lead.industry},${lead.score},${lead.status}`)
    .join("\n");

  return (
    <div className="live-demo live-leads">
      <div className="live-demo-panel">
        <span>Filters</span>
        <label>
          Industry
          <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
            <option>All</option>
            <option>Healthcare</option>
            <option>Real Estate</option>
            <option>Education</option>
            <option>Finance</option>
            <option>Ecommerce</option>
          </select>
        </label>
        <label>
          Minimum score: {minimumScore}
          <input
            max="100"
            min="50"
            onChange={(event) => setMinimumScore(Number(event.target.value))}
            type="range"
            value={minimumScore}
          />
        </label>
        <textarea aria-label="CSV export preview" readOnly value={exportPreview} />
      </div>
      <div className="live-results">
        <div className="demo-stat-grid three">
          <div>
            <strong>{leadRecords.length}</strong>
            <span>collected</span>
          </div>
          <div>
            <strong>{filtered.length}</strong>
            <span>qualified</span>
          </div>
          <div>
            <strong>{leadRecords.length - filtered.length}</strong>
            <span>filtered out</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Industry</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.company}>
                <td>{lead.company}</td>
                <td>{lead.industry}</td>
                <td>{lead.score}</td>
                <td>{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DocumentAnalyzerDemo() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [criteria, setCriteria] = useState("python, automation, api, dashboard");

  const candidate = candidates[candidateIndex];
  const analysis = useMemo(() => {
    const terms = criteria
      .split(",")
      .map((term) => term.trim().toLowerCase())
      .filter(Boolean);
    const text = candidate.resume.toLowerCase();
    const matches = terms.filter((term) => text.includes(term));
    const score = terms.length ? Math.round((matches.length / terms.length) * 100) : 0;
    return { matches, score, missing: terms.filter((term) => !matches.includes(term)) };
  }, [candidate, criteria]);

  return (
    <div className="live-demo live-docs">
      <div className="live-demo-panel">
        <span>Resume text</span>
        <select
          value={candidateIndex}
          onChange={(event) => setCandidateIndex(Number(event.target.value))}
        >
          {candidates.map((item, index) => (
            <option key={item.name} value={index}>
              {item.name} - {item.role}
            </option>
          ))}
        </select>
        <p>{candidate.resume}</p>
        <label>
          Criteria
          <input
            onChange={(event) => setCriteria(event.target.value)}
            value={criteria}
          />
        </label>
      </div>
      <div className="live-results">
        <div className="candidate-score interactive">
          <span>AI-style score</span>
          <strong>
            {candidate.name} / {candidate.role} / {analysis.score}%
          </strong>
          <p>
            Matched {analysis.matches.length} criteria. Missing:{" "}
            {analysis.missing.length ? analysis.missing.join(", ") : "none"}.
          </p>
        </div>
        <div className="score-table">
          {analysis.matches.map((match) => (
            <div key={match}>
              <span>Matched</span>
              <strong>{match}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentWorkspaceDemo() {
  const [source, setSource] = useState(defaultSourceText);
  const [tone, setTone] = useState("practical");
  const wordCount = source.trim().split(/\s+/).filter(Boolean).length;
  const topic = source.split(" ").slice(0, 8).join(" ");

  return (
    <div className="live-demo live-content">
      <div className="live-demo-panel">
        <span>Source material</span>
        <textarea
          aria-label="Content source text"
          onChange={(event) => setSource(event.target.value)}
          value={source}
        />
        <label>
          Tone
          <select value={tone} onChange={(event) => setTone(event.target.value)}>
            <option value="practical">Practical</option>
            <option value="bold">Bold</option>
            <option value="educational">Educational</option>
          </select>
        </label>
        <div className="demo-stat-grid">
          <div>
            <strong>{wordCount}</strong>
            <span>source words</span>
          </div>
          <div>
            <strong>4</strong>
            <span>outputs</span>
          </div>
        </div>
      </div>
      <div className="output-stack live-output">
        <article>
          <span>LinkedIn post</span>
          <strong>
            {tone === "bold" ? "Stop wasting hours on repeat work." : "A practical way to save time:"}
          </strong>
          <p>{topic}... The real win is turning one repeat task into a reliable system.</p>
        </article>
        <article>
          <span>Email subject</span>
          <strong>How automation can save your team hours every week</strong>
        </article>
        <article>
          <span>Summary</span>
          <strong>
            This source explains how AI automation can convert repetitive work
            into simple, trusted tools for small teams.
          </strong>
        </article>
        <article>
          <span>Idea bank</span>
          <strong>Workflow audit, chatbot FAQ, report automation, dashboard checklist</strong>
        </article>
      </div>
    </div>
  );
}

function parseCsv(csv: string) {
  const [, ...lines] = csv.trim().split(/\r?\n/);
  return lines
    .map((line) => line.split(","))
    .filter((columns) => columns.length >= 5)
    .map(([client, service, amount, email, status]) => ({
      amount: Number(amount) || 0,
      client: client.trim(),
      email: email.trim(),
      service: service.trim(),
      status: status.trim(),
    }));
}
