"use client";

import React, { useState } from "react";

const buildSteps = [
  {
    num: "01",
    title: "Field fix creation",
    desc: "Connect to FALCON and break 11 manual fields into a structured 4-step wizard with auto-fill.",
  },
  {
    num: "02",
    title: "CFT module",
    desc: "Separate calculation logic into its own master record hub so fixes pick verified numbers.",
  },
  {
    num: "03",
    title: "Role flows",
    desc: "Design tailored handoff views and actions for each of the 6 sequential operational roles.",
  },
  {
    num: "04",
    title: "Universal search",
    desc: "Introduce quick search in the global header and full multi-parameter search screen.",
  },
  {
    num: "05",
    title: "Role dashboards",
    desc: "Prioritize what each role checks first; group QM preparation, parts, and budget into tabs.",
  },
  {
    num: "06",
    title: "Logo",
    desc: "Research the osprey bird and craft a distinctive, modern brand mark from scratch.",
  },
];

export function HorizontalTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Horizontal timeline track */}
      <div className="w-full overflow-x-auto pb-4 no-scrollbar">
        <div className="min-w-[720px] flex items-center justify-between relative px-4">
          {/* Connecting track line */}
          <div className="absolute left-8 right-8 top-6 h-[2px] bg-[rgba(242,238,230,0.1)] -z-0" />
          <div
            className="absolute left-8 top-6 h-[2px] bg-[#BF4B0A] transition-all duration-300 -z-0"
            style={{
              width: `${(activeStep / (buildSteps.length - 1)) * 92}%`,
            }}
          />

          {buildSteps.map((step, idx) => {
            const isCurrent = idx === activeStep;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
              >
                {/* Node icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-[0.82rem] font-bold transition-all duration-200 ${
                    isCurrent
                      ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-[0_0_20px_rgba(191,75,10,0.6)] scale-110"
                      : isCompleted
                      ? "bg-[#1C1914] text-[#BF4B0A] border-2 border-[#BF4B0A]"
                      : "bg-[#16140F] text-[#8C877D] border border-[rgba(242,238,230,0.2)] group-hover:border-[#BF4B0A] group-hover:text-[#F2EEE6]"
                  }`}
                >
                  {isCompleted ? "✓" : step.num}
                </div>

                {/* Step title label */}
                <span
                  className={`text-[0.85rem] font-medium tracking-tight text-center max-w-[100px] leading-snug transition-colors ${
                    isCurrent ? "text-[#F2EEE6] font-semibold" : "text-[#B5B0A4] group-hover:text-[#F2EEE6]"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Step Detail Callout */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#16140F] border border-[rgba(191,75,10,0.3)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[0.75rem] font-mono text-[#BF4B0A] font-bold uppercase tracking-wider">
              Build Milestone {buildSteps[activeStep].num}
            </span>
            <span className="text-[0.75rem] text-[#8C877D]">· Daily 1-hour walkthrough</span>
          </div>
          <h4 className="text-[1.1rem] font-semibold text-[#F2EEE6]">
            {buildSteps[activeStep].title}
          </h4>
          <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
            {buildSteps[activeStep].desc}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="px-3 py-1.5 rounded-lg bg-[#1C1914] border border-[rgba(242,238,230,0.1)] text-[0.82rem] text-[#E6E1D8] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#25221B] transition-colors cursor-pointer"
          >
            ← Previous
          </button>
          <button
            type="button"
            disabled={activeStep === buildSteps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(buildSteps.length - 1, prev + 1))}
            className="px-3 py-1.5 rounded-lg bg-[#BF4B0A] text-[0.82rem] font-medium text-[#F2EEE6] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D95B16] transition-colors cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default HorizontalTimeline;
