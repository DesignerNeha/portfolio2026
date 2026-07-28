const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// Add 'reveal' to the newly formatted cards in Section 03
pageContent = pageContent.replace(
  /className="relative p-5 rounded-2xl bg-\[var\(--glass-bg\)\]/g,
  'className="reveal relative p-5 rounded-2xl bg-[var(--glass-bg)]'
);

// We need to add 'reveal' to cards in Section 02 as well? Wait, Section 02 already has text wrapped in `<p className="reveal">`. The card itself can also have it.
pageContent = pageContent.replace(
  /className="relative z-10 p-8 md:p-12 rounded-3xl bg-\[var\(--glass-bg\)\]/g,
  'className="reveal relative z-10 p-8 md:p-12 rounded-3xl bg-[var(--glass-bg)]'
);

// Add 'group-hover:animate-dash' to paths
pageContent = pageContent.replace(
  /className="opacity-40 group-hover:opacity-100 transition-opacity duration-300"/g,
  'className="opacity-40 group-hover:opacity-100 group-hover:animate-dash transition-opacity duration-300"'
);

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed cards and arrows');
