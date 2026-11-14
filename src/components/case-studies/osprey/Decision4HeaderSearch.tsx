"use client";

import React, { useState, useRef, useEffect } from "react";
import ImageSlot from "./ImageSlot";
import { ospreyImages } from "./osprey-images";

interface SearchResult {
  id: string;
  title: string;
  cft: string;
  region: string;
  status: string;
}

const sampleResults: SearchResult[] = [
  {
    id: "FF-2026-0041",
    title: "Brake booster valve calibration update",
    cft: "CFT-2026-0891",
    region: "Japan & APAC",
    status: "Pending QM Approval",
  },
  {
    id: "FF-2026-0082",
    title: "eCanter high-voltage battery sensor seal",
    cft: "CFT-2026-2450",
    region: "Europe (EU-Central)",
    status: "Released to RC",
  },
  {
    id: "FF-2026-0105",
    title: "Steering knuckle torque audit procedure",
    cft: "CFT-2026-1042",
    region: "Americas / Global",
    status: "In GD Execution",
  },
];

export function Decision4HeaderSearch() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"quick" | "full">("quick");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectRecent = (term: string) => {
    setSearchQuery(term);
    setIsFocused(true);
  };

  const handleSelectChip = (chip: string) => {
    setSearchQuery(chip);
    setIsFocused(true);
  };

  const filteredResults = searchQuery.trim()
    ? sampleResults.filter(
        (r) =>
          r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.cft.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sampleResults;

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(242,238,230,0.08)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#BF4B0A]">
            Interactive Header Search Prototype
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-[rgba(242,238,230,0.06)] border border-[rgba(242,238,230,0.1)] text-[0.75rem] font-mono text-[#B5B0A4]">
          Sample data
        </span>
      </div>

      {/* Simulated Header with Search Bar */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.1)] p-4 flex flex-col gap-3"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#F2EEE6]">
            <span className="text-[#BF4B0A]">OSPREY</span>
            <span className="text-[#8C877D] text-xs">| Global Field Fix</span>
          </div>

          {/* Search Input Box */}
          <div className="relative flex-1 max-w-lg">
            <div className="relative flex items-center">
              <svg
                className="w-4 h-4 text-[#8C877D] absolute left-3.5 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search field fix by CFT, VIN, title, or status..."
                aria-label="Search field fixes"
                className="w-full pl-10 pr-12 py-2.5 rounded-lg bg-[#1C1914] border border-[rgba(242,238,230,0.15)] text-[#F2EEE6] text-[0.88rem] focus:outline-none focus:border-[#BF4B0A] focus:ring-1 focus:ring-[#BF4B0A] placeholder-[#8C877D]"
              />

              <div className="absolute right-3 px-1.5 py-0.5 rounded bg-[#16140F] border border-[rgba(242,238,230,0.1)] text-[0.7rem] font-mono text-[#8C877D]">
                ⌘K
              </div>
            </div>

            {/* Dropdown with Recent Searches & Filter Chips */}
            {isFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 z-30 rounded-xl bg-[#16140F] border border-[rgba(191,75,10,0.35)] shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-4 flex flex-col gap-4">
                {/* Recent Searches */}
                <div className="flex flex-col gap-2">
                  <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D]">
                    Recent Searches
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["CFT-2026-0891", "Brake booster", "eCanter battery", "Pending QM"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => handleSelectRecent(term)}
                        className="px-2.5 py-1 rounded-md text-[0.78rem] bg-[#1C1914] hover:bg-[rgba(191,75,10,0.15)] hover:text-[#BF4B0A] text-[#E6E1D8] border border-[rgba(242,238,230,0.08)] transition-colors cursor-pointer"
                      >
                        ⏱ {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-col gap-2">
                  <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D]">
                    Quick Filter Chips
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Status: Pending QM",
                      "Region: Europe",
                      "Super Great Models",
                      "Target Date: Q2 2026",
                    ].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleSelectChip(chip.split(": ")[1] || chip)}
                        className="px-2.5 py-1 rounded-full text-[0.78rem] bg-[rgba(242,238,230,0.05)] hover:bg-[#BF4B0A] hover:text-[#F2EEE6] text-[#B5B0A4] border border-[rgba(242,238,230,0.1)] transition-colors cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Filtered Results */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[rgba(242,238,230,0.08)]">
                  <div className="flex items-center justify-between text-[0.72rem] font-mono text-[#8C877D]">
                    <span>Results ({filteredResults.length})</span>
                    <span>Click result to inspect</span>
                  </div>
                  <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                    {filteredResults.map((res) => (
                      <div
                        key={res.id}
                        className="p-2.5 rounded-lg bg-[#12110E] hover:bg-[#1F1C16] border border-[rgba(242,238,230,0.06)] flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="text-[0.85rem] font-medium text-[#F2EEE6]">{res.title}</span>
                          <span className="text-[0.75rem] text-[#8C877D] font-mono">
                            {res.id} · {res.cft} · {res.region}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[0.72rem] font-medium bg-[rgba(191,75,10,0.15)] text-[#BF4B0A]">
                          {res.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Screen Tabs: Header Search vs Full Search Screen */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-header-search"
              onClick={() => setViewMode("quick")}
              className={`px-4 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
                viewMode === "quick"
                  ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                  : "bg-[#1C1914] text-[#B5B0A4] hover:text-[#F2EEE6]"
              }`}
            >
              Header Search
            </button>
            <button
              type="button"
              id="btn-search-screen"
              onClick={() => setViewMode("full")}
              className={`px-4 py-1.5 rounded-lg text-[0.82rem] font-medium transition-colors cursor-pointer ${
                viewMode === "full"
                  ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md"
                  : "bg-[#1C1914] text-[#B5B0A4] hover:text-[#F2EEE6]"
              }`}
            >
              Search Screen
            </button>
          </div>
          <span className="text-[0.75rem] text-[#8C877D] font-mono">
            {viewMode === "quick" ? "Direct Header Access" : "Multi-parameter Criteria View"}
          </span>
        </div>

        {viewMode === "quick" ? (
          <ImageSlot
            label="header search"
            aspectRatio="16/11"
            src={ospreyImages.headerSearch}
            caption="Quick search in the persistent header answers 'I know what I'm looking for' in a single keystroke from any page."
          />
        ) : (
          <ImageSlot
            label="full search screen"
            aspectRatio="16/12"
            src={ospreyImages.fullSearchScreen}
            caption="Full search screen answers 'I only know part of it' with comprehensive filters: region, vehicle model, date range, and role stage."
          />
        )}
      </div>
    </div>
  );
}

export default Decision4HeaderSearch;
