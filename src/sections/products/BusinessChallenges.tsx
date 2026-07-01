"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface ChallengeItem {
  title: string;
  desc: string;
}

interface BusinessChallengesProps {
  challenges: ChallengeItem[];
  accentColor: string;
}

export default function BusinessChallenges({ challenges, accentColor }: BusinessChallengesProps) {
  // A set of colors/icons for the top of the cards
  const icons = [
    (
      <svg width="24" height="24" fill="none" stroke="#22C55E" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    (
      <svg width="24" height="24" fill="none" stroke="#EA580C" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    (
      <svg width="24" height="24" fill="none" stroke="#15803D" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  ];

  return (
    <section style={{ background: T.white, padding: "100px 0", color: T.ink }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Operational Friction
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2, marginBottom: 16 }}>
            The Cost of Legacy Operations
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "0 auto", fontWeight: 300, lineHeight: 1.6 }}>
            Legacy systems and manual verification pathways fail to scale. We target these bottlenecks directly to protect your bottom line.
          </p>
        </Reveal>

        <style>{`
          @media (max-width: 991px) {
            .challenges-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>

        <div className="challenges-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {challenges.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.04)" }}
                style={{
                  background: T.white,
                  border: `1.5px solid ${T.mistDim}`,
                  borderRadius: 12,
                  padding: 32,
                  height: "100%",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ marginBottom: 24 }}>
                  {icons[idx % icons.length]}
                </div>
                
                <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.ink, marginBottom: 12, letterSpacing: "-0.012em" }}>
                  {item.title}
                </h3>
                
                <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.66, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
