"use client";

import React, { useState } from "react";
import { exampleCheckpoints, CheckpointCategory } from "./pdi-content";
import PhoneSlot from "./PhoneSlot";
import { pdiImages } from "./pdi-images";

const columns: { id: CheckpointCategory; title: string; subtitle: string }[] = [
  {
    id: "initial",
    title: "1. Initial check",
    subtitle: "Static pre-start checks (battery, fluids, tools, body)",
  },
  {
    id: "functional",
    title: "2. Functional check",
    subtitle: "Stationary operations (brakes, lights, horn, cluster)",
  },
  {
    id: "road",
    title: "3. Road test",
    subtitle: "Dynamic driving (acceleration, suspension, leaks)",
  },
];

export function CheckpointSorter() {
  // Mapping of card ID to current column
  const [cardPositions, setCardPositions] = useState<Record<string, CheckpointCategory>>({
    "battery-voltage": "functional", // First draft
    horn: "road", // First draft
    "oil-level": "functional", // First draft
  });

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const moveCard = (cardId: string, targetCol: CheckpointCategory) => {
    setCardPositions((prev) => ({
      ...prev,
      [cardId]: targetCol,
    }));
    setSelectedCardId(null);
  };

  const showDealersVersion = () => {
    const finalMap: Record<string, CheckpointCategory> = {};
    exampleCheckpoints.forEach((item) => {
      finalMap[item.id] = item.finalCategory;
    });
    setCardPositions(finalMap);
  };

  const resetToFirstDraft = () => {
    const draftMap: Record<string, CheckpointCategory> = {};
    exampleCheckpoints.forEach((item) => {
      draftMap[item.id] = item.firstDraft;
    });
    setCardPositions(draftMap);
  };

  const allInDealersPosition = exampleCheckpoints.every(
    (c) => cardPositions[c.id] === c.finalCategory
  );

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-8 shadow-xl text-[#F2EEE6]">
      {/* Sorter Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <div>
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
              Interactive Sorter
            </span>
            <h4 className="text-[1.05rem] font-bold text-[#F2EEE6]">
              Example checkpoints
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetToFirstDraft}
            className="px-3 py-1.5 rounded-lg text-[0.8rem] font-medium bg-[#12110E] border border-[rgba(242,238,230,0.1)] text-[#B5B0A4] hover:text-[#F2EEE6] hover:bg-[#1C1A14] transition-all cursor-pointer"
          >
            Reset to first draft
          </button>
          <button
            type="button"
            onClick={showDealersVersion}
            className={`px-4 py-1.5 rounded-lg text-[0.82rem] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              allInDealersPosition
                ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                : "bg-[#DC2626] text-[#F2EEE6] hover:bg-[#B91C1C] shadow-md shadow-[rgba(220,38,38,0.4)]"
            }`}
          >
            {allInDealersPosition ? "✓ Dealer's layout applied" : "Show dealers' version"}
          </button>
        </div>
      </div>

      <p className="text-[0.88rem] text-[#B5B0A4] -mt-3 text-left">
        Tap a card to select it, then tap any column to move it. Cards reveal their functional reasoning once placed in the dealers&apos; verified category.
      </p>

      {/* 3 Columns Sorter Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {columns.map((col) => {
          const cardsInCol = exampleCheckpoints.filter(
            (c) => cardPositions[c.id] === col.id
          );

          return (
            <div
              key={col.id}
              onClick={() => {
                if (selectedCardId) {
                  moveCard(selectedCardId, col.id);
                }
              }}
              className={`p-4 rounded-xl border flex flex-col gap-3 min-h-[220px] transition-all duration-200 ${
                selectedCardId
                  ? "bg-[#181612] border-[#DC2626]/50 ring-1 ring-[#DC2626]/20 cursor-pointer"
                  : "bg-[#12110E] border-[rgba(242,238,230,0.08)]"
              }`}
            >
              {/* Column Header */}
              <div className="border-b border-[rgba(242,238,230,0.08)] pb-2.5">
                <span className="text-[0.92rem] font-semibold text-[#F2EEE6] block">
                  {col.title}
                </span>
                <span className="text-[0.72rem] text-[#8C877D] block mt-0.5 line-clamp-1">
                  {col.subtitle}
                </span>
              </div>

              {/* Cards inside this column */}
              <div className="flex flex-col gap-2.5 flex-1">
                {cardsInCol.length === 0 ? (
                  <div className="h-full flex items-center justify-center border border-dashed border-[rgba(242,238,230,0.06)] rounded-lg p-4 text-[0.75rem] font-mono text-[#8C877D] text-center">
                    {selectedCardId ? "Tap to place card here" : "Empty category"}
                  </div>
                ) : (
                  cardsInCol.map((card) => {
                    const isSelected = selectedCardId === card.id;
                    const isCorrect = cardPositions[card.id] === card.finalCategory;

                    return (
                      <div
                        key={card.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCardId(isSelected ? null : card.id);
                        }}
                        className={`p-3.5 rounded-lg border text-left transition-all duration-150 cursor-pointer flex flex-col gap-2 ${
                          isSelected
                            ? "bg-[#252018] border-[#DC2626] ring-2 ring-[#DC2626]/60 shadow-lg"
                            : isCorrect
                            ? "bg-[#191712] border-emerald-500/40 shadow-sm"
                            : "bg-[#171510] border-[rgba(242,238,230,0.12)] hover:border-[rgba(242,238,230,0.3)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[0.88rem] font-medium text-[#F2EEE6]">
                            {card.name}
                          </span>
                          <span
                            className={`text-[0.68rem] font-mono px-2 py-0.5 rounded ${
                              isCorrect
                                ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/60"
                                : "bg-amber-950/60 text-amber-300 border border-amber-800/60"
                            }`}
                          >
                            {isCorrect ? "Dealers' verified" : "First draft"}
                          </span>
                        </div>

                        {/* Reason reveal */}
                        {isCorrect ? (
                          <div className="p-2 rounded bg-black/30 border border-emerald-500/20 text-[0.78rem] text-emerald-200/90 leading-snug">
                            <strong>Why:</strong> {card.reason}
                          </div>
                        ) : (
                          <span className="text-[0.72rem] text-[#8C877D] italic">
                            Originally in {card.firstDraftLabel} — tap to move to dealer final place
                          </span>
                        )}

                        {/* Quick move buttons if selected */}
                        {isSelected && (
                          <div className="mt-1 pt-2 border-t border-[rgba(242,238,230,0.08)] flex items-center justify-between gap-1">
                            <span className="text-[0.68rem] font-mono text-[#DC2626]">Move to:</span>
                            <div className="flex gap-1">
                              {columns.map((c) => (
                                <button
                                  key={c.id}
                                  type="button"
                                  disabled={cardPositions[card.id] === c.id}
                                  onClick={(ev) => {
                                    ev.stopPropagation();
                                    moveCard(card.id, c.id);
                                  }}
                                  className="px-2 py-0.5 text-[0.68rem] rounded bg-[#201E18] hover:bg-[#DC2626] text-[#E6E1D8] disabled:opacity-30 disabled:hover:bg-[#201E18]"
                                >
                                  {c.title.split(".")[1]?.trim() || c.id}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Depth Presentation: 3 PhoneSlots Side-by-Side (Overlapping for Depth) */}
      <div className="pt-6 border-t border-[rgba(242,238,230,0.08)] flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[0.82rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Visual Depth: The 3 Inspection Interfaces
          </span>
          <p className="text-[0.84rem] text-[#B5B0A4]">
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
    </div>
  );
}

export default CheckpointSorter;
