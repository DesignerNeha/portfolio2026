const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// Replace text-[#B5B0A4] with text-[var(--text-muted)]
pageContent = pageContent.replace(/text-\[#B5B0A4\]/g, 'text-[var(--text-muted)]');

// Replace color: "#B5B0A4" with color: "var(--text-muted)"
pageContent = pageContent.replace(/color: "#B5B0A4"/g, 'color: "var(--text-muted)"');

// Replace text-white with text-[var(--foreground)] when it's inside the cards
pageContent = pageContent.replace(/text-white/g, 'text-[var(--foreground)]');

// Replace color: "#F2EEE6" with color: "var(--foreground)" BUT only for the paragraphs in the sections, not the data objects at the top
// The data object textColor: "#F2EEE6", should remain if it's for hero sections.
// I will target the specific occurrences in the body.
pageContent = pageContent.replace(
  /color: "#F2EEE6", lineHeight: 1.6 \}\}>\{study.afterText\}/g,
  'color: "var(--foreground)", lineHeight: 1.6 }}>{study.afterText}'
);

// Fix the SVG background grid lines that use #F2EEE6 to use var(--border)
pageContent = pageContent.replace(
  /stroke="#F2EEE6"/g,
  'stroke="var(--border)"'
);

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed font colors');
