"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  challengesOption: "A" | "B";
  narrativeContent?: string;
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
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const servicesDataMap: Record<string, ServiceData> = {
  "custom-software-development": {
    "id": "custom-software-development",
    "title": "Custom Software Development",
    "heroTitle": "<em>Custom software</em> engineered for your specific workflows",
    "heroLede": "Design, develop, and deploy proprietary platforms that align with your operational processes ensuring 100% intellectual property ownership and zero vendor lock-in.",
    "challengesOption": "A",
    "narrativeContent": "Off-the-shelf software packages often force growing enterprises into rigid, pre-defined operational boxes. Monolithic legacy systems trap teams in manual data entry workflows and create single points of failure, while licensing seat taxes grow prohibitively expensive. We replace these fragmented systems with a handcrafted, proprietary architecture built explicitly around your business realities. You gain complete codebase ownership, integrate seamlessly with legacy database endpoints, and scale without user seat licensing penalties.",
    "challengesKicker": "Business Challenges",
    "challengesTitle": "Why off-the-shelf software falls short",
    "challenges": [
      {
        "title": "Rigid legacy lock-in",
        "desc": "Monolithic applications that force your teams into inefficient workarounds and high annual licensing fees."
      },
      {
        "title": "Manual data friction",
        "desc": "Siloed department operations requiring double entry and increasing transaction processing errors."
      },
      {
        "title": "Scaling limitations",
        "desc": "SaaS products that become prohibitively expensive as user counts and branch networks grow."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We build custom systems around your operational realities",
    "solutionParagraphs": [
      "Every software engagement starts by mapping out your team's real-world processes. We design normalized databases, secure microservice APIs, and responsive frontends that solve your exact bottlenecks.",
      "This ensures complete ownership of your software assets. You build equity in your technology, integrate seamlessly with legacy endpoints, and scale without user seat licensing taxes."
    ],
    "solutionImageText": "Custom Software Architecture Flow: React Frontend -> API Gateway -> Spring Boot Microservices -> PostgreSQL Replica Cluster",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "Full-lifecycle engineering practices",
    "capabilities": [
      {
        "title": "SaaS Platform Engineering",
        "desc": "Scalable multi-tenant cloud architectures built to run your commercial digital products."
      },
      {
        "title": "Workflow Automation",
        "desc": "Automate administrative, dispatch, or reporting sequences to eliminate manual processing gaps."
      },
      {
        "title": "API Integration Layers",
        "desc": "Secure data extraction pathways connecting modern frontends to legacy enterprise systems."
      },
      {
        "title": "Microservices Architecture",
        "desc": "Modular, containerized backend services designed for independent scaling and high availability."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind custom software",
    "techStack": [
      "Java Spring Boot",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "Spring Security"
    ],
    "processKicker": "Development Process",
    "processTitle": "How custom development actually runs",
    "process": [
      {
        "title": "Discover & Blueprint",
        "desc": "Conduct operational discovery workshops to map workflows and build complete data entity layouts."
      },
      {
        "title": "Iterative Engineering",
        "desc": "Build in two-week agile sprints, providing live staging builds and weekly demo walkthroughs."
      },
      {
        "title": "Test & Deploy",
        "desc": "Run rigorous automated integration, load, and security testing before launching on zero-downtime infrastructure."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Production-ready clean codebase, complete technical architecture schemas, security configuration credentials, open API route specifications, and automated test suites.",
    "benefitsText": "100% intellectual property ownership, zero recurring software license taxes, custom workflow speed, and smooth integrations with your existing legacy systems.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Manufacturing",
      "Banking & Finance",
      "Healthcare",
      "Logistics",
      "Retail"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Global Logistics Modernization",
      "desc": "How we automated route telemetry and reduced dispatch delays by 98% for Apex Freight Corp.",
      "href": "/case-studies/global-logistics-modernization"
    },
    "relatedProduct": {
      "title": "Smart Orion",
      "desc": "See how multi-branch inventory, warehouse coordination, and finance ledgers are unified.",
      "href": "/products/smart-orion"
    },
    "faqs": [
      {
        "q": "How do you handle Intellectual Property (IP) ownership?",
        "a": "We grant 100% intellectual property ownership to you upon project milestone completion. There are no licensing fees, seat taxes, or lock-in clauses. You own the code repository, databases, and deployment keys."
      },
      {
        "q": "What is the typical timeline for a custom software build?",
        "a": "Typical MVP builds take between 8 to 12 weeks. Large-scale enterprise systems with extensive integrations can range from 4 to 6 months. We break down the build into bi-weekly sprints so you see live updates every two weeks."
      },
      {
        "q": "What technology stack do you use?",
        "a": "We build on robust, secure, and highly scalable stacks: Java Spring Boot or Node.js for backend microservices, TypeScript/React/Next.js for frontends, and PostgreSQL for structured data storage, containerized with Docker and Kubernetes."
      },
      {
        "q": "Do you integrate with our existing legacy systems?",
        "a": "Yes, our engineering team regularly designs custom API adapters and middleware tunnels to connect modern cloud systems to legacy mainframes, ERPs, and databases securely without disrupting current operations."
      },
      {
        "q": "What hosting options do you support?",
        "a": "We support deployment to AWS, Microsoft Azure, Google Cloud Platform (GCP), or your secure on-premise private clouds. We package all systems into containers so you can move hosting providers at any time."
      },
      {
        "q": "How do you handle maintenance and support after launch?",
        "a": "We offer dedicated support SLAs ranging from basic bug monitoring to 24/7 technical incident response. We also assist your internal IT team in taking over codebase operations once they are ready."
      }
    ],
    "ctaTitle": "Let's design software around your business.",
    "ctaText": "Stop bending your workflows to fit generic off-the-shelf SaaS. Build a secure, high-performance platform that you own 100%.",
    "ctaButton": "Request Architecture Workshop"
  },
  "web-development": {
    "id": "web-development",
    "title": "Enterprise Web Development",
    "heroTitle": "Developing enterprise <em>web platforms</em> that streamline operations and drive digital growth",
    "heroLede": "Modern reactive frontends coupled with secure database APIs to power your client portals, analytics dashboards, and web-based enterprise applications.",
    "challengesOption": "B",
    "challengesKicker": "Performance Barriers",
    "challengesTitle": "Why slow web applications damage operations",
    "challenges": [
      {
        "title": "High bounce rates",
        "desc": "Slow-loading legacy customer portals that degrade user satisfaction and increase call center support volumes."
      },
      {
        "title": "Security vulnerabilities",
        "desc": "Unsecured public web endpoints exposed to injection attacks, data leaks, and credential compromise."
      },
      {
        "title": "UI maintenance delays",
        "desc": "Monolithic frontend codebases that prevent marketing and product teams from making generic updates."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We build secure, blazing-fast web architectures",
    "solutionParagraphs": [
      "We construct web platforms using server-side rendering (SSR), global edge caching, and modern React frameworks. This guarantees immediate paint times and smooth, app-like page navigation.",
      "We enforce rigorous security standards including OWASP sanitization, OAuth2 role-based authorization, and continuous compliance checks using automated tools."
    ],
    "solutionImageText": "Enterprise Web Portal Architecture: Next.js SSR Frontend -> Edge CDN Cache -> Spring Security API Guard -> PostgreSQL Data Store",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "Modern web capabilities",
    "capabilities": [
      {
        "title": "High-Speed Customer Portals",
        "desc": "Secure, authenticated patient or customer interfaces that load instantly to decrease support call center volumes."
      },
      {
        "title": "Real-Time Admin Dashboards",
        "desc": "High-performance analytics hubs displaying corporate margin telemetry, live logistics tracking, and executive reports."
      },
      {
        "title": "Access Control & Security (RBAC)",
        "desc": "Granular role-based user permission layers to protect data integrity and conform to security standards."
      },
      {
        "title": "Headless UI Modernization",
        "desc": "Server-side rendering (SSR) frontends that decouple content management from code, allowing marketing updates without developers."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind enterprise web portals",
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Security",
      "Node.js",
      "Prisma",
      "PostgreSQL"
    ],
    "processKicker": "Development Process",
    "processTitle": "How web development actually runs",
    "process": [
      {
        "title": "UX Prototyping",
        "desc": "Create high-fidelity interactive wireframes to validate user journeys and screen layouts before coding."
      },
      {
        "title": "Secure API Engineering",
        "desc": "Develop the RESTful or GraphQL API layers with strict schema validations and authorization guards."
      },
      {
        "title": "SSR Integration",
        "desc": "Build responsive frontend layouts utilizing server-side rendering for optimal speed and search visibility."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Responsive web portal codebase, interactive Figma mockups, API route specifications, and automated accessibility compliance reports.",
    "benefitsText": "Immediate page load times across global CDNs, secured data protection, cross-device responsiveness, and simplified interface maintenance.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Banking & Finance",
      "Healthcare",
      "Retail",
      "Logistics",
      "Government"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "HIPAA-Compliant Hospital Portal",
      "desc": "How we deployed a secure diagnostic record outpatient portal for MedStar Healthcare.",
      "href": "/case-studies/hipaa-compliant-clinical-portal"
    },
    "relatedProduct": {
      "title": "SmartGRC",
      "desc": "See how security policies, compliance audits, and role access permissions are configured.",
      "href": "/products/smart-grc"
    },
    "faqs": [
      {
        "q": "How do you guarantee high performance and fast load times?",
        "a": "We use Next.js with Server-Side Rendering (SSR), static site generation (SSG), and global CDN caching. This ensures pages load in under a second globally, increasing search visibility and user retention."
      },
      {
        "q": "Is the web platform secure against attacks?",
        "a": "Yes, we integrate security controls from the ground up, including role-based access control (RBAC), OAuth2 authentication, OWASP-compliant data sanitization, and automated dependency vulnerability scanning."
      },
      {
        "q": "Can our marketing team edit page content without developers?",
        "a": "Yes, we design web systems with headless Content Management Systems (CMS) or modular block architectures, enabling non-technical teams to edit copy, update images, and publish pages independently."
      },
      {
        "q": "How do you handle database migration from our old site?",
        "a": "We write automated data migration pipelines that extract, transform, and load (ETL) your legacy user profiles, records, and files into the new secure database, ensuring zero data loss and minimal downtime."
      },
      {
        "q": "What is your testing protocol before launch?",
        "a": "We execute automated integration testing, cross-browser compatibility checks, Lighthouse accessibility audits (WCAG compliance), and manual user acceptance testing (UAT) to guarantee flawless performance."
      },
      {
        "q": "How much does a typical enterprise web project cost?",
        "a": "Enterprise web portals and dashboards typically range from $25,000 to $75,000, depending on the complexity of role-based permissions, database integrations, and custom dashboard components."
      }
    ],
    "ctaTitle": "Ready to build a faster, secure web portal?",
    "ctaText": "Decouple your content from developers, secure your endpoints, and give your customers a sub-second reactive portal.",
    "ctaButton": "Schedule Web Audit"
  },
  "mobile-app-development": {
    "id": "mobile-app-development",
    "title": "Mobile App Development",
    "heroTitle": "Native-performance <em>mobile apps</em> built to work anywhere, offline or online",
    "heroLede": "Frictionless iOS and Android apps powered by Flutter, engineered with local database caching for seamless operations in the field.",
    "challengesOption": "A",
    "narrativeContent": "Field operations frequently suffer from data loss and workflow lockups when mobile apps lose internet connectivity. Maintaining separate native iOS and Android codebases doubles engineering, QA, and app store release cycles. We engineer native-performance, offline-first mobile applications powered by Flutter and secured with local encrypted SQLite databases. Your team gets a single codebase that runs identically on both platforms, captures telemetry and inputs offline without data loss, and syncs automatically when connections return.",
    "challengesKicker": "Operational Bottlenecks",
    "challengesTitle": "Why mobile initiatives fail in the enterprise",
    "challenges": [
      {
        "title": "Codebase duplication",
        "desc": "Maintaining separate native iOS and Android codebases, which doubles engineering, QA, and release management costs."
      },
      {
        "title": "Offline data loss",
        "desc": "Apps that lock up or lose input data when field workers lose cellular connectivity in warehouses or remote zones."
      },
      {
        "title": "Sluggish performance",
        "desc": "Non-native hybrid wrappers that feel unresponsive, leading to low employee adoption and poor user reviews."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We engineer native-speed cross-platform apps",
    "solutionParagraphs": [
      "We write cross-platform mobile apps using Flutter's high-speed GPU rendering engine. Your team benefits from a unified codebase that looks and runs identically on both iOS and Android.",
      "Our apps are designed offline-first. We configure local SQLite databases that capture inputs instantly, resolving sync conflicts in the background when connectivity is restored."
    ],
    "solutionImageText": "Offline-First Mobile Architecture: Flutter UI Engine -> SQLite Local Cache -> Sync Queue Manager -> AWS API Gateway -> Main DB",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "Core mobile capabilities",
    "capabilities": [
      {
        "title": "Flutter Development",
        "desc": "High-performance cross-platform apps built from a single codebase to reduce launch times."
      },
      {
        "title": "Offline Data Storage",
        "desc": "Local database caching ensuring complete app usability in remote regions without cellular service."
      },
      {
        "title": "Location Tracking",
        "desc": "Background GPS tracking, geofencing, and real-time mapping for delivery and field teams."
      },
      {
        "title": "Frictionless Billing",
        "desc": "Secure in-app payments, credit card scanners, and digital signature capture interfaces."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind enterprise mobile apps",
    "techStack": [
      "Flutter",
      "Dart",
      "SQLite",
      "Firebase APIs",
      "App Store Connect",
      "Google Play Console",
      "GitLab CI"
    ],
    "processKicker": "Development Process",
    "processTitle": "How mobile development actually runs",
    "process": [
      {
        "title": "Mobile Journey Mapping",
        "desc": "Define user interactions, offline data requirements, and device sensor triggers."
      },
      {
        "title": "Offline Layer Setup",
        "desc": "Configure local database schemas and write background sync conflict resolution routines."
      },
      {
        "title": "Cross-Platform Build",
        "desc": "Develop the Flutter codebase and run automated tests across virtual and physical devices."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Compiled iOS and Android app bundles, source code, app store submission configurations, and database synchronization schemas.",
    "benefitsText": "40% reduction in development costs, zero field data loss, consistent offline functionality, and app store deployment.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Logistics",
      "Retail & E-commerce",
      "Healthcare",
      "Manufacturing",
      "Startups"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Global Logistics Modernization",
      "desc": "See how telemetry routing and logistics tracking are handled on mobile devices.",
      "href": "/case-studies/global-logistics-modernization"
    },
    "relatedProduct": {
      "title": "Smart Orion",
      "desc": "Unify mobile inventory logging and warehouse dispatch coordinates with the core ERP system.",
      "href": "/products/smart-orion"
    },
    "faqs": [
      {
        "q": "Why do you use Flutter instead of native iOS and Android code?",
        "a": "Flutter allows us to write a single unified codebase that compiles to native GPU-rendered code for both iOS and Android. This reduces development and QA testing costs by 40% while maintaining native responsiveness."
      },
      {
        "q": "How does offline mode function in your mobile apps?",
        "a": "We design apps offline-first. They store inputs locally in a secure SQLite database on the device. When the device reconnects to a network, a background sync manager securely uploads the queues and resolves data conflicts."
      },
      {
        "q": "Will you assist with App Store and Google Play submissions?",
        "a": "Yes, we handle the entire release lifecycle, including configuring App Store Connect and Google Play Console profiles, setting up privacy policies, compiling production bundles, and passing review cycles."
      },
      {
        "q": "How do you ensure user data is protected on the device?",
        "a": "We implement on-device encryption for the SQLite database, secure key storage via Apple Keychain and Android Keystore, and enforce SSL pinning to secure all API network traffic against interception."
      },
      {
        "q": "What is the timeline to develop a custom mobile application?",
        "a": "Typical mobile builds require 10 to 14 weeks. This covers UI/UX prototyping, offline database configuration, API integration, and beta testing rounds via TestFlight and Google Play Console."
      },
      {
        "q": "Do you provide support for OS updates (iOS/Android)?",
        "a": "Yes, our monthly SLA packages cover continuous updates to ensure compatibility with annual iOS and Android operating system upgrades, library patches, and device size changes."
      }
    ],
    "ctaTitle": "Build mobile apps that work offline without data loss.",
    "ctaText": "Equip your field workers or customers with native-speed Flutter apps that run offline and sync databases in the background.",
    "ctaButton": "Discuss Mobile Strategy"
  },
  "ai-intelligent-systems": {
    "id": "ai-intelligent-systems",
    "title": "AI & Intelligent Systems",
    "heroTitle": "Transform business operations with <em>AI powered solutions</em>, automation, and intelligent insights.",
    "heroLede": "Predictive analytics, computer vision, and ML engineering built into the operational core of your business.",
    "challengesOption": "B",
    "challengesKicker": "Business Challenges",
    "challengesTitle": "Why AI initiatives stall before they reach production",
    "challenges": [
      {
        "title": "Pilot purgatory",
        "desc": "Models that prove out in a notebook but never reach a production decision pipeline."
      },
      {
        "title": "No operational ownership",
        "desc": "Data science output with nowhere to land inside existing ERP or GRC workflows."
      },
      {
        "title": "Governance blind spots",
        "desc": "AI systems deployed without explainability, auditability, or model-risk controls."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We engineer AI as core architecture, not a feature add-on",
    "solutionParagraphs": [
      "Every AI engagement starts with where the decision actually gets made — a risk score, a reorder point, a fraud flag — and works backward to the model, the data pipeline, and the governance layer around it.",
      "That's the same discipline behind SmartGRC's risk prediction engine and Smart Crypto Exchange's fraud detection layer — both shipped from real client engagements, not lab experiments."
    ],
    "solutionImageText": "Enterprise ML Architecture: Data Pipeline (Snowflake) -> Training Pipeline (PyTorch) -> Model Register (MLflow) -> Serving API (Kubernetes) -> Operational Application",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "What's included in this practice",
    "capabilities": [
      {
        "title": "Predictive Analytics & Forecasting",
        "desc": "Forecasting models for multi-branch demand and inventory planning that cut procurement waste."
      },
      {
        "title": "MLOps Pipeline Automation",
        "desc": "Continuous training, monitoring, and retraining pipelines that keep models accurate in production."
      },
      {
        "title": "NLP & Enterprise GenAI Assistants",
        "desc": "Internal generative assistants grounded in secure corporate databases to accelerate file retrieval."
      },
      {
        "title": "Explainable AI Risk Audits",
        "desc": "Explainability logging for model parameters and inputs to satisfy regulatory and compliance bodies."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind every AI deployment",
    "techStack": [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "MLflow",
      "Kubernetes",
      "Snowflake",
      "Azure ML"
    ],
    "processKicker": "Development Process",
    "processTitle": "How an AI engagement actually runs",
    "process": [
      {
        "title": "Discover & Scope",
        "desc": "Identify the highest-leverage decision point to target first."
      },
      {
        "title": "Model & Validate",
        "desc": "Build, test, and validate against real operational data — not synthetic benchmarks."
      },
      {
        "title": "Deploy & Govern",
        "desc": "Ship into production with monitoring, retraining, and model-risk governance built in."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Production ML pipeline, model documentation, governance framework, and a trained internal team to own it going forward.",
    "benefitsText": "Faster, more consistent decisions; reduced manual review load; audit-ready model governance from day one.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Banking & Finance",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Government"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Zero-Trust Transaction Ledger",
      "desc": "How bank-grade security models and compliance audits protect institutional ledger mutations.",
      "href": "/case-studies/zero-trust-banking-ledger"
    },
    "relatedProduct": {
      "title": "SmartGRC",
      "desc": "See how risk prediction and security audits are embedded directly into the compliance platform.",
      "href": "/products/smart-grc"
    },
    "faqs": [
      {
        "q": "How do you ensure AI models perform well in real-world production?",
        "a": "We bridge data science and DevOps (MLOps). We construct continuous training and deployment pipelines (MLflow, Kubernetes) to monitor model performance, detect drift, and retrain models on new operational data."
      },
      {
        "q": "What operational platforms can your AI systems integrate with?",
        "a": "We build direct integrations to land AI outputs — like risk scores, demand forecasts, and fraud flags — directly inside your existing workflows (such as Odoo ERP, Salesforce, or compliance databases)."
      },
      {
        "q": "How do you address data privacy and compliance when using AI?",
        "a": "We implement local, private model deployments or secure enterprise API endpoints. Your training data is encrypted and never shared or used to train public models, complying with GDPR and HIPAA."
      },
      {
        "q": "What is the typical timeline to train and deploy a custom model?",
        "a": "A diagnostic prototype requires 4 weeks. Full production integration, including data pipelines, model optimization, MLOps monitoring setup, and security compliance, takes 12 to 16 weeks."
      },
      {
        "q": "Do you use open-source or proprietary models?",
        "a": "We evaluate your needs. We deploy open-source models (like LLaMA, PyTorch modules) for full data ownership and cost control, or integrate proprietary services (Azure OpenAI) where they offer strategic speed."
      },
      {
        "q": "How do you handle model explainability and audit readiness?",
        "a": "We build logging layers that record features, parameters, and inputs for every model inference. This provides complete explainability logs, satisfying internal compliance audits and regulatory bodies."
      }
    ],
    "ctaTitle": "Let's discuss how AI fits into your workflow.",
    "ctaText": "Move beyond theoretical models. Integrate automated risk scores, demand planning, or search assistants into your active applications.",
    "ctaButton": "Schedule AI Consultation"
  },
  "erp-solutions": {
    "id": "erp-solutions",
    "title": "ERP Solutions & Business Automation",
    "heroTitle": "Integrated <em>ERP solutions</em> that simplify processes and improve operational efficiency.",
    "heroLede": "SAP and Odoo implementations customized to bridge sales cash registers, supply chain warehouses, and accounting ledgers in real time.",
    "challengesOption": "A",
    "narrativeContent": "Fragmented business systems create manual data reconciliation loops between regional retail registers, supply chain warehouses, and central finance ledgers. Leadership is left with delayed margin visibility, inventory stockouts, and manual invoicing delays. We implement unified SAP and Odoo ERP ecosystems, building custom API sync middleware that links cash registers, purchase orders, and inventory counts in real time. This streamlines operations, eliminates books reconciliation delay, and provides executive leadership with a central, real-time source of truth.",
    "challengesKicker": "Operational Gaps",
    "challengesTitle": "Why disconnected systems drain enterprise margins",
    "challenges": [
      {
        "title": "Ledger discrepancies",
        "desc": "Siloed departmental databases creating manual verification delays between sales registers and accounting."
      },
      {
        "title": "Inventory stockouts",
        "desc": "Procurement cycles relying on manual warehouse checks, causing delays and lost customer orders."
      },
      {
        "title": "Lack of central visibility",
        "desc": "C-suite executives lacking real-time margins and cash flow tracking across multiple branches."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We bridge departments with unified ERP setups",
    "solutionParagraphs": [
      "We configure, deploy, and customize industry-leading ERP engines like SAP and Odoo. We engineer custom API sync adapters that link retail storefronts directly with central ledgers.",
      "This gives your leadership immediate oversight of stock, cash flow, and human resources. By automating purchasing queues, we eliminate manual reordering lags."
    ],
    "solutionImageText": "Unified ERP Architecture: Multi-Branch POS -> Odoo Core API -> Warehouse Inventory Manager -> General Ledger Integration",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "ERP implementation practice",
    "capabilities": [
      {
        "title": "Custom Module Design",
        "desc": "Develop bespoke functional modules to map Odoo or SAP to your specialized enterprise workflows."
      },
      {
        "title": "Real-Time Ledger Sync",
        "desc": "Automate accounting ledger entry updates instantly from invoice payments or warehouse receipts."
      },
      {
        "title": "Inventory Management",
        "desc": "Multi-warehouse tracking systems with auto-replenishment levels and barcode scanner integrations."
      },
      {
        "title": "Multi-Branch Operations",
        "desc": "Centralized controls for coordinating pricing, logistics, and payroll across regional branches."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind enterprise ERP systems",
    "techStack": [
      "Odoo ERP",
      "SAP Modules",
      "Python",
      "PostgreSQL",
      "Docker",
      "XML-RPC",
      "Spring Boot",
      "Git"
    ],
    "processKicker": "Development Process",
    "processTitle": "How an ERP project actually runs",
    "process": [
      {
        "title": "Process Diagnostics",
        "desc": "Perform department-by-department audits to map all data flows and legacy dependencies."
      },
      {
        "title": "Schema Migration",
        "desc": "Migrate legacy databases, verifying transaction balances and vendor records."
      },
      {
        "title": "Deployment & Training",
        "desc": "Launch modules in stages, conducting comprehensive staff dry-runs to ensure operational readiness."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Fully configured Odoo or SAP system environment, custom module files, automated database migration scripts, and staff training guides.",
    "benefitsText": "Eliminated book reconciliation delays, unified inventory counts across branches, and live corporate margins visibility.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Retail & E-commerce",
      "Logistics",
      "Manufacturing",
      "Banking & Finance",
      "Healthcare"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Omnichannel Checkout Engine",
      "desc": "See how we integrated Vogue Retail's POS terminals with automated warehouse inventory.",
      "href": "/case-studies/omnichannel-retail-checkout"
    },
    "relatedProduct": {
      "title": "Smart Orion",
      "desc": "Discover our proprietary ERP solution built to run multi-branch operations and inventories.",
      "href": "/products/smart-orion"
    },
    "faqs": [
      {
        "q": "Which ERP platforms do you customize and implement?",
        "a": "We specialize in Odoo and SAP implementations. We customize modules, automate transaction flows, and deploy secure on-premise or cloud environments tailored to your specific enterprise operations."
      },
      {
        "q": "How do you prevent data silos during ERP implementation?",
        "a": "We build custom middleware adapters that connect sales registers (POS), logistics hubs, and inventory databases directly with your general accounting ledger, ensuring real-time reconciliation."
      },
      {
        "q": "Can we migrate our legacy spreadsheets and data easily?",
        "a": "Yes, we design custom data transformation scripts to clean and import your historical customer profiles, vendor records, invoices, and product catalogs into the new system without duplication."
      },
      {
        "q": "What is the typical cost and timeline of an ERP project?",
        "a": "ERP customization and rollout typically spans 12 to 20 weeks and ranges from $40,000 to $120,000, depending on the number of departments, custom workflows, and regional branch connections."
      },
      {
        "q": "How do you handle employee training and adoption?",
        "a": "We run hands-on, department-specific training sessions, deliver user guides, and deploy staging environments where your staff can run simulations before the production system goes live."
      },
      {
        "q": "Is the ERP system scalable across multiple branches?",
        "a": "Absolutely. Our solutions support multi-company, multi-currency, and multi-region configurations, allowing you to monitor margins and stock levels across all locations from one dashboard."
      }
    ],
    "ctaTitle": "Ready to unify your business operations?",
    "ctaText": "Link your regional cash registers, inventory logs, and accounting ledgers into a single, real-time source of truth.",
    "ctaButton": "Request ERP Assessment"
  },
  "e-commerce-solutions": {
    "id": "e-commerce-solutions",
    "title": "E-Commerce Solutions",
    "heroTitle": "<em>E-commerce</em> built for conversion and instant scale",
    "heroLede": "Headless commerce storefronts, custom checkout flows, and payment API integrations built to handle high promotional traffic without lag.",
    "challengesOption": "B",
    "challengesKicker": "Conversion Blockers",
    "challengesTitle": "Why generic storefront templates lose sales",
    "challenges": [
      {
        "title": "Slow checkout loops",
        "desc": "Clunky multi-step checkouts that cause customers to abandon shopping carts and decrease conversions."
      },
      {
        "title": "Double-selling errors",
        "desc": "Out-of-sync store inventories that lead to orders for out-of-stock items, causing refunds and complaints."
      },
      {
        "title": "Branding limitations",
        "desc": "Standard template designs that make it difficult to project premium corporate identity and product details."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We build headless, lightning-fast storefronts",
    "solutionParagraphs": [
      "We separate the customer-facing frontend from the backend e-commerce engine (headless commerce). By loading interfaces as static web builds, we achieve sub-second speeds.",
      "We build direct integrations with Stripe, regional banks, and warehouse inventories, ensuring stock availability checks occur instantly on checkout clicks."
    ],
    "solutionImageText": "Headless E-Commerce System: React/Next.js Storefront -> CDN Edge -> GraphQL API Gateway -> Shopify Admin Engine -> ERP Stock Sync",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "E-commerce capabilities",
    "capabilities": [
      {
        "title": "Headless Storefront Implementations",
        "desc": "Decoupled web frontends loading statically under 0.8s, driving checkout conversion rates by 25%."
      },
      {
        "title": "PCI-Compliant Billing Systems",
        "desc": "Secure integration with Stripe, multi-currency gateways, and recurring subscription profiles to prevent chargebacks."
      },
      {
        "title": "Real-Time Inventory Synchronization",
        "desc": "Webhooks that check warehouse stock instantly during purchase clicks to prevent double-selling errors."
      },
      {
        "title": "Multi-Vendor Marketplace Systems",
        "desc": "Architecting platforms with automated seller dashboards, commissions, and approval workflows."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind digital commerce storefronts",
    "techStack": [
      "Shopify API",
      "WooCommerce",
      "Next.js",
      "React",
      "Node.js",
      "Stripe API",
      "GraphQL",
      "Redis"
    ],
    "processKicker": "Development Process",
    "processTitle": "How commerce setups run",
    "process": [
      {
        "title": "Conversion Audit",
        "desc": "Analyze checkout drop-off paths and document inventory sync bottlenecks."
      },
      {
        "title": "Interface Design",
        "desc": "Design a responsive custom checkout layout focused on minimizing customer steps."
      },
      {
        "title": "Gateway Integration",
        "desc": "Develop payment API routes and connect inventory sync hooks to warehousing endpoints."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Headless e-commerce frontend repository, custom API gateway configuration code, Stripe payment profiles, and inventory automated sync adapters.",
    "benefitsText": "32% average conversion lift, eliminated inventory oversell errors, and instant page speeds across desktop and mobile storefronts.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Retail",
      "Logistics",
      "Startups",
      "Manufacturing",
      "Banking & Finance"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Omnichannel Checkout Engine",
      "desc": "Learn how we built Vogue Retail's real-time checkout cache to handle 250k sessions.",
      "href": "/case-studies/omnichannel-retail-checkout"
    },
    "relatedProduct": {
      "title": "Smart Crypto Exchange",
      "desc": "Explore our institutional trading platform engineered for high-throughput transactional load.",
      "href": "/products/smart-crypto-exchange"
    },
    "faqs": [
      {
        "q": "What is headless commerce and why do you build it?",
        "a": "Headless commerce separates the backend database (like Shopify or WooCommerce) from the customer-facing frontend. By building a custom Next.js frontend, we load store interfaces instantly, lifting conversions by 20-30%."
      },
      {
        "q": "How do you prevent double-selling and stock sync issues?",
        "a": "We build real-time inventory Webhooks and synchronization adapters that check stock databases instantly when a customer clicks checkout, preventing orders for out-of-stock items."
      },
      {
        "q": "Which payment gateways do you support?",
        "a": "We integrate with Stripe, PayPal, regional bank payment APIs, and custom subscription billing frameworks. All routes use secure, PCI-DSS compliant pipelines to protect customer credit card profiles."
      },
      {
        "q": "Can your e-commerce systems handle flash sales and high traffic?",
        "a": "Yes, our headless storefronts are deployed to global CDN edge servers, serving traffic statically. The dynamic APIs are protected by rate limiters and database cache layers to prevent checkout failures under high load."
      },
      {
        "q": "How long does a headless e-commerce project take?",
        "a": "Headless storefront developments typically take 10 to 14 weeks. This covers UI designs, custom checkout flows, product inventory mappings, and payment gateway security testing."
      },
      {
        "q": "Do you integrate with third-party logistics (3PL) providers?",
        "a": "Yes, we connect order management systems to logistics APIs (like FedEx, DHL, or local shipping warehouses) to automate label generation, tracking codes, and status updates."
      }
    ],
    "ctaTitle": "Overcome cart abandonment and inventory sync errors.",
    "ctaText": "Deploy headless commerce designed for high transactional speeds, secure billing, and seamless multi-channel logistics.",
    "ctaButton": "Discuss Storefront Scalability"
  },
  "data-center-development": {
    "id": "data-center-development",
    "title": "Data Center Development & IT Infrastructure",
    "heroTitle": "Designing secure, scalable, and resilient infrastructure for <em>modern enterprises</em>.",
    "heroLede": "Consultancy and planning for enterprise networks, container setups, and disaster recovery strategies that protect data sovereignty.",
    "challengesOption": "A",
    "narrativeContent": "Relying entirely on legacy on-premise physical servers leads to high hardware maintenance costs, resource scaling bottlenecks, and single-point-of-failure risks. However, moving completely to the public cloud can trigger data sovereignty compliance violations and uncontrolled monthly hosting costs. We design secure, high-availability hybrid clouds that bridge secure private server clusters (for regulatory compliance) with elastic public cloud nodes (for front-end customer portals), securing operations with automated failover replication.",
    "challengesKicker": "Infrastructure Risk",
    "challengesTitle": "Why legacy servers restrict corporate growth",
    "challenges": [
      {
        "title": "High maintenance fees",
        "desc": "On-premise physical servers that require expensive maintenance, power, and engineering overhead."
      },
      {
        "title": "Single point of failure",
        "desc": "Lack of real-time server replication, risking data corruption and hours of system downtime during power outages."
      },
      {
        "title": "Data sovereignty issues",
        "desc": "Failing to meet localized storage regulations, exposing the enterprise to compliance fines."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We plan high-availability hybrid clouds",
    "solutionParagraphs": [
      "We design networks that blend secure on-premise servers (for compliance) with scalable public cloud nodes (for web systems). This ensures you have local data controls with cloud elasticity.",
      "We configure automated load balancing, container scaling via Kubernetes, and real-time database replication to secure operations against unexpected server failures."
    ],
    "solutionImageText": "Hybrid Infrastructure Layout: Encrypted VPN Tunnel -> On-Premise Secure database (Sovereignty) <-> AWS/Azure Nodes (Scalable frontend portals)",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "Infrastructure planning practice",
    "capabilities": [
      {
        "title": "Server Layout Planning",
        "desc": "Architectural blueprints for secure on-premise server configurations and local network nodes."
      },
      {
        "title": "Cloud Migrations",
        "desc": "Staged plans to migrate databases from legacy systems to virtualized cloud containers."
      },
      {
        "title": "High-Availability Networks",
        "desc": "Designing load-balanced networks with automated failovers to prevent system downtime."
      },
      {
        "title": "Disaster Recovery",
        "desc": "Automated real-time database replication and backup archives stored in compliance zones."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The stack behind robust infrastructures",
    "techStack": [
      "Docker",
      "Kubernetes",
      "Nginx",
      "Linux Containers",
      "AWS Console",
      "Azure Dev Tools",
      "IPsec Tunnels",
      "Bash"
    ],
    "processKicker": "Development Process",
    "processTitle": "How infrastructure engineering runs",
    "process": [
      {
        "title": "Infrastructure Audit",
        "desc": "Scan physical hardware, check network latency, and audit security firewall rules."
      },
      {
        "title": "Topology Blueprinting",
        "desc": "Design container layouts, access control policies, and virtual cloud network limits."
      },
      {
        "title": "Staged Database Sync",
        "desc": "Perform incremental database migrations, testing fallback procedures before final cutover."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Network topology diagrams, Kubernetes deployment configuration scripts, cloud budget projections, and automated recovery protocol guides.",
    "benefitsText": "Zero operational downtime, guaranteed compliance with localized data sovereignty regulations, and reduced hardware upkeep expenses.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Banking & Finance",
      "Healthcare",
      "Government",
      "Logistics",
      "Education"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "Zero-Trust Transaction Ledger",
      "desc": "Read how bank-grade database security compliance and SEC audit trails were deployed.",
      "href": "/case-studies/zero-trust-banking-ledger"
    },
    "relatedProduct": {
      "title": "SmartGRC",
      "desc": "See how we audit physical and digital network assets for compliance frameworks.",
      "href": "/products/smart-grc"
    },
    "faqs": [
      {
        "q": "How do you balance cloud deployment with on-premise compliance?",
        "a": "We design hybrid cloud topologies. We store sensitive customer databases on secure on-premise private servers (for data sovereignty) and run customer portals on public cloud instances (for scale and speed)."
      },
      {
        "q": "How do you handle disaster recovery and failovers?",
        "a": "We construct real-time database replication clusters across multi-region server zones. If a primary server fails, automated load balancers instantly redirect traffic to the replica node, ensuring zero downtime."
      },
      {
        "q": "What containerization and scaling tools do you use?",
        "a": "We containerize systems with Docker and orchestrate deployment with Kubernetes. This enables automated scaling of server instances based on user traffic, optimizing server costs."
      },
      {
        "q": "How do you ensure data is protected in transit and at rest?",
        "a": "We configure end-to-end encryption using AES-256 for databases and enforce strict TLS 1.3 / IPsec tunnels for all data traveling between private databases and public cloud nodes."
      },
      {
        "q": "What is the typical timeline for an infrastructure overhaul?",
        "a": "Auditing and blueprinting require 4 weeks. Staged network migrations, replication testing, and final zero-downtime cutover typically take 12 to 18 weeks, minimizing risk to daily operations."
      },
      {
        "q": "Can you help optimize our monthly cloud hosting bills?",
        "a": "Yes, we run optimization diagnostics to identify over-provisioned servers, configure auto-scaling policies, set up storage tiering, and clean up orphan resources, typically cutting cloud bills by 30%."
      }
    ],
    "ctaTitle": "Build infrastructure ready for long-term growth.",
    "ctaText": "Balance cloud scalability with private database compliance. Design high-availability hybrid clouds with zero failover downtime.",
    "ctaButton": "Request Infrastructure Audit"
  },
  "it-consultancy": {
    "id": "it-consultancy",
    "title": "IT Consultancy",
    "heroTitle": "Enterprise <em>IT consulting</em> services that help businesses achieve digital transformation.",
    "heroLede": "Documenting codebase quality, auditing security vulnerabilities, and designing digital strategies that align technical investments with business growth.",
    "challengesOption": "B",
    "challengesKicker": "Strategic Blindspots",
    "challengesTitle": "Why software investments fall short of executive goals",
    "challenges": [
      {
        "title": "Stalled digital projects",
        "desc": "IT initiatives that run over budget or halt because technical requirements do not map to real business KPIs."
      },
      {
        "title": "Accumulated tech debt",
        "desc": "Incompatible legacy software frameworks that slow down the development of new customer features."
      },
      {
        "title": "Regulatory compliance risks",
        "desc": "Undocumented database endpoints that violate data protection laws, risking audit failures."
      }
    ],
    "solutionKicker": "Our Solution",
    "solutionTitle": "We align software architectures with business outcomes",
    "solutionParagraphs": [
      "We audit your systems, check database performance, and analyze codebase dependency trees. This allows us to document technical debt and outline risks before you invest.",
      "We deliver digital transformation blueprints that split upgrades into manageable phases. This ensures you mitigate security risks and achieve ROI at every step."
    ],
    "solutionImageText": "Digital Transformation Audit Process: Code Audits -> Database Performance Scans -> Technical Debt Report -> Phase Release Roadmap",
    "capabilitiesKicker": "Capabilities",
    "capabilitiesTitle": "Consultancy practice areas",
    "capabilities": [
      {
        "title": "Phased Digital Blueprints",
        "desc": "Step-by-step technological upgrade roadmaps that align development milestones with business ROI."
      },
      {
        "title": "Code Quality & Dependency Audits",
        "desc": "Deep codebase scans to identify security vulnerabilities, database load leaks, and legacy technical debt."
      },
      {
        "title": "System Architecture & Index Reviews",
        "desc": "Diagnostics on database configuration, server bottlenecks, and network latency to optimize speed."
      },
      {
        "title": "Regulatory Compliance Advisory",
        "desc": "Security checks to ensure databases, backups, and user portals meet GDPR, HIPAA, and ISO regulations."
      }
    ],
    "techStackKicker": "Technologies Used",
    "techStackTitle": "The frameworks and standards behind our advice",
    "techStack": [
      "COBIT Framework",
      "ITIL Standards",
      "Systems Mapping Tools",
      "Security Auditing Suites",
      "Technical Debt Analysis",
      "ISO 27001"
    ],
    "processKicker": "Development Process",
    "processTitle": "How consulting engagements actually run",
    "process": [
      {
        "title": "Operational Diagnostic",
        "desc": "Interview department heads to identify workflow bottlenecks and map current software touchpoints."
      },
      {
        "title": "Technical Code Audit",
        "desc": "Scan databases and repository logs to find performance bottlenecks and security issues."
      },
      {
        "title": "Roadmap Presentation",
        "desc": "Present detailed findings along with a step-by-step digital upgrade plan."
      }
    ],
    "deliverablesKicker": "Deliverables & Benefits",
    "deliverablesTitle": "What you walk away with",
    "deliverablesText": "Technical debt assessment, security vulnerability log, systems dependency map, and a phased technology upgrade roadmap.",
    "benefitsText": "40% average reduction in development delays, clear technology budgets, and low-risk modernization of legacy systems.",
    "industriesKicker": "Industries Served",
    "industriesTitle": "Where this practice is most active",
    "industries": [
      "Government",
      "Banking & Finance",
      "Healthcare",
      "Manufacturing",
      "Logistics"
    ],
    "relatedKicker": "Related Case Studies & Products",
    "relatedTitle": "See it in production",
    "relatedCaseStudy": {
      "title": "HIPAA-Compliant Hospital Portal",
      "desc": "See how we audited and structured outpatient diagnostics portals for clinical compliance.",
      "href": "/case-studies/hipaa-compliant-clinical-portal"
    },
    "relatedProduct": {
      "title": "SmartGRC",
      "desc": "Discover how our GRC platform automates compliance policies and tracking across departments.",
      "href": "/products/smart-grc"
    },
    "faqs": [
      {
        "q": "What does an IT diagnostic audit cover?",
        "a": "We audit your codebase security, check database queries, scan dependencies for vulnerabilities, and interview department heads to identify legacy technical debt and workflow bottlenecks."
      },
      {
        "q": "How do you measure the ROI of your technology recommendations?",
        "a": "We align all code updates with business KPIs, such as page load speed, compliance workload reduction, procurement transaction speed, and maintenance cost savings, which we track in phased roadmaps."
      },
      {
        "q": "Will you write a technology blueprint for our developers to build?",
        "a": "Yes, we deliver detailed system architecture blueprints, entity diagrams, API interface contracts, and task breakdowns that your internal engineering team can execute directly."
      },
      {
        "q": "How do you help us prepare for security compliance audits?",
        "a": "We run mock compliance audits against standards like SOC 2, HIPAA, ISO 27001, and GDPR. We document security gaps, database endpoints, and role permissions, providing a clear remediation path."
      },
      {
        "q": "What is the typical duration of a consulting engagement?",
        "a": "Basic codebase audits take 3 to 4 weeks. Full digital transformation advisory, legacy system diagnostic, and multi-year upgrade roadmap planning typically run 8 to 12 weeks."
      },
      {
        "q": "How do you coordinate with our executive management team?",
        "a": "We deliver executive-ready technical debt reports, risk matrices, and budget projections, translating complex system architectures into operational costs and timelines for C-level decision makers."
      }
    ],
    "ctaTitle": "Align your software architecture with business outcomes.",
    "ctaText": "Audit your legacy systems, identify hidden technical debt, and plan a phased modernization roadmap with guaranteed ROI.",
    "ctaButton": "Schedule Diagnostic Workshop"
  }
};

interface ServiceDetailProps {
  id: string;
}

export default function ServiceDetail({ id }: ServiceDetailProps) {
  const service = servicesDataMap[id];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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

        /* Cohesive Light Flow */
        .section {
          padding: 96px 0;
          background-color: ${T.white};
          color: ${T.textPrimaryLight};
          border-bottom: 1px solid rgba(11, 15, 20, 0.04);
        }
        
        /* DARK section for technical solution & architecture */
        .section-alt {
          padding: 96px 0;
          background-color: ${T.ink};
          color: ${T.white};
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
        }
        .section-alt h2 {
          color: ${T.white} !important;
        }
        
        /* DARK section for related outcomes & case studies */
        .section-outcomes {
          padding: 96px 0;
          background-color: ${T.ink};
          color: ${T.white};
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .section-outcomes h2 {
          color: ${T.white} !important;
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
        .section-alt .kicker, .section-outcomes .kicker {
          color: ${T.tealLight} !important;
        }

        /* Hero Section (Dark Theme preserved as in other pages) */
        .hero-dark {
          position: relative;
          background-color: ${T.ink};
          padding: 160px 0 96px 0;
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
        .hero-image-container {
          margin-top: 56px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: rgba(255, 255, 255, 0.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .hero-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-image-container:hover .hero-image {
          transform: scale(1.015);
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

        /* Split layouts */
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
        .section-alt .side-title, .section-outcomes .side-title {
          color: ${T.tealLight};
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

        /* Option A: Narrative Format Styles */
        .narrative-block {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .narrative-block {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        .narrative-highlight {
          font-family: ${T.sans};
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: ${T.textPrimaryLight};
          margin-top: 8px;
        }
        .narrative-text {
          font-size: 16px;
          line-height: 1.75;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }

        /* Option B: Capability Grid Styles */
        .capabilities-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .capabilities-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 640px) {
          .capabilities-list {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .capability-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px 0;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 0;
          transition: all 0.25s ease;
        }
        .capability-card:hover {
          border-bottom-color: ${T.teal};
          transform: translateX(4px);
        }
        .capability-icon {
          color: ${T.teal};
          margin-top: 3px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .capability-card:hover .capability-icon {
          transform: scale(1.15);
        }
        .capability-info h4 {
          font-size: 16px;
          font-weight: 700;
          color: ${T.textPrimaryLight};
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .capability-info p {
          font-size: 13.5px;
          line-height: 1.6;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }

        /* Related Item Card (light-themed offset in dark section) */
        .card-dark {
          background-color: rgba(255, 255, 255, 0.012);
          border: none;
          border-left: 2px solid rgba(255, 255, 255, 0.08);
          color: ${T.white};
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0;
          padding: 26px 30px;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }
        .card-dark h3 {
          color: ${T.white};
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .card-dark p {
          color: ${T.textOnDarkSecondary};
          margin-bottom: 20px;
          font-size: 13.5px;
          line-height: 1.6;
          font-weight: 300;
        }
        .card-dark:hover {
          border-left-color: ${T.tealLight};
          transform: translateX(4px);
          background-color: rgba(255, 255, 255, 0.025);
        }
        .card-link {
          font-size: 13px;
          font-weight: 600;
          color: ${T.tealLight};
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          transition: gap 0.2s ease;
        }
        .card-dark:hover .card-link {
          gap: 10px;
        }

        /* Interactive Schematic block & Image loader */
        .imgblock {
          position: relative;
          background-color: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 0;
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
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
          color: ${T.tealLight};
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 16px;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .badges span:hover {
          transform: translateY(-2px);
          border-color: ${T.tealLight};
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
        }

        /* Timeline Process */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .timeline-step {
          display: flex;
          gap: 24px;
          position: relative;
          padding: 24px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .timeline-step:last-child {
          border-bottom: none;
        }
        .step-number {
          font-family: ${T.sans};
          font-size: 12px;
          font-weight: 800;
          color: ${T.teal};
          background-color: transparent;
          border: none;
          width: auto;
          height: auto;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          z-index: 2;
          padding-top: 3px;
          transition: transform 0.25s ease;
        }
        .timeline-step:hover .step-number {
          transform: scale(1.15);
          color: ${T.tealLight};
        }
        .step-info h4 {
          font-size: 17px;
          font-weight: 700;
          color: ${T.textPrimaryLight};
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .step-info p {
          font-size: 13.5px;
          line-height: 1.6;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }

        /* FAQ Section styles */
        .faq-section {
          padding: 96px 0;
          background-color: ${T.white};
          color: ${T.textPrimaryLight};
          border-bottom: 1px solid rgba(11, 15, 20, 0.04);
        }
        .faq-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          border: 1px solid rgba(11, 15, 20, 0.06);
          border-radius: 12px;
          background-color: #FFFFFF;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .faq-item.is-open {
          border-color: ${T.teal};
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.04);
        }
        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          outline: none;
        }
        .faq-question {
          font-size: 16px;
          font-weight: 600;
          color: ${T.textPrimaryLight};
        }
        .faq-icon-wrap {
          color: ${T.teal};
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .faq-answer-wrap {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 24px 20px 24px;
          font-size: 14.5px;
          line-height: 1.65;
          color: ${T.textSecondaryLight};
          font-weight: 300;
        }

        /* Custom Service-Specific CTA styles */
        .cta-section {
          padding: 104px 0;
          background-color: ${T.ink};
          color: ${T.white};
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: "";
          position: absolute;
          bottom: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: ${T.glow};
          filter: blur(160px);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.4;
        }
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .cta-content h2 {
          font-family: ${T.sans};
          font-size: clamp(28px, 3.8vw, 42px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 18px;
        }
        .cta-content p {
          font-size: 16px;
          line-height: 1.6;
          color: ${T.textOnDarkSecondary};
          font-weight: 300;
          margin-bottom: 32px;
        }
      `}</style>

      <Navigation />

      {/* 1. Hero Section (DARK background) */}
      <section className="hero-dark">
        {/* Background Image overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/secondary-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.20,
          pointerEvents: "none",
          zIndex: 1
        }} />
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

      {/* 2. Challenges & Capabilities Section (LIGHT background - Option A or Option B) */}
      <section className="section" id="overview">
        <div className="wrap">
          {service.challengesOption === "A" ? (
            <Reveal>
              <div className="narrative-block">
                <div className="narrative-left">
                  <span className="side-title">{service.challengesKicker}</span>
                  <h3 className="narrative-highlight">{service.challengesTitle}</h3>
                </div>
                <div className="narrative-right">
                  <p className="narrative-text">{service.narrativeContent}</p>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="capabilities-grid">
                <div className="capabilities-header">
                  <span className="side-title">{service.challengesKicker}</span>
                  <h3 className="narrative-highlight">{service.challengesTitle}</h3>
                  <p style={{ fontSize: "14.5px", color: T.textSecondaryLight, marginTop: 12, fontWeight: 300 }}>
                    What is included inside this practice area to guarantee deployment.
                  </p>
                </div>
                <div className="capabilities-list">
                  {service.capabilities.map((item, idx) => (
                    <div className="capability-card" key={idx}>
                      <div className="capability-icon">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="capability-info">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 3. Solutions, Tech Stack & Architecture Section (DARK background - Highly Technical) */}
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
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: T.white, marginBottom: 16 }}>
                    {service.solutionTitle}
                  </h3>
                  {service.solutionParagraphs.map((para, idx) => (
                    <p key={idx} style={{ marginTop: idx > 0 ? "14px" : "0", color: T.textOnDarkSecondary, fontSize: "14.5px", lineHeight: 1.65, fontWeight: 300 }}>
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
              <div className="imgblock">
                <img
                  src={`/images/services/${service.id}.png`}
                  alt={`${service.title} architectural schematic`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Delivery Process & Deliverables Section (LIGHT background - Human/Execution) */}
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

            {/* Right Column: Deliverables vs. Benefits Paragraphs */}
            <Reveal delay={0.08}>
              <div className="side-group" style={{ justifyContent: "center" }}>
                <div>
                  <span className="side-title">{service.deliverablesTitle}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 8 }}>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: T.textPrimaryLight, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T.teal, display: "inline-block" }} />
                      Deliverables
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.65, color: T.textSecondaryLight, fontWeight: 300 }}>
                      {service.deliverablesText}
                    </p>
                  </div>
                  
                  <div style={{ width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, 0.06)" }} />

                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: T.textPrimaryLight, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T.tealLight, display: "inline-block" }} />
                      Expected Benefits
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.65, color: T.textSecondaryLight, fontWeight: 300 }}>
                      {service.benefitsText}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Industries & Related Outcomes (DARK background) */}
      <section className="section-outcomes">
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
                    <span key={ind} style={{ color: T.tealLight, borderColor: "rgba(34, 197, 94, 0.25)" }}>{ind}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                <Link href={service.relatedCaseStudy.href} className="card-dark">
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>Case Study</div>
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
                    <div style={{ fontSize: 9, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>Platform Product</div>
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

      {/* 6. FAQs Section (LIGHT background) */}
      <section className="faq-section">
        <div className="wrap">
          <Reveal>
            <div className="section-head" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px auto" }}>
              <div className="kicker">FAQ</div>
              <h2>Common Inquiries & Readiness</h2>
            </div>
          </Reveal>

          <div className="faq-list">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                    <span className="faq-question">{faq.q}</span>
                    <span className="faq-icon-wrap" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="faq-answer-wrap"
                      >
                        <div className="faq-answer">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Service-Specific CTA Section (DARK background) */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{service.ctaTitle}</h2>
          <p>{service.ctaText}</p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "14px 36px", fontSize: "15px" }}>
            {service.ctaButton}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
