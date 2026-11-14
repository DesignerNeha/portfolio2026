"use client";

import React, { useState } from "react";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

export function SharedPatternsCompare() {
  const [showPatterns, setShowPatterns] = useState<boolean>(false);

  const hasBothScreens = Boolean(
    pdiImages.existingMyHondaScreen?.trim() && pdiImages.pdiScreen?.trim()
  );

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header & Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Design Language Continuity
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowPatterns(!showPatterns)}
          className={`py-1.5 px-4 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
            showPatterns
              ? "bg-[#DC2626] text-[#F2EEE6] shadow-md shadow-[rgba(220,38,38,0.3)]"
              : "bg-[#12110E] border border-[rgba(242,238,230,0.15)] text-[#B5B0A4] hover:text-[#F2EEE6]"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              showPatterns ? "bg-white" : "bg-[#8C877D]"
            }`}
          />
          <span>Show shared patterns</span>
        </button>
      </div>

      <p className="text-[0.85rem] text-[#B5B0A4] text-left">
        The PDI module inherits the existing My Honda typography, header styling, button hierarchy, and navigation tabs so dealership teams feel instantly at home.
      </p>

      {/* Side-by-Side 2 PhoneSlots */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 py-4">
        <div className="relative">
          <PhoneSlot
            label="An existing My Honda screen"
            src={pdiImages.existingMyHondaScreen}
            caption="Baseline: Existing My Honda app interface."
            className="w-[260px] sm:w-[280px]"
          />
          {/* Shared pattern highlights only visible when enabled and image is present */}
          {showPatterns && hasBothScreens && (
            <div className="absolute inset-0 border-2 border-dashed border-[#DC2626] rounded-[38px] pointer-events-none animate-pulse" />
          )}
        </div>

        <div className="relative">
          <PhoneSlot
            label="A PDI screen"
            src={pdiImages.pdiScreen}
            caption="New module: PDI inspection interface using identical design tokens."
            className="w-[260px] sm:w-[280px]"
          />
          {showPatterns && hasBothScreens && (
            <div className="absolute inset-0 border-2 border-dashed border-[#DC2626] rounded-[38px] pointer-events-none animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SharedPatternsCompare;
