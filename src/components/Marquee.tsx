"use client";

import React from "react";

const domains = [
  "Enterprise SaaS",
  "Automotive & Mobility",
  "GovTech for Bharat",
  "AI Interfaces",
  "B2B + B2C Commerce",
];

export default function Marquee() {
  // Duplicate list elements for seamless looping marquee
  const repeatedDomains = [...domains, ...domains, ...domains, ...domains];

  return (
    <div className="my-8 sm:my-12 overflow-hidden relative z-10">
      <div
        style={{
          backgroundColor: "#16140F",
          padding: "1.1rem 0",
          overflow: "hidden",
          transform: "rotate(-1deg) scale(1.02)",
          borderTop: "3px solid #BF4B0A",
          borderBottom: "3px solid #BF4B0A",
        }}
      >
      <div
        style={{
          display: "flex",
          gap: "3rem",
          width: "max-content",
          animation: "marqueeLeft 22s linear infinite",
          alignItems: "center",
        }}
      >
        {repeatedDomains.map((domain, index) => (
          <React.Fragment key={index}>
            <span
              style={{
                color: "#F2EEE6",
                fontFamily: "var(--font-serif), Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.3rem",
                whiteSpace: "nowrap",
              }}
            >
              {domain}
            </span>
            <span style={{ color: "#BF4B0A" }}>✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
  );
}
