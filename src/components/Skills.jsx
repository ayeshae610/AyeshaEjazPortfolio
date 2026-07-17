import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "../data/site";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A stack built for shipping."
      subtitle="Deep, hands-on fluency across the AI-native no-code toolchain."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: gi * 0.06 }}
            className="soft-card p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">{g.name}</h3>
              <span className="rounded-full bg-highlight/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-highlight">
                {g.items.length} tools
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <motion.span
                  key={it.label}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="cursor-default rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium text-ink"
                >
                  {it.label}
                </motion.span>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {g.items.map((it, i) => (
                <div key={it.label}>
                  <div className="flex items-center justify-between text-[11px] text-ink-muted">
                    <span>{it.label}</span>
                    <span className="font-mono">{it.level}%</span>
                  </div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-ink/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-highlight to-highlight/70"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
