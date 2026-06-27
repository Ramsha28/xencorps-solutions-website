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

      <motion.svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", y: gridY }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="isogrid" x="0" y="0" width="120" height="68" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 34 L60 68 L0 34 Z"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="0.8"
            />
          </pattern>
          <radialGradient id="vmask" cx="50%" cy="50%" r="65%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="igmask">
            <rect width="1440" height="900" fill="url(#vmask)"/>
          </mask>
        </defs>
        <rect width="1440" height="900" fill="url(#isogrid)" mask="url(#igmask)"/>

        {/* Highlighted iso cells */}
        {[
          "M780 306 L840 340 L780 374 L720 340 Z",
          "M840 340 L900 374 L840 408 L780 374 Z",
          "M720 374 L780 408 L720 442 L660 408 Z",
          "M900 306 L960 340 L900 374 L840 340 Z",
          "M840 272 L900 306 L840 340 L780 306 Z",
        ].map((d, i) => (
          <motion.path
            key={i} d={d}
            fill="rgba(34, 197, 94, 0.08)"
            stroke="rgba(34, 197, 94, 0.28)"
            strokeWidth="0.8"
            strokeOpacity={0.45}
            animate={{ fillOpacity: [0.06, 0.22, 0.06] }}
            transition={{ duration: 3.2 + i * 0.7, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}

        {/* Radiating signal rings */}
        {rings.map((i) => (
          <motion.circle
            key={i}
            cx={840} cy={358} r={40}
            fill="none"
            stroke="rgba(34, 197, 94, 0.22)"
            strokeWidth="0.9"
            initial={{ r: 40, opacity: 0.2 }}
            animate={{ r: 200, opacity: 0 }}
            transition={{ duration: 3.8, delay: i * 0.95, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* Data flow lines */}
        {[200, 310, 430, 540, 650].map((y, i) => (
          <motion.line
            key={i}
            x1={-60} y1={y} x2={500} y2={y}
            stroke="rgba(34, 197, 94, 0.18)"
            strokeWidth="0.7"
            strokeOpacity={0.12}
            strokeDasharray="6 18"
            animate={{ x1: [-60, 560], x2: [500, 1120] }}
            transition={{ duration: 9 + i * 1.4, repeat: Infinity, ease: "linear", delay: i * 1.1 }}
          />
        ))}

        <defs>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(34, 197, 94, 1)" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="rgba(34, 197, 94, 1)" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="1150" cy="200" rx="320" ry="260" fill="url(#orb)"/>
      </motion.svg>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
        background: `linear-gradient(to bottom, transparent, ${T.ink})`,
      }}/>
      {/* Left fade */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, ${T.ink} 0%, rgba(11, 15, 20, 0.7) 45%, transparent 100%)`,
      }}/>
    </motion.div>
  );
}