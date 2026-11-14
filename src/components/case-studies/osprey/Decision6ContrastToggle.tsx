"use client";

import React, { useState } from "react";

export function Decision6ContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState<boolean>(true);

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[rgba(242,238,230,0.08)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
            Legibility Inspection: Contrast Switcher
          </span>
        </div>

        {/* Contrast Toggle Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.1)]">
          <button
            type="button"
            onClick={() => setIsHighContrast(false)}
            className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
              !isHighContrast
                ? "bg-[#2A2722] text-[#E6E1D8] shadow-sm"
                : "text-[#8C877D] hover:text-[#E6E1D8]"
            }`}
          >
            Weak contrast
          </button>
          <button
            type="button"
            onClick={() => setIsHighContrast(true)}
            className={`px-3.5 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
              isHighContrast
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-sm"
                : "text-[#8C877D] hover:text-[#E6E1D8]"
            }`}
          >
            Final design
          </button>
        </div>
      </div>

      {/* Comparison Preview Card */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-[0.78rem] text-[#8C877D]">
          <span>
            Current mode:{" "}
            <strong className={isHighContrast ? "text-[#BF4B0A]" : "text-[#736E64]"}>
              {isHighContrast ? "Final design (High legibility for older eyes)" : "Weak contrast (Muted text & muddy actions)"}
            </strong>
          </span>
          <span>Sample data</span>
        </div>

        {/* UI Sample Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
            isHighContrast
              ? "bg-[#1C1914] border-2 border-[rgba(242,238,230,0.22)] shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
              : "bg-[#1E1D1A] border border-[rgba(100,95,85,0.25)] shadow-none"
          }`}
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[rgba(242,238,230,0.08)]">
            <div className="flex flex-col">
              <span
                className={`font-mono text-[0.8rem] uppercase tracking-wider ${
                  isHighContrast ? "text-[#BF4B0A] font-bold" : "text-[#6A6458]"
                }`}
              >
                Campaign FIX-2026-0419
              </span>
              <h4
                className={`text-[1.2rem] font-semibold leading-snug ${
                  isHighContrast ? "text-[#F2EEE6]" : "text-[#857F73]"
                }`}
              >
                Super Great: High-Pressure Fuel Rail Sensor Inspection
              </h4>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider ${
                isHighContrast
                  ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-sm"
                  : "bg-[#2E2B25] text-[#7A7467]"
              }`}
            >
              Pending QM Approval
            </span>
          </div>

          {/* Data fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <span
                className={`text-[0.78rem] uppercase font-mono ${
                  isHighContrast ? "text-[#B5B0A4] font-medium" : "text-[#555046]"
                }`}
              >
                Target Completion
              </span>
              <span
                className={`text-[0.95rem] font-semibold font-mono ${
                  isHighContrast ? "text-[#F2EEE6]" : "text-[#7A7467]"
                }`}
              >
                2026-06-30
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span
                className={`text-[0.78rem] uppercase font-mono ${
                  isHighContrast ? "text-[#B5B0A4] font-medium" : "text-[#555046]"
                }`}
              >
                Vehicle Scope
              </span>
              <span
                className={`text-[0.95rem] font-semibold ${
                  isHighContrast ? "text-[#F2EEE6]" : "text-[#7A7467]"
                }`}
              >
                1,420 units (Japan Domestic)
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span
                className={`text-[0.78rem] uppercase font-mono ${
                  isHighContrast ? "text-[#B5B0A4] font-medium" : "text-[#555046]"
                }`}
              >
                Assigned Reviewer
              </span>
              <span
                className={`text-[0.95rem] font-semibold ${
                  isHighContrast ? "text-[#F2EEE6]" : "text-[#7A7467]"
                }`}
              >
                Quality Management (QM)
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(242,238,230,0.08)]">
            <p
              className={`text-[0.85rem] max-w-md leading-relaxed ${
                isHighContrast ? "text-[#E6E1D8]" : "text-[#6A6458]"
              }`}
            >
              Clear visual hierarchy and distinct button contrast ensure technicians and senior staff never misclick or struggle to parse status.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`px-4 py-2 rounded-xl text-[0.85rem] font-medium transition-colors ${
                  isHighContrast
                    ? "bg-[#25221B] hover:bg-[#322E26] text-[#F2EEE6] border border-[rgba(242,238,230,0.2)]"
                    : "bg-[#22201D] text-[#555046] border border-[#2D2A24]"
                }`}
              >
                Return to Creator
              </button>
              <button
                type="button"
                className={`px-5 py-2 rounded-xl text-[0.85rem] font-bold transition-colors ${
                  isHighContrast
                    ? "bg-[#BF4B0A] hover:bg-[#D95B16] text-[#F2EEE6] shadow-[0_4px_16px_rgba(191,75,10,0.4)]"
                    : "bg-[#42362E] text-[#6E6358]"
                }`}
              >
                Approve Field Fix
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decision6ContrastToggle;
