import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const metrics = [
  { k: "AI Automation", v: "Specialist" },
  { k: "10+", v: "AI Technologies" },
  { k: "1000+", v: "Hours Saved" },
  { k: "99%", v: "Workflow Reliability" },
];

function DashboardMock() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-highlight/25 blur-3xl" />

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="soft-card relative overflow-hidden p-5"
        style={{ boxShadow: "0 30px 80px -30px rgba(34,51,59,0.35)" }}
      >
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[11px] text-ink-muted">n8n · workflow.live</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            LIVE
          </span>
        </div>

        {/* Flow nodes */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { t: "WhatsApp", s: "trigger" },
            { t: "OpenAI", s: "GPT-4o" },
            { t: "Supabase", s: "insert" },
          ].map((n, i) => (
            <motion.div
              key={n.t}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
              className="rounded-2xl border border-border/60 bg-surface/70 p-3"
            >
              <div className="text-[11px] font-medium text-ink">{n.t}</div>
              <div className="mt-1 font-mono text-[10px] text-ink-muted">{n.s}</div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-ink/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 1 }}
                  className="h-full bg-highlight"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* JSON */}
        <div className="mt-4 rounded-2xl bg-primary p-4 text-primary-foreground">
          <pre className="font-mono text-[11px] leading-relaxed">
{`{
  "agent": "VAPI",
  "callsHandled": 2451,
  "accuracy": "98.7%",
  "uptime": "24/7"
}`}
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border/60 bg-white/60 p-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">API Call</div>
            <div className="mt-1 font-mono text-[11px] text-ink">POST /agent/reply</div>
            <div className="mt-1 text-[10px] text-emerald-700">200 · 812ms</div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-white/60 p-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">Voice</div>
            <div className="mt-1 flex items-end gap-0.5 h-6">
              {[6,10,14,8,18,12,20,10,14,6,12,16,8].map((h,i)=>(
                <motion.span
                  key={i}
                  animate={{ height: [h, h+6, h] }}
                  transition={{ duration: 1 + (i%3)*0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 rounded-full bg-highlight"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-8 top-24 hidden rounded-2xl px-3 py-2 shadow-soft md:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700">◈</span>
          <div>
            <div className="text-[11px] font-semibold text-ink">Supabase</div>
            <div className="text-[10px] text-ink-muted">+240 rows /min</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-6 bottom-16 hidden rounded-2xl px-3 py-2 shadow-soft md:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-highlight/15 text-highlight">☎</span>
          <div>
            <div className="text-[11px] font-semibold text-ink">VAPI Voice Agent</div>
            <div className="text-[10px] text-ink-muted">98.7% accuracy</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-10 top-8 hidden rounded-2xl px-3 py-2 shadow-soft md:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">✿</span>
          <div>
            <div className="text-[11px] font-semibold text-ink">OpenAI GPT-4o</div>
            <div className="text-[10px] text-ink-muted">streaming · 812ms</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-96 w-96 rounded-full bg-highlight/25 blur-[120px] blob" />
      <div className="pointer-events-none absolute -right-32 top-80 -z-10 h-[28rem] w-[28rem] rounded-full bg-olive/25 blur-[140px] blob" style={{ animationDelay: "-6s" }} />
      <div className="pointer-events-none absolute inset-0 -z-10 noise" />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-tight text-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
              AI · Automation · No-Code · Low-Code
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl lg:text-7xl"
            >
              Ayesha Ejaz — Building{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Intelligent AI Systems</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-highlight/35 blur-sm" />
              </span>{" "}
              That Scale Businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              I design and deploy AI-powered automations, intelligent workflows, voice agents,
              WhatsApp assistants, and business process automation using modern no-code and
              low-code technologies to help companies work smarter and faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton as="a" href="#projects" variant="primary">
                View Projects →
              </MagneticButton>
              <MagneticButton as="a" href="#contact" variant="ghost">
                Schedule a Call
              </MagneticButton>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
              }}
              className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {metrics.map((m) => (
                <motion.div
                  key={m.v}
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.7 }}
                  className="rounded-2xl border border-border/50 bg-white/40 p-4 backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-semibold text-ink">{m.k}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">{m.v}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
