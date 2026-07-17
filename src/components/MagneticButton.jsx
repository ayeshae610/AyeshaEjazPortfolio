import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({ children, className = "", variant = "primary", as: Tag = "button", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const tx = useTransform(sx, (v) => v * 0.35);
  const ty = useTransform(sy, (v) => v * 0.35);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const styles = {
    primary:
      "bg-highlight text-highlight-foreground hover:brightness-110 shadow-[0_20px_60px_-20px_rgba(242,133,0,0.55)]",
    ghost:
      "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-ink/[0.03]",
    dark: "bg-primary text-primary-foreground hover:brightness-110",
  }[variant];

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: tx, y: ty }} className="inline-block">
      <Tag
        {...props}
        className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-[filter,transform,background] duration-300 ${styles} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
