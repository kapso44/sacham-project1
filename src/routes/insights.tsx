import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import eventBriefing from "@/assets/event-briefing.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — SACham Singapore" },
      { name: "description", content: "Member perspectives, partner interviews and trade intelligence from the leaders shaping Africa–Asia business." },
      { property: "og:title", content: "Insights — SACham Singapore" },
      { property: "og:description", content: "Signal from the Africa–Asia corridor." },
    ],
  }),
  component: InsightsPage,
});

const briefs: Array<[string, string, string]> = [
  ["Trade", "SA–SG Trade Outlook", "A practical briefing for members tracking opportunities across the corridor."],
  ["Community", "Member Spotlight", "Showcasing the people and companies building commercial bridges between South Africa and Asia."],
  ["Partners", "Partner Interview Series", "Thought leadership from institutions, corporates and advisers working across both regions."],
];

function InsightsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Insights"
        title="Signal from the corridor."
        intro="Member perspectives, partner interviews and trade intelligence from the leaders shaping Africa–Asia business."
      />
      <section className="bg-[var(--soft-white)]">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-24">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <article className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${eventBriefing})` }}
                aria-hidden
              />
              <div className="p-8">
                <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[var(--gold)]">
                  Featured Insight
                </span>
                <h3 className="my-3 text-[1.7rem]">
                  Why Singapore-based capital is rediscovering African growth.
                </h3>
                <p>
                  From infrastructure and food security to technology and professional services, the
                  corridor is becoming more relevant for leaders seeking diversified growth.
                </p>
              </div>
            </article>
            <div className="grid content-start gap-4">
              {briefs.map(([k, t, b]) => (
                <article
                  key={t}
                  className="rounded-[24px] border border-black/[0.07] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
                >
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[var(--emerald)]">{k}</span>
                  <h3 className="my-2 text-[1.25rem]">{t}</h3>
                  <p>{b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
