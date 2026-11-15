"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import ImageSlot from "../osprey/ImageSlot";
import { nonaImages } from "./nona-images";
import RoleSelector from "./RoleSelector";
import ResponsiveScreenToggle from "./ResponsiveScreenToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

interface NonaCaseStudyProps {
  prevCaseName?: string;
  prevCaseUrl?: string;
  nextCaseName?: string;
  nextCaseUrl?: string;
}

export function NonaCaseStudy({
  prevCaseName = "Digital Seva",
  prevCaseUrl = "seva",
  nextCaseName = "KOVA Health Portal",
  nextCaseUrl = "kova",
}: NonaCaseStudyProps) {
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
            Case Study <span className="text-[#BF4B0A] font-bold">05/05</span>
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
            05/05
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
      <main className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 flex flex-col gap-24 sm:gap-32">
        {/* =========================================================
            ONE-VIEW HERO (fits above the fold at 1440x900)
           ========================================================= */}
        <header className="reveal flex flex-col gap-6 text-left pt-2 sm:pt-4">
          {/* Top Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.72rem] font-mono px-3 py-1 rounded-full bg-[#1C1812] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4]">
              B2B Bulk Commerce
            </span>
            <span className="text-[0.72rem] font-mono px-3 py-1 rounded-full bg-[rgba(191,75,10,0.12)] border border-[rgba(191,75,10,0.28)] text-[#BF4B0A] font-semibold">
              Bulk Ordering
            </span>
            <span className="text-[0.72rem] font-mono px-3 py-1 rounded-full bg-[#1C1812] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4]">
              Responsive Design
            </span>
          </div>

          {/* Title & One-Liner */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold tracking-tight text-[#F2EEE6] leading-[1.08]">
              NONA Lifestyle
            </h1>
            <p className="text-[1.12rem] sm:text-[1.28rem] text-[#D4CEBF] leading-relaxed max-w-4xl font-normal">
              I designed a B2B portal where retail shop owners order clothing in bulk from a manufacturer: many sizes, each with its own quantity, in one simple step.
            </p>
          </div>

          {/* Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] text-[0.82rem] font-mono text-[#8C877D]">
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Role</span>
              <span className="text-[#F2EEE6] font-semibold">UI/UX Designer</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Company</span>
              <span className="text-[#F2EEE6]">Softworld India</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Timeline</span>
              <span className="text-[#F2EEE6]">Dec 2022 to Apr 2023</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Platform</span>
              <span className="text-[#F2EEE6]">Responsive Web</span>
            </div>
            <div>
              <span className="text-[0.68rem] uppercase tracking-wider text-[#A6A095] block">Tools</span>
              <span className="text-[#F2EEE6]">Figma, FigJam</span>
            </div>
          </div>

          {/* Hero Banner Image & View Prototype CTA */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-[rgba(242,238,230,0.12)] bg-[#16140F] shadow-2xl group">
            <img
              src={nonaImages.heroBanner}
              alt="NONA Lifestyle responsive bulk ordering portal on desktop and mobile"
              className="w-full h-auto block"
              loading="eager"
            />
            <div className="p-4 sm:p-5 border-t border-[rgba(242,238,230,0.08)] bg-[#12110E] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[0.82rem] text-[#8C877D] font-mono">
                Interactive Figma prototype tested with wholesale buyers
              </span>
              <a
                href="https://www.figma.com/proto/1uQcL9UfxaNwMaQINRPkPV/Nona-Lifestyle?node-id=123-1192&t=cgGZihr7aPRSqlTl-8&scaling=scale-down-width&content-scaling=fixed&page-id=123%3A1191&starting-point-node-id=123%3A1192&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#BF4B0A] hover:bg-[#A33F08] text-white font-medium text-[0.85rem] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[rgba(191,75,10,0.25)]"
              >
                <span>View Prototype</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* At A Glance 5 Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] mr-2">
              At a glance:
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              B2B portal
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              3 user roles
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Desktop and mobile
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Admin panel
            </span>
            <span className="text-[0.75rem] font-mono px-3 py-1 rounded-full bg-[#181611] border border-[rgba(242,238,230,0.08)] text-[#B5B0A4]">
              Live order tracking
            </span>
          </div>

          {/* 3-Line Skim Summary */}
          <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2.5 text-left">
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">The problem:</strong> bulk clothing orders need many sizes, each with its own quantity, and normal shop pages handle one size at a time.
            </p>
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">What I did:</strong> designed a size by quantity grid with live totals, plus onboarding for three roles, live order tracking and a request-for-quotation flow.
            </p>
            <p className="text-[0.98rem] text-[#F2EEE6] leading-relaxed">
              <strong className="text-[#BF4B0A] font-semibold">Why it matters:</strong> buyers can place a large order in one screen and see where it stands.
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
              Overview: A dedicated B2B portal for wholesale apparel
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              NONA Lifestyle is a business-to-business portal for retail shop owners, wholesale buyers, vendors and manufacturers. Unlike a shop for everyday customers, it lets businesses place large orders, manage their product catalogue and follow their orders through manufacturing.
            </p>
            <p>
              I designed the buyer experience on desktop and mobile, an admin panel for catalogue, order and production management, and the flows for three business roles.
            </p>
          </div>
        </section>

        {/* =========================================================
            02 THE CHALLENGE IN ONE QUESTION
           ========================================================= */}
        <section id="section-02" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              02
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              The challenge: Multi-size ordering without cognitive overload
            </h2>
          </div>

          {/* Large Quote Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1C1812] to-[#14120E] border border-[rgba(191,75,10,0.3)] shadow-2xl relative overflow-hidden">
            <span className="text-[3rem] font-serif text-[#BF4B0A] leading-none absolute top-4 left-6 opacity-40 select-none">
              &ldquo;
            </span>
            <p className="text-[1.35rem] sm:text-[1.65rem] font-serif text-[#F2EEE6] leading-snug relative z-10 pl-6 sm:pl-8">
              How can a buyer choose several sizes, each with its own bulk quantity, in one simple step, without feeling overloaded?
            </p>
          </div>

          {/* Three Constraint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Many sizes at once
              </span>
              <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
                Shop owners order a whole size run together, for example 100 Small and 150 Medium.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Live totals
              </span>
              <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
                Buyers want to see the units and price change as they type, so they stay within budget.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Mistake prevention
              </span>
              <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
                Minimum order quantities must be enforced before checkout, because mistakes in bulk orders are costly.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            03 WHAT I LEARNED FROM THE CLIENT
           ========================================================= */}
        <section id="section-03" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              03
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              What I learned: Grounding the flow in wholesale habits
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            I learned how the business works through conversations with the client team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-[1.05rem] font-semibold text-[#F2EEE6]">
                  High intent
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed mt-1">
                Business buyers do not browse for fun, they buy with a plan and need fast data entry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-[1.05rem] font-semibold text-[#F2EEE6]">
                  The size ratio matters
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed mt-1">
                A shop&apos;s profit depends on stocking the right mix of sizes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-[1.05rem] font-semibold text-[#F2EEE6]">
                  Spreadsheets today
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed mt-1">
                Buyers work from spreadsheets, so the portal should feel as fast as one.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 WHO I DESIGNED FOR (ASSUMPTION PERSONAS)
           ========================================================= */}
        <section id="section-04" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              04
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Who I designed for: Two core wholesale buyer profiles
            </h2>
          </div>

          {/* Assumption Notice Banner */}
          <div className="p-4 rounded-xl bg-[#16140F] border border-[rgba(191,75,10,0.25)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#BF4B0A] mt-2 shrink-0" />
            <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
              These personas are my own assumptions. I wrote them from what I remembered about the client&apos;s buyers. They are not from formal interviews.
            </p>
          </div>

          {/* Two Compact Personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Persona 1: Rajesh Kumar */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-5">
              <div className="flex items-center gap-3.5 border-b border-[rgba(242,238,230,0.08)] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#1F1912] border border-[#BF4B0A]/40 text-[#BF4B0A] flex items-center justify-center font-mono font-bold text-base">
                  RK
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-bold text-[#F2EEE6]">
                    Rajesh Kumar
                  </h3>
                  <span className="text-[0.84rem] text-[#8C877D] font-mono">
                    Owner and Head of Procurement
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[0.92rem]">
                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Goals
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>Restock quickly across many sizes</li>
                    <li>See bulk prices instantly</li>
                    <li>Manage large orders without waiting for a sales rep</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Frustrations
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>Ordering by phone leads to wrong size ratios</li>
                    <li>Excel order sheets are slow and error-prone</li>
                    <li>No live view of stock</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Needs
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>Quick size-wise quantity inputs with keyboard navigation</li>
                    <li>Clear live bulk pricing</li>
                    <li>An order history with one-click reorder</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Persona 2: Priya Sharma */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-5">
              <div className="flex items-center gap-3.5 border-b border-[rgba(242,238,230,0.08)] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#1F1912] border border-[#BF4B0A]/40 text-[#BF4B0A] flex items-center justify-center font-mono font-bold text-base">
                  PS
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-bold text-[#F2EEE6]">
                    Priya Sharma
                  </h3>
                  <span className="text-[0.84rem] text-[#8C877D] font-mono">
                    Boutique Manager
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[0.92rem]">
                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Goals
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>Place small, frequent restock orders from her phone</li>
                    <li>Discover new seasonal collections</li>
                    <li>Track shipments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Frustrations
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>Desktop-only wholesale sites are hard to use on the shop floor</li>
                    <li>Minimum order quantities can be too high for one store</li>
                    <li>She cannot easily check what she ordered</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold mb-1.5">
                    Needs
                  </h4>
                  <ul className="space-y-1 text-[#B5B0A4] list-disc list-inside">
                    <li>A comfortable mobile experience</li>
                    <li>Cart summaries with clear thumbnails</li>
                    <li>Saved preferences and quick reorder</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 THE USER FLOW
           ========================================================= */}
        <section id="section-05" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              05
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              The user flow: Linear progression through the ordering steps
            </h2>
          </div>

          {/* Sticky-Note User Flow Diagram */}
          <div className="w-full rounded-2xl overflow-hidden border border-[rgba(242,238,230,0.12)] bg-[#16140F] p-4 sm:p-6 shadow-xl">
            <img
              src={nonaImages.userFlow}
              alt="Sticky-note user flow from landing page to order placed"
              className="w-full h-auto block rounded-lg"
              loading="lazy"
            />
          </div>

          <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
            The dashed step is the heart of the product, and the next section explains it.
          </p>
        </section>

        {/* =========================================================
            06 DECISION 1: A SIZE BY QUANTITY GRID
           ========================================================= */}
        <section id="section-06" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              06
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 1: A size by quantity grid, not one size at a time
            </h2>
          </div>

          {/* Three Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                The problem
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                A normal shop page asks for one size, then one quantity, then Add to cart. A bulk buyer would repeat that for every size.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                What I did
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                One grid where every size has its own quantity box, with a live subtotal that updates as they type. One click adds the whole size run to the cart as a single line item, so there is no repeating the process per size. Minimum order quantities are checked in the grid, before checkout.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Why it works
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                The buyer enters the whole order in one place and sees the total change as they go.
              </p>
            </div>
          </div>

          {/* Size × Quantity Selection Interface */}
          <div className="w-full">
            <ImageSlot
              label="Size × quantity selection interface"
              aspectRatio="auto"
              src={nonaImages.selectQuantity}
              caption="Decision 1: Direct size-wise quantity selection allowing buyers to input entire size runs with live price feedback."
            />
          </div>

          {/* Size by quantity grid on desktop */}
          <div className="w-full">
            <ImageSlot
              label="Size by quantity grid on desktop"
              aspectRatio="auto"
              src={nonaImages.nonaGridDesktop}
              caption="Decision 1: Full-width desktop product page with the size × quantity matrix and live pricing rail."
            />
          </div>
        </section>

        {/* =========================================================
            07 DECISION 2: CART SUMMARY THAT DOES THE MATH
           ========================================================= */}
        <section id="section-07" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              07
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 2: Cart summary that does the math
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            The cart auto-calculates total units, cost per size and the grand total, so buyers never calculate by hand.
          </p>

          <div className="w-full">
            <ImageSlot
              label="Dynamic Auto-Cart"
              aspectRatio="16/10"
              src={nonaImages.dynamicAutoCart}
              caption="Decision 2: Cart summary showing automated calculations per size, total pieces ordered, and instant invoice estimate."
            />
          </div>
        </section>

        {/* =========================================================
            08 DECISION 3: ONBOARDING FOR THREE DIFFERENT ROLES
           ========================================================= */}
        <section id="section-08" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              08
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 3: Onboarding tailored for three distinct roles
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            Manufacturers, vendors and buyers sign up on the same platform but need different information up front.
          </p>

          {/* Three Role Cards Component */}
          <RoleSelector />

          {/* Three Onboarding Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Role-based signup
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                Each role gets its own onboarding flow, not one generic form.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                Business verification upfront
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                GSTIN and business details are collected during registration, because every transaction on the platform is a high-value B2B commitment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
                OTP-based trust
              </span>
              <p className="text-[0.96rem] text-[#B5B0A4] leading-relaxed">
                Email or WhatsApp OTP keeps signup quick without lowering security.
              </p>
            </div>
          </div>

          {/* Three Image Slots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <ImageSlot
              label="Role selection"
              aspectRatio="auto"
              src={nonaImages.roleSelection}
              caption="Decision 3: Initial fork allowing users to self-select as Manufacturer, Vendor, or Buyer."
            />
            <ImageSlot
              label="OTP verification"
              aspectRatio="auto"
              src={nonaImages.otpScreen}
              caption="Decision 3: Passwordless dual-channel OTP verification via WhatsApp and corporate email."
            />
            <ImageSlot
              label="Business details with GSTIN"
              aspectRatio="auto"
              src={nonaImages.businessDetailsGstin}
              caption="Decision 3: Upfront tax ID verification for automated B2B invoicing and compliance."
            />
          </div>
        </section>

        {/* =========================================================
            09 DECISION 4: A REQUEST FOR QUOTATION FOR CUSTOM ORDERS
           ========================================================= */}
        <section id="section-09" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              09
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 4: A request for quotation for custom orders
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            <p>
              Not every need fits a catalogue listing. In the Request for Quotation flow, a buyer describes a custom project with a target price, timeline, notes and even a logo upload, and sends it to a manufacturer as a structured brief instead of an email thread.
            </p>
            <p>
              It deliberately mirrors the shipping and details steps of the standard order flow, so buyers learn one pattern for both paths.
            </p>
          </div>

          {/* Three RFQ Screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <ImageSlot
              label="RFQ category"
              aspectRatio="auto"
              src={nonaImages.rfqCategorySelect}
              caption="Decision 4: Specifying base garment category and fabric specifications for custom production."
            />
            <ImageSlot
              label="RFQ Product detail"
              aspectRatio="auto"
              src={nonaImages.rfqProjectDetails}
              caption="Decision 4: Target unit price, delivery timeline, branding uploads, and tech pack notes."
            />
            <ImageSlot
              label="RFQ shipping detail"
              aspectRatio="auto"
              src={nonaImages.rfqShippingDetails}
              caption="Decision 4: Delivery location, warehouse address, and dispatch details structured before quote submission."
            />
          </div>
        </section>

        {/* =========================================================
            10 DECISION 5: ONE DESIGN FOR DESKTOP AND MOBILE
           ========================================================= */}
        <section id="section-10" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              10
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 5: One responsive design for desktop and mobile
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            Shop owners also order from their phones, so I designed the buyer screens for desktop and mobile.
          </p>

          {/* Interactive Desktop / Mobile Toggle Component */}
          <ResponsiveScreenToggle />
        </section>

        {/* =========================================================
            11 BUSINESS DASHBOARD AND ADMIN PANEL
           ========================================================= */}
        <section id="section-11" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              11
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Business dashboard and admin panel: Central operations
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4] leading-relaxed">
            Each manufacturer, vendor or buyer account has its own workspace to track orders, manage the product catalogue, invite team members with role-based permissions and handle invoices, without needing a sales rep for daily work. The admin panel covers catalogue, order and production management.
          </p>

          {/* Gallery with 4 Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageSlot
              label="Business Dashboard Home"
              aspectRatio="16/10"
              src={nonaImages.dashboardHome}
              caption="Decision 11: Business Dashboard Home — Self-service operational workspace for tracking orders and inventory."
            />
            <ImageSlot
              label="Buyer Management"
              aspectRatio="16/10"
              src={nonaImages.buyerManagement}
              caption="Decision 11: Buyer Management — Team members, ordering permissions, and client relationships."
            />
            <ImageSlot
              label="Invoice Tracking"
              aspectRatio="16/10"
              src={nonaImages.invoiceTracking}
              caption="Decision 11: Invoice Tracking — Clear payment histories, credit terms, and GST-compliant invoices."
            />
            <ImageSlot
              label="Order Management"
              aspectRatio="16/10"
              src={nonaImages.adminPanel}
              caption="Decision 11: Order Management — Central tracking for wholesale orders, fulfillment stages, and status updates."
            />
          </div>
        </section>

        {/* =========================================================
            12 OUTCOME AND REFLECTION
           ========================================================= */}
        <section id="section-12" className="reveal flex flex-col gap-8 text-left border-t border-[rgba(242,238,230,0.08)] pt-12">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#BF4B0A]">
              12
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Outcome and reflection
            </h2>
          </div>

          {/* What The Design Delivers */}
          <div className="p-7 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-3">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              What the design delivers
            </span>
            <p className="text-[1.05rem] text-[#F2EEE6] leading-relaxed">
              A whole bulk order entered in one grid with live totals; one signup that fits three roles; a structured way to ask for custom work; and one design that works on desktop and mobile.
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

          {/* What I Learned */}
          <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.08)] flex flex-col gap-2">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              Key Lesson
            </span>
            <p className="text-[0.98rem] text-[#B5B0A4] leading-relaxed">
              In bulk buying, speed and clarity matter more than browsing, so the quantity grid had to feel as fast as a spreadsheet.
            </p>
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

export default NonaCaseStudy;
