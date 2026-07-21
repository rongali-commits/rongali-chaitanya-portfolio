"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { internalProjects } from "./projects/data";

type AgentAction = {
  label: string;
  href?: string;
  prompt?: string;
  external?: boolean;
};

type AgentMessage = {
  id: number;
  role: "agent" | "visitor";
  text: string;
  actions?: AgentAction[];
  projectSlugs?: string[];
};

const quickPrompts = [
  "What can Chaitanya research or write?",
  "What can Chaitanya automate?",
  "Which project matches my task?",
  "I have messy spreadsheet reports",
  "What is Noerong?",
  "How do I hire him?",
];

const ownerSummary =
  "Rongali Chaitanya is an independent research writer and Python automation developer. He creates source-backed long-form content across complex subjects and builds practical software for repeated reports, document work, data collection, AI-assisted workflows, and focused web tools.";

const skillSummary =
  "His writing capabilities include deep research, source synthesis, fact-checking, long-form articles, reports, explainers, white papers, and structural editing. His technical stack includes Python, FastAPI, Pandas, Playwright, APIs, RAG, Next.js, React, TypeScript, GitHub, and Vercel.";

const hireSummary =
  "The easiest way to start is to send the question, content brief, or repeated workflow; the intended reader or user; the available sources or data; and the result you need. Typical projects are a Research Article or Report, an Automation Sprint, or a combined Research-to-Workflow System.";

const noerongSummary =
  "Noerong is Chaitanya's independent research publication at noerong.com. Its source-backed essays explore history, science, philosophy, geopolitics, and human life, demonstrating his ability to investigate difficult questions and make them readable without flattening the evidence.";

let nextMessageId = 1;

function createMessage(message: Omit<AgentMessage, "id">): AgentMessage {
  nextMessageId += 1;
  return { id: nextMessageId, ...message };
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function includesAny(query: string, words: string[]) {
  return words.some((word) => query.includes(word));
}

function buildEmailLink(context: string) {
  const subject = encodeURIComponent("Project enquiry from rongalichaitanya.com");
  const body = encodeURIComponent(
    `Hi Chaitanya,\n\nI visited rongalichaitanya.com and asked your agent:\n"${context}"\n\nI want help with:\n\nMy timeline is:\n\nBest way to reach me:\n`
  );
  return `mailto:hello@rongalichaitanya.com?subject=${subject}&body=${body}`;
}

function scoreProject(query: string, projectText: string) {
  const normalizedProject = normalize(projectText);
  const tokens = normalize(query)
    .split(/\s+/)
    .filter((token) => token.length > 2);

  return tokens.reduce((score, token) => {
    if (normalizedProject.includes(token)) return score + 1;
    return score;
  }, 0);
}

function recommendedProjects(input: string) {
  const query = normalize(input);
  const weightedScores = internalProjects.map((project) => {
    let weight = scoreProject(
      query,
      `${project.title} ${project.label} ${project.summary} ${project.stack} ${project.outcome} ${project.deliverables.join(" ")}`
    );

    if (project.slug === "ai-support-chatbot" && includesAny(query, ["chat", "support", "faq", "customer", "lead", "website visitor"])) {
      weight += 8;
    }
    if (project.slug === "invoice-report-automation" && includesAny(query, ["spreadsheet", "excel", "csv", "invoice", "report", "billing", "reconcile"])) {
      weight += 8;
    }
    if (project.slug === "lead-intelligence-dashboard" && includesAny(query, ["lead", "scrape", "scraper", "prospect", "sales", "directory", "google maps"])) {
      weight += 8;
    }
    if (project.slug === "document-resume-analyzer" && includesAny(query, ["resume", "pdf", "document", "candidate", "extract", "rank", "review"])) {
      weight += 8;
    }
    if (project.slug === "ai-content-workspace" && includesAny(query, ["content", "post", "linkedin", "blog", "transcript", "repurpose", "email draft"])) {
      weight += 8;
    }

    return { project, weight };
  });

  const sorted = weightedScores.sort((a, b) => b.weight - a.weight);
  const top = sorted.filter((item) => item.weight > 0).slice(0, 3);
  return (top.length ? top : sorted.slice(0, 3)).map((item) => item.project.slug);
}

function projectIntro(slug: string) {
  const project = internalProjects.find((item) => item.slug === slug);
  if (!project) return null;

  return `${project.title}: ${project.summary} It is built around ${project.stack}. Best fit: ${project.outcome}`;
}

function buildAgentReply(input: string): AgentMessage {
  const query = normalize(input);
  const lowerInput = input.trim();

  if (!lowerInput) {
    return createMessage({
      role: "agent",
      text: "Ask me about Chaitanya's research writing, automation work, project demos, Noerong, or how to start a freelance project.",
    });
  }

  const project = internalProjects.find((item) => {
    const title = normalize(item.title);
    const slug = normalize(item.slug.replaceAll("-", " "));
    const titleWords = title.split(/\s+/).filter((word) => word.length > 4);
    return query.includes(slug) || titleWords.some((word) => query.includes(word));
  });

  if (project) {
    return createMessage({
      role: "agent",
      text: projectIntro(project.slug) ?? "That is one of Chaitanya's live project demos.",
      actions: [
        { label: "Open live demo", href: project.href },
        { label: "Email about this", href: buildEmailLink(`I am interested in ${project.title}`) },
      ],
      projectSlugs: [project.slug],
    });
  }

  if (includesAny(query, ["who", "about", "background", "experience", "chaitanya", "rongali"])) {
    return createMessage({
      role: "agent",
      text: `${ownerSummary}\n\n${skillSummary}`,
      actions: [
        { label: "View writing", href: "/#writing" },
        { label: "View software", href: "/#automation" },
        { label: "Ask about hiring", prompt: "How do I hire Chaitanya?" },
      ],
    });
  }

  if (includesAny(query, ["skill", "stack", "technology", "tools", "python", "react", "openai", "fastapi", "rag", "research", "writer", "writing", "article", "report", "white paper", "fact check"])) {
    return createMessage({
      role: "agent",
      text: `${skillSummary}\n\nClients can hire either track independently. The combined advantage is especially useful for research-heavy explainers, knowledge systems, document workflows, and editorial tools.`,
      actions: [
        { label: "Show matching projects", prompt: "Which projects show these skills?" },
        { label: "Email Chaitanya", href: buildEmailLink(lowerInput) },
      ],
    });
  }

  if (includesAny(query, ["hire", "contact", "email", "available", "timeline", "price", "cost", "quote", "start"])) {
    return createMessage({
      role: "agent",
      text: `${hireSummary}\n\nPricing depends on research depth, length, workflow complexity, source access, edge cases, and deadline. A bounded brief makes a fixed-price quote possible.`,
      actions: [
        { label: "Email hello@rongalichaitanya.com", href: buildEmailLink(lowerInput) },
        { label: "See engagement options", href: "/#engagements" },
      ],
    });
  }

  if (includesAny(query, ["noerong", "passion", "publication", "essay", "blog"])) {
    return createMessage({
      role: "agent",
      text: noerongSummary,
      actions: [
        { label: "Open Noerong", href: "https://noerong.com", external: true },
        { label: "Ask about Chaitanya", prompt: "Tell me about Chaitanya's background" },
      ],
    });
  }

  if (includesAny(query, ["project", "demo", "portfolio", "example", "recommend", "match", "need", "build", "workflow", "automation", "dashboard", "assistant", "scraper", "document", "content", "spreadsheet"])) {
    const slugs = recommendedProjects(lowerInput);
    return createMessage({
      role: "agent",
      text: "Based on what you asked, these are the strongest matching live demos. Open one to see the product-style workflow, then email Chaitanya with your real data source and target output.",
      actions: [
        { label: "Email with this brief", href: buildEmailLink(lowerInput) },
        { label: "View software projects", href: "/#automation" },
      ],
      projectSlugs: slugs,
    });
  }

  return createMessage({
    role: "agent",
    text: `I can help route that. ${ownerSummary}\n\nIf you need a difficult subject researched and explained, a draft strengthened with better evidence, or a repeated data and document workflow automated, Chaitanya likely has a relevant approach.`,
    actions: [
      { label: "Recommend a demo", prompt: `Which demo matches this: ${lowerInput}` },
      { label: "Email Chaitanya", href: buildEmailLink(lowerInput) },
    ],
  });
}

export function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<AgentMessage[]>(() => [
    createMessage({
      role: "agent",
      text: "Hi, I am the RC Service Finder. Describe what you need researched, written, or automated, and I will point you to the most relevant evidence or next step.",
      actions: [
        { label: "Recommend a project", prompt: "Which project matches my task?" },
        { label: "How to hire", prompt: "How do I hire Chaitanya?" },
      ],
    }),
  ]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const lastVisitorMessage = useMemo(() => {
    return [...messages].reverse().find((message) => message.role === "visitor")?.text ?? "I want to discuss a project.";
  }, [messages]);

  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, isOpen]);

  function sendMessage(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      createMessage({ role: "visitor", text: trimmed }),
      buildAgentReply(trimmed),
    ]);
    setInput("");
    setIsOpen(true);
  }

  return (
    <div className={`portfolio-agent ${isOpen ? "is-open" : ""}`}>
      {!isOpen && (
        <button
          aria-controls="portfolio-agent-panel"
          aria-expanded={isOpen}
          className="agent-launcher"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <span>Service Finder</span>
          <strong>Match your workflow</strong>
        </button>
      )}

      {isOpen && (
        <section
          aria-label="RC project finder"
          className="agent-panel"
          id="portfolio-agent-panel"
        >
          <div className="agent-header">
            <div>
              <span>Service Finder</span>
              <strong>Portfolio workflow guide</strong>
            </div>
            <button aria-label="Close project finder" onClick={() => setIsOpen(false)} type="button">
              Close
            </button>
          </div>

          <div className="agent-messages" ref={messagesRef}>
            {messages.map((message) => (
              <article className={`agent-message ${message.role}`} key={message.id}>
                <p>
                  {message.text.split("\n").map((line, lineIndex) => (
                    <span key={`${message.id}-${lineIndex}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                {message.projectSlugs && (
                  <div className="agent-projects">
                    {message.projectSlugs.map((slug) => {
                      const item = internalProjects.find((project) => project.slug === slug);
                      if (!item) return null;
                      return (
                        <a href={item.href} key={item.slug}>
                          <span>{item.label}</span>
                          <strong>{item.title}</strong>
                        </a>
                      );
                    })}
                  </div>
                )}

                {message.actions && (
                  <div className="agent-actions">
                    {message.actions.map((action) =>
                      action.href ? (
                        <a
                          href={action.href}
                          key={action.label}
                          rel={action.external ? "noreferrer" : undefined}
                          target={action.external ? "_blank" : undefined}
                        >
                          {action.label}
                        </a>
                      ) : (
                        <button
                          key={action.label}
                          onClick={() => sendMessage(action.prompt ?? action.label)}
                          type="button"
                        >
                          {action.label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="agent-quick-prompts" aria-label="Suggested questions">
            {quickPrompts.map((prompt) => (
              <button key={prompt} onClick={() => sendMessage(prompt)} type="button">
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="agent-input"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              aria-label="Describe your workflow"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe a repetitive task or project..."
              value={input}
            />
            <button type="submit">Ask</button>
          </form>

          <a className="agent-email" href={buildEmailLink(lastVisitorMessage)}>
            Email Chaitanya with this context
          </a>
        </section>
      )}
    </div>
  );
}
