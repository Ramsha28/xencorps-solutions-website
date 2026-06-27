"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";

const techCategories = [
  {
    id: "backend",
    name: "Backend & Systems",
    desc: "Robust, secure server-side frameworks and microservices engines engineered for transaction integrity and massive scale.",
    items: [
      { name: "Java Spring Boot", purpose: "Banking-grade security, enterprise persistence layers, and microservices orchestrations." },
      { name: "Spring Security / Data", purpose: "Role-Based Access Control (RBAC), OAuth2 integration, and optimized JPA database querying." },
      { name: "Node.js / Express.js", purpose: "High-concurrency API gateways, real-time WebSocket messaging, and async data processing." },
      { name: "Laravel (PHP)", purpose: "Rapid, maintainable business applications, admin portals, and structured MVC systems." }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Web",
    desc: "Responsive web architectures, modern component models, and immersive real-time visualization frameworks.",
    items: [
      { name: "Next.js (React)", purpose: "Server-side rendering, search engine optimization, static site generation, and optimized client bundles." },
      { name: "TypeScript", purpose: "Compile-time type safety, cleaner codebase refactoring, and strict developer contracts." },
      { name: "Tailwind CSS", purpose: "Highly optimized visual token styling and utility-first design systems." },
      { name: "Three.js", purpose: "Dynamic 3D hardware-accelerated graphs, interactive visual mockups, and dashboard UI details." }
    ]
  },
  {
    id: "ai",
    name: "AI & Intelligence",
    desc: "Machine learning, predictive models, and natural language processing pipelines embedded directly into business logic.",
    items: [
      { name: "Python AI & TensorFlow", purpose: "Training predictive algorithms, customer churn modeling, and automated categorization engines." },
      { name: "ML5.js / Client AI", purpose: "In-browser computer vision parsing, pattern matching, and lightweight real-time telemetry." },
      { name: "OpenAI Integrations", purpose: "Automated business document analysis, natural language reports, and context-aware chat agents." }
    ]
  },
  {
    id: "devops",
    name: "Cloud & DevOps",
    desc: "Infrastructure automation, container scheduling, continuous deployment pipelines, and zero-downtime scaling topologies.",
    items: [
      { name: "Docker & Kubernetes", purpose: "Isolated microservice containerization and dynamic auto-scaling clusters." },
      { name: "CI/CD (GitHub Actions)", purpose: "Automated test verification, vulnerability scanning, and multi-environment cloud rollouts." },
      { name: "Nginx / Load Balancer", purpose: "Secure reverse proxying, high-performance static asset caching, and traffic throttling." }
    ]
  },
  {
    id: "erp",
    name: "ERP & CMS Systems",
    desc: "Enterprise resource planning integrations and modular content management hubs engineered to automate corporate workflows.",
    items: [
      { name: "SAP Integration", purpose: "Interfacing global supply chain operations, ledger finance, and corporate audits." },
      { name: "Odoo ERP Customization", purpose: "Tailored manufacturing routing, multi-store POS sync, inventory, and automated HR/Payroll." },
      { name: "Shopify / WooCommerce", purpose: "Scaling e-commerce storefronts, payment vault integrations, and inventory pipelines." }
    ]
  }
];

export default function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState("backend");
  const currentCategory = techCategories.find(c => c.id === activeTab) || techCategories[0];

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
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden", background: `radial-gradient(circle at 70% 30%, ${T.navyDim} 0%, ${T.ink} 70%)` }}>
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
                Technology Framework
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(38px, 5vw, 60px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                marginBottom: 24
              }}
            >
              Enterprise Stacks.<br />
              Selected for <em style={{ fontStyle: "italic", color: T.tealLight }}>Performance</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 16.5,
                fontWeight: 300,
                color: T.textSecondary,
                lineHeight: 1.72,
                letterSpacing: "0.005em"
              }}
            >
              We do not pick tools based on trends. We select frameworks based on their maturity, security capabilities, thread models, and long-term support cycles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          
          {/* Tab buttons */}
          <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap", borderBottom: `1px solid ${T.mistDim}`, paddingBottom: 24 }}>
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: "12px 24px", borderRadius: 100,
                  fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                  border: "1.5px solid",
                  borderColor: activeTab === cat.id ? T.teal : "transparent",
                  background: activeTab === cat.id ? `${T.teal}11` : "transparent",
                  color: activeTab === cat.id ? T.teal : T.navyMid,
                  transition: "all 0.24s"
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }}
            >
              <div>
                <h3 style={{ fontSize: 26, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.02em" }}>{currentCategory.name}</h3>
                <p style={{ fontSize: 15, color: "#3D5E5E", lineHeight: 1.72, fontWeight: 300, marginBottom: 24 }}>{currentCategory.desc}</p>
                
                <div style={{ padding: 24, border: `1px solid ${T.mistDim}`, background: T.mist, borderRadius: 8 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: T.ink, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Design Goal</h4>
                  <p style={{ fontSize: 13, color: "#2E4A4A", lineHeight: 1.6, fontWeight: 300 }}>
                    Our deployments target sub-millisecond network profiles, high resilience failovers (Active-Active), and immutable security ledger controls.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.14em", borderBottom: `1px solid ${T.mistDim}`, paddingBottom: 10 }}>Core Stacks & Enterprise Purpose</p>
                {currentCategory.items.map((item, i) => (
                  <div key={item.name} style={{ display: "flex", gap: 18, borderBottom: `1px solid ${T.mistDim}`, paddingBottom: 18 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.teal, marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: 15.5, fontWeight: 600, color: T.ink, marginBottom: 4 }}>{item.name}</h4>
                      <p style={{ fontSize: 13.5, color: "#2E4A4A", lineHeight: 1.6, fontWeight: 300 }}>{item.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Security Accordion Section */}
      <section style={{ background: T.mist, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Security Posture</p>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: T.ink, letterSpacing: "-0.02em" }}>Compliance & Framework Aligned</h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { title: "ISO 27001 Ready", desc: "Our system architectures conform to ISO/IEC 27001:2022 standards. Every codebase is run through automated static analysis (SAST) and software composition analysis (SCA) to verify libraries." },
              { title: "GDPR Compliance", desc: "Data processing, consent logging, audit trails, and tokenized databases are engineered to meet GDPR specifications, securing user information automatically." },
              { title: "Regulatory Audit Logs", desc: "Every transaction, configuration change, and administrative request creates immutable audit trails, ensuring traceability for financial and government operations." }
            ].map(card => (
              <Reveal key={card.title}>
                <div style={{ background: T.white, padding: 36, border: `1px solid ${T.mistDim}`, borderRadius: 8, height: "100%" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: T.ink, marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: "#3D5E5E", lineHeight: 1.66, fontWeight: 300 }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: `linear-gradient(135deg, ${T.ink} 0%, ${T.navyDim} 100%)`, padding: "96px 0", color: T.white, textAlign: "center" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Need Custom Architecture Advice?</h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Discuss your legacy setup, migration plans, or microservices migration with our senior solutions engineers.
            </p>
            <a href="/contact" style={{
              padding: "14px 34px",
              background: T.orange, color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 0 24px rgba(240,104,48,0.22)",
              letterSpacing: "0.01em"
            }}>
              Consult Our Architect
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
