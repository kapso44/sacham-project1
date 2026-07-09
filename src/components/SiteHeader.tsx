import { Link } from "@tanstack/react-router";
import logo from "@/assets/sacham-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(248,249,250,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] w-[min(1180px,calc(100%-40px))] items-center justify-between gap-7">
        <Link to="/" className="flex items-center" aria-label="SACham Singapore home">
          <img src={logo} alt="SACham Singapore" className="h-11 w-auto md:h-12" />
        </Link>
        <nav
          className="hidden items-center gap-7 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[var(--steel)] md:flex"
          aria-label="Primary"
        >
          {nav.map((n) =>
            n.to.startsWith("/#") ? (
              <a key={n.to} href={n.to} className="hover:text-[var(--emerald)]">
                {n.label}
              </a>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={n.to === "/" ? { exact: true } : undefined}
                className="hover:text-[var(--emerald)] [&.active]:text-[var(--emerald)]"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <Link
          to="/membership"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--emerald)] px-5 py-3 text-[0.85rem] font-extrabold text-white shadow-[0_14px_30px_rgba(0,122,90,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--emerald-dark)]"
        >
          Become a Member
        </Link>
      </div>
    </header>
  );
}
