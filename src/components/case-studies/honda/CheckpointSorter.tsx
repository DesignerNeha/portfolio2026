"use client";

import React from "react";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

export function CheckpointSorter() {
  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      <div className="flex flex-col gap-1 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            The 3 Inspection Interfaces
          </span>
        </div>
        <p className="text-[0.88rem] text-[#B5B0A4] mt-1">
          Technicians move through Initial check, Functional check, and Road test in strict sequence.
        </p>
      </div>

      {/* 3 PhoneSlots overlapping gracefully on large screens */}
      <div className="w-full py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:-space-x-8 overflow-x-auto">
        <div className="shrink-0 z-10 transition-transform duration-300 hover:z-40 hover:scale-105">
          <PhoneSlot
            label="Initial check screen"
            src={pdiImages.initialCheckScreen}
            caption="Part 1: Body condition, tool kit, battery, fuses, MIL code."
            className="w-[240px] sm:w-[260px]"
          />
        </div>

        <div className="shrink-0 z-30 transition-transform duration-300 hover:z-40 hover:scale-105 shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
          <PhoneSlot
            label="Functional check screen"
            src={pdiImages.functionalCheckScreen}
            caption="Part 2: Handlebars, brakes, tyres, lights, switches, horn."
            className="w-[250px] sm:w-[270px]"
          />
        </div>

        <div className="shrink-0 z-20 transition-transform duration-300 hover:z-40 hover:scale-105">
          <PhoneSlot
            label="Road test screen"
            src={pdiImages.roadTestScreen}
            caption="Part 3: Driving performance, suspension, leaks, emission check."
            className="w-[240px] sm:w-[260px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckpointSorter;
