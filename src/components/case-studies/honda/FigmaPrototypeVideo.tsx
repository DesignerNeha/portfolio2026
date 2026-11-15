"use client";

import React from "react";
import { pdiImages } from "./pdi-images";

interface FigmaPrototypeVideoProps {
  src?: string;
  caption?: string;
}

export function FigmaPrototypeVideo({
  src = pdiImages.figmaPrototypeOverview,
  caption = "Figma prototype: Complete walkthrough video testing the end-to-end PDI automation flow with dealership teams.",
}: FigmaPrototypeVideoProps) {
  const videoSrc = src || "/PDIPrototype.mov";

  return (
    <div className="w-full bg-[#16140F] border border-[rgba(242,238,230,0.12)] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-6 shadow-xl text-[#F2EEE6]">
      {/* Header Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(242,238,230,0.08)] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-[0.8rem] font-mono uppercase tracking-wider text-[#DC2626] font-semibold">
            Figma Prototype Overview • Flow Recording
          </span>
        </div>
        <span className="text-[0.74rem] font-mono text-[#8C877D] bg-[#12110E] px-3 py-1 rounded-full border border-[rgba(242,238,230,0.08)]">
          Tested with 3 Dealerships
        </span>
      </div>

      {/* Centered Device Showcase */}
      <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
        {/* Ambient radial red glow */}
        <div className="absolute inset-0 max-w-[480px] mx-auto bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.14)_0%,transparent_70%)] pointer-events-none" />

        {/* Mobile Phone Mockup Frame */}
        <div className="relative w-full max-w-[310px] sm:max-w-[340px] rounded-[24px] sm:rounded-[28px] p-[6px] bg-[#1C1A16] border-[4px] border-[#2C2923] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85),0_8px_24px_-4px_rgba(0,0,0,0.6)]">
          {/* Inner Video Container with video aspect ratio 650/1264 */}
          <div className="w-full relative overflow-hidden rounded-[16px] sm:rounded-[20px] bg-[#12110E] aspect-[650/1264]">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover block bg-black"
            >
              <source src={videoSrc} type="video/quicktime" />
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-[0.86rem] text-[#B5B0A4] text-center max-w-xl leading-relaxed">
        {caption}
      </p>
    </div>
  );
}

export default FigmaPrototypeVideo;
