"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";

interface ProductHeroProps {
  id: string;
  badge: string;
  name: string;
  headline: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  accentColor: string;
}

export default function ProductHero({
  id,
  badge,
  name,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  accentColor,
}: ProductHeroProps) {
  
  // Custom interactive dashboard mockups in pure HTML/CSS/Framer Motion
  const renderDashboardMockup = () => {
    const isOrion = id === "smart-orion";
    const isGrc = id === "smart-grc";

    if (isOrion) {
      // Smart Orion ERP Dashboard Mockup
      return (
        <div style={{ background: T.inkMid, borderRadius: 14, border: `1px solid rgba(0, 163, 112, 0.25)`, padding: 22, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0, 163, 112, 0.08)`, width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(255,255,255,0.06)`, paddingBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00A370" }} />
              <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.white, textTransform: "uppercase", letterSpacing: "0.08em" }}>Orion ERP v4.2</span>
            </div>
            <span style={{ fontSize: 9, color: T.textSecondary, background: "rgba(0, 163, 112, 0.12)", padding: "3px 8px", borderRadius: 4 }}>System Status: Operational</span>
          </div>
          
          {/* Metrics grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Net Revenue", val: "$4.82M", change: "+14.2%" },
              { label: "Inventory Turn", val: "8.4x", change: "+4.1%" },
              { label: "Fulfillment", val: "99.8%", change: "Optimal" }
            ].map((m, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 8, padding: 10 }}>
                <div style={{ fontSize: 9, color: T.textSecondary, marginBottom: 4 }}>{m.label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.white, fontFamily: T.sans }}>{m.val}</div>
                <div style={{ fontSize: 8, color: m.change.startsWith("+") ? "#00D2A0" : m.change === "Optimal" ? T.textSecondary : "#FF6D00", marginTop: 2 }}>{m.change}</div>
              </div>
            ))}
          </div>

          {/* Operational Flow Graph (CSS Simulation) */}
          <div style={{ flex: 1, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 8, padding: 12, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 10, color: T.white, fontWeight: 600 }}>Multi-Branch Procurement Flow</span>
              <span style={{ fontSize: 9, color: T.textSecondary }}>Real-time Sync</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 110, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {[60, 45, 90, 75, 120, 95, 110].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: h }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                    style={{ width: "100%", background: i === 4 ? "#00A370" : "rgba(0, 163, 112, 0.4)", borderRadius: "3px 3px 0 0" }} 
                  />
                  <span style={{ fontSize: 7, color: T.textSecondary }}>Branch {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (isGrc) {
      // Smart GRC Governance, Risk & Compliance Dashboard Mockup
      return (
        <div style={{ background: T.inkMid, borderRadius: 14, border: `1px solid rgba(0, 194, 160, 0.25)`, padding: 22, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0, 194, 160, 0.08)`, width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(255,255,255,0.06)`, paddingBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.teal }} />
              <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.white, textTransform: "uppercase", letterSpacing: "0.08em" }}>GRC Control Panel</span>
            </div>
            <span style={{ fontSize: 9, color: T.tealLight, background: "rgba(0, 194, 160, 0.12)", padding: "3px 8px", borderRadius: 4 }}>Audit Status: Clean</span>
          </div>

          {/* Compliance Rings Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16, flex: 1 }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 8, padding: 12, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{ fontSize: 10, color: T.white, fontWeight: 600, marginBottom: 8, display: "block" }}>Security Framework Coverage</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { name: "ISO 27001", pct: 98 },
                  { name: "SOC 2 Type II", pct: 100 },
                  { name: "GDPR / DORA", pct: 95 }
                ].map((fw, idx) => (
                  <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9 }}>
                      <span style={{ color: T.textSecondary }}>{fw.name}</span>
                      <span style={{ color: T.white, fontWeight: 600 }}>{fw.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${fw.pct}%` }}
                        transition={{ duration: 1.4, delay: idx * 0.15 }}
                        style={{ height: "100%", background: T.teal, borderRadius: 2 }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 8, padding: 12, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative", width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Circular indicator simulation */}
                <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  <motion.circle 
                    cx="36" cy="36" r="28" fill="none" stroke={T.teal} strokeWidth="6" 
                    strokeDasharray="175"
                    initial={{ strokeDashoffset: 175 }}
                    animate={{ strokeDashoffset: 20 }} // ~90%
                    transition={{ duration: 1.6 }}
                  />
                </svg>
                <div style={{ position: "absolute", textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: T.white }}>92.5</div>
                  <div style={{ fontSize: 6, color: T.textSecondary, textTransform: "uppercase" }}>Index</div>
                </div>
              </div>
              <span style={{ fontSize: 9, color: T.white, marginTop: 8, fontWeight: 500 }}>Overall Compliance</span>
            </div>
          </div>

          {/* Audit Trail Logging */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 8, padding: 10 }}>
            <span style={{ fontSize: 9, color: T.textSecondary, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Live Control Audit Log</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                { time: "16:04:12", msg: "SOC 2 Control CC7.2 (Firewall Verification) - Verified", status: "pass" },
                { time: "15:44:55", msg: "Policy IAM Access Control Verification - Completed", status: "pass" }
              ].map((log, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8.5, color: "rgba(245,252,252,0.85)" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>[{log.time}] {log.msg}</span>
                  <span style={{ color: "#00D2A0", fontWeight: 700 }}>✓ PASS</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Smart Crypto Exchange Mockup
    return (
      <div style={{ background: T.inkMid, borderRadius: 14, border: `1px solid rgba(34, 197, 94, 0.25)`, padding: 22, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(34, 197, 94, 0.08)`, width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(255,255,255,0.06)`, paddingBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.teal }} />
            <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.white, textTransform: "uppercase", letterSpacing: "0.08em" }}>Crypto Terminal Pro</span>
          </div>
          <span style={{ fontSize: 9, color: T.white, background: "rgba(34, 197, 94, 0.15)", padding: "3px 8px", borderRadius: 4 }}>Matching Engine: 0.8ms</span>
        </div>

        {/* Candlestick simulator */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 8, padding: 12, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, marginBottom: 8 }}>
            <div>
              <span style={{ color: T.white, fontWeight: 600 }}>BTC / USDT</span>
              <span style={{ color: "#00C2A0", marginLeft: 8, fontWeight: 700 }}>$67,432.18 (+2.42%)</span>
            </div>
            <span style={{ color: T.textSecondary }}>24h Vol: 48,221.84 BTC</span>
          </div>
          
          {/* Simulated chart bars */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 75, gap: 8, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {[
              { h: 35, y: 15, isGreen: true },
              { h: 25, y: 25, isGreen: false },
              { h: 45, y: 10, isGreen: true },
              { h: 60, y: 0, isGreen: true },
              { h: 30, y: 20, isGreen: false },
              { h: 20, y: 35, isGreen: false },
              { h: 55, y: 5, isGreen: true }
            ].map((bar, i) => (
              <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
                {/* Wick */}
                <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 1.5, height: bar.h + 12, background: bar.isGreen ? "#00D2A0" : "#FF6D00", opacity: 0.5 }} />
                {/* Body */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  style={{ width: "100%", height: bar.h, background: bar.isGreen ? "#00D2A0" : "#FF6D00", borderRadius: 1.5, position: "relative", zIndex: 2 }} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Order Book Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 8.5 }}>
          <div>
            <div style={{ color: "#FF6D00", fontWeight: 700, marginBottom: 4 }}>Asks (Sell)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}><span>67,435.50</span><span style={{ color: "rgba(255,255,255,0.3)" }}>0.482 BTC</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}><span>67,434.00</span><span style={{ color: "rgba(255,255,255,0.3)" }}>1.290 BTC</span></div>
            </div>
          </div>
          <div>
            <div style={{ color: "#00D2A0", fontWeight: 700, marginBottom: 4 }}>Bids (Buy)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}><span>67,430.20</span><span style={{ color: "rgba(255,255,255,0.3)" }}>0.812 BTC</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}><span>67,428.10</span><span style={{ color: "rgba(255,255,255,0.3)" }}>3.045 BTC</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
      {/* Subtle grid backdrop */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px", zIndex: 1 }} />

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

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 136, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}
            >
              <div style={{ width: 30, height: 1.5, background: accentColor, borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                {badge} Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(36px, 4.4vw, 54px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24
              }}
            >
              {name} — <br />
              <em style={{ fontStyle: "italic", color: accentColor }}>{headline}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{ fontSize: 16, fontWeight: 300, color: T.textSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 620 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <Link href="/contact" style={{
                padding: "14px 28px",
                background: T.teal,
                color: T.white,
                fontFamily: T.sans,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 100,
                textDecoration: "none",
                boxShadow: `0 4px 18px ${T.tealGlowStrong}`,
                transition: "filter 0.2s"
              }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "brightness(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "none"}
              >
                {primaryCTA}
              </Link>
              
              <a href="#platform-overview" style={{
                padding: "13px 28px",
                border: "1.5px solid rgba(255, 255, 255, 0.22)",
                color: T.white,
                fontFamily: T.sans,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 100,
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.teal;
                  e.currentTarget.style.background = `${T.teal}0D`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {secondaryCTA}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ width: "100%", height: 350, display: "flex", justifyContent: "center", alignItems: "center" }}
            className="hero-dashboard-container"
          >
            {renderDashboardMockup()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
