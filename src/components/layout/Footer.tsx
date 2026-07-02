import { T } from "../../styles/theme";
import Link from "next/link";
import xencorpsLogo from "../../assets/logos/xencorps logo.png";

const cols = [
  {
    h: "Services",
    links: [
      { name: "Software Engineering", href: "/services/custom-software-development" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { name: "ERP Solutions", href: "/services/erp-solutions" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Data Center & Infrastructure", href: "/services/data-center-development" },
      { name: "IT Consulting", href: "/services/it-consultancy" },
    ]
  },
  {
    h: "Products",
    links: [
      { name: "SmartGRC", href: "/products/smart-grc" },
      { name: "Smart Orion", href: "/products/smart-orion" },
      { name: "Smart Crypto Exchange", href: "/products/smart-crypto-exchange" }
    ]
  },
  {
    h: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Case Studies", href: "/case-studies" }
    ]
  }
];

export default function Footer() {
  return (
    <footer style={{ background:T.ink, borderTop:"1px solid rgba(255,255,255,0.06)", padding:"76px 0 28px" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr 1fr", gap:44, marginBottom:60 }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, textDecoration: "none" }}>
              <img
                src={xencorpsLogo.src}
                alt="Xencorp Solutions logo"
                style={{
                  height: 54,
                  width: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                  display: "block",
                  background: "transparent",
                }}
              />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: 16.5, color: "#16A34A", letterSpacing: "-0.01em" }}>
                Xencorp<span style={{ color: T.white }}>Solutions</span>
              </span>
            </Link>
            <p style={{ fontFamily:T.sans, fontSize:13, color:"rgba(255,255,255,0.7)", lineHeight:1.72, marginBottom:16, fontWeight:300 }}>Enterprise Technology Consulting & Digital Transformation.<br/>Lahore, Pakistan.</p>
            <div style={{ fontFamily:T.sans, fontSize:12.5, color:"rgba(255,255,255,0.7)", lineHeight:1.9, fontWeight:300 }}>
              <div>info@xencorpsolutions.com</div>
              <div>Mon – Sat, 9:00 AM – 7:00 PM PKT</div>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <h4 style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em", color:T.tealLight, marginBottom:16 }}>{col.h}</h4>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {col.links.map(l => (
                  <li key={l.name} style={{ marginBottom:9 }}>
                    <Link href={l.href} style={{ fontFamily:T.sans, fontSize:13, color:"rgba(255,255,255,0.6)", textDecoration:"none", fontWeight:300, transition:"color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T.white; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
                    >{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:22, borderTop:"1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily:T.sans, fontSize:12, color:"rgba(255,255,255,0.45)", fontWeight:300 }}>© 2026 Xencorpsolutions. All Rights Reserved.</p>
          <div style={{ display:"flex", gap:22 }}>
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Use", href: "/terms-of-use" },
              { name: "Security", href: "/security" }
            ].map(l => (
              <Link key={l.name} href={l.href} style={{ fontFamily:T.sans, fontSize:12, color:"rgba(255,255,255,0.45)", textDecoration:"none", fontWeight:300, transition:"color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T.white; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
              >{l.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}