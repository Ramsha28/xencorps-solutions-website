"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudiesList } from "../../constants/caseStudiesData";

interface CaseStudyDetailProps {
  slug: string;
}

export default function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const caseStudy = caseStudiesList.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div style={{ background: T.ink, color: T.white, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20 }}>
        <h1 style={{ fontFamily: T.display }}>Case Study Not Found</h1>
        <Link href="/case-studies" style={{ color: T.navyLight, fontFamily: T.sans }}>Back to Case Studies</Link>
      </div>
    );
  }

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
        
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 140, paddingBottom: 80, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
            <div>
              {/* Breadcrumb & Green-dot Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: T.textOnDarkSecondary, fontWeight: 400 }}>
                  <Link href="/case-studies" style={{ color: T.textOnDarkSecondary, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = T.navyLight} onMouseLeave={(e) => e.currentTarget.style.color = T.textOnDarkSecondary}>Case Studies</Link>
                  <span>/</span>
                  <span style={{ color: T.white }}>{caseStudy.client}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.navy }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                    {caseStudy.kicker}
                  </span>
                </div>
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
                  lineHeight: 1.12,
                  letterSpacing: "-0.025em",
                  marginBottom: 24
                }}
              >
                {caseStudy.title}: <br />
                <span style={{ color: T.navyLight }}>{caseStudy.headline}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 16.5, fontWeight: 300, color: T.textOnDarkSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 700 }}
              >
                {caseStudy.overviewDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
              >
                <a href="#overview-section" style={{
                  padding: "14px 28px",
                  background: T.navy,
                  color: T.white,
                  fontFamily: T.sans,
                  fontSize: 13.5,
                  fontWeight: 600,
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: `0 4px 16px ${T.navyGlowStrong}`,
                  transition: "background 0.2s"
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = T.navyLight}
                  onMouseLeave={(e) => e.currentTarget.style.background = T.navy}
                >
                  View Case Challenges
                </a >
                <Link href="/contact" style={{
                  padding: "13px 28px",
                  border: `1.5px solid ${T.navy}`,
                  color: T.white,
                  fontFamily: T.sans,
                  fontSize: 13.5,
                  fontWeight: 600,
                  borderRadius: 100,
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.navyLight;
                    e.currentTarget.style.background = "rgba(34,197,94,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = T.navy;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Consult Partner Advisor
                </Link>
              </motion.div>
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
                maxWidth: 340,
                height: 340,
                borderRadius: 24,
                background: T.inkMid,
                border: `1px solid ${T.line}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 50px rgba(0,0,0,0.3)"
              }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                  {caseStudy.client}
                </span>
                <span style={{ fontSize: 13, color: T.textOnDarkSecondary, fontWeight: 500 }}>
                  {caseStudy.industry}
                </span>
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

      {/* 2. Challenges/Overview Section (White) */}
      <section id="overview-section" style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <div style={{ marginBottom: 64, textAlign: "center" }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Initial Challenges</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Friction Points & Scope
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }} className="hero-grid-layout">
            {caseStudy.challenges.map((chal, idx) => (
              <Reveal key={chal.title} delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.04)" }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: 34,
                    background: T.white,
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    borderRadius: 10,
                    height: "100%",
                    transition: "border-color 0.25s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = T.navy}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.06)"}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: T.navyDim, display: "block", marginBottom: 16 }}>
                    CHALLENGE {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 12, letterSpacing: "-0.01em" }}>
                    {chal.title}
                  </h3>
                  <p style={{ fontFamily: T.sans, fontSize: 14, color: T.textSecondaryLight, lineHeight: 1.6, fontWeight: 300 }}>
                    {chal.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution (Split Layout) Section (Light Mist) */}
      <section style={{ padding: "112px 0", background: T.mist, borderTop: "1px solid rgba(0, 0, 0, 0.04)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <div style={{ marginBottom: 64, textAlign: "center" }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Implementation Journey</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Custom Engineering Execution
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {caseStudy.solutions.map((sol, idx) => (
              <div key={sol.title} style={{ 
                display: "grid", 
                gridTemplateColumns: idx % 2 === 0 ? "1.1fr 0.9fr" : "0.9fr 1.1fr", 
                gap: 64, 
                alignItems: "center" 
              }} className="hero-grid-layout">
                {/* Text Block */}
                <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                  <Reveal>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.navyDim, display: "block", marginBottom: 12 }}>
                      PHASE {String(idx + 1).padStart(2, "0")} / SYSTEM ARCHITECTURE
                    </span>
                    <h3 style={{ fontFamily: T.sans, fontSize: 24, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 16, letterSpacing: "-0.015em" }}>
                      {sol.title}
                    </h3>
                    <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondaryLight, lineHeight: 1.7, fontWeight: 300 }}>
                      {sol.desc}
                    </p>
                  </Reveal>
                </div>
                
                {/* Image Placeholder Block */}
                <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                  <Reveal>
                    <div style={{
                      background: T.white,
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      borderRadius: 12,
                      padding: "48px 30px",
                      position: "relative",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 280,
                      overflow: "hidden"
                    }}>
                      <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)", backgroundSize: "15px 15px" }} />
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                        <span style={{ fontSize: 20 }}>📊</span>
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: T.textPrimaryLight, letterSpacing: "-0.01em" }}>
                        {sol.imagePlaceholderText}
                      </span>
                      <span style={{ fontSize: 11, color: T.textSecondaryLight, marginTop: 4 }}>
                        case-studies/{caseStudy.slug}/diagram-{idx + 1}.png
                      </span>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Supporting Grid (Core Results) Section (White) */}
      <section style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <div style={{ marginBottom: 64, textAlign: "center" }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Core Results</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                System Integrations Deployed
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }} className="hero-grid-layout">
            {caseStudy.results.map((res, idx) => (
              <Reveal key={res.title} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: T.white,
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 10,
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    transition: "border-color 0.25s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = T.navy}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"}
                >
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.navyDim, display: "block", marginBottom: 14 }}>
                      DEPLOYMENT {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 10 }}>
                      {res.title}
                    </h3>
                    <p style={{ fontFamily: T.sans, fontSize: 13.5, color: T.textSecondaryLight, lineHeight: 1.6, fontWeight: 300 }}>
                      {res.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <span style={{ fontSize: 13, color: T.navyDim, fontWeight: 600 }}>Integrated Component</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KPI Stats Strip (Light Mist) */}
      <section style={{ padding: "80px 0", background: T.mist, borderTop: "1px solid rgba(0, 0, 0, 0.04)", borderBottom: "1px solid rgba(0, 0, 0, 0.04)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="hero-grid-layout">
            {caseStudy.stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.06}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: T.sans, fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 800, color: T.navyDim, letterSpacing: "-0.02em", marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: T.sans, fontSize: 12.5, color: T.textSecondaryLight, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Services/Products Cards (Dark Background) */}
      <section style={{ padding: "112px 0", background: T.inkMid }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="hero-grid-layout">
            {/* Recommended Services */}
            <div>
              <Reveal>
                <div style={{ marginBottom: 36 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 10 }}>Recommended Services</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: 24, fontWeight: 700, color: T.white, letterSpacing: "-0.015em" }}>Associated Engineering Practices</h3>
                </div>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {caseStudy.recommendedServices.map((srv, idx) => (
                  <Reveal key={srv.name} delay={idx * 0.05}>
                    <Link
                      href={srv.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        background: T.inkSoft,
                        border: `1px solid ${T.line}`,
                        borderRadius: 10,
                        textDecoration: "none",
                        color: T.white,
                        fontFamily: T.sans,
                        fontSize: 14.5,
                        fontWeight: 600,
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = T.navy;
                        e.currentTarget.style.background = "rgba(34, 197, 94, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = T.line;
                        e.currentTarget.style.background = T.inkSoft;
                      }}
                    >
                      <span>{srv.name}</span>
                      <span style={{ fontSize: 16, color: T.navyLight }}>→</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div>
              <Reveal>
                <div style={{ marginBottom: 36 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 10 }}>Proprietary Platforms</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: 24, fontWeight: 700, color: T.white, letterSpacing: "-0.015em" }}>Software & Platform Modules</h3>
                </div>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {caseStudy.recommendedProducts.map((prod, idx) => (
                  <Reveal key={prod.name} delay={idx * 0.05}>
                    <Link
                      href={prod.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        background: T.inkSoft,
                        border: `1px solid ${T.line}`,
                        borderRadius: 10,
                        textDecoration: "none",
                        color: T.white,
                        fontFamily: T.sans,
                        fontSize: 14.5,
                        fontWeight: 600,
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = T.navy;
                        e.currentTarget.style.background = "rgba(34, 197, 94, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = T.line;
                        e.currentTarget.style.background = T.inkSoft;
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.navy }} />
                        <span>{prod.name}</span>
                      </div>
                      <span style={{ fontSize: 12, color: T.navyLight, fontWeight: 600 }}>Explore Platform →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Custom Premium CTA Band (Dark Card) */}
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
                Ready to Secure Your System Architecture?
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
                  Request Consultation
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
                  Compare SLAs & Pricing
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
