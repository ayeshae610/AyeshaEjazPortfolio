import { motion } from "framer-motion";

export default function Section({ id, className = "", children, eyebrow, title, subtitle, center = false }) {
  return (
    <section id={id} className={`section-y relative ${className}`}>
      <div className="container-x relative">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
