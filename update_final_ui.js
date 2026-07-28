const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update interface
content = content.replace(
  'finalUiImage?: string;\n  finalUiDescription: string;',
  'finalUiImage?: string;\n  finalUiImages?: string[];\n  finalUiDescription: string;'
);

// 2. Add finalUiImages to fuso-hawk
content = content.replace(
  'id: "fuso-hawk",',
  'id: "fuso-hawk",\n    finalUiImages: ["/CodeGeneration_Orprey.png"],'
);

fs.writeFileSync(file, content);
console.log('Updated interface and fuso-hawk config');
