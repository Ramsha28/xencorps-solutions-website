"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { T } from "../../styles/theme";
import AnimCounter from "../../components/common/AnimCounter";
import HeroBg from "./HeroBg";
import Link from "next/link";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const badgeY    = useTransform(scrollYProgress, [0, 0.3],  [0, -24]);
  const h1Y       = useTransform(scrollYProgress, [0, 0.4],  [0, -56]);
  const subY      = useTransform(scrollYProgress, [0, 0.4],  [0, -40]);
  const statOp    = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", background: T.ink, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-stats-row {
            flex-direction: column !important;
            gap: 28px !important;
            align-items: flex-start !important;
            margin-top: 48px !important;
          }
        }
      `}</style>
      <HeroBg scrollYProgress={scrollYProgress} />

      <div style={{ position: "relative", maxWidth: 1300, margin: "0 auto 0 0", padding: "0 36px 0 54px", paddingTop: 144, paddingBottom: 96, width: "100%", zIndex: 3 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }} className="hero-content-layout">
          <div style={{ maxWidth: 960, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              style={{ y: badgeY, display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 11, marginBottom: 32 }}
            >
              <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.textOnDarkSecondary, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Enterprise Platforms & Technology Consulting
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
                fontSize: "clamp(46px, 6.2vw, 84px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: 28,
              }}
            >
              <em style={{ fontStyle: "italic", color: "#4ADE80" }}>Technology</em> That Moves Businesses Forward
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.44 }}
              style={{
                y: subY,
                fontFamily: T.sans,
                fontSize: 18,
                fontWeight: 300,
                color: T.textOnDarkSecondary,
                lineHeight: 1.8,
                maxWidth: 780,
                marginBottom: 48,
                letterSpacing: "0.005em",
              }}
            >
              We build enterprise software, ERP platforms, governance and risk solutions, fintech systems, and AI powered technologies, backed by expert engineering and consulting teams that deploy, customize, and support every solution
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.58 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-start" }}
            >
              <Link href="/contact" style={{
                padding: "15px 32px",
                background: "#16A34A",
                color: T.white,
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 100,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 18px rgba(22, 163, 74, 0.25)",
                letterSpacing: "0.01em",
                transition: "background 0.2s"
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
                padding: "15px 32px",
                background: "transparent",
                color: "#4ADE80",
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: "none",
                border: `1.5px solid #16A34A`,
                letterSpacing: "0.01em",
                transition: "background 0.2s"
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
              style={{
                opacity: statOp,
                display: "flex",
                gap: 64,
                justifyContent: "flex-start",
                marginTop: 80,
                paddingTop: 36,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                width: "100%",
                maxWidth: 600
              }}
              className="hero-stats-row"
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
                  <div style={{ fontFamily: T.sans, fontSize: 12, color: T.textOnDarkSecondary, marginTop: 6, fontWeight: 400 }}>{m.l}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 3 }}
      >
        <span style={{ fontFamily: T.sans, fontSize: 10, color: T.textOnDarkSecondary, textTransform: "uppercase", letterSpacing: "0.16em" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, #16A34A, transparent)` }}/>
      </motion.div>
    </section>
  );
}