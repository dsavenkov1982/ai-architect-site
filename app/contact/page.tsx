"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="px-7 py-20 md:py-28">
        <div className="content max-w-[760px]">
          <p className="eyebrow">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">Discuss a project.</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            Tell me what you are building, where you are stuck, and what decision or outcome you need. I’ll reply with the smallest useful next step.
          </p>

          <form onSubmit={submit} className="card space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="form-label">Name
                <input className="form-input" name="name" required autoComplete="name" />
              </label>
              <label className="form-label">Work email
                <input className="form-input" type="email" name="email" required autoComplete="email" />
              </label>
            </div>
            <label className="form-label">Company <span className="text-gray-500 font-normal">(optional)</span>
              <input className="form-input" name="company" autoComplete="organization" />
            </label>
            <label className="form-label">What are you working on?
              <textarea className="form-input min-h-40 resize-y" name="message" required placeholder="A short description of the system, current state, and what you need help deciding or shipping." />
            </label>
            <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button className="button-primary cursor-pointer disabled:opacity-60" disabled={status === "sending"} type="submit">
                {status === "sending" ? "Sending…" : "Send inquiry"}
              </button>
              {status === "sent" && <p className="text-green-300">Thanks — your message has been sent.</p>}
              {status === "error" && <p className="text-red-300">Couldn’t send it. Please use email or LinkedIn below.</p>}
            </div>
          </form>

          <div className="mt-8 text-gray-400 leading-8">
            <p>Prefer email? <a className="text-gray-200 underline underline-offset-4" href="mailto:dmytro.savenkov@gmail.com">dmytro.savenkov@gmail.com</a></p>
            <p><a className="text-gray-200 underline underline-offset-4" href="https://www.linkedin.com/in/dmytro-savenkov/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
