import { motion } from "framer-motion";
import useCursorGlow from "../hooks/useCursorGlow";

export default function CursorGlow() {
  const { x, y } = useCursorGlow();
  return (
    <motion.div
      className="pointer-events-none fixed z-[100] hidden h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(242,133,0,0.16), rgba(242,133,0,0) 60%)",
        mixBlendMode: "multiply",
      }}
      animate={{ x, y }}
      transition={{ type: "spring", damping: 20, stiffness: 120, mass: 0.4 }}
    />
  );
}
