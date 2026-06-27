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
        
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 64, alignItems: "center" }} className="hero-grid-layout">
          {/* Visual Architecture Diagram (Pure CSS/React Mockup) */}
          <Reveal>
            <div style={{ background: T.mist, border: `1px solid ${T.mistDim}`, borderRadius: 14, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.mistDim}`, paddingBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Security Blueprints</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.ink, marginTop: 2 }}>Platform Deployment Topology</h3>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00D2A0" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6D00" }} />
                </div>
              </div>

              {/* Layer 1: Client Gateway */}
              <div style={{ background: T.white, border: `1px solid ${T.mistDim}`, borderRadius: 8, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Layer 01</span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.ink, marginTop: 2 }}>Secure API Gateway & Client Access</div>
                </div>
                <span style={{ fontSize: 9, color: T.white, background: accentColor, padding: "4px 10px", borderRadius: 4, fontWeight: 600 }}>TLS 1.3 · IPsec</span>
              </div>

              {/* Connector */}
              <div style={{ display: "flex", justifyContent: "center", margin: "-12px 0" }}>
                <svg width="2" height="24" viewBox="0 0 2 24" fill="none">
                  <line x1="1" y1="0" x2="1" y2="24" stroke={T.mistDim} strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Layer 2: Core Application Engine */}
              <div style={{ background: T.white, border: `1px solid ${T.mistDim}`, borderRadius: 8, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Layer 02</span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.ink, marginTop: 2 }}>Isolated Application Microservices</div>
                </div>
                <span style={{ fontSize: 9, color: T.tealDim, background: `${T.teal}14`, padding: "4px 10px", borderRadius: 4, fontWeight: 600 }}>RBAC · OAuth2</span>
              </div>

              {/* Connector */}
              <div style={{ display: "flex", justifyContent: "center", margin: "-12px 0" }}>
                <svg width="2" height="24" viewBox="0 0 2 24" fill="none">
                  <line x1="1" y1="0" x2="1" y2="24" stroke={T.mistDim} strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Layer 3: Database & Hardware Vault */}
              <div style={{ background: T.white, border: `1px solid ${T.mistDim}`, borderRadius: 8, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Layer 03</span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.ink, marginTop: 2 }}>Encrypted Data Store Vault</div>
                </div>
                <span style={{ fontSize: 9, color: "#FF6D00", background: "rgba(255,109,0,0.1)", padding: "4px 10px", borderRadius: 4, fontWeight: 600 }}>AES-256 GCM</span>
              </div>
            </div>
          </Reveal>

          {/* Copy Description Column */}
          <div>
            <Reveal>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
                Trust & Security
              </span>
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 28 }}>
                Hardened Enterprise Defense
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { title: "Immutable Data Encryption", desc: "Data is encrypted both in transit (TLS 1.3) and at rest (AES-256 GCM) with automatic key-rotation policies managed via hardware security modules." },
                  { title: "Granular Role-Based Access (RBAC)", desc: "Strict identity verification mapping directly to corporate Okta/Active Directory structures. Multi-factor verification required for elevated administrative scopes." },
                  { title: "High-Availability Failover", desc: "Containerized deployment (Docker/Kubernetes) configured with multi-region active-failover clusters targeting a 99.99% system availability SLA." }
                ].map((s, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor, marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontFamily: T.sans, fontSize: 15, color: T.ink, fontWeight: 700, marginBottom: 4 }}>{s.title}</h4>
                      <p style={{ fontFamily: T.sans, fontSize: 13, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
