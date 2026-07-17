import { motion } from "framer-motion";
import Section from "./Section";
import { services } from "../data/site";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I build for modern businesses."
      subtitle="Six focused practice areas — each shipped as a production-ready system, documented and handed over clean."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/50 p-7 backdrop-blur-xl shadow-soft transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(34,51,59,0.18)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-highlight/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <motion.div
              whileHover={{ rotate: 6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 220, damping: 12 }}
              className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-2xl text-primary-foreground shadow-soft"
            >
              {s.icon}
            </motion.div>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>

            <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-highlight opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Explore capability
              <span aria-hidden>→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
