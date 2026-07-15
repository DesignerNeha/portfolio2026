"use client";

import React, { useState, useEffect, useRef } from "react";

// Interactive Count-Up component
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cur = 0;
    let frameId: number;
    let observer: IntersectionObserver;

    const step = () => {
      cur += Math.max(1, Math.ceil(target / 30));
      if (cur >= target) {
        setCount(target);
        return;
      }
      setCount(cur);
      frameId = requestAnimationFrame(step);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              step();
              observer.unobserve(en.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "2.4rem", color: "#BF4B0A" }}>
      {count}
      {suffix}
    </div>
  );
}

export function About() {
  const avatarRef = useRef<HTMLDivElement>(null);

  // 3D perspective mouse tilt effect for the designer illustration
  useEffect(() => {
    const av = avatarRef.current;
    if (!av) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900) return; // Desktop only
      const r = av.getBoundingClientRect();
      // Only tilt if it's currently on screen
      if (r.top > window.innerHeight || r.bottom < 0) return;

      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rotY = (e.clientX - cx) / 60;
      const rotX = (cy - e.clientY) / 80;

      av.style.transform = `perspective(800px) rotateY(${Math.max(-8, Math.min(8, rotY))}deg) rotateX(${Math.max(-6, Math.min(6, rotX))}deg)`;
    };

    const handleMouseLeave = () => {
      av.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    av.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      av.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" style={{ padding: "8rem 3rem", maxWidth: "1300px", margin: "0 auto" }}>
      {/* Section Header */}
      <div className="reveal in" style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "4rem" }}>
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 }}>01</span>
        <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--foreground)" }}>
          The person behind the pixels
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
        {/* Left Column Text */}
        <div>
          <p
            className="reveal in"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
              lineHeight: 1.45,
              marginBottom: "2rem",
              color: "var(--foreground)",
            }}
          >
            “I think in systems — flows, architecture, components — but I never lose sight of the human on the other end of the screen.”
          </p>
          <p className="reveal in" style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "1.4rem", maxWidth: "560px" }}>
            4+ years designing end-to-end products across enterprise SaaS, automotive, e-commerce, and government platforms. I&apos;ve led design for role-based enterprise tools, dealer and mobility apps, AI chatbot interfaces — and a government portal used by rural, first-time digital users.
          </p>
          <p className="reveal in" style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "2.5rem", maxWidth: "560px" }}>
            Comfortable working solo end-to-end, or embedded with cross-functional and research teams — including a collaboration with the <strong style={{ color: "var(--foreground)" }}>IIT Delhi Design team</strong> on accessibility research for low-literacy users.
          </p>

          {/* Stats Counters Grid */}
          <div
            className="reveal in"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "var(--divider)",
              border: "1px solid var(--divider)",
            }}
          >
            <div style={{ backgroundColor: "var(--spec-bg)", padding: "1.4rem", textAlign: "center" }}>
              <Counter target={4} suffix="+" />
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)" }}>Years</div>
            </div>
            <div style={{ backgroundColor: "var(--spec-bg)", padding: "1.4rem", textAlign: "center" }}>
              <Counter target={10} suffix="+" />
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)" }}>Products shipped</div>
            </div>
            <div style={{ backgroundColor: "var(--spec-bg)", padding: "1.4rem", textAlign: "center" }}>
              <Counter target={5} suffix="" />
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)" }}>Domains</div>
            </div>
          </div>
        </div>

        {/* Right Column Interactive SVG Avatar */}
        <div className="reveal in" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            ref={avatarRef}
            id="avatarTilt"
            style={{
              position: "relative",
              transition: "transform 0.2s ease-out",
              willChange: "transform",
            }}
          >
            <svg width="340" height="360" viewBox="0 0 340 360" style={{ display: "block" }}>
              {/* Floor Shadow */}
              <ellipse cx="170" cy="330" rx="130" ry="16" fill="rgba(22,20,15,0.08)" />

              {/* Table / Desk */}
              <rect x="40" y="290" width="260" height="14" rx="7" fill="#16140F" />
              <rect x="60" y="304" width="12" height="40" rx="4" fill="#16140F" />
              <rect x="268" y="304" width="12" height="40" rx="4" fill="#16140F" />

              {/* Floating body and designer elements */}
              <g style={{ animation: "floatY 4s ease-in-out infinite", transformOrigin: "170px 200px" }}>
                {/* Body/Sweater */}
                <path d="M 120 200 Q 118 160 140 150 L 200 150 Q 222 160 220 200 L 224 262 Q 224 278 208 280 L 132 280 Q 116 278 116 262 Z" fill="#BF4B0A" />
                <path d="M 150 150 Q 170 168 190 150 L 186 176 Q 170 186 154 176 Z" fill="#A8420A" />

                {/* Head / Neck */}
                <circle cx="170" cy="118" r="34" fill="#E8B08C" />

                {/* Hair */}
                <path d="M 136 112 Q 132 74 170 72 Q 208 74 204 112 Q 204 92 192 88 Q 176 96 148 92 Q 138 96 136 112 Z" fill="#2A1E14" />
                <path d="M 136 112 Q 128 130 136 142 L 142 138 Q 138 124 140 112 Z" fill="#2A1E14" />
                <path d="M 204 112 Q 212 130 204 142 L 198 138 Q 202 124 200 112 Z" fill="#2A1E14" />

                {/* Blinking eyes group */}
                <g style={{ animation: "blinkEyes 4.5s ease-in-out infinite", transformOrigin: "170px 116px" }}>
                  <circle cx="157" cy="116" r="3.4" fill="#16140F" />
                  <circle cx="183" cy="116" r="3.4" fill="#16140F" />
                </g>

                {/* Face details (eyebrows & smile) */}
                <path d="M 150 106 Q 157 102 163 106" stroke="#2A1E14" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 177 106 Q 183 102 190 106" stroke="#2A1E14" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 160 132 Q 170 140 180 132" stroke="#A8420A" strokeWidth="2.6" fill="none" strokeLinecap="round" />
                {/* Blushing checks */}
                <circle cx="146" cy="126" r="5" fill="rgba(191,75,10,0.35)" />
                <circle cx="194" cy="126" r="5" fill="rgba(191,75,10,0.35)" />

                {/* Typing hands */}
                <g style={{ animation: "typeHands 0.55s ease-in-out infinite" }}>
                  <path d="M 128 210 Q 116 236 138 252 L 152 258" stroke="#E8B08C" strokeWidth="13" fill="none" strokeLinecap="round" />
                  <path d="M 212 210 Q 224 236 202 252 L 188 258" stroke="#E8B08C" strokeWidth="13" fill="none" strokeLinecap="round" />
                </g>
              </g>

              {/* Laptop Screen & keyboard base */}
              <path d="M 118 290 L 132 246 Q 134 240 140 240 L 200 240 Q 206 240 208 246 L 222 290 Z" fill="#3A362C" />
              <path d="M 126 286 L 137 250 Q 138 246 143 246 L 197 246 Q 202 246 203 250 L 214 286 Z" fill="#4C9A8A" />
              <rect x="112" y="288" width="116" height="6" rx="3" fill="#2A2720" />

              {/* Coffee Cup and rising steam */}
              <g>
                <rect x="248" y="252" width="26" height="34" rx="4" fill="#F2EEE6" stroke="#16140F" strokeWidth="2.5" />
                <path d="M 254 268 Q 261 262 268 268" stroke="#BF4B0A" strokeWidth="2.5" fill="none" />
                {/* Steaming waves */}
                <path d="M 253 246 Q 258 238 263 246" stroke="rgba(22,20,15,0.4)" strokeWidth="2" fill="none" style={{ animation: "steam 2.4s ease-out infinite" }} />
                <path d="M 261 246 Q 266 238 271 246" stroke="rgba(22,20,15,0.4)" strokeWidth="2" fill="none" style={{ animation: "steam 2.4s ease-out infinite 0.9s" }} />
              </g>

              {/* Floating browser window sketch (left) */}
              <g style={{ animation: "floatY 3.4s ease-in-out infinite 0.6s" }}>
                <rect x="58" y="150" width="52" height="36" rx="6" fill="#F2EEE6" stroke="#16140F" strokeWidth="2" />
                <rect x="66" y="160" width="24" height="4" rx="2" fill="#BF4B0A" />
                <rect x="66" y="169" width="34" height="4" rx="2" fill="rgba(22,20,15,0.3)" />
              </g>

              {/* Floating green success badge (right) */}
              <g style={{ animation: "floatY 3.8s ease-in-out infinite 1.4s" }}>
                <circle cx="278" cy="150" r="20" fill="#A0A83C" />
                <path d="M 270 150 L 276 156 L 288 143" stroke="#F2EEE6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
          <div style={{ textAlign: "center", fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: "#6B665C", marginTop: "0.4rem" }}>
            happiest when the flow finally clicks ☕
          </div>
        </div>
      </div>
    </section>
  );
}

const row1Tags = [
  { name: "Wireframing", type: "border" },
  { name: "User Flows", type: "border" },
  { name: "Information Architecture", type: "orange" },
  { name: "Journey Mapping", type: "border" },
  { name: "Design Systems", type: "border" },
  { name: "Interaction Design", type: "olive" },
  { name: "Prototyping", type: "border" },
  { name: "Usability Testing", type: "border" },
];

const row2Tags = [
  { name: "User Research", type: "border" },
  { name: "Design Thinking", type: "orange" },
  { name: "Competitive Analysis", type: "border" },
  { name: "UX Strategy", type: "border" },
  { name: "Accessibility Design", type: "olive" },
  { name: "Object-Oriented UX", type: "border" },
  { name: "Storyboarding", type: "border" },
];

const row3Tags = [
  { name: "Figma", type: "orange" },
  { name: "FigJam", type: "border" },
  { name: "Adobe XD", type: "border" },
  { name: "Miro", type: "border" },
  { name: "Figma Make", type: "olive" },
  { name: "Google Stitch", type: "border" },
  { name: "Claude Design", type: "border" },
  { name: "HTML & CSS", type: "border" },
];

export function Craft() {
  const getTagStyle = (type: string) => {
    switch (type) {
      case "orange":
        return {
          background: "#BF4B0A",
          color: "#F2EEE6",
          padding: "12px 28px",
          borderRadius: "100px",
          whiteSpace: "nowrap" as const,
          fontSize: "1rem",
        };
      case "olive":
        return {
          background: "#A0A83C",
          color: "#16140F",
          padding: "12px 28px",
          borderRadius: "100px",
          whiteSpace: "nowrap" as const,
          fontSize: "1rem",
          fontWeight: 500,
        };
      default:
        return {
          border: "1.5px solid rgba(242, 238, 230, 0.25)",
          color: "#F2EEE6",
          padding: "12px 28px",
          borderRadius: "100px",
          whiteSpace: "nowrap" as const,
          fontSize: "1rem",
        };
    }
  };

  const loopList = (arr: typeof row1Tags) => {
    return [...arr, ...arr, ...arr];
  };

  return (
    <section id="skills" style={{ background: "#16140F", padding: "7rem 0", overflow: "hidden" }}>
      {/* Craft Header */}
      <div
        className="reveal in"
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1.5rem",
          marginBottom: "4rem",
          padding: "0 3rem",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#A0A83C", fontWeight: 600 }}>04</span>
        <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#F2EEE6" }}>
          The craft
        </h2>
      </div>

      {/* Reversing tags marquees */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
        {/* Row 1: Left */}
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "1rem", width: "max-content", animation: "marqueeLeft 30s linear infinite" }}>
            {loopList(row1Tags).map((tag, idx) => (
              <span key={idx} style={getTagStyle(tag.type)}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "1rem", width: "max-content", animation: "marqueeRight 26s linear infinite" }}>
            {loopList(row2Tags).map((tag, idx) => (
              <span key={idx} style={getTagStyle(tag.type)}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3: Left */}
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "1rem", width: "max-content", animation: "marqueeLeft 24s linear infinite" }}>
            {loopList(row3Tags).map((tag, idx) => (
              <span key={idx} style={getTagStyle(tag.type)}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
