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
    <div style={{ backgroundColor: "transparent", color: "var(--foreground)", minHeight: "100vh", position: "relative", transition: "color 0.2s" }}>


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
