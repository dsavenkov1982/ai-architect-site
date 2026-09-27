import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = { title: "Services", description: "AI architecture reviews, PoC-to-production sprints, and fractional AI architecture support." };

const services = [
  { title: "AI Architecture Review", forWho: "For teams with an existing AI, RAG, or agentic system that needs an experienced second set of eyes.", deliverables: ["Architecture and design review", "Risks, bottlenecks, and production-readiness gaps", "Prioritized recommendations and action plan", "Review call with engineering and product stakeholders"] },
  { title: "PoC → Production Architecture Sprint", forWho: "For teams with a promising prototype that now needs a credible path to production.", deliverables: ["Technical discovery and target architecture", "RAG / agent / evaluation strategy where relevant", "Security, reliability, observability, and cost considerations", "Implementation roadmap, major decisions, and delivery risks"] },
  { title: "Fractional AI Architect / Advisor", forWho: "For companies that need senior AI architecture input without adding a full-time architecture or CTO role.", deliverables: ["Architecture and design decisions", "Technical reviews and engineering guidance", "Vendor, model, platform, and build-vs-buy decisions", "Stakeholder, presales, and delivery support"] },
];

export default function Services() {
  return <main className="min-h-screen bg-[#0f1115] text-[#f4f4f5] font-sans"><Nav />
    <section className="max-w-[1050px] mx-auto px-7 py-16 md:py-20"><p className="eyebrow">SERVICES</p><h1 className="text-5xl leading-tight mb-6">Focused architecture help for production AI.</h1><p className="max-w-3xl text-gray-300 leading-8 text-lg">Engagements are deliberately small and outcome-oriented. Start with a review or sprint; extend into ongoing advisory support only when it makes sense.</p></section>
    <section className="px-7 pb-16"><div className="max-w-[1050px] mx-auto grid gap-6">{services.map((s, i) => <article key={s.title} className="card p-7 md:p-8"><div className="text-gray-500 text-sm mb-3">0{i+1}</div><h2 className="text-2xl md:text-3xl mb-4">{s.title}</h2><p className="text-gray-300 leading-8 max-w-3xl mb-6">{s.forWho}</p><h3 className="text-sm uppercase tracking-[2px] text-gray-400 mb-3">Typical deliverables</h3><ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">{s.deliverables.map(d => <li key={d} className="flex gap-3"><span className="text-gray-600">—</span><span>{d}</span></li>)}</ul></article>)}</div></section>
    <section className="section"><div className="content flex flex-col md:flex-row md:items-center md:justify-between gap-6"><div><h2 className="text-3xl mb-3">Not sure which engagement fits?</h2><p className="text-gray-400 max-w-2xl">Send me the problem, current state, and what you need to decide or ship. I’ll suggest the smallest useful scope.</p></div><Link href="/contact" className="button-primary w-fit">Discuss a project</Link></div></section>
    <section className="px-7 py-10"><div className="max-w-[1050px] mx-auto text-gray-500 text-sm">Prefer to review the evidence first? <Link href="/portfolio" className="text-gray-300 underline underline-offset-4">See selected work.</Link></div></section>
  </main>;
}
