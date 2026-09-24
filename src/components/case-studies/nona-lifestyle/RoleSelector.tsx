"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    id: "manufacturer",
    title: "Manufacturer",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"></path>
        <path d="M4 10h16"></path>
        <path d="M14 6v4"></path>
        <path d="M10 6v4"></path>
        <path d="M14 2h-4v4h4z"></path>
      </svg>
    ),
    description: "During onboarding, manufacturers set up their production capabilities, machinery details, and initial raw material or finished goods catalogs.",
  },
  {
    id: "vendor",
    title: "Vendor",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    description: "Vendors upload extensive fabric and trim inventories, focusing on bulk pricing tiers, stock availability, and MOQs for retail buyers.",
  },
  {
    id: "buyer",
    title: "Buyer",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    description: "Buyers bypass catalog setup entirely. Their flow captures preferred sourcing categories, brand details, and typical purchase volumes.",
  }
];

export default function RoleSelector() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[900px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => {
          const isActive = activeRole === role.id;
          
          return (
            <motion.div
              key={role.id}
              layout
              onMouseEnter={() => setActiveRole(role.id)}
              onMouseLeave={() => setActiveRole(null)}
              onClick={() => setActiveRole(isActive ? null : role.id)}
              className={`
                relative p-6 rounded-2xl cursor-pointer transition-colors duration-300
                border border-[var(--border)] bg-[var(--glass-bg)]
                hover:border-[#4C9A8A]/50 shadow-lg
              `}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#4C9A8A] text-[var(--background)]' : 'bg-[var(--section-bg-alt)] text-[var(--foreground)]'}`}>
                  {role.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--foreground)]">{role.title}</h4>
              </div>
              
              <AnimatePresence>
                {(isActive || window.innerWidth < 768) && ( // Always show description on mobile or when active
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[0.95rem] text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                      {role.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Glow */}
              {isActive && (
                <div className="absolute inset-0 rounded-2xl border-2 border-[#4C9A8A] pointer-events-none opacity-50"></div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
