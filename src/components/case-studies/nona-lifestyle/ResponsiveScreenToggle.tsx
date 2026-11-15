"use client";

import React, { useState } from "react";
import ImageSlot from "../osprey/ImageSlot";
import { nonaImages } from "./nona-images";

export function ResponsiveScreenToggle() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const isDesktop = viewMode === "desktop";

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header Bar with Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(242,238,230,0.08)] pb-4">
        <div className="flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A]" />
            <span className="text-[0.8rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              Responsive Adaptation Matrix
            </span>
          </div>
          <p className="text-[0.85rem] text-[#B5B0A4] mt-0.5">
            Switch between desktop procurement and on-the-shop-floor mobile layouts.
          </p>
        </div>

        {/* View Switcher Pill */}
        <div
          role="tablist"
          aria-label="Responsive viewport mode"
          className="flex items-center p-1 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.1)]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={isDesktop}
            onClick={() => setViewMode("desktop")}
            className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
              isDesktop
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md shadow-[rgba(191,75,10,0.3)]"
                : "text-[#B5B0A4] hover:text-[#F2EEE6]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Desktop views</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={!isDesktop}
            onClick={() => setViewMode("mobile")}
            className={`py-1.5 px-3.5 rounded-lg text-[0.82rem] font-medium transition-all cursor-pointer flex items-center gap-2 ${
              !isDesktop
                ? "bg-[#BF4B0A] text-[#F2EEE6] shadow-md shadow-[rgba(191,75,10,0.3)]"
                : "text-[#B5B0A4] hover:text-[#F2EEE6]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <span>Mobile views</span>
          </button>
        </div>
      </div>

      {/* Screen Slots */}
      <div
        className={`grid ${
          isDesktop ? "grid-cols-1 md:grid-cols-3 gap-5" : "grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
        }`}
      >
        {isDesktop ? (
          <>
            <ImageSlot
              label="Size by quantity grid on desktop"
              aspectRatio="auto"
              src={nonaImages.nonaGridDesktop}
              caption="1. Desktop Grid: Rapid tabular data entry across all sizes simultaneously."
            />
            <ImageSlot
              label="Category browsing on desktop"
              aspectRatio="auto"
              src={nonaImages.categoryBrowse}
              caption="2. Desktop Category: Scannable wholesale catalog with bulk volume pricing."
            />
            <ImageSlot
              label="Cart summary on desktop"
              aspectRatio="auto"
              src={nonaImages.dynamicAutoCart}
              caption="3. Desktop Cart: Real-time price breakdown and line-item size distribution."
            />
          </>
        ) : (
          <>
            <ImageSlot
              label="Product & Grid on mobile"
              aspectRatio="auto"
              src={nonaImages.gridMobile}
              caption="1. Mobile Grid: Touch-optimized size inputs and live price tally for ordering directly on the shop floor."
            />
            <ImageSlot
              label="Category on mobile"
              aspectRatio="auto"
              src={nonaImages.categoryMobile}
              caption="2. Mobile Category: Fast-scrolling wholesale product feed with bulk pricing and stock status."
            />
            <ImageSlot
              label="Cart on mobile"
              aspectRatio="auto"
              src={nonaImages.cartMobile}
              caption="3. Mobile Cart: Sticky total and clean breakdown by size before checkout."
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ResponsiveScreenToggle;
