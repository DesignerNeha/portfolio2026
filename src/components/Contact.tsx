"use client";

import React, { useState, useEffect, useRef } from "react";

const witLines = [
  "Designed in Figma, rebuilt in code, powered by chai ☕",
  "Currently vibing on: RBAC flows that don't make people cry",
  "Fun fact: my best IA ideas arrive mid-chai, not mid-meeting",
  "You found the hidden footer. Hire accordingly. ✦",
  "Yes, I test my designs with real users. Even this footer.",
];

export default function Contact() {
  const [witIdx, setWitIdx] = useState(0);
  const [witOpacity, setWitOpacity] = useState(1);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const emailRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);

  // Magnetic button triggers
  useEffect(() => {
    const attachMagnetic = (el: HTMLAnchorElement | null) => {
      if (!el) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 900) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      };

      const handleMouseLeave = () => {
        el.style.transform = "translate(0, 0)";
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanEmail = attachMagnetic(emailRef.current);
    const cleanLinkedin = attachMagnetic(linkedinRef.current);
    const cleanPhone = attachMagnetic(phoneRef.current);

    return () => {
      if (cleanEmail) cleanEmail();
      if (cleanLinkedin) cleanLinkedin();
      if (cleanPhone) cleanPhone();
    };
  }, []);

  const handleWitClick = () => {
    setWitOpacity(0);
    setTimeout(() => {
      setWitIdx((prev) => (prev + 1) % witLines.length);
      setWitOpacity(1);
    }, 200);
  };

  const btnStyle = (id: string, isSolid = false) => {
    const isHovered = hoveredBtn === id;
    if (isSolid) {
      return {
        backgroundColor: isHovered ? "#BF4B0A" : "var(--foreground)",
        color: "var(--background)",
        padding: "18px 42px",
        borderRadius: "100px",
        fontWeight: 600,
        fontSize: "1rem",
        display: "inline-block",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      };
    } else {
      return {
        border: "1.5px solid var(--foreground)",
        backgroundColor: isHovered ? "var(--foreground)" : "transparent",
        color: isHovered ? "var(--background)" : "var(--foreground)",
        padding: "18px 42px",
        borderRadius: "100px",
        fontWeight: 600,
        fontSize: "1rem",
        display: "inline-block",
        transition: "all 0.3s ease",
      };
    }
  };

  return (
    <section id="contact" style={{ padding: "9rem 3rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Decorative top boundary line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", backgroundColor: "var(--divider)" }} />

      <div className="reveal in">
        {/* Step subtitle */}
        <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600, marginBottom: "1.5rem" }}>
          05 · Say hello
        </div>

        {/* Head title */}
        <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.05, marginBottom: "2.5rem", color: "var(--foreground)" }}>
          Got a messy workflow?<br />
          <em className="not-italic" style={{ color: "#BF4B0A" }}>I&apos;d love to untangle it.</em>
        </h2>

        {/* Action button cards row */}
        <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a
            ref={emailRef}
            href="mailto:nehas.designs26@gmail.com"
            style={btnStyle("email", true)}
            onMouseEnter={() => setHoveredBtn("email")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            nehas.designs26@gmail.com
          </a>
          <a
            ref={linkedinRef}
            href="https://linkedin.com/in/neha-sharma-ns15021997/"
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle("linkedin")}
            onMouseEnter={() => setHoveredBtn("linkedin")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            LinkedIn ↗
          </a>
          <a
            ref={phoneRef}
            href="tel:+919799718755"
            style={btnStyle("phone")}
            onMouseEnter={() => setHoveredBtn("phone")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            +91 97997 18755
          </a>
        </div>
      </div>

      {/* Footer details row */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        <span>© 2026 Neha Sharma · Gurugram, India</span>
        <span
          id="footerWit"
          onClick={handleWitClick}
          style={{
            cursor: "pointer",
            fontStyle: "italic",
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "1rem",
            opacity: witOpacity,
            transition: "opacity 0.2s ease",
          }}
          title="click me"
        >
          {witLines[witIdx]}
        </span>
        <span>B.Com, Rajasthan University · Designer by obsession</span>
      </div>
    </section>
  );
}
