const fs = require('fs');
let pageFile = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(
  /className="relative flex-1 p-5 rounded-2xl bg-\[var\(--glass-bg\)\]/g,
  'className="reveal relative flex-1 p-5 rounded-2xl bg-[var(--glass-bg)]'
);

// also fix the double w-full bug I see in the grep output: w-full w-full
pageContent = pageContent.replace(
  /w-full w-full/g,
  'w-full'
);

fs.writeFileSync(pageFile, pageContent);
console.log('Fixed top cards');
