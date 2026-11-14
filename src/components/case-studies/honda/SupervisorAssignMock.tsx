"use client";

import React, { useState } from "react";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

type TabView = "pending" | "assigned" | "not-ok" | "completed";

interface SampleVehicle {
  id: string;
  name: string;
  model: string;
  frameNo: string;
  status: TabView;
  assignedTechnician?: string;
}

const initialVehicles: SampleVehicle[] = [
  {
    id: "v-a",
    name: "Sample vehicle A",
    model: "Activa 125",
    frameNo: "ME4JC942...01",
    status: "pending",
  },
  {
    id: "v-b",
    name: "Sample vehicle B",
    model: "Dio 125",
    frameNo: "ME4JC942...02",
    status: "pending",
  },
  {
    id: "v-c",
    name: "Sample vehicle C",
    model: "Shine 100",
    frameNo: "ME4JC942...03",
    status: "pending",
  },
  {
    id: "v-d",
    name: "Sample vehicle D",
    model: "SP 125",
    frameNo: "ME4JC942...04",
    status: "not-ok",
  },
];

export function SupervisorAssignMock() {
  const [activeTab, setActiveTab] = useState<TabView>("pending");
  const [vehicles, setVehicles] = useState<SampleVehicle[]>(initialVehicles);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("Sample technician 1");
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllPending = () => {
    const pendingIds = vehicles
      .filter((v) => v.status === "pending")
      .map((v) => v.id);
    setSelectedIds(pendingIds);
  };

  const handleAssign = () => {
    if (selectedIds.length === 0) return;
    setVehicles((prev) =>
      prev.map((v) =>
        selectedIds.includes(v.id)
          ? { ...v, status: "assigned", assignedTechnician: selectedTech }
          : v
      )
    );
    setSelectedIds([]);
    setIsPickerOpen(false);
    setActiveTab("assigned");
  };

  const handleReset = () => {
    setVehicles(initialVehicles);
    setSelectedIds([]);
    setActiveTab("pending");
  };

  const currentTabVehicles = vehicles.filter((v) => v.status === activeTab);

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Interactive Working Mock • Sample Data
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-[0.75rem] font-mono text-[#8C877D] hover:text-[#F2EEE6] transition-colors cursor-pointer"
        >
          Reset sample data
        </button>
      </div>

      {/* Main 4 Tabs */}
      <div
        role="tablist"
        aria-label="Supervisor Vehicle Views"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)]"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "pending"}
          onClick={() => setActiveTab("pending")}
          className={`py-2 px-3 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center justify-between ${
            activeTab === "pending"
              ? "bg-[#DC2626] text-[#F2EEE6] shadow-md"
              : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#1A1813]"
          }`}
        >
          <span>Pending PDI</span>
          <span className="text-[0.7rem] px-1.5 py-0.2 rounded-full bg-black/25">
            {vehicles.filter((v) => v.status === "pending").length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "assigned"}
          onClick={() => setActiveTab("assigned")}
          className={`py-2 px-3 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center justify-between ${
            activeTab === "assigned"
              ? "bg-[#DC2626] text-[#F2EEE6] shadow-md"
              : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#1A1813]"
          }`}
        >
          <span>Assigned</span>
          <span className="text-[0.7rem] px-1.5 py-0.2 rounded-full bg-black/25">
            {vehicles.filter((v) => v.status === "assigned").length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "not-ok"}
          onClick={() => setActiveTab("not-ok")}
          className={`py-2 px-3 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center justify-between ${
            activeTab === "not-ok"
              ? "bg-[#DC2626] text-[#F2EEE6] shadow-md"
              : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#1A1813]"
          }`}
        >
          <span>Not OK</span>
          <span className="text-[0.7rem] px-1.5 py-0.2 rounded-full bg-black/25">
            {vehicles.filter((v) => v.status === "not-ok").length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "completed"}
          onClick={() => setActiveTab("completed")}
          className={`py-2 px-3 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center justify-between ${
            activeTab === "completed"
              ? "bg-[#DC2626] text-[#F2EEE6] shadow-md"
              : "text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#1A1813]"
          }`}
        >
          <span>Completed PDI</span>
          <span className="text-[0.7rem] px-1.5 py-0.2 rounded-full bg-black/25">
            {vehicles.filter((v) => v.status === "completed").length}
          </span>
        </button>
      </div>

      {/* Action Toolbar for Pending PDI */}
      {activeTab === "pending" && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.06)]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={selectAllPending}
              className="px-2.5 py-1 rounded text-[0.75rem] font-mono bg-[#1B1914] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4] hover:text-[#F2EEE6]"
            >
              Select all pending
            </button>
            <span className="text-[0.78rem] text-[#8C877D] font-mono">
              {selectedIds.length} vehicle(s) selected
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Technician Picker */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="py-1.5 px-3 rounded-lg text-[0.8rem] bg-[#1A1813] border border-[rgba(242,238,230,0.15)] text-[#F2EEE6] focus:border-[#DC2626] outline-none"
            >
              <option value="Sample technician 1">Sample technician 1</option>
              <option value="Sample technician 2">Sample technician 2</option>
            </select>

            <button
              type="button"
              disabled={selectedIds.length === 0}
              onClick={handleAssign}
              className="py-1.5 px-4 rounded-lg text-[0.82rem] font-semibold bg-[#DC2626] text-[#F2EEE6] hover:bg-[#B91C1C] disabled:opacity-30 disabled:hover:bg-[#DC2626] transition-all cursor-pointer shadow-md"
            >
              Assign technician ({selectedIds.length})
            </button>
          </div>
        </div>
      )}

      {/* Vehicle Card List in Active Tab */}
      <div className="flex flex-col gap-2 text-left">
        {currentTabVehicles.length === 0 ? (
          <div className="p-8 rounded-xl bg-[#12110E] border border-dashed border-[rgba(242,238,230,0.08)] text-center text-[0.85rem] text-[#8C877D]">
            No vehicles currently in {activeTab}.
          </div>
        ) : (
          currentTabVehicles.map((vehicle) => {
            const isSelected = selectedIds.includes(vehicle.id);
            return (
              <div
                key={vehicle.id}
                onClick={() => activeTab === "pending" && toggleSelect(vehicle.id)}
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                  activeTab === "pending"
                    ? "cursor-pointer hover:border-[rgba(242,238,230,0.25)]"
                    : ""
                } ${
                  isSelected
                    ? "bg-[#1E1A14] border-[#DC2626] ring-1 ring-[#DC2626]"
                    : "bg-[#12110E] border-[rgba(242,238,230,0.08)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {activeTab === "pending" && (
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(vehicle.id)}
                      className="w-4 h-4 rounded accent-[#DC2626] cursor-pointer"
                    />
                  )}
                  <div>
                    <span className="text-[0.92rem] font-semibold text-[#F2EEE6] block">
                      {vehicle.name}{" "}
                      <span className="text-[0.78rem] text-[#8C877D] font-normal">
                        ({vehicle.model})
                      </span>
                    </span>
                    <span className="text-[0.72rem] font-mono text-[#8C877D]">
                      Frame: {vehicle.frameNo}
                    </span>
                  </div>
                </div>

                <div>
                  {vehicle.status === "assigned" && (
                    <span className="px-2.5 py-1 rounded-full text-[0.72rem] font-mono bg-blue-950/60 text-blue-300 border border-blue-800/60">
                      Assigned to: {vehicle.assignedTechnician}
                    </span>
                  )}
                  {vehicle.status === "not-ok" && (
                    <span className="px-2.5 py-1 rounded-full text-[0.72rem] font-mono bg-amber-950/60 text-amber-300 border border-amber-800/60">
                      Flagged for repair
                    </span>
                  )}
                  {vehicle.status === "completed" && (
                    <span className="px-2.5 py-1 rounded-full text-[0.72rem] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                      Passed inspection
                    </span>
                  )}
                  {vehicle.status === "pending" && (
                    <span className="text-[0.78rem] font-mono text-[#8C877D]">
                      Waiting for assignment
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Visual Slots: 4 PhoneScreens Side-by-side representing the Supervisor flows */}
      <div className="pt-6 border-t border-[rgba(242,238,230,0.08)] flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Supervisor Interface Modules
          </span>
          <p className="text-[0.84rem] text-[#B5B0A4]">
            Four core views empower supervisors to orchestrate vehicle assignments and status tracking.
          </p>
        </div>

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
    </div>
  );
}

export default SupervisorAssignMock;
