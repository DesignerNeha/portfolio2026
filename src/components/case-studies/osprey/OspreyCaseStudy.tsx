"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import ImageSlot from "./ImageSlot";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Decision3RoleSwitcher from "./Decision3RoleSwitcher";
import Decision4HeaderSearch from "./Decision4HeaderSearch";
import Decision5DashboardTabs from "./Decision5DashboardTabs";
import Decision6ContrastToggle from "./Decision6ContrastToggle";
import Decision8LogoStepper from "./Decision8LogoStepper";
import WorkflowDiagram from "./WorkflowDiagram";
import HorizontalTimeline from "./HorizontalTimeline";
import { ospreyImages } from "./osprey-images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

interface OspreyCaseStudyProps {
  prevCaseName?: string;
  prevCaseUrl?: string;
  nextCaseName?: string;
  nextCaseUrl?: string;
}

export function OspreyCaseStudy({
  prevCaseName = "KOVA Health Portal",
  prevCaseUrl = "kova",
  nextCaseName = "Honda PDI Automation",
  nextCaseUrl = "honda-booking",
}: OspreyCaseStudyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [cftActiveScreen, setCftActiveScreen] = useState<"create" | "records">("create");
  const [fastTablesActiveScreen, setFastTablesActiveScreen] = useState<"list" | "progress" | "users">("list");

  // Sync theme with document
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

  // Scroll listener for top progress rail and subtle scroll reveals
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(dh > 0 ? (st / dh) * 100 : 0);

      // Reveal class trigger
      const reveals = document.querySelectorAll(".reveal:not(.in)");
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          el.classList.add("in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${poppins.className} w-full min-h-screen relative text-[#F2EEE6] bg-[#12110E] pb-28 sm:pb-20 antialiased`}
      style={{
        fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
      }}
    >
      {/* Sticky Scroll Progress Rail */}
      <div
        id="progressBar"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          backgroundColor: "#BF4B0A",
          width: `${scrollProgress}%`,
          zIndex: 1001,
          transition: "width 0.1s ease-out",
        }}
      />

      {/* Top Header Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-4 sm:px-8 md:px-12 py-3.5 md:py-4 transition-colors duration-200"
        style={{
          backgroundColor: "rgba(18, 17, 14, 0.9)",
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
            Case Study <span className="text-[#BF4B0A] font-bold">02/05</span>
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
            <span className="text-[0.78rem] text-[#8C877D] opacity-40 px-3 py-2">
              ← Prev
            </span>
          )}

          <Link
            href="/"
            className="text-[0.78rem] font-semibold uppercase tracking-wider text-[#F2EEE6] px-4 py-2 rounded-full bg-[#1C1914] hover:text-[#BF4B0A]"
          >
            Home
          </Link>

          {nextCaseUrl ? (
            <Link
              href={`/case-studies/${nextCaseUrl}`}
              className="text-[0.78rem] font-medium text-[#BF4B0A] px-3 py-2 rounded-full hover:bg-[#1C1914]"
            >
              Next →
            </Link>
          ) : (
            <span className="text-[0.78rem] text-[#8C877D] opacity-40 px-3 py-2">
              Next →
            </span>
          )}
        </nav>
      </div>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 flex flex-col gap-24 sm:gap-32">
        {/* ==============================================================
            ONE-VIEW HERO (fits above fold at 1440x900)
           ============================================================== */}
        <section
          aria-labelledby="hero-title"
          className="w-full pt-1 pb-1 flex flex-col gap-3 sm:gap-3.5"
        >
          {/* Header Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider bg-[#BF4B0A] text-[#F2EEE6]">
              Global Field Fix Portal
            </span>
            <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider bg-[#1C1914] border border-[rgba(242,238,230,0.12)] text-[#B5B0A4]">
              Enterprise
            </span>
            <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider bg-[#1C1914] border border-[rgba(242,238,230,0.12)] text-[#B5B0A4]">
              Redesign
            </span>
          </div>

          {/* Title & One-liner */}
          <div className="flex flex-col gap-2">
            <h1
              id="hero-title"
              className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-bold text-[#F2EEE6] tracking-tight leading-[1.1]"
            >
              Osprey: Global Field Fix Portal
            </h1>
            <p className="text-[1.02rem] sm:text-[1.15rem] text-[#E6E1D8] font-normal leading-relaxed max-w-4xl">
              I redesigned FUSO's field fix portal so people type less, see only what their role needs, and can follow every field fix from creation to completion.
            </p>
          </div>

          {/* Meta Strip */}
          <div className="w-full py-3 px-4 rounded-xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-[0.82rem]">
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#8C877D] block">Role</span>
              <span className="font-medium text-[#F2EEE6]">Senior UI/UX Designer</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#8C877D] block">Client</span>
              <span className="font-medium text-[#F2EEE6]">Mitsubishi FUSO</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#8C877D] block">Timeline</span>
              <span className="font-medium text-[#F2EEE6]">Jan 2026 to present</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#8C877D] block">Platform</span>
              <span className="font-medium text-[#F2EEE6]">Web app</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#8C877D] block">Tools</span>
              <span className="font-medium text-[#F2EEE6]">Figma, Figma Make</span>
            </div>
          </div>

          {/* Hero Before / After Slider Slot */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeLabel="Old Portal UI"
              afterLabel="New Osprey Portal UI"
              beforeSrc={ospreyImages.heroBeforeOld}
              afterSrc={ospreyImages.heroAfterNew}
              aspectRatio="24/9"
              caption="Drag to compare FUSO's legacy manual interface against the redesigned, role-adaptive Osprey portal."
            />
          </div>

          {/* At A Glance Row (4 chips) */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="text-[0.75rem] uppercase tracking-wider text-[#8C877D] mr-1 font-mono">
              At a glance:
            </span>
            <span className="px-3 py-1 rounded-full text-[0.78rem] font-medium bg-[#16140F] border border-[rgba(242,238,230,0.12)] text-[#E6E1D8]">
              ✦ Redesign of an existing portal
            </span>
            <span className="px-3 py-1 rounded-full text-[0.78rem] font-medium bg-[#16140F] border border-[rgba(242,238,230,0.12)] text-[#E6E1D8]">
              ✦ 7 user roles
            </span>
            <span className="px-3 py-1 rounded-full text-[0.78rem] font-medium bg-[#16140F] border border-[rgba(242,238,230,0.12)] text-[#E6E1D8]">
              ✦ Real-time FALCON data
            </span>
            <span className="px-3 py-1 rounded-full text-[0.78rem] font-medium bg-[#16140F] border border-[rgba(242,238,230,0.12)] text-[#E6E1D8]">
              ✦ Daily 1-hour client walkthroughs
            </span>
          </div>

          {/* 3-line Skim Summary Directly Under Hero */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#16140F] border-l-4 border-l-[#BF4B0A] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2 text-[0.94rem] leading-relaxed shadow-lg">
            <p className="text-[#E6E1D8]">
              <strong className="text-[#BF4B0A]">The problem:</strong> manual forms and no roles.
            </p>
            <p className="text-[#E6E1D8]">
              <strong className="text-[#BF4B0A]">What I did:</strong> connected FALCON, built a 7-role approval flow, added CFT, search and role dashboards.
            </p>
            <p className="text-[#E6E1D8]">
              <strong className="text-[#BF4B0A]">Why it matters:</strong> less typing, clear ownership, easier daily use.
            </p>
          </div>
        </section>

        {/* ==============================================================
            01 Overview
           ============================================================== */}
        <section aria-labelledby="section-01" className="reveal flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">01</span>
            <h2 id="section-01" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Overview
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4 text-[1.05rem] text-[#E6E1D8] leading-relaxed">
            <p>
              Osprey is the portal FUSO uses to create, approve and track field fixes: planned fixes for issues found in vehicles already on the road, across international markets. It was not a new product. FUSO already had a Field Fix Portal, and I redesigned it end to end: new flows, new interface, and a connection to their FALCON database.
            </p>
          </div>
        </section>

        {/* ==============================================================
            02 Where we started
           ============================================================== */}
        <section aria-labelledby="section-02" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">02</span>
            <h2 id="section-02" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Where we started
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4 text-[1.05rem] text-[#E6E1D8] leading-relaxed">
            <p>
              FUSO's old portal worked, but it was slow to use and hard to read. Two problems defined the project.
            </p>
            <ul className="flex flex-col gap-2.5 pl-5 list-disc text-[#B5B0A4]">
              <li>
                <strong className="text-[#F2EEE6]">Everything was typed by hand.</strong> Just the first step of creating a field fix had 11 fields, even though much of that information already lived in FUSO's FALCON database.
              </li>
              <li>
                <strong className="text-[#F2EEE6]">There were no roles.</strong> The old portal had no role-based system.
              </li>
            </ul>
            <p className="text-[#B5B0A4]">
              The interface added to the problem: the field fix list had 12 to 13 columns with tables nested inside tables, and the old dashboard needed a paragraph of small print to explain its own chart labels.
            </p>
          </div>

          {/* Three Before Slots with short annotations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageSlot
              label="old creation form"
              aspectRatio="4/3"
              src={ospreyImages.oldCreationForm}
              caption="First step alone had 11 manual fields that already lived in FALCON."
            />
            <ImageSlot
              label="old field fix list"
              aspectRatio="4/3"
              src={ospreyImages.oldFieldFixList}
              caption="12 to 13 columns with tables nested inside tables."
            />
            <ImageSlot
              label="old dashboard"
              aspectRatio="4/3"
              src={ospreyImages.oldDashboard}
              caption="Old dashboard needed a paragraph of small print to explain its own chart labels."
            />
          </div>
        </section>

        {/* ==============================================================
            03 How I worked with FUSO
           ============================================================== */}
        <section aria-labelledby="section-03" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">03</span>
            <h2 id="section-03" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              How I worked with FUSO
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4 text-[1.05rem] text-[#E6E1D8] leading-relaxed">
            <p>
              I met the client every day for a one-hour walkthrough session and built Osprey one flow at a time. Each round: understand the requirement, design the flow, review it with FUSO.
            </p>
          </div>

          {/* Horizontal Timeline Component */}
          <HorizontalTimeline />
        </section>

        {/* ==============================================================
            04 Who's who: the 7 roles
           ============================================================== */}
        <section aria-labelledby="section-04" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">04</span>
            <h2 id="section-04" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Who's who: the 7 roles
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#E6E1D8] leading-relaxed">
            A field fix passes through six people in order, and a seventh role, Admin, looks after the system.
          </p>

          {/* Animated Flow Diagram Component */}
          <WorkflowDiagram />
        </section>

        {/* ==============================================================
            DESIGN DECISIONS (sections 05 to 12)
            Using consistent card pattern:
            Big number & title -> 4 short blocks (The problem, What FUSO told me, What I did, Why it works)
            -> Before/after slot & Interaction
           ============================================================== */}

        {/* --- 05 Decision 1 --- */}
        <section aria-labelledby="section-05" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">05</span>
            <h2 id="section-05" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 1: Stop retyping what the system already knows
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The old form made users type everything by hand, which was slow, and most of it already existed in FALCON.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The new portal had to connect to FALCON and pull details in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I redesigned creation around that connection. Once a CFT number is chosen, the Accounting Order Number, WSC Code and Kit Part Number appear on their own, and the target date is calculated from the QM release date. A Sync to Falcon button refreshes data. I split the long form into four clear steps (campaign information and vehicle scope, then the next steps) with a progress bar, and added Save As Draft.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Less typing, fewer mistakes, and people enter only what the system cannot already know.
              </p>
            </div>
          </div>

          {/* Slots: Before = old Field Fix Creation, After = new Create Field Fix step 1 of 4 */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeLabel="old Field Fix Creation"
              afterLabel="new Create Field Fix (step 1 of 4)"
              beforeSrc={ospreyImages.oldCreationForm}
              afterSrc={ospreyImages.newCreateFieldFix}
              aspectRatio="16/9"
              caption="Before: 11 fields typed by hand with zero database integration. After: 4-step wizard pulling live FALCON data once a CFT number is selected."
            />
          </div>
        </section>

        {/* --- 06 Decision 2 --- */}
        <section aria-labelledby="section-06" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">06</span>
            <h2 id="section-06" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 2: Give CFT numbers their own home
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Creating a field fix needs a CFT number, and that number came from a separate calculation process.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                After a few discussions I understood how the number is worked out and why it matters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I designed a separate master module with two screens. Create CFT Number: enter the CFT number, country and vehicle model, segment code and region fill in on their own, and reference codes are generated. CFT Master Records: every record on one screen with search, a date filter, sync status and pagination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                A CFT number is created once, in one place, and later field fixes simply pick it.
              </p>
            </div>
          </div>

          {/* Slots & Screen Switcher for Create CFT Number & CFT Master Records */}
          <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
                <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
                  CFT Master Module Screens
                </span>
              </div>
              <div className="flex items-center gap-2 p-1 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]">
                <button
                  type="button"
                  onClick={() => setCftActiveScreen("create")}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
                    cftActiveScreen === "create"
                      ? "bg-[#BF4B0A] text-[#F2EEE6]"
                      : "text-[#B5B0A4] hover:text-[#F2EEE6]"
                  }`}
                >
                  Create CFT Number
                </button>
                <button
                  type="button"
                  onClick={() => setCftActiveScreen("records")}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
                    cftActiveScreen === "records"
                      ? "bg-[#BF4B0A] text-[#F2EEE6]"
                      : "text-[#B5B0A4] hover:text-[#F2EEE6]"
                  }`}
                >
                  CFT Master Records
                </button>
              </div>
            </div>

            {cftActiveScreen === "create" ? (
              <ImageSlot
                label="Create CFT Number"
                aspectRatio="16/10"
                src={ospreyImages.newCreateCftNumber}
                caption="Create CFT Number screen: Enter CFT number, country, and vehicle model — segment code and region fill in on their own, and reference codes generate automatically."
              />
            ) : (
              <ImageSlot
                label="CFT Master Records"
                aspectRatio="16/10"
                src={ospreyImages.cftMasterRecords}
                caption="CFT Master Records screen: Every record on one centralized screen with search, date filter, live sync status, and page-by-page pagination."
              />
            )}
          </div>
        </section>

        {/* --- 07 Decision 3 --- */}
        <section aria-labelledby="section-07" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">07</span>
            <h2 id="section-07" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 3: One field fix, seven roles, only the tools each role needs
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The old portal had no roles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Each role has a different job, so each needs to see and do different things.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I designed one field fix detail screen that adapts to the person. Tabs and buttons change by role; the layout, approval status panel and style stay the same. QM Approver sees who has signed and who is pending, can send a reminder, then approves or returns. CSHQ User uploads the documents each region needs. CSHQ Approver reviews everything and can return it. RC User gets a Market Progress tab (overall completion, a row and progress ring per market, document upload, Release). GD User gets a VIN Status Update tab to select several vehicles and update their status in one go.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Nobody hunts through buttons that belong to someone else's job.
              </p>
            </div>
          </div>

          {/* Interaction & Slots: Role Switcher */}
          <Decision3RoleSwitcher />
        </section>

        {/* --- 08 Decision 4 --- */}
        <section aria-labelledby="section-08" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">08</span>
            <h2 id="section-08" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 4: Find any field fix from any page
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                This was a brand-new module. The old system had no direct search: users opened the field fix table and searched with a few limited filters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                FUSO wanted to search for a field fix from any page.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I designed a quick search box in the header with recent searches, and a full search screen with the filters people need to narrow results.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Quick search answers "I know what I'm looking for" in one step; the full screen answers "I only know part of it".
              </p>
            </div>
          </div>

          {/* Interaction & Slots: Mock header search & search slots */}
          <Decision4HeaderSearch />
        </section>

        {/* --- 09 Decision 5 --- */}
        <section aria-labelledby="section-09" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">09</span>
            <h2 id="section-09" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 5: Dashboards that match each role
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The old dashboard was two charts that needed a paragraph of small print to decode.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                FUSO told me which information each role needs and in what priority. I built a dashboard for each role with real-time data where possible. For the QM role my first version showed everything at once and the page became a very long scroll.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I went back to FUSO: budget monitoring, part details and field fix preparation status mattered together, so I put the three into one section with tabs. Nothing was removed; people switch tabs instead of scrolling, so the page is shorter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The problem was priority, not layout, and asking what they check first fixed it.
              </p>
            </div>
          </div>

          {/* Interaction & Slots: 3-tab switcher */}
          <Decision5DashboardTabs />

          {/* Dedicated role dashboards overview slot */}
          <div className="w-full">
            <ImageSlot
              label="each role dashboard"
              aspectRatio="16/9"
              src={ospreyImages.roleDashboards}
              caption="Custom dashboards for each of FUSO's 7 roles, showing prioritized operational signals instead of generic charts."
            />
          </div>
        </section>

        {/* --- 10 Decision 6 --- */}
        <section aria-labelledby="section-10" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">10</span>
            <h2 id="section-10" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 6: Designed for older eyes
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Osprey is used by FUSO teams in Japan, and many users are older.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The interface needed to remain immediately legible and easy on the eyes across long operational shifts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I kept the interface simple and used strong color contrast so text and actions are easy to read. I used Poppins for a clean, modern look and only FUSO's brand colors so it feels like FUSO's own tool.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                High contrast and familiar FUSO styling reduce eye fatigue and make every action unmistakable.
              </p>
            </div>
          </div>

          {/* Interaction: Contrast Toggle (no contrast ratios stated) */}
          <Decision6ContrastToggle />
        </section>

        {/* --- 11 Decision 7 --- */}
        <section aria-labelledby="section-11" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">11</span>
            <h2 id="section-11" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 7: Keep it fast
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Complex enterprise portals with thousands of vehicle records can easily become heavy, slow, and frustrating to navigate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The portal must stay snappy even during heavy global usage and extensive data record audits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I added pagination to every data table so screens load a page of results at a time, and used SVG graphics for sharp icons and small file sizes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                Loading one page of results at a time keeps screens lightweight, while vector SVGs render crisply across every device resolution.
              </p>
            </div>
          </div>

          {/* Two Small Icon Cards (No performance numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[rgba(191,75,10,0.12)] border border-[rgba(191,75,10,0.25)] flex items-center justify-center text-[#BF4B0A] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="9" y1="9" x2="9" y2="21" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[1.05rem] font-semibold text-[#F2EEE6]">Pagination on every data table</h4>
                <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
                  Screens load a single page of results at a time, keeping table scrolling fluid and memory footprints minimal.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[rgba(191,75,10,0.12)] border border-[rgba(191,75,10,0.25)] flex items-center justify-center text-[#BF4B0A] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[1.05rem] font-semibold text-[#F2EEE6]">Pure SVG vector graphics</h4>
                <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
                  Vector SVG icons maintain pin-sharp clarity across high-resolution displays with negligible asset file weight.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Screen Switcher for Decision 7: Fast Tables & Admin Controls */}
          <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
                <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
                  Data Table & Admin System Screens
                </span>
              </div>
              <div
                role="tablist"
                aria-label="Decision 7 Fast Table Screens"
                className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={fastTablesActiveScreen === "list"}
                  onClick={() => setFastTablesActiveScreen("list")}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-all duration-200 cursor-pointer ${
                    fastTablesActiveScreen === "list"
                      ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                      : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
                  }`}
                >
                  1. Field Fix List
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={fastTablesActiveScreen === "progress"}
                  onClick={() => setFastTablesActiveScreen("progress")}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-all duration-200 cursor-pointer ${
                    fastTablesActiveScreen === "progress"
                      ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                      : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
                  }`}
                >
                  2. Admin Progress Review
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={fastTablesActiveScreen === "users"}
                  onClick={() => setFastTablesActiveScreen("users")}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-all duration-200 cursor-pointer ${
                    fastTablesActiveScreen === "users"
                      ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                      : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
                  }`}
                >
                  3. Admin User Management
                </button>
              </div>
            </div>

            {/* Active High-Resolution Screen View */}
            <div className="w-full">
              {fastTablesActiveScreen === "list" && (
                <ImageSlot
                  label="New Field Fix List"
                  aspectRatio="auto"
                  src={ospreyImages.newFieldFixList}
                  caption="New paginated field fix list replacing dense nested tables with structured filters, status badges, clean row spacing, and page-by-page loading."
                />
              )}
              {fastTablesActiveScreen === "progress" && (
                <ImageSlot
                  label="Admin Progress Review"
                  aspectRatio="auto"
                  src={ospreyImages.adminProgressReview}
                  caption="Admin progress review screen providing real-time pulse monitoring across international fix campaigns with country-level tracking."
                />
              )}
              {fastTablesActiveScreen === "users" && (
                <ImageSlot
                  label="Admin User Management"
                  aspectRatio="auto"
                  src={ospreyImages.adminUserManagement}
                  caption="Admin user management interface for adding users, defining permissions, and configuring master modules with role-level isolation."
                />
              )}
            </div>
          </div>
        </section>

        {/* --- 12 Decision 8 --- */}
        <section aria-labelledby="section-12" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">12</span>
            <h2 id="section-12" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 8: Giving Osprey a face
            </h2>
          </div>

          {/* 4 Short Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                The problem
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                FUSO gave me a rough image and one clear request: the logo should relate to the osprey bird.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What FUSO told me
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                The brand mark needed to embody vigilance, strength, and global field fix precision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                What I did
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                I researched the osprey, explored ideas and designed the Osprey logo from scratch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Why it works
              </span>
              <p className="text-[0.98rem] text-[#E6E1D8] leading-relaxed">
                It gives the internal enterprise tool a distinct, memorable personality that builds immediate pride and recognition across global teams.
              </p>
            </div>
          </div>

          {/* Stepper with 3 logo steps */}
          <Decision8LogoStepper />
        </section>

        {/* ==============================================================
            13 Outcome and reflection
           ============================================================== */}
        <section aria-labelledby="section-13" className="reveal flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[1.1rem] font-mono font-bold text-[#BF4B0A]">13</span>
            <h2 id="section-13" className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Outcome and reflection
            </h2>
          </div>

          {/* Status Line */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[rgba(191,75,10,0.08)] border border-[rgba(191,75,10,0.25)] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#BF4B0A] animate-pulse shrink-0" />
            <p className="text-[1.05rem] font-medium text-[#F2EEE6]">
              Osprey is in active development, rolling out to international markets and in pilot.
            </p>
          </div>

          {/* What changed for users */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4">
            <h3 className="text-[1.2rem] font-bold text-[#F2EEE6]">
              What changed for users
            </h3>
            <ul className="flex flex-col gap-3 text-[1rem] text-[#E6E1D8] leading-relaxed pl-5 list-disc">
              <li>Less typing because details come from FALCON and from the CFT number.</li>
              <li>A clear role for each person with the approval journey built in.</li>
              <li>CFT numbers managed in one place.</li>
              <li>A search that works from any page.</li>
              <li>Dashboards shaped around each role and a shorter QM dashboard.</li>
              <li>A calmer, more readable interface for older users.</li>
            </ul>
          </div>

          {/* Honest Note */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border-l-4 border-l-[#BF4B0A] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
            <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
              Honest note
            </span>
            <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
              This was client work and I did not have access to post-launch analytics, so I have not put numbers on the results. Everything above describes what the design changed, not a measured percentage.
            </p>
          </div>

          {/* What I learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Lesson 1
              </span>
              <h4 className="text-[1.08rem] font-semibold text-[#F2EEE6]">
                Priority over layout
              </h4>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
                Long pages are often a priority problem, not a layout problem. Asking FUSO what they check first did more for the QM dashboard than any spacing change.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-bold">
                Lesson 2
              </span>
              <h4 className="text-[1.08rem] font-semibold text-[#F2EEE6]">
                Depth behind single inputs
              </h4>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
                The CFT number looked like one field on a form. Understanding the process behind it showed it needed its own module.
              </p>
            </div>
          </div>

          {/* Bottom Project Navigation */}
          <nav
            aria-label="Previous and Next Project Links"
            className="w-full pt-12 border-t border-[rgba(242,238,230,0.1)] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            {prevCaseUrl ? (
              <Link
                href={`/case-studies/${prevCaseUrl}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-[#16140F] hover:bg-[#1C1914] border border-[rgba(242,238,230,0.1)] flex flex-col gap-1 transition-colors text-left"
              >
                <span className="text-[0.75rem] font-mono text-[#8C877D] uppercase">← Previous Case Study</span>
                <span className="text-[1.05rem] font-semibold text-[#F2EEE6]">{prevCaseName}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextCaseUrl ? (
              <Link
                href={`/case-studies/${nextCaseUrl}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-[#16140F] hover:bg-[#1C1914] border border-[rgba(242,238,230,0.1)] flex flex-col gap-1 transition-colors text-right"
              >
                <span className="text-[0.75rem] font-mono text-[#8C877D] uppercase">Next Case Study →</span>
                <span className="text-[1.05rem] font-semibold text-[#BF4B0A]">{nextCaseName}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </section>
      </main>
    </div>
  );
}

export default OspreyCaseStudy;
