"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { T } from "../../styles/theme";
import AnimCounter from "../../components/common/AnimCounter";
import HeroBg from "./HeroBg";
import Link from "next/link";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const contentY  = useTransform(scrollYProgress, [0, 0.45], [0, -80]);
  const contentOp = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const badgeY    = useTransform(scrollYProgress, [0, 0.3],  [0, -24]);
  const h1Y       = useTransform(scrollYProgress, [0, 0.4],  [0, -56]);
  const subY      = useTransform(scrollYProgress, [0, 0.4],  [0, -40]);
  const statOp    = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", background: T.ink, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <HeroBg scrollYProgress={scrollYProgress} />

      <div style={{ position: "relative", maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 128, paddingBottom: 96, width: "100%" }}>
        <div style={{ maxWidth: 660 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{ y: badgeY, display: "flex", alignItems: "center", gap: 11, marginBottom: 30 }}
          >
            <div style={{ width: 30, height: 1.5, background: "#16A34A", borderRadius: 2 }}/>
            <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.textOnDarkSecondary, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Enterprise Technology & Intelligent Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              y: h1Y,
              fontFamily: T.display,
              fontSize: "clamp(42px, 5.8vw, 80px)",
              fontWeight: 800,
              color: T.white,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              marginBottom: 26,
            }}
          >
            Intelligent{" "}
            <em style={{ fontStyle: "italic", color: "#4ADE80" }}>Enterprise</em>
            <br />Systems. Built
            <br />to Endure.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.44 }}
            style={{
              y: subY,
              fontFamily: T.sans, fontSize: 17, fontWeight: 300,
              color: T.textOnDarkSecondary, lineHeight: 1.78,
              maxWidth: 510, marginBottom: 46,
              letterSpacing: "0.005em",
            }}
          >
            Xencorpsolutions fuses deep consulting expertise with three proprietary enterprise platforms — SmartGRC, Smart Orion, and Smart Crypto Exchange — to transform how organizations govern, operate, and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.58 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <Link href="/contact" style={{
              padding: "14px 30px",
              background: "#16A34A", color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 4px 18px rgba(22, 163, 74, 0.25)",
              letterSpacing: "0.01em",
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#15803D"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#16A34A"}
            >
              Schedule Consultation
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link href="/products" style={{
              padding: "14px 30px",
              background: "transparent", color: "#4ADE80",
              fontFamily: T.sans, fontSize: 14, fontWeight: 500,
              borderRadius: 100, textDecoration: "none",
              border: `1.5px solid #16A34A`,
              letterSpacing: "0.01em",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(22, 163, 74, 0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Explore Platforms
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.72 }}
            style={{ opacity: statOp, display: "flex", gap: 44, marginTop: 64, paddingTop: 32, borderTop: `1px solid ${T.line}` }}
          >
            {[
              { v: 3,  s: "",   l: "Proprietary Platforms" },
              { v: 9,  s: "+",  l: "Industries Served" },
              { v: 6,  s: "+",  l: "Practice Areas" },
            ].map(m => (
              <div key={m.l}>
                <div style={{ fontFamily: T.sans, fontSize: 36, fontWeight: 700, color: T.white, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  <AnimCounter target={m.v} suffix={m.s}/>
                </div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: T.textOnDarkSecondary, marginTop: 5, fontWeight: 400 }}>{m.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
      >
        <span style={{ fontFamily: T.sans, fontSize: 10, color: T.textOnDarkSecondary, textTransform: "uppercase", letterSpacing: "0.16em" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, #16A34A, transparent)` }}/>
      </motion.div>
    </section>
  );
}