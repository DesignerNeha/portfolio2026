const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

const headingReplacement = (num, text, color = "#BF4B0A") => `
            <div className="reveal w-full flex justify-center items-center gap-4 mb-16">
              <span className="text-sm uppercase tracking-[3px] text-[${color}] font-bold">${num}</span>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.5rem)] text-[var(--foreground)] tracking-tighter text-center leading-none">
                ${text}
              </h2>
            </div>
`.trim();

// 1. Overview
pageContent = pageContent.replace(
  /<div className="reveal w-full text-center" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" \}\}>\n              01 · Overview\n            <\/div>/g,
  headingReplacement('01', 'Overview')
);

// 2. User Challenge
pageContent = pageContent.replace(
  /<div className="reveal w-full text-center" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" \}\}>\n              \{study.challengeTitleOverride \|\| "02 · The User Challenge"\}\n            <\/div>/g,
  headingReplacement('02', '{study.challengeTitleOverride ? study.challengeTitleOverride.replace("02 · ", "") : "The User Challenge"}')
);

// 3. Heuristic
pageContent = pageContent.replace(
  /<div className="reveal text-center w-full" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem" \}\}>\n                 03 · Heuristic Evaluation\n               <\/div>/g,
  headingReplacement('03', 'Heuristic Evaluation')
);

// 4. Components
pageContent = pageContent.replace(
  /<div className="reveal text-center w-full" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" \}\}>\n                  04 · \{study.componentsSectionTitle\}\n                <\/div>/g,
  headingReplacement('04', '{study.componentsSectionTitle}')
);

// 5. Login
pageContent = pageContent.replace(
  /<div className="reveal text-center w-full" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem", position: "relative", zIndex: 10 \}\}>\n                05 · Login Experience\n              <\/div>/g,
  headingReplacement('05', 'Login Experience')
);

// 6. All Features
pageContent = pageContent.replace(
  /<div className="reveal w-full text-center" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" \}\}>\n              06 · All Features\n            <\/div>/g,
  headingReplacement('06', 'All Features')
);

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed headings');
