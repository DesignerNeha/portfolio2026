"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const yPos = useTransform(smoothProgress, [0, 1], [0, 150]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  // Typewriter effect
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
            timer = setTimeout(() => setIsDeleting(true), 2200);
            return targetWord.length;
          }
          return next;
        });
      }
    };

    const delay = isDeleting ? 28 : 55;
    if (charIndex === words[wordIdx].length && isDeleting) {
      timer = setTimeout(tick, 2200);
    } else {
      timer = setTimeout(tick, delay);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIdx]);

  useEffect(() => {
    const currentWord = words[wordIdx];
    setText(currentWord.slice(0, charIndex));
  }, [charIndex, wordIdx]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Kinetic Typography Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 60, scale: 0.95, rotateX: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 100, mass: 1.5 } 
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 overflow-hidden perspective-1000"
    >
      <motion.div 
        style={{ y: yPos, opacity, scale }}
        className="max-w-[1200px] w-full mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge Row */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#4C9A4C] shadow-[0_0_15px_rgba(76,154,76,0.8)] animate-pulse" />
          <span className="text-[0.85rem] uppercase tracking-[2px] text-[var(--text-muted)] font-medium">
            Senior UI/UX Designer · Available for interesting problems
          </span>
        </motion.div>

        {/* Serif Hero Heading - Restored Original Typography Scale but Kinetic */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif font-normal text-[clamp(3rem,7.5vw,6.8rem)] leading-[1.02] tracking-[-1px] text-[var(--foreground)] mb-10"
        >
          I turn <motion.em whileHover={{ scale: 1.05, color: "#E07B3C" }} className="inline-block not-italic text-[var(--color-primary)] transition-colors cursor-default">complex</motion.em> workflows into interfaces people <em className="not-italic border-b-[4px] border-[var(--color-secondary)] relative inline-block group">
            actually enjoy
            {/* Interactive hover line */}
            <motion.span 
              className="absolute -bottom-[4px] left-0 w-full h-[4px] bg-[var(--color-primary)] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />
          </em> using.
        </motion.h1>

        {/* Rotating Typewriter Text Row */}
        <motion.div variants={itemVariants} className="flex items-baseline gap-4 flex-wrap mb-12">
          <span className="text-[1.15rem] text-[var(--text-muted)]">Right now, designing for</span>
          <span className="font-serif italic text-[1.6rem] text-[var(--foreground)] border-r-[2px] border-[var(--color-primary)] pr-2 min-w-[280px] animate-[blinkCaret_1.2s_step-end_infinite]">
            {text}
          </span>
        </motion.div>

        {/* Action Button CTA Row */}
        <motion.div variants={itemVariants} className="flex gap-5 flex-wrap">
          {/* Super Interactive Magnetic Button */}
          <motion.a
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            whileHover={{ scale: 1.08, y: -4, backgroundColor: "var(--color-primary)", color: "#F2EEE6", boxShadow: "0 20px 40px rgba(191,75,10,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--foreground)] text-[var(--background)] px-9 py-4 rounded-full font-semibold text-[0.95rem] inline-flex items-center gap-2.5 transition-all duration-300"
          >
            See the work <span className="text-xl">↓</span>
          </motion.a>
          
          <motion.a
            href="mailto:nehas.designs26@gmail.com"
            whileHover={{ scale: 1.05, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            whileTap={{ scale: 0.95 }}
            className="border-[1.5px] border-[var(--foreground)] text-[var(--foreground)] px-9 py-4 rounded-full font-semibold text-[0.95rem] inline-flex items-center transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            nehas.designs26@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Restored Decorative elements with enhanced motion */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[12%] right-[6%] select-none pointer-events-none opacity-90 z-20 mix-blend-difference hidden md:block"
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <defs>
            <path id="circlePath" d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
          </defs>
          <text className="text-[11.5px] tracking-[2.5px] uppercase font-sans fill-white">
            <textPath href="#circlePath">• design with intent • built for humans • design with intent</textPath>
          </text>
        </svg>
      </motion.div>
    </section>
  );
}
