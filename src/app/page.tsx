"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
// Playfair Display → hero headline only (editorial drama)
// DM Sans         → all body, nav, UI (clean, professional, highly legible)
const fontLink = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');`;

// ─── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  teal:          "#008080",
  tealLight:     "#00AAAA",
  tealDim:       "#005F5F",
  tealGlow:      "rgba(0,128,128,0.20)",
  tealGlowStrong:"rgba(0,128,128,0.38)",
  tealFaint:     "rgba(0,128,128,0.07)",
  ink:           "#04100F",
  inkMid:        "#091A1A",
  inkSoft:       "#0F2424",
  mist:          "#F2FAFA",
  mistDim:       "#E0F2F2",
  white:         "#FFFFFF",
  textPrimary:   "#F5FCFC",
  textSecondary: "#7AACAC",
  textMuted:     "#4A7A7A",
  orange:        "#F06830",
  // typography helpers
  display:       '"Playfair Display", Georgia, serif',
  sans:          '"DM Sans", system-ui, sans-serif',
};

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const variants = {
    hidden: direction === "up"    ? { opacity: 0, y: 40 }
           : direction === "left"  ? { opacity: 0, x: -40 }
           : direction === "right" ? { opacity: 0, x: 40 }
           : { opacity: 0 },
    show:   { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimCounter({ target, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const inc = target / (1800 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

// ─── Hero Background — Animated Isometric Grid ───────────────────────────────
// A subtle, architectural diamond-grid SVG that shifts on scroll and pulses
function HeroBg({ scrollYProgress }) {
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // We'll draw a repeating iso-diamond pattern via SVG path
  // and overlay animated "signal" rings that radiate outward
  const rings = [0, 1, 2, 3];

  return (
    <motion.div
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        pointerEvents: "none", opacity,
      }}
    >
      {/* Deep gradient base */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 80% 65% at 65% 42%, #0D2E2E 0%, ${T.ink} 70%)`,
      }} />

      {/* Isometric grid SVG — scrolls slightly on parallax */}
      <motion.svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", y: gridY }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Iso diamond cell — 60×34 unit cell */}
          <pattern id="isogrid" x="0" y="0" width="120" height="68" patternUnits="userSpaceOnUse">
            {/* left diamond half */}
            <path d="M60 0 L120 34 L60 68 L0 34 Z"
              fill="none"
              stroke="rgba(0,128,128,0.13)"
              strokeWidth="0.8"
            />
          </pattern>
          {/* Vignette mask */}
          <radialGradient id="vmask" cx="50%" cy="50%" r="65%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="igmask">
            <rect width="1440" height="900" fill="url(#vmask)"/>
          </mask>
        </defs>
        {/* Grid fill */}
        <rect width="1440" height="900" fill="url(#isogrid)" mask="url(#igmask)"/>

        {/* Highlighted "active" iso cells near centre-right */}
        {[
          "M780 306 L840 340 L780 374 L720 340 Z",
          "M840 340 L900 374 L840 408 L780 374 Z",
          "M720 374 L780 408 L720 442 L660 408 Z",
          "M900 306 L960 340 L900 374 L840 340 Z",
          "M840 272 L900 306 L840 340 L780 306 Z",
        ].map((d, i) => (
          <motion.path
            key={i} d={d}
            fill={T.tealGlow}
            stroke={T.tealLight}
            strokeWidth="0.8"
            strokeOpacity={0.45}
            animate={{ fillOpacity: [0.06, 0.22, 0.06] }}
            transition={{ duration: 3.2 + i * 0.7, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}

        {/* Radiating signal rings centred on the focal iso cluster */}
        {rings.map((i) => (
          <motion.circle
            key={i}
            cx={840} cy={358}
            r={40}
            fill="none"
            stroke={T.tealLight}
            strokeWidth="0.9"
            initial={{ r: 40, opacity: 0.55 }}
            animate={{ r: 200, opacity: 0 }}
            transition={{
              duration: 3.8,
              delay: i * 0.95,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Data flow lines — straight horizontal traces */}
        {[200, 310, 430, 540, 650].map((y, i) => (
          <motion.line
            key={i}
            x1={-60} y1={y} x2={500} y2={y}
            stroke={T.tealLight}
            strokeWidth="0.7"
            strokeOpacity={0.18}
            strokeDasharray="6 18"
            animate={{ x1: [-60, 560], x2: [500, 1120] }}
            transition={{ duration: 9 + i * 1.4, repeat: Infinity, ease: "linear", delay: i * 1.1 }}
          />
        ))}

        {/* Corner accent — teal glow orb top-right */}
        <defs>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#008080" stopOpacity="0.28"/>
            <stop offset="100%" stopColor="#008080" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="1150" cy="200" rx="320" ry="260" fill="url(#orb)"/>
      </motion.svg>

      {/* Bottom fade to next section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
        background: `linear-gradient(to bottom, transparent, ${T.ink})`,
      }}/>
      {/* Left fade so text is readable */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, ${T.ink} 0%, rgba(4,16,15,0.55) 55%, transparent 100%)`,
      }}/>
    </motion.div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Services", "Products", "Industries", "Case Studies", "Insights", "About"];

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 66,
        background: scrolled ? "rgba(4,16,15,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,128,128,0.14)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.35)" : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: T.teal, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="white" strokeWidth="1.6" fill="none"/>
              <circle cx="12" cy="12" r="2.8" fill="white" opacity="0.92"/>
              <line x1="12" y1="2" x2="12" y2="9.2" stroke="white" strokeWidth="1.4" opacity="0.55"/>
              <line x1="12" y1="14.8" x2="12" y2="22" stroke="white" strokeWidth="1.4" opacity="0.55"/>
              <line x1="3" y1="7" x2="9.2" y2="10.6" stroke="white" strokeWidth="1.4" opacity="0.55"/>
              <line x1="14.8" y1="13.4" x2="21" y2="17" stroke="white" strokeWidth="1.4" opacity="0.55"/>
              <line x1="21" y1="7" x2="14.8" y2="10.6" stroke="white" strokeWidth="1.4" opacity="0.55"/>
              <line x1="9.2" y1="13.4" x2="3" y2="17" stroke="white" strokeWidth="1.4" opacity="0.55"/>
            </svg>
          </div>
          <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: 16.5, color: T.white, letterSpacing: "-0.01em" }}>
            Xencorp<span style={{ color: T.tealLight }}>solutions</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map(l => (
            <a key={l} href="#" style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, color: "rgba(245,252,252,0.72)", textDecoration: "none", letterSpacing: "0.005em", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
  (e.currentTarget as HTMLAnchorElement).style.color = T.white;
}}
onMouseLeave={(e) => {
  (e.currentTarget as HTMLAnchorElement).style.color =
    "rgba(245,252,252,0.72)";
}}
            >{l}</a>
          ))}
          <a href="#" style={{
            padding: "9px 20px",
            background: T.teal, color: T.white,
            fontFamily: T.sans, fontSize: 13, fontWeight: 600,
            borderRadius: 100, textDecoration: "none",
            boxShadow: `0 0 18px ${T.tealGlow}`,
            letterSpacing: "0.01em",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={(e) => {
  const target = e.currentTarget as HTMLAnchorElement;
  target.style.background = T.tealLight;
  target.style.boxShadow = `0 0 28px ${T.tealGlowStrong}`;
}}

onMouseLeave={(e) => {
  const target = e.currentTarget as HTMLAnchorElement;
  target.style.background = T.teal;
  target.style.boxShadow = `0 0 18px ${T.tealGlow}`;
}}
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollYProgress } = useScroll();
  // Parallax transforms for hero content
  const contentY  = useTransform(scrollYProgress, [0, 0.45], [0, -80]);
  const contentOp = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const badgeY    = useTransform(scrollYProgress, [0, 0.3],  [0, -24]);
  const h1Y       = useTransform(scrollYProgress, [0, 0.4],  [0, -56]);
  const subY      = useTransform(scrollYProgress, [0, 0.4],  [0, -40]);
  const statOp    = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", background: T.ink, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <HeroBg scrollYProgress={scrollYProgress} />

      <div style={{ position: "relative", maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 128, paddingBottom: 96, width: "100%" }}>
        <div style={{ maxWidth: 660 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{ y: badgeY, display: "flex", alignItems: "center", gap: 11, marginBottom: 30 }}
          >
            <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
            <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Enterprise Technology & Intelligent Systems
            </span>
          </motion.div>

          {/* Headline — Playfair Display for impact only here */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              y: h1Y,
              fontFamily: T.display,
              fontSize: "clamp(42px, 5.8vw, 80px)",
              fontWeight: 800,
              color: T.textPrimary,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              marginBottom: 26,
            }}
          >
            Intelligent{" "}
            <em style={{ fontStyle: "italic", color: T.tealLight }}>Enterprise</em>
            <br />Systems. Built
            <br />to Endure.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.44 }}
            style={{
              y: subY,
              fontFamily: T.sans, fontSize: 17, fontWeight: 300,
              color: T.textSecondary, lineHeight: 1.78,
              maxWidth: 510, marginBottom: 46,
              letterSpacing: "0.005em",
            }}
          >
            Xencorpsolutions fuses deep consulting expertise with three proprietary enterprise platforms — SmartGRC, Smart Orion, and Smart Crypto Exchange — to transform how organizations govern, operate, and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.58 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a href="#" style={{
              padding: "14px 30px",
              background: T.teal, color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: `0 0 36px ${T.tealGlowStrong}`,
              letterSpacing: "0.01em",
            }}>
              Schedule Consultation
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#" style={{
              padding: "14px 30px",
              background: "transparent", color: T.textPrimary,
              fontFamily: T.sans, fontSize: 14, fontWeight: 500,
              borderRadius: 100, textDecoration: "none",
              border: "1.5px solid rgba(0,128,128,0.32)",
              letterSpacing: "0.01em",
            }}>
              Explore Platforms
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.72 }}
            style={{ opacity: statOp, display: "flex", gap: 44, marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(0,128,128,0.14)" }}
          >
            {[
              { v: 3,  s: "",   l: "Proprietary Platforms" },
              { v: 9,  s: "+",  l: "Industries Served" },
              { v: 6,  s: "+",  l: "Practice Areas" },
            ].map(m => (
              <div key={m.l}>
                <div style={{ fontFamily: T.sans, fontSize: 36, fontWeight: 700, color: T.white, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  <AnimCounter target={m.v} suffix={m.s}/>
                </div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: T.textMuted, marginTop: 5, fontWeight: 400 }}>{m.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
      >
        <span style={{ fontFamily: T.sans, fontSize: 10, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.16em" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${T.tealDim}, transparent)` }}/>
      </motion.div>
    </section>
  );
}

// ─── Marquee Strip ────────────────────────────────────────────────────────────
function MarqueeStrip() {
  const caps = [
    "Enterprise Architecture","AI & Machine Learning","GRC Automation",
    "ERP Implementation","Cloud-Native Infrastructure","Digital Transformation",
    "Cybersecurity Governance","Data Engineering","DevSecOps",
    "Crypto Exchange Platforms","Business Intelligence","Risk & Compliance",
  ];
  return (
    <div style={{ background: T.inkMid, borderTop: "1px solid rgba(0,128,128,0.1)", borderBottom: "1px solid rgba(0,128,128,0.1)", padding: "13px 0", overflow: "hidden" }}>
      <motion.div
        animate={{ x: [0, -1680] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 52, whiteSpace: "nowrap" }}
      >
        {[...caps, ...caps].map((c, i) => (
          <span key={i} style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: T.textMuted, display: "inline-flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.teal, display: "inline-block" }}/>
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Impact Numbers ───────────────────────────────────────────────────────────
function ImpactNumbers() {
  const metrics = [
    { v: 60,  s: "%",   label: "Compliance Workload Reduction",  sub: "via SmartGRC deployment",           color: T.teal },
    { v: 35,  s: "%",   label: "Procurement Cost Savings",       sub: "Smart Orion multi-branch ERP",      color: T.tealLight },
    { v: 1,   s: "ms",  label: "Order Matching Latency",         sub: "Smart Crypto Exchange engine", p: "<", color: T.orange },
    { v: 90,  s: " days", label: "To Full Audit Readiness",      sub: "Financial services GRC impl.",      color: T.teal },
  ];

  return (
    <section style={{ background: T.ink, padding: "104px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.teal, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Business Impact</p>
            <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.6vw, 48px)", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.025em", lineHeight: 1.12 }}>
              Results That Move<br/>
              <span style={{ color: T.teal }}>Enterprise Needles</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(0,128,128,0.09)" }}>
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ background: T.inkSoft }}
                style={{ background: T.ink, padding: "48px 36px", transition: "background 0.3s" }}
              >
                <div style={{ fontFamily: T.sans, fontSize: "clamp(48px, 4.8vw, 68px)", fontWeight: 700, color: m.color, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 18 }}>
                  {m.p && <span style={{ fontSize: "0.52em", verticalAlign: "top", marginTop: "0.18em", display: "inline-block" }}>{m.p}</span>}
                  <AnimCounter target={m.v} suffix={m.s}/>
                </div>
                <div style={{ fontFamily: T.sans, fontSize: 14.5, fontWeight: 600, color: T.textPrimary, lineHeight: 1.4, marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontFamily: T.sans, fontSize: 12.5, color: T.textMuted, fontWeight: 400 }}>{m.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { title: "Software Engineering",        desc: "Custom enterprise applications, platform architecture, cloud-native development, microservices, and system modernization at scale.", caps: ["Enterprise Applications","Cloud-Native Dev","System Modernization","API Integration"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { title: "AI & Intelligent Systems",    desc: "Automation, predictive analytics, AI assistants, computer vision, machine learning, and NLP systems embedded into enterprise operations.", caps: ["Predictive Analytics","AI Automation","Computer Vision","ML Engineering"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
  { title: "ERP Solutions",               desc: "SAP, Odoo, and custom ERP implementation, POS deployment, procurement automation, inventory management, and finance operations.", caps: ["SAP & Odoo","Custom ERP Build","POS Deployment","Finance Integration"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { title: "Digital Transformation",      desc: "Business modernization, legacy migration, workflow re-engineering, change management, and multi-year transformation roadmap execution.", caps: ["Modernization Roadmap","Legacy Migration","Process Re-engineering","Agile Transformation"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: "Data Center & Infrastructure", desc: "Infrastructure design, network architecture, cloud migration, disaster recovery, cybersecurity, and high-availability hybrid infrastructure.", caps: ["Infrastructure Design","Cloud Migration","Disaster Recovery","Cybersecurity"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg> },
  { title: "IT Consulting",               desc: "Technology strategy, enterprise architecture, IT governance, digital roadmap planning, security advisory, and cloud readiness assessments.", caps: ["Technology Strategy","Enterprise Architecture","IT Governance","Security Advisory"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
];

function Services() {
  const [hov, setHov] = useState(null);
  return (
    <section style={{ background: T.mist, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
            <div>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.teal, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Services</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.12 }}>Enterprise Practice Areas</h2>
            </div>
            <a href="#" style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, color: T.teal, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              View All Services <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${T.mistDim}` }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <motion.div
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                animate={{ backgroundColor: hov === i ? "#FFFFFF" : T.mist }}
                style={{ padding: "40px 34px", borderRight: `1px solid ${T.mistDim}`, borderBottom: `1px solid ${T.mistDim}`, position: "relative", overflow: "hidden" }}
              >
                <motion.div animate={{ scaleX: hov === i ? 1 : 0 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: T.teal, transformOrigin: "left", transition: "transform 0.3s ease" }}/>
                <div style={{ color: hov === i ? T.teal : T.textMuted, marginBottom: 18, transition: "color 0.25s" }}>{s.icon}</div>
                <h3 style={{ fontFamily: T.sans, fontSize: 17, fontWeight: 600, color: T.ink, marginBottom: 11, letterSpacing: "-0.015em" }}>{s.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "#3D5E5E", lineHeight: 1.72, marginBottom: 22, fontWeight: 300 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.caps.map(c => (
                    <span key={c} style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 500, color: T.tealDim, background: "rgba(0,128,128,0.08)", padding: "4px 11px", borderRadius: 100 }}>{c}</span>
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

// ─── Ecosystem ────────────────────────────────────────────────────────────────
function EcosystemSection() {
  const [active, setActive] = useState(null);

  const platforms = [
    { id: "grc",    name: "SmartGRC",              badge: "GRC",     color: T.teal,    tagline: "Governance, Risk & Compliance",        desc: "AI-powered GRC ecosystem centralizing risk management, compliance monitoring, audit operations, cybersecurity governance, and executive reporting into one intelligent platform.", modules: ["Risk Management","Audit Management","Compliance Monitoring","Policy Management","Vendor Risk","AI Governance"] },
    { id: "orion",  name: "Smart Orion",            badge: "ERP",     color: "#00A370", tagline: "ERP, POS & Business Automation",        desc: "Next-generation ERP combining POS, inventory, accounting, AI analytics, and multi-branch operations. Real-time visibility across every business unit and location.", modules: ["ERP Core","Point of Sale","Inventory Management","Accounting","Procurement","Business Analytics"] },
    { id: "crypto", name: "Smart Crypto Exchange",  badge: "FINTECH", color: "#7C3AED", tagline: "Enterprise Digital Asset Trading",       desc: "Institutional-grade cryptocurrency trading infrastructure with sub-millisecond matching engine, full KYC/AML integration, and immutable compliance logging.", modules: ["Trading Engine","Wallet Infrastructure","KYC / AML","Market Streaming","Admin Console","Developer APIs"] },
  ];

  const ap = platforms.find(p => p.id === active);

  return (
    <section style={{ background: T.ink, padding: "112px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 68 }}>
          <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.teal, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Ecosystem</p>
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.6vw, 50px)", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>Enterprise Intelligence Ecosystem</h2>
          <p style={{ fontFamily: T.sans, fontSize: 16, color: T.textSecondary, maxWidth: 560, margin: "0 auto", fontWeight: 300, lineHeight: 1.75 }}>
            Three proprietary platforms, six consulting practices, and a unified AI backbone — engineered to work independently or as an integrated enterprise intelligence layer.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }}>
          {/* Visual */}
          <Reveal direction="left">
            <div style={{ position: "relative", height: 440 }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 420 440" preserveAspectRatio="xMidYMid meet">
                <line x1="210" y1="220" x2="210" y2="60"   stroke={T.teal}    strokeWidth="1" strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="220" x2="72"  y2="318"  stroke="#00A370"  strokeWidth="1" strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="220" x2="348" y2="318"  stroke="#7C3AED"  strokeWidth="1" strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="60"  x2="72"  y2="318"  stroke={T.teal}    strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
                <line x1="210" y1="60"  x2="348" y2="318"  stroke={T.teal}    strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
                <line x1="72"  y1="318" x2="348" y2="318"  stroke="#00A370"  strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
                {/* Animated packets */}
                {[{x1:210,y1:220,x2:210,y2:60,c:T.tealLight,d:2.4},{x1:210,y1:220,x2:72,y2:318,c:"#00C488",d:3.1},{x1:210,y1:220,x2:348,y2:318,c:"#9B70FF",d:2.8}].map((l,i)=>(
                  <motion.circle key={i} r="3" fill={l.c}
                    animate={{ cx:[l.x1,l.x2], cy:[l.y1,l.y2] }}
                    transition={{ duration:l.d, repeat:Infinity, ease:"linear", delay:i*0.9 }}
                    opacity={0.82}
                  />
                ))}
              </svg>

              {/* AI Core node */}
              <motion.div
                animate={{ scale:[1,1.06,1] }}
                transition={{ duration:2.8, repeat:Infinity }}
                style={{ position:"absolute", left:"50%", top:"46%", transform:"translate(-50%,-50%)", width:76, height:76, borderRadius:"50%", border:`1.5px solid ${T.teal}`, background:`radial-gradient(circle, rgba(0,128,128,0.22), transparent)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", zIndex:3 }}
              >
                <svg width="20" height="20" fill="none" stroke={T.tealLight} viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                <span style={{ fontFamily:T.sans, fontSize:9, fontWeight:700, color:T.tealLight, marginTop:3, textTransform:"uppercase", letterSpacing:"0.08em" }}>AI Core</span>
              </motion.div>

              {/* Platform nodes */}
              {platforms.map((p, i) => {
                const pos = [
                  { left:"50%", top:"6%",  transform:"translate(-50%,0)" },
                  { left:"3%",  top:"64%", transform:"translate(0,0)" },
                  { right:"3%", top:"64%", transform:"translate(0,0)" },
                ];
                return (
                  <motion.div key={p.id} onClick={() => setActive(active===p.id ? null : p.id)} whileHover={{ scale:1.05 }}
                    style={{
                      position:"absolute", ...pos[i],
                      background: active===p.id ? `${p.color}1E` : T.inkMid,
                      border:`1.5px solid ${active===p.id ? p.color : "rgba(0,128,128,0.2)"}`,
                      borderRadius:10, padding:"12px 18px", cursor:"pointer", zIndex:2, minWidth:115,
                      textAlign:"center", transition:"all 0.28s",
                      boxShadow: active===p.id ? `0 0 22px ${p.color}44` : "none",
                    }}
                  >
                    <span style={{ fontFamily:T.sans, fontSize:9, fontWeight:700, color:p.color, textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:3 }}>{p.badge}</span>
                    <span style={{ fontFamily:T.sans, fontSize:13, fontWeight:600, color:T.textPrimary }}>{p.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal direction="right">
            <AnimatePresence mode="wait">
              {ap ? (
                <motion.div key={ap.id} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}} transition={{duration:0.38}}>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:ap.color, textTransform:"uppercase", letterSpacing:"0.14em", background:`${ap.color}18`, padding:"4px 13px", borderRadius:100, display:"inline-block", marginBottom:18 }}>{ap.badge}</span>
                  <h3 style={{ fontFamily:T.sans, fontSize:30, fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", marginBottom:8 }}>{ap.name}</h3>
                  <p style={{ fontFamily:T.sans, fontSize:13.5, color:ap.color, fontWeight:500, marginBottom:16 }}>{ap.tagline}</p>
                  <p style={{ fontFamily:T.sans, fontSize:14, color:T.textSecondary, lineHeight:1.76, marginBottom:28, fontWeight:300 }}>{ap.desc}</p>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, marginBottom:28 }}>
                    {ap.modules.map(m => (
                      <div key={m} style={{ display:"flex", alignItems:"center", gap:9, padding:"10px 0", borderBottom:"1px solid rgba(0,128,128,0.1)" }}>
                        <div style={{ width:6, height:6, borderRadius:"50%", background:ap.color, flexShrink:0 }}/>
                        <span style={{ fontFamily:T.sans, fontSize:13, color:T.textPrimary, fontWeight:500 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex", gap:12 }}>
                    <a href="#" style={{ padding:"11px 24px", background:ap.color, color:T.white, fontFamily:T.sans, fontSize:13, fontWeight:600, borderRadius:100, textDecoration:"none" }}>View Platform</a>
                    <a href="#" style={{ padding:"11px 24px", border:"1.5px solid rgba(0,128,128,0.28)", color:T.textSecondary, fontFamily:T.sans, fontSize:13, fontWeight:500, borderRadius:100, textDecoration:"none" }}>Request Demo</a>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                  style={{ padding:"44px 40px", border:"1px dashed rgba(0,128,128,0.18)", borderRadius:12, textAlign:"center" }}
                >
                  <div style={{ width:44, height:44, borderRadius:"50%", background:T.tealGlow, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                    <svg width="20" height="20" fill="none" stroke={T.teal} viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  </div>
                  <p style={{ fontFamily:T.sans, fontSize:14, color:T.textMuted, lineHeight:1.65, fontWeight:300 }}>Select a platform node to explore its capabilities.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  { name:"SmartGRC",              badge:"GRC",     accent:T.teal,    tagline:"Enterprise Governance, Risk & Compliance Platform",    desc:"An AI-powered GRC ecosystem that centralises risk management, compliance monitoring, audit operations, cybersecurity governance, and executive reporting. Built for ISO 27001, GDPR, HIPAA, PCI DSS, NIST, DORA, and SOC 2 environments.", caps:["Risk Management","Audit Management","Compliance Monitoring","Policy Management","Vendor Risk","Cybersecurity Governance","Business Continuity","AI Governance"], stat:{v:"60%",l:"Compliance Workload Reduction"} },
  { name:"Smart Orion",           badge:"ERP",     accent:"#00A370", tagline:"Enterprise ERP, POS & Business Automation Platform",   desc:"A next-generation business platform combining ERP, POS, inventory, accounting, AI analytics, and multi-branch operations. Built for enterprises and retail organisations that need real-time visibility across every business unit and location.", caps:["ERP Core","Point of Sale","Inventory Management","Accounting & Finance","Procurement","Multi-Branch Ops","Business Reporting","AI Analytics"], stat:{v:"35%",l:"Procurement Cost Reduction"} },
  { name:"Smart Crypto Exchange", badge:"FINTECH", accent:"#7C3AED", tagline:"Enterprise Cryptocurrency Trading Platform",           desc:"Institutional-grade digital asset trading with sub-millisecond matching, full KYC/AML integration, and immutable compliance logging. Built for regulated operations and institutional-grade trading desks.", caps:["Sub-ms Trading Engine","Wallet Infrastructure","Market Data Streaming","KYC / AML Compliance","Administration Console","Institutional Trading","Developer APIs","Security & Audit Logs"], stat:{v:"<1ms",l:"Order Matching Latency"} },
];

function Products() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section style={{ background: T.mist, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ marginBottom: 52 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Proprietary Platforms</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px, 3.4vw, 46px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>
              Enterprise Products Built<br/>by Xencorpsolutions
            </h2>
          </div>
        </Reveal>

        {/* Tabs */}
        <div style={{ display:"flex", gap:10, marginBottom:36, flexWrap:"wrap" }}>
          {products.map((pr, i) => (
            <button key={pr.name} onClick={() => setActive(i)} style={{
              padding:"10px 22px", borderRadius:100,
              fontFamily:T.sans, fontSize:13.5, fontWeight:600, cursor:"pointer",
              border:"1.5px solid",
              borderColor: active===i ? pr.accent : "rgba(0,128,128,0.18)",
              background: active===i ? pr.accent : "transparent",
              color: active===i ? T.white : T.tealDim,
              transition:"all 0.24s",
            }}>{pr.name}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.36}}
            style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", border:`1px solid ${T.mistDim}`, background:T.white, overflow:"hidden" }}
          >
            <div style={{ padding:"52px 56px", borderRight:`1px solid ${T.mistDim}` }}>
              <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:p.accent, background:`${p.accent}14`, padding:"4px 13px", borderRadius:100, letterSpacing:"0.13em", textTransform:"uppercase", display:"inline-block", marginBottom:22 }}>{p.badge}</span>
              <h3 style={{ fontFamily:T.sans, fontSize:32, fontWeight:700, color:T.ink, letterSpacing:"-0.025em", marginBottom:10 }}>{p.name}</h3>
              <p style={{ fontFamily:T.sans, fontSize:14, color:T.tealDim, fontWeight:500, marginBottom:18 }}>{p.tagline}</p>
              <p style={{ fontFamily:T.sans, fontSize:14.5, color:"#2E4A4A", lineHeight:1.78, marginBottom:34, fontWeight:300 }}>{p.desc}</p>
              <div style={{ display:"inline-flex", alignItems:"center", gap:18, padding:"16px 22px", background:T.mist, borderRadius:10, marginBottom:34 }}>
                <span style={{ fontFamily:T.sans, fontSize:36, fontWeight:700, color:p.accent, letterSpacing:"-0.04em" }}>{p.stat.v}</span>
                <span style={{ fontFamily:T.sans, fontSize:13, color:"#2E4A4A", lineHeight:1.4, maxWidth:110 }}>{p.stat.l}</span>
              </div>
              <div style={{ display:"flex", gap:12 }}>
                <a href="#" style={{ padding:"12px 26px", background:p.accent, color:T.white, fontFamily:T.sans, fontSize:13.5, fontWeight:600, borderRadius:100, textDecoration:"none" }}>View Platform</a>
                <a href="#" style={{ padding:"12px 26px", border:`1.5px solid ${T.mistDim}`, color:"#2E4A4A", fontFamily:T.sans, fontSize:13.5, fontWeight:500, borderRadius:100, textDecoration:"none" }}>Request Demo</a>
              </div>
            </div>
            <div style={{ padding:"52px 44px", background:T.mist }}>
              <p style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:22 }}>Core Capabilities</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0 }}>
                {p.caps.map((c, i) => (
                  <motion.div key={c} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
                    style={{ display:"flex", alignItems:"center", gap:10, padding:"11px 0", borderBottom:`1px solid ${T.mistDim}` }}
                  >
                    <div style={{ width:6, height:6, borderRadius:"50%", background:p.accent, flexShrink:0 }}/>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.ink, fontWeight:500 }}>{c}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ marginTop:28, border:`1px solid ${T.mistDim}`, background:T.white, borderRadius:10, padding:"18px 20px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                  <div style={{ width:7, height:7, borderRadius:"50%", background:p.accent }}/>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em" }}>{p.name} Live Dashboard</span>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
                  {[72,45,91].map((v,i) => (
                    <div key={i} style={{ background:T.mist, borderRadius:8, padding:"12px" }}>
                      <div style={{ fontFamily:T.sans, fontSize:20, fontWeight:700, color:T.ink, marginBottom:6 }}>{v}%</div>
                      <div style={{ height:4, background:T.mistDim, borderRadius:4, overflow:"hidden", marginBottom:6 }}>
                        <motion.div initial={{width:0}} animate={{width:`${v}%`}} transition={{duration:1.2, delay:0.2+i*0.15}} style={{ height:"100%", borderRadius:4, background:p.accent }}/>
                      </div>
                      <div style={{ fontFamily:T.sans, fontSize:10, color:T.textMuted }}>
                        {["Governance","Risk Score","Compliance"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Why Xencorpsolutions ─────────────────────────────────────────────────────
function WhyXencorp() {
  const reasons = [
    { n:"01", t:"Consulting + Products, Not One or the Other",    b:"Most firms deliver strategy without product. We own three enterprise-grade platforms — giving clients a strategic advantage and a production-ready solution from day one." },
    { n:"02", t:"Senior Engineers on Every Engagement",           b:"Every engagement is led by senior engineers and enterprise architects. No junior staffing. The people who designed the solution are the ones who deliver it." },
    { n:"03", t:"AI Embedded Across Every Layer",                  b:"From SmartGRC's risk prediction to Smart Orion's demand forecasting and Smart Crypto Exchange's fraud detection — intelligence is core architecture, not a feature add-on." },
    { n:"04", t:"Enterprise Focus. No Exceptions.",               b:"Our platforms and services are built for the scale, governance, and security requirements of large organisations. Enterprise is not a tier — it is our baseline." },
    { n:"05", t:"Long-Term Technology Partnership",               b:"We operate as embedded partners through the full transformation lifecycle — from strategy through deployment, optimisation, and continuous platform evolution." },
    { n:"06", t:"Multi-Framework Compliance Readiness",           b:"ISO 27001, GDPR, HIPAA, PCI DSS, NIST, DORA, SOC 2 — our platforms arrive compliance-ready, so enterprise clients start ahead of the curve." },
  ];
  return (
    <section style={{ background:T.inkMid, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ marginBottom:60 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Why Xencorpsolutions</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>
              What Separates Us From<br/><span style={{ color:T.teal }}>Every Other Technology Firm</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {reasons.map((r,i) => (
            <Reveal key={r.n} delay={i*0.07}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.inkMid, padding:"40px 34px", transition:"background 0.3s", position:"relative", overflow:"hidden" }}
              >
                <motion.div initial={{scaleX:0}} whileHover={{scaleX:1}} style={{ position:"absolute", top:0, left:0, right:0, height:2, background:T.teal, transformOrigin:"left", transition:"transform 0.3s ease" }}/>
                <div style={{ fontFamily:T.sans, fontSize:12, fontWeight:600, color:"rgba(0,128,128,0.32)", marginBottom:16, letterSpacing:"0.05em" }}>{r.n}</div>
                <h3 style={{ fontFamily:T.sans, fontSize:16.5, fontWeight:600, color:T.textPrimary, lineHeight:1.38, marginBottom:12, letterSpacing:"-0.015em" }}>{r.t}</h3>
                <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{r.b}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  const list = [
    {n:"Banking",icon:"🏦"},{n:"Financial Services",icon:"📈"},{n:"Healthcare",icon:"⚕️"},
    {n:"Government",icon:"🏛️"},{n:"Education",icon:"🎓"},{n:"Manufacturing",icon:"⚙️"},
    {n:"Retail",icon:"🛍️"},{n:"Telecom",icon:"📡"},{n:"Logistics",icon:"🚚"},
  ];
  return (
    <section style={{ background:T.ink, padding:"104px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ marginBottom:52 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Industries</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(26px,3.2vw,44px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>Serving the World's<br/>Most Demanding Sectors</h2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(9,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {list.map((ind,i) => (
            <Reveal key={ind.n} delay={i*0.05}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.ink, padding:"28px 10px", display:"flex", flexDirection:"column", alignItems:"center", gap:9, cursor:"pointer", transition:"background 0.25s" }}
              >
                <span style={{ fontSize:24 }}>{ind.icon}</span>
                <span style={{ fontFamily:T.sans, fontSize:11, fontWeight:500, color:T.textMuted, textAlign:"center", lineHeight:1.3 }}>{ind.n}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div style={{ marginTop:1, background:"rgba(0,128,128,0.04)", border:"1px solid rgba(0,128,128,0.09)", borderTop:"none", padding:"26px 30px" }}>
            <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>
              Our consulting engagements and platform deployments are tailored to industry-specific compliance frameworks, operational requirements, and digital transformation maturity — whether you're a regulated bank, a government agency, or a global retailer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── How We Deliver ───────────────────────────────────────────────────────────
function HowWeDeliver() {
  const steps = [
    {l:"Discover",  d:"Structured discovery to understand business objectives, technology landscape, and transformation goals."},
    {l:"Strategize",d:"Define architecture vision, phased roadmap, and measurable outcomes aligned to executive priorities."},
    {l:"Architect", d:"Design scalable, secure enterprise-grade system architecture with modern cloud-native principles."},
    {l:"Build",     d:"Engineer using best-in-class frameworks, DevSecOps practices, and quality engineering standards."},
    {l:"Deploy",    d:"Production-ready delivery with CI/CD pipelines, infrastructure automation, and zero-downtime rollout."},
    {l:"Optimize",  d:"Monitor, iterate, and evolve through AI analytics, continuous improvement, and long-term partnership."},
  ];
  return (
    <section style={{ background:T.mist, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ marginBottom:60 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Delivery Methodology</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>How We Deliver<br/>Enterprise Transformation</h2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", border:`1px solid ${T.mistDim}` }}>
          {steps.map((s,i) => (
            <Reveal key={s.l} delay={i*0.08}>
              <motion.div whileHover={{ background:"#FFFFFF" }}
                style={{ padding:"32px 22px", borderRight:`1px solid ${T.mistDim}`, background:T.mist, position:"relative", transition:"background 0.28s" }}
              >
                <div style={{ width:30, height:30, border:`1.5px solid ${T.teal}`, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:T.sans, fontSize:11, fontWeight:700, color:T.teal, marginBottom:16 }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                <h3 style={{ fontFamily:T.sans, fontSize:15, fontWeight:600, color:T.ink, marginBottom:9, letterSpacing:"-0.01em" }}>{s.l}</h3>
                <p style={{ fontFamily:T.sans, fontSize:12.5, color:"#3D5E5E", lineHeight:1.66, fontWeight:300 }}>{s.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────
const caseStudies = [
  { industry:"Financial Services",   challenge:"A regional financial institution needed to unify risk, compliance, and audit operations across 14 business units while meeting ISO 27001 and GDPR obligations.", solution:"Deployed SmartGRC with custom framework mapping, automated controls testing, and real-time executive dashboards providing governance-wide visibility.", metric:"60%",  ml:"Compliance Workload Reduction", tag:"SmartGRC",              color:T.teal },
  { industry:"Retail & Distribution",challenge:"A multi-branch retail chain operating 80+ locations lacked centralised inventory visibility, causing stock discrepancies and inefficient procurement.", solution:"Implemented Smart Orion ERP and POS across all branches with real-time inventory sync, automated reordering, and unified financial reporting.", metric:"35%",  ml:"Procurement Cost Reduction",    tag:"Smart Orion",            color:"#00A370" },
  { industry:"Enterprise Technology",challenge:"A government-affiliated technology organisation required scalable, audit-ready cryptocurrency infrastructure for regulated digital asset operations.", solution:"Deployed Smart Crypto Exchange with full KYC/AML integration, institutional trading console, and immutable compliance logging.", metric:"<1ms", ml:"Order Matching Latency",         tag:"Smart Crypto Exchange", color:"#7C3AED" },
];

function CaseStudies() {
  return (
    <section style={{ background:T.ink, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:60, flexWrap:"wrap", gap:16 }}>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Case Studies</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>Measurable Impact for<br/>Enterprise Clients</h2>
            </div>
            <a href="#" style={{ fontFamily:T.sans, fontSize:13.5, fontWeight:600, color:T.teal, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}>
              All Case Studies <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {caseStudies.map((cs,i) => (
            <Reveal key={cs.industry} delay={i*0.1}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.ink, padding:"44px 38px", transition:"background 0.3s", display:"flex", flexDirection:"column", height:"100%" }}
              >
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:26 }}>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:cs.color, textTransform:"uppercase", letterSpacing:"0.14em" }}>{cs.industry}</span>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:cs.color, background:`${cs.color}18`, padding:"3px 10px", borderRadius:100 }}>{cs.tag}</span>
                </div>
                <div style={{ marginBottom:18 }}>
                  <div style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:7 }}>Challenge</div>
                  <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{cs.challenge}</p>
                </div>
                <div style={{ marginBottom:26 }}>
                  <div style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:7 }}>Solution</div>
                  <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{cs.solution}</p>
                </div>
                <div style={{ marginTop:"auto", paddingTop:22, borderTop:"1px solid rgba(0,128,128,0.13)" }}>
                  <div style={{ fontFamily:T.sans, fontSize:44, fontWeight:700, color:cs.color, letterSpacing:"-0.04em", lineHeight:1 }}>{cs.metric}</div>
                  <div style={{ fontFamily:T.sans, fontSize:12, color:T.textMuted, marginTop:4, fontWeight:400 }}>{cs.ml}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Insights ─────────────────────────────────────────────────────────────────
const insights = [
  { cat:"AI & Governance",        t:"Why Enterprises Are Moving from Reactive Compliance to AI-Driven Governance", e:"The shift from periodic audit cycles to continuous, AI-powered governance intelligence is redefining how enterprise risk leaders operate.", r:"6 min read" },
  { cat:"ERP Modernization",      t:"The Case for Unified ERP, POS, and AI Analytics in Multi-Branch Operations", e:"Disconnected systems create operational blind spots. How enterprise organisations are consolidating into a single intelligent platform.", r:"5 min read" },
  { cat:"Digital Transformation", t:"Building a Digital Transformation Roadmap That Executives Can Execute",      e:"Transformation fails when it stays in IT. The organisations succeeding are those embedding it into executive strategy from day one.", r:"7 min read" },
  { cat:"Infrastructure",         t:"Hybrid Cloud Architecture: The Strategy Enterprise Organisations Are Adopting", e:"Neither fully cloud nor fully on-premise, hybrid infrastructure gives enterprises the control, scalability, and resilience modern ops demand.", r:"5 min read" },
];

function Insights() {
  return (
    <section style={{ background:T.mist, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:52, flexWrap:"wrap", gap:16 }}>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Insights</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(26px,3.2vw,44px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>Thought Leadership from the<br/>Enterprise Technology Front</h2>
            </div>
            <a href="#" style={{ fontFamily:T.sans, fontSize:13.5, fontWeight:600, color:T.teal, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}>
              All Insights <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:T.mistDim }}>
          {insights.map((ins,i) => (
            <Reveal key={ins.t} delay={i*0.07}>
              <motion.a href="#" whileHover={{ background:"#FFFFFF" }}
                style={{ display:"block", background:T.mist, padding:"34px 28px", textDecoration:"none", transition:"background 0.28s", height:"100%", boxSizing:"border-box" }}
              >
                <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.13em", marginBottom:13, display:"block" }}>{ins.cat}</span>
                <h3 style={{ fontFamily:T.sans, fontSize:15, fontWeight:600, color:T.ink, lineHeight:1.42, marginBottom:13, letterSpacing:"-0.01em" }}>{ins.t}</h3>
                <p style={{ fontFamily:T.sans, fontSize:13, color:"#3D5E5E", lineHeight:1.72, marginBottom:18, fontWeight:300 }}>{ins.e}</p>
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ fontFamily:T.sans, fontSize:11.5, color:T.textMuted }}>{ins.r}</span>
                  <svg width="12" height="12" fill="none" stroke={T.teal} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ background:T.teal, padding:"96px 0", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, opacity:0.055, backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"26px 26px" }}/>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px", position:"relative" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }}>
          <Reveal>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:"rgba(255,255,255,0.62)", textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:18 }}>Ready to Begin</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.white, letterSpacing:"-0.025em", lineHeight:1.1, marginBottom:20 }}>
                Let's Build Your Enterprise Transformation Strategy
              </h2>
              <p style={{ fontFamily:T.sans, fontSize:16, color:"rgba(255,255,255,0.74)", lineHeight:1.76, fontWeight:300 }}>
                Whether you need to modernise operations, deploy AI, implement ERP, or build a multi-year digital transformation roadmap — Xencorpsolutions is ready to engage at the executive level.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              {[
                { label:"Schedule a Consultation", primary:true },
                { label:"Explore Our Platforms",   primary:false },
                { label:"View Case Studies",        primary:false },
              ].map(btn => (
                <motion.a key={btn.label} href="#" whileHover={{ scale:1.02 }}
                  style={{
                    padding:"14px 30px", borderRadius:100,
                    fontFamily:T.sans, fontSize:14, fontWeight: btn.primary ? 700 : 600,
                    background: btn.primary ? T.white : "transparent",
                    color: btn.primary ? T.teal : T.white,
                    border: btn.primary ? "none" : "1.5px solid rgba(255,255,255,0.42)",
                    textDecoration:"none", display:"inline-block",
                    transition:"all 0.2s",
                  }}
                >{btn.label}</motion.a>
              ))}
              <p style={{ fontFamily:T.sans, fontSize:12, color:"rgba(255,255,255,0.46)", marginTop:6 }}>Global engagements · Lahore, Pakistan</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { h:"Services",   links:["Software Engineering","AI & Intelligent Systems","ERP Solutions","Digital Transformation","Data Center & Infrastructure","IT Consulting"] },
    { h:"Products",   links:["SmartGRC","Smart Orion","Smart Crypto Exchange"] },
    { h:"Industries", links:["Banking & Finance","Healthcare","Government","Education","Manufacturing","Retail","Telecom","Logistics"] },
    { h:"Company",    links:["About Us","Case Studies","Insights","Careers","Contact"] },
  ];
  return (
    <footer style={{ background:T.ink, borderTop:"1px solid rgba(0,128,128,0.09)", padding:"76px 0 28px" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr 1fr 1fr", gap:44, marginBottom:60 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ width:32, height:32, background:T.teal, borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 24 24" fill="none" width="17" height="17"><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="white" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="2.8" fill="white" opacity="0.92"/></svg>
              </div>
              <span style={{ fontFamily:T.sans, fontWeight:700, fontSize:15, color:T.white }}>Xencorp<span style={{ color:T.tealLight }}>solutions</span></span>
            </div>
            <p style={{ fontFamily:T.sans, fontSize:13, color:T.textMuted, lineHeight:1.72, marginBottom:16, fontWeight:300 }}>Enterprise Technology Consulting & Digital Transformation.<br/>Lahore, Pakistan.</p>
            <div style={{ fontFamily:T.sans, fontSize:12.5, color:T.textMuted, lineHeight:1.9, fontWeight:300 }}>
              <div>info@xencorpsolutions.com</div>
              <div>Mon – Sat, 9:00 AM – 7:00 PM PKT</div>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <h4 style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em", color:T.textMuted, marginBottom:16 }}>{col.h}</h4>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom:9 }}>
                    <a href="#" style={{ fontFamily:T.sans, fontSize:13, color:"rgba(122,172,172,0.52)", textDecoration:"none", fontWeight:300, transition:"color 0.2s" }}
                     onMouseEnter={(e) => {
  (e.currentTarget as HTMLAnchorElement).style.color = T.textPrimary;
}}
onMouseLeave={(e) => {
  (e.currentTarget as HTMLAnchorElement).style.color =
    "rgba(122,172,172,0.52)";
}}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:22, borderTop:"1px solid rgba(0,128,128,0.09)" }}>
          <p style={{ fontFamily:T.sans, fontSize:12, color:"rgba(74,122,122,0.65)", fontWeight:300 }}>© 2026 Xencorpsolutions. All Rights Reserved.</p>
          <div style={{ display:"flex", gap:22 }}>
            {["Privacy Policy","Terms of Use","Security"].map(l => (
              <a key={l} href="#" style={{ fontFamily:T.sans, fontSize:12, color:"rgba(74,122,122,0.65)", textDecoration:"none", fontWeight:300 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────
export default function XencorpHomepage() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing:"antialiased", MozOsxFontSmoothing:"grayscale" }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      <Navigation />
      <Hero />
      <MarqueeStrip />
      <ImpactNumbers />
      <Services />
      <EcosystemSection />
      <Products />
      <WhyXencorp />
      <Industries />
      <HowWeDeliver />
      <CaseStudies />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}

