import Link from "next/link";

const projects = [
  {
    title: "AI-Enhanced SDLC Platform",
    role: "AI Solution Architect",
    summary:
      "Designed AI-powered capabilities across the software delivery lifecycle to improve developer productivity, code quality, and workflow automation.",
    points: [
      "Requirements analysis, code generation, code review, test creation, and documentation support",
      "RAG pipelines over internal repositories and technical documentation",
      "Multi-step orchestration for long-running AI tasks",
      "Prompt strategies, guardrails, and evaluation approach",
    ],
    stack: "AWS Bedrock, Claude, Step Functions, Lambda, ECS, S3, OpenSearch, Python, APIs, RAG",
  },
  {
    title: "AI Copilot / RAG Assistant",
    role: "AI Solution Architect",
    summary:
      "Designed and delivered an MVP AI Copilot for natural language interaction over product documentation and structured user data.",
    points: [
      "Agent-based architecture with routing and tool orchestration",
      "RAG pipeline over enterprise documentation",
      "NL-to-SQL access over Databricks and Delta tables",
      "Evaluation framework for grounding and response usefulness",
    ],
    stack: "Azure OpenAI, Azure AI Search, Databricks, Delta Lake, LlamaIndex, Python, Streamlit",
  },
  {
    title: "Enterprise Data Platform",
    role: "Data Architect",
    summary:
      "Designed an enterprise-grade Azure Lakehouse platform for secure, scalable, and governed ingestion, processing, and analytics.",
    points: [
      "Bronze, Silver, and Gold data layers",
      "ADF and Databricks ingestion/transformation pipelines",
      "IaC for DEV and PRD environments",
      "RBAC, private endpoints, managed identities, monitoring, and reporting alignment",
    ],
    stack: "Azure Data Lake, Databricks, PySpark, Delta Lake, ADF, Azure DevOps, Terraform/Bicep, Power BI",
  },
  {
    title: "Blockchain Analytics Platform",
    role: "AI Architect / CTO",
    summary:
      "Designed and led development of a blockchain analytics platform for transaction tracing, fraud detection, and natural language querying.",
    points: [
      "Graph-oriented analytics model for transactions, addresses, and flows",
      "LLM-based natural language to Cypher querying",
      "Blockchain ingestion and processing pipelines",
      "Platform architecture, scalability, DevOps, and backend delivery",
    ],
    stack: "Python, FastAPI, OpenAI, Claude, LangChain, Memgraph, PostgreSQL, ClickHouse, Kafka/Redpanda, Azure",
    video: "https://www.loom.com/share/4ef89f1952a542a88968cd24578e1f43?sid=49f08f16-52a9-44e4-90d5-74bdd533a30d",
  },
];

export default function Portfolio() {
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

      <section className="max-w-[1050px] mx-auto px-7 py-16">
        <p className="text-gray-400 tracking-[2px] text-sm mb-5">
          SELECTED WORK
        </p>

        <h1 className="text-5xl leading-tight mb-6">
          Portfolio
        </h1>

        <p className="max-w-3xl text-gray-300 leading-8 text-lg">
          A selection of AI, RAG, data platform, and architecture projects.
          Client names are masked where needed, but the work reflects real architecture,
          delivery, and advisory experience.
        </p>
      </section>

      <section className="px-7 pb-16">
        <div className="max-w-[1050px] mx-auto grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-[#151821] border border-[#252b37] rounded-2xl p-7"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl mb-2">{project.title}</h2>
                  <p className="text-gray-400">{project.role}</p>
                </div>

                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    className="px-4 py-2 bg-white text-gray-900 rounded-xl font-semibold text-sm w-fit"
                  >
                    Watch Loom demo
                  </a>
                )}
              </div>

              <p className="text-gray-300 leading-8 mb-5">
                {project.summary}
              </p>

              <ul className="list-disc pl-5 text-gray-300 leading-8 mb-5">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="text-gray-400 leading-7">
                <span className="text-gray-200 font-semibold">Stack: </span>
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1f2937] px-7 py-14">
        <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-3xl mb-3">Need senior AI architecture input?</h3>
            <p className="text-gray-400">
              I am open to selected advisory, discovery, and fractional engagements.
            </p>
          </div>

          <a
            href="mailto:dmytro.savenkov@gmail.com"
            className="px-5 py-3 bg-white text-gray-900 rounded-xl font-semibold w-fit"
          >
            Book a quick call
          </a>
        </div>
      </section>
    </main>
  );
}