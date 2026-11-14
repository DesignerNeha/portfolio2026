"use client";

import React, { useState } from "react";
import PhoneSlot from "./PhoneSlot";
import ImageSlot from "../osprey/ImageSlot";
import { pdiImages } from "./pdi-images";

interface RoleConfig {
  id: "supervisor" | "technician" | "admin";
  name: string;
  badge: string;
  whatItDoes: string;
  primaryAction: string;
  location: string;
  slotLabel: string;
  isPhone: boolean;
  src: string;
}

const roles: RoleConfig[] = [
  {
    id: "supervisor",
    name: "Supervisor",
    badge: "Showroom floor",
    whatItDoes:
      "Hands out the work. Sees all vehicles in the showroom, assigns them to a technician, handles vehicles that are not OK, and creates job cards for repair.",
    primaryAction: "Assign vehicles, review Not OK list, generate job cards",
    location: "Dealership Showroom",
    slotLabel: "Supervisor vehicle list",
    isPhone: true,
    src: pdiImages.supervisorVehicleList,
  },
  {
    id: "technician",
    name: "Technician",
    badge: "Workshop inspection bay",
    whatItDoes:
      "Does the inspection. Sees only the vehicles assigned to them and works through the three parts.",
    primaryAction: "Run 3-part guided inspection, flag issues, complete PDI",
    location: "Inspection Bay",
    slotLabel: "Technician assigned list",
    isPhone: true,
    src: pdiImages.technicianAssignedList,
  },
  {
    id: "admin",
    name: "Admin (HMSI)",
    badge: "Headquarters",
    whatItDoes:
      "Looks after the checklist. Decides which checkpoints apply to each vehicle model and tracks every vehicle's PDI.",
    primaryAction: "Configure model checklists & monitor global dealer PDI status",
    location: "HMSI Headquarters",
    slotLabel: "Admin checklist",
    isPhone: false,
    src: pdiImages.adminChecklist,
  },
];

export function PdiRoleSwitcher() {
  const [activeRoleId, setActiveRoleId] = useState<"supervisor" | "technician" | "admin">("supervisor");

  const activeRole = roles.find((r) => r.id === activeRoleId) || roles[0];

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* 3-Role Tab Buttons */}
      <div
        role="tablist"
        aria-label="PDI User Roles"
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
      >
        {roles.map((role) => {
          const isActive = role.id === activeRoleId;
          const isDashed = role.id === "admin";
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveRoleId(role.id)}
              className={`py-3 px-4 rounded-lg text-[0.88rem] font-medium transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                isActive
                  ? "bg-[#DC2626] text-[#F2EEE6] shadow-lg shadow-[rgba(220,38,38,0.3)]"
                  : `text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)] ${
                      isDashed ? "border border-dashed border-[rgba(242,238,230,0.2)]" : ""
                    }`
              }`}
            >
              <span className="font-semibold">{role.name}</span>
              <span
                className={`text-[0.68rem] tracking-wider uppercase font-mono ${
                  isActive ? "text-[#F2EEE6]/80" : "text-[#8C877D]"
                }`}
              >
                {role.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Role Summary Card + Screen Slot */}
      <div
        className={`p-6 sm:p-8 rounded-xl bg-[#12110E] border flex flex-col lg:flex-row items-center gap-8 ${
          activeRole.id === "admin"
            ? "border-dashed border-[rgba(220,38,38,0.4)]"
            : "border-[rgba(242,238,230,0.1)]"
        }`}
      >
        {/* Left: Role Details */}
        <div className="flex-1 flex flex-col gap-4 text-left">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-[0.72rem] font-mono uppercase tracking-wider bg-[rgba(220,38,38,0.15)] text-[#DC2626] border border-[rgba(220,38,38,0.3)]">
              {activeRole.location}
            </span>
            {activeRole.id === "admin" && (
              <span className="px-2.5 py-0.5 rounded text-[0.68rem] font-mono uppercase tracking-wider bg-white/10 text-[#E6E1D8]">
                Dashed Border: Non-Showroom
              </span>
            )}
          </div>

          <h3 className="text-[1.3rem] font-bold text-[#F2EEE6]">
            {activeRole.name}
          </h3>

          <div className="p-4 rounded-lg bg-[#16140F] border border-[rgba(242,238,230,0.06)]">
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] block mb-1">
              What this role does
            </span>
            <p className="text-[0.94rem] text-[#F2EEE6] leading-relaxed">
              {activeRole.whatItDoes}
            </p>
          </div>

          <div className="text-[0.84rem] text-[#B5B0A4] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>Key actions: <strong className="text-[#F2EEE6]">{activeRole.primaryAction}</strong></span>
          </div>
        </div>

        {/* Right: Screen Slot (PhoneSlot for Supervisor & Technician, ImageSlot for HMSI Admin) */}
        <div className="w-full lg:w-[320px] shrink-0 flex justify-center">
          {activeRole.isPhone ? (
            <PhoneSlot
              label={activeRole.slotLabel}
              src={activeRole.src}
              caption={`${activeRole.name} view: Focused solely on what this role needs.`}
            />
          ) : (
            <div className="w-full max-w-[340px]">
              <ImageSlot
                label={activeRole.slotLabel}
                aspectRatio="16/10"
                src={activeRole.src}
                caption="HMSI Admin portal: Web-based checklist & per-model rule manager."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdiRoleSwitcher;
