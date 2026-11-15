"use client";

import React, { useState } from "react";

interface RoleInfo {
  id: string;
  title: string;
  tagline: string;
  description: string;
  onboardingNeeds: string[];
}

const ROLES: RoleInfo[] = [
  {
    id: "manufacturer",
    title: "Manufacturer",
    tagline: "Factory operations & production floor",
    description:
      "Sets up factory production capacity, machinery lines, minimum batch lead times, and initial product catalogs.",
    onboardingNeeds: [
      "Machinery lines & daily unit capacity",
      "Factory address & manufacturing license",
      "GSTIN & direct bank settlement details",
    ],
  },
  {
    id: "vendor",
    title: "Vendor",
    tagline: "Fabric & trims supplier",
    description:
      "Uploads raw material inventory, mill certifications, volume pricing tiers, and Minimum Order Quantities (MOQs).",
    onboardingNeeds: [
      "Fabric & trims catalog upload",
      "Graded bulk pricing discount brackets",
      "GSTIN & trade license verification",
    ],
  },
  {
    id: "buyer",
    title: "Buyer",
    tagline: "Retail store owner & procurement lead",
    description:
      "Bypasses catalog publishing entirely. Flow captures retail store footprint, preferred product categories, and billing info.",
    onboardingNeeds: [
      "Retail store name & business location",
      "Preferred categories (menswear, womenswear, essentials)",
      "GSTIN for tax-compliant wholesale invoices",
    ],
  },
];

export function RoleSelector() {
  const [activeRole, setActiveRole] = useState<string>("buyer");

  const current = ROLES.find((r) => r.id === activeRole) || ROLES[2];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Role Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {ROLES.map((role) => {
          const isActive = activeRole === role.id;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveRole(role.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${
                isActive
                  ? "bg-[#1E140F] border-[#BF4B0A] shadow-lg ring-1 ring-[#BF4B0A]"
                  : "bg-[#16140F] border-[rgba(242,238,230,0.08)] hover:border-[rgba(242,238,230,0.2)] text-[#B5B0A4]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[1.02rem] font-bold text-[#F2EEE6]">
                  {role.title}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? "bg-[#BF4B0A]" : "bg-[rgba(242,238,230,0.2)]"
                  }`}
                />
              </div>
              <span className="text-[0.78rem] text-[#8C877D] font-mono">
                {role.tagline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Role Summary */}
      <div className="p-5 rounded-xl bg-[#12110E] border border-[rgba(242,238,230,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div className="flex flex-col gap-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[0.74rem] font-mono uppercase tracking-wider text-[#BF4B0A] font-semibold">
              Onboarding Path: {current.title}
            </span>
          </div>
          <p className="text-[0.88rem] text-[#B5B0A4] leading-relaxed">
            {current.description}
          </p>
        </div>

        <div className="flex flex-col gap-1 sm:text-right shrink-0">
          <span className="text-[0.7rem] font-mono uppercase text-[#8C877D]">
            Key Onboarding Requisite
          </span>
          <span className="text-[0.82rem] font-mono text-[#F2EEE6] bg-[#181611] px-2.5 py-1 rounded border border-[rgba(242,238,230,0.08)]">
            GSTIN & Business Verification
          </span>
        </div>
      </div>
    </div>
  );
}

export default RoleSelector;
