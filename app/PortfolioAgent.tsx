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
  "What can Chaitanya build for me?",
  "Which project matches my task?",
  "Tell me about the AI chatbot demo",
  "I have messy spreadsheet reports",
  "What is Noerong?",
  "How do I hire him?",
];

const ownerSummary =
  "Rongali Chaitanya is an IT professional with 5 years of experience building practical AI integrations, Python automations, and web tools. He works best on real business workflows: repeated reports, document review, customer questions, lead collection, dashboards, and lightweight tools that need to be shipped clearly.";

const skillSummary =
  "His core stack is Python, FastAPI, Pandas, Playwright, OpenAI API, RAG, embeddings, prompt workflows, Next.js, React, TypeScript, REST APIs, Google Sheets API, GitHub, and Vercel.";

const hireSummary =
  "The easiest way to start is to send the manual task, a sample file or data source, and the result you want. Typical project shapes are an Automation Sprint, an AI Assistant Build, or a Web Tool / Dashboard.";

const noerongSummary =
  "Noerong is Chaitanya's independent publishing project at noerong.com. It explores history, science, philosophy, geopolitics, and human life through curious, research-driven essays.";

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
      text: "Ask me about Chaitanya, his skills, project demos, Noerong, or what kind of automation you want to build.",
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
        { label: "View projects", href: "/#projects" },
        { label: "Ask about hiring", prompt: "How do I hire Chaitanya?" },
      ],
    });
  }

  if (includesAny(query, ["skill", "stack", "technology", "tools", "python", "react", "openai", "fastapi", "rag"])) {
    return createMessage({
      role: "agent",
      text: `${skillSummary}\n\nFor freelance work, the useful combinations are AI plus documents, Python plus messy data, and web UI plus deployment.`,
      actions: [
        { label: "Show matching projects", prompt: "Which projects show these skills?" },
        { label: "Email Chaitanya", href: buildEmailLink(lowerInput) },
      ],
    });
  }

  if (includesAny(query, ["hire", "contact", "email", "available", "timeline", "price", "cost", "quote", "start"])) {
    return createMessage({
      role: "agent",
      text: `${hireSummary}\n\nFor pricing, Chaitanya should first see the workflow, data source, edge cases, and deadline. A focused automation can often start as a small sprint; larger AI assistants or dashboards need a tighter scope first.`,
      actions: [
        { label: "Email hello@rongalichaitanya.com", href: buildEmailLink(lowerInput) },
        { label: "See project packages", href: "/#engagements" },
      ],
    });
  }

  if (includesAny(query, ["noerong", "passion", "publication", "writing", "essay", "blog"])) {
    return createMessage({
      role: "agent",
      text: noerongSummary,
      actions: [
        { label: "Open Noerong", href: "https://noerong.com", external: true },
        { label: "Ask about Chaitanya", prompt: "Tell me about Chaitanya's background" },
      ],
    });
  }

  if (includesAny(query, ["project", "demo", "portfolio", "example", "recommend", "match", "need", "build", "workflow", "automation", "dashboard", "assistant", "scraper", "document", "content", "spreadsheet", "report"])) {
    const slugs = recommendedProjects(lowerInput);
    return createMessage({
      role: "agent",
      text: "Based on what you asked, these are the strongest matching live demos. Open one to see the product-style workflow, then email Chaitanya with your real data source and target output.",
      actions: [
        { label: "Email with this brief", href: buildEmailLink(lowerInput) },
        { label: "View all projects", href: "/#projects" },
      ],
      projectSlugs: slugs,
    });
  }

  return createMessage({
    role: "agent",
    text: `I can help route that. ${ownerSummary}\n\nIf your problem involves repeated data work, customer questions, document review, lead collection, content repurposing, or a small web tool, Chaitanya likely has a matching project pattern.`,
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
      text: "Hi, I am RC Agent. Ask me about Chaitanya, his projects, skills, Noerong, or what he can build for your workflow.",
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
          <span>RC Agent</span>
          <strong>Ask about projects</strong>
        </button>
      )}

      {isOpen && (
        <section
          aria-label="RC portfolio agent"
          className="agent-panel"
          id="portfolio-agent-panel"
        >
          <div className="agent-header">
            <div>
              <span>RC Agent</span>
              <strong>Portfolio guide</strong>
            </div>
            <button aria-label="Close RC Agent" onClick={() => setIsOpen(false)} type="button">
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
              aria-label="Message RC Agent"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about skills, demos, hiring, Noerong..."
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
