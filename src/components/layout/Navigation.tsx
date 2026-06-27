

// ─── Navigation ───────────────────────────────────────────────────────────────
"use client";
import {T} from "../../styles/theme";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
  ];

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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
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
        </Link>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map(l => (
            <Link key={l.name} href={l.href} style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, color: "rgba(245,252,252,0.72)", textDecoration: "none", letterSpacing: "0.005em", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = T.white;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,252,252,0.72)";
              }}
            >{l.name}</Link>
          ))}
          <Link href="/contact" style={{
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
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;