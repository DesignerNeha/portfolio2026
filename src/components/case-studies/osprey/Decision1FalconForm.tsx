"use client";

import React, { useState } from "react";

interface CftOption {
  cftNumber: string;
  model: string;
  accountingOrder: string;
  wscCode: string;
  kitPartNumber: string;
  qmReleaseDate: string;
  targetDate: string;
}

const cftDatabase: Record<string, CftOption> = {
  "CFT-2026-0891": {
    cftNumber: "CFT-2026-0891",
    model: "Super Great (Heavy Duty)",
    accountingOrder: "AO-77820-JP",
    wscCode: "WSC-4481-B",
    kitPartNumber: "KP-58291-002",
    qmReleaseDate: "2026-03-15",
    targetDate: "2026-06-15",
  },
  "CFT-2026-1042": {
    cftNumber: "CFT-2026-1042",
    model: "Fighter (Medium Duty)",
    accountingOrder: "AO-66419-EU",
    wscCode: "WSC-2930-C",
    kitPartNumber: "KP-41009-084",
    qmReleaseDate: "2026-04-01",
    targetDate: "2026-07-01",
  },
  "CFT-2026-2450": {
    cftNumber: "CFT-2026-2450",
    model: "Canter e-Series (Light EV)",
    accountingOrder: "AO-99124-GL",
    wscCode: "WSC-8114-A",
    kitPartNumber: "KP-93021-115",
    qmReleaseDate: "2026-05-10",
    targetDate: "2026-08-10",
  },
};

export function Decision1FalconForm() {
  const [selectedCft, setSelectedCft] = useState<string>("CFT-2026-0891");
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string>("Synced with FALCON");
  const [draftSaved, setDraftSaved] = useState<boolean>(false);

  const currentData = cftDatabase[selectedCft] || cftDatabase["CFT-2026-0891"];

  const handleSync = () => {
    setIsSyncing(true);
    setSyncStatus("Querying FALCON database...");
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus("Data refreshed in real time from FALCON");
      setTimeout(() => setSyncStatus("Synced with FALCON"), 3000);
    }, 900);
  };

  const handleSaveDraft = () => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2500);
  };

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Top Banner / Sample Data Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(242,238,230,0.08)]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A] animate-pulse" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
            Interactive Demo: FALCON Auto-Fill Flow
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-[rgba(242,238,230,0.06)] border border-[rgba(242,238,230,0.1)] text-[0.75rem] font-mono text-[#B5B0A4]">
          Sample data
        </span>
      </div>

      {/* 4-Step Progress Bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[0.8rem] font-medium text-[#B5B0A4]">
          <span className="text-[#BF4B0A] font-semibold">Step 1 of 4: Campaign Information & Vehicle Scope</span>
          <span>Draft in Progress</span>
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          <div className="h-2 rounded-full bg-[#BF4B0A]" />
          <div className="h-2 rounded-full bg-[rgba(242,238,230,0.1)]" />
          <div className="h-2 rounded-full bg-[rgba(242,238,230,0.1)]" />
          <div className="h-2 rounded-full bg-[rgba(242,238,230,0.1)]" />
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {/* CFT Picker Field */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="cft-picker" className="text-[0.85rem] font-medium text-[#E6E1D8] flex items-center justify-between">
            <span>Pick a CFT Number</span>
            <span className="text-[0.75rem] text-[#BF4B0A]">Select to test auto-population</span>
          </label>
          <select
            id="cft-picker"
            value={selectedCft}
            onChange={(e) => setSelectedCft(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1C1914] border border-[rgba(191,75,10,0.4)] text-[#F2EEE6] text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#BF4B0A] cursor-pointer"
          >
            <option value="CFT-2026-0891">CFT-2026-0891 — Super Great (Heavy Duty)</option>
            <option value="CFT-2026-1042">CFT-2026-1042 — Fighter (Medium Duty)</option>
            <option value="CFT-2026-2450">CFT-2026-2450 — Canter e-Series (Light EV)</option>
          </select>
        </div>

        {/* Auto-filled field 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[0.82rem] font-medium text-[#B5B0A4]">Accounting Order Number</span>
            <span className="text-[0.7rem] px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono">FALCON</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] text-[#F2EEE6] font-mono text-[0.92rem]">
            {currentData.accountingOrder}
          </div>
        </div>

        {/* Auto-filled field 2 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[0.82rem] font-medium text-[#B5B0A4]">WSC Code</span>
            <span className="text-[0.7rem] px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono">FALCON</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] text-[#F2EEE6] font-mono text-[0.92rem]">
            {currentData.wscCode}
          </div>
        </div>

        {/* Auto-filled field 3 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[0.82rem] font-medium text-[#B5B0A4]">Kit Part Number</span>
            <span className="text-[0.7rem] px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono">FALCON</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] text-[#F2EEE6] font-mono text-[0.92rem]">
            {currentData.kitPartNumber}
          </div>
        </div>

        {/* Auto-calculated Target Date */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[0.82rem] font-medium text-[#B5B0A4]">Target Date (Auto-calculated)</span>
            <span className="text-[0.7rem] px-2 py-0.5 rounded bg-[rgba(242,238,230,0.08)] text-[#E6E1D8] font-mono">From QM Release</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] text-[#F2EEE6] font-mono text-[0.92rem] flex items-center justify-between">
            <span>{currentData.targetDate}</span>
            <span className="text-[0.75rem] text-[#B5B0A4]">QM: {currentData.qmReleaseDate}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(242,238,230,0.08)]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSync}
            disabled={isSyncing}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[rgba(191,75,10,0.15)] hover:bg-[rgba(191,75,10,0.25)] border border-[rgba(191,75,10,0.35)] text-[#F2EEE6] text-[0.85rem] font-medium transition-colors cursor-pointer"
          >
            <svg
              className={`w-4 h-4 text-[#BF4B0A] ${isSyncing ? "animate-spin" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
            <span>Sync to FALCON</span>
          </button>
          <span className="text-[0.78rem] text-[#B5B0A4]">{syncStatus}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="px-4 py-2.5 rounded-xl bg-[#1C1914] hover:bg-[#25221B] border border-[rgba(242,238,230,0.15)] text-[#E6E1D8] text-[0.85rem] font-medium transition-colors cursor-pointer"
          >
            {draftSaved ? "✓ Draft Saved" : "Save As Draft"}
          </button>
          <span className="text-[0.78rem] text-[#8C877D]">Next: Vehicle Scope →</span>
        </div>
      </div>
    </div>
  );
}

export default Decision1FalconForm;
