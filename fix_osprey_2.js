const fs = require('fs');
let file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const fusoHawkNew = `"fuso-hawk": {
    id: "fuso-hawk",
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
    nextCaseName: "Honda PDI Automation",
    nextCaseUrl: "honda-booking",
  },`;

// Find the start and end of fuso-hawk object to replace it
const startIndex = content.indexOf('"fuso-hawk": {');
const endIndexStr = '  // Case 3: Honda';
const endIndex = content.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  content = before + fusoHawkNew + '\n\n' + after;
  fs.writeFileSync(file, content);
  console.log('Successfully replaced fuso-hawk data');
} else {
  console.log('Failed to find indices', startIndex, endIndex);
}
