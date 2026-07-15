"use client";

import React, { useState, useEffect, useRef } from "react";

const words = [
  "enterprise dealer networks",
  "AI chatbot interfaces",
  "first-time digital users",
  "global data dashboards",
  "humans, above all",
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(true);
  const [charIndex, setCharIndex] = useState(words[0].length);

  const seeWorkRef = useRef<HTMLAnchorElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);

  // Typewriter effect matching the reference script tick rates
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[wordIdx];

      if (isDeleting) {
        setCharIndex((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            setIsDeleting(false);
            setWordIdx((curr) => (curr + 1) % words.length);
            return 0;
          }
          return next;
        });
      } else {
        setCharIndex((prev) => {
          const next = prev + 1;
          const targetWord = words[wordIdx];
          if (next >= targetWord.length) {
            setIsDeleting(true);
            timer = setTimeout(() => {
              // Pause at full word
              setIsDeleting(true);
            }, 2200);
            return targetWord.length;
          }
          return next;
        });
      }
    };

    const delay = isDeleting ? 28 : 55;
    // When we just finished typing, we have a long timeout running, so don't stack them
    if (charIndex === words[wordIdx].length && isDeleting) {
      timer = setTimeout(tick, 2200);
    } else {
      timer = setTimeout(tick, delay);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIdx]);

  // Update printed text slice
  useEffect(() => {
    const currentWord = words[wordIdx];
    setText(currentWord.slice(0, charIndex));
  }, [charIndex, wordIdx]);

  // Magnetic hover effect helper
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

    const cleanWork = attachMagnetic(seeWorkRef.current);
    const cleanEmail = attachMagnetic(emailRef.current);

    return () => {
      if (cleanWork) cleanWork();
      if (cleanEmail) cleanEmail();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 3rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Rotating circular badge */}
      <div
        className="animate-spin-slow select-none pointer-events-none"
        style={{
          position: "absolute",
          top: "12%",
          right: "6%",
          opacity: 0.9,
          zIndex: 10,
        }}
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <defs>
            <path id="circlePath" d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
          </defs>
          <text
            style={{
              fontSize: "11.5px",
              letterSpacing: "2.5px",
              fill: "#16140F",
              textTransform: "uppercase",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <textPath href="#circlePath">• design with intent • built for humans • design with intent</textPath>
          </text>
        </svg>
      </div>

      {/* Decorative floating shapes */}
      <div
        className="animate-float-y"
        style={{
          position: "absolute",
          bottom: "18%",
          left: "4%",
          width: "60px",
          height: "60px",
          border: "1.5px solid #BF4B0A",
          borderRadius: "50%",
          opacity: 0.4,
        }}
      />
      <div
        className="animate-float-y-delayed"
        style={{
          position: "absolute",
          top: "26%",
          left: "12%",
          width: "14px",
          height: "14px",
          backgroundColor: "#A0A83C",
          borderRadius: "50%",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        {/* Availability Badge Row */}
        <div
          className="reveal in"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#4C9A4C",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            Senior UI/UX Designer · Available for interesting problems
          </span>
        </div>

        {/* Serif Hero Heading */}
        <h1
          className="reveal in"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 7.5vw, 6.8rem)",
            lineHeight: 1.02,
            letterSpacing: "-1px",
            marginBottom: "2.4rem",
            color: "var(--foreground)",
          }}
        >
          I turn <em className="not-italic" style={{ color: "#BF4B0A" }}>complex</em> workflows into interfaces people <em className="not-italic" style={{ borderBottom: "4px solid #A0A83C" }}>actually enjoy</em> using.
        </h1>

        {/* Rotating Typewriter Text Row */}
        <div
          className="reveal in"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <span style={{ fontSize: "1.15rem", color: "var(--text-muted)" }}>Right now, designing for</span>
          <span
            id="rotatingWord"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.6rem",
              color: "var(--foreground)",
              minWidth: "280px",
              display: "inline-block",
              borderRight: "2px solid #BF4B0A",
              paddingRight: "6px",
              animation: "blinkCaret 1.2s step-end infinite",
            }}
          >
            {text}
          </span>
        </div>

        {/* Action Button CTA Row */}
        <div className="reveal in" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          <a
            ref={seeWorkRef}
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              padding: "16px 36px",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#BF4B0A";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--foreground)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See the work <span style={{ fontSize: "1.1rem" }}>↓</span>
          </a>
          <a
            ref={emailRef}
            href="mailto:nehas.designs26@gmail.com"
            style={{
              border: "1.5px solid var(--foreground)",
              color: "var(--foreground)",
              padding: "16px 36px",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            nehas.designs26@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
