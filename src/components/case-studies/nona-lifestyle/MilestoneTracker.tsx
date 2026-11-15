"use client";

import React, { useState } from "react";

interface MilestoneStage {
  id: string;
  title: string;
  desc: string;
  samplePct: string;
  status: "Completed" | "In progress" | "Upcoming";
}

const STAGES: MilestoneStage[] = [
  {
    id: "raw",
    title: "Raw Material",
    desc: "Sourcing and verifying fabric, threads, and trims against approved specifications.",
    samplePct: "100%",
    status: "Completed",
  },
  {
    id: "cutting",
    title: "Cutting",
    desc: "Spreading fabric layers and precision pattern cutting for the bulk order.",
    samplePct: "100%",
    status: "Completed",
  },
  {
    id: "stitching",
    title: "Stitching/Sewing",
    desc: "Assembling garments across the production line. This is the primary manufacturing phase.",
    samplePct: "65%",
    status: "In progress",
  },
  {
    id: "finishing",
    title: "Finishing",
    desc: "Washing, pressing, thread trimming, and button/zipper attachment.",
    samplePct: "0%",
    status: "Upcoming",
  },
  {
    id: "qc",
    title: "QC",
    desc: "Quality control inspection against the golden sample, checking measurements and tolerances.",
    samplePct: "0%",
    status: "Upcoming",
  },
  {
    id: "packing",
    title: "Packing",
    desc: "Folding, poly-bagging, size-ratio tagging, and carton boxing for final carrier pickup.",
    samplePct: "0%",
    status: "Upcoming",
  },
];

export function MilestoneTracker() {
  const [activeStage, setActiveStage] = useState(2); // Stitching/Sewing (65%)

  const current = STAGES[activeStage];
  const progressPercent = (activeStage / (STAGES.length - 1)) * 100;

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl text-[#F2EEE6]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(242,238,230,0.08)] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A] animate-pulse" />
          <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
            Live Order Tracking
          </span>
          <span className="text-[0.7rem] font-mono uppercase px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] border border-[rgba(191,75,10,0.3)] text-[#F2EEE6]">
            Sample data
          </span>
        </div>

        <div className="flex items-center gap-2 text-[0.75rem] font-mono text-[#8C877D]">
          <span>Order #NL-88492</span>
          <span>•</span>
          <span className="text-[#BF4B0A]">Stitching at 65%</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-left">
        <h4 className="text-[1.1rem] font-semibold text-[#F2EEE6]">
          Six Manufacturing Stages (Click any stage)
        </h4>
        <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
          Instead of an uninformative &ldquo;Processing&rdquo; label, buyers follow each discrete manufacturing phase with its own live progress.
        </p>
      </div>

      {/* Stepper Rail */}
      <div className="relative py-4">
        {/* Background Track */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1.5 bg-[#12110E] rounded-full border border-[rgba(242,238,230,0.08)]" />

        {/* Progress Fill */}
        <div
          className="absolute top-1/2 left-4 -translate-y-1/2 h-1.5 bg-gradient-to-r from-[#A33F08] to-[#BF4B0A] rounded-full transition-all duration-300"
          style={{ width: `calc(${progressPercent}% * 0.92)` }}
        />

        {/* Stage Nodes */}
        <div className="relative flex justify-between items-center z-10">
          {STAGES.map((stage, idx) => {
            const isCompleted = idx < activeStage;
            const isCurrent = idx === activeStage;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(idx)}
                aria-label={`View stage ${idx + 1}: ${stage.title}`}
                className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isCurrent
                      ? "bg-[#BF4B0A] text-white ring-4 ring-[#BF4B0A]/30 scale-110 shadow-lg"
                      : isCompleted
                      ? "bg-[#1C1812] border border-[#BF4B0A] text-[#BF4B0A]"
                      : "bg-[#12110E] border border-[rgba(242,238,230,0.15)] text-[#8C877D] hover:border-[rgba(242,238,230,0.3)] hover:text-[#F2EEE6]"
                  }`}
                >
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>

                <span
                  className={`text-[0.72rem] sm:text-[0.78rem] font-medium text-center hidden sm:block max-w-[80px] transition-colors ${
                    isCurrent
                      ? "text-[#F2EEE6] font-semibold"
                      : "text-[#8C877D] group-hover:text-[#F2EEE6]"
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div className="flex flex-col gap-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              Stage {activeStage + 1} of 6
            </span>
            <span className="text-xs text-[#8C877D]">•</span>
            <span className="text-[0.75rem] font-mono text-[#8C877D]">
              Status: {current.status}
            </span>
          </div>
          <h5 className="text-[1.05rem] font-semibold text-[#F2EEE6]">
            {current.title} — {current.samplePct}
          </h5>
          <p className="text-[0.85rem] text-[#B5B0A4] leading-relaxed">
            {current.desc}
          </p>
        </div>

        <div className="shrink-0 p-3 rounded-lg bg-[#181611] border border-[rgba(242,238,230,0.08)] flex sm:flex-col items-center gap-2 w-full sm:w-auto justify-between sm:justify-center">
          <span className="text-[0.72rem] font-mono text-[#8C877D] uppercase">Phase Progress</span>
          <span className="text-xl font-bold font-mono text-[#BF4B0A]">{current.samplePct}</span>
        </div>
      </div>
    </div>
  );
}

export default MilestoneTracker;
