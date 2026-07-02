"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const techItems = [
  { name: "React.js", color: "#61DAFB", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg> },
  { name: "Next.js", color: "#FFFFFF", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5"><path d="M12 2L2 22h20L12 2zm0 4l6 10H6l6-10z"/></svg> },
  { name: "TypeScript", color: "#3178C6", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="3" fill="#3178C6"/><text x="12" y="16.5" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">TS</text></svg> },
  { name: "Python", color: "#3776AB", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="1.5"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 3a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-4-7a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm8 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg> },
  { name: "AWS Cloud", color: "#FF9900", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5"><path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.5-.95.95-1.51 1.35A10 10 0 1 1 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/><path d="M7 11.5a5 5 0 0 1 10 0"/></svg> },
  { name: "Docker", color: "#2496ED", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="1.5"><rect x="3" y="14" width="4" height="4" rx="1"/><rect x="8" y="14" width="4" height="4" rx="1"/><rect x="13" y="14" width="4" height="4" rx="1"/><rect x="18" y="14" width="3" height="4" rx="1"/><rect x="8" y="9" width="4" height="4" rx="1"/><rect x="13" y="9" width="4" height="4" rx="1"/><rect x="13" y="4" width="4" height="4" rx="1"/></svg> },
  { name: "PostgreSQL", color: "#4169E1", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> },
  { name: "SAP ERP", color: "#008FD3", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="3" fill="#008FD3"/><text x="12" y="15.5" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">SAP</text></svg> },
  { name: "Odoo ERP", color: "#A24689", icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="3" fill="#A24689"/><text x="12" y="15.5" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">odoo</text></svg> }
];

export default function TechnologyCapabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Translate scroll to horizontal motion
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section ref={sectionRef} style={{ background: T.ink, padding: "120px 0", overflow: "hidden", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", marginBottom: 68 }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.16em", display: "block", marginBottom: 14 }}>
              Technical Stack
            </span>
            <h2 style={{ fontFamily: T.sans, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: T.white, marginBottom: 20, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Core Enterprise Frameworks
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.65)", fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              We select modern frameworks and cloud-native platforms engineered for high throughout, strict security audits, and long-term codebase health.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Horizontal Parallax Scroll Row of Vertical Cards */}
      <div style={{ display: "flex", overflow: "hidden", userSelect: "none", padding: "15px 0" }}>
        <motion.div style={{ display: "flex", gap: 24, x, whiteSpace: "nowrap" }}>
          {[...techItems, ...techItems, ...techItems].map((tech, idx) => (
            <div
              key={idx}
              style={{
                width: 170,
                height: 180,
                background: "rgba(255, 255, 255, 0.03)",
                border: "1.5px solid rgba(255, 255, 255, 0.07)",
                borderRadius: 16,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease"
              }}
              className="tech-card"
              data-color={tech.color}
            >
              <div style={{ marginBottom: 16, display: "inline-flex", alignItems: "center" }}>{tech.icon}</div>
              <span style={{ 
                fontFamily: T.sans, 
                fontSize: "15px", 
                fontWeight: 700, 
                color: T.white,
                letterSpacing: "-0.015em"
              }}>
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .tech-card:hover {
          border-color: var(--hover-color, rgba(22, 163, 74, 0.6)) !important;
          background: rgba(255, 255, 255, 0.06) !important;
          transform: translateY(-8px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3) !important;
        }
      `}</style>
      
      <script dangerouslySetInnerHTML={{ __html: `
        // Setup dynamic hover border colors based on dataset
        document.querySelectorAll('.tech-card').forEach(card => {
          const color = card.getAttribute('data-color');
          card.style.setProperty('--hover-color', color);
        });
      `}} />
    </section>
  );
}
