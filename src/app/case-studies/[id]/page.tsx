"use client";

import React, { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sun, Moon } from "lucide-react";

interface CaseStudyEnriched {
  id: string;
  numStr: string;
  domain: string;
  tags: string[];
  title: string;
  subtitle: string;
  specs: { label: string; value: string }[];
  gradient: string;
  textColor: string;
  icon: string;
  overviewP1: string;
  overviewP2: string;
  problemQuestion: string;
  problemCards: { title: string; desc: string }[];
  businessObjectiveQuestion: string;
  businessMetrics: { value: string; label: string; desc: string }[];
  processTitle1: string;
  processDesc1: string;
  processTitle2: string;
  processDesc2: string;
  processTitle3: string;
  processDesc3: string;
  finalUiTitle: string;
  finalUiDescription: string;
  placeholders: {
    hero: string;
    ia: string;
    wire1: string;
    wire2: string;
    ui1: string;
    ui2: string;
    ui3: string;
  };
  outcomeMetrics: { value: string; label: string }[];
  outcomeQuote: string;
  outcomeQuoteAuthor: string;
  nextCaseName: string;
  nextCaseUrl: string;
}

// Reusable Image Slot Placeholder Component matching the reference UI exactly
function ImageSlot({ placeholder, height }: { placeholder: string; height: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: height,
        backgroundColor: "rgba(22, 20, 15, 0.04)",
        border: "1.5px dashed rgba(22, 20, 15, 0.15)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(22, 20, 15, 0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "0.85rem",
          color: "#6B665C",
          maxWidth: "360px",
          lineHeight: 1.4,
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}

const caseStudiesData: Record<string, CaseStudyEnriched> = {
  // Case 1: KOVA
  "kova": {
    id: "kova",
    numStr: "01/05",
    domain: "Generative AI SaaS",
    tags: ["Generative AI", "Agents & MCP", "2025"],
    title: "KOVA AI Tool & Agent Platform",
    subtitle: "A comprehensive conversational AI workspace where users can chat about everything, create custom skills, orchestrate autonomous AI agents, and register Model Context Protocol (MCP) integrations.",
    specs: [
      { label: "My role", value: "Senior UI/UX Designer" },
      { label: "Timeline", value: "12 Months" },
      { label: "Platform", value: "Web & Desktop App (AI SaaS)" },
      { label: "Tools", value: "Figma · FigJam · LLM UI Patterns" },
    ],
    gradient: "linear-gradient(135deg, #16140F, #3A362C)",
    textColor: "#F2EEE6",
    icon: "🤖",
    overviewP1: "Conventional AI platforms locked users into static chat columns, offering no native mechanisms to build custom task skills, configure complex agent behaviors, or sync local data sources.",
    overviewP2: "I designed KOVA: a role-first generative AI workspace enabling developers and designers to build prompt presets, configure autonomous multi-agent pipelines, and establish custom MCP servers under a unified chat sandbox.",
    problemQuestion: "How do you design a flexible canvas that lets users manage basic chats, customize complex AI skills, and audit multi-agent interactions without breaking conversational flow?",
    problemCards: [
      { title: "Chat & Context Sync", desc: "Designing context selector banners so users can verify active directories and system rules instantly during a conversation." },
      { title: "Agent Orchestration", desc: "Visualizing automated agent tasks and data retrieval workflows in a scannable, non-intrusive sidebar panel." },
      { title: "MCP Server Integration", desc: "Creating simple connection tables to register Model Context Protocol (MCP) servers and verify database read/write permissions." },
    ],
    businessObjectiveQuestion: "Build an extensible AI tool that drives user retention through custom skills creation and simplifies complex developer integrations.",
    businessMetrics: [
      { value: "40%", label: "Task Preset Speedup", desc: "Accelerating execution through custom prompt presets and quick-trigger filters." },
      { value: "-30%", label: "MCP Setup Debugging", desc: "Reducing average developer setup and testing times for local context servers." },
      { value: "96%", label: "Agent Visual Auditing", desc: "Ensuring high clarity on automated task loops and prompt token logs." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Restructured KOVA's complex agent routing and MCP server variables under a flat, navigation panel. Mapped user paths to let designers toggle context, prompt templates, and active tools directly in the chat input area.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched low-fidelity wires to test layout patterns and alert notifications during multi-agent processes. Checked column structures before final design styling to ensure agent logs don't conflict with text inputs on split-viewports.",
    processTitle3: "Prototyping & AI Agents Integration",
    processDesc3: "Built interactive click-through prototypes to test prompt creation flows and skills config sheets. Testing these patterns validated user trust in prompt engineering feedback, driving high onboarding success rates in week one.",
    finalUiTitle: "Brand Adherence & Local Component Libraries",
    finalUiDescription: "Developed a dark-themed visual system with a local component kit built from scratch (covering chat bubbles, token counters, file attachments, and code snippet cards) to maintain visual consistency across all AI sandboxes.",
    placeholders: {
      hero: "Drop the KOVA AI hero mockup here (chat interface & agents manager)",
      ia: "Drop KOVA agent orchestration and MCP sync flow here",
      wire1: "Drop mobile wireframes — prompt presets catalog",
      wire2: "Drop wireframes — MCP connection settings",
      ui1: "Drop final UI — conversational chat panel",
      ui2: "Drop final UI — skills and agent editor view",
      ui3: "Drop final UI — MCP server list and logs audit",
    },
    outcomeMetrics: [
      { value: "40%", label: "Task execution speedup through custom prompt presets." },
      { value: "-30%", label: "Reduction in average developer setup times for MCP servers." },
      { value: "96%", label: "User onboarding success rates for custom skills creation." },
    ],
    outcomeQuote: "By modularizing prompts, agents, and MCP integrations into a unified chat interface, KOVA transforms conversational AI from a generic chatbot into an active, context-aware developer playground.",
    outcomeQuoteAuthor: "Key Takeaway: Designing Extensible Sandboxes for Agentic Workflows",
    nextCaseName: "Osprey: FUSO Fleet & HAWK",
    nextCaseUrl: "fuso-hawk",
  },

  // Case 2: FUSO (Osprey)
  "fuso-hawk": {
    id: "fuso-hawk",
    numStr: "02/05",
    domain: "Enterprise SaaS",
    tags: ["Enterprise SaaS", "RBAC", "AI Chatbot UX", "B2B Portal"],
    title: "Osprey: FUSO Fleet & HAWK",
    subtitle: "A high-performance real-time telemetry dashboard and conversational AI assistant designed for fleet managers to monitor diagnostic logs and dispatcher requests.",
    specs: [
      { label: "My role", value: "Senior UI/UX Designer" },
      { label: "Timeline", value: "2025 – Present" },
      { label: "Platform", value: "Responsive Web App (SaaS)" },
      { label: "Tools", value: "Figma · FigJam · Figma Make" },
    ],
    gradient: "linear-gradient(135deg, #BF4B0A, #E07B3C)",
    textColor: "#F2EEE6",
    icon: "⚙",
    overviewP1: "Mitsubishi FUSO's dealer network logged diagnostics on fragmented spreadsheets and emails. Technicians lost time logging repairs, and managers had no live visibility into service queues.",
    overviewP2: "I designed the role-based Field Fix Portal MVP and led UX for the HAWK AI-chatbot HR portal, streamlining access control and field reporting operations under a single, cohesive design system.",
    problemQuestion: "How do you build one tool for a technician under a truck with greasy hands, a manager juggling twelve service centers, and an admin responsible for who sees what?",
    problemCards: [
      { title: "Technician Pain Point", desc: "Forced to log repair issues on paper while wearing heavy gloves, leading to lost logs and unreadable field check notes." },
      { title: "Manager Friction", desc: "No visibility into hoist diagnostic queues, leading to scheduling bottlenecks and service center delays." },
      { title: "Admin Overhead", desc: "Auditing compliance files manually by cross-checking separate directories, slowing audit times to 12 days." },
    ],
    businessObjectiveQuestion: "Digitize operations to accelerate diagnostics, automate compliance auditing, and streamline HR communication.",
    businessMetrics: [
      { value: "-30%", label: "Diagnostics Wait Times", desc: "Accelerating mechanic checklist submissions and hoist scheduling workflows." },
      { value: "60%", label: "Automated Auditing", desc: "Utilizing AI confidence metrics to verify routine warranty claims and checks." },
      { value: "-40%", label: "HR Admin Workload", desc: "Automating routine policy query resolutions via conversational workflows." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Took FUSO's complex, disjointed spreadsheets and manual checklist process and restructured it under a streamlined, task-focused information architecture. Mapped role-specific dashboards that group diagnostic logs by technical relevance, reducing cognitive friction and ensuring mechanics only see choices critical to their current task.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Used low-fidelity wireframing as a deliberate checkpoint to map out edge cases—such as patchy connection sync failures and access permission blocks—and validate layout logic with stakeholders. This ensured the structural hierarchy and navigation flows were solid before committing to high-fidelity visual design.",
    processTitle3: "Prototyping & AI Guardrails Verification",
    processDesc3: "Built interactive click-through prototypes to test conversational dialogue nodes and HR leave approval confirmation guardrails. Prototyping with Figma Make compressed iteration sprints, allowing us to evaluate and refine prompt explainability logs in days rather than weeks.",
    finalUiTitle: "Cohesive Identity & Local Component Libraries",
    finalUiDescription: "Adhered strictly to FUSO's corporate brand guidelines, maintaining their precise typographic hierarchies and signature brand accents. Lacking a pre-existing enterprise design system, I developed a custom local UI kit and modular component library from scratch (covering input fields, table structures, and status banners). This ensured visual and behavioral consistency across the technician, manager, and admin dashboards, accelerating developer handoff.",
    placeholders: {
      hero: "Drop the FUSO hero mockup here (dashboard overview)",
      ia: "Drop IA diagram / user flow map here",
      wire1: "Drop wireframes — technician flow",
      wire2: "Drop wireframes — error & offline states",
      ui1: "Drop final UI — manager dashboard",
      ui2: "Drop final UI — mobile technician view",
      ui3: "Drop final UI — HAWK chatbot conversation",
    },
    outcomeMetrics: [
      { value: "6 wks", label: "Design-to-handoff cycle for the MVP, without sacrificing system rigor." },
      { value: "3 roles", label: "One design language serving technician, manager, and admin — each with its own task-first flow." },
      { value: "1 system", label: "Scalable component library built to absorb the 5+ modules planned next." },
    ],
    outcomeQuote: "By aligning fragmented dealer logs under a task-first interface, this redesign delivered a 30% reduction in diagnostics wait times, eliminating operational delays for mechanics while giving service center managers absolute pipeline clarity. Ultimately, this project reinforced that designing for enterprise scale isn't about packing screens with features—it's about stripping away noise so users can execute high-stakes decisions with confidence.",
    outcomeQuoteAuthor: "Key Takeaway: Role-Based Simplicity at Enterprise Scale",
    nextCaseName: "Honda PDI Automation Module",
    nextCaseUrl: "honda-booking",
  },
  
  // Case 3: Honda
  "honda-booking": {
    id: "honda-booking",
    numStr: "03/05",
    domain: "Automotive & Mobility",
    tags: ["Automotive PDI", "Field Inspection App", "2024–25"],
    title: "Honda PDI Automation Module",
    subtitle: "A Pre-Delivery Inspection (PDI) module designed for showroom inspectors to execute outdoor checkups with zero data latency in bright glare conditions.",
    specs: [
      { label: "My role", value: "Senior UI/UX Designer" },
      { label: "Timeline", value: "6 Months" },
      { label: "Platform", value: "Web Apps, iOS, & Android Mobile" },
      { label: "Tools", value: "Figma · Design Tokens · React" },
    ],
    gradient: "linear-gradient(135deg, #3E4B3E, #6B7B6B)",
    textColor: "#F2EEE6",
    icon: "◈",
    overviewP1: "Honda showroom agents, yard inspectors, and regional managers operated on disconnected legacy portals, leading to slow billing checkouts and manual diagnostic errors.",
    overviewP2: "I designed the foundational design system tokens and dashboard interfaces, reducing vehicle checkout times from 45 minutes to 15, and ensuring consistent interactions across five unified apps.",
    problemQuestion: "How do you orchestrate real-time invoicing, vehicle trims catalogs, and field checks across five applications while maintaining absolute visual and technical consistency?",
    problemCards: [
      { title: "Dealer Checkout Friction", desc: "Showroom agents spend up to 45 minutes manually calculating custom pricing schemes and taxes for buyers." },
      { title: "PDI Inspector Glare", desc: "Yard checkers operate tablets in bright outdoor spaces, resulting in mis-taps on high-density form fields." },
      { title: "Manager Blindspots", desc: "No live regional tracking of warranty approvals, leading to backlogs and inconsistent auditing." },
    ],
    businessObjectiveQuestion: "Standardize design tokens across mobile and web platforms to speed checkout rates and eliminate pricing errors.",
    businessMetrics: [
      { value: "15 min", label: "Showroom Checkout", desc: "Reducing checkout times from 45 minutes through unified billing panels." },
      { value: "-95%", label: "Pricing Invoicing Errors", desc: "Eliminating manual tax calculations via automated calculation checks." },
      { value: "88%", label: "Showroom Digital Adoption", desc: "Ensuring high sales executive onboarding onto the new portal in month one." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Restructured Honda's fragmented 5-app database system under a unified, consistent navigation blueprint. Mapped user flows that connect Enquiry tables, custom billing sheets, and pre-delivery vehicle logs, converting a disjointed paper checkout process into a streamlined digital path.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched wireframes to test layout patterns and touch-target sizes across desktop and mobile screens. Validating structural logic before applying design system rules helped us confirm that inspectors could easily operate checklist screens in yard glare conditions.",
    processTitle3: "Prototyping & Integration Verification",
    processDesc3: "Designed interactive billing prototypes to test real-time tax calculations and accessory custom rules. Validating these workflows early ensured that dealership sales associates could check out vehicle purchases in 15 minutes without invoicing errors.",
    finalUiTitle: "Brand Adherence & Unified Systems",
    finalUiDescription: "Maintained strict compliance with Honda's global brand identity, employing their corporate color schemes and display typefaces. Because we did not have a massive, pre-built design system at our disposal, I established a local visual library and component kit from scratch. This unified buttons, cards, and modal forms across the 5 distinct booking, billing, and inspection apps, preventing visual drift.",
    placeholders: {
      hero: "Drop the Honda ecosystem mockup here (5-app overview)",
      ia: "Drop Honda design system tokens / schema map here",
      wire1: "Drop mobile wireframes — yard inspector checklists",
      wire2: "Drop desktop wireframes — billing invoicing screens",
      ui1: "Drop final UI — dealership booking dashboard",
      ui2: "Drop final UI — yard mobile app view",
      ui3: "Drop final UI — printable invoice and billing tax tables",
    },
    outcomeMetrics: [
      { value: "15 min", label: "Dealership vehicle checkout time, down from 45 minutes." },
      { value: "-95%", label: "Errors in custom accessory pricing logs and tax tables." },
      { value: "88%", label: "Showroom booking orders completed digitally inside month one." },
    ],
    outcomeQuote: "Standardizing the multi-app ecosystem under a single design tokens kit compressed manual dealership billing from 45 minutes to 15, preventing pricing errors while ensuring inspectors operate pre-delivery checklists with ease. This work demonstrated that the ultimate value of a design system lies in its adoption: creating lightweight, intuitive components that allow developers to launch and scale features with zero layout drift.",
    outcomeQuoteAuthor: "Key Takeaway: Systemic Governance as a Developer Accelerator",
    nextCaseName: "Digital Seva Portal",
    nextCaseUrl: "seva",
  },

  // Case 4: Digital Seva
  "seva": {
    id: "seva",
    numStr: "04/05",
    domain: "GovTech for Bharat",
    tags: ["GovTech", "Accessibility", "IIT Delhi Research"],
    title: "Digital Seva Portal — designing someone's first digital experience",
    subtitle: "An accessibility-first government services portal built with the IIT Delhi team to enable low-literacy, rural users on low-bandwidth networks to independently pay utility bills and request services.",
    specs: [
      { label: "My role", value: "UI/UX Designer" },
      { label: "Timeline", value: "8 Months" },
      { label: "Platform", value: "Responsive Web (Mobile-First)" },
      { label: "Focus", value: "Accessibility (WCAG 2.1)" },
    ],
    gradient: "linear-gradient(135deg, #A0A83C, #C4CC60)",
    textColor: "#16140F",
    icon: "✦",
    overviewP1: "Low digital literacy, slow 2G connections, and overly complex form interfaces caused massive drop-offs on India's primary rural utilities and services hub.",
    overviewP2: "Collaborating with researchers from the IIT Delhi Design Team, I redesigned the portal from scratch, designing WCAG-compliant touch layouts and plain-language localization systems that cut operator dependency in half.",
    problemQuestion: "How do you design a secure billing portal for users who have never used a smartphone, struggle to read small text, and operate on patchy 2G connections?",
    problemCards: [
      { title: "Cognitive Load", desc: "Low-literacy users struggle to parse dense, technical English text tables and multi-select dropdowns." },
      { title: "Trust and Verification", desc: "No clear indicators of transaction progress, causing anxiety regarding whether payments went through." },
      { title: "Connectivity Barriers", desc: "Patches in cellular reception cause form data loss, forcing users to restart submissions from scratch." },
    ],
    businessObjectiveQuestion: "Implement accessibility-first interfaces that reduce transaction friction and minimize citizen dependence on third-party operators.",
    businessMetrics: [
      { value: "+65%", label: "Submission Success", desc: "Boosting utility bill payment completions among rural, first-time digital users." },
      { value: "-50%", label: "Operator Dependency", desc: "Empowering citizens to complete payments independently without administrative help." },
      { value: "30%", label: "Page Load Speeds", desc: "Optimizing code files and asset sizes to deliver fast load speeds on 2G." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Analyzed the complex, text-heavy billing catalog and restructured it into a linear, visual information architecture. Designed a flat, step-by-step transaction flow (Identify → Check → Pay → Receipt) that guides low-literacy users through bill payments without abstract redirects.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Developed low-fidelity wireframes to validate layout clarity and touch card controls directly in rural village communities. Testing structural hierarchy and form spacing before creating high-fidelity assets ensured that visual symbols were immediately understandable.",
    processTitle3: "Prototyping & Accessibility Verification",
    processDesc3: "Built interactive, localized language prototypes to test WCAG 2.1 contrast boundaries and local script scales. Enabled offline saving check loops, confirming that users in low-bandwidth zones could pay bills independently.",
    finalUiTitle: "Corporate Standards & Adaptive Component Kits",
    finalUiDescription: "Ensured strict adherence to official GovTech branding standards while prioritizing WCAG 2.1 AAA contrast rules. I built a lightweight, mobile-first component kit of accessible touch elements, form modules, and translation banners from scratch. This ensured visual consistency across all utility checkout screens, guaranteeing that elements behave predictably for low-literacy users.",
    placeholders: {
      hero: "Drop the Digital Seva dashboard mockup here (accessibility-first grid)",
      ia: "Drop user journey mapping & localization flows here",
      wire1: "Drop mobile wireframes — bill payment forms",
      wire2: "Drop wireframes — step progress indicator modules",
      ui1: "Drop final UI — utility payments dashboard",
      ui2: "Drop final UI — simple touch form controls",
      ui3: "Drop final UI — language toggle header screens",
    },
    outcomeMetrics: [
      { value: "+65%", label: "Successful form submission rates among first-time rural users." },
      { value: "-50%", label: "Citizen dependency on external operators to complete basic bills." },
      { value: "30%", label: "Increase in page load speeds on low-bandwidth rural connections." },
    ],
    outcomeQuote: "Redesigning GovTech forms around WCAG 2.1 contrast boundaries and local language touch targets resulted in a 65% payment submission success rate, enabling rural citizens to pay utility bills independently and reducing operator dependency by 50%. Tackling this challenge taught me that designing for next-billion users requires shedding digital assumptions and designing visual structures that reflect physical-world metaphors.",
    outcomeQuoteAuthor: "Key Takeaway: Designing for Low-Literacy and High-Trust Contexts",
    nextCaseName: "SwilMart Commerce",
    nextCaseUrl: "swilmart",
  },

  // Case 5: SwilMart
  "swilmart": {
    id: "swilmart",
    numStr: "05/05",
    domain: "B2B + B2C Commerce",
    tags: ["B2B + B2C", "ERP Integration", "2022–24"],
    title: "SwilMart Commerce",
    subtitle: "A dual-mode B2B and B2C commerce platform that integrates bulk wholesale catalog orders and standard retail checkouts with real-time SwilERP warehouse inventory tracking.",
    specs: [
      { label: "My role", value: "UI/UX Designer" },
      { label: "Timeline", value: "22 Months" },
      { label: "Platform", value: "Web Portal & Mobile Apps" },
      { label: "Integration", value: "SwilERP Warehouse Sync" },
    ],
    gradient: "linear-gradient(135deg, #4C9A8A, #6FBFAE)",
    textColor: "#F2EEE6",
    icon: "◆",
    overviewP1: "Wholesale distributors needed rapid keyboard table entries to buy in bulk, while retail B2C shoppers required clean image grids and familiar shopping checkouts.",
    overviewP2: "I designed a dual-mode interface synced with SwilERP inventory databases that toggles between distributor lists and shopper cards, increasing digital wholesale orders by 35%.",
    problemQuestion: "How do you present bulk price-tier structures and live warehouse counts alongside individual shopping carts without confusing either user base?",
    problemCards: [
      { title: "Distributor Input Speed", desc: "Distributors must order hundreds of product lines daily and find card grids too slow to navigate." },
      { title: "B2C Purchase Friction", desc: "Retail shoppers need product images and quick-checkout buttons, getting confused by bulk pricing tiers." },
      { title: "Inventory Uncertainty", desc: "No real-time stock levels sync, resulting in distributors ordering items that are currently out of stock." },
    ],
    businessObjectiveQuestion: "Build a dual-mode storefront linked to SwilERP databases to streamline wholesale orders and boost retail conversions.",
    businessMetrics: [
      { value: "+35%", label: "B2B Digital Orders", desc: "Moving wholesale distributors from offline telephone orders onto the web portal." },
      { value: "+28%", label: "Search-to-Cart Transition", desc: "Increasing product conversions on the B2C storefront using clean layouts." },
      { value: "-20%", label: "Inventory Queries", desc: "Reducing daily stock check support inquiries through live database sync flags." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Took SwilMart's disjointed catalog spreadsheets and reorganized the information architecture into a clear, dual-mode system. Structured custom B2B bulk tables and visual B2C retail cards under a single database, allowing users to toggle flows instantly based on order size.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Used high-density wireframe tables to test quick keyboard navigation and variant select grids for wholesale distributors. Validated sorting filter logic and bulk cart additions before building final UI components.",
    processTitle3: "Prototyping & ERP Integration Verification",
    processDesc3: "Created interactive prototypes to test real-time SwilERP database sync alert banners. Verified that quantity selectors and warning flags prevented out-of-stock orders, driving digital wholesale orders up by 35%.",
    finalUiTitle: "Retail Brand Consistency & Shared Components",
    finalUiDescription: "Translated SwilMart's brand identity guidelines into high-performance web components. Without a pre-existing system library, I created a local B2B/B2C component library from scratch. This shared-code setup governed product cards, checkout fields, and live ERP stock alert banners, providing a unified visual signature whether users shopped in high-density tables or visual grids.",
    placeholders: {
      hero: "Drop the SwilMart catalog mockup here (B2B + B2C dual-mode)",
      ia: "Drop SwilERP integration schema / inventory flow map here",
      wire1: "Drop B2B wireframes — distributor quick list tables",
      wire2: "Drop B2C wireframes — retail grid layout checkout",
      ui1: "Drop final UI — B2B inventory quick-order panel",
      ui2: "Drop final UI — B2C responsive catalog grid",
      ui3: "Drop final UI — volume pricing calculator interface",
    },
    outcomeMetrics: [
      { value: "+35%", label: "Increase in digital orders submitted directly by B2B wholesale distributors." },
      { value: "+28%", label: "Catalog search-to-cart conversions on retail B2C storefronts." },
      { value: "-20%", label: "Reduction in daily support inquiries regarding catalog stock availability." },
    ],
    outcomeQuote: "Synchronizing live catalog variant selectors with SwilERP inventory led to a 35% increase in wholesale digital checkout volumes, saving customer support teams from manual stock inquiry logs while boosting B2C retail search conversions by 28%. This experience showed me that complex business structures can be unified under a single codebase by building responsive, dual-mode architectures that respect unique user intentions.",
    outcomeQuoteAuthor: "Key Takeaway: Dual-Mode Architectures for Unified Commerce",
    nextCaseName: "KOVA Health Portal",
    nextCaseUrl: "kova",
  },

  // Case 6: BrainWave AI (Self Learning)
  "brainwave-ai": {
    id: "brainwave-ai",
    numStr: "01/03",
    domain: "Generative AI Tools",
    tags: ["Generative AI", "Canvas API", "React"],
    title: "BrainWave AI Canvas",
    subtitle: "An infinite canvas interface where natural language prompts generate editable vector diagrams, user journey maps, and modular UI templates in real-time.",
    specs: [
      { label: "My role", value: "Creator & UX Developer" },
      { label: "Timeline", value: "2 Months" },
      { label: "Platform", value: "Desktop Web Canvas" },
      { label: "Tools", value: "Next.js · Canvas API · OpenAI API" },
    ],
    gradient: "linear-gradient(135deg, #BF4B0A, #A0A83C)",
    textColor: "#F2EEE6",
    icon: "🧠",
    overviewP1: "Traditional wireframing tools are slow, requiring designers to manually construct every node and connection. I wanted to design a canvas that uses generative AI to instantly convert prompts into flows.",
    overviewP2: "I built BrainWave AI: an infinite canvas interface that translates spoken or written prompts into structured vector nodes and connection flows, using React and the html5 Canvas API.",
    problemQuestion: "How do you design an intuitive, friction-free canvas where user prompts generate vector diagrams and support real-time user manipulation?",
    problemCards: [
      { title: "Prompt Parsing", desc: "Needs to translate complex user descriptions into precise node position coordinates." },
      { title: "Infinite Canvas", desc: "Requires fast panning, zooming, and group selections with zero lag." },
      { title: "User Customization", desc: "Needs an intuitive sidebar properties panel to edit color themes and styles." },
    ],
    businessObjectiveQuestion: "Design a creative sandbox that speeds up visual mapping workflows and showcases local component layout validation.",
    businessMetrics: [
      { value: "2.5x", label: "Brainstorming Acceleration", desc: "Wireframing speeds for designers compared to manual node construction." },
      { value: "94%", label: "Styling Generation Accuracy", desc: "Validating coordinates and styles against testing prompts specifications." },
      { value: "<2s", label: "Rendering Latency", desc: "Canvas layout response times under heavy coordinate updates." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Restructured standard prompt chats into a unified side-panel prompt canvas. Mapped user flows that let creators input prompts, preview vector diagrams, and edit shape parameters directly on an infinite coordinate grid.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched low-fidelity layout wires to test group node dragging logic and coordinate offsets. Validating coordinate system equations early before visual rendering ensured panning/zooming calculations were solid.",
    processTitle3: "Prototyping & Generative AI Integration",
    processDesc3: "Built interactive prototypes connecting user prompts to OpenAI API response logs. Verified node formatting guidelines, confirming diagram formats load correctly on viewport resize.",
    finalUiTitle: "Corporate Standards & Custom Component Kits",
    finalUiDescription: "Designed a clean, glassmorphic visual system with a custom local icon and tool library built from scratch, ensuring that panning panels, node cards, and color selectors feel premium and integrated.",
    placeholders: {
      hero: "Drop the BrainWave AI hero mockup here (infinite canvas panel)",
      ia: "Drop prompt parser and diagram generator engine flow here",
      wire1: "Drop wireframes — node connection rules",
      wire2: "Drop wireframes — properties editor sidebar",
      ui1: "Drop final UI — interactive prompt editor",
      ui2: "Drop final UI — dynamic diagram rendering view",
      ui3: "Drop final UI — export formats panel",
    },
    outcomeMetrics: [
      { value: "2.5x", label: "Speedup in visual flowchart brainstorming." },
      { value: "94%", label: "Diagram generation layout accuracy." },
      { value: "<2s", label: "Prompt response-to-canvas rendering cycles." },
    ],
    outcomeQuote: "By connecting LLM prompt parsers to local canvas matrices, BrainWave AI transforms visual mapping from manual pixel-pushing into a fast, prompt-driven design pipeline.",
    outcomeQuoteAuthor: "Key Takeaway: Designing for Conversational Generative Canvases",
    nextCaseName: "Synthflow UX Sound Sandbox",
    nextCaseUrl: "synthflow-ux",
  },

  // Case 7: Synthflow UX (Self Learning)
  "synthflow-ux": {
    id: "synthflow-ux",
    numStr: "02/03",
    domain: "Sonic UX Research",
    tags: ["Web Audio API", "Visual Synthesizers", "Sonic UX"],
    title: "Synthflow UX Sound Sandbox",
    subtitle: "An interactive sound-mapping tool that lets product designers connect sound profiles to visual UI transitions and test sonic feedback schemas.",
    specs: [
      { label: "My role", value: "UX Researcher & Developer" },
      { label: "Timeline", value: "3 Months" },
      { label: "Platform", value: "Responsive Web App" },
      { label: "Tools", value: "Web Audio API · Tailwind CSS" },
    ],
    gradient: "linear-gradient(135deg, #16140F, #4C9A8A)",
    textColor: "#F2EEE6",
    icon: "🎵",
    overviewP1: "Product designers lack tools to easily design sound profiles for micro-interactions, relying on guesswork or static files. I wanted to build an interactive synthesizer tailored for UI sound feedback.",
    overviewP2: "I built Synthflow UX: an interactive, visual sandbox powered by the Web Audio API that lets designers build customized synth sounds and map them directly to layout triggers.",
    problemQuestion: "How do you map auditory parameters (oscillator frequency, envelopes, decay) into simple visual controls for designers?",
    problemCards: [
      { title: "Frequency Synthesis", desc: "Requires real-time audio wave generation inside browser sandboxes without audio clipping." },
      { title: "Visual Mappings", desc: "Needs a layout that connects sound files to common UI actions (clicks, drags, scrolls)." },
      { title: "Export Support", desc: "Needs to output clean JSON/JS code config lines for developer integration." },
    ],
    businessObjectiveQuestion: "Create a sensory design tool that speeds up micro-interaction feedback selection cycles.",
    businessMetrics: [
      { value: "100%", label: "In-Browser Synthesis", desc: "Client-side browser sound wave synthesis capabilities without backend latency." },
      { value: "-40%", label: "Sound Mapping Cycle", desc: "Time spent testing and selecting custom sonic signatures for layouts." },
      { value: "15+", label: "Interaction Triggers", desc: "Pre-configured system triggers for clicks, scrolls, drags, and hover states." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Streamlined complex audio routing parameters under a flat, task-first frequency board. Mapped user paths to let designers select a trigger, adjust oscillator waves, and listen to feedback interactions instantly.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched wireframes to test layout patterns and touch-target sizes across desktop and mobile screens. Validating structural logic before applying design system rules helped us confirm that inspectors could easily operate checklist screens in yard glare conditions.",
    processTitle3: "Prototyping & Audio Integration",
    processDesc3: "Built audio prototypes to test real-time wave frequencies and gain envelope triggers. Checked frequency values in active viewports to verify that UI audio signals load correctly.",
    finalUiTitle: "Sonic Aesthetics & Component Kits",
    finalUiDescription: "Designed a sleek, dark-themed neomorphic interface with a custom component kit built from scratch, rendering frequency cards, wave sliders, and action triggers beautifully.",
    placeholders: {
      hero: "Drop the Synthflow sandbox mockup here (sound visualizer)",
      ia: "Drop audio node routing and trigger mappings flow here",
      wire1: "Drop wireframes — interactive frequency slider arrays",
      wire2: "Drop wireframes — interaction event connection tables",
      ui1: "Drop final UI — synth frequencies designer panel",
      ui2: "Drop final UI — sound triggers library card grid",
      ui3: "Drop final UI — export code configs inspector",
    },
    outcomeMetrics: [
      { value: "100%", label: "Audio generation on client-side sandboxes." },
      { value: "-40%", label: "Time spent selecting and testing sonic UX signals." },
      { value: "15+", label: "Pre-built micro-interaction trigger points." },
    ],
    outcomeQuote: "Synthflow UX makes sonic feedback accessible, enabling product designers to test audio-visual micro-interactions inside a clean Web Audio sandbox.",
    outcomeQuoteAuthor: "Key Takeaway: Designing Immersive Audio-Visual Sandboxes",
    nextCaseName: "Antigravity IDE Assistant",
    nextCaseUrl: "antigravity-ide",
  },

  // Case 8: Antigravity IDE Helper (Self Learning)
  "antigravity-ide": {
    id: "antigravity-ide",
    numStr: "03/03",
    domain: "Developer Tooling",
    tags: ["AI Agent Dev", "VS Code API", "Node.js"],
    title: "Antigravity IDE Helper Agent",
    subtitle: "A local context-aware IDE assistant that translates spoken design specs into structured component directories and React layouts.",
    specs: [
      { label: "My role", value: "Developer & UI Designer" },
      { label: "Timeline", value: "1 Month" },
      { label: "Platform", value: "IDE Extension (VS Code)" },
      { label: "Tools", value: "VS Code Extensions API · Node.js" },
    ],
    gradient: "linear-gradient(135deg, #E8B08C, #BF4B0A)",
    textColor: "#16140F",
    icon: "🛸",
    overviewP1: "Designing component layout boilerplates takes time, and jumping between code files and spec documents breaks a developer's focus. I wanted to design a spoken IDE helper that handles this context mapping.",
    overviewP2: "I designed Antigravity: a VS Code extension helper that processes spoken spec prompts and generates component layouts and stylesheet parameters directly inside local folders.",
    problemQuestion: "How do you design a clean, floating assistant interface that integrates with VS Code editor columns without interrupting developer workflows?",
    problemCards: [
      { title: "Floating Chat UI", desc: "Needs a lightweight panel that fits within VS Code's editor columns." },
      { title: "Local Context Sync", desc: "Requires scanning local file directories and active component trees with low latency." },
      { title: "Spoken Prompt Sync", desc: "Needs prompt processing to translate layout commands into structured directory logs." },
    ],
    businessObjectiveQuestion: "Reduce time spent creating boilerplate stylesheets and component folder files.",
    businessMetrics: [
      { value: "-50%", label: "Boilerplate Setup Time", desc: "Reducing time spent writing boilerplate styling folders and files." },
      { value: "92%", label: "Layout Prompt Accuracy", desc: "Translating layout specifications into structured files accurately." },
      { value: "<50ms", label: "Directory Index Speeds", desc: "Scanning local file systems under active developer indexing cycles." },
    ],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Structured complex directory tree operations into a simple chat sidebar layout. Mapped flow patterns that allow developers to speak design specs, review file alterations, and accept updates with a single click.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched low-fidelity wires to test panel resizing and floating editor layout offsets. Checked editor columns layout logic before visual implementation to ensure visual components don't crash on window scaling.",
    processTitle3: "Prototyping & Extensions Integration",
    processDesc3: "Built functional extension prototypes using VS Code APIs. Tested Spoken prompts to ensure that component file creation triggers local workspace updates safely.",
    finalUiTitle: "IDE Aesthetics & Shared Component Kits",
    finalUiDescription: "Designed a clean, minimalist UI matching dark code theme palettes. Built a modular styling library from scratch to ensure chat logs, folder trees, and prompt inputs feel native to the editor environment.",
    placeholders: {
      hero: "Drop the Antigravity assistant mockup here (editor panel)",
      ia: "Drop spoken prompt processing and code generator flow here",
      wire1: "Drop wireframes — floating dictation assistant panel",
      wire2: "Drop wireframes — local workspace permission tables",
      ui1: "Drop final UI — spoken prompt editor chat view",
      ui2: "Drop final UI — directory explorer change log panel",
      ui3: "Drop final UI — token selector configuration sheet",
    },
    outcomeMetrics: [
      { value: "-50%", label: "Time spent creating frontend boilerplate files." },
      { value: "92%", label: "Directory tree generation accuracy rate." },
      { value: "<50ms", label: "Local directory scan latency under full indexings." },
    ],
    outcomeQuote: "Antigravity bridges design specifications and frontend implementation, using local context parsing to translate spoken design prompts into clean component layouts.",
    outcomeQuoteAuthor: "Key Takeaway: Spoken Context Engineering for IDE Tooling",
    nextCaseName: "KOVA Health Portal",
    nextCaseUrl: "kova",
  },
};

// Route aliases linking shorter homepage IDs to full DB entries
const aliasMap: Record<string, string> = {
  fuso: "fuso-hawk",
  fusoCase: "fuso-hawk",
  "fuso-pnc": "fuso-hawk",
  "fuso-osprey": "fuso-hawk",
  honda: "honda-booking",
  hondaCase: "honda-booking",
  "honda-pdi": "honda-booking",
  sevaCase: "seva",
  swilCase: "swilmart",
  // New ones
  kovaCase: "kova",
  ospreyCase: "fuso-hawk",
  brainwaveCase: "brainwave-ai",
  synthflowCase: "synthflow-ux",
  antigravityCase: "antigravity-ide",
};

export default function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const targetId = aliasMap[resolvedParams.id] || resolvedParams.id;
  const study = caseStudiesData[targetId];

  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from HTML element attribute on mount
  useEffect(() => {
    const active = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setTheme(active || "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!study) {
    notFound();
  }

  // Scroll listener for top progress bar and reveal animation checks
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(dh > 0 ? (st / dh) * 100 : 0);

      // Reveal animation class triggers
      const reveals = document.querySelectorAll(".reveal:not(.in)");
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          el.classList.add("in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial reveal on load
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)", minHeight: "100vh", position: "relative", fontFamily: "var(--font-sans), sans-serif", overflowX: "hidden", transition: "background-color 0.2s, color 0.2s" }}>
      {/* Scroll indicator */}
      <div
        id="progressBar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          backgroundColor: "#BF4B0A",
          width: `${scrollProgress}%`,
          zIndex: 1001,
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.2rem 3rem",
          backgroundColor: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--nav-border)",
          transition: "background-color 0.2s, border-color 0.2s",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#BF4B0A",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          ← Back to portfolio
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.2rem",
              color: "var(--foreground)",
            }}
          >
            Case Study <span style={{ color: "#BF4B0A" }}>{study.numStr}</span>
          </span>
          {/* Theme Toggle Trigger */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <Link
          href={`/case-studies/${study.nextCaseUrl}`}
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#BF4B0A",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className="hidden sm:inline">Next: {study.nextCaseName}</span>
          <span className="sm:hidden">Next</span> →
        </Link>
      </nav>

      {/* CS Hero Header */}
      <header
        style={{
          padding: "9rem 3rem 4rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div className="reveal" style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginBottom: "1.6rem" }}>
          <span
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              padding: "5px 14px",
              borderRadius: "100px",
            }}
          >
            {study.domain}
          </span>
          {study.tags.slice(1).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                border: "1px solid var(--border)",
                padding: "5px 14px",
                borderRadius: "100px",
                color: "var(--text-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="reveal"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            lineHeight: 1.04,
            marginBottom: "1.4rem",
            color: "var(--foreground)",
          }}
        >
          {study.title.includes("&") ? (
            <>
              {study.title.split("&")[0]}
              <em style={{ color: "#BF4B0A", fontStyle: "italic" }}>&amp;</em>
              {study.title.split("&")[1]}
            </>
          ) : (
            study.title
          )}
        </h1>

        <p className="reveal" style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "700px", marginBottom: "3rem", lineHeight: 1.65 }}>
          {study.subtitle}
        </p>

        {/* Specifications grid */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--divider)",
            border: "1px solid var(--divider)",
          }}
        >
          {study.specs.map((spec) => (
            <div key={spec.label} style={{ backgroundColor: "var(--spec-bg)", padding: "1.2rem" }}>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", marginBottom: "4px" }}>
                {spec.label}
              </div>
              <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--foreground)" }}>{spec.value}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Hero Mockup Graphic Slot */}
      <div className="reveal" style={{ maxWidth: "1100px", margin: "0 auto 5rem", padding: "0 3rem" }}>
        <ImageSlot placeholder={study.placeholders.hero} height="520px" />
      </div>

      {/* Main content sections */}
      <div ref={mainRef}>
        {/* 01 · Overview */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem 5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 }}>
              01 · Overview
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <p className="reveal" style={{ fontSize: "1.15rem", marginBottom: "1.2rem", color: "var(--foreground)", lineHeight: 1.65 }}>
                {study.overviewP1}
              </p>
              <p className="reveal" style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
                {study.overviewP2}
              </p>
            </div>
          </div>
        </section>

        {/* 02 · The User Challenge (Dark section Part A) */}
        <section style={{ backgroundColor: "#16140F", color: "#F2EEE6", padding: "5rem 3rem 3rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#A0A83C", fontWeight: 600, marginBottom: "2rem" }}>
              02 · The User Challenge
            </div>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)",
                lineHeight: 1.3,
                maxWidth: "900px",
                color: "#F2EEE6",
                fontWeight: 400,
                marginBottom: "3rem",
              }}
            >
              {study.problemQuestion}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {study.problemCards.map((card) => (
                <div key={card.title} className="reveal" style={{ border: "1px solid rgba(242,238,230,0.15)", padding: "1.6rem", borderRadius: "6px" }}>
                  <div style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.4rem", color: "#BF4B0A", marginBottom: "0.6rem" }}>
                    {card.title}
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#B5B0A4", lineHeight: 1.55 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 · The Business Objective (Dark section Part B) */}
        <section style={{ backgroundColor: "#16140F", color: "#F2EEE6", padding: "3rem 3rem 5rem", borderTop: "1px solid rgba(242,238,230,0.08)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#A0A83C", fontWeight: 600, marginBottom: "2rem" }}>
              03 · The Business Objective
            </div>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                lineHeight: 1.3,
                maxWidth: "900px",
                color: "#B5B0A4",
                fontWeight: 400,
                marginBottom: "3rem",
              }}
            >
              {study.businessObjectiveQuestion}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
              {study.businessMetrics.map((metric) => (
                <div key={metric.label} className="reveal" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "2.6rem", color: "#BF4B0A", fontWeight: 400, lineHeight: 1 }}>
                      {metric.value}
                    </span>
                    <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "#F2EEE6", fontWeight: 600 }}>
                      {metric.label}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#B5B0A4", lineHeight: 1.5 }}>
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · Process */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 }}>
              04 · Process
            </div>
            <div style={{ gridColumn: "span 2" }}>
              {/* Step 1 */}
              <h3 className="reveal" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.8rem", marginBottom: "1rem", color: "var(--foreground)", fontWeight: 400 }}>
                {study.processTitle1}
              </h3>
              <p className="reveal" style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.65 }}>
                {study.processDesc1}
              </p>
              <div className="reveal" style={{ width: "100%", marginBottom: "2.5rem" }}>
                <ImageSlot placeholder={study.placeholders.ia} height="380px" />
              </div>

              {/* Step 2 */}
              <h3 className="reveal" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.8rem", marginBottom: "1rem", color: "var(--foreground)", fontWeight: 400 }}>
                {study.processTitle2}
              </h3>
              <p className="reveal" style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.65 }}>
                {study.processDesc2}
              </p>
              <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
                <ImageSlot placeholder={study.placeholders.wire1} height="300px" />
                <ImageSlot placeholder={study.placeholders.wire2} height="300px" />
              </div>

              {/* Step 3 */}
              <h3 className="reveal" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.8rem", marginBottom: "1rem", color: "var(--foreground)", fontWeight: 400 }}>
                {study.processTitle3}
              </h3>
              <p className="reveal" style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
                {study.processDesc3}
              </p>
            </div>
          </div>
        </section>

        {/* 05 · Final UI */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem 5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 }}>
              05 · Final UI
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <h3 className="reveal" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.8rem", marginBottom: "1rem", color: "var(--foreground)", fontWeight: 400 }}>
                {study.finalUiTitle}
              </h3>
              <p className="reveal" style={{ color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.65 }}>
                {study.finalUiDescription}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div className="reveal">
                  <ImageSlot placeholder={study.placeholders.ui1} height="400px" />
                </div>
                <div className="reveal">
                  <ImageSlot placeholder={study.placeholders.ui2} height="400px" />
                </div>
              </div>
              <div className="reveal">
                <ImageSlot placeholder={study.placeholders.ui3} height="380px" />
              </div>
            </div>
          </div>
        </section>

        {/* 06 · Outcomes (Dark section) */}
        <section style={{ backgroundColor: "#16140F", color: "#F2EEE6", padding: "5rem 3rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="reveal" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#A0A83C", fontWeight: 600, marginBottom: "2.5rem" }}>
              06 · Outcomes
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
              {study.outcomeMetrics.map((metric) => (
                <div key={metric.value} className="reveal">
                  <div style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "3.2rem", color: "#BF4B0A", lineHeight: 1 }}>
                    {metric.value}
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#B5B0A4", marginTop: "0.6rem", lineHeight: 1.5 }}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ borderLeft: "3px solid #BF4B0A", paddingLeft: "1.8rem" }}>
              <p style={{ fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.4, color: "#F2EEE6" }}>
                {study.outcomeQuote}
              </p>
              <p style={{ fontSize: "0.85rem", color: "#B5B0A4", marginTop: "0.6rem" }}>{study.outcomeQuoteAuthor}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Case Footer */}
      <footer
        style={{
          padding: "4rem 3rem",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
          ← Back to portfolio
        </Link>
      </footer>
    </div>
  );
}
