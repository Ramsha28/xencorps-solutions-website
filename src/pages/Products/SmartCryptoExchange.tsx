"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import CTASection from "../../sections/home/CTASection";

// Sections
import ProductHero from "../../sections/products/ProductHero";
import BusinessChallenges from "../../sections/products/BusinessChallenges";
import PlatformOverview from "../../sections/products/PlatformOverview";
import CoreModules from "../../sections/products/CoreModules";
import PlatformCapabilities from "../../sections/products/PlatformCapabilities";
import BusinessBenefits from "../../sections/products/BusinessBenefits";
import IntegrationEcosystem from "../../sections/products/IntegrationEcosystem";
import SecurityArchitecture from "../../sections/products/SecurityArchitecture";
import IndustriesServed from "../../sections/products/IndustriesServed";
import ImplementationJourney from "../../sections/products/ImplementationJourney";
import FAQSection from "../../sections/products/FAQSection";

const accent = T.teal; // Green for Crypto Exchange

const challenges = [
  {
    title: "Vulnerable Custody Layers",
    desc: "Storing wallet private keys in a single database opens major risk of internal fraud or external security breaches."
  },
  {
    title: "Order Matching Bottlenecks",
    desc: "monolithic databases create high trading latency and freeze under high volume, causing trade slippage."
  },
  {
    title: "Audit & AML Gaps",
    desc: "Failing to check blockchain wallets for money-laundering histories can lead to regulatory fines and bank freezes."
  }
];

const outcomes = [
  "Execute trades with sub-millisecond order matching latency.",
  "Enforce complete, automated KYC/AML check pipelines.",
  "Secure customer reserves using MPC multi-signature vault architecture."
];

const capabilities = [
  "Sub-ms Matching Engine",
  "MPC Multi-Sig Custody",
  "Real-Time Ledger Audits",
  "KYC / AML Automation",
  "Admin Operations Console",
  "Liquidity Aggregation"
];

const modules = [
  {
    title: "Order Matching Engine",
    desc: "High-speed matching engine processing limit, market, and stop orders with sub-millisecond latency.",
    benefit: "Handles heavy market volatility without transaction freezes.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Wallet Custody Manager",
    desc: "MPC wallet infrastructure providing secure multi-signature transactions, cold storage vaults, and hot wallets.",
    benefit: "Protects customer reserves from private key theft.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M3 10h18M7 15h.01M11 15h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    )
  },
  {
    title: "KYC/AML Compliance Gateway",
    desc: "Integrate identity verification systems and on-chain blockchain forensics to audit wallet deposits.",
    benefit: "Blocks high-risk funds from entering asset reserves.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M9 12l2 2 4-4m5 .5c0 7.142-7.5 11.25-8 11.5-.5-.25-8-4.358-8-11.5V5l8-3 8 3v7.5z" />
      </svg>
    )
  },
  {
    title: "Admin Operations Console",
    desc: "Control panel to manage currency pairs, adjust trading fees, and monitor server latency.",
    benefit: "Gives operators absolute control over transaction fee metrics.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h6" />
      </svg>
    )
  }
];

const capabilitiesGrid = [
  {
    title: "Sub-ms Trade Engine",
    desc: "Processes up to 1,000,000 trades per second per market pair with minimal latency.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
  },
  {
    title: "Secure MPC Custody Vault",
    desc: "Splits private keys across multiple servers using Secure Multiparty Computation to prevent single-point hacks.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
  },
  {
    title: "Real-Time WebSocket APIs",
    desc: "Pushes real-time order-book updates and ticker price feeds to trade terminals.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
  },
  {
    title: "Liquidity Aggregator",
    desc: "Connects directly to major market makers to guarantee tight spreads even during high volatility.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
  }
];

const benefits = [
  {
    metricValue: "<1ms",
    metricLabel: "Latency",
    title: "Sub-ms Execution",
    desc: "High-frequency trade execution matches top institutional-grade digital desks."
  },
  {
    metricValue: "100%",
    metricLabel: "Security",
    title: "MPC Cold Vaults",
    desc: "Keys are never constructed or held in a single memory block, blocking system hacks."
  },
  {
    metricValue: "Zero",
    metricLabel: "Compliance Penalties",
    title: "On-Chain Screening",
    desc: "Automated blockchain diagnostics check deposits before they merge into reserve pools."
  }
];

const integrations = [
  {
    name: "Chainalysis / Elliptic",
    category: "Compliance",
    desc: "Run automated wallet screenings and detect suspicious transaction flows on blockchains.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
  },
  {
    name: "Fiat Gateway Link",
    category: "Payment",
    desc: "Accept credit card deposits, instant bank wires, and withdrawals.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h.01M11 15h.01"/></svg>
  },
  {
    name: "SumSub / Onfido",
    category: "KYC Link",
    desc: "Deploy automated client passport scanning and identity verification.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
  },
  {
    name: "Developer SDKs",
    category: "API Link",
    desc: "Provide WebSocket interfaces and FIX protocols for algorithmic trading bots.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
  }
];

const industries = [
  {
    name: "FinTech & Payments",
    desc: "Deploy digital payment routes, cross-border corridors, and custodial customer wallets.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
  },
  {
    name: "Investment & Wealth Firms",
    desc: "Provide secure crypto custody setups, investment portfolio tools, and OTC trading terminals.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M3 21h18M3 10h18M3 6l9-4 9 4M4 10v11m4-11v11m4-11v11m4-11v11m4-11v11"/></svg>
  },
  {
    name: "Regulated Exchanges",
    desc: "Launch legal digital currency trading systems built for strict licensing requirements.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M9 12l2 2 4-4m5 .5c0 7.142-7.5 11.25-8 11.5-.5-.25-8-4.358-8-11.5V5l8-3 8 3v7.5z"/></svg>
  }
];

const journeySteps = [
  {
    title: "Regulatory Audit",
    desc: "We study target compliance requirements, identify licensing constraints, and establish auditing rules."
  },
  {
    title: "Instance Provisioning",
    desc: "Setup dedicated cloud databases, isolate system environments, and register currency markets."
  },
  {
    title: "Custody Integration",
    desc: "Connect hardware custody engines, setup secure reserve wallets, and define withdrawal transfer limits."
  },
  {
    title: "Compliance Gateway Connect",
    desc: "Hook up identity validation databases and blockchain screening scripts to build safe account registration paths."
  },
  {
    title: "Stress & Load Diagnostic",
    desc: "Test trading volumes under high-frequency load to verify order-book stability and check sub-ms execution times."
  },
  {
    title: "Platform Launch",
    desc: "Onboard security operators, set admin dashboard controls, and activate live trading pairs."
  }
];

const faqs = [
  {
    q: "How is asset safety guaranteed?",
    a: "We combine Multi-Signature wallet custody with Secure Multiparty Computation (MPC). Private keys are never created or held on a single database, securing reserves from hacks."
  },
  {
    q: "What order execution speeds are hit?",
    a: "Our matching engine processes transactions in sub-millisecond execution times, matching institutional trading requirements."
  },
  {
    q: "Does the platform integrate bank deposits?",
    a: "Yes. Smart Crypto Exchange provides API connections to credit card processors, payment networks, and international bank wires."
  }
];

export default function SmartCryptoExchange() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      
      <Navigation />
      
      <ProductHero
        id="smart-crypto-exchange"
        badge="FINTECH"
        name="Smart Crypto Exchange"
        headline="Institutional Digital Asset Trading Platform"
        description="Deploy a high-performance cryptocurrency trading platform with a sub-millisecond matching engine, secure multi-sig wallet infrastructure, automated KYC/AML checks, and robust administrative tools."
        primaryCTA="Request Consultation"
        secondaryCTA="Explore Terminal"
        accentColor={accent}
      />
      
      <BusinessChallenges
        challenges={challenges}
        accentColor={accent}
      />

      <PlatformOverview
        id="smart-crypto-exchange"
        name="Smart Crypto Exchange"
        solution="Smart Crypto Exchange provides a robust matching engine capable of processing up to 1,000,000 transactions per second under heavy traffic. The platform isolates wallet key generation using secure multiparty computation (MPC) and monitors all incoming ledger deposits for regulatory AML compliance."
        audience="Ideal for FinTech Startups, Digital Asset Brokerages, Regulated Exchanges, and Financial Institutions entering crypto custody and brokerage markets."
        outcomes={outcomes}
        capabilities={capabilities}
        accentColor={accent}
      />

      <CoreModules
        modules={modules}
        accentColor={accent}
      />

      <PlatformCapabilities
        capabilities={capabilitiesGrid}
        accentColor={accent}
      />

      <BusinessBenefits
        benefits={benefits}
        accentColor={accent}
      />

      <IntegrationEcosystem
        integrations={integrations}
        accentColor={accent}
      />

      <SecurityArchitecture
        accentColor={accent}
      />

      <IndustriesServed
        industries={industries}
        accentColor={accent}
      />

      <ImplementationJourney
        journeySteps={journeySteps}
        accentColor={accent}
      />

      <FAQSection
        faqs={faqs}
        accentColor={accent}
      />

      <CTASection />
      
      <Footer />
    </main>
  );
}
