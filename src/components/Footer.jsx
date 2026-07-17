import { navLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-surface/40">
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="container-x relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display font-semibold">
                AE
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-ink">
                Ayesha Ejaz
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Designing intelligent AI systems, voice agents, and no-code automations for
              businesses that want to work smarter.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Navigate
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink transition-colors hover:text-highlight">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Social
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:ayeshae610@gmail.com" className="text-ink hover:text-highlight">Email</a></li>
              <li><a href="#" className="text-ink hover:text-highlight">LinkedIn</a></li>
              <li><a href="#" className="text-ink hover:text-highlight">GitHub</a></li>
              <li><a href="#" className="text-ink hover:text-highlight">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Ayesha Ejaz. Built with intention.
          </p>
          <p className="font-mono text-[11px] text-ink-muted">
            v2026 · shipping intelligent systems
          </p>
        </div>
      </div>
    </footer>
  );
}
