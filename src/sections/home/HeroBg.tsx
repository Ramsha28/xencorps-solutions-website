"use client";

import { motion, useTransform, MotionValue, useScroll } from "framer-motion";
import { T } from "../../styles/theme";

interface HeroBgProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroBg({ scrollYProgress }: HeroBgProps) {
  const { scrollYProgress: defaultScroll } = useScroll();
  const activeProgress = scrollYProgress || defaultScroll;
  const gridY   = useTransform(activeProgress, [0, 1], [0, 120]);
  const opacity = useTransform(activeProgress, [0, 0.55], [1, 0]);
  const rings   = [0, 1, 2, 3];

  return (
    <motion.div
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        pointerEvents: "none", opacity,
      }}
    >
      {/* Dark ink base */}
      <div style={{
        position: "absolute", inset: 0,
        background: T.ink,
      }} />

      {/* Full-screen background building image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/hero-building.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        opacity: 0.20,
      }} />

     

      {/* Bottom fade (blends body) */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
        background: `linear-gradient(to bottom, transparent, ${T.ink})`,
        zIndex: 2,
      }}/>
      {/* Left fade (insures text contrast - shadow) */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, ${T.ink} 0%, rgba(11, 15, 20, 0.7) 45%, transparent 100%)`,
        zIndex: 2,
      }}/>
    </motion.div>
  );
}