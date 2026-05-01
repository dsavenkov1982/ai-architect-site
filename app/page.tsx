export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Dmitry Savenkov
      </h1>

      <h2 style={{ fontSize: "22px", marginBottom: "30px", color: "#555" }}>
        AI Systems Architect | LLM, RAG, Agentic Workflows
      </h2>

      <p style={{ maxWidth: "700px", lineHeight: "1.6", marginBottom: "20px" }}>
        I design and deliver production-grade AI systems with a focus on LLM
        infrastructure, RAG architectures, and agent-based workflows.
      </p>

      <p style={{ maxWidth: "700px", lineHeight: "1.6", marginBottom: "20px" }}>
        My work spans from architecture and technical discovery to real-world
        deployment, helping teams improve engineering productivity and build
        scalable AI solutions.
      </p>

      <p style={{ maxWidth: "700px", lineHeight: "1.6", marginBottom: "40px" }}>
        I am open to part-time and advisory engagements.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          style={{
            padding: "10px 20px",
            border: "1px solid black",
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>

        <a
          href="mailto:dmytro.savenkov@gmail.com"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}