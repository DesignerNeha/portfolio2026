const fs = require('fs');
let file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const rolesSection = `
        {/* Role-Based Workflow Section */}
        {study.userRoles && study.userRoles.length > 0 && (
          <section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--background)", borderTop: "1px solid var(--border)" }}>
             <div className="reveal relative w-full max-w-[1100px] mx-auto">
               <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">03</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.rolesSectionTitle || "Role-Based Workflow"}
                  </h2>
               </div>
               
               <div className="relative w-full max-w-[800px] mx-auto">
                  {/* Vertical Line */}
                  <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#BF4B0A]/10 via-[#BF4B0A]/30 to-[#BF4B0A]/10 -translate-x-1/2"></div>
                  
                  <div className="flex flex-col gap-12 md:gap-8">
                     {study.userRoles.map((role, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                           <div key={role.role} className={\`reveal relative flex w-full \${isEven ? 'justify-start md:justify-end' : 'justify-start'} items-center\`}>
                              
                              {/* Timeline Dot */}
                              <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[#BF4B0A] -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(191,75,10,0.5)]"></div>
                              
                              {/* Content Card */}
                              <div className={\`w-full pl-[56px] md:pl-0 md:w-[45%] \${isEven ? 'md:pr-10' : 'md:pl-10 md:ml-auto'}\`}>
                                 <div className="p-6 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-[#BF4B0A]/50">
                                    <div className="text-[#A0A83C] font-serif text-3xl italic opacity-30 absolute top-4 right-6 pointer-events-none group-hover:opacity-60 transition-opacity duration-300">
                                       {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <h4 className="text-[1.2rem] font-bold text-[#BF4B0A] mb-3">{role.role}</h4>
                                    <p className="text-[0.95rem] text-[var(--text-muted)] leading-relaxed">{role.desc}</p>
                                 </div>
                              </div>
                              
                           </div>
                        );
                     })}
                  </div>
               </div>
             </div>
          </section>
        )}
`;

const insertIndex = content.indexOf('{/* 03 · Heuristic Evaluation */}');
if (insertIndex !== -1) {
  const before = content.substring(0, insertIndex);
  const after = content.substring(insertIndex);
  content = before + rolesSection + '\n        ' + after;
  fs.writeFileSync(file, content);
  console.log('Successfully inserted roles section');
} else {
  console.log('Could not find insert point');
}
