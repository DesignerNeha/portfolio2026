const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Regex to capture the whole "seva" block up to the start of "swilmart"
const regex = /"seva": \{[\s\S]*?(?=\s*\/\/ Case 5: SwilMart)/;

const newSevaContent = `"seva": {
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
    wireframesImage: "placeholder",
    finalUiImages: [
      { src: "placeholder", heading: "Homepage / Service Selection Screen" },
      { src: "placeholder", heading: "Bill Payment Flow" },
      { src: "placeholder", heading: "Form Submission Flow" }
    ],
    finalUiTitle: "Designing for Constraints",
    finalUiDescription: "This section shows how sunlight visibility specifically shaped color and type choices — balancing simplicity for lower digital literacy users without making the portal feel limited.",
    
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
    nextCaseUrl: "swilmart"
  },`;

content = content.replace(regex, newSevaContent);
fs.writeFileSync(file, content);
console.log("Updated seva object successfully.");
