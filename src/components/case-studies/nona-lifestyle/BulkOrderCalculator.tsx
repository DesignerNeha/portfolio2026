"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZES = ["S", "M", "L", "XL", "2XL"];
const PRICE_PER_UNIT = 12.5; // Example price
const MOQ = 100; // Minimum order quantity

export default function BulkOrderCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    SIZES.reduce((acc, size) => ({ ...acc, [size]: 0 }), {})
  );
  
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const units = Object.values(quantities).reduce((sum, qty) => sum + (qty || 0), 0);
    setTotalUnits(units);
    setTotalPrice(units * PRICE_PER_UNIT);
  }, [quantities]);

  const handleInputChange = (size: string, value: string) => {
    const parsed = parseInt(value, 10);
    setQuantities(prev => ({
      ...prev,
      [size]: isNaN(parsed) ? 0 : Math.max(0, parsed)
    }));
  };

  const isBelowMOQ = totalUnits > 0 && totalUnits < MOQ;

  return (
    <div className="w-full max-w-[600px] mx-auto bg-[var(--section-bg-alt)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-[var(--border)] bg-[var(--glass-bg)]">
        <h3 className="text-xl font-serif text-[var(--foreground)] mb-1">Interactive Bulk Ordering</h3>
        <p className="text-sm text-[var(--text-muted)]">Experience the multi-size entry challenge firsthand.</p>
      </div>

      {/* Calculator Body */}
      <div className="p-6">
        <div className="flex flex-col gap-4 mb-8">
          {SIZES.map((size) => (
            <div key={size} className="flex items-center justify-between group">
              <label htmlFor={`size-${size}`} className="text-lg font-medium text-[var(--foreground)] w-16">
                {size}
              </label>
              <div className="flex-1 border-b border-dashed border-[var(--border)] mx-4 opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative">
                <input
                  id={`size-${size}`}
                  type="number"
                  min="0"
                  value={quantities[size] || ""}
                  onChange={(e) => handleInputChange(size, e.target.value)}
                  placeholder="0"
                  className="w-24 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--foreground)] focus:outline-none focus:border-[#4C9A8A] focus:ring-1 focus:ring-[#4C9A8A] transition-all text-right font-mono"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Results Panel */}
        <div className="bg-[var(--background)] rounded-xl p-5 border border-[var(--border)] relative overflow-hidden">
          <div className="flex justify-between items-end relative z-10">
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1 uppercase tracking-wider">Total Units</p>
              <div className="text-3xl font-bold text-[var(--foreground)] font-mono">
                {totalUnits}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[var(--text-muted)] mb-1 uppercase tracking-wider">Est. Price</p>
              <div className="text-3xl font-bold text-[#4C9A8A] font-mono">
                ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {isBelowMOQ && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden relative z-10"
              >
                <div className="flex items-center gap-2 text-[#BF4B0A] bg-[#BF4B0A]/10 p-3 rounded-lg border border-[#BF4B0A]/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span className="text-sm font-medium">Minimum Order Quantity (MOQ) is {MOQ} units.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative background element for results panel */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4C9A8A] opacity-5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
