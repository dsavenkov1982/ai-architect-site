import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dmitry Savenkov — AI Solution Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, background: "#0f1115", color: "#f4f4f5", fontFamily: "Arial" }}>
      <div style={{ fontSize: 24, letterSpacing: 3, color: "#9ca3af", marginBottom: 28 }}>AI SOLUTION ARCHITECT · ADVISORY</div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>AI from prototype<br/>to production</div>
      <div style={{ fontSize: 30, color: "#d1d5db", marginTop: 34 }}>RAG · Agentic AI · AI in SDLC · AWS · Azure</div>
      <div style={{ display: "flex", marginTop: 58, fontSize: 26, color: "#f4f4f5" }}>Dmitry Savenkov</div>
    </div>,
    size
  );
}
