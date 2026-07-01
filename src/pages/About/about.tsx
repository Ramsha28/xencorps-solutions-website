"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";

const timelineEvents = [
  { year: "2019", title: "Founding & Local Operations", desc: "Established in Lahore, Pakistan as a specialized technology studio focusing on custom software engineering and enterprise infrastructure development." },
  { year: "2021", title: "Global Expansion", desc: "Entered international markets through direct business references and consulting channels, building initial partnerships across North America and Europe." },
  { year: "2023", title: "Platform Strategy", desc: "Began development of our proprietary enterprise platforms — SmartGRC, Smart Orion, and Smart Crypto Exchange — merging consulting with SaaS products." },
  { year: "2025", title: "Scale & Practice Leadership", desc: "Grew to serve over 9 practice areas across 10 industries, delivering multi-region deployments, regulatory compliance solutions, and AI-enabled operations." },
  { year: "2026", title: "Present & Future", desc: "Operating as a trusted global technology partner known for engineering excellence, corporate credibility, and long-term executive relationships." }
];

const strengths = [
  { h: "Enterprise-Focused Engineering", d: "We design and deliver platforms with scalability, security compliance, and architectural integrity from day one." },
  { h: "Modern Technology Stack", d: "We leverage the power of Node.js, Spring Boot, React, Next.js, and Python AI libraries to build future-ready solutions." },
  { h: "Full-Cycle Execution", d: "From discovery workshops and technical design to deployment pipelines and ongoing maintenance, we cover the full lifecycle." },
  { h: "Business-Oriented Outcomes", d: "We align engineering decisions to operational efficiency, corporate cost reduction, compliance, and ROI." },
  { h: "Dedicated Strategic Support", d: "We construct long-term consulting partnerships, providing continuous security updates, scale-ups, and technology advice." },
  { h: "Global Collaboration Model", d: "Flexible engagement models including dedicated teams and strategic consulting to collaborate with global enterprises." }
];

const faqs = [
  {
    q: "Where is Xencorp Solutions headquartered, and how do you support global clients?",
    a: "We are headquartered in Lahore, Pakistan, where our core strategic engineering center is based. We operate a highly synchronized global delivery model, coordinating stand-ups, sprint reviews, and deployment milestones with clients across North America, Europe, and Asia to ensure seamless project execution."
  },
  {
    q: "What makes Xencorp's engineering team unique?",
    a: "Every engagement is led and staffed by senior software engineers, solutions architects, and systems analysts. We do not place junior developers to learn on your budget. The professionals auditing your legacy system or designing your GRC controls are the ones writing the code."
  },
  {
    q: "How does Xencorp manage intellectual property ownership?",
    a: "We grant complete intellectual property rights to our clients upon fulfillment of the agreement terms. This covers all custom source code, databases, design prototypes, deployment configurations, and technical assets with zero vendor lock-in or licensing overhead."
  },
  {
    q: "What industries does Xencorp Solutions specialize in?",
    a: "We specialize in sectors with stringent security, performance, and compliance requirements, including banking, finance, healthcare, retail, logistics, manufacturing, public administration, and telecom."
  },
  {
    q: "What is the relationship between your consulting services and proprietary platforms?",
    a: "We offer custom engineering services alongside three ready-made platform accelerators: SmartGRC, Smart Orion, and Smart Crypto Exchange. Clients can choose to build entirely from scratch, integrate our platforms to save up to 50% on development time, or retain us purely for strategic technology advisory."
  },
  {
    q: "What is Xencorp's philosophy on technology debt and system scalability?",
    a: "We build on clean architecture, strict domain separation, and strict type safety (TypeScript, Java Spring Boot). By enforcing automated test coverage, static code reviews, and containerization, we ensure our codebases are easy to scale, maintain, and audit for decades."
  }
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      <Navigation />

      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
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
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 128, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 760 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}
            >
              <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Who We Are
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 24
              }}
            >
              Engineering Excellence.<br />
              <em style={{ fontStyle: "italic", color: T.tealLight }}>Enterprise</em> Credibility.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 17,
                fontWeight: 300,
                color: T.textSecondary,
                lineHeight: 1.76,
                letterSpacing: "0.005em"
              }}
            >
              Xencorpsolutions is an enterprise technology consulting and custom software development firm. We partner with organizations worldwide to build secure, scalable software platforms, implement intelligent AI systems, and modernize legacy digital infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "start" }} className="hero-grid-layout">
            <Reveal>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Our Story</p>
                <h2 style={{ fontSize: 36, fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", marginBottom: 24, lineHeight: 1.15 }}>
                  Lahore-Rooted. Global Scale.
                </h2>
                <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, marginBottom: 20, fontWeight: 300 }}>
                  Based in Lahore, we began as an elite engineering team dedicated to solving high-complexity software challenges. Over the years, our dedication to clean code, architectural rigor, and robust security has evolved into a global delivery model.
                </p>
                <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, marginBottom: 20, fontWeight: 300 }}>
                  We work through direct business references, strategic consulting engagements, and long-term technology partnerships. Unlike simple agencies, we invest heavily in proprietary products like SmartGRC, Smart Orion, and Smart Crypto Exchange, translating our deep field expertise into reusable enterprise accelerators.
                </p>
                <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300 }}>
                  Today, we collaborate with corporate entities, educational centers, retail distributors, and financial tech firms worldwide to turn complex constraints into secure, scalable, and audit-ready digital platforms.
                </p>
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Reveal delay={0.1}>
                <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: 36, borderRadius: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.teal, marginBottom: 16 }} />
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: T.ink, marginBottom: 10 }}>Our Mission</h3>
                  <p style={{ fontSize: 14.5, color: "#2E4A4A", lineHeight: 1.66, fontWeight: 300 }}>
                    To empower enterprises and scaling organizations through innovative, secure, and automated technology solutions that drive long-term business growth and operational intelligence.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: 36, borderRadius: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.teal, marginBottom: 16 }} />
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: T.ink, marginBottom: 10 }}>Our Vision</h3>
                  <p style={{ fontSize: 14.5, color: "#2E4A4A", lineHeight: 1.66, fontWeight: 300 }}>
                    To become the global benchmark for enterprise technology consulting, recognized for architectural precision, security, and the creation of highly-resilient digital systems.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Strengths (Dark Theme replacing Engineering Culture) */}
      <section style={{ background: T.ink, padding: "112px 0", color: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Our Advantages</p>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 700, color: T.white, letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 16 }}>Strategic Strengths</h2>
            <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, maxWidth: 600, margin: "0 auto", fontWeight: 300, lineHeight: 1.72 }}>
              Our institutional capabilities, modern stack proficiency, and delivery frameworks enable us to execute complex digital modernizations reliably.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="strengths-grid">
            {strengths.map((str, i) => (
              <Reveal key={str.h} delay={i * 0.05}>
                <div style={{
                  padding: "38px 30px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: 12,
                  height: "100%",
                  transition: "all 0.3s ease"
                }}
                 className="strength-card"
                >
                  <div style={{ width: 18, height: 1.5, background: T.teal, marginBottom: 20 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: T.white, marginBottom: 12, letterSpacing: "-0.01em" }}>{str.h}</h3>
                  <p style={{ fontSize: 13.5, color: T.textOnDarkSecondary, lineHeight: 1.68, fontWeight: 300 }}>{str.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .strengths-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
          .strength-card:hover {
            background: rgba(255, 255, 255, 0.04) !important;
            border-color: ${T.teal} !important;
            transform: translateY(-4px);
          }
        `}</style>
      </section>

      {/* Interactive Timeline */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink, overflow: "hidden" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Evolution</p>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: T.ink, letterSpacing: "-0.025em" }}>Our Journey</h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 52, alignItems: "start" }} className="hero-grid-layout">
            <Reveal direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {timelineEvents.map((ev, idx) => (
                  <button
                    key={ev.year}
                    onClick={() => setActiveTimeline(idx)}
                    style={{
                      display: "flex", alignItems: "center", gap: 20,
                      padding: "16px 24px", borderRadius: 8,
                      border: "1.5px solid",
                      borderColor: activeTimeline === idx ? T.teal : "rgba(0,128,128,0.12)",
                      background: activeTimeline === idx ? `${T.teal}09` : "transparent",
                      textAlign: "left", cursor: "pointer", transition: "all 0.2s"
                    }}
                  >
                    <span style={{ fontSize: 20, fontWeight: 700, color: activeTimeline === idx ? T.teal : T.navyMid, fontFamily: T.sans }}>{ev.year}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: T.ink }}>{ev.title}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Reveal direction="right">
                <div style={{ minHeight: 220, border: `1px solid ${T.mistDim}`, background: T.mist, padding: 48, borderRadius: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span style={{ fontSize: 48, fontWeight: 800, color: T.teal, letterSpacing: "-0.03em", lineHeight: 1, fontFamily: T.sans, marginBottom: 14 }}>
                    {timelineEvents[activeTimeline].year}
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: T.ink, marginBottom: 12 }}>
                    {timelineEvents[activeTimeline].title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: "#2E4A4A", lineHeight: 1.72, fontWeight: 300 }}>
                    {timelineEvents[activeTimeline].desc}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate FAQs Accordion Section */}
      <section style={{ background: T.mist, padding: "112px 0", color: T.ink, borderTop: `1px solid ${T.mistDim}` }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.navy, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
                Corporate FAQs
              </span>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, color: T.ink, marginBottom: 18, letterSpacing: "-0.02em" }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: 15.5, color: T.textSecondaryLight, fontWeight: 300, lineHeight: 1.6 }}>
                Learn more about our locations, corporate values, IP policies, and engineering methodologies.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <Reveal key={idx}>
                  <div style={{
                    background: T.white,
                    border: `1px solid ${isOpen ? T.navy : "rgba(0,0,0,0.06)"}`,
                    borderRadius: 12,
                    overflow: "hidden",
                    transition: "border-color 0.25s"
                  }}>
                    {/* Trigger Header */}
                    <button
                      onClick={() => toggle(idx)}
                      style={{
                        width: "100%",
                        padding: "24px 30px",
                        background: "none",
                        border: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "left",
                        color: T.ink,
                        outline: "none",
                        cursor: "pointer"
                      }}
                    >
                      <span style={{ fontSize: 15.5, fontWeight: 600, fontFamily: T.sans, letterSpacing: "-0.01em", paddingRight: 20 }}>
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ color: T.navy, flexShrink: 0 }}
                      >
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Collapsible Answer Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div style={{
                            padding: "0 30px 24px",
                            fontSize: 14,
                            color: T.textSecondaryLight,
                            lineHeight: 1.68,
                            fontWeight: 300,
                            borderTop: "1px solid rgba(0,0,0,0.04)"
                          }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: T.ink, padding: "96px 0", color: T.white, textAlign: "center" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Ready to Partner with Us?</h2>
            <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Whether you need to outsource a dedicated software development team, require GRC/ERP consultancy, or want to explore integrations with our platforms, our senior partners are available.
            </p>
            <a href="/contact" style={{
              padding: "14px 34px",
              background: "#16A34A", color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 4px 14px rgba(22, 163, 74, 0.25)",
              letterSpacing: "0.01em"
            }}>
              Connect with an Advisor
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
