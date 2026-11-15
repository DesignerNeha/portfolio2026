"use client";

import React, { useState, useId } from "react";

const SIZES = ["S", "M", "L", "XL"] as const;
type SizeKey = (typeof SIZES)[number];

const PRICE_PER_UNIT = 12.5; // Sample unit price
const MIN_UNITS_PER_SIZE = 25; // Minimum quantity per size when selected

export function BulkOrderCalculator() {
  const [quantities, setQuantities] = useState<Record<SizeKey, number>>({
    S: 100,
    M: 150,
    L: 120,
    XL: 80,
  });

  const [addedToCart, setAddedToCart] = useState(false);
  const baseId = useId();

  const handleInputChange = (size: SizeKey, value: string) => {
    setAddedToCart(false);
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [size]: 0 }));
      return;
    }
    const parsed = parseInt(value, 10);
    setQuantities((prev) => ({
      ...prev,
      [size]: isNaN(parsed) ? 0 : Math.max(0, parsed),
    }));
  };

  const handleReset = () => {
    setQuantities({ S: 100, M: 150, L: 120, XL: 80 });
    setAddedToCart(false);
  };

  const totalUnits = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = totalUnits * PRICE_PER_UNIT;

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl text-[#F2EEE6]">
      {/* Header Bar with Sample Data Label */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(242,238,230,0.08)] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BF4B0A] animate-pulse" />
          <span className="text-[0.78rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
            Interactive Working Mock
          </span>
          <span className="text-[0.7rem] font-mono uppercase px-2 py-0.5 rounded bg-[rgba(191,75,10,0.15)] border border-[rgba(191,75,10,0.3)] text-[#F2EEE6]">
            Sample data
          </span>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-[0.75rem] font-mono text-[#8C877D] hover:text-[#F2EEE6] transition-colors cursor-pointer"
        >
          Reset sample numbers
        </button>
      </div>

      <div className="flex flex-col gap-1 text-left">
        <h4 className="text-[1.1rem] font-semibold text-[#F2EEE6]">
          Size × Quantity Bulk Input Grid
        </h4>
        <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
          Type quantities across sizes in one pass. Tab between fields to input an entire size run without opening multiple menus.
        </p>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {SIZES.map((size) => {
          const qty = quantities[size];
          const hasInput = qty > 0;
          const isUnderMin = hasInput && qty < MIN_UNITS_PER_SIZE;
          const inputId = `${baseId}-size-${size}`;

          return (
            <div
              key={size}
              className={`p-4 rounded-xl border flex flex-col justify-between gap-3 transition-all ${
                isUnderMin
                  ? "bg-[#1E140F] border-[#BF4B0A] ring-1 ring-[#BF4B0A]/40"
                  : "bg-[#12110E] border-[rgba(242,238,230,0.08)] hover:border-[rgba(242,238,230,0.2)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <label htmlFor={inputId} className="text-[1.05rem] font-bold text-[#F2EEE6]">
                  Size {size}
                </label>
                <span className="text-[0.72rem] font-mono text-[#8C877D]">
                  Min: {MIN_UNITS_PER_SIZE} pcs
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id={inputId}
                  type="number"
                  min="0"
                  step="5"
                  value={qty === 0 ? "" : qty}
                  onChange={(e) => handleInputChange(size, e.target.value)}
                  placeholder="0"
                  className="w-full bg-[#181611] border border-[rgba(242,238,230,0.15)] rounded-lg px-3.5 py-2 text-[#F2EEE6] text-right font-mono text-[1.05rem] focus:outline-none focus:border-[#BF4B0A] focus:ring-1 focus:ring-[#BF4B0A] transition-all"
                />
                <span className="text-[0.78rem] text-[#8C877D] font-mono shrink-0">units</span>
              </div>

              {/* Warning on box under minimum */}
              {isUnderMin ? (
                <div className="flex items-center gap-1.5 text-[0.72rem] font-mono text-[#BF4B0A]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Under minimum ({MIN_UNITS_PER_SIZE} pcs)</span>
                </div>
              ) : (
                <div className="text-[0.72rem] font-mono text-[#8C877D]">
                  Subtotal: ${(qty * PRICE_PER_UNIT).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Live Totals & Action Bar */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 sm:gap-10 w-full sm:w-auto justify-around sm:justify-start">
          <div className="flex flex-col text-left">
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D]">
              Total Units
            </span>
            <span className="text-[1.6rem] font-bold font-mono text-[#F2EEE6]">
              {totalUnits}
            </span>
          </div>

          <div className="w-[1px] h-10 bg-[rgba(242,238,230,0.08)]" />

          <div className="flex flex-col text-left">
            <span className="text-[0.72rem] font-mono uppercase tracking-wider text-[#8C877D]">
              Estimated Order Total
            </span>
            <span className="text-[1.6rem] font-bold font-mono text-[#BF4B0A]">
              ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setAddedToCart(true)}
          disabled={totalUnits === 0}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#BF4B0A] hover:bg-[#A33F08] text-white font-medium text-[0.92rem] transition-all disabled:opacity-30 disabled:hover:bg-[#BF4B0A] cursor-pointer shadow-lg shadow-[rgba(191,75,10,0.3)] flex items-center justify-center gap-2"
        >
          {addedToCart ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Added size run to cart</span>
            </>
          ) : (
            <span>Add size run to cart ({totalUnits} pcs)</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default BulkOrderCalculator;
