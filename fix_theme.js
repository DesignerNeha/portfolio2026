const fs = require('fs');

// 1. Update globals.css
let cssFile = '/Users/nehasharma/Documents/My Portfolio/src/app/globals.css';
let cssContent = fs.readFileSync(cssFile, 'utf8');

cssContent = cssContent.replace(
  /--card-border: rgba\(22, 20, 15, 0.18\);/g,
  '--card-border: rgba(22, 20, 15, 0.18);\n  --section-bg-alt: #E8E3D9;\n  --glass-bg: rgba(255, 255, 255, 0.5);\n  --glass-border: rgba(22, 20, 15, 0.1);'
);

cssContent = cssContent.replace(
  /--card-border: rgba\(242, 238, 230, 0.18\);/g,
  '--card-border: rgba(242, 238, 230, 0.18);\n  --section-bg-alt: #111111;\n  --glass-bg: rgba(29, 27, 22, 0.8);\n  --glass-border: rgba(191, 75, 10, 0.3);'
);

fs.writeFileSync(cssFile, cssContent);

// 2. Update page.tsx
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// Section 02 - wrapper
pageContent = pageContent.replace(
  /<section className="w-full px-4 md:px-8 xl:px-12 py-20" style=\{\{ backgroundColor: "#16140F", color: "#F2EEE6" \}\}>/g,
  '<section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", color: "var(--foreground)" }}>'
);
// Section 02 - card
pageContent = pageContent.replace(
  /bg-\[#1D1B16\]\/80 backdrop-blur-md border border-\[#BF4B0A\]\/20 shadow-\[0_20px_50px_rgba\(0,0,0,0.5\)\]/g,
  'bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1'
);
// Section 02 - text
pageContent = pageContent.replace(
  /color: "#F2EEE6",\n                          fontWeight: 400,/g,
  'color: "var(--foreground)",\n                          fontWeight: 400,'
);

// Section 03 - wrapper
pageContent = pageContent.replace(
  /<section className="w-full px-4 md:px-8 xl:px-12 py-20" style=\{\{ backgroundColor: "#111", borderTop: "1px solid rgba\(255,255,255,0.05\)" \}\}>/g,
  '<section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", borderTop: "1px solid var(--border)" }}>'
);
// Section 03 - cards
pageContent = pageContent.replace(
  /bg-\[#1D1B16\] text-\[#F2EEE6\] shadow-\[0_10px_30px_rgba\(0,0,0,0.3\)\] border border-\[#BF4B0A\]\/30/g,
  'bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-[#BF4B0A]/50'
);
// Section 03 - inner card title
pageContent = pageContent.replace(
  /text-\[1rem\] font-bold text-white mb-2/g,
  'text-[1rem] font-bold text-[var(--foreground)] mb-2 group-hover:text-[#BF4B0A] transition-colors'
);

// Section 04 - wrapper
pageContent = pageContent.replace(
  /<section className="w-full px-4 md:px-8 xl:px-12 py-20" style=\{\{ backgroundColor: "#111", borderTop: "1px solid rgba\(255,255,255,0.05\)" \}\}>/g,
  '<section className="w-full px-4 md:px-8 xl:px-12 py-20" style={{ backgroundColor: "var(--section-bg-alt)", borderTop: "1px solid var(--border)" }}>'
);

// Section 05 - wrapper
pageContent = pageContent.replace(
  /rounded-\[40px\] overflow-hidden" style=\{\{ backgroundColor: "#16140F", boxShadow: "inset 0 0 100px rgba\(0,0,0,0.5\), 0 30px 60px rgba\(0,0,0,0.1\)" \}\}/g,
  'rounded-[40px] overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}'
);
// Section 05 & 06 - cards
pageContent = pageContent.replace(
  /bg-\[#1D1B16\] text-\[#F2EEE6\] shadow-\[0_10px_30px_rgba\(0,0,0,0.3\)\] transition-transform duration-300 hover:-translate-y-1 border border-\[#A0A83C\]\/20 group hover:border-\[#BF4B0A\]\/50/g,
  'bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[var(--glass-border)] group hover:border-[#BF4B0A]/50'
);
// Section 05 & 06 - card title
pageContent = pageContent.replace(
  /font-bold uppercase tracking-wider text-white/g,
  'font-bold uppercase tracking-wider text-[var(--foreground)]'
);
// Section 05 & 06 - image frame border
pageContent = pageContent.replace(
  /border-\[6px\] border-\[#16140F\] shadow-\[0_30px_60px_rgba\(0,0,0,0.5\),_0_0_0_1px_rgba\(160,168,60,0.2\)\] bg-\[#16140F\]/g,
  'border-[6px] border-[var(--section-bg-alt)] shadow-[0_30px_60px_rgba(0,0,0,0.2),_0_0_0_1px_var(--border)] bg-[var(--section-bg-alt)]'
);

// Section 06 - wrapper
pageContent = pageContent.replace(
  /rounded-\[40px\] overflow-hidden" style=\{\{ backgroundColor: "#16140F", boxShadow: "inset 0 0 100px rgba\(0,0,0,0.5\), 0 30px 60px rgba\(0,0,0,0.1\)" \}\}/g,
  'rounded-[40px] overflow-hidden" style={{ backgroundColor: "var(--section-bg-alt)", boxShadow: "inset 0 0 100px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.05)" }}'
);

// Animated arrows in Section 03
pageContent = pageContent.replace(
  /border-t-2 border-\[#BF4B0A\] border-dashed -z-10/g,
  'border-t-2 border-[var(--border)] border-dashed -z-10 group-hover:border-[#BF4B0A] transition-colors duration-300'
);
pageContent = pageContent.replace(
  /border-l-\[6px\] border-l-\[#BF4B0A\]/g,
  'border-l-[6px] border-l-[var(--border)] group-hover:border-l-[#BF4B0A] transition-colors duration-300'
);
pageContent = pageContent.replace(
  /border-r-\[6px\] border-r-\[#BF4B0A\]/g,
  'border-r-[6px] border-r-[var(--border)] group-hover:border-r-[#BF4B0A] transition-colors duration-300'
);
pageContent = pageContent.replace(
  /bg-\[#BF4B0A\]/g,
  'bg-[#BF4B0A]'
); // Actually let's just make the arrows fully #BF4B0A but animate opacity on dasharray

fs.writeFileSync(pageFile, pageContent);
console.log('Replaced themes');
