"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  HeartPulse,
  Building2,
  GraduationCap,
  Factory,
  ShoppingBag,
  Radio,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const industries: { name: string; tag: string; icon: LucideIcon }[] = [
  { name: "Banking", icon: Landmark, tag: "Core banking & payments" },
  { name: "Financial Services", icon: TrendingUp, tag: "Trading & risk systems" },
  { name: "Healthcare", icon: HeartPulse, tag: "Clinical & HIPAA platforms" },
  { name: "Government", icon: Building2, tag: "Public sector digital" },
  { name: "Education", icon: GraduationCap, tag: "Campus & LMS systems" },
  { name: "Manufacturing", icon: Factory, tag: "ERP & IoT telemetry" },
  { name: "Retail", icon: ShoppingBag, tag: "Omnichannel commerce" },
  { name: "Telecom", icon: Radio, tag: "Network & billing ops" },
  { name: "Logistics", icon: Truck, tag: "Fleet & warehouse tech" },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="industries-section">
      <style>{`
        .industries-section {
          position: relative;
          background: ${T.ink};
          padding: 104px 0;
          overflow: hidden;
        }
        .industries-section::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -80px;
          width: 480px;
          height: 480px;
          background: ${T.glow};
          filter: blur(120px);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.55;
        }
        .industries-section::after {
          content: "";
          position: absolute;
          bottom: -100px;
          left: -60px;
          width: 360px;
          height: 360px;
          background: rgba(34, 197, 94, 0.06);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
        }
        .industries-wrap {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 36px;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 991px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }
        }
        .industry-card {
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: linear-gradient(145deg, rgba(26, 34, 43, 0.92) 0%, rgba(17, 22, 29, 0.88) 100%);
          padding: 28px 24px;
          cursor: default;
          overflow: hidden;
          min-height: 148px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .industry-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 0%, rgba(34, 197, 94, 0.12), transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .industry-card.is-hovered::before {
          opacity: 1;
        }
        .industry-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(34, 197, 94, 0.18);
          background: rgba(34, 197, 94, 0.08);
          color: ${T.tealLight};
          flex-shrink: 0;
        }
        .industry-card.is-hovered .industry-icon-wrap {
          border-color: rgba(110, 231, 160, 0.45);
          box-shadow: 0 0 24px rgba(34, 197, 94, 0.2);
        }
        .industry-name {
          font-family: ${T.sans};
          font-size: 15px;
          font-weight: 600;
          color: ${T.textOnDark};
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .industry-tag {
          font-family: ${T.sans};
          font-size: 12px;
          font-weight: 300;
          color: ${T.textOnDarkSecondary};
          line-height: 1.45;
        }
        .industries-footnote {
          margin-top: 28px;
          border-radius: 14px;
          border: 1px solid rgba(34, 197, 94, 0.12);
          background: linear-gradient(90deg, rgba(34, 197, 94, 0.06) 0%, rgba(34, 197, 94, 0.02) 100%);
          padding: 26px 30px;
        }
      `}</style>

      <div className="industries-wrap">
        <Reveal>
          <div style={{ marginBottom: 52, maxWidth: 640 }}>
            <p
              style={{
                fontFamily: T.sans,
                fontSize: 11,
                fontWeight: 600,
                color: T.teal,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 14,
              }}
            >
              Industries
            </p>
            <h2
              style={{
                fontFamily: T.sans,
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 700,
                color: T.white,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Serving the World&apos;s
              <br />
              <span style={{ color: T.tealLight }}>Most Demanding Sectors</span>
            </h2>
          </div>
        </Reveal>

        <motion.div
          className="industries-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isHovered = hovered === i;

            return (
              <motion.div key={ind.name} variants={cardVariants}>
                <motion.article
                  className={`industry-card${isHovered ? " is-hovered" : ""}`}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{
                    y: isHovered ? -6 : 0,
                    borderColor: isHovered ? "rgba(110, 231, 160, 0.35)" : "rgba(255, 255, 255, 0.07)",
                    boxShadow: isHovered
                      ? "0 18px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(34, 197, 94, 0.08)"
                      : "0 4px 20px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="industry-icon-wrap"
                    animate={{
                      scale: isHovered ? 1.08 : 1,
                      rotate: isHovered ? -4 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <motion.div
                      animate={{ y: isHovered ? -2 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </motion.div>
                  </motion.div>

                  <div>
                    <h3 className="industry-name">{ind.name}</h3>
                    <p className="industry-tag">{ind.tag}</p>
                  </div>

                  <motion.div
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${T.teal}, ${T.tealLight})`,
                      transformOrigin: "left",
                    }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.article>
              </motion.div>
            );
          })}
        </motion.div>

        
      </div>
    </section>
  );
}
