import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "../data/site";

function JsonBlock({ data }) {
  return (
    <pre className="max-h-40 overflow-hidden rounded-xl bg-[#0f1a1f] p-3 font-mono text-[10.5px] leading-relaxed text-emerald-200/90">
{JSON.stringify(data, null, 2)}
    </pre>
  );
}

function ProjectCard({ p, i }) {
  const spans = {
    lg: "md:col-span-2",
    md: "md:col-span-1",
  }[p.size || "md"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-primary p-6 text-primary-foreground shadow-[0_20px_60px_-20px_rgba(34,51,59,0.35)] ${spans}`}
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-highlight/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 opacity-30 noise" />

      {/* Particles */}
      {[...Array(6)].map((_, k) => (
        <motion.span
          key={k}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + k, repeat: Infinity, delay: k * 0.3 }}
          style={{ left: `${10 + k * 14}%`, top: `${20 + (k % 3) * 25}%` }}
          className="absolute h-1 w-1 rounded-full bg-white/60"
        />
      ))}

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70">
              {p.tag}
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold md:text-2xl">{p.title}</h3>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LIVE
          </span>
        </div>

        <div className="mt-5">
          <JsonBlock data={p.json} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-[11px] text-white/60">{p.metric}</span>
          <span className="text-xs opacity-70 transition-opacity group-hover:opacity-100">
            case study →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Systems shipped. Outcomes measured."
      subtitle="A bento of real AI systems — voice agents, WhatsApp bots, RAG assistants, and workflow brains."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
