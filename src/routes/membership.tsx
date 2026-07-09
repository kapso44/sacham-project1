import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";


export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Become a Member — SACham Singapore" },
      { name: "description", content: "Membership pathways for individuals, companies and partners building Africa–Asia business relevance." },
      { property: "og:title", content: "Become a Member — SACham Singapore" },
      { property: "og:description", content: "Choose how you want to grow with SACham Singapore." },
    ],
  }),
  component: MembershipPage,
});

type Tier = {
  label: string;
  name: string;
  intro: string;
  price: string;
  items: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    label: "Individual",
    name: "Professional",
    intro: "For individuals in Singapore. 12-month membership.",
    price: "SGD 300 / 12 months",
    items: [
      "Access to and listing on the membership directory for individuals",
      "Special member rates at events",
      "10% discount on Fergus Consultancy Group services",
      "Special rates at SAISG",
      "Special Singapore Airlines rates (SA ↔ Singapore)",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
      "10% discount on Apostil.co.za services",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/2631/apply/",
  },
  {
    label: "Individual",
    name: "Subcommittee",
    intro: "For individuals participating in a SACham subcommittee.",
    price: "SGD 100 / 12 months",
    items: [
      "Member rates at events",
      "10% discount on Fergus Consultancy Group services",
      "Special rates at SAISG",
      "Membership directory listing for individuals",
      "Participation in a subcommittee",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/25319/apply/",
  },
  {
    label: "Recommended",
    name: "Corporate Partner",
    intro: "12-month membership for companies. Includes 3 member slots.",
    price: "SGD 750 / 12 months",
    featured: true,
    items: [
      "Directory listing for individuals and corporate contacts",
      "Special member rates at events",
      "Share special member rates — 2 members",
      "Contribution and advertising in the newsletter",
      "Co-organised SACham/Member event speaking opportunity OR branding at 1 event",
      "Company logo on secondary page of SACham website",
      "10% discount on Fergus Consultancy Group services",
      "Special Singapore Airlines rates (SA ↔ Singapore)",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
      "10% discount on Apostil.co.za services",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/6576/apply/",
  },
  {
    label: "South Africa",
    name: "Corporate Partner SA",
    intro: "12-month membership for South Africa-based companies. Includes 3 member slots.",
    price: "ZAR 6000 / 12 months",
    items: [
      "Directory listing for individuals and corporate contacts",
      "Special member rates at events",
      "Share special member rates — 2 members",
      "Contribution and advertising in the newsletter",
      "Co-organised SACham/Member event speaking opportunity OR branding at 1 event",
      "Company logo on secondary page of SACham website",
      "10% discount on Fergus Consultancy Group services",
      "Special Singapore Airlines rates (SA ↔ Singapore)",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
      "10% discount on Apostil.co.za services",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/38630/apply/",
  },
  {
    label: "Partner",
    name: "Green Partner",
    intro: "12-month membership for companies. Includes 4 member slots.",
    price: "SGD 1600 / 12 months",
    items: [
      "Membership directory listing",
      "Special member rates at events",
      "Share special member rates — 3 members",
      "Contribution and advertising in the newsletter",
      "Co-organised event speaking opportunity OR branding at 2 events",
      "Company logo on SACham website homepage",
      "Job posting on SACham website",
      "Share member discounts with 2 individuals",
      "Company logo on SACham email signature",
      "Sponsorship opportunities",
      "10% discount on Fergus Consultancy Group services",
      "Introductions to government agencies",
      "Special Singapore Airlines rates (SA ↔ Singapore)",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
      "10% discount on Apostil.co.za services",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/2633/apply/",
  },
  {
    label: "Partner",
    name: "Gold Partner",
    intro: "12-month membership for companies. Includes 5 member slots.",
    price: "SGD 2700 / 12 months",
    items: [
      "Membership directory listing",
      "Special member rates at events",
      "Share special member rates — 4 members",
      "Contribution and advertising in the newsletter",
      "Co-organised SACham-hosted event OR 3 branded events / speaking opportunities",
      "Company logo on SACham website homepage",
      "Job posting on SACham website",
      "Share member discounts with 4 individuals",
      "Company logo on SACham email signature",
      "Sponsorship opportunities",
      "10% discount on Fergus Consultancy Group services",
      "Introductions to government agencies",
      "Special Singapore Airlines rates (SA ↔ Singapore)",
      "15% off Company Secretary, Quarterly Accounting & Annual Compliance",
      "FREE Microsoft 365 CIS Baseline Security Assessment",
      "10% discount on Apostil.co.za services",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/2634/apply/",
  },
  {
    label: "Strategic",
    name: "Platinum Partner",
    intro: "Strategic corridor-level partnership with board representation and exclusivity.",
    price: "SGD 10,000 / 12 months",
    items: [
      "1 seat on the Board of Directors and Head of a Sub Committee",
      "Category exclusivity for the duration of the agreement",
      "Right to identify as a Platinum Partner with link to sacham.sg",
      "Monthly networking session hosted by Platinum Partner",
      "Quarterly Platinum Partner Webinar",
      "4 Platinum Partner hosted, fully catered networking events per year",
      "4 open tickets to SA Chamber events",
      "4 complimentary invitations to exclusive DNA events",
      "2 free invites to the Gala Event",
      "Brand representation across all marketing collateral and events",
      "Company logo on SACham email signature and website homepage",
      "Unlimited editorial contribution to the newsletter and website",
      "Priority booking and special rates for SACham and Partner events",
      "Sponsorship opportunities",
      "10% discount on Fergus Consultancy Group services",
      "Special member rates at SAISG",
    ],
    cta: "Become a Member",
    href: "https://sacham-sg.glueup.com/membership/2729/apply/",
  },
];

function MembershipPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  return (
    <SiteLayout>
      <main>
        {/* HEADER */}
        <section className="hero-bg border-b border-border">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] pt-20 pb-14">
            <div className="eyebrow mb-5">Membership</div>
            <h1 className="max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
              Choose how you want to grow.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem]">
              Membership pathways designed for individuals, companies and partners seeking stronger
              Africa–Asia business relevance.
            </p>
          </div>
        </section>

        {/* TIERS */}
        <section className="bg-gradient-to-b from-[var(--soft-white)] to-[#EEF2F3]">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-20">
            <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((t) => {
                const isOpen = expanded[t.name];
                const visibleItems = isOpen ? t.items : t.items.slice(0, 4);
                const hiddenCount = t.items.length - 4;
                return (

                <article
                  key={t.name}
                  className={[
                    "flex flex-col rounded-[28px] p-7 shadow-[0_16px_36px_rgba(15,23,42,0.06)]",
                    t.featured
                      ? "bg-[var(--navy)] text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] lg:-translate-y-3.5"
                      : "border border-black/[0.07] bg-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex self-start rounded-full px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.12em]",
                      t.featured
                        ? "bg-[rgba(217,164,4,0.18)] text-[var(--gold)]"
                        : "bg-[rgba(0,122,90,0.1)] text-[var(--emerald)]",
                    ].join(" ")}
                  >
                    {t.label}
                  </span>
                  <h3 className={`mt-5 mb-2 text-[1.55rem] ${t.featured ? "text-white" : ""}`}>
                    {t.name}
                  </h3>
                  <p className={`mb-3 text-[0.95rem] ${t.featured ? "text-white/85" : ""}`}>
                    {t.intro}
                  </p>
                  <p
                    className={`mb-5 text-sm font-extrabold uppercase tracking-[0.1em] ${
                      t.featured ? "text-[var(--gold)]" : "text-[var(--emerald)]"
                    }`}
                  >
                    {t.price}
                  </p>
                  <ul className="mb-5 grid gap-3 text-[0.94rem]">
                    {visibleItems.map((i) => (
                      <li
                        key={i}
                        className={`flex gap-3 ${t.featured ? "text-white/85" : "text-[var(--steel)]"}`}
                      >
                        <span
                          className={
                            t.featured
                              ? "font-black text-[var(--gold)]"
                              : "font-black text-[var(--emerald)]"
                          }
                        >
                          ✓
                        </span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  {hiddenCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setExpanded((p) => ({ ...p, [t.name]: !isOpen }))}
                      className={`mb-6 self-start text-[0.8rem] font-extrabold uppercase tracking-[0.12em] underline-offset-4 hover:underline ${
                        t.featured ? "text-[var(--gold)]" : "text-[var(--emerald)]"
                      }`}
                    >
                      {isOpen ? "Show less" : `Read more (+${hiddenCount})`}
                    </button>
                  )}
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-auto inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-extrabold transition",
                      t.featured
                        ? "bg-[var(--gold)] text-[var(--navy)] shadow-[0_14px_30px_rgba(217,164,4,0.22)] hover:-translate-y-0.5"
                        : "border border-black/10 bg-white text-[var(--navy)] hover:-translate-y-0.5 hover:border-[var(--emerald)] hover:text-[var(--emerald)]",
                    ].join(" ")}
                  >
                    {t.cta}
                  </a>
                </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );

}
