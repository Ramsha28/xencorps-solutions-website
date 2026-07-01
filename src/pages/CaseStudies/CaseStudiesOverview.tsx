"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";

export default function CaseStudiesOverviewPage() {
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
        minHeight: "65vh", 
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
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
            <div>
              {/* Green-dot Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.navy }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                  Case Studies & Proof
                </span>
              </motion.div>

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
                Real-World Enterprise Outcomes <br />
                <span style={{ color: T.navyLight }}>Verified by System Data</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 16.5, fontWeight: 300, color: T.textOnDarkSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}
              >
                Explore how XencorpSolutions engineers custom software, zero-trust databases, and real-time trackers that resolve latency bottlenecks, ensure HIPAA compliance, and slash logistics dispatch costs.
              </motion.p>
            </div>

            {/* Graphic Column */}
           
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .hero-grid-layout {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center;
            }
            .hero-graphic {
              order: -1;
              margin-bottom: 20px;
            }
            .hero-grid-layout div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </section>
           {/* 2. Case Studies Coming Soon (White Section) */}
      <section style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
            <div>
              <Reveal>
                <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                  Case Studies Portfolio
                </p>
                <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 24 }}>
                  Verified Enterprise Outcomes. <br />
                  <span style={{ color: T.navyDim }}>Coming Soon.</span>
                </h2>
                <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.textSecondaryLight, lineHeight: 1.7, fontWeight: 300, marginBottom: 24 }}>
                  We are currently compiling and auditing our client outcome data, system architecture flows, and performance benchmarks. 
                  In strict compliance with our Non-Disclosure Agreements (NDAs) and corporate security mandates, all case details are carefully anonymized and verified by solution architects prior to publication.
                </p>
                <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.textSecondaryLight, lineHeight: 1.7, fontWeight: 300, marginBottom: 36 }}>
                  Our upcoming case briefs will cover multi-branch ERP deployments, high-frequency FinTech order-book scalability, and automated GRC security compliance assessments across banking, logistics, and healthcare networks.
                </p>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{
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
                    Talk to a Systems Expert
                  </Link>
                  <Link href="/contact" style={{
                    padding: "13px 30px",
                    border: "1.5px solid #16A34A",
                    color: "#16A34A",
                    fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    borderRadius: 100, textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(22, 163, 74, 0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    Request Technical Profile
                  </Link>
                </div>
              </Reveal>
            </div>
            
            <Reveal delay={0.2}>
              <div style={{ aspectRatio: "4/3", width: "100%", overflow: "hidden", borderRadius: 16, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 12px 36px rgba(0,0,0,0.07)" }}>
                <img
                  src="/images/case-studies/portfolio-cover.png"
                  alt="Case Studies & Systems Auditing Portfolio"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Dark CTA Band (White Section with rounded dark card) */}
      <section style={{ padding: "80px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <div style={{
              background: T.ink,
              border: `1px solid ${T.line}`,
              borderRadius: 20,
              padding: "80px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 350, height: 350, background: T.glow, filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none" }} />
              
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16, position: "relative", zIndex: 2 }}>
                Achieve Comparable Operational Metrics
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 16, color: T.textOnDarkSecondary, maxWidth: 600, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.6, position: "relative", zIndex: 2 }}>
                Engage our systems engineers for a detailed technology stack audit and custom system integration audit.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
                <Link href="/contact" style={{
                  padding: "14px 32px",
                  background: T.navy,
                  color: T.white,
                  fontFamily: T.sans,
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: `0 4px 14px ${T.navyGlowStrong}`,
                  transition: "all 0.2s"
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = T.navyLight; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = T.navy; }}
                >
                  Get Started
                </Link>
                <Link href="/contact" style={{
                  padding: "13px 32px",
                  border: `1.5px solid ${T.navy}`,
                  color: T.white,
                  fontFamily: T.sans,
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 100,
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(34,197,94,0.08)";
                    e.currentTarget.style.borderColor = T.navyLight;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = T.navy;
                  }}
                >
                  Schedule Auditing Brief
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
