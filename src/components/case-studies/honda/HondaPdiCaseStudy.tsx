"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Sun, Moon } from "lucide-react";
import ImageSlot from "../osprey/ImageSlot";
import PhoneSlot from "./PhoneSlot";
import PdiHeroSlider from "./PdiHeroSlider";
import AnnotatedChecksheet from "./AnnotatedChecksheet";
import PdiRoleSwitcher from "./PdiRoleSwitcher";
import PdiJourneyDiagram from "./PdiJourneyDiagram";
import CheckpointSorter from "./CheckpointSorter";
import SupervisorAssignMock from "./SupervisorAssignMock";
import AdminChecklistMock from "./AdminChecklistMock";
import SharedPatternsCompare from "./SharedPatternsCompare";
import { pdiImages } from "./pdi-images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

interface HondaPdiCaseStudyProps {
  prevCaseName?: string;
  prevCaseUrl?: string;
  nextCaseName?: string;
  nextCaseUrl?: string;
}

export function HondaPdiCaseStudy({
  prevCaseName = "Osprey: Global Field Fix Portal",
  prevCaseUrl = "fuso-hawk",
  nextCaseName = "Digital Seva Portal",
  nextCaseUrl = "seva",
}: HondaPdiCaseStudyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Sync theme
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

  // Scroll listener for top progress rail and subtle reveals
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
          backgroundColor: "#DC2626",
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
          className="text-xs uppercase tracking-[2px] text-[#B5B0A4] hover:text-[#DC2626] transition-colors duration-200 flex items-center gap-2 font-medium"
        >
          <span>←</span> Back to portfolio
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono tracking-wider text-[#8C877D]">
            Case Study <span className="text-[#DC2626] font-semibold">03/05</span>
          </span>

          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-1.5 rounded-lg border border-[rgba(242,238,230,0.1)] text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)] transition-all cursor-pointer"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[2px] font-medium">
          <Link
            href={`/case-studies/${prevCaseUrl}`}
            className="text-[#B5B0A4] hover:text-[#DC2626] transition-colors duration-200 hidden sm:inline"
          >
            ← Previous Project
          </Link>
          <span className="text-[#8C877D]/40 hidden sm:inline">|</span>
          <Link
            href={`/case-studies/${nextCaseUrl}`}
            className="text-[#DC2626] hover:text-[#EF4444] transition-colors duration-200"
          >
            Next Project →
          </Link>
        </div>
      </nav>

      {/* Main Content Column */}
      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-18 flex flex-col gap-18 sm:gap-24">
        {/* =========================================================
            00 ONE-VIEW HERO (Fitted above the fold at 1440x900)
           ========================================================= */}
        <header className="w-full flex flex-col pt-1 sm:pt-2">
          {/* Header Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider bg-[#DC2626] text-[#F2EEE6] shadow-sm">
              Mobile app
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider bg-[#1E1C17] text-[#B5B0A4] border border-[rgba(242,238,230,0.12)]">
              Enterprise
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider bg-[#1E1C17] text-[#B5B0A4] border border-[rgba(242,238,230,0.12)]">
              Automotive
            </span>
          </div>

          {/* Main Title & One-liner */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.85rem] font-bold tracking-tight text-[#F2EEE6] leading-[1.08] mb-1.5">
            Honda PDI Automation
          </h1>
          <p className="text-[0.96rem] sm:text-[1.05rem] text-[#B5B0A4] max-w-3xl leading-snug mb-3 font-normal">
            I turned a crowded paper checksheet into a guided inspection inside the My Honda app, so Honda dealers check every new vehicle one clear part at a time.
          </p>

          {/* Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-2.5 rounded-xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] text-xs mb-3.5">
            <div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#8C877D] block">Role</span>
              <span className="font-medium text-[#F2EEE6]">Senior UI/UX Designer, only designer</span>
            </div>
            <div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#8C877D] block">Client</span>
              <span className="font-medium text-[#F2EEE6]">Honda (HMSI)</span>
            </div>
            <div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#8C877D] block">Timeline</span>
              <span className="font-medium text-[#F2EEE6]">October to 1 Dec 2025</span>
            </div>
            <div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#8C877D] block">Platform</span>
              <span className="font-medium text-[#F2EEE6]">Mobile app in My Honda</span>
            </div>
            <div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#8C877D] block">Tools</span>
              <span className="font-medium text-[#F2EEE6]">Figma (design & proto)</span>
            </div>
          </div>

          {/* Large Hero Before / After Slider */}
          <div className="w-full">
            <PdiHeroSlider initialPosition={48} />
          </div>

          {/* At-a-glance Row of 5 Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-3.5">
            {[
              "New module in My Honda",
              "3 user roles",
              "3-part inspection",
              "Shaped with 3 dealers",
              "Live with real dealers",
            ].map((chip, idx) => (
              <div
                key={idx}
                className="py-1.5 px-2.5 rounded-lg bg-[#16140F] border border-[rgba(242,238,230,0.08)] text-center text-[0.76rem] text-[#E6E1D8] font-medium"
              >
                {chip}
              </div>
            ))}
          </div>

          {/* 3-line Skim Summary */}
          <div className="mt-3.5 p-3 rounded-xl bg-[rgba(220,38,38,0.05)] border border-[rgba(220,38,38,0.2)] flex flex-col gap-1 text-left text-[0.84rem] leading-snug">
            <p>
              <strong className="text-[#DC2626] font-semibold">The problem: </strong>
              <span className="text-[#B5B0A4]">
                dealers did PDI on a crowded paper sheet, and it was not customized for the person doing the check.
              </span>
            </p>
            <p>
              <strong className="text-[#DC2626] font-semibold">What I did: </strong>
              <span className="text-[#B5B0A4]">
                turned it into a three-part guided inspection with one clear flow for the supervisor, the technician and HMSI&apos;s admin.
              </span>
            </p>
            <p>
              <strong className="text-[#DC2626] font-semibold">Why it matters: </strong>
              <span className="text-[#B5B0A4]">
                every step has an owner, and the module is live with real dealers.
              </span>
            </p>
          </div>
        </header>

        {/* =========================================================
            01 OVERVIEW
           ========================================================= */}
        <section id="section-01" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              01
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Overview
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4 text-[1.02rem] sm:text-[1.08rem] text-[#B5B0A4] leading-relaxed">
            <p>
              PDI stands for Pre-Delivery Inspection. Before a new vehicle goes to its customer, the dealer checks it carefully. Honda Motorcycle & Scooter India (HMSI) wanted this check to move from paper into the My Honda app.
            </p>
            <p>
              I designed that new module: the inspection itself, the supervisor&apos;s tools, and the admin panel for HMSI&apos;s own team. I was the only designer on the project, and it is live today with real dealers.
            </p>
          </div>
        </section>

        {/* =========================================================
            02 WHERE WE STARTED: ONE CROWDED SHEET OF PAPER
           ========================================================= */}
        <section id="section-02" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              02
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Where we started: one crowded sheet of paper
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4 text-[1.02rem] text-[#B5B0A4] leading-relaxed">
            <p className="text-[#F2EEE6] font-medium">
              Before the app, dealers did PDI on a paper checksheet. I studied a real one, for the Dio 125.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#B5B0A4]">
              <li>One page held more than 40 checkpoints for a single model, and much of it was drawn around pictures of the vehicle.</li>
              <li>Technicians wrote details by hand, such as the battery voltage and the frame and engine numbers.</li>
              <li>Each checkpoint was marked with a tick, an X for a defect, or NA. Defects were described on numbered lines at the bottom.</li>
              <li>Both the service technician and the sales representative signed the page, and the dealer had to file the paper for future reference.</li>
              <li>Dealers told me the paper way was not customized, and that people did things in a random order.</li>
            </ul>
          </div>

          {/* Interactive Annotated Checksheet */}
          <AnnotatedChecksheet />
        </section>

        {/* =========================================================
            03 MY BRIEF
           ========================================================= */}
        <section id="section-03" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              03
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              My brief
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#B5B0A4]">
            Three rules shaped everything:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(220,38,38,0.1)] text-[#DC2626] flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-[1.08rem] font-semibold text-[#F2EEE6]">
                Module inside My Honda
              </h3>
              <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
                Build a new module inside My Honda, not a new app.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(220,38,38,0.1)] text-[#DC2626] flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-[1.08rem] font-semibold text-[#F2EEE6]">
                Follow design language
              </h3>
              <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
                Follow My Honda&apos;s design language, which was already defined. I was not redesigning the app.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(220,38,38,0.1)] text-[#DC2626] flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-[1.08rem] font-semibold text-[#F2EEE6]">
                Keep it simple
              </h3>
              <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
                Keep it simple, because many users would be doing PDI in an app for the first time.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 WHO'S WHO: THREE ROLES
           ========================================================= */}
        <section id="section-04" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              04
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Who&apos;s who: three roles
            </h2>
          </div>

          <p className="text-[1.02rem] text-[#B5B0A4]">
            Clear boundaries prevent showroom bottlenecks. Each role gets dedicated tools that match their exact responsibility.
          </p>

          <PdiRoleSwitcher />
        </section>

        {/* =========================================================
            05 THE PDI JOURNEY, STEP BY STEP
           ========================================================= */}
        <section id="section-05" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              05
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              The PDI journey, step by step
            </h2>
          </div>

          <p className="text-[1.05rem] text-[#E6E1D8]">
            Here is the whole journey of one vehicle, from waiting to ready.
          </p>

          <PdiJourneyDiagram />
        </section>

        {/* =========================================================
            06 DECISION 1: TURN ONE CROWDED PAGE INTO THREE GUIDED PARTS
           ========================================================= */}
        <section id="section-06" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              06
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 1: Turn one crowded page into three guided parts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                The paper sheet packed more than 40 checkpoints onto one page. Dealers worked through it in no set order, and it was not customized for the person doing the check.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                I took Honda&apos;s checksheet and built the app around its three parts: Initial check, Functional check, and Road test. Dealers helped me decide which checkpoint belongs in which part, because they know the work better than I do. The number of checkpoints is not fixed: it changes with the vehicle and its model.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                A technician always knows which part they are in and what comes next. (Note: MIL code stands for Malfunction Indicator Lamp, checked via diagnostic tool).
              </p>
            </div>
          </div>

          <CheckpointSorter />
        </section>

        {/* =========================================================
            07 DECISION 2: KEEP IT SIMPLE, BECAUSE EVERYONE IS NEW TO IT
           ========================================================= */}
        <section id="section-07" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              07
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 2: Keep it simple, because everyone is new to it
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                These users had never done PDI in an app. Anything confusing could push them back to paper.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                I broke the PDI into three parts so a technician always knows where they are and what comes next, and I kept every step easy to understand on the first try. The dealers I showed it to found the flow very easy to understand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                A first-time user can follow each step without help, so the new way is not harder than the paper one.
              </p>
            </div>
          </div>

          {/* Slots: Three PhoneSlots with a short caption each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <PhoneSlot
              label="Assigned list"
              src={pdiImages.simpleStep1}
              caption="Clear starting point: Technicians see only their assigned vehicles with a single primary action."
            />
            <PhoneSlot
              label="Step-by-step guidance"
              src={pdiImages.simpleStep2}
              caption="Visual checklist: Annotated vehicle diagram keeps inspections intuitive and foolproof."
            />
            <PhoneSlot
              label="Instant issue logging"
              src={pdiImages.simpleStep3}
              caption="One-tap defect recording: Clear options eliminate messy handwriting and ambiguous notes."
            />
          </div>
        </section>

        {/* =========================================================
            08 DECISION 3: SHOW THE DESIGNS TO THE PEOPLE WHO WILL USE THEM
           ========================================================= */}
        <section id="section-08" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              08
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 3: Show the designs to the people who will use them
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.9rem] text-[#B5B0A4] leading-relaxed">
                I was the only designer, and dealers know the showroom work better than I do.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.9rem] text-[#B5B0A4] leading-relaxed">
                I built a Figma prototype and walked three Honda dealers through the full process, start to finish, before the design was final.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What they told me
              </span>
              <p className="text-[0.9rem] text-[#B5B0A4] leading-relaxed">
                They were very happy with the flow and found it very easy to understand. They also helped me sort the checkpoints into the right categories. I updated the UI to match.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.9rem] text-[#B5B0A4] leading-relaxed">
                Real users shaped the structure, so the flow matches how dealers actually work.
              </p>
            </div>
          </div>

          {/* Interaction: Small 3-step timeline */}
          <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-4">
            <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
              Feedback Loop Timeline
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-[0.92rem] font-semibold text-[#F2EEE6]">Prototype</h4>
                  <p className="text-[0.8rem] text-[#8C877D] mt-1">
                    Interactive clickable Figma prototype simulating real inspection flow.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#12110E] border border-[#DC2626]/40 flex items-start gap-3 shadow-md">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-[0.92rem] font-semibold text-[#F2EEE6]">
                    Walkthrough with 3 dealers
                  </h4>
                  <p className="text-[0.8rem] text-[#8C877D] mt-1">
                    End-to-end sessions observing real mechanics and supervisors testing the sequence.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-[0.92rem] font-semibold text-[#F2EEE6]">Updated UI</h4>
                  <p className="text-[0.8rem] text-[#8C877D] mt-1">
                    Refined checkpoint sequence and simplified terminology based on hands-on dealer guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slots: Figma prototype overview (wide) */}
          <div className="w-full">
            <ImageSlot
              label="Figma prototype overview"
              aspectRatio="21/9"
              src={pdiImages.figmaPrototypeOverview}
              caption="Figma prototype: Complete interactive map tested across 3 dealership showroom walkthroughs."
            />
          </div>
        </section>

        {/* =========================================================
            09 DECISION 4: LET THE SUPERVISOR HAND OUT THE WORK
           ========================================================= */}
        <section id="section-09" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              09
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 4: Let the supervisor hand out the work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                A showroom has many vehicles waiting for PDI and several technicians. Someone has to decide who checks what.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                The supervisor&apos;s first screen is the list of vehicles in the showroom. They can select one vehicle or many, tap Assign technician, pick one technician from the list, and all selected vehicles go to that technician. The supervisor&apos;s list is split into four views: Pending PDI, Assigned, Not OK and Completed PDI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                Every vehicle has one clear place to be, and each technician only sees what is theirs.
              </p>
            </div>
          </div>

          <SupervisorAssignMock />
        </section>

        {/* =========================================================
            10 DECISION 5: DESIGN FOR THE WHOLE JOURNEY, INCLUDING REPAIRS
           ========================================================= */}
        <section id="section-10" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              10
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 5: Design for the whole journey, including repairs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                A PDI is not always a straight line. If the technician finds an issue, the vehicle cannot go to the customer yet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                I designed the whole loop. The technician sees only their assigned vehicles and opens them one by one. If there are issues, they see the full list once the PDI is done and tap Complete PDI. The vehicle then shows up in the supervisor&apos;s Not OK list. The supervisor picks it and creates a job card, and the vehicle goes to repair. After repair it returns to the supervisor&apos;s main list, gets assigned again, and the PDI is repeated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                The vehicle always has a clear next step, the supervisor sees every problem vehicle in one list, and a repaired vehicle goes back through a fresh PDI.
              </p>
            </div>
          </div>

          {/* Interaction: Journey diagram highlighting steps 5 to 8 */}
          <div className="flex flex-col gap-3">
            <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
              Highlighted Loop: Steps 5 through 8 (Handling Defects & Re-Inspection)
            </span>
            <PdiJourneyDiagram highlightSteps={[5, 6, 7, 8]} autoStartStep={5} />
          </div>

          {/* Visual Slots: 5 PhoneSlots */}
          <div className="pt-6 border-t border-[rgba(242,238,230,0.08)] flex flex-col gap-4">
            <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
              Repair & Resolution Flow Screens
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <PhoneSlot
                label="Technician assigned list"
                src={pdiImages.technicianAssignedList}
                caption="1. Assigned list"
              />
              <PhoneSlot
                label="Issues list after the PDI"
                src={pdiImages.issuesListAfterPdi}
                caption="2. Issues summary"
              />
              <PhoneSlot
                label="Complete PDI"
                src={pdiImages.completePdiScreen}
                caption="3. Complete PDI submit"
              />
              <PhoneSlot
                label="Not OK list"
                src={pdiImages.notOkListScreen}
                caption="4. Not OK queue"
              />
              <PhoneSlot
                label="Job card"
                src={pdiImages.jobCardScreen}
                caption="5. Generated job card"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            11 DECISION 6: GIVE HMSI CONTROL OF THE CHECKLIST
           ========================================================= */}
        <section id="section-11" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              11
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 6: Give HMSI control of the checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                Not every vehicle model needs the same checks, and the checklist should not be fixed forever.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                I designed an admin panel for HMSI&apos;s own team. The admin can decide which questions and checkpoints are in the checklist, choose a vehicle model and decide which checkpoints apply to it, and track every vehicle and its PDI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                The number of checkpoints is not fixed, it changes with the vehicle and its model. The people who own the standards manage this directly, and each model gets the checks that fit it.
              </p>
            </div>
          </div>

          <AdminChecklistMock />
        </section>

        {/* =========================================================
            12 DECISION 7: MAKE IT FEEL LIKE PART OF MY HONDA
           ========================================================= */}
        <section id="section-12" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              12
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Decision 7: Make it feel like part of My Honda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                The problem
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                This was a new module, but it lived inside an app people already knew, with a design language that was already set.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What I did
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                I worked within that design language and built the PDI module so it feels like it was always part of My Honda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                Why it works
              </span>
              <p className="text-[0.94rem] text-[#B5B0A4] leading-relaxed">
                People who already use My Honda do not have to learn a new look, and the new module stays consistent with the rest of the app.
              </p>
            </div>
          </div>

          <SharedPatternsCompare />
        </section>

        {/* =========================================================
            13 OUTCOME AND REFLECTION
           ========================================================= */}
        <section id="section-13" className="reveal flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="text-[1.8rem] sm:text-[2.2rem] font-mono font-bold text-[#DC2626]">
              13
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight">
              Outcome and reflection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[0.75rem] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Live in Production
                </span>
              </div>
              <h3 className="text-[1.1rem] font-semibold text-[#F2EEE6]">Status</h3>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
                The module is live, and real dealers are using it today.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
                What changed
              </span>
              <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
                A customized, three-part inspection instead of a random one. A clear way to assign vehicles, inspect them, repair them and inspect them again. One place for HMSI to manage the checklist and see every vehicle&apos;s PDI. A process dealers helped shape and found very easy to understand.
              </p>
            </div>
          </div>

          {/* Honest Note */}
          <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-2">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#8C877D] font-semibold">
              Honest note
            </span>
            <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
              This was client work and I did not have access to post-launch analytics, so I have not put numbers on the results. Everything above describes what the design changed, not a measured percentage.
            </p>
          </div>

          {/* What I Learned */}
          <div className="p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] flex flex-col gap-3">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
              What I learned
            </span>
            <ol className="list-decimal pl-5 space-y-2 text-[0.95rem] text-[#B5B0A4] leading-relaxed">
              <li>
                <strong className="text-[#F2EEE6]">Designing the sequence:</strong> When a process is new to people, designing the order of the steps matters as much as designing the screens.
              </li>
              <li>
                <strong className="text-[#F2EEE6]">Respecting on-ground expertise:</strong> Dealers know their work better than I do. Letting them sort the checkpoints into categories gave the flow a better structure.
              </li>
            </ol>
          </div>
        </section>

        {/* =========================================================
            BOTTOM NAVIGATION (Previous Project / Next Project)
           ========================================================= */}
        <nav
          aria-label="Case study pagination"
          className="w-full pt-10 border-t border-[rgba(242,238,230,0.1)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <Link
            href={`/case-studies/${prevCaseUrl}`}
            className="group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-[#16140F] transition-all border border-transparent hover:border-[rgba(242,238,230,0.08)]"
          >
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] group-hover:text-[#DC2626] transition-colors">
              ← Previous Project
            </span>
            <span className="text-[1.05rem] font-semibold text-[#F2EEE6]">
              {prevCaseName}
            </span>
          </Link>

          <Link
            href="/"
            className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-mono text-[#8C877D] hover:text-[#F2EEE6] border border-[rgba(242,238,230,0.1)] hover:border-[rgba(242,238,230,0.25)] transition-all"
          >
            All Projects
          </Link>

          <Link
            href={`/case-studies/${nextCaseUrl}`}
            className="group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-[#16140F] transition-all border border-transparent hover:border-[rgba(242,238,230,0.08)]"
          >
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] group-hover:text-[#DC2626] transition-colors">
              Next Project →
            </span>
            <span className="text-[1.05rem] font-semibold text-[#F2EEE6]">
              {nextCaseName}
            </span>
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default HondaPdiCaseStudy;
