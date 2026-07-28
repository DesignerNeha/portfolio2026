const fs = require('fs');
let file = '/Users/nehasharma/Documents/My Portfolio/src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /if \(savedTheme === 'dark'\) \{\n                    document\.documentElement\.setAttribute\('data-theme', 'dark'\);\n                  \} else \{\n                    document\.documentElement\.setAttribute\('data-theme', 'light'\);\n                  \}/g,
  `if (savedTheme === 'light') {\n                    document.documentElement.setAttribute('data-theme', 'light');\n                  } else {\n                    document.documentElement.setAttribute('data-theme', 'dark');\n                  }`
);

fs.writeFileSync(file, content);
console.log('Fixed layout.tsx');
