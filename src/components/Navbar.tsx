"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(dh > 0 ? (st / dh) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic button hover effect
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
    setMobileMenuOpen(false);
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
          zIndex: 1001,
          transition: "width 0.1s ease",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.4rem 3rem",
          backgroundColor: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--nav-border)",
          transition: "background-color 0.2s, border-color 0.2s",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "1.5rem",
            color: "var(--foreground)",
            letterSpacing: "0.5px",
            fontWeight: 400,
          }}
        >
          Neha<span style={{ color: "#BF4B0A" }}>.</span>
        </a>

        {/* Desktop Nav Items */}
        <div
          className="hidden md:flex"
          style={{ gap: "2.2rem", alignItems: "center" }}
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "#about")}
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "#experience")}
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Journey
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "#skills")}
            className="nav-link"
            style={{
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Craft
          </a>

          {/* Desktop Theme Toggle Trigger */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--card-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <a
            ref={sayHelloRef}
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="group"
            style={{
              color: "var(--background)",
              backgroundColor: "var(--foreground)",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              padding: "10px 22px",
              borderRadius: "100px",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#BF4B0A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--foreground)";
            }}
          >
            Say hello
          </a>
        </div>

        {/* Mobile menu toggle controls */}
        <div className="flex md:hidden" style={{ alignItems: "center", gap: "0.5rem" }}>
          {/* Mobile Theme Toggle Trigger */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            className="p-1.5 hover:text-[#BF4B0A] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ color: "var(--foreground)" }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay list */}
        {mobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 border-b flex flex-col p-6 space-y-4 shadow-xl z-50 animate-fade-in"
            style={{
              backgroundColor: "var(--background)",
              borderBottomColor: "var(--border)",
            }}
          >
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              style={{
                color: "var(--foreground)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "#experience")}
              style={{
                color: "var(--foreground)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Journey
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "#work")}
              style={{
                color: "var(--foreground)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Work
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "#skills")}
              style={{
                color: "var(--foreground)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Craft
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              style={{
                color: "var(--background)",
                backgroundColor: "var(--foreground)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                padding: "12px 24px",
                borderRadius: "100px",
                textAlign: "center",
                display: "block",
                transition: "all 0.3s ease",
              }}
            >
              Say hello
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
