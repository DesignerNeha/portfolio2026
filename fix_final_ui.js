const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// 1. Add finalUiImage to interface
pageContent = pageContent.replace(
  /finalUiTitle: string;/g,
  'finalUiTitle: string;\n  finalUiImage?: string;'
);

// 2. Add finalUiImage to KOVA object
pageContent = pageContent.replace(
  /finalUiDescription: "We architected KOVA to be an incredibly dense, power-user friendly workspace. From natural language data interactions and voice input to persistent, always-available composer controls—every feature is meticulously mapped directly into your workflow without ever breaking context.",/g,
  'finalUiDescription: "We architected KOVA to be an incredibly dense, power-user friendly workspace. From natural language data interactions and voice input to persistent, always-available composer controls—every feature is meticulously mapped directly into your workflow without ever breaking context.",\n    finalUiImage: "/KOVA_FinalUI.png",'
);

// 3. Add Section 07 to render conditionally at the end of the case study content
const section07 = `
        {study.finalUiImage && (
          <section className="w-full px-4 md:px-8 xl:px-12 pb-20">
            <div className="w-full max-w-[1100px] mx-auto">
              <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
                <span className="text-sm uppercase tracking-[3px] text-[#BF4B0A] font-bold">07</span>
                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                  Final UI
                </h2>
              </div>
              <div className="reveal relative w-full rounded-[40px] overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}>
                <img src={study.finalUiImage} alt="Final UI" className="w-full h-auto block" />
              </div>
            </div>
          </section>
        )}

      </div>
`;

pageContent = pageContent.replace(
  /          <\/section>\n        \)\}\n\n\n      <\/div>/g,
  '          </section>\n        )}\n' + section07
);

// Let's also check if the block I replaced matches
// In the current file, it looks like:
/*
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem 5rem" }}>
...
          )}


      </div>
*/

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed final UI');
