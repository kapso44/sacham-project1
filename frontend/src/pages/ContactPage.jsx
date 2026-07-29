import React, { useState } from "react";
import { PageHeader } from "../components/SiteLayout";

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted-text)" }}>{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-sm border bg-white px-4 py-3 text-sm focus:outline-none"
        style={{ borderColor: "rgba(15,23,42,0.12)" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--emerald)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(15,23,42,0.12)")} />
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's start a conversation." intro="Whether you're exploring membership, planning a trade mission, or want to host an event with us — we'd love to hear from you." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--emerald)" }}>Email</p>
              <p className="mt-2 font-display text-2xl">info@sacham.sg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--emerald)" }}>Based in</p>
              <p className="mt-2 font-display text-2xl">Singapore</p>
              <p className="mt-1 text-sm" style={{ color: "var(--muted-text)" }}>Connecting to South Africa & Southeast Asia.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--emerald)" }}>Office hours</p>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-text)" }}>Mon – Fri, 9:00 – 18:00 SGT</p>
            </div>
            <div className="h-[3px] w-32 flag-rule" />
          </aside>
          <div className="md:col-span-8">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-sm border bg-white p-8 md:p-10"
              style={{ borderColor: "rgba(15,23,42,0.08)" }}>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Interest" name="interest" placeholder="Membership · Partnership · Event" />
              </div>
              <div className="mt-6">
                <label className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted-text)" }}>Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-sm border bg-white px-4 py-3 text-sm focus:outline-none" style={{ borderColor: "rgba(15,23,42,0.12)" }} />
              </div>
              <button type="submit" className="btn mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: "var(--emerald)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--emerald-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--emerald)")}>
                {sent ? "Thank you — we'll be in touch" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
