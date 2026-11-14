"use client";

import React from "react";
import { ospreyImages } from "./osprey-images";

interface KeywordItem {
  id: number;
  label: string;
}

const keywords: KeywordItem[] = [
  { id: 1, label: "Wheel" },
  { id: 2, label: "Wings" },
  { id: 3, label: "Repair & Fixes" },
  { id: 4, label: "Bird" },
  { id: 5, label: "Global" },
  { id: 6, label: "Technology" },
];

interface OptionData {
  id: string;
  name: string;
  scoreNumber: number;
  imageKey: "logoOption1" | "logoOption2" | "logoOption3" | "logoOption4";
  matches: boolean[];
  sentiment: {
    type: "not-convinced" | "liked" | "favourite";
    label: string;
  };
  isFavourite?: boolean;
}

const optionDirections: OptionData[] = [
  {
    id: "opt-1",
    name: "Option One",
    scoreNumber: 3,
    imageKey: "logoOption1",
    matches: [true, true, false, true, false, false],
    sentiment: {
      type: "not-convinced",
      label: "Not convinced",
    },
  },
  {
    id: "opt-2",
    name: "Option Two",
    scoreNumber: 3,
    imageKey: "logoOption2",
    matches: [false, true, false, true, false, true],
    sentiment: {
      type: "not-convinced",
      label: "Not convinced",
    },
  },
  {
    id: "opt-3",
    name: "Option Three",
    scoreNumber: 4,
    imageKey: "logoOption3",
    matches: [true, true, true, true, false, false],
    sentiment: {
      type: "liked",
      label: "Liked it",
    },
  },
  {
    id: "opt-4",
    name: "Option Four",
    scoreNumber: 3,
    imageKey: "logoOption4",
    matches: [true, true, false, true, false, false],
    sentiment: {
      type: "favourite",
      label: "Favourite",
    },
    isFavourite: true,
  },
];

export function LogoResearchMatrix() {
  return (
    <div className="w-full bg-[#12110E] border border-[rgba(242,238,230,0.1)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 text-[#F2EEE6] shadow-2xl">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[0.75rem] font-mono uppercase tracking-widest text-[#BF4B0A] font-bold">
          LOGO RESEARCH
        </span>
        <h3 className="text-[1.75rem] sm:text-[2.2rem] font-bold text-[#F2EEE6] tracking-tight leading-tight">
          Six keywords. Four directions. One logo.
        </h3>
        <p className="text-[0.95rem] text-[#B5B0A4] leading-relaxed max-w-3xl">
          I wrote the keywords first, then scored every option against them before choosing.
        </p>
      </div>

      {/* Matrix Grid (Horizontal scrollable on narrow viewports) */}
      <div className="w-full overflow-x-auto pt-4 pb-2 -mx-2 px-2 sm:mx-0 sm:px-0">
        <div className="min-w-[760px] grid grid-cols-5 gap-3 sm:gap-4 items-stretch">
          {/* Column 1: The Brief Card */}
          <div className="rounded-2xl bg-[#16140F] border border-[rgba(242,238,230,0.1)] p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#8C877D] font-bold block">
                THE BRIEF IN SIX WORDS
              </span>
              <h4 className="text-[0.92rem] font-medium text-[#F2EEE6] leading-snug mt-2">
                Every option is judged against the same six words, so I could compare them fairly.
              </h4>
              <p className="text-[0.75rem] text-[#8C877D] mt-2.5 leading-normal">
                Read down a column to see how an option scores.
              </p>
            </div>

            {/* Keyword Rows */}
            <div className="flex flex-col mt-4">
              {keywords.map((kw, idx) => (
                <div
                  key={kw.id}
                  className={`h-11 flex items-center gap-2.5 ${
                    idx < keywords.length - 1
                      ? "border-b border-[rgba(242,238,230,0.06)]"
                      : ""
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#1C1914] border border-[rgba(242,238,230,0.12)] text-[#BF4B0A] text-[0.7rem] font-mono flex items-center justify-center font-bold shrink-0">
                    {kw.id}
                  </span>
                  <span className="text-[0.85rem] text-[#E6E1D8] font-medium truncate">
                    {kw.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom spacer to align with sentiment rows */}
            <div className="h-8 mt-3" aria-hidden="true" />
          </div>

          {/* Columns 2-5: The 4 Directions */}
          {optionDirections.map((opt) => {
            const isFav = opt.isFavourite;
            const imageSrc = ospreyImages[opt.imageKey] || "";

            return (
              <div
                key={opt.id}
                className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 relative ${
                  isFav
                    ? "bg-[#16140F] border-2 border-[#BF4B0A] shadow-[0_0_30px_rgba(191,75,10,0.18)]"
                    : "bg-[#16140F] border border-[rgba(242,238,230,0.1)] hover:border-[rgba(242,238,230,0.18)]"
                }`}
              >
                {/* Favourite Ribbon */}
                {isFav && (
                  <div className="absolute -top-3.5 right-4 px-3 py-0.5 rounded-full bg-[#BF4B0A] text-[#12110E] text-[0.68rem] font-bold tracking-wider uppercase shadow-md z-20">
                    FAVOURITE
                  </div>
                )}

                <div>
                  {/* Logo Image / Container */}
                  <div
                    className={`w-full aspect-square rounded-xl flex items-center justify-center p-2.5 sm:p-3 overflow-hidden mb-3 transition-all ${
                      imageSrc
                        ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                        : "bg-[#12110E] border border-dashed border-[rgba(242,238,230,0.18)]"
                    }`}
                  >
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={opt.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1.5 text-[#8C877D]">
                        <div className="w-8 h-8 rounded-lg bg-[rgba(242,238,230,0.04)] border border-[rgba(242,238,230,0.08)] flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-[#BF4B0A] opacity-60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-[0.65rem] font-mono tracking-wider uppercase text-[#8C877D]">
                          Logo Space
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Option Name & Score */}
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(242,238,230,0.08)]">
                    <span className="text-[0.9rem] font-bold text-[#F2EEE6]">
                      {opt.name}
                    </span>
                    <span className="text-[0.88rem] font-bold text-[#F2EEE6] font-mono">
                      {opt.scoreNumber}
                      <span className="text-[#8C877D] font-normal text-[0.75rem]">
                        /6
                      </span>
                    </span>
                  </div>

                  {/* Keyword Checkmarks / Rings */}
                  <div className="flex flex-col mt-4">
                    {opt.matches.map((isMatch, idx) => (
                      <div
                        key={idx}
                        className={`h-11 flex items-center justify-center ${
                          idx < opt.matches.length - 1
                            ? "border-b border-[rgba(242,238,230,0.06)]"
                            : ""
                        }`}
                      >
                        {isMatch ? (
                          <span className="w-5 h-5 rounded-full bg-[#BF4B0A] flex items-center justify-center shadow-sm">
                            <svg
                              className="w-3 h-3 text-[#12110E]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full border border-[rgba(242,238,230,0.22)] bg-transparent" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sentiment Badge at bottom */}
                <div className="h-8 mt-3 pt-2 flex items-center justify-center gap-1.5 border-t border-[rgba(242,238,230,0.06)]">
                  {opt.sentiment.type === "not-convinced" && (
                    <>
                      <span className="text-sm opacity-60">🙁</span>
                      <span className="text-[0.75rem] text-[#8C877D]">
                        {opt.sentiment.label}
                      </span>
                    </>
                  )}
                  {opt.sentiment.type === "liked" && (
                    <>
                      <span className="w-4 h-4 rounded-full bg-[#1E3A5F] text-[#60A5FA] flex items-center justify-center text-[0.65rem]">
                        👍
                      </span>
                      <span className="text-[0.75rem] text-[#93C5FD]">
                        {opt.sentiment.label}
                      </span>
                    </>
                  )}
                  {opt.sentiment.type === "favourite" && (
                    <>
                      <span className="w-4 h-4 rounded-full bg-[#BF4B0A] text-[#12110E] flex items-center justify-center text-[0.65rem] font-bold">
                        ♥
                      </span>
                      <span className="text-[0.75rem] text-[#BF4B0A] font-semibold">
                        {opt.sentiment.label}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Callout & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[rgba(242,238,230,0.08)]">
        <div className="border-l-2 border-[#BF4B0A] pl-3 py-1">
          <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
            <strong className="text-[#F2EEE6] font-semibold">
              No option covered all six keywords.
            </strong>{" "}
            Option Three came closest at 4 of 6, and Option Four is the one that
            earned the heart.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0 text-[0.78rem]">
          <div className="flex items-center gap-2 text-[#B5B0A4]">
            <span className="w-4 h-4 rounded-full bg-[#BF4B0A] flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-[#12110E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <span>Matches the keyword</span>
          </div>

          <div className="flex items-center gap-2 text-[#8C877D]">
            <span className="w-4 h-4 rounded-full border border-[rgba(242,238,230,0.3)] bg-transparent" />
            <span>Does not</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoResearchMatrix;
