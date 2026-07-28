const fs = require('fs');
const file = '/Users/nehasharma/Documents/My Portfolio/src/app/case-studies/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update Interface
content = content.replace(
  'nextCaseName: string;',
  'prevCaseName?: string;\n  prevCaseUrl?: string;\n  nextCaseName: string;'
);

// Map of prev links
const prevMap = {
  'kova': { url: 'swilmart', name: 'SwilMart Commerce' },
  'fuso-hawk': { url: 'kova', name: 'KOVA Health Portal' },
  'honda-booking': { url: 'fuso-hawk', name: 'Osprey: FUSO Fleet & HAWK' },
  'seva': { url: 'honda-booking', name: 'PDI Automation Module — My Honda App' },
  'swilmart': { url: 'seva', name: 'Digital Seva' },
  'brainwave-ai': { url: 'swilmart', name: 'SwilMart Commerce' }, // Just loop back to something
  'synthflow-ux': { url: 'brainwave-ai', name: 'BrainWave AI Canvas' },
  'antigravity-ide': { url: 'synthflow-ux', name: 'Synthflow UX Sound Sandbox' }
};

// Inject into data objects
for (const [id, prev] of Object.entries(prevMap)) {
  const searchRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(nextCaseName:\\s*".*?",)`);
  if (content.match(searchRegex)) {
    content = content.replace(searchRegex, `$1prevCaseName: "${prev.name}",\n    prevCaseUrl: "${prev.url}",\n    $2`);
  }
}

// Update Top Nav JSX
// Current top nav right side is just the Next link. We want Prev and Next together.
// Let's change the right side of the nav.
const oldNav = `<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.2rem",
              color: "var(--foreground)",
            }}
          >
            Case Study <span style={{ color: "#BF4B0A" }}>{study.numStr}</span>
          </span>
          {/* Theme Toggle Trigger */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <Link
          href={\`/case-studies/\${study.nextCaseUrl}\`}
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#BF4B0A",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className="hidden sm:inline">Next: {study.nextCaseName}</span>
          <span className="sm:hidden">Next</span> →
        </Link>`;

const newNav = `<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.2rem",
              color: "var(--foreground)",
            }}
          >
            Case Study <span style={{ color: "#BF4B0A" }}>{study.numStr}</span>
          </span>
          {/* Theme Toggle Trigger */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex items-center gap-4">
          {study.prevCaseUrl && (
            <Link
              href={\`/case-studies/\${study.prevCaseUrl}\`}
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#BF4B0A",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← <span className="hidden sm:inline">Prev: {study.prevCaseName}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          )}
          <Link
            href={\`/case-studies/\${study.nextCaseUrl}\`}
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#BF4B0A",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span className="hidden sm:inline">Next: {study.nextCaseName}</span>
            <span className="sm:hidden">Next</span> →
          </Link>
        </div>`;

content = content.replace(oldNav, newNav);


// Let's also update the Footer so it has big Prev/Next buttons.
const oldFooter = `{/* Case Footer */}
      <footer
        style={{
          padding: "4rem 3rem",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
          ← Back to portfolio
        </Link>
      </footer>`;

const newFooter = `{/* Case Footer */}
      <footer className="w-full max-w-[1100px] mx-auto px-4 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--border)]">
        {study.prevCaseUrl ? (
          <Link href={\`/case-studies/\${study.prevCaseUrl}\`} className="flex flex-col items-start gap-2 group w-full md:w-auto">
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-bold group-hover:text-[#BF4B0A] transition-colors">Previous Project</span>
            <span className="font-serif text-2xl md:text-3xl text-[var(--foreground)] group-hover:text-[#BF4B0A] transition-colors">← {study.prevCaseName}</span>
          </Link>
        ) : <div className="hidden md:block w-[100px]"></div>}

        <Link href="/" className="px-6 py-3 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[#BF4B0A] hover:text-[#BF4B0A] transition-all text-sm font-bold uppercase tracking-widest">
          Back to Home
        </Link>

        {study.nextCaseUrl && (
          <Link href={\`/case-studies/\${study.nextCaseUrl}\`} className="flex flex-col items-end gap-2 group w-full md:w-auto text-right">
            <span className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-bold group-hover:text-[#BF4B0A] transition-colors">Next Project</span>
            <span className="font-serif text-2xl md:text-3xl text-[var(--foreground)] group-hover:text-[#BF4B0A] transition-colors">{study.nextCaseName} →</span>
          </Link>
        )}
      </footer>`;

content = content.replace(oldFooter, newFooter);

fs.writeFileSync(file, content);
console.log("Done updating prev/next navigation.");
