import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="hero-bg border-b border-border">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] pt-20 pb-14">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-[1.05rem]">{intro}</p>}
      </div>
    </section>
  );
}
