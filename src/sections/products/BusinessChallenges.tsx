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
  return (
    <section style={{ background: T.mist, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Business Critical Challenges
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            The Cost of Legacy Operations
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Outdated processes, isolated systems, and manual verification pipelines hold back enterprise scale and generate silent operational losses.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
          {challenges.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0, 194, 160, 0.08)" }}
                style={{
                  background: T.white,
                  border: `1px solid ${T.mistDim}`,
                  borderRadius: 12,
                  padding: 36,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "box-shadow 0.3s, y 0.3s"
                }}
              >
                <div>
                  {/* Card Badge/Icon placeholder */}
                  <div style={{ width: 42, height: 42, borderRadius: 8, background: `${accentColor}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <svg width="20" height="20" fill="none" stroke={accentColor} viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  
                  <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.ink, marginBottom: 12, letterSpacing: "-0.01em" }}>
                    {c.title}
                  </h3>
                  
                  <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.65, fontWeight: 300 }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
