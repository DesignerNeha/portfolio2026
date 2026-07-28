const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
content = content.replace(
  'processDesc3: string;',
  'processDesc3: string;\n  researchSectionTitle?: string;\n  researchDescription?: string;\n  researchItems?: { title: string; desc: string }[];'
);

// 2. Add placeholder research content to fuso-hawk
const researchData = `researchSectionTitle: "Research & Analysis",
    researchDescription: "To design a portal that meets the rigorous demands of global field fixes, I conducted extensive user interviews and analyzed existing diagnostic workflows across multiple markets. The key findings directly shaped the resulting information architecture and role-based permissions.",
    researchItems: [
      { title: "Technician Constraints", desc: "Mechanics working under hoists cannot interact with complex UI flows; they need large tap targets and high contrast." },
      { title: "Compliance Redundancy", desc: "Found that CSHQ and RC users were essentially duplicating work. Over 60% of document uploads were identical but manually segregated." },
      { title: "Approval Bottlenecks", desc: "The longest delay in a field fix wasn't the repair, but waiting for QM Approvers to sign off on technical validity via email." }
    ],
    rolesSectionTitle: "The Seven-Tiered Approval Pipeline",`;

content = content.replace(
  'rolesSectionTitle: "The Seven-Tiered Approval Pipeline",',
  researchData
);

// 3. Insert JSX section before Role-Based Workflow
const researchJSX = `        {/* Research & Analysis Section */}
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

`;

content = content.replace('{/* Role-Based Workflow Section */}', researchJSX + '{/* Role-Based Workflow Section */}');

// 4. Manual Renumbering
// 03 -> 04 for Role-Based Workflow
content = content.replace(
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">03</span>\n                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                    {study.rolesSectionTitle',
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">04</span>\n                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                    {study.rolesSectionTitle'
);

// 03 -> 05 for Heuristic Evaluation
content = content.replace(
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">03</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Heuristic Evaluation',
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">05</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Heuristic Evaluation'
);

// 04 -> 06 for Components Section
content = content.replace(
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">04</span>\n                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                    {study.componentsSectionTitle}',
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">06</span>\n                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                    {study.componentsSectionTitle}'
);

// 05 -> 07 for Login Experience
content = content.replace(
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">05</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Login Experience',
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">07</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Login Experience'
);

// 06 -> 08 for Final UI
content = content.replace(
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">06</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Final UI',
  '<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">08</span>\n                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">\n                  Final UI'
);


fs.writeFileSync(file, content);
console.log('Script executed');
