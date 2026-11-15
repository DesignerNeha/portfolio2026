"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import ImageSlot from "../osprey/ImageSlot";
import BeforeAfterSlider from "../osprey/BeforeAfterSlider";
import { digitalSevaImages } from "./digitalseva-images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

interface DigitalSevaCaseStudyProps {
  prevCaseName?: string;
  prevCaseUrl?: string;
  nextCaseName?: string;
  nextCaseUrl?: string;
}

export function DigitalSevaCaseStudy({
  prevCaseName = "PDI Automation Module — My Honda App",
  prevCaseUrl = "honda-booking",
  nextCaseName = "NONA Lifestyle",
  nextCaseUrl = "nona-lifestyle",
}: DigitalSevaCaseStudyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Sync theme with HTML data-theme
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Scroll listener for reading progress and subtle scroll reveals
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(dh > 0 ? (st / dh) * 100 : 0);

      const reveals = document.querySelectorAll(".reveal:not(.in)");
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
          el.classList.add("in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check immediately and after short delay for images
    handleScroll();
    const t1 = setTimeout(handleScroll, 50);
    const t2 = setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // IntersectionObserver guarantee for reveal elements
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 120px 0px" }
      );

      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#12110E] text-[#F2EEE6] selection:bg-[#BF4B0A] selection:text-white ${poppins.variable} font-sans`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#BF4B0A] via-[#D95A14] to-[#BF4B0A] z-[1001] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Top Header Navigation */}
      <nav
        aria-label="Main Case Study Navigation"
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-4 sm:px-8 md:px-12 py-3.5 md:py-4 transition-colors duration-200"
        style={{
          backgroundColor: "rgba(18, 17, 14, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(242, 238, 230, 0.08)",
        }}
      >
        <Link
          href="/"
          className="text-[0.88rem] sm:text-[0.92rem] font-semibold text-[#BF4B0A] inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          ← <span className="hidden sm:inline">Back to portfolio</span>
          <span className="sm:hidden">Portfolio</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:inline text-[0.92rem] font-medium text-[#B5B0A4]">
            Case Study <span className="text-[#BF4B0A] font-bold">04/05</span>
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#F2EEE6] hover:bg-[#1C1914] transition-colors cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {prevCaseUrl && (
            <Link
              href={`/case-studies/${prevCaseUrl}`}
              className="text-[0.88rem] font-medium text-[#B5B0A4] hover:text-[#BF4B0A] inline-flex items-center gap-1.5 transition-colors"
            >
              ← Previous Project
            </Link>
          )}
          {nextCaseUrl && (
            <Link
              href={`/case-studies/${nextCaseUrl}`}
              className="text-[0.88rem] font-medium text-[#BF4B0A] hover:opacity-80 inline-flex items-center gap-1.5 transition-opacity"
            >
              Next Project →
            </Link>
          )}
        </div>
      </nav>

      {/* Floating Mobile Bottom Navigation Dock */}
      <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-[1000] px-3 sm:px-6 md:hidden pointer-events-none">
        <nav
          aria-label="Case Study Mobile Navigation"
          className="pointer-events-auto max-w-[400px] mx-auto rounded-full p-1.5 flex items-center justify-around shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-[rgba(242,238,230,0.15)] bg-[rgba(18,17,14,0.95)] backdrop-blur-xl"
        >
          {prevCaseUrl ? (
            <Link
              href={`/case-studies/${prevCaseUrl}`}
              className="text-[0.78rem] font-medium text-[#B5B0A4] px-3 py-2 rounded-full hover:bg-[#1C1914]"
            >
              ← Prev
            </Link>
          ) : (
            <span className="text-[0.78rem] text-[#6E6A60] px-3 py-2">Prev</span>
          )}

          <span className="text-[0.75rem] font-bold text-[#BF4B0A] px-2 font-mono">
            04/05
          </span>

          {nextCaseUrl ? (
            <Link
              href={`/case-studies/${nextCaseUrl}`}
              className="text-[0.78rem] font-medium text-[#BF4B0A] px-3 py-2 rounded-full hover:bg-[#1C1914]"
            >
              Next →
            </Link>
          ) : (
            <span className="text-[0.78rem] text-[#6E6A60] px-3 py-2">Next</span>
          )}
        </nav>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-24 flex flex-col gap-24 sm:gap-32">
        {/* =========================================================
            ONE-VIEW HERO SECTION
           ========================================================= */}
        <header className="flex flex-col gap-6 text-left pt-6">
          {/* Top Pill Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-[rgba(191,75,10,0.12)] text-[#BF4B0A] border border-[rgba(191,75,10,0.3)]">
              GovTech
            </span>
            <span className="text-[0.75rem] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#181611] text-[#A6A095] border border-[rgba(242,238,230,0.08)]">
              Accessibility
            </span>
            <span className="text-[0.75rem] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#181611] text-[#A6A095] border border-[rgba(242,238,230,0.08)]">
              Usability Testing
            </span>
          </div>

          {/* Title & One-Liner */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold tracking-tight text-[#F2EEE6] leading-[1.08]">
              Digital Seva Portal
            </h1>
            <p className="text-[1.12rem] sm:text-[1.28rem] text-[#D4CEBF] leading-relaxed max-w-4xl font-normal">
              I designed a portal for village-level entrepreneurs who serve rural citizens, and changed its colours and text size after IIT Delhi tested it in day, night and sunlight.
            </p>
          </div>

          {/* Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] text-[0.82rem] font-mono text-[#8C877D]">
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Client</span>
              <span className="text-[#F2EEE6] font-semibold">CSC e-Governance</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Role</span>
              <span className="text-[#F2EEE6]">UI/UX Designer</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Timeline</span>
              <span className="text-[#F2EEE6]">Jul 2024 to Mar 2025</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Collaboration</span>
              <span className="text-[#F2EEE6]">IIT Delhi (Testing)</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Platform</span>
              <span className="text-[#F2EEE6]">Web portal</span>
            </div>
          </div>

          {/* Hero Device Visual */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-[rgba(242,238,230,0.12)] bg-[#16140F] shadow-2xl">
            <img
              src={digitalSevaImages.heroBanner}
              alt="Digital Seva Portal laptop mockup in high contrast color theme"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          {/* At A Glance 5 Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] mr-2">
              At a glance:
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              GovTech portal
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Used in rural India
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Tested by IIT Delhi
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Redesigned after testing
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Live today
            </span>
          </div>

          {/* 3-Line Skim Summary */}
          <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2.5 text-left">
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">The problem:</strong> village-level entrepreneurs serve citizens from rural centres, often in bright sunlight, and need a portal that stays readable and simple.
            </p>
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">What I did:</strong> designed the screens, then changed the colour theme to bright colours and made the text larger after IIT Delhi&apos;s tests in different lights.
            </p>
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">Why it matters:</strong> the portal is live and built for the conditions it is really used in.
            </p>
          </div>
        </header>

        {/* =========================================================
            01 OVERVIEW
           ========================================================= */}
        <section id="section-01" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              01
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Overview: Essential utility and civic services for rural India
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              Through this portal, village-level entrepreneurs (VLEs) help rural people use everyday services such as electricity and water bill payments and government form submissions. Citizens do not have to travel to city offices or work through digital systems on their own.
            </p>
            <p>
              I designed the screens, IIT Delhi tested them with users, and I changed the design based on what they found. The portal is live today.
            </p>
          </div>
        </section>

        {/* =========================================================
            02 THE CHALLENGE
           ========================================================= */}
        <section id="section-02" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              02
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              The challenge: Reliable digital access outside traditional office environments
            </h2>
          </div>

          {/* Large Quote Card */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl font-serif text-[#BF4B0A]/15 select-none pointer-events-none">
              &ldquo;
            </div>
            <p className="text-[1.18rem] sm:text-[1.32rem] text-[#F2EEE6] font-medium leading-relaxed relative z-10 italic">
              Rural India has had limited direct access to digital government and utility services, so people travel long distances or depend on unorganised help.
            </p>
          </div>

          {/* Three Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                One portal for many services
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                CSC&apos;s network of VLEs already existed, but there was no single easy-to-use portal to deliver many services.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Users who are new to digital tools
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                VLEs work in rural areas, often on low-end devices, with different levels of digital skill.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Where it is used
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                Most CSC centres in rural areas do not have a proper building or office, so the portal is often used outdoors in strong sunlight.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            03 WHO I DESIGNED FOR
           ========================================================= */}
        <section id="section-03" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              03
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Who I designed for: The Village Level Entrepreneur (VLE)
            </h2>
          </div>

          {/* Single Focused Persona Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-4">
            <div className="flex items-center gap-3.5 border-b border-[rgba(242,238,230,0.08)] pb-4">
              <div className="w-12 h-12 rounded-full bg-[#1F1912] border border-[#BF4B0A]/40 text-[#BF4B0A] flex items-center justify-center font-mono font-bold text-base">
                VLE
              </div>
              <div>
                <h3 className="text-[1.2rem] font-bold text-[#F2EEE6]">
                  Village Level Entrepreneur (VLE)
                </h3>
                <span className="text-[0.84rem] text-[#8C877D] font-mono">
                  Primary Operator &amp; Civic Bridge
                </span>
              </div>
            </div>

            <p className="text-[1.05rem] text-[#D4CEBF] leading-relaxed">
              A VLE is a local agent who serves citizens from a rural centre, often outdoors and often with people who are not used to digital screens. So I designed for clarity first, not for trends.
            </p>
          </div>
        </section>

        {/* =========================================================
            04 LANDING PAGE
           ========================================================= */}
        <section id="section-04" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              04
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Landing page: A unified entrance for every rural entrepreneur
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            The landing page is where a VLE enters the portal. I designed it in the same visual language as the rest of the portal, so what people see first matches what they use next.
          </p>

          {/* Full Width Landing Page Slot */}
          <div className="w-full pt-2">
            <ImageSlot
              label="Landing page"
              scrollable
              maxScrollHeight="640px"
              src={digitalSevaImages.landingPageFull}
              caption={digitalSevaImages.landingPageFullCaption}
            />
          </div>
        </section>

        {/* =========================================================
            05 LOGIN SCREEN
           ========================================================= */}
        <section id="section-05" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              05
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Login screen: Simple and secure authentication for rural kiosks
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            The login screen gives VLEs a focused, distraction-free sign-in to begin their work day. I kept the layout clean with high-contrast inputs so entrepreneurs can enter their credentials reliably even in bright ambient light.
          </p>

          {/* Login Screen Slot */}
          <div className="w-full pt-2">
            <ImageSlot
              label="Login screen"
              aspectRatio="auto"
              src={digitalSevaImages.loginScreen}
              caption={digitalSevaImages.loginScreenCaption}
            />
          </div>
        </section>

        {/* =========================================================
            06 THE FIRST DESIGN: LIGHT AND PASTEL
           ========================================================= */}
        <section id="section-06" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              06
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              The first design: Light and pastel tones before usability testing
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              I started with light, pastel colours and a soft look.
            </p>
          </div>

          {/* First Version Slot */}
          <div className="w-full">
            <ImageSlot
              label="First version with pastel colours"
              aspectRatio="auto"
              src={digitalSevaImages.firstVersionPastel}
              caption="Initial design version: Soft pastel aesthetic tested before field evaluation."
            />
          </div>

          <p className="text-[0.98rem] text-[#D4CEBF] leading-relaxed italic">
            This was my first design. Then it was tested.
          </p>
        </section>

        {/* =========================================================
            07 DECISION 1: BRIGHT COLOURS AND LARGER TEXT
           ========================================================= */}
        <section id="section-07" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              07
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 1: Bright colours and larger text for outdoor readability
            </h2>
          </div>

          {/* Three Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                The problem
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                Soft pastel colours and small text were easy to read indoors, but washed out and hard to read in direct sunlight.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                What I did
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                After IIT Delhi&apos;s tests, I changed the colour theme to bright colours and increased font sizes across the portal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Why it works
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                Stronger colours and larger labels stay clearly visible outdoors without leaning in or shading the screen.
              </p>
            </div>
          </div>

          {/* BeforeAfterSlider: Pastel vs Bright Version */}
          <div className="pt-2">
            <BeforeAfterSlider
              beforeLabel="Pastel version"
              afterLabel="Bright version"
              beforeSrc={digitalSevaImages.pastelColorsVersion}
              afterSrc={digitalSevaImages.brightColorsVersion}
              aspectRatio="16/10"
              caption="Before and after testing: Transitioning from soft pastel tones to a high-contrast bright palette with increased font sizes for outdoor readability."
            />
          </div>
        </section>

        {/* =========================================================
            08 DECISION 2: ONE HOME FOR EVERY SERVICE
           ========================================================= */}
        <section id="section-08" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              08
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 2: One home for every service
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              The home screen puts the things a VLE needs in one place: the wallet balance, favourite services, all services, recent transactions and important updates.
            </p>
            <p>
              <strong className="text-[#F2EEE6] font-semibold">Why it works:</strong> a VLE does not have to hunt through menus to start a task.
            </p>
          </div>

          {/* Homepage / Service Selection Screenshot */}
          <div className="w-full pt-2">
            <ImageSlot
              label="Homepage / Service Selection Screen"
              aspectRatio="auto"
              src={digitalSevaImages.homeServiceSelection}
              caption="Decision 2: Unified dashboard layout organizing high-frequency utility billers, wallet balance, and recent receipts on a single screen."
            />
          </div>
        </section>

        {/* =========================================================
            09 DECISION 3: A SHORT, SAFE PATH TO PAY A BILL
           ========================================================= */}
        <section id="section-09" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              09
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 3: A short, safe path to pay a bill
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              Paying a bill follows a short path: choose the service, check the bill details, pay by wallet, then confirm with a password.
            </p>
            <p>
              <strong className="text-[#F2EEE6] font-semibold">Why it works:</strong> the password step adds trust to a payment, and every step has one clear action.
            </p>
          </div>

          {/* Sample Data Badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.7rem] font-mono uppercase px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] border border-[rgba(191,75,10,0.3)] text-[#F2EEE6]">
              Sample data
            </span>
            <span className="text-[0.78rem] text-[#8C877D] font-mono">
              Screens show sample account numbers and values.
            </span>
          </div>

          {/* Two Steps with Connecting Indicator */}
          <div className="flex flex-col gap-8 pt-2">
            {/* Step 1: Bill Payment Flow */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[0.82rem] font-mono text-[#BF4B0A] font-semibold uppercase tracking-wider">
                <span>Step 1 of 2</span>
                <span>•</span>
                <span className="text-[#F2EEE6]">Check bill details</span>
              </div>
              <ImageSlot
                label="Bill Payment Flow"
                aspectRatio="auto"
                src={digitalSevaImages.billPaymentFlow}
                caption="Decision 3: Step 1 — Clean utility provider confirmation with instant account lookup."
              />
            </div>

            {/* Connecting Transition Arrow */}
            <div className="flex items-center justify-center text-[#BF4B0A]" aria-hidden="true">
              <div className="p-2 rounded-full bg-[#16140F] border border-[rgba(242,238,230,0.1)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
            </div>

            {/* Step 2: Pay by Wallet Confirmation */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[0.82rem] font-mono text-[#BF4B0A] font-semibold uppercase tracking-wider">
                <span>Step 2 of 2</span>
                <span>•</span>
                <span className="text-[#F2EEE6]">Pay by wallet &amp; confirm password</span>
              </div>
              <ImageSlot
                label="Pay by wallet"
                aspectRatio="auto"
                src={digitalSevaImages.payByWallet}
                caption="Decision 3: Step 2 — Wallet balance debit with mandatory password confirmation to prevent accidental transfers."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            10 OTHER SCREENS
           ========================================================= */}
        <section id="section-10" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              10
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Other screens: Additional workflows across the live portal
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            Beyond bill payments and home navigation, I designed screens for transaction passbooks, service receipts, operator settings and updates. Together, they create a cohesive, dependable tool for daily rural commerce.
          </p>

          {/* Full Width Collage Slot */}
          <div className="w-full pt-2">
            <ImageSlot
              label="Other screens collage"
              aspectRatio="auto"
              src={digitalSevaImages.otherScreensCollage}
              caption={digitalSevaImages.otherScreensCollageCaption}
            />
          </div>
        </section>

        {/* =========================================================
            11 OUTCOME AND REFLECTION
           ========================================================= */}
        <section id="section-11" className="reveal flex flex-col gap-8 text-left border-t border-[rgba(242,238,230,0.08)] pt-12">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              11
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Outcome and reflection
            </h2>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.88rem] font-mono text-[#F2EEE6]">
              Status: <strong className="text-[#BF4B0A]">The portal is live today.</strong>
            </span>
          </div>

          {/* What The Design Delivers */}
          <div className="p-7 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-3">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              What the design delivers
            </span>
            <p className="text-[1.05rem] text-[#F2EEE6] leading-relaxed">
              A colour theme and text size chosen after real testing in different lights; one home screen for many services; a short, clear path to pay a bill; and a visual style that feels familiar and official.
            </p>
          </div>

          {/* Honest Note */}
          <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#8C877D] font-semibold">
              Honest note
            </span>
            <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
              This was client work and I do not have measured results, so I have not put numbers on it. Everything above describes what the design does, not a percentage.
            </p>
          </div>

          {/* What I Learned: Two Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Lesson 1
              </span>
              <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
                Designing for a place matters as much as designing for people. My first colours worked on my screen and not in sunlight, and testing in real light changed that.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Lesson 2
              </span>
              <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
                Test early. IIT Delhi&apos;s tests changed my colours and text size.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM NAVIGATION: PREVIOUS / NEXT PROJECT
           ========================================================= */}
        <nav
          aria-label="Project pagination"
          className="reveal border-t border-[rgba(242,238,230,0.08)] pt-12 pb-16 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <Link
            href={`/case-studies/${prevCaseUrl}`}
            className="group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-[#16140F] transition-all w-full sm:w-auto"
          >
            <span className="text-xs uppercase tracking-[2px] text-[#8C877D] font-mono flex items-center gap-1 group-hover:text-[#BF4B0A] transition-colors">
              <span aria-hidden="true">&larr;</span> Previous Project
            </span>
            <span className="text-lg font-bold text-[#F2EEE6] group-hover:text-[#BF4B0A] transition-colors">
              {prevCaseName}
            </span>
          </Link>

          <Link
            href={`/case-studies/${nextCaseUrl}`}
            className="group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-[#16140F] transition-all w-full sm:w-auto text-right"
          >
            <span className="text-xs uppercase tracking-[2px] text-[#8C877D] font-mono flex items-center gap-1 group-hover:text-[#BF4B0A] transition-colors">
              Next Project <span aria-hidden="true">&rarr;</span>
            </span>
            <span className="text-lg font-bold text-[#F2EEE6] group-hover:text-[#BF4B0A] transition-colors">
              {nextCaseName}
            </span>
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default DigitalSevaCaseStudy;
