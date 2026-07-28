const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
const interfaceSearch = `  outcomeMetrics: { value: string; label: string }[];`;
const interfaceReplacement = `  researchQuote?: string;
  userFlowSteps?: string[];
  designDecisions?: { title: string; desc: string }[];
  challengesText?: string;
  reflectionText?: string;
  outcomeBullets?: string[];
  wireframesImage?: string;
  outcomeMetrics: { value: string; label: string }[];`;
content = content.replace(interfaceSearch, interfaceReplacement);

// 2. Replace Honda Object
// Find the exact boundaries of Honda object
const hondaStart = content.indexOf('// Case 3: Honda');
const hondaEnd = content.indexOf('// Case 4: Digital Seva');

if (hondaStart > -1 && hondaEnd > -1) {
  const hondaReplacement = `// Case 3: Honda
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
    problemQuestion: "The Problem",
    problemPretext: "Honda's Pre-Delivery Inspection (PDI) process was entirely manual. Store managers and technicians walked to each vehicle individually, filling out a physical paper checklist point by point. This created several issues:",
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
    wireframesImage: "placeholder",
    finalUiImages: [
      { src: "placeholder", heading: "Supervisor dashboard" },
      { src: "placeholder", heading: "Vehicle assignment screen" },
      { src: "placeholder", heading: "Technician vehicle list" },
      { src: "placeholder", heading: "Checklist step screens (1, 2, 3)" },
      { src: "placeholder", heading: "Issue reporting with photo upload" },
      { src: "placeholder", heading: "Job card creation screen" }
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

  `;
  
  content = content.substring(0, hondaStart) + hondaReplacement + content.substring(hondaEnd);
} else {
  console.log("Could not find Honda boundaries.");
}


// 3. Inject new JSX Sections
// A) Light Theme Override
// Let's add a <style> block dynamically if study.id is honda-booking
const mainSectionSearch = `<main className="min-h-screen relative w-full pt-20">`;
const mainSectionReplace = `<main className="min-h-screen relative w-full pt-20">
      {study.id === "honda-booking" && (
        <style dangerouslySetInnerHTML={{ __html: \`
          :root {
            --background: #FFFFFF !important;
            --foreground: #111111 !important;
            --section-bg-alt: #F5F5F5 !important;
            --glass-bg: rgba(255, 255, 255, 0.7) !important;
            --glass-border: rgba(0, 0, 0, 0.05) !important;
            --text-muted: #555555 !important;
            --border: rgba(0, 0, 0, 0.1) !important;
          }
        \`}} />
      )}
`;
content = content.replace(mainSectionSearch, mainSectionReplace);

// B) Inject Research Quote
const researchDescSearch = `{study.researchDescription}
                   </p>
                 </div>
               )}`;
const researchQuoteInject = `{study.researchDescription}
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
               )}`;
content = content.replace(researchDescSearch, researchQuoteInject);

// C) Inject User Flow Diagram & Design Decisions (After User Roles)
const userRolesEndSearch = `</div>
              </div>
           </section>
        )}`;
        
const userFlowAndDecisionsJSX = `</div>
              </div>
           </section>
        )}

        {/* User Flow Diagram */}
        {study.userFlowSteps && study.userFlowSteps.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20 bg-[var(--section-bg-alt)]">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="w-full flex justify-center items-center gap-4 mb-16">
                 <span className="text-sm uppercase tracking-[3px] text-[#CC0000] font-bold">FLOW</span>
                 <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                   User Flow
                 </h2>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-stretch relative">
                {study.userFlowSteps.map((step, idx) => (
                  <div key={idx} className="flex-1 min-w-[200px] p-6 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] shadow-sm relative group hover:border-[#CC0000] hover:shadow-md transition-all flex flex-col justify-center">
                     <span className="text-xs font-bold text-[#CC0000] mb-2 uppercase tracking-wider">Step {idx + 1}</span>
                     <p className="text-sm text-[var(--foreground)] font-medium leading-snug">{step}</p>
                     
                     {idx < study.userFlowSteps.length - 1 && (
                       <div className="hidden lg:block absolute -right-2 top-1/2 w-4 h-[2px] bg-[#CC0000]/30 -translate-y-1/2 z-10" />
                     )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Design Decisions */}
        {study.designDecisions && study.designDecisions.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20 bg-[var(--background)] border-t border-[var(--border)]">
            <div className="w-full max-w-[1100px] mx-auto">
              <div className="w-full flex justify-center items-center gap-4 mb-16">
                 <span className="text-sm uppercase tracking-[3px] text-[#CC0000] font-bold">DECISIONS</span>
                 <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                   Key Design Decisions
                 </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {study.designDecisions.map((decision, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-sm hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-[#CC0000]/10 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#CC0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[var(--foreground)] mb-3">{decision.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{decision.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
`;
content = content.replace(userRolesEndSearch, userFlowAndDecisionsJSX);


// D) Final UI / Wireframes tweaks
// We want to make sure finalUiImages doesn't look weird if they are placeholders.
// It's handled gracefully since they are images. 
// We should update the Final UI heading to finalUiTitle for flexibility.
const finalUiSearch = `<h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                  Final UI
                </h2>`;
const finalUiReplace = `<h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                  {study.finalUiTitle || "Final UI"}
                </h2>
                {study.finalUiDescription && (
                  <div className="w-full flex justify-center mt-6">
                    <p className="text-center text-[var(--text-muted)] max-w-[800px] text-lg">
                      {study.finalUiDescription}
                    </p>
                  </div>
                )}`;
content = content.replace(finalUiSearch, finalUiReplace);


// E) Add Wireframe Placeholders
// Just before final UI images
const finalUiImageSearch = `{study.finalUiImage && (`;
const wireframeReplace = `{study.wireframesImage === 'placeholder' && (
                  <div className="w-full p-20 border-2 border-dashed border-[var(--border)] rounded-3xl flex items-center justify-center mb-16 bg-[var(--section-bg-alt)]">
                     <p className="text-[var(--text-muted)] font-mono text-xl tracking-widest">[IMAGE PLACEHOLDER: Low-fidelity wireframes]</p>
                  </div>
                )}
                {study.finalUiImage && (`;
content = content.replace(finalUiImageSearch, wireframeReplace);


// F) Image Placeholder Logic
const imgTagSearch = `<img src={img.src} alt={img.heading || \`Final UI Screenshot \${idx + 1}\`} className="w-full h-full object-cover object-top block" />`;
const imgTagReplace = `
                          {img.src === "placeholder" ? (
                             <div className="w-full h-full flex items-center justify-center bg-[var(--section-bg-alt)]">
                               <p className="text-[var(--text-muted)] font-mono text-sm tracking-widest text-center px-4">
                                 [IMAGE PLACEHOLDER: {img.heading}]
                               </p>
                             </div>
                          ) : (
                             <img src={img.src} alt={img.heading || \`Final UI Screenshot \${idx + 1}\`} className="w-full h-full object-cover object-top block" />
                          )}
`;
content = content.replace(imgTagSearch, imgTagReplace);


// G) Challenges & Reflection & Outcomes
const footerSearch = `{/* Case Footer */}`;
const bottomSections = `
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

        {/* Case Footer */}`;
content = content.replace(footerSearch, bottomSections);


fs.writeFileSync(file, content);
console.log('Update Script Executed Successfully!');
