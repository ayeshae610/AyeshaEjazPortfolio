import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/site";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="container-x">
        <div
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-shadow duration-500 ${
            scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.06)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 pl-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold">
              AE
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:block">
              Ayesha Ejaz
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton as="a" href="#contact" variant="primary" className="!py-2.5 !px-5">
              Let's Build AI Systems →
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/40 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-[1.5px] w-4 bg-ink" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-[1.5px] w-4 bg-ink" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="block h-[1.5px] w-4 bg-ink" />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.35 }}
              className="glass mt-2 flex flex-col gap-1 rounded-3xl p-4 lg:hidden"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-ink/[0.05]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-highlight px-4 py-3 text-center text-sm font-medium text-highlight-foreground"
              >
                Let's Build AI Systems →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
