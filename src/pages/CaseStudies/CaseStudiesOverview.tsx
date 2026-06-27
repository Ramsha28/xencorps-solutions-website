"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudiesList } from "../../constants/caseStudiesData";

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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
              className="hero-graphic"
            >
              <div style={{
                width: "100%",
                maxWidth: 320,
                height: 320,
                borderRadius: 24,
                background: T.inkMid,
                border: `1px solid ${T.line}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 50px rgba(0,0,0,0.3)"
              }}>
                <span style={{ fontSize: 96 }}>📊</span>
              </div>
            </motion.div>
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
      
      {/* 2. Case Studies Grid (White Section) */}
      <section style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <div style={{ marginBottom: 64, textAlign: "center" }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Enterprise Outcomes</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Client Success Briefs
              </h2>
            </div>
          </Reveal>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="hero-grid-layout">
            {caseStudiesList.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.06)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    background: T.white,
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    borderRadius: 10,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "border-color 0.25s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.navy;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div>
                    {/* Image/Industry Banner */}
                    <div style={{ position: "relative", height: 180, background: T.mistDim, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
                      <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      <div style={{ position: "absolute", bottom: 16, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 9.5, fontWeight: 700, background: "rgba(34, 197, 94, 0.1)", color: T.navyDim, padding: "3px 8px", borderRadius: 100, border: "1px solid rgba(34, 197, 94, 0.2)", letterSpacing: "0.08em" }}>
                          {cs.badge}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: T.textSecondaryLight }}>
                          {cs.client}
                        </span>
                      </div>
                      <span style={{ fontSize: 56 }}>📈</span>
                    </div>

                    <div style={{ padding: 32 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 8 }}>
                        {cs.industry}
                      </span>
                      <h3 style={{ fontFamily: T.sans, fontSize: 22, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 12, letterSpacing: "-0.015em" }}>
                        {cs.title}
                      </h3>
                      <p style={{ fontFamily: T.sans, fontSize: 14, color: T.textSecondaryLight, lineHeight: 1.6, fontWeight: 300, marginBottom: 20 }}>
                        {cs.overviewDescription}
                      </p>
                      
                      {/* Metric Previews */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 20 }}>
                        {cs.stats.map(st => (
                          <div key={st.label}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: T.navyDim }}>{cs.slug === "zero-trust-banking-ledger" && st.label === "SEC Audit Compliance" ? "SEC" : st.value}</div>
                            <div style={{ fontSize: 10, color: T.textSecondaryLight, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.02em", marginTop: 2 }}>{st.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "0 32px 32px" }}>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: T.navyDim,
                        fontFamily: T.sans,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = T.navy;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = T.navyDim;
                      }}
                    >
                      <span>Read Case Study Analysis</span>
                      <span style={{ fontSize: 15 }}>→</span>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
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
