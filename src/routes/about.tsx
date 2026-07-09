import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import boardAdriaan from "@/assets/board-adriaan.jpeg";
import boardCareshma from "@/assets/board-careshma.jpeg";
import boardAntonio from "@/assets/board-antonio.jpeg";
import boardCarmel from "@/assets/board-carmel.jpeg";
import boardSimon from "@/assets/board-simon.jpeg";
import boardLucien from "@/assets/board-lucien.jpeg";
import boardJamie from "@/assets/board-jamie.png";
import boardMisizwe from "@/assets/board-misizwe.png";
import boardKeridyn from "@/assets/board-keridyn.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SACCS" },
      { name: "description", content: "Established in 2019, SACCS promotes trade, investment and industry between South Africa and Southeast Asia." },
      { property: "og:title", content: "About — SACCS" },
      { property: "og:description", content: "Mission, vision and the people behind the South African Chamber of Commerce Singapore." },
    ],
  }),
  component: AboutPage,
});

const board = [
  { name: "Adriaan Niemann", role: "President · Carrier Vendor Relationship Manager, Whispir", image: boardAdriaan, linkedIn: "https://www.linkedin.com/in/amniemannn/" },
  { name: "Carmel Samimi", role: "Head of General Counsel, Kellanova", image: boardCarmel, linkedIn: "https://www.linkedin.com/in/carmel-samimi-58b89678/" },
  { name: "Lucien Granger", role: "Vice President, Absa Group", image: boardLucien, linkedIn: "https://www.linkedin.com/in/lucien-granger-900551248/" },
  { name: "Careshma Ramroop", role: "Head of Business Development, Jicara Media", image: boardCareshma, linkedIn: "https://www.linkedin.com/in/careshmar/" },
  { name: "Jamie Ramsamy", role: "Founder, Elysiome", image: boardJamie, linkedIn: "https://www.linkedin.com/in/jamiemramsamy/" },
  { name: "Simon Bernie", role: "Founder, Goh Bernie Advisory", image: boardSimon, linkedIn: "https://www.linkedin.com/in/simon-bernie/" },
  { name: "Misizwe Mtshali", role: "CEO & Founder, South African Wine Cellar", image: boardMisizwe, objectPosition: "top", linkedIn: "https://www.linkedin.com/in/misizwe/" },
  { name: "Keridyn Heatlie", role: "Executive Director SAChamber Singapore, Co-Founder Orbyt International & Board Director New Zealand South Africa Chamber", image: boardKeridyn, linkedIn: "https://www.linkedin.com/in/keridyn-heatlie-a37573216/" },
  { name: "Antonio Scaramuzzino", role: "Founder, Count On Me", image: boardAntonio, linkedIn: "https://www.linkedin.com/in/antonio-scaramuzzino/" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Story"
        title="The Chamber built for cross-border ambition."
        intro="SACham Singapore launched on the 10th of September 2019 by a group of business leaders with a vision to build a community of support for companies looking to expand between the regions."
      />

      {/* Our Story */}
      <section className="w-full px-6 py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">Our Story</p>
        <h2 className="mt-3 font-display text-4xl">Where Africa and Asia do business.</h2>

        <div className="mt-12 space-y-5 text-lg leading-relaxed text-foreground">
            <p>
              The South African Chamber of Commerce Singapore is a dynamic business community
              dedicated to strengthening economic, commercial, and professional ties between
              Singapore and South Africa.
            </p>
            <p className="text-muted-foreground">
              We serve as a trusted platform for organisations and leaders seeking to connect,
              collaborate, and grow across both markets, providing strategic insight, meaningful
              engagement, and access to high-value opportunities.
            </p>
            <p className="text-muted-foreground">
              Our Purpose is to enable our members to succeed by providing timely insights into
              economic, political, and regulatory developments. Access to influential networks
              across public and private sectors. Opportunities to expand business across Singapore,
              South Africa, and beyond. We are a collective voice representing members' interests.
            </p>


            <p className="text-muted-foreground">
              Whether you are looking to expand into new markets, build strategic partnerships, or
              engage with a vibrant international business community, the South African Chamber of
              Commerce Singapore provides the platform to support your ambitions.
            </p>
          </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Leadership</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Meet the Board</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((p) => (
            <div key={p.name} className="h-full border border-border bg-card p-8">
              {p.image ? (
                <div className="aspect-square w-full overflow-hidden rounded-sm">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" style={{ objectPosition: p.objectPosition ?? "center" }} loading="lazy" />
                </div>
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded-sm bg-primary/10 font-display text-5xl text-primary">
                  {p.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
              )}
              <a
                href={p.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-display text-xl hover:text-primary hover:underline"
              >
                {p.name}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

    </SiteLayout>
  );
}
