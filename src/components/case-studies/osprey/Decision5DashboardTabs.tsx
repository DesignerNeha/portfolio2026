"use client";

import React, { useState } from "react";
import ImageSlot from "./ImageSlot";
import { ospreyImages } from "./osprey-images";

export function Decision5DashboardTabs() {
  const [activeTab, setActiveTab] = useState<"budget" | "parts" | "prep">("budget");

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-8 shadow-xl text-[#F2EEE6]">
      {/* 3-Tab Switcher Component */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
              QM Role Dashboard — Tabbed Module Switcher
            </span>
          </div>
          <span className="text-[0.75rem] font-mono text-[#8C877D]">
            Single-viewport layout
          </span>
        </div>

        {/* Tab Buttons */}
        <div
          role="tablist"
          aria-label="QM Dashboard Section Tabs"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "budget"}
            onClick={() => setActiveTab("budget")}
            className={`py-2.5 px-4 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "budget"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
            }`}
          >
            1. Budget Monitoring
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "parts"}
            onClick={() => setActiveTab("parts")}
            className={`py-2.5 px-4 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "parts"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
            }`}
          >
            2. Part Details
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "prep"}
            onClick={() => setActiveTab("prep")}
            className={`py-2.5 px-4 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "prep"
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)]"
            }`}
          >
            3. Preparation Status
          </button>
        </div>

        {/* Active Tab Screen Slot */}
        <div className="w-full mt-2">
          {activeTab === "budget" && (
            <ImageSlot
              label="QM dashboard: Budget monitoring"
              aspectRatio="16/9"
              src={ospreyImages.qmDashboardBudget}
              caption="Tab 1: Budget monitoring shows allocated campaign expenditure, cost burn, and warranty claim tracking in real time."
            />
          )}
          {activeTab === "parts" && (
            <ImageSlot
              label="QM dashboard: Part details"
              aspectRatio="16/9"
              src={ospreyImages.qmDashboardPartDetails}
              caption="Tab 2: Part details presents replacement kit inventories, superseded part codes, and supplier delivery readiness."
            />
          )}
          {activeTab === "prep" && (
            <ImageSlot
              label="QM dashboard: Field fix preparation status"
              aspectRatio="16/9"
              src={ospreyImages.qmDashboardPrepStatus}
              caption="Tab 3: Field fix preparation status tracks bulletin readiness, technician training guides, and market sign-offs."
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Decision5DashboardTabs;
