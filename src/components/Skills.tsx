"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";

// Interactive Count-Up component
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let cur = 0;
    let frameId: number;

    const step = () => {
      cur += Math.max(1, Math.ceil(target / 30));
      if (cur >= target) {
        setCount(target);
        return;
      }
      setCount(cur);
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return (
    <div ref={ref} className="font-serif text-[1.8rem] sm:text-[2.4rem] text-[var(--color-primary)]">
      {count}
      {suffix}
    </div>
  );
}

export function About() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(avatarRef, { once: true, margin: "-100px" });
  
  // 3D perspective mouse tilt effect for the designer illustration
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 900) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-baseline gap-4 sm:gap-6 mb-12 sm:mb-16"
      >
        <span className="text-sm uppercase tracking-[3px] text-[var(--color-primary)] font-bold">01</span>
        <h2 className="font-serif font-normal text-[clamp(2.2rem,5vw,4rem)] text-[var(--foreground)]">
          The person behind the pixels
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
        {/* Left Column Text */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.45] mb-6 sm:mb-8 text-[var(--foreground)]"
          >
            “I think in systems — flows, architecture, components — but I never lose sight of the human on the other end of the screen.”
          </motion.p>
          <motion.p variants={fadeUp} className="text-[0.98rem] sm:text-[1.05rem] text-[var(--text-muted)] mb-5 max-w-[560px] leading-relaxed">
            4+ years designing end-to-end products across enterprise SaaS, automotive, e-commerce, and government platforms. I&apos;ve led design for role-based enterprise tools, dealer and mobility apps, AI chatbot interfaces — and a government portal used by rural, first-time digital users.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[0.98rem] sm:text-[1.05rem] text-[var(--text-muted)] mb-8 sm:mb-10 max-w-[560px] leading-relaxed">
            Comfortable working solo end-to-end, or embedded with cross-functional and research teams — including a collaboration with the <strong className="text-[var(--foreground)]">IIT Delhi Design team</strong> on accessibility research for low-literacy users.
          </motion.p>

          {/* Stats Counters Grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden"
          >
            <div className="bg-[var(--background)] p-3.5 sm:p-6 text-center">
              <Counter target={4} suffix="+" />
              <div className="text-[0.68rem] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] text-[var(--text-muted)] font-medium mt-1">Years</div>
            </div>
            <div className="bg-[var(--background)] p-3.5 sm:p-6 text-center">
              <Counter target={10} suffix="+" />
              <div className="text-[0.68rem] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] text-[var(--text-muted)] font-medium mt-1">Products</div>
            </div>
            <div className="bg-[var(--background)] p-3.5 sm:p-6 text-center">
              <Counter target={5} suffix="" />
              <div className="text-[0.68rem] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] text-[var(--text-muted)] font-medium mt-1">Domains</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column Interactive SVG Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full max-w-[320px] sm:max-w-[340px] mx-auto"
        >
          <motion.div
            ref={avatarRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 800
            }}
            className="relative cursor-default w-full"
          >
            <svg width="100%" height="auto" viewBox="0 0 340 360" className="block max-w-[340px] mx-auto">
              {/* Floor Shadow */}
              <ellipse cx="170" cy="330" rx="130" ry="16" fill="rgba(22,20,15,0.08)" className="dark:fill-white/5" />

              {/* Table / Desk */}
              <rect x="40" y="290" width="260" height="14" rx="7" fill="var(--foreground)" />
              <rect x="60" y="304" width="12" height="40" rx="4" fill="var(--foreground)" />
              <rect x="268" y="304" width="12" height="40" rx="4" fill="var(--foreground)" />

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
                <rect x="248" y="252" width="26" height="34" rx="4" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2.5" />
                <path d="M 254 268 Q 261 262 268 268" stroke="#BF4B0A" strokeWidth="2.5" fill="none" />
                {/* Steaming waves */}
                <path d="M 253 246 Q 258 238 263 246" stroke="var(--text-muted)" strokeWidth="2" fill="none" style={{ animation: "steam 2.4s ease-out infinite" }} />
                <path d="M 261 246 Q 266 238 271 246" stroke="var(--text-muted)" strokeWidth="2" fill="none" style={{ animation: "steam 2.4s ease-out infinite 0.9s" }} />
              </g>

              {/* Floating browser window sketch (left) */}
              <g style={{ animation: "floatY 3.4s ease-in-out infinite 0.6s" }}>
                <rect x="58" y="150" width="52" height="36" rx="6" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
                <rect x="66" y="160" width="24" height="4" rx="2" fill="#BF4B0A" />
                <rect x="66" y="169" width="34" height="4" rx="2" fill="var(--border)" />
              </g>

              {/* Floating green success badge (right) */}
              <g style={{ animation: "floatY 3.8s ease-in-out infinite 1.4s" }}>
                <circle cx="278" cy="150" r="20" fill="#A0A83C" />
                <path d="M 270 150 L 276 156 L 288 143" stroke="#F2EEE6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </motion.div>
          <div className="text-center font-serif italic text-sm sm:text-base text-[var(--text-muted-dark)] mt-2">
            happiest when the flow finally clicks ☕
          </div>
        </motion.div>
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
        return "bg-[var(--color-primary)] text-[#F2EEE6] border border-[var(--color-primary)]";
      case "olive":
        return "bg-[var(--color-secondary)] text-[#16140F] border border-[var(--color-secondary)] font-medium";
      default:
        return "bg-transparent text-[var(--foreground)] border-[1.5px] border-[var(--border)]";
    }
  };

  const loopList = (arr: typeof row1Tags) => {
    return [...arr, ...arr, ...arr];
  };

  return (
    <section id="skills" className="bg-[var(--background)] py-20 sm:py-32 overflow-hidden z-10 relative">
      {/* Craft Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-baseline gap-4 sm:gap-6 mb-12 sm:mb-16 px-5 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
      >
        <span className="text-sm uppercase tracking-[3px] text-[var(--color-secondary)] font-bold">04</span>
        <h2 className="font-serif font-normal text-[clamp(2.2rem,5vw,4rem)] text-[var(--foreground)]">
          The craft
        </h2>
      </motion.div>

      {/* Reversing tags marquees */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Left */}
        <div className="overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex gap-3 sm:gap-4 w-max animate-[marqueeLeft_30s_linear_infinite]"
          >
            {loopList(row1Tags).map((tag, idx) => (
              <span key={idx} className={`px-5 py-2.5 sm:px-7 sm:py-3 rounded-full whitespace-nowrap text-sm sm:text-base transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] ${getTagStyle(tag.type)}`}>
                {tag.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right */}
        <div className="overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex gap-3 sm:gap-4 w-max animate-[marqueeRight_26s_linear_infinite]"
          >
            {loopList(row2Tags).map((tag, idx) => (
              <span key={idx} className={`px-5 py-2.5 sm:px-7 sm:py-3 rounded-full whitespace-nowrap text-sm sm:text-base transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] ${getTagStyle(tag.type)}`}>
                {tag.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 3: Left */}
        <div className="overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex gap-3 sm:gap-4 w-max animate-[marqueeLeft_24s_linear_infinite]"
          >
            {loopList(row3Tags).map((tag, idx) => (
              <span key={idx} className={`px-5 py-2.5 sm:px-7 sm:py-3 rounded-full whitespace-nowrap text-sm sm:text-base transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] ${getTagStyle(tag.type)}`}>
                {tag.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
