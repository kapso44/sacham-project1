import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { MemberExperienceCarousel } from "@/components/MemberExperienceCarousel";

import heroCorridor from "@/assets/hero-corridor.jpg";
import globeNetwork from "@/assets/globe-network.jpg";
import faqEventAsset from "@/assets/faq-event.jpg.asset.json";

import testimonialDinner from "@/assets/testimonial-dinner.jpg";
import testimonialAbsa from "@/assets/testimonial-absa.jpg";
import testimonialBipo from "@/assets/testimonial-bipo.jpg";
import testimonialFergus from "@/assets/testimonial-fergus.jpg";
import testimonialBottle from "@/assets/testimonial-bottle.jpg";
import testimonialCmr from "@/assets/testimonial-cmr.jpg";
import testimonialWesgro from "@/assets/testimonial-wesgro.jpg";
import testimonialDpworld from "@/assets/testimonial-dpworld.jpg";

import holfLogo from "@/assets/partners/holf.png.asset.json";
import marsLogo from "@/assets/partners/mars-snacking.png.asset.json";
import plataformaLogo from "@/assets/partners/plataforma.png.asset.json";
import absaLogo from "@/assets/partners/absa.jpg.asset.json";
import forvisLogo from "@/assets/partners/forvis.jpg.asset.json";
import tlcLogo from "@/assets/partners/tlc.png.asset.json";
import tymeLogo from "@/assets/partners/tyme.jpg.asset.json";
import lacLogo from "@/assets/partners/lac.jpg.asset.json";

const goldPartners = [
  { name: "Absa", url: absaLogo.url },
  { name: "Forvis Mazars", url: forvisLogo.url },
  { name: "HOLF Security", url: holfLogo.url },
  { name: "LAC Nutrition for Life", url: lacLogo.url },
  { name: "Mars Snacking", url: marsLogo.url },
  { name: "Plataforma Asia", url: plataformaLogo.url },
  { name: "TLC Worldwide", url: tlcLogo.url },
  { name: "Tyme Group", url: tymeLogo.url },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SACham Singapore | Where Africa and Asia Do Business" },
      { name: "description", content: "SACham Singapore connects leaders, companies, capital and opportunities between South Africa, Singapore and the wider Africa–Asia region." },
      { property: "og:title", content: "SACham Singapore | Where Africa and Asia Do Business" },
      { property: "og:description", content: "The Africa–Asia business corridor, anchored in Singapore." },
      { property: "og:image", content: heroCorridor },
    ],
  }),
  component: HomePage,
});

const tickerWords = [
  "Africa–Asia Business Corridor",
  "Singapore Anchored",
  "Trade · Investment · Capital",
  "Curated Executive Network",
  "Cross-Border Opportunity",
  "Member Visibility",
];

const valueCards = [
  {
    letter: "N",
    title: "Network",
    body: "Meet business leaders, founders, executives, investors, diplomats and professionals connected to South Africa, Singapore and the wider region.",
  },
  {
    letter: "I",
    title: "Insight",
    body: "Access business briefings, policy conversations, market intelligence and regional perspectives that help leaders make better decisions.",
  },
  {
    letter: "O",
    title: "Opportunity",
    body: "Create visibility, partnerships and commercial pathways through curated introductions, events, sponsorships and member platforms.",
  },
];



function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(1180px,calc(100%-40px))] ${className}`}>{children}</div>;
}

function HomePage() {
  return (
    <SiteLayout>
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden hero-bg">
          <div className="pointer-events-none absolute inset-0 hero-grid-overlay" />
          <Container className="relative z-10 py-20 md:py-24">
            <div className="max-w-[880px]">
              <div className="eyebrow mb-5">The Africa–Asia Business Corridor</div>
              <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.92]">
                Where Africa and Asia do business.
              </h1>
              <p className="mt-7 max-w-[640px] text-[clamp(1.05rem,1.6vw,1.3rem)]">
                SACham Singapore connects leaders, companies, capital and opportunities between South
                Africa, Singapore and the wider Africa–Asia region.
              </p>
            </div>
            <div className="mt-6 w-full">
              <img
                src={heroCorridor}
                alt="South Africa to Singapore skyline corridor"
                className="w-full rounded-[28px] object-cover drop-shadow-[0_34px_70px_rgba(15,23,42,0.18)]"
                width={1280}
                height={720}
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                ["2,500+", "Businesses in database"],
                ["60", "Corporate members"],
                ["200+", "Events hosted"],
                ["800+", "Connections made"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-black/[0.07] bg-white/80 p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.07)]"
                >
                  <strong className="block font-display text-[clamp(2rem,4vw,3rem)] leading-none text-[var(--emerald)]">{n}</strong>
                  <span className="mt-3 inline-block text-sm font-bold text-[var(--steel)]">{l}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* TICKER */}
        <div className="bg-[var(--navy)] py-5 text-white/80 overflow-hidden">
          <div className="ticker-track text-[0.82rem] font-extrabold uppercase tracking-[0.16em]">
            {[...tickerWords, ...tickerWords].map((w, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{w}</span>
                <span className="text-[var(--gold)]">◆</span>
              </span>
            ))}
          </div>
        </div>

        <AutoplayVideo videoId="EHsdCqXA2gQ" />

        {/* STORY BAND */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-28 text-white">
          <div className="pointer-events-none absolute left-1/2 -top-32 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,122,90,0.32),transparent_62%)]" />
          <Container className="relative">
            <MemberExperienceCarousel
              slides={[
                {
                  image: testimonialDinner,
                  intro: {
                    heading: "Belong. Be seen. Build.",
                    paragraphs: [
                      "New members join because they want access. Existing members stay because they feel seen, connected and commercially relevant.",
                      "The next chapter of SACham is about creating a clearer annual member journey: strategy breakfasts, sector roundtables, trade briefings, member spotlights and signature events that give members reasons to keep showing up.",
                    ],
                  },
                  quote:
                    "SACham is not just a chamber. It is the Africa–Asia business corridor, anchored in Singapore.",
                },
                {
                  image: testimonialAbsa,
                  quote:
                    "Dear SAChamber,\n\nJust a short note to say thank you to the team for the collaboration and efforts to produce and host a successful event earlier this evening. It was a fantastic opportunity to build the Absa brand with key decision-makers. Our intention was to gather a small group of people focused on trade and investment related to Africa. We certainly achieved this objective with the further benefit of having the High Commissioner in attendance with their commitment of further collaboration with Absa. Our association with the Chamber has certainly been productive over the Covid years and promises to be more so as we now move into a new normal phase. My appreciation again for your and the Chamber's ongoing efforts to promote SA and Africa more generally, and the ongoing partnership.",
                  attribution: "Absa CIB",
                },
                {
                  image: testimonialBipo,
                  quote:
                    "As a corporate member of the South African Chamber of Commerce in Singapore, I am delighted to share my experience with this organization.\n\nBeing a part of this chamber has been instrumental in fostering strong business relationships between South Africa and Singapore. The chamber provides an effective platform for networking, collaboration, and knowledge-sharing among professionals from diverse industries.",
                  attribution: "BIPO",
                },
                {
                  image: testimonialFergus,
                  quote:
                    "The South Africa Chamber of Commerce has been an invaluable resource for Fergus Consultancy Group. As a member, we have gained access to a network of professionals and business opportunities that have greatly benefited our company. In particular, the Chamber has provided us with endless networking and business opportunities.",
                  attribution: "Fergus Consultancy Group",
                },
                {
                  image: testimonialBottle,
                  quote:
                    "Joining the Chamber of SA Commerce has been invaluable – it's opened doors in places least expected, and it's opened more doors than we could have figured on our own. As a small and young business, the boost we got through the membership justifies the very reasonable cost of it. Keri has also been pivotal in our membership experience, always ready and willing to be of assistance, an absolute joy to work with!",
                  attribution: "Message in a Bottle",
                },
                {
                  image: testimonialCmr,
                  quote:
                    "You've already opened more doors than we could have hoped for, and we're truly grateful for everything you've done and continue to do to help us navigate Singapore in the right way.",
                  attribution: "CMR Logistics",
                },
                {
                  image: testimonialWesgro,
                  quote:
                    "The joint mission between the South Africa–Singapore Chamber of Commerce and Wesgro was an unequivocal success. This collaboration stands as a strong testament to the effectiveness of partnering with chambers of commerce when entering new markets, given their extensive networks and established footprint within the local business community. Such partnerships not only mitigate market entry risks but also accelerate returns on investment by facilitating access to credible business connections.",
                  attribution: "Wesgro",
                },
                {
                  image: testimonialDpworld,
                  quote:
                    "Participating in the trade mission to Singapore was a valuable opportunity to engage with a diverse network of industry stakeholders. It broadened my perspective on global logistics trends, fostered meaningful connections, and opened doors for strategic collaboration that will benefit both my role and our company's growth in the sector.",
                  attribution: "DP World",
                },
              ]}
            />
          </Container>
        </section>

        {/* VALUE */}
        <section className="bg-white">
          <Container className="py-24">
            <div className="mb-11 flex flex-wrap items-end justify-between gap-7">
              <div>
                <div className="eyebrow mb-5">Member Value</div>
                <h2 className="text-[clamp(2rem,4vw,4rem)]">Built for leaders working across continents.</h2>
              </div>
              <p className="max-w-[520px] text-[1.05rem]">
                Whether you are entering a new market, building influence, raising visibility or looking for
                the right room, SACham helps you move with trust.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {valueCards.map((c, i) => {
                const floatClass = `float-stagger-${i + 1}`;
                return (
                  <article
                    key={c.title}
                    className={`group relative min-h-[310px] overflow-hidden rounded-[28px] border border-black/[0.07] bg-[var(--soft-white)] p-8 transition hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] ${floatClass}`}
                  >
                    <span className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-[rgba(0,122,90,0.08)]" />
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[var(--navy)] p-4 font-display text-xl font-black text-[var(--gold)]" style={{ height: 52, width: 52 }}>
                      {c.letter}
                    </div>
                    <h3 className="mt-9 mb-3 text-[1.55rem]">{c.title}</h3>
                    <p>{c.body}</p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>



        {/* NEWSLETTER */}
        <section
          className="relative overflow-hidden py-24"
          style={{
            backgroundImage: `url(${globeNetwork})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[var(--navy)]/80" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-white">
                Get news, updates and event information
              </h2>
              <p className="mt-4 text-white/70">
                Stay connected with SACham — sign up for the latest on trade missions, member events and business briefings.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for signing up! We'll be in touch.");
                }}
                className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-3.5 text-sm font-extrabold text-[var(--navy)] shadow-[0_10px_30px_rgba(217,164,4,0.28)] transition hover:-translate-y-0.5"
                >
                  Submit
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </form>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[var(--soft-white)] pt-24 pb-24">
          <Container>
            <div className="grid items-center gap-10 rounded-[28px] bg-[var(--navy)] p-10 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] md:grid-cols-[1.2fr_0.8fr] md:p-16">
              <div>
                <div className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Join the corridor</div>
                <h2 className="text-[clamp(2rem,4vw,3.8rem)] text-white">
                  Ready to expand your business network across Africa and Asia?
                </h2>
                <p className="mt-5 text-white/80">
                  Join the Chamber built for leaders working across continents. Become a member, attend an
                  event or partner with SACham Singapore.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href="mailto:info@sacham.sg"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-extrabold text-[var(--navy)] shadow-[0_14px_30px_rgba(217,164,4,0.22)] transition hover:-translate-y-0.5"
                >
                  Contact SACham
                </a>
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Membership
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Gold Partners */}
        <section className="bg-white pt-24">
          <Container>
            <h2 className="text-center text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight text-[var(--gold)]">
              Gold Partners
            </h2>
          </Container>
          <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-16 pr-16">
              {[...goldPartners, ...goldPartners].map((p, i) => (
                <div key={`${p.name}-${i}`} className="flex h-24 w-44 shrink-0 items-center justify-center">
                  <img
                    src={p.url}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <Container>
            <h2 className="text-center text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight text-[var(--emerald-dark)]">
              Frequently Asked Questions
            </h2>
            <div className="mt-14 grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <img
                  src={faqEventAsset.url}
                  alt="SACham Singapore event with members and speakers"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="divide-y divide-[var(--navy)]/10">
                {[
                  "What is a Chamber of Commerce?",
                  "How does the Chamber support businesses with International expansion?",
                  "Is this the right fit for me?",
                  "What are the values of the Chamber?",
                  "Is there a Privacy Policy?",
                ].map((q) => (
                  <li key={q}>
                    <button
                      type="button"
                      className="flex w-full items-start gap-4 py-5 text-left text-[var(--navy)] transition hover:text-[var(--gold)]"
                    >
                      <span aria-hidden className="mt-0.5 text-lg">→</span>
                      <span className="text-base font-medium md:text-lg">{q}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>

    </SiteLayout>
  );
}
