import { motion } from "framer-motion";
import Section from "./Section";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted by founders & operators."
      subtitle="What clients say after shipping real systems into production."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="soft-card relative p-7"
          >
            <div className="absolute right-6 top-6 font-display text-5xl leading-none text-highlight/40">
              &ldquo;
            </div>
            <div className="flex items-center gap-1 text-highlight">
              {Array.from({ length: t.rating }).map((_, k) => (
                <span key={k}>★</span>
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-ink-muted">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
