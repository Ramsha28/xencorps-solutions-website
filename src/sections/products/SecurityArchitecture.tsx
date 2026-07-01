"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface SecurityArchitectureProps {
  accentColor: string;
}

export default function SecurityArchitecture({ accentColor }: SecurityArchitectureProps) {
  return (
    <section style={{ background: T.white, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <style>{`
          @media (max-width: 991px) {
            .security-features-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
              Trust & Security
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 16 }}>
              Hardened Enterprise Defense
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }} className="security-features-grid">
              {[
                { title: "Immutable Data Encryption", desc: "Data is encrypted both in transit (TLS 1.3) and at rest (AES-256 GCM) with automatic key-rotation policies managed via hardware security modules." },
                { title: "Granular Role-Based Access (RBAC)", desc: "Strict identity verification mapping directly to corporate Okta/Active Directory structures. Multi-factor verification required for elevated administrative scopes." },
                { title: "High-Availability Failover", desc: "Containerized deployment (Docker/Kubernetes) configured with multi-region active-failover clusters targeting a 99.99% system availability SLA." }
              ].map((s, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  gap: 20,
                  padding: "32px 28px",
                  background: T.mist,
                  border: `1.5px solid ${T.mistDim}`,
                  borderRadius: 12
                }}>
                  <div style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: "50%", 
                    background: `${accentColor}14`, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: accentColor,
                    flexShrink: 0
                  }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: T.sans, fontSize: 16, color: T.ink, fontWeight: 700, marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
