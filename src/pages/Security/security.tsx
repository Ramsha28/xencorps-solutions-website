"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";

export default function SecurityBriefing() {
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
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
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

        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 144, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 800 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}
            >
              <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Security & Trust
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(34px, 4.5vw, 52px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: 20
              }}
            >
              Security Briefing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: T.textOnDarkSecondary,
                marginBottom: 16,
                letterSpacing: "0.05em"
              }}
            >
              Last Updated: July 2, 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 16.5,
                fontWeight: 300,
                color: T.textOnDarkSecondary,
                lineHeight: 1.7,
                letterSpacing: "0.005em"
              }}
            >
              At Xencorp Solutions, security is not an overlay; it is the foundation of our engineering architecture. This briefing details the protocols, design methodologies, and system controls deployed to protect enterprise client databases and operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: T.white, padding: "100px 0", color: T.ink }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>1. Hardened System Architecture</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Xencorp Solutions builds platforms utilizing strict microservices isolation, secure subnet segmentation, and clean code compilation boundaries. We deploy web application firewalls (WAF) to inspect all incoming HTTP/HTTPS requests at our API gateways, shielding database configurations from malicious traffic, SQL injection attempts, and cross-site scripting (XSS) vectors.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>2. Data Encryption Standards</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                We enforce strong cryptography across all lifecycle stages of database records and system state metrics:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>Data in Transit</strong>: Encrypted using Transport Layer Security (TLS 1.3) configurations for all client-to-server and inter-service communications, rejecting legacy SSL/TLS versions.</li>
                <li style={{ marginBottom: 8 }}><strong>Data at Rest</strong>: Encrypted using Advanced Encryption Standard (AES-256 GCM) with keys managed in secure hardware security modules (HSM) featuring automatic key-rotation cycles.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>3. Infrastructure & Deployment Security</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Our application runtimes are deployed in containerized environments (Docker/Kubernetes) hosted inside isolated Virtual Private Clouds (VPC) with strict security group controls.
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>No Direct Database Access</strong>: Databases sit in private subnets with zero public routing, reachable only via internal API clusters.</li>
                <li style={{ marginBottom: 8 }}><strong>CI/CD Vulnerability Scanning</strong>: Deployment pipelines execute automated code audits and container scan checks before committing code changes to production.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>4. Identity & Access Governance</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                We enforce strict identity verification based on the Principle of Least Privilege:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>Multi-Factor Authentication (MFA)</strong>: Required for all administrative consoles, API key updates, and server shell authorizations.</li>
                <li style={{ marginBottom: 8 }}><strong>Role-Based Access Control (RBAC)</strong>: Permissions are mapped to specific roles (POS cashier, compliance auditor, database administrator) and integrated directly into Active Directory / Okta.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>5. Threat Detection & Vulnerability Management</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Xencorp Solutions maintains continuous system auditing using GRC compliance configurations. Our systems compile access logs, runtime configuration profiles, and database access records into immutable, cryptographically signed logs. We run regular static analysis, dynamic testing, and schedule third-party penetration audits annually to verify our system boundaries.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>6. Security Incident Response</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                We operate a documented Incident Response Plan designed to limit the scope of security events. In the event of a verified database anomaly or breach, our team is committed to notifying affected clients within the SLA timelines (typically under 24 hours), detailing the incident scope, affected records, and remediation steps.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>7. Contact Our Security Team</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                If you are a security researcher looking to report a vulnerability, or a client requesting a copy of our latest compliance audit brief, please contact us at:
              </p>
              <div style={{ fontFamily: T.sans, fontSize: 14, color: T.ink, lineHeight: 1.7, fontWeight: 600 }}>
                <div>Xencorp Solutions - Security Office</div>
                <div>Lahore, Pakistan</div>
                <div>Email: security@xencorpsolutions.com</div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}
