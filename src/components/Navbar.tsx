"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Layers, Sparkles, Send, Sun, Moon, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Journey", icon: Briefcase },
  { id: "work", label: "Work", icon: Layers },
  { id: "skills", label: "Craft", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Send },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const sayHelloRef = useRef<HTMLAnchorElement>(null);

  // Initialize theme from HTML element attribute on mount
  useEffect(() => {
    const active = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setTheme(active || "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  // Scroll progress & active section detection
  useEffect(() => {
    const sectionIds = ["hero", "about", "experience", "work", "skills", "contact"];

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(dh > 0 ? (st / dh) * 100 : 0);

      // Determine active section based on scroll offset
      const scrollPosition = st + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic button hover effect for desktop "Say hello"
  useEffect(() => {
    const btn = sayHelloRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900) return; // Desktop only
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = "translate(0, 0)";
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
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
    <>
      {/* Top scroll progress indicator */}
      <div
        id="progressBar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          backgroundColor: "#BF4B0A",
          width: `${scrollProgress}%`,
          zIndex: 1002,
          transition: "width 0.1s ease",
        }}
      />

      {/* ========================================================================= */}
      {/* 1. TOP HEADER (Unified for Desktop & Minimal Header for Mobile)          */}
      {/* ========================================================================= */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-4 sm:px-8 md:px-12 py-3.5 md:py-5.5 transition-colors duration-200"
        style={{
          backgroundColor: "var(--nav-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--nav-border)",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="font-serif text-[1.4rem] sm:text-[1.6rem] font-normal tracking-[0.5px] text-[var(--foreground)] hover:opacity-80 transition-opacity"
        >
          Neha<span style={{ color: "#BF4B0A" }}>.</span>
        </a>

        {/* Desktop Navigation Links (Visible on >= 768px) */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "#about")}
            className={`nav-link text-[0.82rem] font-semibold uppercase tracking-[1.5px] transition-colors ${
              activeSection === "about" ? "text-[var(--color-primary)]" : "text-[var(--foreground)]"
            }`}
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "#experience")}
            className={`nav-link text-[0.82rem] font-semibold uppercase tracking-[1.5px] transition-colors ${
              activeSection === "experience" ? "text-[var(--color-primary)]" : "text-[var(--foreground)]"
            }`}
          >
            Journey
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            className={`nav-link text-[0.82rem] font-semibold uppercase tracking-[1.5px] transition-colors ${
              activeSection === "work" ? "text-[var(--color-primary)]" : "text-[var(--foreground)]"
            }`}
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "#skills")}
            className={`nav-link text-[0.82rem] font-semibold uppercase tracking-[1.5px] transition-colors ${
              activeSection === "skills" ? "text-[var(--color-primary)]" : "text-[var(--foreground)]"
            }`}
          >
            Craft
          </a>
          <a
            href="/NehaSharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[0.82rem] font-semibold uppercase tracking-[1.5px] text-[var(--foreground)]"
          >
            Resume
          </a>

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--foreground)] hover:bg-[var(--card-bg)] transition-all cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* Desktop Magnetic "Say Hello" Button */}
          <a
            ref={sayHelloRef}
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="bg-[var(--foreground)] text-[var(--background)] text-[0.8rem] font-semibold uppercase tracking-[1.5px] px-6 py-2.5 rounded-full inline-block transition-all duration-300 hover:bg-[#BF4B0A] hover:text-white"
          >
            Say hello
          </a>
        </div>

        {/* Mobile Header Quick Actions (Theme Toggle + Resume Chip) */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="/NehaSharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] font-semibold uppercase tracking-[1px] px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
          >
            Resume
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--foreground)] hover:bg-[var(--card-bg)] transition-colors cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
          </button>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. MOBILE APP-STYLE BOTTOM FLOATING NAVIGATION BAR (Visible on < 768px)   */}
      {/* ========================================================================= */}
      <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-[1000] px-3 sm:px-6 md:hidden pointer-events-none">
        <nav
          aria-label="Mobile App Navigation"
          className="pointer-events-auto max-w-[420px] mx-auto rounded-full p-1.5 sm:p-2 flex items-center justify-around shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-[var(--nav-border)] transition-all duration-300"
          style={{
            backgroundColor: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, `#${item.id}`)}
                whileTap={{ scale: 0.88 }}
                className={`relative flex flex-col items-center justify-center py-1.5 px-3 sm:px-4 rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-[#F2EEE6] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {/* Active Glowing Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="mobileNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#BF4B0A] rounded-full shadow-[0_4px_14px_rgba(191,75,10,0.4)]"
                  />
                )}

                {/* Tab Icon and Label */}
                <span className="relative z-10 flex flex-col items-center gap-0.5">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.5px] uppercase">
                    {item.label}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
