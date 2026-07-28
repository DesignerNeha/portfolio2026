"use client";

import React, { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

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
  heroImage?: string;
  overviewP1: string;
  overviewP2: string;
  challengeTitleOverride?: string;
  problemQuestion: string;
  problemPretext?: string;
  problemCards: { title: string; desc: string }[];
  beforeImage?: string;
  afterImage?: string;
  beforeText?: string;
  afterText?: string;
  componentsSectionTitle?: string;
  componentsImage?: string;
  annotatedFeatureImage?: string;
  annotatedFeatures?: { title: string; desc: string; position?: string }[];
  heuristics?: { id: string; title: string; heuristic: string; desc: string; severity?: 'High' | 'Medium' | 'Low'; }[];
  loginImage?: string;
  loginFeatures?: { title: string; desc: string; }[];
  businessObjectiveQuestion: string;
  businessMetrics: { value: string; label: string; desc: string }[];
  processTitle1: string;
  processDesc1: string;
  processTitle2: string;
  processDesc2: string;
  processTitle3: string;
  processDesc3: string;
  researchSectionTitle?: string;
  researchDescription?: string;
  researchItems?: { title: string; desc: string }[];
  finalUiTitle: string;
  finalUiImage?: string;
  finalUiImages?: { src: string; heading?: string }[];
  finalUiDescription: string;
  finalUi2Title?: string;
  finalUi2Description?: string;
  finalUi2Image?: string;
  finalUi2Images?: { src: string; heading?: string }[];
  rolesSectionTitle?: string;
  userRoles?: { role: string; desc: string; }[];
  placeholders: {
    hero: string;
    ia: string;
    wire1: string;
    wire2: string;
    ui1: string;
    ui2: string;
    ui3: string;
  };
  researchQuote?: string;
  userFlowSteps?: string[];
  designDecisions?: { title: string; desc: string }[];
  challengesText?: string;
  reflectionText?: string;
  outcomeBullets?: string[];
  wireframesImage?: string | string[];
  outcomeMetrics: { value: string; label: string }[];
  outcomeQuote: string;
  outcomeQuoteAuthor: string;
  prevCaseName?: string;
  prevCaseUrl?: string;
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
      { label: "Timeline", value: "1 Week" },
      { label: "Platform", value: "Web & Desktop App (AI SaaS)" },
      { label: "Tools", value: "Figma · Claude" },
    ],
    gradient: "linear-gradient(135deg, #16140F, #3A362C)",
    textColor: "#F2EEE6",
    icon: "🤖",
    heroImage: "/KOVA_Banner.png",
    overviewP1: "KOVA AI is a next-generation chat portal designed for power-users who need absolute control over their AI workflows. Built during an intensive 4-day design sprint, KOVA utilizes a refined, highly accessible neomorphic design system to make complex, abstract developer features feel tangible, responsive, and beautifully intuitive in both light and dark modes.",
    overviewP2: "",
    problemQuestion: "The original KOVA portal was functional but suffered from severe technical debt and \"feature soup.\" As the system evolved to support advanced capabilities like custom AI Agents, Prompt Presets, and complex MCP integrations, the legacy UI broke under the weight of its own features.\n\nCollaborating with Claude AI to perform a rigorous heuristic evaluation and competitive analysis of the legacy platform, we mapped user feedback to isolate exactly where the interface was failing.",
    challengeTitleOverride: "02 · The Starting Point: Auditing the Original System",
    beforeImage: "/KOVA_before.png",
    componentsSectionTitle: "Atomic Scale: Future-Proofing the Platform",
    componentsImage: "/KOVA_components.png",
    loginImage: "/KOVA_Login.png",
    loginFeatures: [
      { title: "Secure Authentication", desc: "Secure workspace access via email/password or Microsoft SSO." },
      { title: "Enterprise SSO", desc: "Frictionless, password-free access for enterprise users." },
      { title: "Branded Onboarding", desc: "Visual introduction to core AI capabilities before login." },
      { title: "Clean Interface", desc: "Minimal, distraction-free layout for a smooth sign-in experience." }
    ],
    annotatedFeatureImage: "/KOVA_Chat.png",
    annotatedFeatures: [
      { title: "AI Chat Interface", desc: "Interact with business data using natural language." },
      { title: "Smart Insights", desc: "Get instant summaries and actionable recommendations." },
      { title: "Follow-up Suggestions", desc: "AI recommends the next best action automatically." },
      { title: "Conversation History", desc: "Access previous chats without losing context." },
      { title: "Voice Input", desc: "Ask questions using your voice." },
      { title: "File Upload", desc: "Attach documents for AI-powered analysis." },
      { title: "Response Feedback", desc: "Copy, like, or dislike responses to improve AI." },
      { title: "Model Selection", desc: "Choose the AI model that fits your task." },
      { title: "Workspace Navigation", desc: "Quickly access core tools from the sidebar." },
      { title: "Minimal UI", desc: "Clean, distraction-free interface focused on productivity." },
      { title: "Persistent Composer", desc: "Always-available input for seamless conversations." },
      { title: "Enterprise Branding", desc: "Fully customizable to match your organization's identity." }
    ],
    heuristics: [
      { id: "1", title: "Poor Empty State", heuristic: "Flexibility & Efficiency of Use", desc: "The home screen provides no suggested prompts or guidance, leaving first-time users unsure how to begin.", severity: 'Medium' },
      { id: "2", title: "No System Status Feedback", heuristic: "Visibility of System Status", desc: "The interface doesn't indicate whether the AI is ready, processing, or connected, reducing user confidence.", severity: 'High' },
      { id: "3", title: "Inconsistent Navigation Hierarchy", heuristic: "Consistency & Standards", desc: "The interface uses different button styles and layouts across the top bar and sidebar, making navigation feel inconsistent.", severity: 'Medium' }
    ],
    problemCards: [],
    businessObjectiveQuestion: "Build an extensible AI tool that drives user retention through custom skills creation and simplifies complex developer integrations.",
    businessMetrics: [],
    processTitle1: "Information Architecture & User Flow Streamlining",
    processDesc1: "Restructured KOVA's complex agent routing and MCP server variables under a flat, navigation panel. Mapped user paths to let designers toggle context, prompt templates, and active tools directly in the chat input area.",
    processTitle2: "Deliberate Wireframing & Logic Validation",
    processDesc2: "Sketched low-fidelity wires to test layout patterns and alert notifications during multi-agent processes. Checked column structures before final design styling to ensure agent logs don't conflict with text inputs on split-viewports.",
    processTitle3: "Prototyping & AI Agents Integration",
    processDesc3: "Built interactive click-through prototypes to test prompt creation flows and skills config sheets. Testing these patterns validated user trust in prompt engineering feedback, driving high onboarding success rates in week one.",
    finalUiTitle: "The Complete Feature Ecosystem",
    finalUiDescription: "We architected KOVA to be an incredibly dense, power-user friendly workspace. From natural language data interactions and voice input to persistent, always-available composer controls—every feature is meticulously mapped directly into your workflow without ever breaking context.",
    finalUiImage: "/KOVA_FinalUI.png",
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
    prevCaseName: "SwilMart Commerce",
    prevCaseUrl: "swilmart",
    nextCaseName: "Osprey: FUSO Fleet & HAWK",
    nextCaseUrl: "fuso-hawk",
  },

  // Case 2: FUSO (Osprey)
  "fuso-hawk": {
    id: "fuso-hawk",
    finalUiImages: [
      { src: "/CodeGeneration_Orprey.jpg", heading: "Code Generation Module" },
      { src: "/CreateFieldFix_Osprey.png", heading: "Field fix creation" },
      { src: "/FieldFixList_Osprey.jpg", heading: "Field Fix List" },
      { src: "/FieldFixDetail_Osprey.png", heading: "Field Fix Detail" }
    ],
    numStr: "02/05",
    domain: "Global Field Fix Portal",
    tags: ["Enterprise SaaS", "RBAC", "Global Automotive", "B2B Portal"],
    title: "Osprey: Global Field Fix Portal",
    subtitle: "A highly complex, multi-tiered enterprise portal built to manage and resolve field issues in Mitsubishi vehicles globally through a rigorous role-based approval pipeline.",
    specs: [
      { label: "My role", value: "Senior UI/UX Designer" },
      { label: "Timeline", value: "2025 – Present" },
      { label: "Platform", value: "Responsive Web App (SaaS)" },
      { label: "Tools", value: "Figma · FigJam · Figma Make" },
    ],
    gradient: "linear-gradient(135deg, #BF4B0A, #E07B3C)",
    textColor: "#F2EEE6",
    icon: "⚙",
    heroImage: "/Osprey_banner.png",
    overviewP1: "When repairing and maintaining a global fleet of Mitsubishi vehicles, ensuring that field fixes are rigorously vetted, documented, and safely executed across international markets is paramount. The Osprey portal acts as the central nervous system for this massive global operation.",
    overviewP2: "I architected the end-to-end user experience for a highly complex, role-based workflow. The portal ensures that every field fix passes through a strict chain of command—from the initial creator to quality approvers, headquarters, regional divisions, and finally to the technicians on the ground.",
    problemQuestion: "How do you build a cohesive portal that seamlessly passes a field fix from a QM Creator all the way down to a GD User across global markets without losing critical context or compromising security?",
    problemCards: [
      { title: "Complex Hand-offs", desc: "Field fixes require review at 6 different administrative levels before they reach the technician, creating massive potential for data bottlenecks." },
      { title: "Market Segregation", desc: "Headquarters (CSHQ) and Regional (RC) users need to seamlessly partition VIN data and upload documents tailored to specific country regulations." },
      { title: "Visibility & Tracking", desc: "All stakeholders need real-time, interactive dashboards to monitor the exact progress and compliance status of ongoing fixes worldwide." },
    ],
    businessObjectiveQuestion: "Digitize global operations to accelerate field fixes and ensure absolute compliance through a secure, sequential approval pipeline.",
    businessMetrics: [
      { value: "-40%", label: "Approval Cycle Time", desc: "Accelerating the flow of field fixes from creation to the technician." },
      { value: "100%", label: "Market Segregation", desc: "Ensuring VINs and documents are strictly partitioned by country and region." },
      { value: "7", label: "Distinct User Roles", desc: "Managed under a single, unified, and highly secure design system." },
    ],
    researchSectionTitle: "Research & Analysis",
    researchDescription: "To design a portal that meets the rigorous demands of global field fixes, I conducted extensive user interviews and analyzed existing diagnostic workflows across multiple markets. The key findings directly shaped the resulting information architecture and role-based permissions.",
    researchItems: [
      { title: "Technician Constraints", desc: "Mechanics working under hoists cannot interact with complex UI flows; they need large tap targets and high contrast." },
      { title: "Compliance Redundancy", desc: "Found that CSHQ and RC users were essentially duplicating work. Over 60% of document uploads were identical but manually segregated." },
      { title: "Approval Bottlenecks", desc: "The longest delay in a field fix wasn't the repair, but waiting for QM Approvers to sign off on technical validity via email." }
    ],
    rolesSectionTitle: "The Seven-Tiered Approval Pipeline",
    userRoles: [
      { role: "QM Creator", desc: "Initiates the pipeline by creating the initial field fix request and defining the core technical issue." },
      { role: "QM Approver", desc: "Reviews the technical validity of the field fix and grants the first layer of approval to proceed." },
      { role: "CSHQ User", desc: "Reviews VINs and market-level segregation of the fix. Uploads critical market-wise documentation." },
      { role: "CSHQ Approver", desc: "Audits the documents uploaded by CSHQ and officially releases the field fix to the Regional (RC) markets." },
      { role: "RC User", desc: "Handles country-level segregation of the field fix, uploads localized country-wise documents, and releases it to the ground level." },
      { role: "GD User", desc: "Accesses the localized, country-level documents uploaded by RC and physically conducts the field fix on the vehicle." },
      { role: "Admin User", desc: "Has overarching control to manage master modules, configure system settings, and assign user roles." },
    ],
    processTitle1: "Role-Based Information Architecture",
    processDesc1: "We started by mapping the precise data boundaries between headquarters, regional, and ground users. The architecture relies heavily on Role-Based Access Control (RBAC) to ensure that a QM Creator sees a completely different dashboard interface than an RC User, reducing cognitive load and preventing unauthorized data access.",
    processTitle2: "Segregation & Data Partitioning",
    processDesc2: "One of the toughest challenges was designing the UI for VIN and market-level segregation. We designed complex, multi-select data tables that allow CSHQ users to slice and partition field fixes by market regulations, while ensuring the UI remained highly legible.",
    processTitle3: "Interactive Progress Tracking",
    processDesc3: "To prevent the system from feeling like a black box, we designed an interactive global dashboard. Regardless of their role, users can visualize the exact stage of a field fix in the pipeline, ensuring transparency across the entire Mitsubishi network.",
    finalUiTitle: "Cohesive Identity Across 7 Roles",
    finalUiDescription: "Despite the extreme variance in permissions and required actions, we maintained a strict, unified design language across all 7 user roles. By utilizing a modular component library, we ensured that whether an Admin is assigning roles or a GD User is downloading a technical manual, the experience feels instantly familiar and highly premium.",
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
      { value: "7", label: "Bespoke user role interfaces delivered, each tailored to specific operational tasks." },
      { value: "Global", label: "Seamless data segregation across regional (RC) and country-level markets." },
      { value: "1 system", label: "Scalable component library built to absorb future automotive modules." },
    ],
    outcomeQuote: "The Osprey portal proves that enterprise-grade security and role-based access control don't have to come at the expense of a beautiful, intuitive user experience.",
    outcomeQuoteAuthor: "Key Takeaway: Designing for Scale and Security",
    prevCaseName: "KOVA Health Portal",
    prevCaseUrl: "kova",
    nextCaseName: "Honda PDI Automation",
    nextCaseUrl: "honda-booking",
  },

  // Case 3: Honda
  "honda-booking": {
    id: "honda-booking",
    numStr: "03/05",
    domain: "Automotive & Mobility",
    tags: ["Automotive PDI", "Field Inspection App", "Enterprise Workflow"],
    title: "PDI Automation Module — My Honda App",
    subtitle: "Digitizing Honda's manual Pre-Delivery Inspection (PDI) process into a mobile module, enabling dealership supervisors and technicians to manage vehicle inspections digitally instead of using paper checklists.",
    specs: [
      { label: "Client", value: "Honda (HMSI)" },
      { label: "Role", value: "UX Researcher & UI Designer (end-to-end)" },
      { label: "Platform", value: "Mobile application (module within My Honda app)" },
      { label: "Focus", value: "Enterprise/B2B workflow tool for dealership staff" },
    ],
    gradient: "linear-gradient(135deg, #CC0000, #8B0000)",
    textColor: "#F9F9F9",
    icon: "◈",
    heroImage: "/PDI_Banner.png",
    
    // The Problem
    problemQuestion: "Honda's Pre-Delivery Inspection (PDI) process was entirely manual. Store managers and technicians walked to each vehicle individually, filling out a physical paper checklist point by point. This created several issues:",
    problemPretext: "",
    problemCards: [
      { title: "No Digital Record", desc: "No digital record of inspections existed, creating a massive paper trail." },
      { title: "No Accountability", desc: "No way to track technician progress or individual accountability." },
      { title: "Zero Visibility", desc: "No visibility for supervisors into inspection status across the entire store." },
      { title: "Manual Compliance", desc: "If a vehicle wasn't sold within 15 days, the PDI process had to be manually repeated with no system to flag this rule." }
    ],
    
    // My Role (using overviewP2)
    overviewP1: "Honda wanted to digitize this process into a mobile module to reduce manual work and standardize inspections across dealerships.",
    overviewP2: "Led the UX and UI design process end-to-end: conducted stakeholder and field research, defined user roles and flows, designed wireframes and high-fidelity screens, and ensured consistency with the existing My Honda app design system.",
    
    // Research
    researchSectionTitle: "Discovery & Research",
    researchDescription: "Conducted two on-site meetings at the Honda office with company stakeholders to gather business requirements. Also interviewed dealership technicians directly to understand the real, on-ground workflow and pain points, rather than relying only on stakeholder assumptions. This field research revealed that technicians had been performing this process manually for years and were not highly tech-savvy, which directly shaped the design approach — the digital flow needed to mirror their existing mental model rather than reinvent the process.",
    researchQuote: "Technicians were doing this process manually for years — the digital version needed to mirror their mental model, not reinvent it.",
    
    // User Roles
    rolesSectionTitle: "User Roles",
    userRoles: [
      { role: "Supervisor", desc: "Goal: Assign vehicles to technicians efficiently and track store-wide inspection progress. Has a list of all vehicles in their store and assigns specific vehicles to specific technicians." },
      { role: "Technician", desc: "Goal: Complete PDI checks quickly and accurately, flag issues when found. Receives assigned vehicle list and performs step-by-step inspection using a checklist." }
    ],

    // User Flow
    userFlowSteps: [
      "Supervisor views full vehicle list in store",
      "Supervisor assigns vehicles to technicians",
      "Technician receives assigned vehicle list",
      "Technician starts PDI checklist (3 sequential steps)",
      "Technician checks each checkpoint one by one",
      "If issue: upload photo and add description",
      "If issue exists: create job card for repair",
      "Business rule: 15-day re-inspection tracking"
    ],
    
    // Design Decisions
    designDecisions: [
      { title: "Mental Model Alignment", desc: "Kept the digital process close to the familiar paper process to reduce learning curve." },
      { title: "Chunking the Checklist", desc: "Split the checklist into 3 clear steps — chunking improves clarity and sense of progress." },
      { title: "Minimal, Functional UI", desc: "Prioritized speed and clarity over visual complexity since technicians use this on the shop floor." },
      { title: "Accountability via Photos", desc: "Photo + description issue reporting creates a clear digital record for repair teams." },
      { title: "Automated Compliance", desc: "Built-in 15-day re-inspection logic ensures vehicles are never sold without a valid recent inspection." }
    ],
    
    // UI
    wireframesImage: "/PDI_Wireframe.png",
    finalUiImages: [
      { src: "/SupervisorDashboard_PDI.png", heading: "Supervisor dashboard" },
      { src: "/AssignTechnician_PDI.png", heading: "Vehicle assignment screen" },
      { src: "/VehicleListTechnician_PDI.png", heading: "Technician vehicle list" },
      { src: "/ChecklistStep_PDI.png", heading: "Checklist step screens (1, 2, 3)" },
      { src: "/IssueReporting_PDI.png", heading: "Issue reporting with photo upload" },
      { src: "/JobCard_PDI.png", heading: "Job card creation screen" }
    ],
    finalUiTitle: "Wireframes to Final UI",
    finalUiDescription: "The module was designed to sit within the existing My Honda app, maintaining the app's established visual language — color palette, typography, iconography, and component style — while introducing a completely new workflow and feature set.",
    
    // Outcomes & Reflection
    challengesText: "Balancing 'automation' with 'familiarity' — designing a modern digital tool for users who were not habitually tech-savvy and had only ever used a paper-based process. Also designing two distinct but connected user experiences (Supervisor and Technician) within a single cohesive module.",
    outcomeBullets: [
      "Reduced manual paperwork for technicians and supervisors",
      "Faster inspection turnaround per vehicle",
      "Better visibility and tracking for supervisors across all store vehicles",
      "Standardized inspection quality across Honda dealerships",
      "Automated tracking of the 15-day re-inspection business rule"
    ],
    reflectionText: "Field research with actual technicians shaped the design differently than initial stakeholder assumptions — reinforcing the importance of talking to real end users, not just business stakeholders, when designing workflow tools for non-tech-savvy audiences.",
    
    // Needed to satisfy interface
    businessObjectiveQuestion: "",
    businessMetrics: [],
    processTitle1: "",
    processDesc1: "",
    processTitle2: "",
    processDesc2: "",
    processTitle3: "",
    processDesc3: "",
    outcomeMetrics: [],
    outcomeQuote: "",
    outcomeQuoteAuthor: "",
    prevCaseName: "Osprey: FUSO Fleet & HAWK",
    prevCaseUrl: "fuso-hawk",
    nextCaseName: "Osprey: FUSO Fleet & HAWK",
    nextCaseUrl: "fuso-hawk",
    placeholders: {
      hero: "Hero Placeholder",
      ia: "IA Placeholder",
      wire1: "Wire 1 Placeholder",
      wire2: "Wire 2 Placeholder",
      ui1: "UI 1 Placeholder",
      ui2: "UI 2 Placeholder",
      ui3: "UI 3 Placeholder"
    }
  },

  // Case 4: Digital Seva
  "seva": {
    id: "seva",
    numStr: "04/05",
    domain: "GovTech & Accessibility",
    tags: ["GovTech", "Accessibility", "IIT Delhi Research"],
    title: "Digital Seva Portal",
    subtitle: "A government-backed digital services platform built for VLEs (Village Level Entrepreneurs) — local agents who act as the bridge between government/utility services and rural citizens across India.",
    specs: [
      { label: "Client/Org", value: "CSC e-Governance" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Collaboration", value: "IIT Delhi (UX Research)" },
      { label: "Platform", value: "Web portal" }
    ],
    gradient: "linear-gradient(135deg, #A0A83C, #C4CC60)",
    textColor: "#16140F",
    icon: "✦",
    heroImage: "/DGSeva_Banner.png",
    
    // Overview
    overviewP1: "Through this portal, VLEs help rural people access everyday essential services such as electricity bill payments, water bill payments, and government form submissions, without citizens needing to travel to city offices or navigate digital systems themselves.",
    overviewP2: "The challenge wasn't just building a functional portal. It was building one that worked for a very specific user group: VLEs operating in rural conditions, frequently outdoors in bright sunlight, with varying levels of digital literacy, using low-end devices.",
    
    // The Problem
    problemQuestion: "Rural India has historically had limited direct access to digital government and utility services, forcing citizens to travel long distances or depend on unorganized help.",
    problemCards: [
      { title: "No Unified Digital Portal", desc: "CSC's network of VLEs already existed to bridge the gap, but there was no single easy-to-use digital portal for them to deliver multiple services." },
      { title: "Underserved User Group", desc: "VLEs operate in rural conditions, frequently outdoors, using low-end devices with varying levels of digital literacy." },
      { title: "Environmental Constraints", desc: "Agents often work in bright sunlight with poor screen visibility, serving citizens who may not navigate digital interfaces easily themselves." }
    ],
    
    // Research
    researchDescription: "This project stood out because of its dedicated research partnership with IIT Delhi, brought in specifically to study how rural VLEs and citizens interact with digital services. The research focused on defining the actual end user, identifying realistic digital literacy levels, and understanding environmental conditions like lighting and network reliability.",
    researchQuote: "The research made it clear that this wasn't a typical urban SaaS design problem — visibility in sunlight, low digital literacy, and trust in a government-linked interface were as important as usability itself.",
    researchItems: [
      { title: "Outdoor Operation", desc: "VLEs frequently operate in direct sunlight, where standard UI contrast and color choices become hard to read." },
      { title: "Low Digital Literacy", desc: "Many VLEs and their customers need an interface that prioritizes clarity and simplicity over density of information." },
      { title: "Trust and Familiarity", desc: "Since this portal replaces a paper process, users needed visual cues that felt reliable and official, similar to trusted government touchpoints." }
    ],
    
    // Roles
    rolesSectionTitle: "Defining the Primary User",
    userRoles: [
      { role: "Village Level Entrepreneur (VLE)", desc: "The primary user is not a typical office-goer or urban smartphone user — it's an agent working in rural India, often outdoors, serving citizens unfamiliar with digital interfaces. This meant designing for accessibility and clarity above all else, rather than following typical modern minimalist or trend-driven UI patterns." }
    ],
    
    // User Flow / Process
    userFlowSteps: [
      "Discovery & Research: Partnered with IIT Delhi to study VLEs and rural citizens directly.",
      "Defining Requirements: Translated research findings into design requirements (high visibility, trust-building visuals).",
      "Information Architecture: Structured the portal around service-first navigation.",
      "Wireframing: Built low-fidelity wireframes to map out simplified, linear task flows.",
      "Visual Design: Applied high-contrast colors and sunlight-readable typography.",
      "Validation: Validated decisions against IIT Delhi research insights to ensure real-world outdoor usability."
    ],
    
    // Design Decisions
    designDecisions: [
      { title: "Bright, high-contrast color theme", desc: "A brighter, higher-contrast palette was chosen so VLEs working outdoors in bright sunlight could clearly read the screen." },
      { title: "Sunlight-readable typography", desc: "Font choice prioritized clear letterforms, sufficient weight, and strong contrast over stylistic considerations." },
      { title: "Simplified, guided user flows", desc: "Flows for common tasks were kept linear and step-by-step, minimizing decision points to reduce user error." },
      { title: "Familiar, trust-building visuals", desc: "The design intentionally echoed patterns rural users associate with legitimate government platforms to reinforce trust." },
      { title: "Service-first navigation", desc: "Core services like electricity and water bill payments were made the most prominent, representing the highest-frequency tasks." }
    ],
    
    // UI
    wireframesImage: ["/DSCWireframe1.png", "/DSCWireframe2.png"],
    finalUiImages: [
      { src: "placeholder", heading: "Homepage / Service Selection Screen" },
      { src: "placeholder", heading: "Bill Payment Flow" },
      { src: "placeholder", heading: "Form Submission Flow" }
    ],
    finalUiTitle: "Designing for Constraints",
    finalUiDescription: "This section shows how sunlight visibility specifically shaped color and type choices — balancing simplicity for lower digital literacy users without making the portal feel limited.",
    
    // Final UI Part 2
    finalUi2Title: "Additional Screens",
    finalUi2Description: "More views from the final product.",
    finalUi2Images: [
      { src: "placeholder", heading: "Placeholder 1" },
      { src: "placeholder", heading: "Placeholder 2" }
    ],
    
    // Outcomes & Reflection
    challengesText: "Designing for an environment (bright sunlight, outdoor kiosks) that most standard UI/UX best practices don't account for. Balancing simplicity for lower digital literacy users without making the portal feel limited for more experienced VLEs, and building visual trust for a platform handling real payments and government-linked services for users used to manual, in-person transactions.",
    outcomeBullets: [
      "A portal designed specifically around real rural, outdoor usage conditions rather than generic best practices",
      "Simplified, guided flows that reduced errors and confusion for VLEs with varying digital literacy",
      "A visual design system that improved on-screen readability in direct sunlight — a critical, often-overlooked accessibility factor",
      "Strengthened user trust through familiar, government-platform-style visual language"
    ],
    reflectionText: "This project reinforced how much 'usability' changes depending on real-world context — sunlight readability and trust-building visuals mattered as much as standard UX principles like flow simplicity. Collaborating with IIT Delhi's research team also showed the value of grounding design decisions in field research for underserved user groups, rather than relying on typical urban-user assumptions.",
    
    // Required unused keys to satisfy interface
    businessObjectiveQuestion: "",
    businessMetrics: [],
    processTitle1: "",
    processDesc1: "",
    outcomeMetrics: [],
    outcomeQuote: "",
    outcomeQuoteAuthor: "",
    
    // Navigation
    prevCaseName: "PDI Automation Module — My Honda App",
    prevCaseUrl: "honda-booking",
    nextCaseName: "SwilMart Commerce",
    nextCaseUrl: "swilmart",
    placeholders: {
      hero: "Hero Image Placeholder",
      ia: "IA Placeholder",
      wire1: "Wire 1 Placeholder",
      wire2: "Wire 2 Placeholder",
      ui1: "UI 1 Placeholder",
      ui2: "UI 2 Placeholder",
      ui3: "UI 3 Placeholder"
    }
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
    prevCaseName: "Digital Seva",
    prevCaseUrl: "seva",
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
    prevCaseName: "SwilMart Commerce",
    prevCaseUrl: "swilmart",
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
    prevCaseName: "BrainWave AI Canvas",
    prevCaseUrl: "brainwave-ai",
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
    prevCaseName: "Synthflow UX Sound Sandbox",
    prevCaseUrl: "synthflow-ux",
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
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Initialize theme from HTML element attribute on mount
  useEffect(() => {
    const active = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setTheme(active || "dark");
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
        <div className="flex items-center gap-4">
          {study.prevCaseUrl && (
            <Link
              href={`/case-studies/${study.prevCaseUrl}`}
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#BF4B0A",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← <span className="hidden sm:inline">Prev: {study.prevCaseName}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          )}
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
        </div>
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
        {study.heroImage ? (
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            {/* Using a standard img tag to bypass all Next.js optimization and prevent aspect ratio cropping/stretching */}
            <img src={study.heroImage} alt={`${study.title} hero mockup`} className="w-full h-auto block" />
          </div>
        ) : (
          <ImageSlot placeholder={study.placeholders.hero} height="520px" />
        )}
      </div>

      {/* Main content sections */}
      <div ref={mainRef}>
        {/* 01 · Overview */}
        <section className="w-full px-4 md:px-8 xl:px-12 pt-12 pb-20">
          <div className="w-full max-w-[1100px] mx-auto">
            <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">01</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                Overview
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <div style={{ maxWidth: "900px", textAlign: "center" }}>
                <p className="reveal" style={{ fontSize: "1.15rem", marginBottom: "1.2rem", color: "var(--foreground)", lineHeight: 1.65 }}>
                  {study.overviewP1}
                </p>
                <p className="reveal" style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {study.overviewP2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 · The User Challenge (Dark section Part A) */}
        <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", color: "var(--foreground)" }}>
          <div className="w-full max-w-[1100px] mx-auto">
            <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">02</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                {study.challengeTitleOverride ? study.challengeTitleOverride.replace("02 · ", "") : "The User Challenge"}
              </h2>
            </div>
            <div className="w-full flex justify-center mb-16">
              <div className="relative w-full max-w-[900px]">
                 <div className="absolute -top-12 -left-4 md:-left-8 text-[10rem] text-[#BF4B0A]/10 font-serif leading-none select-none pointer-events-none z-0">
                    "
                 </div>
                 
                 {/* Decorative Top Accent */}
                 <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                    <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#BF4B0A]/80"></div>
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H10V10H0V0Z" fill="#BF4B0A" fillOpacity="0.5"/>
                      <path d="M15 0H25V10H15V0Z" fill="#BF4B0A"/>
                      <path d="M30 0H40V10H30V0Z" fill="#BF4B0A" fillOpacity="0.5"/>
                    </svg>
                    <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#BF4B0A]/80"></div>
                 </div>

                 <div className="reveal relative z-10 p-8 md:p-12 rounded-3xl bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 text-center">
                    {study.problemQuestion.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="reveal"
                        style={{
                          fontSize: "1.15rem",
                          lineHeight: 1.8,
                          color: "var(--foreground)",
                          fontWeight: 400,
                          marginBottom: i === study.problemQuestion.split('\n\n').length - 1 ? "0" : "1.5rem",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                 </div>
              </div>
            </div>

            {study.problemPretext && (
              <p className="reveal" style={{ fontSize: "1.15rem", color: "#A0A83C", marginBottom: "2.5rem", fontWeight: 500 }}>
                {study.problemPretext}
              </p>
            )}

            {study.problemCards && study.problemCards.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {study.problemCards.map((card) => (
                  <div key={card.title} className="reveal" style={{ border: "1px solid rgba(242,238,230,0.15)", padding: "1.6rem", borderRadius: "6px" }}>
                    <div style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.4rem", color: "#BF4B0A", marginBottom: "0.6rem" }}>
                      {card.title}
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {study.beforeImage && study.afterImage && (
              <div className="reveal" style={{ marginTop: "4rem" }}>
                <div style={{ fontSize: "1.15rem", color: "#A0A83C", marginBottom: "1.5rem", fontWeight: 500 }}>
                  Legacy vs Redesign Comparison
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", color: "var(--text-muted)" }}>Before (Legacy System)</div>
                    <div style={{ border: "1px solid rgba(242,238,230,0.1)", borderRadius: "12px", overflow: "hidden", backgroundColor: "#000" }}>
                      <img src={study.beforeImage} alt="Legacy UI Before" className="w-full h-auto block" />
                    </div>
                    {study.beforeText && (
                      <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{study.beforeText}</p>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", color: "#A0A83C", fontWeight: 600 }}>After (New Design System)</div>
                    <div style={{ border: "1px solid rgba(160,168,60,0.3)", borderRadius: "12px", overflow: "hidden", backgroundColor: "#000", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                      <img src={study.afterImage} alt="Redesigned UI After" className="w-full h-auto block" />
                    </div>
                    {study.afterText && (
                      <p style={{ fontSize: "0.95rem", color: "var(--foreground)", lineHeight: 1.6 }}>{study.afterText}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        
                {/* Research & Analysis Section */}
        {study.researchItems && study.researchItems.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", borderTop: "1px solid var(--border)" }}>
             <div className="reveal relative w-full max-w-[1100px] mx-auto">
               <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">03</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.researchSectionTitle || "Research & Analysis"}
                  </h2>
               </div>
               
               {study.researchDescription && (
                 <div className="w-full flex justify-center mb-16">
                   <p className="reveal max-w-[800px] text-center" style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                     {study.researchDescription}
                   </p>
                 </div>
               )}
               {study.researchQuote && (
                 <div className="w-full max-w-[800px] mx-auto mb-16 relative p-8 md:p-12 rounded-3xl bg-[var(--section-bg-alt)] border-l-[6px] border-[#CC0000] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                   <div className="absolute top-4 left-6 text-[#CC0000] opacity-20 font-serif text-8xl leading-none">"</div>
                   <p className="relative z-10 text-[1.2rem] md:text-[1.5rem] font-serif text-[var(--foreground)] leading-relaxed italic text-center px-4 md:px-8">
                     {study.researchQuote}
                   </p>
                 </div>
               )}
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {study.researchItems.map((item, idx) => (
                   <div key={item.title} className="reveal relative p-8 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group hover:border-[#BF4B0A]/50 transition-all duration-300 hover:-translate-y-2">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#BF4B0A]/10 text-[#BF4B0A] font-bold text-sm">
                           0{idx + 1}
                        </div>
                        <h4 className="text-[1.1rem] font-bold text-[var(--foreground)] group-hover:text-[#BF4B0A] transition-colors">{item.title}</h4>
                     </div>
                     <p className="text-[0.95rem] text-[var(--text-muted)] leading-relaxed pl-14">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>
        )}

{/* Role-Based Workflow Section */}
        {study.userRoles && study.userRoles.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--background)", borderTop: "1px solid var(--border)" }}>
             <div className="reveal relative w-full max-w-[1100px] mx-auto">
               <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">04</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.rolesSectionTitle || "Role-Based Workflow"}
                  </h2>
               </div>
               
               <div className="relative w-full max-w-[1100px] mx-auto">
                  <div className="flex flex-wrap justify-center items-stretch gap-6">
                     {study.userRoles.map((role, idx) => (
                        <div key={role.role} className="reveal relative p-6 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-[#BF4B0A]/50 flex flex-col flex-1 min-w-[280px] max-w-[350px]">
                           <div className="text-[#A0A83C] font-serif text-4xl italic opacity-20 absolute top-4 right-6 pointer-events-none group-hover:opacity-50 transition-opacity duration-300">
                              {(idx + 1).toString().padStart(2, '0')}
                           </div>
                           <h4 className="text-[1.1rem] font-bold text-[#BF4B0A] mb-3 pr-8">{role.role}</h4>
                           <p className="text-[0.9rem] text-[var(--text-muted)] leading-relaxed flex-grow">{role.desc}</p>
                           
                           {/* Small connected node indicator to imply pipeline */}
                           <div className="mt-4 flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-[#BF4B0A] opacity-50 group-hover:opacity-100 transition-opacity" />
                             <div className="flex-grow h-[1px] bg-gradient-to-r from-[#BF4B0A]/30 to-transparent" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* 03 · Heuristic Evaluation */}
        {study.heuristics && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", borderTop: "1px solid var(--border)" }}>
             <div className="reveal relative w-full max-w-[1100px] mx-auto">
               <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">03</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                Heuristic Evaluation
              </h2>
            </div>
               
               {/* Desktop Layout */}
               <div className="hidden lg:flex flex-col items-center gap-y-8 w-full relative z-10">
                 

                 
                 {/* Middle Row */}
                 <div className="flex flex-row items-stretch justify-center gap-x-8 w-full">
                    
                    {/* Left Column */}
                    <div className="flex flex-col justify-around gap-12 text-left w-[28%]">
                       {[study.heuristics[0], study.heuristics[2]].map((h, idx) => (
                         <div key={h.title} className="reveal relative p-5 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-[#BF4B0A]/50">
                           <div className="flex items-center justify-between mb-2">
                             <div className="text-[#BF4B0A] font-bold text-[0.7rem] uppercase tracking-wider">{h.heuristic}</div>
                             {h.severity && (
                               <div className="flex items-center gap-1.5">
                                 <div className={`w-2 h-2 rounded-full ${h.severity === 'High' ? 'bg-[#E53935]' : h.severity === 'Medium' ? 'bg-[#FB8C00]' : 'bg-[#A0A83C]'}`} />
                                 <span className="text-[0.6rem] uppercase tracking-widest text-[var(--text-muted)]">{h.severity}</span>
                               </div>
                             )}
                           </div>
                           <h4 className="text-[1rem] font-bold text-[var(--foreground)] mb-2 group-hover:text-[#BF4B0A] transition-colors">{h.title}</h4>
                           <p className="text-[0.85rem] text-[var(--text-muted)] leading-relaxed">{h.desc}</p>
                           
                           <div className="absolute top-1/2 -right-8 w-8 border-t-2 border-[var(--border)] border-dashed -z-10 group-hover:border-[#BF4B0A] transition-colors duration-300">
                             <div className="absolute -top-[5px] -right-[4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[var(--border)] group-hover:border-l-[#BF4B0A] transition-colors duration-300" />
                             <div className="absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-[#BF4B0A]" />
                           </div>
                         </div>
                       ))}
                    </div>
                    
                    {/* Center Image */}
                    <div className="relative w-[44%] flex-shrink-0 z-20 flex items-center">
                       <img src={study.beforeImage} alt="Heuristic Evaluation" className="w-full h-auto rounded-[16px] border-[4px] border-[#3A362C] shadow-[0_30px_60px_rgba(0,0,0,0.8)]" />
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex flex-col justify-center gap-12 text-left w-[28%]">
                       {[study.heuristics[1]].map((h, idx) => (
                         <div key={h.title} className="reveal relative p-5 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-[#BF4B0A]/50">
                           <div className="flex items-center justify-between mb-2">
                             <div className="text-[#BF4B0A] font-bold text-[0.7rem] uppercase tracking-wider">{h.heuristic}</div>
                             {h.severity && (
                               <div className="flex items-center gap-1.5">
                                 <div className={`w-2 h-2 rounded-full ${h.severity === 'High' ? 'bg-[#E53935]' : h.severity === 'Medium' ? 'bg-[#FB8C00]' : 'bg-[#A0A83C]'}`} />
                                 <span className="text-[0.6rem] uppercase tracking-widest text-[var(--text-muted)]">{h.severity}</span>
                               </div>
                             )}
                           </div>
                           <h4 className="text-[1rem] font-bold text-[var(--foreground)] mb-2 group-hover:text-[#BF4B0A] transition-colors">{h.title}</h4>
                           <p className="text-[0.85rem] text-[var(--text-muted)] leading-relaxed">{h.desc}</p>
                           
                           <div className="absolute top-1/2 -left-8 w-8 border-t-2 border-[var(--border)] border-dashed -z-10 group-hover:border-[#BF4B0A] transition-colors duration-300">
                             <div className="absolute -top-[5px] -left-[4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-[var(--border)] group-hover:border-r-[#BF4B0A] transition-colors duration-300" />
                             <div className="absolute -top-[4px] right-0 w-2 h-2 rounded-full bg-[#BF4B0A]" />
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>

               {/* Mobile Layout */}
               <div className="lg:hidden flex flex-col gap-8 mt-10">
                 <div className="relative w-full rounded-[12px] border-[2px] border-[#3A362C] overflow-hidden mb-6">
                   <img src={study.beforeImage} alt="Heuristic Evaluation" className="w-full h-auto block" />
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {study.heuristics.map((h, i) => (
                     <div key={h.title} className="p-5 rounded-2xl bg-[#1D1B16] border border-[#BF4B0A]/30 shadow-lg">
                       <div className="flex items-center justify-between mb-2">
                         <div className="text-[#BF4B0A] font-bold text-[0.7rem] uppercase tracking-wider">{h.heuristic}</div>
                         {h.severity && (
                           <div className="flex items-center gap-1.5">
                             <div className={`w-2 h-2 rounded-full ${h.severity === 'High' ? 'bg-[#E53935]' : h.severity === 'Medium' ? 'bg-[#FB8C00]' : 'bg-[#A0A83C]'}`} />
                             <span className="text-[0.6rem] uppercase tracking-widest text-[var(--text-muted)]">{h.severity}</span>
                           </div>
                         )}
                       </div>
                       <h4 className="text-[0.95rem] font-bold text-[var(--foreground)] mb-2">{h.title}</h4>
                       <p className="text-[0.85rem] text-[var(--text-muted)] leading-relaxed">{h.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>

             </div>
          </section>
        )}

        {study.componentsImage && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", borderTop: "1px solid var(--border)" }}>
            <div className="reveal w-full max-w-[1100px] mx-auto">
              {study.componentsSectionTitle && (
                <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">04</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                {study.componentsSectionTitle}
              </h2>
            </div>
              )}
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
                <img src={study.componentsImage} alt="Design Components" className="w-full h-auto block" />
              </div>
            </div>
          </section>
        )}


        {/* 05 · Login Interface */}
        {study.loginImage && study.loginFeatures && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20">
            <div className="reveal relative w-full max-w-[1100px] mx-auto p-8 lg:p-10 rounded-[40px] overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}>
              
              {/* Crazy Creative Decorative Background Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#BF4B0A]/30" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#A0A83C]/30" />
              <div className="absolute top-12 right-12 text-[#A0A83C]/10 text-6xl font-serif italic tracking-widest pointer-events-none">LOGIN</div>
              <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full border border-[#BF4B0A]/10 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <pattern id="login-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" strokeWidth="1" />
                      </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#login-grid)" />
                </svg>
              </div>

              {/* Ambient Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #BF4B0A 0%, transparent 70%)" }} />

              <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">05</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                Login Experience
              </h2>
            </div>
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex flex-row items-stretch justify-center gap-x-8 w-full relative z-10">
                 
                 {/* Left Column (2 features) */}
                 <div className="flex flex-col justify-center gap-6 text-left w-[30%]">
                   {[study.loginFeatures[0], study.loginFeatures[1]].map((f, i) => (
                     <div key={f.title} className="reveal relative p-5 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[var(--glass-border)] group hover:border-[#BF4B0A]/50 z-10">
                       <div className="flex items-start gap-3 mb-1">
                          <span className="text-[#A0A83C] font-serif text-xl italic pt-[2px]">{(i + 1).toString().padStart(2, '0')}</span>
                          <h4 className="text-[0.95rem] font-bold uppercase tracking-wider text-[var(--foreground)] mt-1 group-hover:text-[#BF4B0A] transition-colors">{f.title}</h4>
                       </div>
                       <p className="text-[0.85rem] text-[var(--text-muted)] pl-[34px] leading-relaxed">{f.desc}</p>
                       
                       {/* Arrow pointing right */}
                       <svg className="absolute top-1/2 -right-[32px] w-[32px] h-[30px] -translate-y-1/2 overflow-visible -z-10" fill="none">
                           <path d="M 0 15 L 20 15" stroke="#BF4B0A" strokeWidth="2" strokeDasharray="4 4" className="opacity-40 group-hover:opacity-100 group-hover:animate-dash transition-opacity duration-300" />
                           <polygon points="18,10 28,15 18,20" fill="#BF4B0A" className="opacity-40 group-hover:opacity-100 group-hover:animate-dash transition-opacity duration-300" />
                           <circle cx="0" cy="15" r="4" fill="#A0A83C" />
                       </svg>
                     </div>
                   ))}
                 </div>
                 
                 {/* Center Image */}
                 <div className="relative w-[40%] flex-shrink-0 z-20 mx-0">
                    <div className="relative rounded-[24px] overflow-hidden border-[6px] border-[var(--section-bg-alt)] shadow-[0_30px_60px_rgba(0,0,0,0.2),_0_0_0_1px_var(--border)] bg-[var(--section-bg-alt)]">
                       <img src={study.loginImage} alt="Login Interface" className="w-full h-auto block" />
                    </div>
                 </div>
                 
                 {/* Right Column (2 features) */}
                 <div className="flex flex-col justify-center gap-6 text-left w-[30%]">
                   {[study.loginFeatures[2], study.loginFeatures[3]].map((f, i) => (
                     <div key={f.title} className="reveal relative p-5 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[var(--glass-border)] group hover:border-[#BF4B0A]/50 z-10">
                       <div className="flex items-start gap-3 mb-1">
                          <span className="text-[#A0A83C] font-serif text-xl italic pt-[2px]">{(i + 3).toString().padStart(2, '0')}</span>
                          <h4 className="text-[0.95rem] font-bold uppercase tracking-wider text-[var(--foreground)] mt-1 group-hover:text-[#BF4B0A] transition-colors">{f.title}</h4>
                       </div>
                       <p className="text-[0.85rem] text-[var(--text-muted)] pl-[34px] leading-relaxed">{f.desc}</p>
                       
                       {/* Arrow pointing left */}
                       <svg className="absolute top-1/2 -left-[32px] w-[32px] h-[30px] -translate-y-1/2 overflow-visible -z-10" fill="none">
                           <path d="M 32 15 L 14 15" stroke="#BF4B0A" strokeWidth="2" strokeDasharray="4 4" className="opacity-40 group-hover:opacity-100 group-hover:animate-dash transition-opacity duration-300" />
                           <polygon points="16,10 6,15 16,20" fill="#BF4B0A" className="opacity-40 group-hover:opacity-100 group-hover:animate-dash transition-opacity duration-300" />
                           <circle cx="64" cy="15" r="4" fill="#A0A83C" />
                       </svg>
                     </div>
                   ))}
                 </div>
                 
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-8 mt-10 relative z-10">
                 <div className="relative w-full rounded-[12px] border-[2px] border-[#3A362C] overflow-hidden mb-6 max-w-[400px] mx-auto shadow-2xl">
                   <img src={study.loginImage} alt="Login Interface" className="w-full h-auto block" />
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {study.loginFeatures.map((f, i) => (
                     <div key={f.title} className="p-5 rounded-2xl bg-[#1D1B16] border border-[#A0A83C]/20 shadow-lg group hover:border-[#BF4B0A]/50 transition-colors">
                       <div className="flex items-start gap-3 mb-1">
                          <span className="text-[#A0A83C] font-serif text-xl italic pt-[2px]">{(i + 1).toString().padStart(2, '0')}</span>
                          <h4 className="text-[0.95rem] font-bold uppercase tracking-wider text-[var(--foreground)] mt-1 group-hover:text-[#BF4B0A] transition-colors">{f.title}</h4>
                       </div>
                       <p className="text-[0.85rem] text-[var(--text-muted)] pl-[34px] leading-relaxed">{f.desc}</p>
                     </div>
                   ))}
                 </div>
              </div>

            </div>
          </section>
        )}

        {(study.finalUiImage || (study.finalUiImages && study.finalUiImages.length > 0)) && (
          <section className="w-full px-4 md:px-8 xl:px-12 pb-20">
            <div className="w-full max-w-[1100px] mx-auto">
              <div className="reveal w-full flex flex-col items-center mb-16">
                <div className="flex justify-center items-center gap-4">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">08</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUiTitle || "Final UI"}
                  </h2>
                </div>
                {study.finalUiDescription && (
                  <div className="w-full flex justify-center mt-6">
                    <p className="text-center text-[var(--text-muted)] max-w-[800px] text-lg">
                      {study.finalUiDescription}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-16">
                {study.wireframesImage === 'placeholder' ? (
                  <div className="w-full p-20 border-2 border-dashed border-[var(--border)] rounded-3xl flex items-center justify-center mb-16 bg-[var(--section-bg-alt)]">
                     <p className="text-[var(--text-muted)] font-mono text-xl tracking-widest">[IMAGE PLACEHOLDER: Low-fidelity wireframes]</p>
                  </div>
                ) : Array.isArray(study.wireframesImage) ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                     {study.wireframesImage.map((src, idx) => (
                        <div key={idx} className="reveal relative w-full rounded-2xl overflow-hidden border border-[var(--border)]/30" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                           <img src={src} alt={`Wireframes ${idx + 1}`} className="w-full h-auto block" />
                        </div>
                     ))}
                  </div>
                ) : study.wireframesImage ? (
                  <div className="reveal relative w-full rounded-2xl overflow-hidden mb-16 border border-[var(--border)]/30" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                    <img src={study.wireframesImage} alt="Wireframes" className="w-full h-auto block" />
                  </div>
                ) : null}
                {study.finalUiImage && (
                  <div className="reveal relative w-full rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}>
                    <img src={study.finalUiImage} alt="Final UI" className="w-full h-auto block" />
                  </div>
                )}
                {study.finalUiImages && study.finalUiImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {study.finalUiImages.map((img, idx) => (
                      <div key={idx} className="reveal relative w-full flex flex-col gap-4">
                        {img.heading && (
                          <h3 className="font-serif text-xl md:text-2xl text-[var(--foreground)] px-2">
                            {img.heading}
                          </h3>
                        )}
                        <div className={`relative w-full ${study.id === 'honda-booking' ? 'aspect-[3/4]' : 'aspect-[4/3]'} rounded-2xl overflow-hidden border border-[var(--border)]/30`} style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                          
                          {img.src === "placeholder" ? (
                             <div className="w-full h-full flex items-center justify-center bg-[var(--section-bg-alt)]">
                               <p className="text-[var(--text-muted)] font-mono text-sm tracking-widest text-center px-4">
                                 [IMAGE PLACEHOLDER: {img.heading}]
                               </p>
                             </div>
                          ) : (
                             <img src={img.src} alt={img.heading || `Final UI Screenshot ${idx + 1}`} className={`w-full h-full block ${study.id === 'honda-booking' ? 'object-contain py-4' : 'object-cover object-top'}`} />
                          )}

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </div>

      
        {/* Challenges Section */}
        {study.challengesText && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20 bg-[var(--section-bg-alt)] border-t border-[var(--border)]">
            <div className="w-full max-w-[800px] mx-auto text-center">
              <h2 className="font-serif font-normal text-4xl text-[var(--foreground)] tracking-tighter mb-8">Challenges</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">{study.challengesText}</p>
            </div>
          </section>
        )}

        {/* Outcomes Section */}
        {study.outcomeBullets && study.outcomeBullets.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20 bg-[var(--background)] border-t border-[var(--border)]">
            <div className="w-full max-w-[800px] mx-auto">
              <h2 className="font-serif font-normal text-4xl text-[var(--foreground)] tracking-tighter mb-10 text-center">Outcome / Expected Impact</h2>
              <ul className="flex flex-col gap-4">
                {study.outcomeBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                    <span className="text-[#CC0000] mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-[var(--foreground)] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Reflection Section */}
        {study.reflectionText && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20 bg-[var(--section-bg-alt)] border-t border-[var(--border)]">
            <div className="w-full max-w-[800px] mx-auto text-center">
              <h2 className="font-serif font-normal text-4xl text-[#CC0000] tracking-tighter mb-8">Reflection</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed italic border-t border-b border-[#CC0000]/20 py-8">
                {study.reflectionText}
              </p>
            </div>
          </section>
        )}

  
    </div>
  );
}
