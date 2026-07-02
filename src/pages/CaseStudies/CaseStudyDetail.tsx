"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

interface CaseStudyDetailProps {
  slug: string;
}

const studyTitles: Record<string, string> = {
  "global-logistics-modernization": "Global Logistics & Supply Chain Modernization",
  "zero-trust-banking-ledger": "Zero-Trust Multi-Region Banking Ledger",
  "hipaa-compliant-clinical-portal": "HIPAA-Compliant Clinical Portal",
  "omnichannel-retail-checkout": "Omnichannel Retail Checkout"
};

export default function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const title = studyTitles[slug] || "Enterprise Case Brief";

  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      
      <Navigation />
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ 
        position: "relative", 
        minHeight: "75vh", 
        display: "flex", 
        alignItems: "center", 
        overflow: "hidden", 
        background: T.ink 
      }}>
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
        {/* Subtle radial green glow in upper right */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxHeight: 600,
          maxWidth: 600,
          background: T.glow,
          filter: "blur(120px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1
        }} />
        
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 136, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.teal }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Case Briefing Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(34px, 4.4vw, 54px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: 24,
                maxWidth: 960
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 16.5, fontWeight: 300, color: T.textOnDarkSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}
            >
              This case study is currently undergoing final verification and compliance checks under our standard non-disclosure agreements (NDAs). Once approved by our client's legal and security teams, it will be published in full.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
            >
              <Link href="/case-studies" style={{
                padding: "14px 30px",
                background: "#16A34A", color: T.white,
                fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                borderRadius: 100, textDecoration: "none",
                boxShadow: "0 4px 14px rgba(22, 163, 74, 0.2)",
                transition: "background 0.2s"
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#15803D"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#16A34A"}
              >
                Back to Portfolio
              </Link>
              <Link href="/contact" style={{
                padding: "13px 30px",
                border: `1.5px solid ${T.white}`,
                color: T.white,
                fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                borderRadius: 100, textDecoration: "none",
                transition: "all 0.2s"
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                Connect with an Advisor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
