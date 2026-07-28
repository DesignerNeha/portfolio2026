const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Section 01
content = content.replace(
  /<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(220px, 1fr\)\)", gap: "3rem" \}\}>\n              <div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 \}\}>\n                01 · Overview\n              <\/div>\n              <div style=\{\{ gridColumn: "span 2", maxWidth: "900px" \}\}>/g,
  '<div className="reveal w-full text-center" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" }}>\n              01 · Overview\n            </div>\n            <div className="w-full flex justify-center">\n              <div style={{ maxWidth: "900px" }}>'
);

// Section 02
content = content.replace(
  /<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">\n              \{\/\* Left Column: Heading and Deco \*\/\}\n              <div className="lg:col-span-4 flex flex-col gap-6">\n                <div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 \}\}>\n                  \{study.challengeTitleOverride \|\| "02 · The User Challenge"\}\n                <\/div>/g,
  '<div className="reveal w-full text-center" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" }}>\n              {study.challengeTitleOverride || "02 · The User Challenge"}\n            </div>\n            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">\n              {/* Left Column: Deco */}\n              <div className="lg:col-span-4 flex flex-col gap-6 items-center">'
);

// Section 03
content = content.replace(
  /<div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem" \}\}>\n                 03 · Heuristic Evaluation\n               <\/div>/g,
  '<div className="reveal text-center w-full" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem" }}>\n                 03 · Heuristic Evaluation\n               </div>'
);

// Section 04
content = content.replace(
  /<div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" \}\}>\n                  04 · \{study.componentsSectionTitle\}\n                <\/div>/g,
  '<div className="reveal text-center w-full" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" }}>\n                  04 · {study.componentsSectionTitle}\n                </div>'
);

// Section 05
content = content.replace(
  /<div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem", position: "relative", zIndex: 10 \}\}>\n                05 · Login Experience\n              <\/div>/g,
  '<div className="reveal text-center w-full" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "4rem", position: "relative", zIndex: 10 }}>\n                05 · Login Experience\n              </div>'
);

// Section 06
content = content.replace(
  /<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(220px, 1fr\)\)", gap: "3rem" \}\}>\n              <div className="reveal" style=\{\{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 \}\}>\n                06 · All Features\n              <\/div>\n              <div style=\{\{ gridColumn: "span 2", maxWidth: "900px" \}\}>/g,
  '<div className="reveal w-full text-center" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "3rem" }}>\n              06 · All Features\n            </div>\n            <div className="w-full flex justify-center">\n              <div style={{ maxWidth: "900px", textAlign: "center" }}>'
);


fs.writeFileSync(file, content);
console.log('Replaced headings');
