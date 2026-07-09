import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import eventRoundtable from "@/assets/event-roundtable.jpg";
import eventBriefing from "@/assets/event-briefing.jpg";
import eventTrade from "@/assets/event-trade.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — SACham Singapore" },
      { name: "description", content: "Curated conversations, business networking, trade briefings and leadership forums connecting South Africa, Singapore and the wider region." },
      { property: "og:title", content: "Events — SACham Singapore" },
      { property: "og:description", content: "Rooms worth showing up to — SACham Singapore events." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { day: "18", month: "Jun", title: "Africa–Asia Investor Roundtable", body: "A curated discussion on capital flows, growth sectors and regional partnership opportunities.", img: eventRoundtable },
  { day: "24", month: "Jul", title: "Market Entry Briefing", body: "Practical insight for South African companies entering Singapore and Asian markets.", img: eventBriefing },
  { day: "21", month: "Aug", title: "Trade Mission Briefing", body: "Connecting members with export, investment, government and ecosystem opportunities.", img: eventTrade },
];

function EventsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events"
        title="Rooms worth showing up to."
        intro="Curated conversations, business networking, trade briefings and leadership forums connecting South Africa, Singapore and the wider region."
      />
      <section className="bg-white">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {events.map((e) => (
              <article
                key={e.title}
                className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-[var(--soft-white)] shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-52 bg-cover bg-center" style={{ backgroundImage: `url(${e.img})` }}>
                  <div className="absolute left-4 top-4 grid h-[60px] w-[60px] place-items-center rounded-2xl bg-white/95 text-center font-black leading-none text-[var(--navy)] shadow-[0_12px_24px_rgba(15,23,42,0.14)]">
                    <div>
                      <div>{e.day}</div>
                      <div className="mt-1 text-[0.7rem] text-[var(--emerald)]">{e.month}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-[1.35rem]">{e.title}</h3>
                  <p className="mb-5">{e.body}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-extrabold text-[var(--navy)] hover:border-[var(--emerald)] hover:text-[var(--emerald)]"
                  >
                    Register Interest
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
