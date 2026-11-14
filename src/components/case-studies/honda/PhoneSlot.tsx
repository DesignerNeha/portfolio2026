"use client";

import React from "react";

export interface PhoneSlotProps {
  label: string;
  caption?: string;
  src?: string;
  className?: string;
  alignment?: "center" | "left" | "right";
  /** Optional scale or rotation for overlapping hero arrangements */
  style?: React.CSSProperties;
}

export function PhoneSlot({
  label,
  caption,
  src,
  className = "",
  alignment = "center",
  style,
}: PhoneSlotProps) {
  const hasImage = Boolean(src && src.trim().length > 0);

  return (
    <figure className={`flex flex-col gap-2.5 items-center ${className}`} style={style}>
      {/* Phone chassis */}
      <div
        className="w-full max-w-[310px] relative rounded-[38px] sm:rounded-[44px] p-[5px] sm:p-[6px] transition-all duration-300"
        style={{
          backgroundColor: "#1C1A16",
          border: "4px solid #2C2923",
          boxShadow:
            "0 24px 60px -12px rgba(0, 0, 0, 0.7), 0 8px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top Speaker / Camera Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-20 sm:w-24 h-4 rounded-full bg-[#0D0C0A] flex items-center justify-between px-3.5 border border-[rgba(255,255,255,0.05)]">
            <div className="w-2 h-2 rounded-full bg-[#1A1916] border border-[rgba(255,255,255,0.08)]" />
            <div className="w-7 h-1 rounded-full bg-[#201E1A]" />
          </div>
        </div>

        {/* Screen container with 9:19.5 aspect ratio */}
        <div
          className="w-full relative overflow-hidden rounded-[30px] sm:rounded-[36px] bg-[#12110E]"
          style={{ aspectRatio: "9/19.5" }}
        >
          {hasImage ? (
            <div className="w-full h-full relative">
              <img
                src={src}
                alt={caption || label}
                className="w-full h-full object-cover object-top block"
                loading="lazy"
              />
              {/* Subtle top/bottom glass edge gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/15" />
            </div>
          ) : (
            <div
              role="img"
              aria-label={`Placeholder phone frame for ${label}`}
              className={`w-full h-full flex flex-col p-6 select-none ${
                alignment === "left"
                  ? "items-start text-left justify-center pl-6"
                  : alignment === "right"
                  ? "items-end text-right justify-center pr-6"
                  : "items-center text-center justify-center"
              }`}
              style={{
                backgroundColor: "#16140F",
                backgroundImage: `
                  linear-gradient(to right, rgba(242, 238, 230, 0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(242, 238, 230, 0.035) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
                border: "1.5px dashed rgba(220, 38, 38, 0.38)",
              }}
            >
              <div
                className={`flex flex-col ${
                  alignment === "left"
                    ? "items-start text-left"
                    : alignment === "right"
                    ? "items-end text-right"
                    : "items-center text-center"
                } max-w-[220px]`}
              >
                {/* Mobile icon with red accent */}
                <div className="w-10 h-10 rounded-xl bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.22)] flex items-center justify-center mb-3 text-[#DC2626]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>

                <p className="text-[0.88rem] font-medium text-[#E6E1D8] tracking-normal leading-snug">
                  Add screen: <span className="text-[#DC2626] font-semibold">{label}</span>
                </p>
                <span className="text-[0.68rem] text-[#8C877D] tracking-wider uppercase mt-1.5 font-mono">
                  9:19.5 Mobile Frame
                </span>
              </div>
            </div>
          )}

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/25 pointer-events-none z-20" />
        </div>
      </div>

      {caption && (
        <figcaption className="text-[0.85rem] text-[#B5B0A4] text-center leading-relaxed max-w-[280px] px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default PhoneSlot;
