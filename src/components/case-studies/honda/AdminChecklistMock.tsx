"use client";

import React, { useState } from "react";
import ImageSlot from "../osprey/ImageSlot";
import { pdiImages } from "./pdi-images";

interface ModelPreset {
  id: "model-a" | "model-b";
  name: string;
  category: string;
  activeCheckpointIds: string[];
}

interface CheckpointItem {
  id: string;
  label: string;
  section: string;
}

const checkListItems: CheckpointItem[] = [
  { id: "cp-1", label: "Battery voltage measurement (Pre-start)", section: "Initial check" },
  { id: "cp-2", label: "MIL (Malfunction Indicator Lamp) code read", section: "Initial check" },
  { id: "cp-3", label: "Tool kit & physical owner manual present", section: "Initial check" },
  { id: "cp-4", label: "Front combi-brake operation", section: "Functional check" },
  { id: "cp-5", label: "Side stand engine inhibitor switch", section: "Functional check" },
  { id: "cp-6", label: "LED headlamp high/low beam focus", section: "Functional check" },
  { id: "cp-7", label: "Idling Stop System (ISS) activation", section: "Road test" },
  { id: "cp-8", label: "Exhaust tailpipe emission test (BS-VI)", section: "Road test" },
  { id: "cp-9", label: "Rear mono-suspension rebound check", section: "Road test" },
];

const modelPresets: Record<"model-a" | "model-b", ModelPreset> = {
  "model-a": {
    id: "model-a",
    name: "Sample model A",
    category: "Scooter (Activa / Dio)",
    activeCheckpointIds: ["cp-1", "cp-2", "cp-3", "cp-4", "cp-6", "cp-7", "cp-8"],
  },
  "model-b": {
    id: "model-b",
    name: "Sample model B",
    category: "Motorcycle (Shine / SP125)",
    activeCheckpointIds: ["cp-1", "cp-2", "cp-3", "cp-5", "cp-6", "cp-8", "cp-9"],
  },
};

export function AdminChecklistMock() {
  const [selectedModel, setSelectedModel] = useState<"model-a" | "model-b">("model-a");
  const [toggles, setToggles] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    checkListItems.forEach((item) => {
      initial[item.id] = modelPresets["model-a"].activeCheckpointIds.includes(item.id);
    });
    return initial;
  });

  const handleModelChange = (modelId: "model-a" | "model-b") => {
    setSelectedModel(modelId);
    const updated: Record<string, boolean> = {};
    checkListItems.forEach((item) => {
      updated[item.id] = modelPresets[modelId].activeCheckpointIds.includes(item.id);
    });
    setToggles(updated);
  };

  const toggleCheckpoint = (id: string) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeCount = Object.values(toggles).filter(Boolean).length;

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Mock Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            HMSI Admin Configuration Panel • Sample Data
          </span>
        </div>
        <span className="text-[0.75rem] font-mono text-[#8C877D]">
          {activeCount} active checks for {modelPresets[selectedModel].name}
        </span>
      </div>

      {/* Model Picker */}
      <div className="p-4 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D] block">
            Select vehicle model to configure
          </span>
          <span className="text-[0.92rem] font-semibold text-[#F2EEE6]">
            {modelPresets[selectedModel].name} — {modelPresets[selectedModel].category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {(["model-a", "model-b"] as const).map((modelId) => {
            const isActive = selectedModel === modelId;
            return (
              <button
                key={modelId}
                type="button"
                onClick={() => handleModelChange(modelId)}
                className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-[#F2EEE6] shadow-md shadow-[rgba(220,38,38,0.3)]"
                    : "bg-[#181611] text-[#B5B0A4] hover:text-[#F2EEE6] border border-[rgba(242,238,230,0.08)]"
                }`}
              >
                {modelPresets[modelId].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Checkpoint Toggle List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-left">
        {checkListItems.map((item) => {
          const isOn = Boolean(toggles[item.id]);

          return (
            <div
              key={item.id}
              onClick={() => toggleCheckpoint(item.id)}
              className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                isOn
                  ? "bg-[#181611] border-[#DC2626]/40 shadow-sm"
                  : "bg-[#12110E] border-[rgba(242,238,230,0.05)] opacity-60"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-[0.88rem] font-medium text-[#F2EEE6]">
                  {item.label}
                </span>
                <span className="text-[0.7rem] font-mono text-[#8C877D] mt-0.5">
                  Section: {item.section}
                </span>
              </div>

              {/* Toggle switch visual */}
              <div
                className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                  isOn ? "bg-[#DC2626]" : "bg-[#25221B]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow ${
                    isOn ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Slots: 3 Admin Slots */}
      <div className="pt-6 border-t border-[rgba(242,238,230,0.08)] flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Admin Master Management Screens
          </span>
          <p className="text-[0.84rem] text-[#B5B0A4]">
            HMSI admins manage the central checklist, assign rules per vehicle model, and track showroom PDI health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageSlot
            label="Admin checklist"
            aspectRatio="16/10"
            src={pdiImages.adminChecklist}
            caption="1. Admin checklist: Master repository of all standardized inspection points."
          />
          <ImageSlot
            label="Admin per-model checkpoints"
            aspectRatio="16/10"
            src={pdiImages.adminPerModelCheckpoints}
            caption="2. Per-model checkpoints: Assigning specific verification rules per scooter and motorcycle model."
          />
          <ImageSlot
            label="Admin vehicle tracking"
            aspectRatio="16/10"
            src={pdiImages.adminVehicleTracking}
            caption="3. Vehicle tracking: Pan-India monitoring of showroom PDI throughput and pending repair cycles."
          />
        </div>
      </div>
    </div>
  );
}

export default AdminChecklistMock;
