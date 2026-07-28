const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change all max-w-[1600px] to max-w-[1100px]
content = content.replace(/max-w-\[1600px\]/g, 'max-w-[1100px]');

// 2. Section 03 - Heuristics Widths
content = content.replace(
  /w-\[320px\] xl:w-\[350px\]/g,
  'w-[28%]'
);
content = content.replace(
  /w-\[500px\] xl:w-\[600px\] flex-shrink-0/g,
  'w-[44%] flex-shrink-0'
);
content = content.replace(
  /gap-x-12 xl:gap-x-16/g,
  'gap-x-8'
);
content = content.replace(
  /-right-12 xl:-right-16 w-12 xl:w-16/g,
  '-right-8 w-8'
);
content = content.replace(
  /-left-12 xl:-left-16 w-12 xl:w-16/g,
  '-left-8 w-8'
);

// 3. Section 05 - Login Widths
content = content.replace(
  /p-8 md:p-12 xl:p-16 rounded-\[40px\]/g,
  'p-8 lg:p-10 rounded-[40px]'
);
content = content.replace(
  /w-\[320px\] xl:w-\[380px\]/g,
  'w-[30%]'
);
content = content.replace(
  /w-\[500px\] xl:w-\[600px\] 2xl:w-\[700px\] flex-shrink-0 z-20 mx-4 xl:mx-8/g,
  'w-[40%] flex-shrink-0 z-20 mx-0'
);
content = content.replace(
  /-right-\[64px\] w-\[64px\]/g,
  '-right-[32px] w-[32px]'
);
content = content.replace(
  /-left-\[64px\] w-\[64px\]/g,
  '-left-[32px] w-[32px]'
);
// SVG inner paths for Login & UI map
content = content.replace(
  /M 0 15 L 50 15/g,
  'M 0 15 L 20 15'
);
content = content.replace(
  /48,10 58,15 48,20/g,
  '18,10 28,15 18,20'
);
content = content.replace(
  /M 64 15 L 14 15/g,
  'M 32 15 L 14 15'
);

// 4. Section 06 UI Map
content = content.replace(
  /max-w-\[1200px\]/g,
  'w-full'
);
content = content.replace(
  /-bottom-\[64px\] left-1\/2 w-\[24px\] h-\[64px\]/g,
  '-bottom-[32px] left-1/2 w-[24px] h-[32px]'
);
content = content.replace(
  /M 12 0 L 12 54/g,
  'M 12 0 L 12 20'
);
content = content.replace(
  /7,50 12,58 17,50/g,
  '7,18 12,26 17,18'
);
content = content.replace(
  /-top-\[64px\] left-1\/2 w-\[24px\] h-\[64px\]/g,
  '-top-[32px] left-1/2 w-[24px] h-[32px]'
);
content = content.replace(
  /M 12 64 L 12 10/g,
  'M 12 32 L 12 10'
);
content = content.replace(
  /7,14 12,6 17,14/g,
  '7,14 12,6 17,14'
); // Doesn't need change for polygon if arrow head is same

fs.writeFileSync(file, content);
console.log('Replaced successfully');
