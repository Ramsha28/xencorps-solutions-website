"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
      {/* Subtle Grid overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px", zIndex: 1 }} />

      {/* Background Image overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/secondary-hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.20,
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 144, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 880, textAlign: "left" }}>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}
          >
            <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Capabilities & Practice Areas
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: T.display,
              fontSize: "clamp(38px, 4.8vw, 58px)",
              fontWeight: 800,
              color: T.white,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: 24
            }}
          >
            Technology & <br />
            <em style={{ fontStyle: "italic", color: T.tealLight }}>Consulting</em> Services.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 16.5, fontWeight: 300, color: T.textSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}
          >
            We partner with global enterprises, start-ups, and public sector organizations to build resilient custom systems, deploy automated business intelligence, and orchestrate hybrid-cloud data infrastructures.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-start" }}
          >
            <Link href="/contact" style={{
              padding: "14px 28px",
              background: T.teal,
              color: T.white,
              fontFamily: T.sans,
              fontSize: 13.5,
              fontWeight: 600,
              borderRadius: 100,
              textDecoration: "none",
              boxShadow: `0 4px 16px ${T.tealGlowStrong}`,
              transition: "background 0.2s"
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = T.tealLight}
              onMouseLeave={(e) => e.currentTarget.style.background = T.teal}
            >
              Schedule Consultation
            </Link>
            
            <a href="#services-grid" style={{
              padding: "13px 28px",
              border: "1.5px solid rgba(255, 255, 255, 0.25)",
              color: T.white,
              fontFamily: T.sans,
              fontSize: 13.5,
              fontWeight: 600,
              borderRadius: 100,
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.tealLight;
                e.currentTarget.style.background = "rgba(94,234,212,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Explore Services Grid
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
