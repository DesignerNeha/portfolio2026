"use client";

import React from "react";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

export function SupervisorAssignMock() {
  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header */}
      <div className="flex flex-col gap-1 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Supervisor Interface Modules
          </span>
        </div>
        <p className="text-[0.88rem] text-[#B5B0A4] mt-1">
          Four core views empower supervisors to orchestrate vehicle assignments and status tracking.
        </p>
      </div>

      {/* Visual Slots: 4 PhoneScreens Side-by-side representing the Supervisor flows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PhoneSlot
          label="Supervisor vehicle list"
          src={pdiImages.supervisorVehicleList}
          caption="1. Vehicle list: All inventory waiting on showroom floor."
        />
        <PhoneSlot
          label="Supervisor multi-select"
          src={pdiImages.supervisorMultiSelect}
          caption="2. Multi-select: Check multiple vehicles in one pass."
        />
        <PhoneSlot
          label="Assign technician list"
          src={pdiImages.assignTechnicianList}
          caption="3. Technician list: Assign batch to designated inspector."
        />
        <PhoneSlot
          label="Supervisor four views"
          src={pdiImages.supervisorFourViews}
          caption="4. Four views: Pending PDI, Assigned, Not OK, Completed."
        />
      </div>
    </div>
  );
}

export default SupervisorAssignMock;
