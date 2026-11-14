"use client";

import React, { useState, useRef, useCallback } from "react";
import ImageSlot from "./ImageSlot";

export interface BeforeAfterSliderProps {
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
  aspectRatio?: string;
  caption?: string;
  initialPosition?: number; // 0 to 100
  className?: string;
}

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
  aspectRatio = "16/9",
  caption,
  initialPosition = 50,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(Math.round(pct * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture already lost
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className={`w-full flex flex-col gap-2.5 ${className}`}>
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full relative rounded-xl overflow-hidden select-none cursor-ew-resize group border border-[rgba(242,238,230,0.12)] bg-[#12110E]"
        style={{ aspectRatio }}
      >
        {/* AFTER Layer (Base / Background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <ImageSlot
            label={afterLabel}
            aspectRatio={aspectRatio}
            src={afterSrc}
            alignment="right"
            className="w-full h-full"
          />
          {/* After Tag */}
          <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider bg-[#BF4B0A] text-[#F2EEE6] shadow-[0_4px_12px_rgba(191,75,10,0.4)] backdrop-blur-md">
              After: {afterLabel}
            </span>
          </div>
        </div>

        {/* BEFORE Layer (Clipped / Foreground) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <ImageSlot
            label={beforeLabel}
            aspectRatio={aspectRatio}
            src={beforeSrc}
            alignment="left"
            className="w-full h-full"
          />
          {/* Before Tag */}
          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider bg-[rgba(22,20,15,0.85)] text-[#E6E1D8] border border-[rgba(242,238,230,0.2)] shadow-md backdrop-blur-md">
              Before: {beforeLabel}
            </span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          {/* Vertical line with subtle glow */}
          <div className="w-[2px] h-full bg-[#BF4B0A] shadow-[0_0_12px_rgba(191,75,10,0.8)]" />

          {/* Draggable Thumb / Handle */}
          <div
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#16140F] border-2 border-[#BF4B0A] shadow-[0_4px_16px_rgba(0,0,0,0.6)] flex items-center justify-center text-[#F2EEE6] transition-transform duration-150 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF4B0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16140F] cursor-grab active:cursor-grabbing"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" className="hidden" />
              <polyline points="9 18 15 12 9 6" className="hidden" />
            </svg>
            <div className="w-[1px] h-3 bg-[rgba(242,238,230,0.25)] mx-0.5" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {caption && (
        <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed px-1">
          {caption}
        </p>
      )}
    </div>
  );
}

export default BeforeAfterSlider;
