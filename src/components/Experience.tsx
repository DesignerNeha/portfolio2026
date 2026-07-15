"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const r = trackRef.current.getBoundingClientRect();
      const visible = Math.min(Math.max((window.innerHeight * 0.7 - r.top) / r.height, 0), 1);
      setTimelineHeight(visible * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardStyle = (id: string) => ({
    border: "1px solid rgba(242, 238, 230, 0.15)",
    borderColor: hoveredCard === id ? "#BF4B0A" : "rgba(242, 238, 230, 0.15)",
    transform: hoveredCard === id ? "translateY(-4px)" : "translateY(0)",
    padding: "1.5rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    cursor: "default",
  });

  return (
    <section id="experience" style={{ backgroundColor: "#16140F", color: "#F2EEE6", padding: "8rem 3rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Header */}
        <div className="reveal in" style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "5rem" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "3px", color: "#A0A83C", fontWeight: 600 }}>02</span>
          <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#F2EEE6" }}>
            The journey so far
          </h2>
        </div>

        {/* Timeline Axis Track */}
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          <div
            ref={trackRef}
            id="timelineTrack"
            style={{
              position: "absolute",
              left: "8px",
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "rgba(242, 238, 230, 0.15)",
            }}
          >
            <div
              id="timelineFill"
              style={{
                width: "100%",
                height: `${timelineHeight}%`,
                backgroundColor: "#BF4B0A",
                transition: "height 0.1s ease",
              }}
            />
          </div>

          {/* Row 1: Cubastion Consulting */}
          <div className="reveal in timeline-entry" style={{ marginBottom: "4.5rem", position: "relative" }}>
            {/* Active timeline dot indicator */}
            <div
              style={{
                position: "absolute",
                left: "-3rem",
                top: "8px",
                width: "18px",
                height: "18px",
                backgroundColor: "#BF4B0A",
                borderRadius: "50%",
                border: "4px solid #16140F",
                boxShadow: "0 0 0 2px #BF4B0A",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.9rem", fontWeight: 400 }}>
                Cubastion Consulting <span style={{ color: "#BF4B0A", fontStyle: "italic" }}>— Senior UI/UX Designer</span>
              </h3>
              <span style={{ fontSize: "0.85rem", color: "#A0A83C", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 500 }}>
                03/2025 – Present · Gurugram
              </span>
            </div>

            {/* Split cards row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              <div
                style={cardStyle("fuso")}
                onMouseEnter={() => setHoveredCard("fuso")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ fontWeight: 600, marginBottom: "0.6rem", color: "#F2EEE6" }}>
                  Mitsubishi FUSO — Field Fix Portal & HAWK
                </div>
                <p style={{ fontSize: "0.92rem", color: "#B5B0A4", lineHeight: 1.5 }}>
                  MVP for a role-based enterprise tool across dealer/service networks. Led UX for AI chatbot integration in an HR Admin Portal. RBAC, error-state handling, scalable components.
                </p>
              </div>
              <div
                style={cardStyle("honda")}
                onMouseEnter={() => setHoveredCard("honda")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ fontWeight: 600, marginBottom: "0.6rem", color: "#F2EEE6" }}>
                  Honda HMIC — Dealer & Mobility Apps
                </div>
                <p style={{ fontSize: "0.92rem", color: "#B5B0A4", lineHeight: 1.5 }}>
                  5 interconnected apps with global dashboards for real-time data across regions. End-to-end flows and one consistent design system.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: CSC E-Governance */}
          <div className="reveal in timeline-entry" style={{ marginBottom: "4.5rem", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-3rem",
                top: "8px",
                width: "18px",
                height: "18px",
                backgroundColor: "#16140F",
                borderRadius: "50%",
                border: "2px solid #BF4B0A",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.9rem", fontWeight: 400 }}>
                CSC E-Governance <span style={{ color: "#BF4B0A", fontStyle: "italic" }}>— UI/UX Designer</span>
              </h3>
              <span style={{ fontSize: "0.85rem", color: "#A0A83C", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 500 }}>
                07/2024 – 03/2025 · Delhi
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#B5B0A4", maxWidth: "700px", lineHeight: 1.6 }}>
              Independently led end-to-end UX for the <strong style={{ color: "#F2EEE6" }}>Digital Seva Portal</strong> — bill payments, ticket booking, and essential services for rural India. Collaborated with the IIT Delhi Design team on usability testing with low-literacy, first-time digital users.
            </p>
          </div>

          {/* Row 3: Softworld India */}
          <div className="reveal in timeline-entry" style={{ marginBottom: "4.5rem", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-3rem",
                top: "8px",
                width: "18px",
                height: "18px",
                backgroundColor: "#16140F",
                borderRadius: "50%",
                border: "2px solid #BF4B0A",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.9rem", fontWeight: 400 }}>
                Softworld India <span style={{ color: "#BF4B0A", fontStyle: "italic" }}>— UI/UX Designer</span>
              </h3>
              <span style={{ fontSize: "0.85rem", color: "#A0A83C", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 500 }}>
                08/2022 – 06/2024 · Jaipur
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#B5B0A4", maxWidth: "700px", lineHeight: 1.6 }}>
              <strong style={{ color: "#F2EEE6" }}>SwilMart</strong> — unified yet role-specific B2B + B2C commerce across web and mobile. Product discovery, checkout, order tracking, real-time SwilERP inventory integration, and a scalable cross-platform design system.
            </p>
          </div>

          {/* Row 4: Softrow IT Solutions */}
          <div className="reveal in timeline-entry" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-3rem",
                top: "8px",
                width: "18px",
                height: "18px",
                backgroundColor: "#16140F",
                borderRadius: "50%",
                border: "2px solid rgba(242, 238, 230, 0.4)",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "1.9rem", fontWeight: 400 }}>
                Softrow IT Solutions <span style={{ color: "#BF4B0A", fontStyle: "italic" }}>— Design Intern</span>
              </h3>
              <span style={{ fontSize: "0.85rem", color: "#A0A83C", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 500 }}>
                02/2022 – 06/2022 · Jaipur
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#B5B0A4", maxWidth: "700px", lineHeight: 1.6 }}>
              <strong style={{ color: "#F2EEE6" }}>WowTalent</strong> — UI/UX for a short-video platform: intuitive uploading, interaction, and content discovery. Where it all started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
