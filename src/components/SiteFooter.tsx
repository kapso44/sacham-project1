import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--navy)] text-white">
      <div className="h-[3px] flag-rule" />
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-12 py-16 md:grid-cols-3">
        <div>
          <h4 className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
            <li><Link to="/membership" className="hover:text-[var(--gold)]">Membership</Link></li>
            <li><a href="/#events" className="hover:text-[var(--gold)]">Events</a></li>
            <li><a href="/#insights" className="hover:text-[var(--gold)]">Insights</a></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-white">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>info@sacham.sg</li>
            <li>Singapore</li>
            <li className="pt-2 text-white/60">UEN: T19SS0115K</li>
            <li className="text-white/60">1 Raffles Place, #15-61 One Raffles Place Tower 2, Singapore 048616</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-white">Connect with us</h4>
          <ul className="mt-4 flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/company/south-african-chamber-of-commerce-singapore/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGViZjVrM292X2tJUi1RVDhMQU9kWVhJcDUzQXxBQ3Jtc0ttcW1oa2xVM3NFT2t6T0hXR2syLV92SFFnRC1hY0Z3N1Y2dWJ5d2gtcFFpZTZDNW10cDkwbWlFRnNJdkV1b0VNeElTekgwMWhZc3djYkdmN2NFWlBoUkRobm9lS2FEalU5WHJIN2duUTRsWE9VQnB2SQ&q=https%3A%2F%2Fwww.facebook.com%2FSouth-African-Chamber-of-Commerce-Singapore-354409438555789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://www.youtube.com/@southafricanchamberofcomme1837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col items-start justify-between gap-2 py-6 text-xs text-white/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} SACham Singapore. All rights reserved.</span>
          <span>Founded 10 September 2019</span>
        </div>
      </div>
    </footer>
  );
}
