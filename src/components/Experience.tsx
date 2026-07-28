"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced scroll-linked timeline fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const timelineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const cardStyle = (id: string) => ({
    border: "1px solid rgba(242, 238, 230, 0.15)",
    borderColor: hoveredCard === id ? "var(--color-primary)" : "rgba(242, 238, 230, 0.15)",
    transform: hoveredCard === id ? "translateY(-4px)" : "translateY(0)",
    padding: "1.5rem",
    borderRadius: "8px",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    cursor: "default",
    backgroundColor: hoveredCard === id ? "rgba(255,255,255,0.03)" : "transparent",
  });

  const entryVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="experience" className="bg-[var(--background)] text-[var(--foreground)] py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-[1100px] mx-auto" ref={containerRef}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-6 mb-20"
        >
          <span className="text-sm uppercase tracking-[3px] text-[var(--color-secondary)] font-bold">02</span>
          <h2 className="font-serif font-normal text-[clamp(2.4rem,5vw,4rem)] text-[var(--foreground)]">
            The journey so far
          </h2>
        </motion.div>

        {/* Timeline Axis Track */}
        <div className="relative pl-8 md:pl-12">
          {/* Background Track */}
          <div className="absolute left-[8px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated Fill Track */}
          <motion.div 
            style={{ height: timelineHeight }}
            className="absolute left-[8px] top-0 w-[2px] bg-[var(--color-primary)] origin-top" 
          />

          {/* Row 1: Cubastion Consulting */}
          <motion.div 
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 relative"
          >
            {/* Active timeline dot indicator */}
            <div className="absolute -left-[2.5rem] md:-left-[3.5rem] top-2 w-[18px] h-[18px] bg-[var(--color-primary)] rounded-full border-[4px] border-[var(--background)] shadow-[0_0_0_2px_var(--color-primary)] z-10" />
            
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-4">
              <h3 className="font-serif text-[1.9rem] font-normal">
                Cubastion Consulting <span className="text-[var(--color-primary)] italic">— Senior UI/UX Designer</span>
              </h3>
              <span className="text-[0.85rem] text-[var(--color-secondary)] uppercase tracking-[1.5px] font-medium">
                03/2025 – Present · Gurugram
              </span>
            </div>

            {/* Split cards row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div
                style={cardStyle("fuso")}
                onMouseEnter={() => setHoveredCard("fuso")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="font-semibold mb-2 text-[var(--foreground)]">
                  Mitsubishi FUSO — Field Fix Portal & HAWK
                </div>
                <p className="text-[0.92rem] text-[var(--text-muted)] leading-relaxed">
                  MVP for a role-based enterprise tool across dealer/service networks. Led UX for AI chatbot integration in an HR Admin Portal. RBAC, error-state handling, scalable components.
                </p>
              </div>
              <div
                style={cardStyle("honda")}
                onMouseEnter={() => setHoveredCard("honda")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="font-semibold mb-2 text-[var(--foreground)]">
                  Honda HMIC — Dealer & Mobility Apps
                </div>
                <p className="text-[0.92rem] text-[var(--text-muted)] leading-relaxed">
                  5 interconnected apps with global dashboards for real-time data across regions. End-to-end flows and one consistent design system.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2: CSC E-Governance */}
          <motion.div 
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 relative"
          >
            <div className="absolute -left-[2.5rem] md:-left-[3.5rem] top-2 w-[18px] h-[18px] bg-[var(--background)] rounded-full border-[2px] border-[var(--color-primary)] z-10" />
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-4">
              <h3 className="font-serif text-[1.9rem] font-normal">
                CSC E-Governance <span className="text-[var(--color-primary)] italic">— UI/UX Designer</span>
              </h3>
              <span className="text-[0.85rem] text-[var(--color-secondary)] uppercase tracking-[1.5px] font-medium">
                07/2024 – 03/2025 · Delhi
              </span>
            </div>
            <p className="text-[0.95rem] text-[var(--text-muted)] max-w-[700px] leading-relaxed">
              Independently led end-to-end UX for the <strong className="text-[var(--foreground)]">Digital Seva Portal</strong> — bill payments, ticket booking, and essential services for rural India. Collaborated with the IIT Delhi Design team on usability testing with low-literacy, first-time digital users.
            </p>
          </motion.div>

          {/* Row 3: Softworld India */}
          <motion.div 
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 relative"
          >
            <div className="absolute -left-[2.5rem] md:-left-[3.5rem] top-2 w-[18px] h-[18px] bg-[var(--background)] rounded-full border-[2px] border-[var(--color-primary)] z-10" />
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-4">
              <h3 className="font-serif text-[1.9rem] font-normal">
                Softworld India <span className="text-[var(--color-primary)] italic">— UI/UX Designer</span>
              </h3>
              <span className="text-[0.85rem] text-[var(--color-secondary)] uppercase tracking-[1.5px] font-medium">
                08/2022 – 06/2024 · Jaipur
              </span>
            </div>
            <p className="text-[0.95rem] text-[var(--text-muted)] max-w-[700px] leading-relaxed">
              <strong className="text-[var(--foreground)]">SwilMart</strong> — unified yet role-specific B2B + B2C commerce across web and mobile. Product discovery, checkout, order tracking, real-time SwilERP inventory integration, and a scalable cross-platform design system.
            </p>
          </motion.div>

          {/* Row 4: Softrow IT Solutions */}
          <motion.div 
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -left-[2.5rem] md:-left-[3.5rem] top-2 w-[18px] h-[18px] bg-[var(--background)] rounded-full border-[2px] border-white/40 z-10" />
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-4">
              <h3 className="font-serif text-[1.9rem] font-normal">
                Softrow IT Solutions <span className="text-[var(--color-primary)] italic">— Design Intern</span>
              </h3>
              <span className="text-[0.85rem] text-[var(--color-secondary)] uppercase tracking-[1.5px] font-medium">
                02/2022 – 06/2022 · Jaipur
              </span>
            </div>
            <p className="text-[0.95rem] text-[var(--text-muted)] max-w-[700px] leading-relaxed">
              <strong className="text-[var(--foreground)]">WowTalent</strong> — UI/UX for a short-video platform: intuitive uploading, interaction, and content discovery. Where it all started.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
