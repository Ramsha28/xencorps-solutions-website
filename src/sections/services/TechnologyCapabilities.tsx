"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const techStack = [
  {
    cat: "Frontend Engineering",
    desc: "Interactive, search-optimized interfaces and responsive layouts.",
    items: ["React JS", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Bootstrap"]
  },
  {
    cat: "Backend & APIs",
    desc: "Robust business logic engines, secure data APIs, and modular microservices.",
    items: ["Java Spring Boot", "Node.js", "Express.js", "Laravel", "Spring Security", "PHP"]
  },
  {
    cat: "Mobile Applications",
    desc: "Cross-platform mobile apps built with native-grade performance.",
    items: ["Flutter", "Android SDK", "iOS Swift", "Offline Synchronization"]
  },
  {
    cat: "AI & Intelligent Systems",
    desc: "Integrated machine learning, analytics, and automated decision flows.",
    items: ["Python", "TensorFlow", "ML5.js", "OpenAI APIs", "Custom ML Models"]
  },
  {
    cat: "ERP & Business Software",
    desc: "Enterprise workflow automation, accounting, and multi-branch systems.",
    items: ["SAP", "Odoo ERP", "POS Integration", "Procurement Workflows"]
  },
  {
    cat: "DevOps & Infrastructure",
    desc: "Container orchestration, high-availability, and automatic deployments.",
    items: ["Docker", "Kubernetes", "Nginx", "CI/CD Pipelines", "Hybrid Network Plans"]
  },
  {
    cat: "Database Systems",
    desc: "Secure transaction processing, low-latency caches, and document stores.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Spring Data"]
  },
  {
    cat: "Commerce & CMS",
    desc: "Frictionless checkout paths, product synchronization, and digital stores.",
    items: ["Shopify Integration", "WooCommerce", "WordPress", "Custom Storefronts"]
  }
];

export default function TechnologyCapabilities() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Technical Stack
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Our Enterprise Technology Stack
            </h2>
            <p style={{ fontSize: 15, color: "#3B5C5A", fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              We select modern frameworks and cloud-native services engineered for high throughout, strict security audits, and long-term codebase health.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {techStack.map((tech) => (
            <Reveal key={tech.cat}>
              <motion.div
                onHoverStart={() => setHov(tech.cat)}
                onHoverEnd={() => setHov(null)}
                style={{
                  background: T.mist,
                  border: `1.5px solid ${hov === tech.cat ? T.teal : T.mistDim}`,
                  borderRadius: 10,
                  padding: "36px 28px",
                  height: "100%",
                  transition: "border-color 0.25s, background 0.25s",
                  boxShadow: hov === tech.cat ? "0 10px 30px rgba(0,194,160,0.03)" : "none"
                }}
              >
                <h3 style={{
                  fontSize: 16.5,
                  fontWeight: 700,
                  color: T.ink,
                  marginBottom: 10,
                  letterSpacing: "-0.01em"
                }}>
                  {tech.cat}
                </h3>
                
                <p style={{
                  fontSize: 13,
                  color: "#476A67",
                  lineHeight: 1.55,
                  fontWeight: 300,
                  marginBottom: 18
                }}>
                  {tech.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: T.navyDim,
                        background: "rgba(15,118,110,0.07)",
                        border: "1px solid rgba(15,118,110,0.12)",
                        padding: "3px 9px",
                        borderRadius: 100
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
