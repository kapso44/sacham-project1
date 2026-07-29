import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{ background: "rgba(248,249,250,0.88)", borderColor: "rgba(15,23,42,0.08)" }}
    >
      <div className="mx-auto flex h-[82px] w-[min(1180px,calc(100%-40px))] items-center justify-between gap-7">
        <Link to="/" className="flex items-center" aria-label="SACham Singapore home">
          <img src="/images/sacham-logo.png" alt="SACham Singapore" className="h-11 w-auto md:h-12" />
        </Link>
        <nav className="hidden items-center gap-7 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] md:flex" aria-label="Primary">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.exact}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/membership"
            className="btn hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[0.85rem] font-extrabold text-white"
            style={{ background: "var(--emerald)", boxShadow: "0 14px 30px rgba(0,122,90,0.24)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--emerald-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--emerald)")}
          >
            Become a Member
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border"
            style={{ borderColor: "rgba(15,23,42,0.12)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "rgba(15,23,42,0.08)", background: "#fff" }}>
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-4 flex flex-col gap-3 text-sm font-extrabold uppercase tracking-[0.12em]">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.exact} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/membership" className="btn inline-flex items-center justify-center rounded-full px-5 py-3 text-[0.85rem] font-extrabold text-white" style={{ background: "var(--emerald)" }}>Become a Member</Link>
          </div>
        </div>
      )}
    </header>
  );
}
