"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProjectRow {
  id: string;
  num: string;
  title: string;
  caseId: string;
  tags: string[];
  icon: string;
  gradient: string;
  textColor: string;
}

const officeProjects: ProjectRow[] = [
  {
    id: "kova",
    num: "01",
    title: "KOVA AI Tool & Agent Platform",
    caseId: "kovaCase",
    tags: ["Generative AI", "Agents & MCP", "2025"],
    icon: "🤖",
    gradient: "linear-gradient(135deg, #16140F, #3A362C)",
    textColor: "#F2EEE6",
  },
  {
    id: "fuso-hawk",
    num: "02",
    title: "Osprey: FUSO Fleet & HAWK",
    caseId: "fusoCase",
    tags: ["Enterprise RBAC", "AI Chatbot UX", "2025"],
    icon: "⚙",
    gradient: "linear-gradient(135deg, #BF4B0A, #E07B3C)",
    textColor: "#F2EEE6",
  },
  {
    id: "honda-booking",
    num: "03",
    title: "Honda PDI Automation Module",
    caseId: "hondaCase",
    tags: ["Automotive PDI", "Field Inspection App", "2024–25"],
    icon: "◈",
    gradient: "linear-gradient(135deg, #3E4B3E, #6B7B6B)",
    textColor: "#F2EEE6",
  },
  {
    id: "seva",
    num: "04",
    title: "Digital Seva Portal",
    caseId: "sevaCase",
    tags: ["GovTech", "Accessibility", "IIT Delhi Research"],
    icon: "✦",
    gradient: "linear-gradient(135deg, #A0A83C, #C4CC60)",
    textColor: "#16140F",
  },
  {
    id: "swilmart",
    num: "05",
    title: "SwilMart Commerce",
    caseId: "swilCase",
    tags: ["B2B + B2C", "ERP Integration", "2022–24"],
    icon: "◆",
    gradient: "linear-gradient(135deg, #4C9A8A, #6FBFAE)",
    textColor: "#F2EEE6",
  },
];

const selfLearningProjects: ProjectRow[] = [
  {
    id: "brainwave-ai",
    num: "01",
    title: "BrainWave AI Canvas",
    caseId: "brainwaveCase",
    tags: ["Generative AI", "Canvas API", "React"],
    icon: "🧠",
    gradient: "linear-gradient(135deg, #BF4B0A, #A0A83C)",
    textColor: "#F2EEE6",
  },
  {
    id: "synthflow-ux",
    num: "02",
    title: "Synthflow UX Sound Sandbox",
    caseId: "synthflowCase",
    tags: ["Web Audio API", "Visual Synth", "Sonic UX"],
    icon: "🎵",
    gradient: "linear-gradient(135deg, #16140F, #4C9A8A)",
    textColor: "#F2EEE6",
  },
  {
    id: "antigravity-ide",
    num: "03",
    title: "Antigravity IDE Helper Agent",
    caseId: "antigravityCase",
    tags: ["AI Agent Dev", "VS Code API", "Node.js"],
    icon: "🛸",
    gradient: "linear-gradient(135deg, #E8B08C, #BF4B0A)",
    textColor: "#16140F",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"office" | "self">("office");
  const currentProjects = activeTab === "office" ? officeProjects : selfLearningProjects;

  return (
    <section id="work" style={{ padding: "8rem 3rem", maxWidth: "1300px", margin: "0 auto" }}>
      {/* Header */}
      <div className="reveal in" style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#BF4B0A", fontWeight: 600 }}>03</span>
        <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>Selected work</h2>
      </div>
      
      {/* Tabs and Hint wrapper */}
      <div className="reveal in" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "4rem", marginLeft: "3.4rem" }}>
        {/* Tab triggers */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => setActiveTab("office")}
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              padding: "8px 20px",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor: activeTab === "office" ? "var(--foreground)" : "transparent",
              color: activeTab === "office" ? "var(--background)" : "var(--text-muted)",
              border: activeTab === "office" ? "1px solid var(--foreground)" : "1px solid var(--border)",
            }}
          >
            Office Work
          </button>
          <button
            onClick={() => setActiveTab("self")}
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              padding: "8px 20px",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor: activeTab === "self" ? "var(--foreground)" : "transparent",
              color: activeTab === "self" ? "var(--background)" : "var(--text-muted)",
              border: activeTab === "self" ? "1px solid var(--foreground)" : "1px solid var(--border)",
            }}
          >
            Self Learnings
          </button>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
          Click any project for the full case study.
        </p>
      </div>

      {/* Rows wrapper */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        {currentProjects.map((row) => (
          <Link
            key={`${activeTab}-${row.id}`}
            href={`/case-studies/${row.id}`}
            className="work-row reveal in"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "2rem",
              alignItems: "center",
              padding: "2.6rem 1rem",
              borderBottom: "1px solid var(--border)",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* Index number */}
            <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.2rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              {row.num}
            </span>

            {/* Info details */}
            <div>
              <div
                className="work-title"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.6vw, 3rem)",
                  color: "var(--foreground)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {row.title}
              </div>
              <div style={{ display: "flex", gap: "0.7rem", marginTop: "0.7rem", flexWrap: "wrap" }}>
                {row.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      border: "1px solid var(--border)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      color: "var(--text-muted-dark)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating indicator/thumbnail preview and arrow icon */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div
                className="work-thumb"
                style={{
                  width: "130px",
                  height: "90px",
                  background: row.gradient,
                  borderRadius: "6px",
                  opacity: 0,
                  transform: "scale(0.85) rotate(4deg)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: row.textColor,
                  fontSize: "1.8rem",
                }}
              >
                {row.icon}
              </div>
              <span
                className="work-arrow"
                style={{
                  fontSize: "2rem",
                  color: "#BF4B0A",
                  opacity: 0,
                  transform: "translate(-10px, 10px) rotate(-45deg)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
