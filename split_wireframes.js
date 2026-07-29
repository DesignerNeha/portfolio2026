const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
content = content.replace(
  'wireframesImage?: string | string[];',
  'wireframesTitle?: string;\n  wireframesDescription?: string;\n  wireframesImage?: string | string[];'
);

// 2. Extract wireframe JSX and create a new section
const oldFinalUiCondition = `{(study.finalUiImage || (study.finalUiImages && study.finalUiImages.length > 0) || study.wireframesImage) && (`;
const newFinalUiCondition = `{(study.finalUiImage || (study.finalUiImages && study.finalUiImages.length > 0)) && (`;
content = content.replace(oldFinalUiCondition, newFinalUiCondition);

const wireframesJsxHook = `{study.wireframesImage === 'placeholder' ? (
                  <div className="w-full p-20 border-2 border-dashed border-[var(--border)] rounded-3xl flex items-center justify-center mb-16 bg-[var(--section-bg-alt)]">
                     <p className="text-[var(--text-muted)] font-mono text-xl tracking-widest">[IMAGE PLACEHOLDER: Low-fidelity wireframes]</p>
                  </div>
                ) : Array.isArray(study.wireframesImage) ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                     {study.wireframesImage.map((src, idx) => (
                        <div key={idx} className="reveal relative w-full rounded-2xl overflow-hidden border border-[var(--border)]/30" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                           <img src={src} alt={\`Wireframes \${idx + 1}\`} className="w-full h-auto block" />
                        </div>
                     ))}
                  </div>
                ) : study.wireframesImage ? (
                  <div className="reveal relative w-full rounded-2xl overflow-hidden mb-16 border border-[var(--border)]/30" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                    <img src={study.wireframesImage} alt="Wireframes" className="w-full h-auto block" />
                  </div>
                ) : null}`;

// Remove wireframes from Final UI section
content = content.replace(wireframesJsxHook, '');

// Insert new Wireframes section right before Final UI section
const finalUiSectionHook = `{/* Final UI Section */}
        {(study.finalUiImage || (study.finalUiImages && study.finalUiImages.length > 0)) && (`;

const newWireframesSection = `{/* Wireframes Section */}
        {study.wireframesImage && (
          <section className="w-full px-4 md:px-8 xl:px-12 pb-20">
            <div className="w-full max-w-[1100px] mx-auto">
              <div className="reveal w-full flex flex-col items-center mb-16">
                <div className="flex justify-center items-center gap-4">
                  <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">08</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.wireframesTitle || "Wireframes"}
                  </h2>
                </div>
                {study.wireframesDescription && (
                  <div className="w-full flex justify-center mt-6">
                    <p className="text-center text-[var(--text-muted)] max-w-[800px] text-lg">
                      {study.wireframesDescription}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-16">
                ${wireframesJsxHook}
              </div>
            </div>
          </section>
        )}

        {/* Final UI Section */}
        {(study.finalUiImage || (study.finalUiImages && study.finalUiImages.length > 0)) && (`;

content = content.replace(finalUiSectionHook, newWireframesSection);

// Fix the Final UI Section number (change from 08 to 09, and Final UI 2 from 09 to 10)
// The Final UI Section currently has "08" hardcoded. Let's find it and replace it.
const finalUiNumberHook = `<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">08</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUiTitle}
                  </h2>`;
const newFinalUiNumber = `<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">09</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUiTitle}
                  </h2>`;
content = content.replace(finalUiNumberHook, newFinalUiNumber);

const finalUi2NumberHook = `<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">09</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUi2Title || "Final UI - Part 2"}
                  </h2>`;
const newFinalUi2Number = `<span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">10</span>
                  <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                    {study.finalUi2Title || "Final UI - Part 2"}
                  </h2>`;
content = content.replace(finalUi2NumberHook, newFinalUi2Number);


// Update Seva object
const sevaWireframesHook = `wireframesImage: ["/DSCWireframe1.png", "/DSCWireframe2.png"],`;
const newSevaWireframes = `wireframesTitle: "Low-Fidelity Wireframes",
    wireframesDescription: "Early explorations of the service-first navigation and linear task flows.",
    wireframesImage: ["/DSCWireframe1.png", "/DSCWireframe2.png"],`;
content = content.replace(sevaWireframesHook, newSevaWireframes);

fs.writeFileSync(file, content);
console.log("Done");
