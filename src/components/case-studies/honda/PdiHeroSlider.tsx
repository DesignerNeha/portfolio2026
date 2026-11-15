"use client";

import React from "react";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

interface PdiHeroSliderProps {
  initialPosition?: number;
}

export function PdiHeroSlider({ initialPosition = 48 }: PdiHeroSliderProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Two Boxes Side-by-Side: Before (Left) vs After (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {/* =========================================================
            LEFT BOX: BEFORE (Paper Checksheet)
           ========================================================= */}
        <div className="bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 shadow-xl transition-all duration-200 hover:border-[rgba(242,238,230,0.2)]">
          {/* Top Bar with Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C877D]" />
              <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#B5B0A4]">
                Before
              </span>
            </div>
            <span className="text-[0.72rem] font-mono px-3 py-1 rounded-full bg-[#1C1914] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4]">
              Paper Checksheet
            </span>
          </div>

          {/* Visual Display: Crowded Sheet */}
          <div className="w-full h-[340px] sm:h-[380px] rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] p-3 sm:p-4 flex items-center justify-center overflow-hidden relative shadow-inner">
            {pdiImages.paperChecksheetFull ? (
              <img
                src={pdiImages.paperChecksheetFull}
                alt="Before: One crowded paper checksheet"
                className="h-full w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full max-w-[340px] h-[90%] rounded-xl border border-[rgba(242,238,230,0.12)] bg-[#14130F] p-5 flex flex-col justify-between shadow-xl select-none">
                <div className="flex items-center justify-between border-b border-[rgba(242,238,230,0.1)] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#DC2626]" />
                    <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#B5B0A4]">
                      HMSI PDI Sheet
                    </span>
                  </div>
                  <span className="text-[0.7rem] font-mono text-[#8C877D]">Dio 125</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-3 text-[0.72rem] text-[#8C877D] font-mono border-b border-[rgba(242,238,230,0.06)]">
                  <div>Frame: ME4JC942...</div>
                  <div>Engine: JC94E...</div>
                  <div>Battery: 12.8V</div>
                  <div>Key No: 2841</div>
                </div>
                <div className="space-y-1.5 py-2 text-[0.72rem] text-[#A6A095]">
                  <div className="flex items-center justify-between">
                    <span>1. Body & paint finish</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2. Battery voltage</span>
                    <span className="text-amber-500 font-bold">✓ 12.8V</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3. Horn & switches</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4. Road test check</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[rgba(242,238,230,0.08)] flex items-center justify-between text-[0.68rem] text-[#8C877D]">
                  <span>Signatures: Tech & Sales</span>
                  <span className="text-[#DC2626] font-mono">Physical Filing</span>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <h4 className="text-[1.02rem] font-semibold text-[#F2EEE6]">
              One Crowded Paper Sheet
            </h4>
            <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
              40+ checkpoints crammed on a single page, filled by hand with no sequential order and archived physically in binders.
            </p>
          </div>
        </div>

        {/* =========================================================
            RIGHT BOX: AFTER (3-Part Guided Inspection in My Honda)
           ========================================================= */}
        <div className="bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 shadow-xl transition-all duration-200 hover:border-[rgba(220,38,38,0.3)]">
          {/* Top Bar with Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#DC2626]">
                After
              </span>
            </div>
            <span className="text-[0.72rem] font-mono px-3 py-1 rounded-full bg-[rgba(220,38,38,0.12)] border border-[rgba(220,38,38,0.25)] text-[#DC2626] font-medium">
              3-Part Guided Inspection
            </span>
          </div>

          {/* Visual Display: 3 Guided Phones */}
          <div className="w-full h-[340px] sm:h-[380px] rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] p-3 sm:p-4 flex items-center justify-center overflow-hidden relative shadow-inner">
            {/* Subtle warm glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)] pointer-events-none" />

            {/* Three phone slots for Initial Check, Functional Check, Road Test */}
            <div className="relative flex items-center justify-center w-full max-w-[460px] h-full">
              {/* Phone 1: Initial Check (Left / Layer 10) */}
              <div className="absolute left-[2%] sm:left-[6%] top-1/2 -translate-y-1/2 scale-[0.64] sm:scale-[0.72] opacity-85 z-10 transition-transform duration-300 hover:scale-[0.78] hover:opacity-100 hover:z-40">
                <PhoneSlot
                  label="Initial check"
                  src={pdiImages.heroInitialCheck}
                  className="w-[170px] sm:w-[195px]"
                  chassisRadius="rounded-[16px] sm:rounded-[20px]"
                  screenRadius="rounded-[10px] sm:rounded-[14px]"
                />
              </div>

              {/* Phone 2: Functional Check (Center / Forefront z-30) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-[0.76] sm:scale-[0.84] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[0.88]">
                <PhoneSlot
                  label="Functional check"
                  src={pdiImages.heroFunctionalCheck}
                  className="w-[175px] sm:w-[200px]"
                  chassisRadius="rounded-[16px] sm:rounded-[20px]"
                  screenRadius="rounded-[10px] sm:rounded-[14px]"
                />
              </div>

              {/* Phone 3: Road Test (Right / Layer 20) */}
              <div className="absolute right-[2%] sm:right-[6%] top-1/2 -translate-y-1/2 scale-[0.64] sm:scale-[0.72] opacity-85 z-20 transition-transform duration-300 hover:scale-[0.78] hover:opacity-100 hover:z-40">
                <PhoneSlot
                  label="Road test"
                  src={pdiImages.heroRoadTest}
                  className="w-[170px] sm:w-[195px]"
                  chassisRadius="rounded-[16px] sm:rounded-[20px]"
                  screenRadius="rounded-[10px] sm:rounded-[14px]"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <h4 className="text-[1.02rem] font-semibold text-[#F2EEE6]">
              3-Part Digital Module
            </h4>
            <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
              Sequential inspection in My Honda app — Initial check, Functional check, and Road test — with automated VIN parameters.
            </p>
          </div>
        </div>
      </div>

      <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed px-1">
        Comparing Honda&apos;s 40+ point paper checksheet against the 3-part guided digital inspection in My Honda.
      </p>
    </div>
  );
}

export default PdiHeroSlider;
