const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

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
`;

pageContent = pageContent.replace(
  /          \)\}\n\n\n      <\/div>/g,
  '          )}\n' + section07 + '\n      </div>'
);

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed final UI 2');
