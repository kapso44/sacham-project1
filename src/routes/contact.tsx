import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SACCS" },
      { name: "description", content: "Get in touch with the South African Chamber of Commerce Singapore." },
      { property: "og:title", content: "Contact — SACCS" },
      { property: "og:description", content: "Reach the SACCS team for membership, partnerships and event enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        intro="Whether you're exploring membership, planning a trade mission, or want to host an event with us — we'd love to hear from you."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Email</p>
              <p className="mt-2 font-display text-2xl">info@sacham.sg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Based in</p>
              <p className="mt-2 font-display text-2xl">Singapore</p>
              <p className="mt-1 text-sm text-muted-foreground">Connecting to South Africa & Southeast Asia.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Office hours</p>
              <p className="mt-2 text-sm text-muted-foreground">Mon – Fri, 9:00 – 18:00 SGT</p>
            </div>
            <div className="h-[3px] w-32 flag-rule" />
          </aside>

          <div className="md:col-span-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-sm border border-border bg-card p-8 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Interest" name="interest" placeholder="Membership · Partnership · Event" />
              </div>
              <div className="mt-6">
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {sent ? "Thank you — we'll be in touch" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
