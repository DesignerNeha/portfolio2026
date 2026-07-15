"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { About, Craft } from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Custom cursor movement with spring easing and expansion triggers
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only enable on desktop screens
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;
    if (!isDesktop) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mx = -100, my = -100, rx = -100, ry = -100;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .work-row, #footerWit")) {
        dot.style.width = "46px";
        dot.style.height = "46px";
        dot.style.background = "rgba(191, 75, 10, 0.25)";
        ring.style.opacity = "0";
      } else {
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.background = "#BF4B0A";
        ring.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    let frameId: number;
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Easter egg keyboard hook checking for 'hire' keypresses
  useEffect(() => {
    let buffer = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer = (buffer + e.key.toLowerCase()).slice(-6);
      if (buffer.endsWith("hire")) {
        setToastMessage("✦ Excellent instinct. nehas.designs26@gmail.com is waiting.");
        buffer = "";
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close toast message after 3.5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)", minHeight: "100vh", position: "relative", transition: "background-color 0.2s, color 0.2s" }}>
      {/* Custom Mouse Cursor Elements */}
      <div
        ref={dotRef}
        id="cursorDot"
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          background: "#BF4B0A",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease",
        }}
      />
      <div
        ref={ringRef}
        id="cursorRing"
        style={{
          position: "fixed",
          width: "36px",
          height: "36px",
          border: "1.5px solid rgba(191, 75, 10, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Core Layout Sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Craft />
        <Contact />
      </main>

      {/* Easter Egg Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#16140F",
            color: "#F2EEE6",
            padding: "1rem 2rem",
            borderRadius: "100px",
            zIndex: 10001,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            boxShadow: "0 12px 40px rgba(22,20,15,0.35)",
            animation: "fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
