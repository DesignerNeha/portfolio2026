const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
content = content.replace(
  'finalUiDescription: string;',
  'finalUiDescription: string;\n  finalUi2Title?: string;\n  finalUi2Description?: string;\n  finalUi2Image?: string;\n  finalUi2Images?: { src: string; heading?: string }[];'
);

// 2. Add JSX block
const jsxHook = `          </section>
        )}

        {/* Challenges Section */}`;

const newJsx = `          </section>
        )}

        {/* Final UI Section 2 */}
        {(study.finalUi2Image || (study.finalUi2Images && study.finalUi2Images.length > 0)) && (
          <section className="w-full px-4 md:px-8 xl:px-12 pb-20">
            <div className="w-full max-w-[1100px] mx-auto">
              <div className="reveal w-full flex flex-col items-center mb-16">
                <div className="flex justify-center items-center gap-4">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">09</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUi2Title || "Final UI - Part 2"}
                  </h2>
                </div>
                {study.finalUi2Description && (
                  <div className="w-full flex justify-center mt-6">
                    <p className="text-center text-[var(--text-muted)] max-w-[800px] text-lg">
                      {study.finalUi2Description}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-16">
                {study.finalUi2Image && (
                  <div className="reveal relative w-full rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}>
                    <img src={study.finalUi2Image} alt="Final UI 2" className="w-full h-auto block" />
                  </div>
                )}
                {study.finalUi2Images && study.finalUi2Images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {study.finalUi2Images.map((img, idx) => (
                      <div key={idx} className="reveal relative w-full flex flex-col gap-4">
                        {img.heading && (
                          <h3 className="font-serif text-xl md:text-2xl text-[var(--foreground)] px-2">
                            {img.heading}
                          </h3>
                        )}
                        <div className={\`relative w-full \${study.id === 'honda-booking' ? 'aspect-[3/4]' : 'aspect-[4/3]'} rounded-2xl overflow-hidden border border-[var(--border)]/30\`} style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                          {img.src === "placeholder" ? (
                             <div className="w-full h-full flex items-center justify-center bg-[var(--section-bg-alt)]">
                               <p className="text-[var(--text-muted)] font-mono text-sm tracking-widest text-center px-4">
                                 [IMAGE PLACEHOLDER: {img.heading}]
                               </p>
                             </div>
                          ) : (
                             <img src={img.src} alt={img.heading || \`Final UI Screenshot \${idx + 1}\`} className={\`w-full h-full block \${study.id === 'honda-booking' ? 'object-contain py-4' : 'object-cover object-top'}\`} />
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

        {/* Challenges Section */}`;

content = content.replace(jsxHook, newJsx);

// 3. Add sample data to Seva
const sevaHook = `finalUiDescription: "This section shows how sunlight visibility specifically shaped color and type choices — balancing simplicity for lower digital literacy users without making the portal feel limited.",`;

const sevaNew = `finalUiDescription: "This section shows how sunlight visibility specifically shaped color and type choices — balancing simplicity for lower digital literacy users without making the portal feel limited.",
    
    // Final UI Part 2
    finalUi2Title: "Additional Screens",
    finalUi2Description: "More views from the final product.",
    finalUi2Images: [
      { src: "placeholder", heading: "Placeholder 1" },
      { src: "placeholder", heading: "Placeholder 2" }
    ],`;

content = content.replace(sevaHook, sevaNew);

fs.writeFileSync(file, content);
console.log("Done.");
