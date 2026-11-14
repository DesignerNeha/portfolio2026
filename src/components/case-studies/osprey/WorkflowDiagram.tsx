"use client";

import React from "react";

export function WorkflowDiagram() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* 6 Sequential Roles Grid (3 per row on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Role 1: QM Creator */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.12)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono font-bold text-sm flex items-center justify-center">
                1
              </span>
              <span className="text-[0.72rem] font-mono text-[#8C877D] uppercase">Initiation</span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">QM Creator</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Creates the field fix and fills in the details.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex items-center justify-between text-[0.78rem] text-[#BF4B0A]">
            <span>Submits to Approver</span>
            <span className="hidden md:inline font-bold">→</span>
            <span className="md:hidden font-bold">↓</span>
          </div>
        </div>

        {/* Role 2: QM Approver (Has Return Arrow to QM Creator) */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(191,75,10,0.3)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#BF4B0A] text-[#F2EEE6] font-mono font-bold text-sm flex items-center justify-center">
                2
              </span>
              <span className="px-2 py-0.5 rounded text-[0.7rem] bg-[rgba(191,75,10,0.2)] text-[#BF4B0A] font-semibold">
                Gate 1
              </span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">QM Approver</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Verifies the details, then approves or returns.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[0.78rem] text-[#A0A83C]">
              <span>Approve → Handoff to CSHQ</span>
              <span className="hidden md:inline font-bold">→</span>
              <span className="md:hidden font-bold">↓</span>
            </div>
            <div className="flex items-center justify-between text-[0.75rem] text-[#E53935] bg-[rgba(229,57,53,0.08)] px-2.5 py-1 rounded-md">
              <span>⮌ Return to QM Creator if invalid</span>
            </div>
          </div>
        </div>

        {/* Role 3: CSHQ User */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.12)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono font-bold text-sm flex items-center justify-center">
                3
              </span>
              <span className="text-[0.72rem] font-mono text-[#8C877D] uppercase">Headquarters</span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">CSHQ User</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Sees what QM approved and uploads the documents each region needs.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex items-center justify-between text-[0.78rem] text-[#BF4B0A]">
            <span>Submits to CSHQ Approver</span>
            <span className="font-bold">↓</span>
          </div>
        </div>

        {/* Role 4: CSHQ Approver (Has Return Arrow to CSHQ User) */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(191,75,10,0.3)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#BF4B0A] text-[#F2EEE6] font-mono font-bold text-sm flex items-center justify-center">
                4
              </span>
              <span className="px-2 py-0.5 rounded text-[0.7rem] bg-[rgba(191,75,10,0.2)] text-[#BF4B0A] font-semibold">
                Gate 2
              </span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">CSHQ Approver</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Reviews the details and uploaded documents and can return the field fix if something is wrong.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[0.78rem] text-[#A0A83C]">
              <span>Approve → Release to RC</span>
              <span className="hidden md:inline font-bold">→</span>
              <span className="md:hidden font-bold">↓</span>
            </div>
            <div className="flex items-center justify-between text-[0.75rem] text-[#E53935] bg-[rgba(229,57,53,0.08)] px-2.5 py-1 rounded-md">
              <span>⮌ Return to CSHQ User if missing docs</span>
            </div>
          </div>
        </div>

        {/* Role 5: RC User */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.12)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono font-bold text-sm flex items-center justify-center">
                5
              </span>
              <span className="text-[0.72rem] font-mono text-[#8C877D] uppercase">Regional Center</span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">RC User</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Sees region-wise documents and progress by market and country, uploads documents country by country, then releases the field fix to GD.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex items-center justify-between text-[0.78rem] text-[#BF4B0A]">
            <span>Releases to Ground Dealers</span>
            <span className="hidden md:inline font-bold">→</span>
            <span className="md:hidden font-bold">↓</span>
          </div>
        </div>

        {/* Role 6: GD User */}
        <div className="relative p-6 rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.12)] flex flex-col justify-between shadow-lg group hover:border-[#BF4B0A] transition-colors">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[rgba(191,75,10,0.15)] text-[#BF4B0A] font-mono font-bold text-sm flex items-center justify-center">
                6
              </span>
              <span className="text-[0.72rem] font-mono text-[#8C877D] uppercase">Ground Dealer</span>
            </div>
            <h4 className="text-[1.15rem] font-semibold text-[#F2EEE6]">GD User</h4>
            <p className="text-[0.92rem] text-[#B5B0A4] leading-relaxed">
              Performs the field fix and updates its status.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[rgba(242,238,230,0.06)] flex items-center justify-between text-[0.78rem] text-[#A0A83C]">
            <span>Fix Complete / Closed</span>
            <span className="font-bold">✓</span>
          </div>
        </div>
      </div>

      {/* Admin Role (7th role, dashed card) */}
      <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#16140F] border-2 border-dashed border-[#BF4B0A]/50 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#BF4B0A] text-[#F2EEE6] text-[0.75rem] font-mono font-bold uppercase tracking-wider">
              Role 7 · System Oversight
            </span>
            <span className="text-[0.75rem] text-[#8C877D]">Master Configuration</span>
          </div>
          <h4 className="text-[1.25rem] font-semibold text-[#F2EEE6]">Admin User</h4>
          <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed">
            Reviews all field fix progress and real-time updates, and runs user management: add or remove users, set access for each role, manage all master modules.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="px-4 py-3 rounded-xl bg-[#1C1914] border border-[rgba(242,238,230,0.1)] text-left">
            <span className="text-[0.7rem] uppercase font-mono text-[#8C877D] block">Capabilities</span>
            <span className="text-[0.85rem] font-medium text-[#F2EEE6]">Role RBAC & User Access</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#1C1914] border border-[rgba(242,238,230,0.1)] text-left">
            <span className="text-[0.7rem] uppercase font-mono text-[#8C877D] block">Supervision</span>
            <span className="text-[0.85rem] font-medium text-[#F2EEE6]">Real-time Global Pulse</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowDiagram;
