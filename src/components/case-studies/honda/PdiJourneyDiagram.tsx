"use client";

import React, { useState, useEffect } from "react";

interface PdiJourneyDiagramProps {
  highlightSteps?: number[];
  autoStartStep?: number;
}

interface StepData {
  num: number;
  actor: "Supervisor" | "Technician" | "System / Loop";
  title: string;
  desc: string;
  badgeColor: string;
}

const steps: StepData[] = [
  {
    num: 1,
    actor: "Supervisor",
    title: "Pick vehicles",
    desc: "Supervisor picks one or more vehicles waiting in showroom.",
    badgeColor: "#BF4B0A",
  },
  {
    num: 2,
    actor: "Supervisor",
    title: "Assign technician",
    desc: "Supervisor taps Assign technician and chooses one technician.",
    badgeColor: "#BF4B0A",
  },
  {
    num: 3,
    actor: "Technician",
    title: "List update",
    desc: "The vehicles appear on that technician's list in real time.",
    badgeColor: "#DC2626",
  },
  {
    num: 4,
    actor: "Technician",
    title: "3-Part inspection",
    desc: "Technician opens a vehicle and does the Initial check, then the Functional check, then the Road test.",
    badgeColor: "#DC2626",
  },
  {
    num: 5,
    actor: "Technician",
    title: "Complete PDI",
    desc: "Technician sees the list of issues, if there are any, and taps Complete PDI.",
    badgeColor: "#DC2626",
  },
  {
    num: 6,
    actor: "System / Loop",
    title: "No issues → Completed",
    desc: "No issues found: the vehicle moves to the supervisor's Completed PDI list.",
    badgeColor: "#10B981",
  },
  {
    num: 7,
    actor: "Supervisor",
    title: "Issues found → Not OK",
    desc: "Issues found: the vehicle moves to the supervisor's Not OK list. The supervisor creates a job card and the vehicle goes to repair.",
    badgeColor: "#F59E0B",
  },
  {
    num: 8,
    actor: "System / Loop",
    title: "Repaired → Loop back to Step 2",
    desc: "After repair the vehicle comes back to the supervisor's main list. The supervisor assigns it again and the PDI is repeated.",
    badgeColor: "#E11D48",
  },
];

export function PdiJourneyDiagram({
  highlightSteps,
  autoStartStep = 1,
}: PdiJourneyDiagramProps) {
  const [currentStep, setCurrentStep] = useState<number>(autoStartStep);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= 8 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => (prev >= 8 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => (prev <= 1 ? 8 : prev - 1));
  };

  const activeStepData = steps.find((s) => s.num === currentStep) || steps[0];

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#DC2626] text-[#F2EEE6] font-mono font-bold text-[0.85rem] flex items-center justify-center shadow-md">
            {currentStep}
          </span>
          <div>
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] block">
              Step {currentStep} of 8 • {activeStepData.actor}
            </span>
            <span className="text-[0.95rem] font-semibold text-[#F2EEE6]">
              {activeStepData.title}
            </span>
          </div>
        </div>

        {/* Player Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="px-3 py-1.5 rounded-lg text-[0.82rem] font-medium bg-[#1B1914] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#222019] transition-all cursor-pointer"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-1.5 rounded-lg text-[0.82rem] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              isPlaying
                ? "bg-[#DC2626] text-[#F2EEE6] shadow-md shadow-[rgba(220,38,38,0.4)]"
                : "bg-[#1B1914] border border-[rgba(242,238,230,0.15)] text-[#F2EEE6] hover:bg-[#222019]"
            }`}
          >
            {isPlaying ? (
              <>
                <span className="w-2 h-2 rounded-sm bg-white" /> Pause
              </>
            ) : (
              <>
                <span>▶</span> Play journey
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-3.5 py-1.5 rounded-lg text-[0.82rem] font-semibold bg-[#DC2626] text-[#F2EEE6] hover:bg-[#B91C1C] transition-all shadow-md cursor-pointer"
          >
            Next step →
          </button>
        </div>
      </div>

      {/* Current Step Active Callout */}
      <div className="p-4 rounded-xl bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.25)] text-left">
        <p className="text-[0.95rem] text-[#F2EEE6] leading-relaxed">
          <strong className="text-[#DC2626] font-semibold">
            {activeStepData.actor}:{" "}
          </strong>
          {activeStepData.desc}
        </p>
      </div>

      {/* Background Admin Lane (Dashed) */}
      <div className="w-full rounded-xl border border-dashed border-[rgba(220,38,38,0.35)] bg-[rgba(220,38,38,0.02)] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded text-[0.68rem] font-mono uppercase tracking-wider bg-[rgba(220,38,38,0.15)] text-[#DC2626] border border-[rgba(220,38,38,0.3)]">
            Admin Lane (HMSI)
          </span>
          <span className="text-[0.85rem] text-[#E6E1D8]">
            Sets the checklist for each vehicle model and tracks every vehicle&apos;s PDI.
          </span>
        </div>
        <span className="text-[0.72rem] font-mono text-[#8C877D] shrink-0">
          Governs Steps 1–8
        </span>
      </div>

      {/* 8-Step Grid Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
        {steps.map((step) => {
          const isCurrent = step.num === currentStep;
          const isHighlighted =
            highlightSteps && highlightSteps.includes(step.num);

          return (
            <div
              key={step.num}
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep(step.num);
              }}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[140px] relative ${
                isCurrent
                  ? "bg-[#1F1C16] border-[#DC2626] shadow-lg shadow-[rgba(220,38,38,0.25)] ring-2 ring-[#DC2626]/50 scale-[1.02]"
                  : isHighlighted
                  ? "bg-[#1A1813] border-[#DC2626]/60 shadow-md ring-1 ring-[#DC2626]/30"
                  : "bg-[#12110E] border-[rgba(242,238,230,0.08)] hover:border-[rgba(242,238,230,0.2)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-full font-mono text-[0.75rem] font-bold flex items-center justify-center ${
                      isCurrent
                        ? "bg-[#DC2626] text-white"
                        : "bg-[#24211A] text-[#8C877D]"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-[0.68rem] font-mono uppercase tracking-wider text-[#8C877D]">
                    {step.actor}
                  </span>
                </div>
                <h4 className="text-[0.92rem] font-semibold text-[#F2EEE6] leading-snug">
                  {step.title}
                </h4>
                <p className="text-[0.78rem] text-[#B5B0A4] mt-1.5 line-clamp-3 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Loop back indicator on step 8 */}
              {step.num === 8 && (
                <div className="mt-2.5 pt-2 border-t border-[rgba(220,38,38,0.25)] flex items-center gap-1.5 text-[0.72rem] font-mono text-[#DC2626] font-semibold">
                  <span>↺ Loop back to Step 2</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Visual Step 8 Loop Banner */}
      <div className="p-3.5 rounded-xl bg-[#12110E] border border-[rgba(220,38,38,0.2)] flex items-center justify-between text-left">
        <div className="flex items-center gap-2.5 text-[0.84rem] text-[#B5B0A4]">
          <span className="text-[#DC2626] text-lg font-bold">↺</span>
          <span>
            <strong className="text-[#F2EEE6]">Step 8 Loop:</strong> Repaired vehicles return to the supervisor&apos;s main list, get assigned again, and the PDI is repeated from scratch.
          </span>
        </div>
        <span className="text-[0.72rem] font-mono text-[#8C877D] hidden sm:inline">
          Closed-loop accountability
        </span>
      </div>
    </div>
  );
}

export default PdiJourneyDiagram;
