"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import softwareDevelopmentImg from "../../assets/images/software-development.jpg";
import websiteDevelopmentImg from "../../assets/images/website-development.jpg";
import mobileAppImg from "../../assets/images/mobile-app.jpg";
import aiImg from "../../assets/images/AI.jpg";
import erpSolutionImg from "../../assets/images/erp-solution.jpg";
import ecommerceImg from "../../assets/images/ecommerce.jpg";
import datacenterImg from "../../assets/images/datacenter.jpg";
import itConsultantImg from "../../assets/images/it-consultant.jpg";

const solutionImages: Record<string, StaticImageData> = {
  "custom-software-development": softwareDevelopmentImg,
  "web-development": websiteDevelopmentImg,
  "mobile-app-development": mobileAppImg,
  "ai-intelligent-systems": aiImg,
  "erp-solutions": erpSolutionImg,
  "e-commerce-solutions": ecommerceImg,
  "data-center-development": datacenterImg,
  "it-consultancy": itConsultantImg,
};

interface ServiceData {
  id: string;
  title: string;
  heroTitle: string;
  heroLede: string;
  challengesKicker: string;
  challengesTitle: string;
  challenges: { title: string; desc: string }[];
  solutionKicker: string;
  solutionTitle: string;
  solutionParagraphs: string[];
  solutionImageText: string;
  capabilitiesKicker: string;
  capabilitiesTitle: string;
  capabilities: { title: string; desc: string }[];
  techStackKicker: string;
  techStackTitle: string;
  techStack: string[];
  processKicker: string;
  processTitle: string;
  process: { title: string; desc: string }[];
  deliverablesKicker: string;
  deliverablesTitle: string;
  deliverablesText: string;
  benefitsText: string;
  industriesKicker: string;
  industriesTitle: string;
  industries: string[];
  relatedKicker: string;
  relatedTitle: string;
  relatedCaseStudy: { title: string; desc: string; href: string };
  relatedProduct: { title: string; desc: string; href: string };
}

const servicesDataMap: Record<string, ServiceData> = {
  "custom-software-development": {
    id: "custom-software-development",
    title: "Custom Software Development",
    heroTitle: "Custom software engineered for <em>your specific workflows</em> — not a generic suite.",
    heroLede: "Design, develop, and deploy proprietary platforms that align with your operational processes — ensuring 100% intellectual property ownership and zero vendor lock-in.",
    challengesKicker: "Business Challenges",
    challengesTitle: "Why off-the-shelf software falls short",
    challenges: [
      { title: "Rigid legacy lock-in", desc: "Monolithic applications that force your teams into inefficient workarounds and high annual licensing fees." },
      { title: "Manual data friction", desc: "Siloed department operations requiring double entry and increasing transaction processing errors." },
      { title: "Scaling limitations", desc: "SaaS products that become prohibitively expensive as user counts and branch networks grow." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We build custom systems around your operational realities",
    solutionParagraphs: [
      "Every software engagement starts by mapping out your team's real-world processes. We design normalized databases, secure microservice APIs, and responsive frontends that solve your exact bottlenecks.",
      "This ensures complete ownership of your software assets. You build equity in your technology, integrate seamlessly with legacy endpoints, and scale without user seat licensing taxes."
    ],
    solutionImageText: "Custom Software Architecture Flow: React Frontend -> API Gateway -> Spring Boot Microservices -> PostgreSQL Replica Cluster",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "Full-lifecycle engineering practices",
    capabilities: [
      { title: "SaaS Platform Engineering", desc: "Scalable multi-tenant cloud architectures built to run your commercial digital products." },
      { title: "Workflow Automation", desc: "Automate administrative, dispatch, or reporting sequences to eliminate manual processing gaps." },
      { title: "API Integration Layers", desc: "Secure data extraction pathways connecting modern frontends to legacy enterprise systems." },
      { title: "Microservices Architecture", desc: "Modular, containerized backend services designed for independent scaling and high availability." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind custom software",
    techStack: ["Java Spring Boot", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Spring Security"],
    processKicker: "Development Process",
    processTitle: "How custom development actually runs",
    process: [
      { title: "Discover & Blueprint", desc: "Conduct operational discovery workshops to map workflows and build complete data entity layouts." },
      { title: "Iterative Engineering", desc: "Build in two-week agile sprints, providing live staging builds and weekly demo walkthroughs." },
      { title: "Test & Deploy", desc: "Run rigorous automated integration, load, and security testing before launching on zero-downtime infrastructure." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Production-ready clean codebase, complete technical architecture schemas, security configuration credentials, open API route specifications, and automated test suites.",
    benefitsText: "100% intellectual property ownership, zero recurring software license taxes, custom workflow speed, and smooth integrations with your existing legacy systems.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Manufacturing", "Banking & Finance", "Healthcare", "Logistics", "Retail"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Global Logistics Modernization",
      desc: "How we automated route telemetry and reduced dispatch delays by 98% for Apex Freight Corp.",
      href: "/case-studies/global-logistics-modernization"
    },
    relatedProduct: {
      title: "Smart Orion",
      desc: "See how multi-branch inventory, warehouse coordination, and finance ledgers are unified.",
      href: "/products/smart-orion"
    }
  },
  "web-development": {
    id: "web-development",
    title: "Enterprise Web Development",
    heroTitle: "High-performance web portals built for <em>sub-second responsiveness</em>.",
    heroLede: "Modern reactive frontends coupled with secure database APIs to power your client portals, analytics dashboards, and web-based enterprise applications.",
    challengesKicker: "Performance Barriers",
    challengesTitle: "Why slow web applications damage operations",
    challenges: [
      { title: "High bounce rates", desc: "Slow-loading legacy customer portals that degrade user satisfaction and increase call center support volumes." },
      { title: "Security vulnerabilities", desc: "Unsecured public web endpoints exposed to injection attacks, data leaks, and credential compromise." },
      { title: "UI maintenance delays", desc: "Monolithic frontend codebases that prevent marketing and product teams from making generic updates." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We build secure, blazing-fast web architectures",
    solutionParagraphs: [
      "We construct web platforms using server-side rendering (SSR), global edge caching, and modern React frameworks. This guarantees immediate paint times and smooth, app-like page navigation.",
      "We enforce rigorous security standards including OWASP sanitization, OAuth2 role-based authorization, and continuous compliance checks using automated tools."
    ],
    solutionImageText: "Enterprise Web Portal Architecture: Next.js SSR Frontend -> Edge CDN Cache -> Spring Security API Guard -> PostgreSQL Data Store",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "Modern web capabilities",
    capabilities: [
      { title: "Customer Portals", desc: "Secure, authenticated customer interfaces for account management, document retrieval, and self-service." },
      { title: "Admin Dashboards", desc: "High-performance analytics hubs displaying real-time business telemetry and C-level reporting metrics." },
      { title: "Access Control (RBAC)", desc: "Granular user permission systems to ensure employees only view data relevant to their specific roles." },
      { title: "Real-time Interfaces", desc: "Websocket-enabled interfaces for collaborative documents, live tracking, and instant alerts." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind enterprise web portals",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Spring Security", "Node.js", "Prisma", "PostgreSQL"],
    processKicker: "Development Process",
    processTitle: "How web development actually runs",
    process: [
      { title: "UX Prototyping", desc: "Create high-fidelity interactive wireframes to validate user journeys and screen layouts before coding." },
      { title: "Secure API Engineering", desc: "Develop the RESTful or GraphQL API layers with strict schema validations and authorization guards." },
      { title: "SSR Integration", desc: "Build responsive frontend layouts utilizing server-side rendering for optimal speed and search visibility." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Responsive web portal codebase, interactive Figma mockups, API route specifications, and automated accessibility compliance reports.",
    benefitsText: "Immediate page load times across global CDNs, secured data protection, cross-device responsiveness, and simplified interface maintenance.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Banking & Finance", "Healthcare", "Retail", "Logistics", "Government"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "HIPAA-Compliant Hospital Portal",
      desc: "How we deployed a secure diagnostic record outpatient portal for MedStar Healthcare.",
      href: "/case-studies/hipaa-compliant-clinical-portal"
    },
    relatedProduct: {
      title: "SmartGRC",
      desc: "See how security policies, compliance audits, and role access permissions are configured.",
      href: "/products/smart-grc"
    }
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    heroTitle: "Native-performance mobile apps built to <em>work anywhere, offline or online</em>.",
    heroLede: "Frictionless iOS and Android apps powered by Flutter, engineered with local database caching for seamless operations in the field.",
    challengesKicker: "Operational Bottlenecks",
    challengesTitle: "Why mobile initiatives fail in the enterprise",
    challenges: [
      { title: "Codebase duplication", desc: "Maintaining separate native iOS and Android codebases, which doubles engineering, QA, and release management costs." },
      { title: "Offline data loss", desc: "Apps that lock up or lose input data when field workers lose cellular connectivity in warehouses or remote zones." },
      { title: "Sluggish performance", desc: "Non-native hybrid wrappers that feel unresponsive, leading to low employee adoption and poor user reviews." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We engineer native-speed cross-platform apps",
    solutionParagraphs: [
      "We write cross-platform mobile apps using Flutter's high-speed GPU rendering engine. Your team benefits from a unified codebase that looks and runs identically on both iOS and Android.",
      "Our apps are designed offline-first. We configure local SQLite databases that capture inputs instantly, resolving sync conflicts in the background when connectivity is restored."
    ],
    solutionImageText: "Offline-First Mobile Architecture: Flutter UI Engine -> SQLite Local Cache -> Sync Queue Manager -> AWS API Gateway -> Main DB",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "Core mobile capabilities",
    capabilities: [
      { title: "Flutter Development", desc: "High-performance cross-platform apps built from a single codebase to reduce launch times." },
      { title: "Offline Data Storage", desc: "Local database caching ensuring complete app usability in remote regions without cellular service." },
      { title: "Location Tracking", desc: "Background GPS tracking, geofencing, and real-time mapping for delivery and field teams." },
      { title: "Frictionless Billing", desc: "Secure in-app payments, credit card scanners, and digital signature capture interfaces." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind enterprise mobile apps",
    techStack: ["Flutter", "Dart", "SQLite", "Firebase APIs", "App Store Connect", "Google Play Console", "GitLab CI"],
    processKicker: "Development Process",
    processTitle: "How mobile development actually runs",
    process: [
      { title: "Mobile Journey Mapping", desc: "Define user interactions, offline data requirements, and device sensor triggers." },
      { title: "Offline Layer Setup", desc: "Configure local database schemas and write background sync conflict resolution routines." },
      { title: "Cross-Platform Build", desc: "Develop the Flutter codebase and run automated tests across virtual and physical devices." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Compiled iOS and Android app bundles, source code, app store submission configurations, and database synchronization schemas.",
    benefitsText: "40% reduction in development costs, zero field data loss, consistent offline functionality, and app store deployment.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Logistics", "Retail & E-commerce", "Healthcare", "Manufacturing", "Startups"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Global Logistics Modernization",
      desc: "See how telemetry routing and logistics tracking are handled on mobile devices.",
      href: "/case-studies/global-logistics-modernization"
    },
    relatedProduct: {
      title: "Smart Orion",
      desc: "Unify mobile inventory logging and warehouse dispatch coordinates with the core ERP system.",
      href: "/products/smart-orion"
    }
  },
  "ai-intelligent-systems": {
    id: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    heroTitle: "Intelligence embedded into <em>how the enterprise runs</em> — not a chatbot bolted on top.",
    heroLede: "Predictive analytics, computer vision, and ML engineering built into the operational core of your business — the same approach powering risk prediction in SmartGRC and demand forecasting in Smart Orion.",
    challengesKicker: "Business Challenges",
    challengesTitle: "Why AI initiatives stall before they reach production",
    challenges: [
      { title: "Pilot purgatory", desc: "Models that prove out in a notebook but never reach a production decision pipeline." },
      { title: "No operational ownership", desc: "Data science output with nowhere to land inside existing ERP or GRC workflows." },
      { title: "Governance blind spots", desc: "AI systems deployed without explainability, auditability, or model-risk controls." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We engineer AI as core architecture, not a feature add-on",
    solutionParagraphs: [
      "Every AI engagement starts with where the decision actually gets made — a risk score, a reorder point, a fraud flag — and works backward to the model, the data pipeline, and the governance layer around it.",
      "That's the same discipline behind SmartGRC's risk prediction engine and Smart Crypto Exchange's fraud detection layer — both shipped from real client engagements, not lab experiments."
    ],
    solutionImageText: "Enterprise ML Architecture: Data Pipeline (Snowflake) -> Training Pipeline (PyTorch) -> Model Register (MLflow) -> Serving API (Kubernetes) -> Operational Application",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "What's included in this practice",
    capabilities: [
      { title: "Predictive Analytics", desc: "Forecasting models for demand, risk, and operational planning." },
      { title: "Computer Vision", desc: "Quality inspection, document intelligence, and visual monitoring systems." },
      { title: "NLP & AI Assistants", desc: "Enterprise-grade conversational systems grounded in your own data." },
      { title: "ML Engineering", desc: "Production MLOps pipelines — training, monitoring, retraining, governance." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind every AI deployment",
    techStack: ["Python", "PyTorch", "TensorFlow", "LangChain", "MLflow", "Kubernetes", "Snowflake", "Azure ML"],
    processKicker: "Development Process",
    processTitle: "How an AI engagement actually runs",
    process: [
      { title: "Discover & Scope", desc: "Identify the highest-leverage decision point to target first." },
      { title: "Model & Validate", desc: "Build, test, and validate against real operational data — not synthetic benchmarks." },
      { title: "Deploy & Govern", desc: "Ship into production with monitoring, retraining, and model-risk governance built in." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Production ML pipeline, model documentation, governance framework, and a trained internal team to own it going forward.",
    benefitsText: "Faster, more consistent decisions; reduced manual review load; audit-ready model governance from day one.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Banking & Finance", "Healthcare", "Retail", "Manufacturing", "Government"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Zero-Trust Transaction Ledger",
      desc: "How bank-grade security models and compliance audits protect institutional ledger mutations.",
      href: "/case-studies/zero-trust-banking-ledger"
    },
    relatedProduct: {
      title: "SmartGRC",
      desc: "See how risk prediction and security audits are embedded directly into the compliance platform.",
      href: "/products/smart-grc"
    }
  },
  "erp-solutions": {
    id: "erp-solutions",
    title: "ERP Solutions & Business Automation",
    heroTitle: "Unify all operational hubs into <em>one source of truth</em>.",
    heroLede: "SAP and Odoo implementations customized to bridge sales cash registers, supply chain warehouses, and accounting ledgers in real time.",
    challengesKicker: "Operational Gaps",
    challengesTitle: "Why disconnected systems drain enterprise margins",
    challenges: [
      { title: "Ledger discrepancies", desc: "Siloed departmental databases creating manual verification delays between sales registers and accounting." },
      { title: "Inventory stockouts", desc: "Procurement cycles relying on manual warehouse checks, causing delays and lost customer orders." },
      { title: "Lack of central visibility", desc: "C-suite executives lacking real-time margins and cash flow tracking across multiple branches." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We bridge departments with unified ERP setups",
    solutionParagraphs: [
      "We configure, deploy, and customize industry-leading ERP engines like SAP and Odoo. We engineer custom API sync adapters that link retail storefronts directly with central ledgers.",
      "This gives your leadership immediate oversight of stock, cash flow, and human resources. By automating purchasing queues, we eliminate manual reordering lags."
    ],
    solutionImageText: "Unified ERP Architecture: Multi-Branch POS -> Odoo Core API -> Warehouse Inventory Manager -> General Ledger Integration",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "ERP implementation practice",
    capabilities: [
      { title: "Custom Module Design", desc: "Develop bespoke functional modules to map Odoo or SAP to your specialized enterprise workflows." },
      { title: "Real-Time Ledger Sync", desc: "Automate accounting ledger entry updates instantly from invoice payments or warehouse receipts." },
      { title: "Inventory Management", desc: "Multi-warehouse tracking systems with auto-replenishment levels and barcode scanner integrations." },
      { title: "Multi-Branch Operations", desc: "Centralized controls for coordinating pricing, logistics, and payroll across regional branches." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind enterprise ERP systems",
    techStack: ["Odoo ERP", "SAP Modules", "Python", "PostgreSQL", "Docker", "XML-RPC", "Spring Boot", "Git"],
    processKicker: "Development Process",
    processTitle: "How an ERP project actually runs",
    process: [
      { title: "Process Diagnostics", desc: "Perform department-by-department audits to map all data flows and legacy dependencies." },
      { title: "Schema Migration", desc: "Migrate legacy databases, verifying transaction balances and vendor records." },
      { title: "Deployment & Training", desc: "Launch modules in stages, conducting comprehensive staff dry-runs to ensure operational readiness." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Fully configured Odoo or SAP system environment, custom module files, automated database migration scripts, and staff training guides.",
    benefitsText: "Eliminated book reconciliation delays, unified inventory counts across branches, and live corporate margins visibility.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Retail & E-commerce", "Logistics", "Manufacturing", "Banking & Finance", "Healthcare"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Omnichannel Checkout Engine",
      desc: "See how we integrated Vogue Retail's POS terminals with automated warehouse inventory.",
      href: "/case-studies/omnichannel-retail-checkout"
    },
    relatedProduct: {
      title: "Smart Orion",
      desc: "Discover our proprietary ERP solution built to run multi-branch operations and inventories.",
      href: "/products/smart-orion"
    }
  },
  "e-commerce-solutions": {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    heroTitle: "E-commerce built for <em>conversion and instant scale</em>.",
    heroLede: "Headless commerce storefronts, custom checkout flows, and payment API integrations built to handle high promotional traffic without lag.",
    challengesKicker: "Conversion Blockers",
    challengesTitle: "Why generic storefront templates lose sales",
    challenges: [
      { title: "Slow checkout loops", desc: "Clunky multi-step checkouts that cause customers to abandon shopping carts and decrease conversions." },
      { title: "Double-selling errors", desc: "Out-of-sync store inventories that lead to orders for out-of-stock items, causing refunds and complaints." },
      { title: "Branding limitations", desc: "Standard template designs that make it difficult to project premium corporate identity and product details." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We build headless, lightning-fast storefronts",
    solutionParagraphs: [
      "We separate the customer-facing frontend from the backend e-commerce engine (headless commerce). By loading interfaces as static web builds, we achieve sub-second speeds.",
      "We build direct integrations with Stripe, regional banks, and warehouse inventories, ensuring stock availability checks occur instantly on checkout clicks."
    ],
    solutionImageText: "Headless E-Commerce System: React/Next.js Storefront -> CDN Edge -> GraphQL API Gateway -> Shopify Admin Engine -> ERP Stock Sync",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "E-commerce capabilities",
    capabilities: [
      { title: "Headless Commerce", desc: "Next.js frontends connecting to commerce engines via fast APIs, providing custom visual freedom." },
      { title: "Payment Integrations", desc: "Secure setup of multi-currency checkouts, Stripe billing, and localized bank transfer links." },
      { title: "Marketplace Solutions", desc: "Multi-vendor platforms with automated commissions, seller dashboards, and product approval flows." },
      { title: "ERP & Stock Sync", desc: "Real-time connectors syncing online purchases directly with brick-and-mortar warehouse stock." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind digital commerce storefronts",
    techStack: ["Shopify API", "WooCommerce", "Next.js", "React", "Node.js", "Stripe API", "GraphQL", "Redis"],
    processKicker: "Development Process",
    processTitle: "How commerce setups run",
    process: [
      { title: "Conversion Audit", desc: "Analyze checkout drop-off paths and document inventory sync bottlenecks." },
      { title: "Interface Design", desc: "Design a responsive custom checkout layout focused on minimizing customer steps." },
      { title: "Gateway Integration", desc: "Develop payment API routes and connect inventory sync hooks to warehousing endpoints." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Headless e-commerce frontend repository, custom API gateway configuration code, Stripe payment profiles, and inventory automated sync adapters.",
    benefitsText: "32% average conversion lift, eliminated inventory oversell errors, and instant page speeds across desktop and mobile storefronts.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Retail", "Logistics", "Startups", "Manufacturing", "Banking & Finance"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Omnichannel Checkout Engine",
      desc: "Learn how we built Vogue Retail's real-time checkout cache to handle 250k sessions.",
      href: "/case-studies/omnichannel-retail-checkout"
    },
    relatedProduct: {
      title: "Smart Crypto Exchange",
      desc: "Explore our institutional trading platform engineered for high-throughput transactional load.",
      href: "/products/smart-crypto-exchange"
    }
  },
  "data-center-development": {
    id: "data-center-development",
    title: "Data Center Development & IT Infrastructure",
    heroTitle: "Hybrid infrastructure engineered for <em>99.999% system availability</em>.",
    heroLede: "Consultancy and planning for enterprise networks, container setups, and disaster recovery strategies that protect data sovereignty.",
    challengesKicker: "Infrastructure Risk",
    challengesTitle: "Why legacy servers restrict corporate growth",
    challenges: [
      { title: "High maintenance fees", desc: "On-premise physical servers that require expensive maintenance, power, and engineering overhead." },
      { title: "Single point of failure", desc: "Lack of real-time server replication, risking data corruption and hours of system downtime during power outages." },
      { title: "Data sovereignty issues", desc: "Failing to meet localized storage regulations, exposing the enterprise to compliance fines." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We plan high-availability hybrid clouds",
    solutionParagraphs: [
      "We design networks that blend secure on-premise servers (for compliance) with scalable public cloud nodes (for web systems). This ensures you have local data controls with cloud elasticity.",
      "We configure automated load balancing, container scaling via Kubernetes, and real-time database replication to secure operations against unexpected server failures."
    ],
    solutionImageText: "Hybrid Infrastructure Layout: Encrypted VPN Tunnel -> On-Premise Secure database (Sovereignty) <-> AWS/Azure Nodes (Scalable frontend portals)",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "Infrastructure planning practice",
    capabilities: [
      { title: "Server Layout Planning", desc: "Architectural blueprints for secure on-premise server configurations and local network nodes." },
      { title: "Cloud Migrations", desc: "Staged plans to migrate databases from legacy systems to virtualized cloud containers." },
      { title: "High-Availability Networks", desc: "Designing load-balanced networks with automated failovers to prevent system downtime." },
      { title: "Disaster Recovery", desc: "Automated real-time database replication and backup archives stored in compliance zones." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The stack behind robust infrastructures",
    techStack: ["Docker", "Kubernetes", "Nginx", "Linux Containers", "AWS Console", "Azure Dev Tools", "IPsec Tunnels", "Bash"],
    processKicker: "Development Process",
    processTitle: "How infrastructure engineering runs",
    process: [
      { title: "Infrastructure Audit", desc: "Scan physical hardware, check network latency, and audit security firewall rules." },
      { title: "Topology Blueprinting", desc: "Design container layouts, access control policies, and virtual cloud network limits." },
      { title: "Staged Database Sync", desc: "Perform incremental database migrations, testing fallback procedures before final cutover." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Network topology diagrams, Kubernetes deployment configuration scripts, cloud budget projections, and automated recovery protocol guides.",
    benefitsText: "Zero operational downtime, guaranteed compliance with localized data sovereignty regulations, and reduced hardware upkeep expenses.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Banking & Finance", "Healthcare", "Government", "Logistics", "Education"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "Zero-Trust Transaction Ledger",
      desc: "Read how bank-grade database security compliance and SEC audit trails were deployed.",
      href: "/case-studies/zero-trust-banking-ledger"
    },
    relatedProduct: {
      title: "SmartGRC",
      desc: "See how we audit physical and digital network assets for compliance frameworks.",
      href: "/products/smart-grc"
    }
  },
  "it-consultancy": {
    id: "it-consultancy",
    title: "IT Consultancy",
    heroTitle: "Digital transformation roadmaps backed by <em>measured technical diagnostics</em>.",
    heroLede: "Documenting codebase quality, auditing security vulnerabilities, and designing digital strategies that align technical investments with business growth.",
    challengesKicker: "Strategic Blindspots",
    challengesTitle: "Why software investments fall short of executive goals",
    challenges: [
      { title: "Stalled digital projects", desc: "IT initiatives that run over budget or halt because technical requirements do not map to real business KPIs." },
      { title: "Accumulated tech debt", desc: "Incompatible legacy software frameworks that slow down the development of new customer features." },
      { title: "Regulatory compliance risks", desc: "Undocumented database endpoints that violate data protection laws, risking audit failures." }
    ],
    solutionKicker: "Our Solution",
    solutionTitle: "We align software architectures with business outcomes",
    solutionParagraphs: [
      "We audit your systems, check database performance, and analyze codebase dependency trees. This allows us to document technical debt and outline risks before you invest.",
      "We deliver digital transformation blueprints that split upgrades into manageable phases. This ensures you mitigate security risks and achieve ROI at every step."
    ],
    solutionImageText: "Digital Transformation Audit Process: Code Audits -> Database Performance Scans -> Technical Debt Report -> Phase Release Roadmap",
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "Consultancy practice areas",
    capabilities: [
      { title: "Transformation Blueprints", desc: "Step-by-step technological roadmaps aligning developer tasks with executive business timelines." },
      { title: "Code Dependency Audits", desc: "Analyze quality, check vulnerabilities, and evaluate maintainability of existing codebases." },
      { title: "Architecture Reviews", desc: "Diagnostic checks on database index configurations, server latency, and network firewalls." },
      { title: "Compliance Advisory", desc: "Audit IT frameworks to ensure databases conform to GDPR, HIPAA, and industry compliance rules." }
    ],
    techStackKicker: "Technologies Used",
    techStackTitle: "The frameworks and standards behind our advice",
    techStack: ["COBIT Framework", "ITIL Standards", "Systems Mapping Tools", "Security Auditing Suites", "Technical Debt Analysis", "ISO 27001"],
    processKicker: "Development Process",
    processTitle: "How consulting engagements actually run",
    process: [
      { title: "Operational Diagnostic", desc: "Interview department heads to identify workflow bottlenecks and map current software touchpoints." },
      { title: "Technical Code Audit", desc: "Scan databases and repository logs to find performance bottlenecks and security issues." },
      { title: "Roadmap Presentation", desc: "Present detailed findings along with a step-by-step digital upgrade plan." }
    ],
    deliverablesKicker: "Deliverables & Benefits",
    deliverablesTitle: "What you walk away with",
    deliverablesText: "Technical debt assessment, security vulnerability log, systems dependency map, and a phased technology upgrade roadmap.",
    benefitsText: "40% average reduction in development delays, clear technology budgets, and low-risk modernization of legacy systems.",
    industriesKicker: "Industries Served",
    industriesTitle: "Where this practice is most active",
    industries: ["Government", "Banking & Finance", "Healthcare", "Manufacturing", "Logistics"],
    relatedKicker: "Related Case Studies & Products",
    relatedTitle: "See it in production",
    relatedCaseStudy: {
      title: "HIPAA-Compliant Hospital Portal",
      desc: "See how we audited and structured outpatient diagnostics portals for clinical compliance.",
      href: "/case-studies/hipaa-compliant-clinical-portal"
    },
    relatedProduct: {
      title: "SmartGRC",
      desc: "Discover how our GRC platform automates compliance policies and tracking across departments.",
      href: "/products/smart-grc"
    }
  }
};

interface ServiceDetailProps {
  id: string;
}

export default function ServiceDetail({ id }: ServiceDetailProps) {
  const service = servicesDataMap[id];
  const solutionImage = solutionImages[id];

  if (!service) {
    return (
      <main style={{ fontFamily: T.sans, background: T.ink, color: T.white, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <style>{fontLink}</style>
        <Navigation />
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "160px 36px 120px", textAlign: "center", width: "100%" }}>
          <h1 style={{ fontFamily: T.display, fontSize: 44, marginBottom: 24 }}>Practice Area Not Found</h1>
          <p style={{ color: T.textSecondary, marginBottom: 40 }}>The service practice you are looking for does not exist or has been modified.</p>
          <Link href="/services" style={{ padding: "12px 28px", background: T.teal, color: T.white, borderRadius: 100, textDecoration: "none", fontWeight: 600 }}>
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.white }}>
      <style>{fontLink}</style>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        a, button {
          cursor: pointer;
        }
        
        /* Globals & Layout */
        .wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .wrap.split {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .wrap.split {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Cohesive Light Flow with soft green washes */
        .section {
          padding: 80px 0;
          background-color: ${T.white};
          color: ${T.textPrimaryLight};
          border-bottom: 1px solid rgba(11, 15, 20, 0.04);
        }
        .section-alt {
          padding: 80px 0;
          background-color: rgba(34, 197, 94, 0.015); /* Soft hint of green */
          color: ${T.textPrimaryLight};
          border-bottom: 1px solid rgba(11, 15, 20, 0.04);
        }

        .section-head {
          margin-bottom: 48px;
        }
        .section-head h2 {
          font-family: ${T.sans};
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-top: 10px;
          color: ${T.textPrimaryLight};
        }

        .kicker {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: ${T.tealDim};
        }

        /* Hero Section (Dark Theme preserved as in other pages) */
        .hero-dark {
          position: relative;
          background-color: ${T.ink};
          padding: 170px 0 100px 0;
          color: ${T.white};
          overflow: hidden;
        }
        .hero-dark::before {
          content: "";
          position: absolute;
          top: -10%;
          right: -10%;
          width: 550px;
          height: 550px;
          background: ${T.glow};
          filter: blur(140px);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-dark .wrap {
          position: relative;
          z-index: 2;
        }
        .breadcrumb {
          font-size: 13px;
          color: ${T.textOnDarkSecondary};
          margin-bottom: 24px;
          font-weight: 400;
        }
        .breadcrumb a {
          color: ${T.tealLight};
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .breadcrumb a:hover {
          color: ${T.white};
        }
        .hero-dark .eyebrow {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: ${T.tealLight};
          margin-bottom: 20px;
        }
        .hero-dark h1 {
          font-family: ${T.sans};
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
          max-width: 960px;
          color: ${T.white};
        }
        .hero-dark h1 em {
          font-style: italic;
          font-weight: 700;
          color: ${T.tealLight};
        }
        .lede {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.76;
          color: ${T.textOnDarkSecondary};
          margin-bottom: 36px;
          max-width: 820px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.22s ease;
          cursor: pointer;
        }
        .btn-primary {
          background-color: ${T.teal};
          color: ${T.white};
          border: none;
          box-shadow: 0 4px 18px ${T.tealGlowStrong};
        }
        .btn-primary:hover {
          background-color: ${T.tealLight};
          transform: translateY(-2px);
          box-shadow: 0 6px 24px ${T.tealGlowStrong};
        }
        .btn-ghost {
          background-color: transparent;
          color: ${T.white};
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }
        .btn-ghost:hover {
          border-color: ${T.white};
          background-color: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
        .section-actions {
          margin-top: 32px;
          display: flex;
          gap: 14px;
        }
        .section-actions .btn-ghost {
          color: ${T.textPrimaryLight};
          border: 1.5px solid rgba(11, 15, 20, 0.2);
        }
        .section-actions .btn-ghost:hover {
          border-color: ${T.textPrimaryLight};
          background-color: rgba(11, 15, 20, 0.03);
          transform: translateY(-2px);
        }

        /* Cards styling with subtle animations */
        .card {
          background-color: ${T.white};
          border: 1px solid rgba(11, 15, 20, 0.06);
          border-radius: 12px;
          padding: 28px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card:hover {
          transform: translateY(-3px);
          border-color: ${T.teal};
          box-shadow: 0 12px 30px rgba(34, 197, 94, 0.04);
        }
        .card h3 {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          color: ${T.textPrimaryLight};
        }
        .card p {
          font-size: 14px;
          line-height: 1.6;
          font-weight: 300;
          color: ${T.textSecondaryLight};
        }

        /* Split layouts inside merged sections */
        .split-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }
        @media (max-width: 991px) {
          .split-columns {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .side-group {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .side-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.tealDim};
          margin-bottom: 12px;
          display: block;
        }

        /* List Items */
        .check-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .check-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .check-icon {
          color: ${T.teal};
          margin-top: 2px;
          flex-shrink: 0;
        }
        .check-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: ${T.textPrimaryLight};
          margin-bottom: 4px;
        }
        .check-content p {
          font-size: 14px;
          line-height: 1.5;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }

        /* Related Item Card (light-themed offset) */
        .card-dark {
          background-color: ${T.white};
          border: 1px solid rgba(11, 15, 20, 0.06);
          color: ${T.textPrimaryLight};
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          padding: 24px 28px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }
        .card-dark h3 {
          color: ${T.textPrimaryLight};
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 700;
        }
        .card-dark p {
          color: ${T.textSecondaryLight};
          margin-bottom: 16px;
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 300;
        }
        .card-dark:hover {
          border-color: ${T.teal};
          box-shadow: 0 12px 30px rgba(34, 197, 94, 0.04);
          transform: translateY(-3px);
        }
        .card-link {
          font-size: 13px;
          font-weight: 600;
          color: ${T.tealDim};
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
        }

        /* Interactive Schematic block & Image loader */
        .imgblock {
          position: relative;
          background-color: rgba(34, 197, 94, 0.015);
          border: 1px solid rgba(34, 197, 94, 0.08);
          border-radius: 12px;
          padding: 40px;
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: ${T.tealDim};
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          box-shadow: inset 0 0 30px rgba(34, 197, 94, 0.02);
          overflow: hidden;
          line-height: 1.6;
        }
        .imgblock::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.02;
          background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent);
          background-size: 40px 40px;
        }

        /* Technology badges */
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .badges span {
          font-size: 13px;
          font-weight: 500;
          color: ${T.tealDim};
          background-color: rgba(34, 197, 94, 0.03);
          border: 1px solid rgba(34, 197, 94, 0.15);
          padding: 6px 16px;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .badges span:hover {
          transform: translateY(-2px);
          border-color: ${T.teal};
          background-color: rgba(34, 197, 94, 0.06);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.08);
        }

        /* Timeline Process */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          top: 12px;
          bottom: 12px;
          left: 17px;
          width: 1px;
          background-color: rgba(11, 15, 20, 0.08);
        }
        .timeline-step {
          display: flex;
          gap: 20px;
          position: relative;
        }
        .step-number {
          font-size: 11px;
          font-weight: 700;
          color: ${T.teal};
          background-color: rgba(34, 197, 94, 0.06);
          border: 1px solid rgba(34, 197, 94, 0.2);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
        }
        .step-info h4 {
          font-size: 17px;
          font-weight: 700;
          color: ${T.textPrimaryLight};
          margin-bottom: 6px;
        }
        .step-info p {
          font-size: 13.5px;
          line-height: 1.6;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }
      `}</style>

      <Navigation />

      {/* 1. Hero Section (Dark - Preserved for site header visual identity) */}
      <section className="hero-dark">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/services">Services</Link> / {service.title}
          </div>
          <div className="eyebrow">{service.title}</div>
          <h1 dangerouslySetInnerHTML={{ __html: service.heroTitle }} />
          <p className="lede">{service.heroLede}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <a href="#overview" className="btn btn-ghost">View Capabilities</a>
          </div>
        </div>
      </section>

      {/* 2. Challenges & Capabilities Section (Merged - White background) */}
      <section className="section" id="overview">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="kicker">Overview</div>
              <h2>Challenges We Solve vs. Key Capabilities</h2>
            </div>
          </Reveal>
          
          <div className="split-columns">
            {/* Left Column: Business Challenges */}
            <Reveal>
              <div className="side-group">
                <div>
                  <span className="side-title">Business Challenges</span>
                  <p style={{ fontSize: "14.5px", color: T.textSecondaryLight, marginBottom: 20, fontWeight: 300 }}>
                    Why standard digital transformations stall or underperform in production.
                  </p>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {service.challenges.map((card, idx) => (
                    <div key={idx} className="card" style={{ borderLeft: `4px solid ${idx % 2 === 0 ? T.teal : "#FF6D00"}` }}>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Key Capabilities checklist */}
            <Reveal delay={0.08}>
              <div className="side-group">
                <div>
                  <span className="side-title">Core Capabilities</span>
                  <p style={{ fontSize: "14.5px", color: T.textSecondaryLight, marginBottom: 20, fontWeight: 300 }}>
                    What is included inside this practice area to guarantee deployment.
                  </p>
                </div>
                
                <div className="check-list">
                  {service.capabilities.map((item, idx) => (
                    <div className="check-item" key={idx}>
                      <div className="check-icon">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="check-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Solutions, Tech Stack & Architecture Section (Merged - Soft green wash) */}
      <section className="section-alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="kicker">{service.solutionKicker}</div>
              <h2>Architectural Approach & Tooling</h2>
            </div>
          </Reveal>

          <div className="split-columns">
            {/* Left Column: Solution & Tech Stack */}
            <Reveal>
              <div className="side-group" style={{ height: "100%", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: T.textPrimaryLight, marginBottom: 16 }}>
                    {service.solutionTitle}
                  </h3>
                  {service.solutionParagraphs.map((para, idx) => (
                    <p key={idx} style={{ marginTop: idx > 0 ? "14px" : "0", color: T.textSecondaryLight, fontSize: "14.5px", lineHeight: 1.65, fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>
                
                <div style={{ marginTop: "32px" }}>
                  <span className="side-title">{service.techStackTitle}</span>
                  <div className="badges">
                    {service.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Our Solution visual */}
            <Reveal delay={0.08}>
              <div className="imgblock" style={{ padding: 0, overflow: "hidden" }}>
                {solutionImage && (
                  <img
                    src={solutionImage.src}
                    alt={`${service.title} solution`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Delivery Process & Deliverables Section (Merged - White background) */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="kicker">Execution</div>
              <h2>Delivery Process & Measured Benefits</h2>
            </div>
          </Reveal>

          <div className="split-columns">
            {/* Left Column: Delivery Process Timeline */}
            <Reveal>
              <div className="side-group">
                <div>
                  <span className="side-title">{service.processTitle}</span>
                  <p style={{ fontSize: "14px", color: T.textSecondaryLight, marginBottom: 20, fontWeight: 300 }}>
                    How our engineering team executes from discovery to deployment.
                  </p>
                </div>
                
                <div className="timeline">
                  {service.process.map((step, idx) => (
                    <div className="timeline-step" key={idx}>
                      <div className="step-number">0{idx + 1}</div>
                      <div className="step-info">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Deliverables vs. Benefits Cards */}
            <Reveal delay={0.08}>
              <div className="side-group" style={{ justifyContent: "center" }}>
                <div>
                  <span className="side-title">{service.deliverablesTitle}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="card" style={{ borderTop: `4px solid ${T.teal}` }}>
                    <h3>Deliverables</h3>
                    <p>{service.deliverablesText}</p>
                  </div>
                  <div className="card" style={{ borderTop: `4px solid ${T.tealLight}` }}>
                    <h3>Benefits</h3>
                    <p>{service.benefitsText}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Industries & Related Outcomes */}
      <section className="section-alt">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="kicker">{service.relatedKicker}</div>
              <h2>{service.relatedTitle}</h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="side-group">
              <div>
                <span className="side-title">{service.industriesTitle}</span>
                <div className="badges" style={{ marginTop: "12px" }}>
                  {service.industries.map((ind) => (
                    <span key={ind}>{ind}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                <Link href={service.relatedCaseStudy.href} className="card-dark">
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: T.tealDim, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>Case Study</div>
                    <h3>{service.relatedCaseStudy.title}</h3>
                    <p>{service.relatedCaseStudy.desc}</p>
                  </div>
                  <div className="card-link">
                    <span>Read case study</span>
                    <span>&rarr;</span>
                  </div>
                </Link>

                <Link href={service.relatedProduct.href} className="card-dark">
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: T.tealDim, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>Platform Product</div>
                    <h3>{service.relatedProduct.title}</h3>
                    <p>{service.relatedProduct.desc}</p>
                  </div>
                  <div className="card-link">
                    <span>View platform</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
