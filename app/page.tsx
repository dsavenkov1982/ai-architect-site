export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f1115",
        color: "#f4f4f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section style={{ maxWidth: "1050px", margin: "0 auto", padding: "72px 28px" }}>
        <p style={{ color: "#9ca3af", letterSpacing: "2px", fontSize: "13px", marginBottom: "18px" }}>
          AI SOLUTION ARCHITECT · FRACTIONAL / ADVISORY
        </p>

        <h1 style={{ fontSize: "52px", lineHeight: "1.05", marginBottom: "20px" }}>
          Dmitry Savenkov
        </h1>

        <h2 style={{ fontSize: "24px", color: "#d1d5db", fontWeight: 400, marginBottom: "28px" }}>
          I help teams move AI from prototype to production.
        </h2>

        <p style={{ maxWidth: "760px", lineHeight: "1.7", color: "#cbd5e1", fontSize: "18px" }}>
          AI Solution Architect with 20+ years in software engineering, architecture,
          and technical leadership. I design practical AI systems around LLMs, RAG,
          agentic workflows, AI in SDLC, cloud platforms, and data-heavy enterprise systems.
        </p>

        <p style={{ maxWidth: "760px", lineHeight: "1.7", color: "#cbd5e1", fontSize: "18px" }}>
          I usually work where teams already have ideas, PoCs, or partially working AI tools,
          but need proper architecture, evaluation, reliability, and a clear path to production.
        </p>

        <div style={{ display: "flex", gap: "14px", marginTop: "34px", flexWrap: "wrap" }}>
          <a
            href="mailto:dmytro.savenkov@gmail.com"
            style={{
              padding: "12px 20px",
              background: "#f4f4f5",
              color: "#111827",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact me
          </a>

          <a
            href="https://www.linkedin.com/in/dmitrysavenkov777/"
            target="_blank"
            style={{
              padding: "12px 20px",
              border: "1px solid #374151",
              color: "#f4f4f5",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1f2937", padding: "56px 28px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "26px", marginBottom: "24px" }}>What I do</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              {
                title: "AI in SDLC",
                text: "AI-assisted development, coding agents, engineering productivity, prompt standards, and adoption playbooks.",
              },
              {
                title: "RAG & Knowledge Systems",
                text: "Document ingestion, embeddings, retrieval, reranking, evaluation, and production-ready knowledge assistants.",
              },
              {
                title: "Agentic Workflows",
                text: "LangGraph-style orchestration, tool use, multi-step reasoning, workflow automation, and reliability patterns.",
              },
              {
                title: "Cloud AI Architecture",
                text: "Azure, AWS, Bedrock, OpenAI, data pipelines, observability, cost control, and secure production deployment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#151821",
                  border: "1px solid #252b37",
                  borderRadius: "16px",
                  padding: "22px",
                }}
              >
                <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>{item.title}</h4>
                <p style={{ color: "#aeb7c4", lineHeight: "1.6", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1f2937", padding: "56px 28px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "26px", marginBottom: "20px" }}>Selected experience</h3>

          <ul style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "17px", paddingLeft: "20px" }}>
            <li>Designed RAG and AI assistant systems for enterprise knowledge and structured data access.</li>
            <li>Worked on AI in SDLC initiatives covering requirements, code review, test generation, and developer productivity.</li>
            <li>Built AI and graph-based analytics systems for blockchain intelligence and fraud detection.</li>
            <li>Designed Azure and AWS-based data and AI platforms with focus on scalability, security, and production readiness.</li>
            <li>Supported pre-sales, discovery, architecture reviews, and technical decision-making with client stakeholders.</li>
          </ul>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1f2937", padding: "56px 28px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "26px", marginBottom: "20px" }}>Engagement model</h3>

          <p style={{ maxWidth: "760px", color: "#cbd5e1", lineHeight: "1.7", fontSize: "17px" }}>
            I am open to selected part-time, advisory, and contract engagements,
            especially where senior architecture input is needed for GenAI, RAG,
            agentic systems, AI in SDLC, or cloud-based AI platforms.
          </p>

          <p style={{ color: "#f4f4f5", fontWeight: 600, marginTop: "18px" }}>
            Typical format: advisory, architecture review, technical discovery, PoC-to-MVP guidance,
            or 10–20 hours/week fractional involvement.
          </p>
        </div>
      </section>
    </main>
  );
}