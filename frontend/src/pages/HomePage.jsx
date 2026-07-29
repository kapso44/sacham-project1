import React from "react";
import { Link } from "react-router-dom";
import AutoplayVideo from "../components/AutoplayVideo";
import MemberExperienceCarousel from "../components/MemberExperienceCarousel";
import { ArrowRight, ArrowUpRight, Users, Compass, Sparkles, Plus, Minus } from "lucide-react";

const goldPartners = [
  { name: "Absa", tag: "Financial Services" },
  { name: "Forvis Mazars", tag: "Audit & Advisory" },
  { name: "HOLF Security", tag: "Security" },
  { name: "LAC", tag: "Nutrition for Life" },
  { name: "Mars Snacking", tag: "Consumer Goods" },
  { name: "Plataforma Asia", tag: "Advisory" },
  { name: "TLC Worldwide", tag: "Marketing" },
  { name: "Tyme Group", tag: "Digital Banking" },
];

const tickerWords = [
  "Africa\u2013Asia Business Corridor",
  "Singapore Anchored",
  "Trade \u00b7 Investment \u00b7 Capital",
  "Curated Executive Network",
  "Cross-Border Opportunity",
  "Member Visibility",
];

const valueCards = [
  { icon: Users, title: "Network", body: "Meet business leaders, founders, executives, investors, diplomats and professionals connected to South Africa, Singapore and the wider region." },
  { icon: Compass, title: "Insight", body: "Access business briefings, policy conversations, market intelligence and regional perspectives that help leaders make better decisions." },
  { icon: Sparkles, title: "Opportunity", body: "Create visibility, partnerships and commercial pathways through curated introductions, events, sponsorships and member platforms." },
];

const focusSectors = [
  { n: "01", t: "Financial Services & Capital" },
  { n: "02", t: "Consumer Goods & Retail" },
  { n: "03", t: "Logistics & Trade" },
  { n: "04", t: "Technology & Digital" },
  { n: "05", t: "Professional Services" },
  { n: "06", t: "Energy & Infrastructure" },
];

const faqs = [
  { q: "What is a Chamber of Commerce?", a: "A Chamber of Commerce is a business network that supports and represents companies and professionals. SACham Singapore connects members across the South Africa\u2013Asia corridor for trade, investment and growth." },
  { q: "How does the Chamber support businesses with international expansion?", a: "Through curated events, market briefings, introductions to government and industry, and access to a trusted network of professionals across both regions." },
  { q: "Is this the right fit for me?", a: "If you are exploring markets, building partnerships or looking for cross-border influence between South Africa, Singapore and the wider Africa\u2013Asia region, yes." },
  { q: "What are the values of the Chamber?", a: "Trust, member-first orientation, cross-border excellence, and long-term partnership across Africa and Asia." },
  { q: "Is there a Privacy Policy?", a: "Yes. We handle member data responsibly and only use it to deliver Chamber services and communications relevant to members." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main id="top">
      {/* HERO — full-bleed image */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "min(88vh, 780px)" }}>
        <img
          src="/images/hero-corridor.jpg"
          alt="Africa to Asia corridor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.35) 40%, rgba(15,23,42,0.85) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-40px))] flex flex-col justify-end pt-28 pb-16 md:pt-36 md:pb-20" style={{ minHeight: "min(88vh, 780px)" }}>
          <div className="max-w-[820px] text-white">
            <div
              className="inline-flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--gold)" }}
            >
              <span className="inline-block h-[2px] w-9" style={{ background: "var(--gold)" }} />
              Est. 2019 · Singapore
            </div>
            <h1 className="text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.03em] text-white">
              Where Africa <br />and Asia do{" "}
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>business.</span>
            </h1>
            <p className="mt-7 max-w-[620px] text-[1.05rem] md:text-[1.15rem] text-white/85 leading-relaxed">
              SACham Singapore connects leaders, companies, capital and opportunities between South Africa, Singapore and the wider Africa–Asia region — anchored in one of the world&#39;s most trusted business hubs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/membership"
                className="btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold text-white"
                style={{ background: "var(--emerald)", boxShadow: "0 14px 30px rgba(0,122,90,0.34)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--emerald-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--emerald)")}
              >
                Become a Member <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold text-white"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(6px)" }}
              >
                Our Story <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat bar — overlapping hero */}
      <section className="relative bg-white">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <div
            className="rounded-2xl border bg-white -mt-14 md:-mt-16 relative z-20"
            style={{ borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 24px 60px rgba(15,23,42,0.15)" }}
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x"
              style={{ color: "rgba(15,23,42,0.08)" }}
            >
              {[["2,500+", "Businesses in database"], ["60", "Corporate members"], ["200+", "Events hosted"], ["800+", "Connections made"]].map(([n, l]) => (
                <div key={l} className="px-6 py-7">
                  <div className="font-display text-[2rem] md:text-[2.4rem] leading-none" style={{ color: "var(--navy)" }}>{n}</div>
                  <div className="mt-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--steel)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="py-4 text-white/80 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="ticker-track text-[0.78rem] font-extrabold uppercase tracking-[0.18em]">
          {[...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{w}</span>
              <span style={{ color: "var(--gold)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO NARRATIVE — editorial two-col */}
      <section className="bg-white">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] py-24 md:py-28">
          <div className="grid gap-14 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">The Chamber</div>
              <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">
                A trusted platform for leaders working across two regions.
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
              <p className="text-[1.02rem] leading-relaxed" style={{ color: "var(--ink)" }}>
                The South African Chamber of Commerce Singapore is a business community dedicated to strengthening economic, commercial and professional ties between South Africa and Singapore.
              </p>
              <p className="mt-5 text-[1rem] leading-relaxed">
                We provide strategic insight, meaningful engagement and access to high-value opportunities for organisations and leaders navigating both markets.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em]" style={{ color: "var(--emerald)" }}>
                Read more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TWO CITIES */}
      <section className="bg-white pb-24">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { img: "/images/cape-town.jpg", label: "South Africa" },
              { img: "/images/singapore.jpg", label: "Southeast Asia" },
            ].map((c) => (
              <div key={c.label} className="relative overflow-hidden rounded-[20px] group" style={{ aspectRatio: "4 / 3" }}>
                <img src={c.img} alt={c.label} className="absolute inset-0 h-full w-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,42,0) 40%, rgba(15,23,42,0.7) 100%)" }} />
                <div className="absolute left-6 bottom-5">
                  <p className="font-display text-3xl md:text-4xl" style={{ color: "#fff" }}>{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AutoplayVideo videoId="EHsdCqXA2gQ" />

      {/* STORY BAND — testimonials */}
      <section className="relative overflow-hidden py-24 text-white" style={{ background: "var(--navy)" }}>
        <div className="pointer-events-none absolute left-1/2 -top-32 h-[640px] w-[640px] rounded-full" style={{ background: "radial-gradient(circle,rgba(0,122,90,0.32),transparent 62%)" }} />
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] relative">
          <MemberExperienceCarousel slides={[
            { image: "/images/testimonials/testimonial-dinner.jpg",
              intro: { heading: "Belong. Be seen. Build.",
                paragraphs: [
                  "New members join because they want access. Existing members stay because they feel seen, connected and commercially relevant.",
                  "The next chapter of SACham is about a clearer annual member journey: strategy breakfasts, sector roundtables, trade briefings, member spotlights and signature events that give members reasons to keep showing up."
                ] },
              quote: "SACham is not just a chamber. It is the Africa\u2013Asia business corridor, anchored in Singapore." },
            { image: "/images/testimonials/testimonial-absa.jpg", quote: "Just a short note to say thank you to the team for the collaboration and efforts to produce and host a successful event. It was a fantastic opportunity to build the Absa brand with key decision-makers focused on trade and investment related to Africa. Our association with the Chamber has certainly been productive and promises to be more so.", attribution: "Absa CIB" },
            { image: "/images/testimonials/testimonial-bipo.jpg", quote: "Being a part of this chamber has been instrumental in fostering strong business relationships between South Africa and Singapore. The chamber provides an effective platform for networking, collaboration, and knowledge-sharing among professionals from diverse industries.", attribution: "BIPO" },
            { image: "/images/testimonials/testimonial-fergus.jpg", quote: "The South Africa Chamber of Commerce has been an invaluable resource for Fergus Consultancy Group. As a member, we have gained access to a network of professionals and business opportunities that have greatly benefited our company.", attribution: "Fergus Consultancy Group" },
            { image: "/images/testimonials/testimonial-bottle.jpg", quote: "Joining the Chamber has opened doors in places least expected \u2014 more doors than we could have figured on our own. As a small and young business, the boost we got through the membership justifies the very reasonable cost.", attribution: "Message in a Bottle" },
            { image: "/images/testimonials/testimonial-cmr.jpg", quote: "You've already opened more doors than we could have hoped for, and we're truly grateful for everything you've done and continue to do to help us navigate Singapore in the right way.", attribution: "CMR Logistics" },
            { image: "/images/testimonials/testimonial-wesgro.jpg", quote: "The joint mission between the South Africa\u2013Singapore Chamber of Commerce and Wesgro was an unequivocal success. This collaboration stands as a strong testament to the effectiveness of partnering with chambers of commerce when entering new markets.", attribution: "Wesgro" },
            { image: "/images/testimonials/testimonial-dpworld.jpg", quote: "Participating in the trade mission to Singapore was a valuable opportunity to engage with a diverse network of industry stakeholders. It broadened my perspective on global logistics trends and opened doors for strategic collaboration.", attribution: "DP World" }
          ]} />
        </div>
      </section>

      {/* VALUE — editorial cards with icons */}
      <section className="bg-white">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] py-24 md:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow mb-5">Member Value</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">Built for leaders working across continents.</h2>
            <p className="mt-5 text-[1rem]">
              Whether you are entering a new market, building influence, raising visibility or looking for the right room — SACham helps you move with trust.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {valueCards.map((c) => {
              const Icon = c.icon;
              return (
                <article key={c.title} className="relative overflow-hidden rounded-[20px] border p-8 flex flex-col"
                  style={{ background: "#fff", borderColor: "rgba(15,23,42,0.08)", transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(15,23,42,0.10)"; e.currentTarget.style.borderColor = "rgba(0,122,90,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(15,23,42,0.08)"; }}>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl" style={{ background: "rgba(0,122,90,0.08)", color: "var(--emerald)" }}>
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-8 mb-3 text-[1.5rem]">{c.title}</h3>
                  <p className="leading-relaxed">{c.body}</p>
                  <div className="mt-8 pt-6 border-t flex items-center justify-between text-[0.72rem] font-extrabold uppercase tracking-[0.18em]" style={{ borderColor: "rgba(15,23,42,0.08)", color: "var(--steel)" }}>
                    <span>Member benefit</span>
                    <ArrowUpRight className="w-4 h-4" style={{ color: "var(--emerald)" }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUS SECTORS */}
      <section style={{ background: "var(--soft-white)" }}>
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] py-24">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow mb-5">Focus Sectors</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">Where the corridor is most active.</h2>
            <p className="mt-5">Members operate across a diversified set of high-relevance industries between South Africa and Southeast Asia.</p>
          </div>
          <div className="rounded-[20px] overflow-hidden border" style={{ borderColor: "rgba(15,23,42,0.08)", background: "#fff" }}>
            <ul>
              {focusSectors.map((s, i) => (
                <li key={s.n} className="group flex items-center justify-between px-6 md:px-8 py-6 border-t first:border-t-0"
                  style={{ borderColor: "rgba(15,23,42,0.06)", transition: "background 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,122,90,0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-display text-lg" style={{ color: "var(--gold)" }}>{s.n}</span>
                    <span className="font-display text-[1.35rem] md:text-[1.55rem]" style={{ color: "var(--navy)" }}>{s.t}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5" style={{ color: "var(--steel)" }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative overflow-hidden py-24"
        style={{ backgroundImage: "url(/images/globe-network.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.82)" }} />
        <div className="mx-auto w-[min(1100px,calc(100%-40px))] relative z-10">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="eyebrow mb-4" style={{ color: "var(--gold)" }}>Stay Connected</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-white leading-[1.1]">Get news, updates and event information.</h2>
              <p className="mt-4 text-white/70">The latest on trade missions, member events and business briefings — straight to your inbox.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for signing up! We'll be in touch."); }}
              className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First name" required className="rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none" />
                <input type="text" placeholder="Last name" required className="rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none" />
              </div>
              <input type="email" placeholder="Email address" required className="rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm border border-white/15 focus:border-[var(--gold)] focus:outline-none" />
              <button type="submit" className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold"
                style={{ background: "var(--gold)", color: "var(--navy)", boxShadow: "0 10px 30px rgba(217,164,4,0.28)" }}>
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA — editorial image + accent */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <div className="grid overflow-hidden rounded-[24px] border md:grid-cols-2" style={{ borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 24px 60px rgba(15,23,42,0.10)" }}>
            <div className="relative min-h-[320px]">
              <img src="/images/networking.jpg" alt="SACham members networking" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,91,67,0.15) 0%, rgba(0,91,67,0.35) 100%)" }} />
              <div className="absolute left-6 bottom-6 right-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--gold)", color: "var(--navy)" }}>
                  <ArrowRight className="w-5 h-5" />
                </span>
                <p className="font-display text-lg md:text-xl" style={{ color: "#fff" }}>Join the corridor</p>
              </div>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: "var(--sand)" }}>
              <div className="eyebrow mb-5">Get Involved</div>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.1]">
                Ready to expand your business network across Africa and Asia?
              </h2>
              <p className="mt-5 text-[1rem]" style={{ color: "var(--steel)" }}>
                Become a member, attend an event, or partner with SACham Singapore.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/membership" className="btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold text-white"
                  style={{ background: "var(--emerald)", boxShadow: "0 14px 30px rgba(0,122,90,0.22)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--emerald-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--emerald)")}>
                  View Membership <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:info@sacham.sg" className="btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold"
                  style={{ background: "#fff", color: "var(--navy)", border: "1px solid rgba(15,23,42,0.1)" }}>
                  Contact SACham <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Partners */}
      <section className="bg-white pt-24">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] text-center">
          <div className="eyebrow justify-center inline-flex">Trusted Partners</div>
          <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)]" style={{ color: "var(--navy)" }}>Gold Partners</h2>
        </div>
        <div className="mt-14 overflow-hidden" style={{ maskImage: "linear-gradient(to right,transparent,black 10%,black 90%,transparent)", WebkitMaskImage: "linear-gradient(to right,transparent,black 10%,black 90%,transparent)" }}>
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {[...goldPartners, ...goldPartners].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex h-24 w-56 shrink-0 flex-col items-center justify-center rounded-lg border px-6"
                style={{ borderColor: "rgba(15,23,42,0.08)", background: "#fff" }}>
                <span className="font-display text-xl font-bold" style={{ color: "var(--navy)" }}>{p.name}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: "var(--steel)" }}>{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <div className="grid gap-14 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">FAQ</div>
              <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">Frequently asked questions.</h2>
              <div className="mt-8 overflow-hidden rounded-[20px]" style={{ boxShadow: "0 24px 60px rgba(15,23,42,0.15)" }}>
                <img src="/images/about-event-1.jpg" alt="SACham Singapore event" className="h-auto w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="md:col-span-7">
              <ul>
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <li key={f.q} className="border-b" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
                      <button type="button" onClick={() => setOpenFaq(open ? -1 : i)}
                        className="flex w-full items-center justify-between gap-4 py-6 text-left">
                        <span className="font-display text-[1.15rem] md:text-[1.25rem]" style={{ color: "var(--navy)" }}>{f.q}</span>
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: "rgba(15,23,42,0.12)", color: open ? "var(--emerald)" : "var(--steel)" }}>
                          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      {open && (
                        <p className="pb-6 pr-14 text-[0.98rem] leading-relaxed">{f.a}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
