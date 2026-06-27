"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  style?: React.CSSProperties;
}

export default function Reveal({ children, delay = 0, direction = "up", style = {} }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Minimized: fade only, no movement, no stagger delay honoured
  // direction prop kept for API compatibility but no longer drives transform
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={style}
    >
      {children}
    </motion.div>
  );
}