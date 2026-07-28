const fs = require('fs');
let file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change useState("light") to useState("dark")
content = content.replace(/useState<"light" \| "dark">\("light"\)/g, 'useState<"light" | "dark">("dark")');

// Change setTheme(active || "light") to setTheme(active || "dark")
content = content.replace(/setTheme\(active \|\| "light"\)/g, 'setTheme(active || "dark")');

fs.writeFileSync(file, content);
console.log('Fixed page.tsx');
