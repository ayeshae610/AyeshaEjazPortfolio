import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import MagneticButton from "./MagneticButton";

const info = [
  { label: "Email", value: "ayeshae610@gmail.com", href: "mailto:ayeshae610@gmail.com", icon: "✉" },
  { label: "LinkedIn", value: "/in/ayesha-ejaz", href: "#", icon: "in" },
  { label: "GitHub", value: "@ayeshaejaz", href: "#", icon: "◉" },
  { label: "WhatsApp", value: "Chat directly", href: "#", icon: "☎" },
  { label: "Location", value: "Remote · Worldwide", href: "#", icon: "◈" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "AI Automation", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent."
      subtitle="Tell me about your workflow, ops bottleneck, or product idea — I usually reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: info */}
        <div className="soft-card relative overflow-hidden p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-highlight/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-olive/25 blur-3xl" />

          <div className="relative">
            <h3 className="font-display text-2xl font-semibold text-ink">Say hello.</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Available for freelance engagements, retainer partnerships, and advisory work.
            </p>

            <ul className="mt-8 space-y-4">
              {info.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-border/60 hover:bg-white/50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                      {i.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                        {i.label}
                      </div>
                      <div className="truncate text-sm font-medium text-ink">{i.value}</div>
                    </div>
                    <span className="ml-auto text-ink-muted transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="soft-card p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ayesha Ejaz"
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="input"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Project Type">
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="input"
              >
                <option>AI Automation</option>
                <option>Voice AI Agent</option>
                <option>WhatsApp Assistant</option>
                <option>Workflow Automation</option>
                <option>RAG / Knowledge Base</option>
                <option>Consulting</option>
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you trying to build or automate?"
                className="input resize-none"
              />
            </Field>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-ink-muted">Replies within 24 hours.</p>
            <MagneticButton variant="primary" type="submit">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    ✓ Message sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    Send message →
                  </motion.span>
                )}
              </AnimatePresence>
            </MagneticButton>
          </div>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid color-mix(in oklab, var(--color-border) 70%, transparent);
          background: rgba(255,255,255,0.6);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .input:focus {
          border-color: var(--color-highlight);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-highlight) 18%, transparent);
          background: #fff;
        }
      `}</style>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
