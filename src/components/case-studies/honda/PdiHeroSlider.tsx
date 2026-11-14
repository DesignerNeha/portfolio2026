"use client";

import React, { useState, useRef, useCallback } from "react";
import ImageSlot from "../osprey/ImageSlot";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

interface PdiHeroSliderProps {
  initialPosition?: number;
}

export function PdiHeroSlider({ initialPosition = 48 }: PdiHeroSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(Math.round(pct * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full relative rounded-2xl overflow-hidden select-none cursor-ew-resize group border border-[rgba(242,238,230,0.12)] bg-[#12110E]"
        style={{
          // Comfortable wide ratio for hero section above the fold
          aspectRatio: "24/7.2",
          minHeight: "240px",
          maxHeight: "305px",
        }}
      >
        {/* AFTER Layer (Right / Background): 3 Overlapping Phone Screens */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-[#12110E] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          {/* Subtle warm glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Three overlapping phone slots for Initial Check, Functional Check, Road Test */}
          <div className="relative flex items-center justify-center w-full max-w-[560px] h-full translate-x-10 sm:translate-x-14">
            {/* Phone 1: Initial Check (Left / Layer -1) */}
            <div className="absolute left-[6%] sm:left-[10%] top-1/2 -translate-y-1/2 scale-[0.66] sm:scale-[0.72] opacity-80 z-10 transition-transform duration-300">
              <PhoneSlot
                label="Initial check"
                src={pdiImages.heroInitialCheck}
                className="w-[180px] sm:w-[210px]"
              />
            </div>

            {/* Phone 2: Functional Check (Center / Forefront z-30) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-[0.76] sm:scale-[0.82] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-transform duration-300">
              <PhoneSlot
                label="Functional check"
                src={pdiImages.heroFunctionalCheck}
                className="w-[185px] sm:w-[215px]"
              />
            </div>

            {/* Phone 3: Road Test (Right / Layer -1) */}
            <div className="absolute right-[6%] sm:right-[10%] top-1/2 -translate-y-1/2 scale-[0.66] sm:scale-[0.72] opacity-80 z-20 transition-transform duration-300">
              <PhoneSlot
                label="Road test"
                src={pdiImages.heroRoadTest}
                className="w-[180px] sm:w-[210px]"
              />
            </div>
          </div>

          {/* After Tag */}
          <div className="absolute top-3.5 right-3.5 z-40 pointer-events-none">
            <span className="px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider bg-[#DC2626] text-[#F2EEE6] shadow-[0_4px_14px_rgba(220,38,38,0.45)] backdrop-blur-md">
              After: 3-Part Guided Inspection
            </span>
          </div>
        </div>

        {/* BEFORE Layer (Left / Clipped): Paper Checksheet */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-[#16140F] overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          {/* Blueprint / Paper sheet container */}
          <div className="w-full h-full p-4 sm:p-6 flex items-center justify-center">
            {pdiImages.paperChecksheetFull ? (
              <img
                src={pdiImages.paperChecksheetFull}
                alt="Paper checksheet full page"
                className="max-h-full w-auto object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full max-w-[420px] h-[85%] rounded-xl border border-[rgba(242,238,230,0.12)] bg-[#14130F] p-6 flex flex-col justify-between shadow-2xl">
                <div className="flex items-center justify-between border-b border-[rgba(242,238,230,0.1)] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#DC2626]" />
                    <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#B5B0A4]">
                      HMSI Pre-Delivery Inspection Sheet
                    </span>
                  </div>
                  <span className="text-[0.7rem] font-mono text-[#8C877D]">Dio 125</span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 text-[0.75rem] text-[#8C877D] font-mono border-b border-[rgba(242,238,230,0.06)]">
                  <div>Frame No: ME4JC942...</div>
                  <div>Engine No: JC94E...</div>
                  <div>Battery: 12.8V (Handwritten)</div>
                  <div>Key No: 2841</div>
                </div>

                <div className="space-y-1.5 py-2">
                  <div className="flex items-center justify-between text-[0.72rem] text-[#A6A095]">
                    <span>1. Body condition & paint finish</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.72rem] text-[#A6A095]">
                    <span>2. Battery voltage measurement</span>
                    <span className="text-amber-500 font-bold">✓ 12.8V</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.72rem] text-[#A6A095]">
                    <span>3. Horn & switchgear operation</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.72rem] text-[#A6A095]">
                    <span>4. Road test & emission check</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(242,238,230,0.08)] flex items-center justify-between text-[0.68rem] text-[#8C877D]">
                  <span>Signatures: Technician & Sales Rep</span>
                  <span className="text-[#DC2626] font-mono font-medium">Physical Paper Filing</span>
                </div>
              </div>
            )}
          </div>

          {/* Before Tag */}
          <div className="absolute top-3.5 left-3.5 z-40 pointer-events-none">
            <span className="px-3.5 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider bg-[rgba(22,20,15,0.9)] text-[#E6E1D8] border border-[rgba(242,238,230,0.2)] shadow-md backdrop-blur-md">
              Before: One Crowded Paper Sheet
            </span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 z-50 pointer-events-none"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          {/* Vertical line with Honda red glow */}
          <div className="w-[2px] h-full bg-[#DC2626] shadow-[0_0_14px_rgba(220,38,38,0.9)]" />

          {/* Draggable Handle */}
          <div
            role="slider"
            aria-label="Before and after inspection comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#181612] border-2 border-[#DC2626] shadow-[0_4px_18px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#F2EEE6] transition-transform duration-150 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12110E] cursor-grab active:cursor-grabbing"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <div className="w-[1px] h-3 bg-[rgba(242,238,230,0.3)] mx-0.5" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed px-1">
        Drag to compare Honda&apos;s 40+ point paper checksheet against the 3-part guided inspection in My Honda.
      </p>
    </div>
  );
}

export default PdiHeroSlider;
