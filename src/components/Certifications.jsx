import { motion } from "framer-motion";
import Section from "./Section";
import { certifications } from "../data/site";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials that back the craft."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="soft-card group flex items-start gap-4 p-5"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-highlight/10 text-highlight">
              ✦
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-sm font-semibold text-ink">{c.title}</div>
              <div className="mt-0.5 text-xs text-ink-muted">{c.issuer} · {c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
