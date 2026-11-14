"use client";

import React, { useState } from "react";
import ImageSlot from "./ImageSlot";
import { ospreyImages } from "./osprey-images";
import LogoResearchMatrix from "./LogoResearchMatrix";

const logoSteps = [
  {
    step: 1,
    title: "Client's rough image",
    slotKey: "logoStep1Rough" as const,
  },
  {
    step: 2,
    title: "Research",
    slotKey: "logoStep2Research" as const,
  },
  {
    step: 3,
    title: "Final logo",
    slotKey: "logoStep4Final" as const,
  },
];

export function Decision8LogoStepper() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = logoSteps[activeStep];

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Stepper Navigation */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
              Logo Evolution Stepper: Step {activeStep + 1} of {logoSteps.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="w-8 h-8 rounded-lg bg-[#1C1914] border border-[rgba(242,238,230,0.1)] flex items-center justify-center text-[#F2EEE6] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#25221B] transition-colors cursor-pointer"
              aria-label="Previous step"
            >
              ←
            </button>
            <button
              type="button"
              disabled={activeStep === logoSteps.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(logoSteps.length - 1, prev + 1))}
              className="w-8 h-8 rounded-lg bg-[#1C1914] border border-[rgba(242,238,230,0.1)] flex items-center justify-center text-[#F2EEE6] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#25221B] transition-colors cursor-pointer"
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>

        {/* Step Tabs / Scrub Buttons */}
        <div
          role="tablist"
          aria-label="Logo Creation Steps"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
        >
          {logoSteps.map((s, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={s.step}
                type="button"
                role="tab"
                id={`logo-tab-${s.step}`}
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`py-2 px-3 rounded-lg text-[0.82rem] font-medium transition-all duration-200 cursor-pointer text-center ${
                  isActive
                    ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                    : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
                }`}
              >
                {s.step}. {s.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Content */}
      <div className="w-full">
        {activeStep === 1 ? (
          <LogoResearchMatrix />
        ) : (
          <ImageSlot
            label={current.title}
            aspectRatio="auto"
            src={ospreyImages[current.slotKey]}
            caption={
              activeStep === 0
                ? "Client's rough initial drawing capturing the core Osprey bird concept."
                : "The finalized Osprey emblem designed for FUSO's Global Field Fix Portal."
            }
          />
        )}
      </div>
    </div>
  );
}

export default Decision8LogoStepper;
