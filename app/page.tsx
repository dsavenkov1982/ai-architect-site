import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-[#f4f4f5] font-sans">
      <nav className="border-b border-[#1f2937]">
        <div className="max-w-[1050px] mx-auto px-7 py-5 flex justify-between items-center">
          <Link href="/" className="font-semibold">Dmitry Savenkov</Link>
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <a href="mailto:dmytro.savenkov@gmail.com">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-[1050px] mx-auto px-7 py-20">
        <p className="text-gray-400 tracking-[2px] text-sm mb-5">
          AI SOLUTION ARCHITECT · FRACTIONAL / ADVISORY
        </p>

        <h1 className="text-5xl md:text-6xl leading-tight mb-6">
          Dmitry Savenkov
        </h1>

        <h2 className="text-2xl text-gray-300 font-normal mb-8 max-w-3xl">
          I help teams move AI from prototype to production.
        </h2>

        <p className="max-w-3xl leading-8 text-gray-300 text-lg mb-5">
          AI Solution Architect with 20+ years in software engineering, architecture,
          and technical leadership. I design practical AI systems around LLMs, RAG,
          agentic workflows, AI in SDLC, cloud platforms, and data-heavy enterprise systems.
        </p>

        <p className="max-w-3xl leading-8 text-gray-300 text-lg">
          I usually work where teams already have ideas, PoCs, or partially working AI tools,
          but need proper architecture, evaluation, reliability, and a clear path to production.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <a
            href="mailto:dmytro.savenkov@gmail.com"
            className="px-5 py-3 bg-white text-gray-900 rounded-xl font-semibold"
          >
            Book a quick call
          </a>

          <Link
            href="/portfolio"
            className="px-5 py-3 border border-gray-700 rounded-xl font-semibold"
          >
            View portfolio
          </Link>

          <a
            href="https://www.linkedin.com/in/dmitrysavenkov777/"
            target="_blank"
            className="px-5 py-3 border border-gray-700 rounded-xl font-semibold"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-400 mt-5">
          Available for selected part-time / advisory engagements, typically 10–20h/week.
        </p>
      </section>

      <section className="border-t border-[#1f2937] px-7 py-14">
        <div className="max-w-[1050px] mx-auto">
          <h3 className="text-3xl mb-7">Who I help</h3>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Teams with AI PoCs that do not scale",
              "Companies moving from AI demos to production systems",
              "Engineering teams adopting LLMs, copilots, or coding agents",
              "Organizations building RAG, agentic workflows, or AI in SDLC platforms",
            ].map((text) => (
              <div key={text} className="bg-[#151821] border border-[#252b37] rounded-2xl p-6 text-gray-300">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f2937] px-7 py-14">
        <div className="max-w-[1050px] mx-auto">
          <h3 className="text-3xl mb-7">What I do</h3>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              ["AI in SDLC", "Coding agents, requirements analysis, code review, testing, documentation, adoption playbooks."],
              ["RAG Systems", "Document ingestion, embeddings, retrieval, reranking, evaluation, and knowledge assistants."],
              ["Agentic Workflows", "LangGraph-style orchestration, tool use, multi-step reasoning, and reliability patterns."],
              ["Cloud AI Architecture", "Azure, AWS, Bedrock, OpenAI, data pipelines, observability, and secure deployment."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#151821] border border-[#252b37] rounded-2xl p-6">
                <h4 className="text-lg mb-3">{title}</h4>
                <p className="text-gray-400 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f2937] px-7 py-14">
        <div className="max-w-[1050px] mx-auto">
          <h3 className="text-3xl mb-5">Engagement model</h3>
          <p className="max-w-3xl text-gray-300 leading-8 text-lg">
            Advisory, architecture review, technical discovery, PoC-to-MVP guidance,
            or fractional architecture involvement for GenAI, RAG, agentic systems,
            AI in SDLC, and cloud-based AI platforms.
          </p>
        </div>
      </section>
    </main>
  );
}