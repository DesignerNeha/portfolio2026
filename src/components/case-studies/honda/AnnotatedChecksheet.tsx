"use client";

import React, { useState } from "react";
import { pdiImages, checksheetHotspots, ChecksheetHotspot } from "./pdi-images";
import ImageSlot from "../osprey/ImageSlot";

export function AnnotatedChecksheet() {
  const [activeHotspotId, setActiveHotspotId] = useState<string>("hotspot-handwritten");

  const currentHotspot =
    checksheetHotspots.find((h) => h.id === activeHotspotId) || checksheetHotspots[0];

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Top Explanation Bar synced to active hotspot */}
      <div className="p-4 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.1)] flex items-start sm:items-center gap-3.5 min-h-[64px] transition-all duration-200">
        <span className="w-7 h-7 rounded-full bg-[#DC2626] text-[#F2EEE6] font-mono font-bold text-[0.82rem] flex items-center justify-center shrink-0 shadow-md">
          {currentHotspot.number}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-[0.92rem]">
          <span className="font-semibold text-[#F2EEE6]">{currentHotspot.label}:</span>
          <span className="text-[#B5B0A4]">{currentHotspot.explanation}</span>
        </div>
      </div>

      {/* Main Grid: Checksheet with Interactive Hotspots (Left) + Numbered Item List (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive Checksheet Frame (7 cols) */}
        <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[rgba(242,238,230,0.12)] bg-[#12110E] p-4 sm:p-6 shadow-inner">
          <div
            className="w-full relative rounded-lg overflow-hidden border border-[rgba(242,238,230,0.08)] bg-[#171511]"
            style={{ aspectRatio: "3/4" }}
          >
            {pdiImages.paperChecksheetFull ? (
              <img
                src={pdiImages.paperChecksheetFull}
                alt="Original Honda paper checksheet with interactive hotspots"
                className="w-full h-full object-contain block select-none"
              />
            ) : (
              /* Intentional Blueprint Representation of the Dio 125 paper checksheet */
              <div
                className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-left select-none relative"
                style={{
                  backgroundColor: "#16140F",
                  backgroundImage: `
                    linear-gradient(to right, rgba(242, 238, 230, 0.035) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(242, 238, 230, 0.035) 1px, transparent 1px)
                  `,
                  backgroundSize: "28px 28px",
                }}
              >
                {/* Header mock */}
                <div className="border-b border-[rgba(242,238,230,0.1)] pb-3">
                  <span className="text-[0.72rem] font-mono uppercase tracking-widest text-[#DC2626] font-semibold block">
                    Honda Motorcycle & Scooter India (HMSI)
                  </span>
                  <h4 className="text-[0.95rem] font-bold text-[#F2EEE6] mt-0.5">
                    Pre-Delivery Inspection (PDI) Checksheet — Dio 125
                  </h4>
                </div>

                {/* Body diagram placeholder */}
                <div className="my-auto py-4 border-y border-[rgba(242,238,230,0.06)] flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[0.75rem] font-mono text-[#8C877D]">
                    <span>40+ Checkpoints packed on single sheet</span>
                    <span>Random manual order</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[0.72rem] text-[#B5B0A4] font-mono">
                    <div className="p-2 rounded bg-[#12110E] border border-[rgba(242,238,230,0.05)]">
                      • Battery voltage: 12.8V
                    </div>
                    <div className="p-2 rounded bg-[#12110E] border border-[rgba(242,238,230,0.05)]">
                      • Engine & Frame: Handwritten
                    </div>
                    <div className="p-2 rounded bg-[#12110E] border border-[rgba(242,238,230,0.05)]">
                      • Defect lines: 1, 2, 3
                    </div>
                    <div className="p-2 rounded bg-[#12110E] border border-[rgba(242,238,230,0.05)]">
                      • Dual physical signatures
                    </div>
                  </div>
                </div>

                {/* Footer mock */}
                <div className="pt-3 border-t border-[rgba(242,238,230,0.1)] flex justify-between text-[0.7rem] text-[#8C877D] font-mono">
                  <span>Signatures: Tech / Sales</span>
                  <span>Physical Archive</span>
                </div>
              </div>
            )}

            {/* Hotspot Pulsing Markers */}
            {checksheetHotspots.map((hotspot) => {
              const isActive = hotspot.id === activeHotspotId;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  aria-label={`Hotspot ${hotspot.number}: ${hotspot.label}`}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                  onFocus={() => setActiveHotspotId(hotspot.id)}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-[0.8rem] transition-all duration-200 cursor-pointer z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? "bg-[#DC2626] text-[#F2EEE6] scale-125 shadow-[0_0_18px_rgba(220,38,38,0.9)] ring-4 ring-[#DC2626]/30"
                      : "bg-[#181612] text-[#E6E1D8] border border-[rgba(242,238,230,0.3)] shadow-md hover:scale-110 hover:border-[#DC2626]"
                  }`}
                >
                  {hotspot.number}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-[#DC2626]/40 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
          <span className="block mt-2.5 text-[0.72rem] text-center font-mono text-[#8C877D]">
            Hover or tap numbered hotspots on the checksheet
          </span>
        </div>

        {/* Hotspot List & Closeup Slot (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[0.78rem] uppercase font-semibold tracking-wider text-[#DC2626]">
              Five Friction Points
            </span>
            <p className="text-[0.84rem] text-[#B5B0A4] leading-relaxed">
              Every detail was manual, unguided, and dependent on physical paperwork.
            </p>
          </div>

          {/* Hotspot List Items */}
          <div className="flex flex-col gap-2" role="list">
            {checksheetHotspots.map((hotspot) => {
              const isActive = hotspot.id === activeHotspotId;
              return (
                <div
                  key={hotspot.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                  onFocus={() => setActiveHotspotId(hotspot.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveHotspotId(hotspot.id);
                    }
                  }}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                    isActive
                      ? "bg-[#1C1914] border-[#DC2626] shadow-md ring-1 ring-[#DC2626]/40"
                      : "bg-[#12110E] border-[rgba(242,238,230,0.08)] hover:border-[rgba(242,238,230,0.2)]"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full font-mono text-[0.75rem] font-bold flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#DC2626] text-[#F2EEE6]" : "bg-[#25221B] text-[#8C877D]"
                    }`}
                  >
                    {hotspot.number}
                  </span>
                  <div className="flex flex-col">
                    <span
                      className={`text-[0.88rem] font-medium ${
                        isActive ? "text-[#F2EEE6]" : "text-[#B5B0A4]"
                      }`}
                    >
                      {hotspot.label}
                    </span>
                    {isActive && (
                      <span className="text-[0.78rem] text-[#8C877D] mt-0.5 line-clamp-2">
                        {hotspot.explanation}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Paper Checksheet Close-up Slot */}
          <div className="w-full mt-2">
            <ImageSlot
              label="Paper checksheet close-up"
              aspectRatio="16/9"
              src={pdiImages.paperChecksheetCloseup}
              caption="Close-up: 40+ checkpoints crammed beside vehicle diagrams without inspection order."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnotatedChecksheet;
