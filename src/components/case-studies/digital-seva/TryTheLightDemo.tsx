"use client";

import React, { useState } from "react";
import ImageSlot from "../osprey/ImageSlot";
import { digitalSevaImages } from "./digitalseva-images";

type LightCondition = "day" | "night" | "sunlight";

export function TryTheLightDemo() {
  const [condition, setCondition] = useState<LightCondition>("day");

  // Filter styles applied to the first version (pastel)
  const getPastelFilterClass = () => {
    switch (condition) {
      case "night":
        return "brightness-[0.55] contrast-[1.1] saturate-[0.8]";
      case "sunlight":
        return "brightness-[1.35] contrast-[0.7] saturate-[0.65]";
      case "day":
      default:
        return "brightness-100 contrast-100 saturate-100";
    }
  };

  // Filter styles applied to the final version (bright) - retains high contrast and visibility in sunlight
  const getFinalFilterClass = () => {
    switch (condition) {
      case "night":
        return "brightness-[0.6] contrast-[1.15] saturate-[0.85]";
      case "sunlight":
        return "brightness-[1.06] contrast-[1.06] saturate-[1.02]";
      case "day":
      default:
        return "brightness-100 contrast-100 saturate-100";
    }
  };

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl text-[#F2EEE6]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(242,238,230,0.08)] pb-4">
        <div className="flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A] animate-pulse" />
            <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              Interactive Test Simulation
            </span>
            <span className="text-[0.7rem] font-mono uppercase px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] border border-[rgba(191,75,10,0.3)] text-[#F2EEE6]">
              Simulation of the test conditions. Not test data.
            </span>
          </div>
          <p className="text-[0.88rem] text-[#B5B0A4] mt-0.5">
            Simulate how daylight, nighttime darkness, and intense outdoor sunlight affect screen readability.
          </p>
        </div>

        {/* Light Condition Buttons */}
        <div
          role="tablist"
          aria-label="Light conditions"
          className="flex items-center p-1 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.1)] shrink-0"
        >
          <button
            type="button"
            role="tab"
            aria-selected={condition === "day"}
            onClick={() => setCondition("day")}
            className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
              condition === "day"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md shadow-[rgba(191,75,10,0.3)]"
                : "text-[#B5B0A4] hover:text-[#F2EEE6]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <span>Day</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={condition === "night"}
            onClick={() => setCondition("night")}
            className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
              condition === "night"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md shadow-[rgba(191,75,10,0.3)]"
                : "text-[#B5B0A4] hover:text-[#F2EEE6]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>Night</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={condition === "sunlight"}
            onClick={() => setCondition("sunlight")}
            className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
              condition === "sunlight"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md shadow-[rgba(191,75,10,0.3)]"
                : "text-[#B5B0A4] hover:text-[#F2EEE6]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <span>Sunlight</span>
          </button>
        </div>
      </div>

      {/* Two Image Slots Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: First Version (Pastel) */}
        <div className="relative rounded-xl overflow-hidden transition-all duration-300">
          <div className={`transition-all duration-300 ${getPastelFilterClass()}`}>
            <ImageSlot
              label="First version (pastel)"
              aspectRatio="16/10"
              src={digitalSevaImages.firstVersionPastel}
              caption="First version: Soft pastel palette tested in varying light levels."
            />
          </div>
          {/* Sunlight & Shadow Overlay: shows soft pastels washing out in sunlight */}
          {condition === "sunlight" && (
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
            >
              {/* Angled outdoor shadow across top-left */}
              <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.14)_35%,transparent_55%)]" />
              {/* Intense sunlight glare washing out the light colors */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-white/30 to-transparent mix-blend-screen" />
            </div>
          )}
        </div>

        {/* Right: Final Version (Bright) */}
        <div className="relative rounded-xl overflow-hidden transition-all duration-300">
          <div className={`transition-all duration-300 ${getFinalFilterClass()}`}>
            <ImageSlot
              label="Final version (bright)"
              aspectRatio="16/10"
              src={digitalSevaImages.finalVersionBright}
              caption="Final version: High-contrast bright palette holding contrast outdoors."
            />
          </div>
          {/* Sunlight & Shadow Overlay: directional sunlight and cast shadow while keeping the screen sharp & readable */}
          {condition === "sunlight" && (
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
            >
              {/* Natural angled cast shadow (simulating outdoor kiosk awning / shade) */}
              <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.16)_35%,rgba(0,0,0,0.03)_50%,transparent_65%)]" />
              {/* Warm golden sunlight beam across the illuminated area */}
              <div className="absolute inset-0 bg-[linear-gradient(305deg,rgba(251,191,36,0.18)_0%,rgba(254,243,199,0.10)_40%,transparent_70%)] mix-blend-screen" />
              {/* Subtle top-corner sunlight flare */}
              <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-gradient-to-br from-amber-200/25 via-amber-100/10 to-transparent blur-xl pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TryTheLightDemo;
