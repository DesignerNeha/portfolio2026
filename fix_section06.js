const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

const newLayout = `
              {/* Responsive Layout - Image Top, Grid Bottom */}
              <div className="flex flex-col gap-12 lg:gap-16 relative z-10 w-full">
                {/* Large Center Image */}
                <div className="reveal relative w-full rounded-[24px] lg:rounded-[40px] overflow-hidden border-[4px] lg:border-[6px] border-[var(--section-bg-alt)] shadow-[0_30px_60px_rgba(0,0,0,0.2),_0_0_0_1px_var(--border)] bg-[var(--section-bg-alt)] mx-auto max-w-[1000px]">
                  <img src={study.annotatedFeatureImage} alt="Annotated Final UI" className="w-full h-auto block" />
                </div>
                
                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                  {study.annotatedFeatures?.map((feature, i) => (
                    <div key={feature.title} className="reveal relative p-6 lg:p-8 rounded-3xl bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[var(--glass-border)] group hover:border-[#BF4B0A]/50 z-10">
                       <div className="flex items-start gap-3 mb-2">
                          <span className="text-[#A0A83C] font-serif text-2xl italic pt-[2px]">{(i + 1).toString().padStart(2, '0')}</span>
                          <h4 className="text-[1.05rem] font-bold uppercase tracking-wider text-[var(--foreground)] mt-1 group-hover:text-[#BF4B0A] transition-colors">{feature.title}</h4>
                       </div>
                       <p className="text-[0.9rem] text-[var(--text-muted)] pl-[42px] leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
`;

// Replace from `{/* Desktop Layout - Surround node map */}` to just before `</div>\n            </div>\n          </section>\n        ) : (`
const startIndex = pageContent.indexOf('{/* Desktop Layout - Surround node map */}');
const endIndexStr = '              </div>\n            </div>\n          </section>\n        ) : (';
const endIndex = pageContent.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
  const before = pageContent.substring(0, startIndex);
  const after = pageContent.substring(endIndex);
  pageContent = before + newLayout + '\n' + after;
  fs.writeFileSync(pageFile, pageContent);
  console.log('Successfully replaced layout');
} else {
  console.log('Failed to find indices', startIndex, endIndex);
}
