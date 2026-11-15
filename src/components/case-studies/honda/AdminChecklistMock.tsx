"use client";

import React from "react";
import ImageSlot from "../osprey/ImageSlot";
import { pdiImages } from "./pdi-images";

export function AdminChecklistMock() {
  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header */}
      <div className="flex flex-col gap-1 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Admin Master Management Screens
          </span>
        </div>
        <p className="text-[0.88rem] text-[#B5B0A4] mt-1">
          HMSI admins manage the central checklist, assign rules per vehicle model, and track showroom PDI health.
        </p>
      </div>

      {/* Visual Slots: 2 Admin Screens Side-by-Side in 16:9 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <ImageSlot
          label="Admin checklist configuration"
          aspectRatio="16/9"
          src={pdiImages.adminPerModelCheckpoints}
          caption="1. Admin checklist: Central repository of inspection checkpoints and per-model assignment rules."
        />
        <ImageSlot
          label="Admin vehicle tracking"
          aspectRatio="16/9"
          src={pdiImages.adminVehicleTracking}
          caption="2. Vehicle tracking: Pan-India monitoring of showroom PDI throughput and pending repair cycles."
        />
      </div>
    </div>
  );
}

export default AdminChecklistMock;
