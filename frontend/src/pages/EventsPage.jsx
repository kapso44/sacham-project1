import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/SiteLayout";

const events = [
  { day: "18", month: "Jun", title: "Africa–Asia Investor Roundtable", body: "A curated discussion on capital flows, growth sectors and regional partnership opportunities.", img: "/images/events/event-roundtable.jpg" },
  { day: "24", month: "Jul", title: "Market Entry Briefing", body: "Practical insight for South African companies entering Singapore and Asian markets.", img: "/images/events/event-briefing.jpg" },
  { day: "21", month: "Aug", title: "Trade Mission Briefing", body: "Connecting members with export, investment, government and ecosystem opportunities.", img: "/images/events/event-trade.jpg" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Rooms worth showing up to." intro="Curated conversations, business networking, trade briefings and leadership forums connecting South Africa, Singapore and the wider region." />
      <section className="bg-white">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {events.map((e) => (
              <article key={e.title} className="card-hover overflow-hidden rounded-[28px] border" style={{ borderColor: "rgba(0,0,0,0.07)", background: "var(--soft-white)", boxShadow: "0 14px 34px rgba(15,23,42,0.06)" }}>
                <div className="relative h-52 bg-cover bg-center" style={{ backgroundImage: `url(${e.img})` }}>
                  <div className="absolute left-4 top-4 grid h-[60px] w-[60px] place-items-center rounded-2xl text-center font-black leading-none" style={{ background: "rgba(255,255,255,0.95)", color: "var(--navy)", boxShadow: "0 12px 24px rgba(15,23,42,0.14)" }}>
                    <div>
                      <div>{e.day}</div>
                      <div className="mt-1 text-[0.7rem]" style={{ color: "var(--emerald)" }}>{e.month}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-[1.35rem]">{e.title}</h3>
                  <p className="mb-5">{e.body}</p>
                  <Link to="/contact" className="btn inline-flex items-center justify-center rounded-full border bg-white px-5 py-3 text-sm font-extrabold" style={{ borderColor: "rgba(0,0,0,0.1)", color: "var(--navy)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--emerald)"; e.currentTarget.style.color = "var(--emerald)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.color = "var(--navy)"; }}>
                    Register Interest
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
