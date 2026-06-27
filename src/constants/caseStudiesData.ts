export interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  industry: string;
  badge: string;
  kicker: string;
  headline: string;
  overviewDescription: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string; imagePlaceholderText: string }[];
  results: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
  recommendedServices: { name: string; href: string }[];
  recommendedProducts: { name: string; href: string }[];
}

export const caseStudiesList: CaseStudyData[] = [
  {
    slug: "global-logistics-modernization",
    title: "Global Logistics Modernization",
    client: "Apex Freight Corp",
    industry: "Logistics & Supply Chain",
    badge: "LOGISTICS",
    kicker: "FLEET INTELLIGENCE",
    headline: "Automating route telemetry and reducing dispatch delays.",
    overviewDescription: "Apex Freight Corp operated a fleet of 1,200 vehicles with manual dispatch protocols, leading to 14% late delivery rates and excessive fuel waste. XencorpSolutions was engaged to build a real-time tracking, route optimization, and resource coordination portal.",
    challenges: [
      { title: "Manual Route Allocation", desc: "Dispatchers spent hours mapping routes manually, failing to react to real-time traffic jams or vehicle breakdowns." },
      { title: "Telemetry Operation Silos", desc: "Vehicle GPS, warehouse inventory systems, and client billing portals were completely isolated, blocking status updates." },
      { title: "Rising Operational Overhead", desc: "Inefficient vehicle paths and idling engines inflated monthly fuel expenses and reduced driver retention." }
    ],
    solutions: [
      { 
        title: "Intelligent Fleet Routing Gateway", 
        desc: "Constructed a real-time event router using Go and Node.js that ingests live GPS telemetry, computes traffic delays, and pushes automated route adjustments to driver consoles.",
        imagePlaceholderText: "Telemetry Data Stream Architecture"
      },
      { 
        title: "Unified Supply Chain Ledger", 
        desc: "Integrated the fleet telemetry engine with Apex's inventory and billing software, automating cargo logs and client invoices on vehicle arrival.",
        imagePlaceholderText: "Data Connector Integration Map"
      }
    ],
    results: [
      { title: "Dynamic Routing Engine", desc: "Re-routes vehicles dynamically based on traffic flow, weather warnings, and local restrictions." },
      { title: "Real-Time Telemetry Client", desc: "Displays vehicle sensor data, driver speed, fuel economy, and ETA on a single screen." },
      { title: "Automated Dispatch Hub", desc: "Enables click-to-dispatch operations, automating driver notifications and scheduling ledgers." }
    ],
    stats: [
      { value: "98.2%", label: "On-Time Dispatch Rate" },
      { value: "18.5%", label: "Fuel Cost Reductions" },
      { value: "<500ms", label: "Telemetry Latency" }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ]
  },
  {
    slug: "zero-trust-banking-ledger",
    title: "Zero-Trust Transaction Ledger",
    client: "Novus Bank Group",
    industry: "Banking & Financial Services",
    badge: "FINTECH",
    kicker: "TRANSACTION SECURITY",
    headline: "Enforcing zero-trust ledger control and continuous SEC audits.",
    overviewDescription: "Novus Bank sought to modernize its core retail banking ledger, aiming to enforce cryptographically auditable transaction trails while protecting database gateways against state-sponsored intrusions.",
    challenges: [
      { title: "Vulnerable Internal Gateways", desc: "Administrative tools had high credential risks, allowing database changes without multi-party verification." },
      { title: "Manual Compliance Auditing", desc: "Auditing internal compliance logs for SEC standards took weeks, delaying quarterly financial reporting." },
      { title: "High Matching Latency", desc: "Legacy databases locked rows during peak customer transaction runs, increasing ledger write times." }
    ],
    solutions: [
      { 
        title: "Immutable Crypto-Signed Ledger", 
        desc: "Deployed a zero-trust write-ahead ledger where every database mutation requires cryptographic signing and multi-sig administrative authorization.",
        imagePlaceholderText: "Cryptographic Multi-Sig Ledger Flow"
      },
      { 
        title: "Continuous Audit Engine", 
        desc: "Integrated continuous policy checks (SOC2, DORA, SEC) that evaluate system access logs hourly and archive compliant evidence files.",
        imagePlaceholderText: "Continuous Compliance Auditor Dashboard"
      }
    ],
    results: [
      { title: "Multi-Sig Identity Guard", desc: "Requires distinct, cryptographically signed permissions from three engineers to perform ledger alterations." },
      { title: "Audit Trail Ledger", desc: "Stores immutable transaction history, system event telemetry, and administrative actions." },
      { title: "Sub-Millisecond Engine", desc: "Utilizes optimized indexing patterns to keep read/write transaction speeds under 10ms." }
    ],
    stats: [
      { value: "0", label: "Security Breaches" },
      { value: "100%", label: "SEC Audit Compliance" },
      { value: "4.8ms", label: "Ledger Update Time" }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart GRC", href: "/products/smart-grc" }
    ]
  },
  {
    slug: "hipaa-compliant-clinical-portal",
    title: "HIPAA-Compliant Hospital Portal",
    client: "MedStar Healthcare Network",
    industry: "Healthcare",
    badge: "HEALTHCARE",
    kicker: "CLINICAL COMPLIANCE",
    headline: "Deploying secure, HIPAA-compliant patient diagnostics databases.",
    overviewDescription: "MedStar Healthcare required a secure outpatient portal where patients could view diagnostic records, schedule video triages, and communicate with clinicians while ensuring strict HIPAA database audits.",
    challenges: [
      { title: "HIPAA Logging Gaps", desc: "Legacy patient record access lacked auditable trails showing who viewed or modified records." },
      { title: "Insecure Telehealth Links", desc: "Clinicians used third-party chat software for outpatient coordination, violating privacy policies." },
      { title: "Fragmented Pharmacy Syncs", desc: "Outpatient clinical diagnoses required manual routing to separate pharmacy platforms, slowing prescriptions." }
    ],
    solutions: [
      { 
        title: "Role-Based Encrypted Portal", 
        desc: "Engineered a web application utilizing end-to-end database column encryption and strict role-based access control (RBAC) audited by Smart GRC tools.",
        imagePlaceholderText: "Encrypted Patient Database Architecture"
      },
      { 
        title: "Outpatient Telehealth System", 
        desc: "Constructed in-portal video triage rooms using WebRTC, securing data streams directly on MedStar's private virtual servers.",
        imagePlaceholderText: "Secure WebRTC Telehealth Setup"
      }
    ],
    results: [
      { title: "Encrypted Records Database", desc: "Secures medical files, lab diagnostics, and billing records with AES-256 column encryption." },
      { title: "Clinician Worklist Router", desc: "Routes patient requests, clinical files, and billing status alerts directly to active department nurses." },
      { title: "HIPAA Access Ledger", desc: "Logs patient database views, identifying user credentials, IP address, and record tags." }
    ],
    stats: [
      { value: "100%", label: "HIPAA Audit Conformity" },
      { value: "42%", label: "Patient Triage Backlog Cut" },
      { value: "99.98%", label: "Video Stream Uptime" }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" }
    ],
    recommendedProducts: [
      { name: "Smart GRC", href: "/products/smart-grc" }
    ]
  },
  {
    slug: "omnichannel-retail-checkout",
    title: "Omnichannel Checkout Engine",
    client: "Vogue Retail Group",
    industry: "Retail & E-commerce",
    badge: "RETAIL",
    kicker: "TRANSACTION CACHING",
    headline: "Unifying retail store POS and e-commerce inventory syncs.",
    overviewDescription: "Vogue Retail faced inventory discrepancies during sales events, with items overselling online before physical retail store POS terminals could synchronize warehouse logs.",
    challenges: [
      { title: "Slow Inventory Syncing", desc: "E-commerce databases synced with warehouse stock every 30 minutes, leading to frequent out-of-stock orders." },
      { title: "High Cart Abandonment", desc: "Peak traffic during promotional campaigns caused e-commerce checkout page crashes and database locks." },
      { title: "Isolated CRM Databases", desc: "In-store loyalty purchases did not update digital shopper profile dashboards, blocking custom deals." }
    ],
    solutions: [
      { 
        title: "Real-Time Inventory Cache Router", 
        desc: "Constructed an in-memory Redis cache layer that sits between the retail POS terminals, e-commerce checkout systems, and the main ERP warehouse.",
        imagePlaceholderText: "Distributed Redis Caching System"
      },
      { 
        title: "Distributed Checkout Manager", 
        desc: "Deployed a serverless queue worker model that throttles checkout mutations during peak traffic, eliminating database lock bottlenecks.",
        imagePlaceholderText: "Serverless Checkout Queue Setup"
      }
    ],
    results: [
      { title: "In-Memory Stock Cache", desc: "Maintains real-time availability counts, preventing double-selling during flash promotion events." },
      { title: "Distributed Queue Worker", desc: "Handles heavy checkout traffic without locking main database connections or interrupting POS systems." },
      { title: "Unified Loyalty Database", desc: "Synchronizes customer profiles instantly across physical retail outlets and mobile applications." }
    ],
    stats: [
      { value: "<1.2s", label: "Inventory Sync Delay" },
      { value: "32%", label: "E-Commerce Conversion Lift" },
      { value: "250k", label: "Concurrent Sessions Handled" }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ]
  }
];
