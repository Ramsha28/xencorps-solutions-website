"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const steps = [
  {l:"Discover",  d:"Structured discovery to understand business objectives, technology landscape, and transformation goals."},
  {l:"Strategize",d:"Define architecture vision, phased roadmap, and measurable outcomes aligned to executive priorities."},
  {l:"Architect", d:"Design scalable, secure enterprise-grade system architecture with modern cloud-native principles."},
  {l:"Build",     d:"Engineer using best-in-class frameworks, DevSecOps practices, and quality engineering standards."},
  {l:"Deploy",    d:"Production-ready delivery with CI/CD pipelines, infrastructure automation, and zero-downtime rollout."},
  {l:"Optimize",  d:"Monitor, iterate, and evolve through AI analytics, continuous improvement, and long-term partnership."},
];

export default function DeliveryProcess() {
  return (
    <section style={{ background:T.mist, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <style>{`
          @media (max-width: 991px) {
            .delivery-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .delivery-steps-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .delivery-image {
              min-height: 320px !important;
            }
          }
          @media (max-width: 540px) {
            .delivery-steps-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        <div style={{ display:"grid", gridTemplateColumns:"0.95fr 1.15fr", gap:44, alignItems:"stretch" }} className="delivery-grid">
          <div style={{ display:"flex", flexDirection:"column" }}>
            <Reveal>
              <div style={{ marginBottom:60 }}>
                <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Delivery Methodology</p>
                <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>How We Deliver<br/>Enterprise Transformation</h2>
              </div>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:T.mistDim, border:`1px solid ${T.mistDim}`, overflow:"hidden", borderRadius:12, flex:1 }} className="delivery-steps-grid">
              {steps.map((s,i) => (
                <Reveal key={s.l} delay={i*0.08}>
                  <motion.div whileHover={{ background:"#FFFFFF" }}
                    style={{ padding:"32px 22px", background:T.mist, height:"100%", position:"relative", transition:"background 0.28s" }}
                  >
                    <div style={{ width:30, height:30, border:`1.5px solid ${T.teal}`, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:T.sans, fontSize:11, fontWeight:700, color:T.teal, marginBottom:16 }}>
                      {String(i+1).padStart(2,"0")}
                    </div>
                    <h3 style={{ fontFamily:T.sans, fontSize:15, fontWeight:600, color:T.ink, marginBottom:9, letterSpacing:"-0.01em" }}>{s.l}</h3>
                    <p style={{ fontFamily:T.sans, fontSize:12.5, color:T.textSecondaryLight, lineHeight:1.66, fontWeight:300 }}>{s.d}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="delivery-image" style={{ borderRadius: 16, overflow: "hidden", height: "100%", minHeight: 480 }}>
              <img
                src="/images/delivery.png"
                alt="Sprint Delivery & CI/CD Pipeline Automation Diagram"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}