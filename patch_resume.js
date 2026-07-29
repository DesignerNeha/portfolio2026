const fs = require('fs');

// Patch Navbar.tsx
const navFile = '/Users/nehasharma/Documents/My Portfolio/src/components/Navbar.tsx';
let navContent = fs.readFileSync(navFile, 'utf8');

const desktopResumeLink = `          <a
            href="/NehaSharma_Resume.pdf"
            target="_blank"
            download
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Resume
          </a>`;

const desktopCraft = `          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "#skills")}
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Craft
          </a>`;

navContent = navContent.replace(desktopCraft, desktopCraft + '\n' + desktopResumeLink);

const mobileCraft = `              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "#skills")}
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  color: "var(--foreground)",
                }}
              >
                Craft
              </a>`;

const mobileResumeLink = `              <a
                href="/NehaSharma_Resume.pdf"
                target="_blank"
                download
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  color: "var(--foreground)",
                }}
              >
                Resume
              </a>`;

navContent = navContent.replace(mobileCraft, mobileCraft + '\n' + mobileResumeLink);

fs.writeFileSync(navFile, navContent);

// Patch Contact.tsx
const contactFile = '/Users/nehasharma/Documents/My Portfolio/src/components/Contact.tsx';
let contactContent = fs.readFileSync(contactFile, 'utf8');

const contactButtonsHook = `          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">`;

const contactButtonsNew = `          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <a
              href="/NehaSharma_Resume.pdf"
              target="_blank"
              download
              onMouseEnter={() => setHoveredBtn('resume')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={btnStyle('resume')}
            >
              Download Resume
            </a>`;

contactContent = contactContent.replace(contactButtonsHook, contactButtonsNew);

fs.writeFileSync(contactFile, contactContent);
console.log("Done");
