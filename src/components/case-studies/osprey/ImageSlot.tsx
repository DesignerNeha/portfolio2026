"use client";

import React from "react";

export interface ImageSlotProps {
  label: string;
  aspectRatio?: string; // e.g. "16/9", "16/10", "4/3", "21/9"
  caption?: string;
  src?: string;
  className?: string;
  alignment?: "center" | "left" | "right";
  objectFit?: "cover" | "contain";
  objectPosition?: "top" | "center" | "bottom";
  scrollable?: boolean;
  maxScrollHeight?: string;
}

export function ImageSlot({
  label,
  aspectRatio = "16/10",
  caption,
  src,
  className = "",
  alignment = "center",
  objectFit = "cover",
  objectPosition = "top",
  scrollable = false,
  maxScrollHeight = "520px",
}: ImageSlotProps) {
  const hasImage = Boolean(src && src.trim().length > 0);
  const isAutoRatio = aspectRatio === "auto";

  return (
    <figure className={`w-full flex flex-col gap-2.5 ${className}`}>
      <div
        className={`w-full relative overflow-hidden rounded-xl transition-all duration-300 ${
          isAutoRatio && !hasImage ? "aspect-[16/10]" : ""
        }`}
        style={scrollable ? undefined : isAutoRatio ? undefined : { aspectRatio }}
      >
        {hasImage ? (
          scrollable ? (
            <div
              className="w-full relative rounded-xl overflow-hidden bg-[#16140F] shadow-[0_16px_40px_rgba(0,0,0,0.45)] border border-[rgba(242,238,230,0.1)] flex flex-col"
              style={{ maxHeight: maxScrollHeight }}
            >
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#12110E] border-b border-[rgba(242,238,230,0.08)] shrink-0 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(242,238,230,0.2)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(242,238,230,0.2)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(242,238,230,0.2)]" />
                </div>
                <span className="text-[0.68rem] font-mono text-[#8C877D] tracking-wider uppercase">
                  Scroll to view full page
                </span>
              </div>
              <div className="w-full overflow-y-auto flex-1 overscroll-contain">
                <img
                  src={src}
                  alt={caption || label}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div
              className={`w-full relative rounded-xl overflow-hidden bg-[#16140F] shadow-[0_16px_40px_rgba(0,0,0,0.45)] border border-[rgba(242,238,230,0.1)] ${
                isAutoRatio ? "h-auto" : "h-full"
              }`}
            >
              <img
                src={src}
                alt={caption || label}
                className={`w-full block ${
                  isAutoRatio
                    ? "h-auto"
                    : `h-full ${
                        objectFit === "contain" ? "object-contain" : "object-cover"
                      } ${
                        objectPosition === "center"
                          ? "object-center"
                          : objectPosition === "bottom"
                          ? "object-bottom"
                          : "object-top"
                      }`
                }`}
                loading="lazy"
              />
            </div>
          )
        ) : (
          <div
            role="img"
            aria-label={`Placeholder frame for ${label}`}
            className={`w-full h-full rounded-xl flex flex-col p-6 select-none ${
              alignment === "left"
                ? "items-start text-left justify-center pl-8 sm:pl-16"
                : alignment === "right"
                ? "items-end text-right justify-center pr-8 sm:pr-16"
                : "items-center text-center justify-center"
            }`}
            style={{
              backgroundColor: "#16140F",
              backgroundImage: `
                linear-gradient(to right, rgba(242, 238, 230, 0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(242, 238, 230, 0.035) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
              border: "1.5px dashed rgba(191, 75, 10, 0.35)",
            }}
          >
            <div
              className={`flex flex-col ${
                alignment === "left"
                  ? "items-start text-left max-w-[280px]"
                  : alignment === "right"
                  ? "items-end text-right max-w-[280px]"
                  : "items-center text-center max-w-md"
              }`}
            >
              {/* Soft decorative frame icon */}
              <div className="w-11 h-11 rounded-lg bg-[rgba(191,75,10,0.08)] border border-[rgba(191,75,10,0.2)] flex items-center justify-center mb-2.5 text-[#BF4B0A]">
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              <p className="text-[0.92rem] font-medium text-[#E6E1D8] tracking-normal leading-snug">
                Add screen: <span className="text-[#BF4B0A] font-semibold">{label}</span>
              </p>
              <span className="text-[0.72rem] text-[#8C877D] tracking-wider uppercase mt-1 font-mono">
                {aspectRatio} Frame
              </span>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="text-[0.88rem] text-[#B5B0A4] leading-relaxed px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ImageSlot;
