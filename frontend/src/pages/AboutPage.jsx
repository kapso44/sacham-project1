import React from "react";
import { PageHeader } from "../components/SiteLayout";

const board = [
  { name: "Adriaan Niemann", role: "President · Carrier Vendor Relationship Manager, Whispir", image: "/images/board/board-adriaan.jpeg", linkedIn: "https://www.linkedin.com/in/amniemannn/" },
  { name: "Carmel Samimi", role: "Head of General Counsel, Kellanova", image: "/images/board/board-carmel.jpeg", linkedIn: "https://www.linkedin.com/in/carmel-samimi-58b89678/" },
  { name: "Lucien Granger", role: "Vice President, Absa Group", image: "/images/board/board-lucien.jpeg", linkedIn: "https://www.linkedin.com/in/lucien-granger-900551248/" },
  { name: "Careshma Ramroop", role: "Head of Business Development, Jicara Media", image: "/images/board/board-careshma.jpeg", linkedIn: "https://www.linkedin.com/in/careshmar/" },
  { name: "Jamie Ramsamy", role: "Founder, Elysiome", image: "/images/board/board-jamie.png", linkedIn: "https://www.linkedin.com/in/jamiemramsamy/" },
  { name: "Simon Bernie", role: "Founder, Goh Bernie Advisory", image: "/images/board/board-simon.jpeg", linkedIn: "https://www.linkedin.com/in/simon-bernie/" },
  { name: "Misizwe Mtshali", role: "CEO & Founder, South African Wine Cellar", image: "/images/board/board-misizwe.png", objectPosition: "top", linkedIn: "https://www.linkedin.com/in/misizwe/" },
  { name: "Keridyn Heatlie", role: "Executive Director SAChamber Singapore, Co-Founder Orbyt International & Board Director New Zealand South Africa Chamber", image: "/images/board/board-keridyn.jpeg", linkedIn: "https://www.linkedin.com/in/keridyn-heatlie-a37573216/" },
  { name: "Antonio Scaramuzzino", role: "Founder, Count On Me", image: "/images/board/board-antonio.jpeg", linkedIn: "https://www.linkedin.com/in/antonio-scaramuzzino/" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="The Chamber built for cross-border ambition."
        intro="SACham Singapore launched on the 10th of September 2019 by a group of business leaders with a vision to build a community of support for companies looking to expand between the regions."
      />

      <section className="mx-auto w-[min(1180px,calc(100%-40px))] py-24">
        <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--emerald)" }}>Our Story</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Where Africa and Asia do business.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--steel)" }}>
            <p style={{ color: "var(--ink)" }}>The South African Chamber of Commerce Singapore is a dynamic business community dedicated to strengthening economic, commercial, and professional ties between Singapore and South Africa.</p>
            <p>We serve as a trusted platform for organisations and leaders seeking to connect, collaborate, and grow across both markets, providing strategic insight, meaningful engagement, and access to high-value opportunities.</p>
            <p>Our Purpose is to enable our members to succeed by providing timely insights into economic, political, and regulatory developments. Access to influential networks across public and private sectors. Opportunities to expand business across Singapore, South Africa, and beyond. We are a collective voice representing members' interests.</p>
            <p>Whether you are looking to expand into new markets, build strategic partnerships, or engage with a vibrant international business community, the South African Chamber of Commerce Singapore provides the platform to support your ambitions.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/about-event-1.jpg" className="rounded-2xl object-cover w-full h-56" alt="Chamber event" />
            <img src="/images/about-event-2.jpg" className="rounded-2xl object-cover w-full h-56 mt-8" alt="Chamber event" />
            <img src="/images/about-event-3.jpg" className="rounded-2xl object-cover w-full h-56" alt="Chamber event" />
            <img src="/images/about-event-4.jpg" className="rounded-2xl object-cover w-full h-56 mt-8" alt="Chamber event" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-40px))] pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--emerald)" }}>Leadership</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Meet the Board</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((p) => (
            <div key={p.name} className="h-full border p-8 rounded-md bg-white" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
              <div className="aspect-square w-full overflow-hidden rounded-sm">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" style={{ objectPosition: p.objectPosition || "center" }} loading="lazy" />
              </div>
              <a href={p.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-display text-xl hover:underline" style={{ color: "var(--navy)" }}>
                {p.name}
              </a>
              <p className="mt-1 text-sm" style={{ color: "var(--steel)" }}>{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
