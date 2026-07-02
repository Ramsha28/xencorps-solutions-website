"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";

const pillars = [
  {
    title: "Engineering Excellence",
    desc: "We enforce strict domain separation, layered designs, and rigorous code reviews to eliminate technical debt from day one."
  },
  {
    title: "Scalable Architecture",
    desc: "Our microservices and event-driven patterns utilize Kafka, Docker, and Kubernetes to handle variable enterprise workloads."
  },
  {
    title: "Business-First Outcomes",
    desc: "We align all architectural decisions directly to business metrics, ensuring operational savings and measurable ROI."
  },
  {
    title: "Security by Design",
    desc: "Built-in cryptography, secure authentication (OAuth2/OIDC), role-based permissions, and continuous log audits."
  },
  {
    title: "Modern Tech Stack",
    desc: "We work with top-tier tools including React, Next.js, Java Spring Boot, and Flutter to build fast and maintainable products."
  },
  {
    title: "Dedicated Support",
    desc: "We provide long-term consulting advisory, technical performance checks, version scaling, and security patches."
  }
];

export default function WhyChooseServices() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: T.ink, padding: "112px 0", color: T.white }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Engineering Mandate
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Why Leading Enterprises Choose Xencorp
            </h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.68 }}>
              We merge corporate consulting discipline with agile product engineering to deliver solutions that secure your operational future.
            </p>
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 991px) {
            .services-pillars-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .pillars-cards-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 40, alignItems: "start" }} className="services-pillars-grid">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="pillars-cards-container">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.05}>
                <motion.div
                  onHoverStart={() => setHov(idx)}
                  onHoverEnd={() => setHov(null)}
                  style={{
                    background: hov === idx ? T.inkSoft : T.inkMid,
                    border: `1px solid ${hov === idx ? "rgba(0,194,160,0.25)" : "rgba(0,194,160,0.08)"}`,
                    borderRadius: 10,
                    padding: "36px 30px",
                    height: "100%",
                    transition: "background 0.25s, border-color 0.25s",
                    boxShadow: hov === idx ? `0 10px 30px ${T.navyGlow}` : "none"
                  }}
                >
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: hov === idx ? T.tealLight : T.white,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s"
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: 13.5,
                    color: T.textSecondary,
                    lineHeight: 1.6,
                    fontWeight: 300
                  }}>
                    {p.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <div style={{ position: "sticky", top: 100 }}>
            <Reveal delay={0.2}>
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Enterprise Support SLA Telemetry Dashboard"
                sublabel="Target: 4:5 visual mockup displaying response latency graphs, uptime metrics (99.99%), support queue levels, and secure patching histories"
                iconType="database"
              />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
