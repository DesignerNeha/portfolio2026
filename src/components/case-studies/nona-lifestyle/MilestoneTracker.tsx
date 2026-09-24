"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  { id: "raw", title: "Raw Material", desc: "Sourcing and verifying fabric, threads, and trims.", samplePct: "100%" },
  { id: "cutting", title: "Cutting", desc: "Spreading fabric and cutting patterns for the bulk order.", samplePct: "100%" },
  { id: "stitching", title: "Stitching/Sewing", desc: "Assembling the garments. This is usually the longest phase.", samplePct: "65%" },
  { id: "finishing", title: "Finishing", desc: "Washing, ironing, and final threading adjustments.", samplePct: "0%" },
  { id: "qc", title: "QC", desc: "Quality Control checks against the approved golden sample.", samplePct: "0%" },
  { id: "packing", title: "Packing", desc: "Folding, tagging, and boxing for final shipment.", samplePct: "0%" }
];

export default function MilestoneTracker() {
  const [activeStage, setActiveStage] = useState(2); // Default to Stitching to show mixed progress
  const [progressFill, setProgressFill] = useState(0);

  useEffect(() => {
    // Animate progress bar on load
    const timer = setTimeout(() => {
      // Set to the center of the active stage
      const target = ((activeStage) / (STAGES.length - 1)) * 100;
      setProgressFill(target);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeStage]);

  return (
    <div className="w-full max-w-[800px] mx-auto bg-[var(--section-bg-alt)] border border-[var(--border)] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#4C9A8A]/5 to-transparent pointer-events-none"></div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">Order #NL-88492</h3>
          <p className="text-sm text-[var(--text-muted)]">Bulk T-Shirts (Black, Navy)</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-[#4C9A8A]/10 text-[#4C9A8A] text-xs font-bold uppercase tracking-wider rounded-full border border-[#4C9A8A]/20">
            In Production
          </span>
        </div>
      </div>

      {/* Stepper */}
      <div className="relative mb-12 mt-6 z-10">
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-[var(--background)] -translate-y-1/2 rounded-full border border-[var(--border)] overflow-hidden">
          {/* Fill */}
          <motion.div 
            className="h-full bg-gradient-to-r from-[#2B574E] to-[#4C9A8A] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressFill}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Nodes */}
        <div className="relative flex justify-between">
          {STAGES.map((stage, idx) => {
            const isCompleted = idx < activeStage;
            const isCurrent = idx === activeStage;
            const isPending = idx > activeStage;

            return (
              <div 
                key={stage.id} 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setActiveStage(idx)}
              >
                <div 
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
                    ${isCompleted ? 'bg-[#4C9A8A] text-[var(--background)] shadow-[0_0_15px_rgba(76,154,138,0.4)]' : ''}
                    ${isCurrent ? 'bg-[var(--section-bg-alt)] border-[3px] border-[#4C9A8A] text-[#4C9A8A]' : ''}
                    ${isPending ? 'bg-[var(--background)] border-2 border-[var(--border)] text-[var(--text-muted)] group-hover:border-[#4C9A8A]/50' : ''}
                  `}
                >
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <span className="text-xs font-bold">{idx + 1}</span>
                  )}
                </div>
                
                <div className="absolute top-10 w-24 text-center -ml-8">
                  <span className={`text-xs font-medium transition-colors ${isCurrent ? 'text-[var(--foreground)]' : 'text-[var(--text-muted)] group-hover:text-[var(--foreground)]'}`}>
                    {stage.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Panel */}
      <div className="mt-16 bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 relative z-10 h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between h-full"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#4C9A8A] font-bold uppercase tracking-wider text-sm">{STAGES[activeStage].title}</span>
                {idxToStatus(activeStage, activeStage)}
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[400px]">
                {STAGES[activeStage].desc}
              </p>
            </div>
            
            <div className="bg-[var(--section-bg-alt)] p-4 rounded-lg border border-[var(--border)] text-center min-w-[120px]">
              <span className="block text-[2rem] font-mono font-bold text-[var(--foreground)] leading-none mb-1">
                {STAGES[activeStage].samplePct}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Completion</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function idxToStatus(idx: number, activeIdx: number) {
  if (idx < activeIdx) {
    return <span className="bg-[#4C9A8A]/20 text-[#4C9A8A] text-[10px] px-2 py-0.5 rounded font-bold uppercase">Completed</span>;
  }
  if (idx === activeIdx) {
    return <span className="bg-yellow-500/20 text-yellow-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase animate-pulse">In Progress</span>;
  }
  return <span className="bg-gray-500/20 text-gray-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Pending</span>;
}
