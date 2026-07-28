const fs = require('fs');
let file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
content = content.replace(
  /finalUiImage\?: string;\n  finalUiDescription: string;/g,
  'finalUiImage?: string;\n  finalUiDescription: string;\n  rolesSectionTitle?: string;\n  userRoles?: { role: string; desc: string; }[];'
);

fs.writeFileSync(file, content);
console.log('Fixed interface');
