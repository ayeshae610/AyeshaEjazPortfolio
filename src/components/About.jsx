import { motion } from "framer-motion";
import Section from "./Section";

const cards = [
  { title: "Experience", body: "2+ yrs marketing · AI systems engineer" },
  { title: "Technologies", body: "n8n · OpenAI · VAPI · LangChain · Supabase" },
  { title: "Industries", body: "SaaS · Retail · Hospitality · Agencies" },
  { title: "Achievements", body: "1000+ hours saved · 99% uptime workflows" },
];

function Illustration() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-surface via-background to-cream shadow-soft">
      <div className="absolute inset-0 mesh-bg opacity-70" />
      <div className="absolute inset-0 noise" />

      {/* silhouette / portrait card */}
      <div className="absolute inset-6 rounded-[1.5rem] border border-white/40 bg-white/30 backdrop-blur-md">
        <div className="flex h-full flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">workspace · v2026</div>
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>

          <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-highlight/40 via-olive/30 to-primary/20 blur-2xl" />
            <div className="relative grid h-40 w-40 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_60px_-15px_rgba(34,51,59,0.5)]">
              <span className="font-display text-6xl font-semibold">AE</span>
            </div>
            {["OpenAI","n8n","VAPI","Supabase"].map((t,i)=>{
              const angles = [-30, 60, 150, 240];
              const a = (angles[i] * Math.PI) / 180;
              const r = 130;
              return (
                <motion.div
                  key={t}
                  animate={{ y: [0,-6,0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                  style={{ transform: `translate(${Math.cos(a)*r}px, ${Math.sin(a)*r}px)` }}
                  className="glass absolute rounded-full px-3 py-1 text-[10px] font-medium text-ink"
                >
                  {t}
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-xl bg-primary p-3 text-primary-foreground">
            <div className="font-mono text-[10px] opacity-70">status</div>
            <div className="font-mono text-xs">building intelligent systems ✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="AI Systems Engineer with a marketer's mind.">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Illustration />
        </motion.div>

        <div>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-[17px]">
            <p>
              I am <span className="font-medium text-ink">Ayesha Ejaz</span>, an AI No-Code /
              Low-Code Systems Engineer passionate about helping businesses streamline
              operations through intelligent automation and AI-powered systems. I specialize
              in designing scalable AI agents, workflow automations, voice assistants, and
              business process automation that improve efficiency, reduce manual work, and
              enhance customer experiences.
            </p>
            <p>
              Alongside my AI expertise, I bring 2 years of professional experience in
              Social Media Marketing and Management — developing digital strategies, managing
              brand presence, creating content, and growing online visibility. That marketing
              lens gives me a deeper understanding of customer journeys, letting me build AI
              solutions that solve real business challenges.
            </p>
            <p>
              My expertise spans n8n, OpenAI, VAPI, LangChain, Supabase, WhatsApp Automation,
              API integrations, and modern no-code/low-code platforms. I focus on delivering
              reliable, scalable, production-ready AI systems tailored to each client's needs.
            </p>
            <p>
              My mission is to empower startups, agencies, and growing businesses with
              intelligent automation that saves time, increases productivity, and lets teams
              focus on innovation and sustainable growth.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="soft-card p-5"
              >
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-highlight">
                  {c.title}
                </div>
                <div className="mt-1.5 text-sm text-ink">{c.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
