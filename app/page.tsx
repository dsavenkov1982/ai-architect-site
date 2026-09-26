import Link from "next/link";
import Nav from "@/components/Nav";

const capabilities = [
  ["RAG & Knowledge Systems", "Retrieval architecture, reranking, evaluation, grounding, structured-data access, and enterprise knowledge assistants."],
  ["Agentic AI", "Tool-using workflows, orchestration, state and memory patterns, guardrails, and reliability for multi-step AI systems."],
  ["AI in SDLC", "Coding agents, requirements analysis, code review, testing, documentation, and practical adoption patterns."],
  ["Cloud AI Architecture", "AWS and Azure architecture, data pipelines, APIs, observability, security, deployment, and cost-aware design."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-[#f4f4f5] font-sans">
      <Nav />
      <section className="max-w-[1050px] mx-auto px-7 py-20 md:py-24">
        <p className="eyebrow">AI SOLUTION ARCHITECT · FRACTIONAL / ADVISORY</p>
        <h1 className="text-5xl md:text-6xl leading-tight mb-6 max-w-4xl">I help teams turn GenAI prototypes into production-ready systems.</h1>
        <p className="max-w-3xl leading-8 text-gray-300 text-lg mb-5">I’m Dmitry Savenkov, an AI Solution Architect with 20+ years in software engineering, distributed systems, cloud architecture, and technical leadership. My recent work focuses on enterprise RAG, agentic AI, LLM integration, AI-enabled workflows, and the data and cloud platforms behind them.</p>
        <p className="max-w-3xl leading-8 text-gray-300 text-lg">I typically work with teams that have already experimented with AI but are hitting the difficult part: architecture, reliability, retrieval quality, security, integration, observability, cost, and scaling.</p>
        <div className="flex gap-4 mt-10 flex-wrap">
          <Link href="/services" className="button-primary">See how I can help</Link>
          <Link href="/portfolio" className="button-secondary">View selected work</Link>
          <a href="mailto:dmytro.savenkov@gmail.com" className="button-secondary">Discuss a project</a>
        </div>
        <p className="text-gray-400 mt-5">Available for selected architecture reviews, advisory work, and fractional engagements.</p>
      </section>

      <section className="section">
        <div className="content">
          <p className="eyebrow">WHERE I ADD VALUE</p>
          <h2 className="section-title">The gap between a convincing demo and a dependable system.</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {["An AI PoC works, but quality or reliability is inconsistent", "RAG quality drops on real enterprise data and edge cases", "Agent workflows need clearer boundaries, tools, memory, and observability", "Teams need an architecture and delivery path before scaling further"].map((text) => <div key={text} className="card text-gray-300 leading-7">{text}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 className="section-title">Production AI architecture, end to end.</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {capabilities.map(([title, text]) => <div key={title} className="card"><h3 className="text-xl mb-3">{title}</h3><p className="text-gray-400 leading-7">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div><p className="eyebrow">ENGAGEMENTS</p><h2 className="section-title mb-4">Start with a focused problem.</h2><p className="max-w-2xl text-gray-300 leading-8 text-lg">Architecture review, PoC-to-production sprint, or ongoing fractional architecture support. Each engagement is scoped around a concrete technical or delivery outcome.</p></div>
          <Link href="/services" className="button-primary w-fit shrink-0">Explore services</Link>
        </div>
      </section>
    </main>
  );
}
