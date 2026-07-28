"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const witLines = [
  "Designed in Figma, rebuilt in code, powered by chai ☕",
  "Currently vibing on: RBAC flows that don't make people cry",
  "Fun fact: my best IA ideas arrive mid-chai, not mid-meeting",
  "You found the hidden footer. Hire accordingly. ✦",
  "Yes, I test my designs with real users. Even this footer.",
];

export default function Contact() {
  const [witIdx, setWitIdx] = useState(0);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleWitClick = () => {
    setWitIdx((prev) => (prev + 1) % witLines.length);
  };

  const btnStyle = (id: string, isSolid = false) => {
    const isHovered = hoveredBtn === id;
    if (isSolid) {
      return {
        backgroundColor: isHovered ? "var(--color-primary)" : "var(--foreground)",
        color: "var(--background)",
        padding: "18px 42px",
        borderRadius: "100px",
        fontWeight: 600,
        fontSize: "1rem",
        display: "inline-block",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      };
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="contact" className="py-36 px-6 md:px-12 text-center relative overflow-hidden bg-[var(--background)] z-10">
      {/* Decorative top boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--border)]" />

      <motion.div
        ref={containerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Step subtitle */}
        <motion.div 
          variants={fadeUp}
          className="text-sm uppercase tracking-[3px] text-[var(--color-primary)] font-bold mb-6"
        >
          05 · Say hello
        </motion.div>

        {/* Head title */}
        <motion.h2 
          variants={fadeUp}
          className="font-serif font-normal text-[clamp(3rem,8vw,7rem)] leading-[1.05] mb-12 text-[var(--foreground)]"
        >
          Got a messy workflow?<br />
          <em className="not-italic text-[var(--color-primary)]">I&apos;d love to untangle it.</em>
        </motion.h2>

        {/* Action button cards row */}
        <motion.div 
          variants={fadeUp}
          className="flex gap-5 justify-center flex-wrap mb-24"
        >
          <motion.a
            href="mailto:nehas.designs26@gmail.com"
            style={btnStyle("email", true)}
            onMouseEnter={() => setHoveredBtn("email")}
            onMouseLeave={() => setHoveredBtn(null)}
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 40px rgba(191,75,10,0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            nehas.designs26@gmail.com
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/neha-sharma-ns15021997/"
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle("linkedin")}
            onMouseEnter={() => setHoveredBtn("linkedin")}
            onMouseLeave={() => setHoveredBtn(null)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn ↗
          </motion.a>
          <motion.a
            href="tel:+919799718755"
            style={btnStyle("phone")}
            onMouseEnter={() => setHoveredBtn("phone")}
            onMouseLeave={() => setHoveredBtn(null)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            +91 97997 18755
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer details row */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="border-t border-[var(--border)] pt-8 flex justify-between flex-wrap gap-4 text-[0.85rem] text-[var(--text-muted)]"
      >
        <span>© 2026 Neha Sharma · Gurugram, India</span>
        <motion.span
          onClick={handleWitClick}
          key={witIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="cursor-pointer font-serif italic text-base select-none"
          title="click me"
        >
          {witLines[witIdx]}
        </motion.span>
        <span>B.Com, Rajasthan University · Designer by obsession</span>
      </motion.div>
    </section>
  );
}
