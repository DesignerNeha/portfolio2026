"use client";

import React, { useState } from "react";
import ImageSlot from "./ImageSlot";
import { ospreyImages } from "./osprey-images";

interface RoleConfig {
  id: string;
  name: string;
  slotKey: keyof typeof ospreyImages;
  slotLabel: string;
  whatItDoes: string;
  primaryAction: string;
  keyFeature: string;
}

const roleConfigs: RoleConfig[] = [
  {
    id: "qm-approver",
    name: "QM Approver",
    slotKey: "qmApproverDetail",
    slotLabel: "QM Approver detail",
    whatItDoes: "Sees who has signed and who is pending, can send a reminder, then approves or returns.",
    primaryAction: "Approve / Return Field Fix",
    keyFeature: "Sequential signature queue with reminder triggers",
  },
  {
    id: "cshq-user",
    name: "CSHQ User",
    slotKey: "cshqUserDetail",
    slotLabel: "CSHQ User detail",
    whatItDoes: "Sees what QM approved and uploads the documents each region needs.",
    primaryAction: "Upload Regional Documentation",
    keyFeature: "Region-specific document distribution portal",
  },
  {
    id: "cshq-approver",
    name: "CSHQ Approver",
    slotKey: "cshqApproverDetail",
    slotLabel: "CSHQ Approver detail",
    whatItDoes: "Reviews the details and uploaded documents and can return the field fix if something is wrong.",
    primaryAction: "Release to RC / Return",
    keyFeature: "Audit & compliance verification gate",
  },
  {
    id: "rc-user",
    name: "RC User",
    slotKey: "rcMarketProgress",
    slotLabel: "RC Market Progress",
    whatItDoes: "Gets a Market Progress tab (overall completion, a row and progress ring per market, document upload, Release).",
    primaryAction: "Release to Ground Dealers (GD)",
    keyFeature: "Country-by-country document upload & live completion rings",
  },
  {
    id: "gd-user",
    name: "GD User",
    slotKey: "gdVinStatusUpdate",
    slotLabel: "GD VIN Status Update",
    whatItDoes: "Gets a VIN Status Update tab to select several vehicles and update their status in one go.",
    primaryAction: "Batch Update VIN Status",
    keyFeature: "Multi-select batch vehicle status execution",
  },
];

export function Decision3RoleSwitcher() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const activeRole = roleConfigs[activeRoleIndex];

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Role Switcher Tabs */}
      <div className="flex flex-col gap-2">
        <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#B5B0A4]">
          Role View Switcher — Select a role to inspect its tailored interface:
        </span>
        <div
          role="tablist"
          aria-label="Field Fix Portal Roles"
          className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
        >
          {roleConfigs.map((role, idx) => {
            const isSelected = idx === activeRoleIndex;
            return (
              <button
                key={role.id}
                role="tab"
                id={`tab-${role.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${role.id}`}
                onClick={() => setActiveRoleIndex(idx)}
                className={`px-4 py-2 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                    : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
                }`}
              >
                {role.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Role explanation bar */}
      <div
        id={`panel-${activeRole.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeRole.id}`}
        className="p-4 rounded-xl bg-[rgba(191,75,10,0.08)] border border-[rgba(191,75,10,0.25)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.8rem] font-semibold text-[#BF4B0A] uppercase tracking-wider">
              {activeRole.name} Screen View
            </span>
          </div>
          <p className="text-[0.92rem] text-[#F2EEE6] font-medium leading-snug">
            {activeRole.whatItDoes}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <span className="text-[0.75rem] px-3 py-1 rounded bg-[#16140F] border border-[rgba(242,238,230,0.1)] text-[#E6E1D8] font-mono">
            {activeRole.primaryAction}
          </span>
        </div>
      </div>

      {/* Dynamic ImageSlot for active role */}
      <div className="w-full">
        <ImageSlot
          label={activeRole.slotLabel}
          aspectRatio="16/10"
          src={ospreyImages[activeRole.slotKey]}
          caption={`Adapting to ${activeRole.name}: ${activeRole.keyFeature}. The persistent layout and approval timeline stay anchored while role-specific tools swap dynamically.`}
        />
      </div>
    </div>
  );
}

export default Decision3RoleSwitcher;
