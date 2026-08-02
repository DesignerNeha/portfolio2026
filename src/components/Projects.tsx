"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardData {
  id: string;
  num: string;
  title: string;
  caseId: string;
  tags: string[];
  gradient: string;
  image?: string;
  mobileImages?: string[];
  rawImage?: boolean;
  description: string;
  ctaText?: string;
  link?: string;
  external?: boolean;
}

const officeProjects: ProjectCardData[] = [
  {
    id: "kova",
    num: "01",
    title: "KOVA AI Tool Platform",
    caseId: "kovaCase",
    tags: ["Generative AI", "Agents & MCP", "2026"],
    gradient: "linear-gradient(135deg, #111111, #222222)",
    image: "/kova_dashboard_v2.png",
    description: "Generative AI agent platform utilizing model context protocols to build autonomous workflows.",
  },
  {
    id: "fuso-hawk",
    num: "02",
    title: "Osprey: FUSO Fleet & HAWK",
    caseId: "fusoCase",
    tags: ["Enterprise RBAC", "AI Chatbot UX", "2025"],
    gradient: "linear-gradient(135deg, #1A1813, #2E1B10)",
    image: "/osprey_dashboard.jpg",
    description: "Role-based enterprise tool across dealer/service networks with AI chatbot integration in HR Admin Portal.",
  },
  {
    id: "honda-booking",
    num: "03",
    title: "Honda PDI Automation",
    caseId: "hondaCase",
    tags: ["Automotive PDI", "Field Inspection App", "2024–25"],
    gradient: "linear-gradient(135deg, #131713, #223322)",
    image: "/project_honda.png",
    mobileImages: ["/honda_pdi_2.png", "/honda_pdi_1.png", "/honda_pdi_3.png"],
    description: "5 interconnected apps with global dashboards for real-time data across regions with one consistent design system.",
  },
  {
    id: "seva",
    num: "04",
    title: "Digital Seva Portal",
    caseId: "sevaCase",
    tags: ["GovTech", "Accessibility", "IIT Delhi Research"],
    gradient: "linear-gradient(135deg, #222410, #383D1B)",
    image: "/seva_dashboard_v2.jpg",
    description: "End-to-end UX for rural India bill payments and essential services, focusing on low-literacy, first-time digital users.",
  },
  {
    id: "nona-lifestyle",
    num: "05",
    title: "NONA Lifestyle",
    caseId: "nonaCase",
    tags: ["B2B + B2C", "ERP Integration", "2022–24"],
    gradient: "linear-gradient(135deg, #11221E, #1F423A)",
    image: "/NONA_Preview.png",
    description: "Unified commerce platform with product discovery, checkout, order tracking, and real-time ERP inventory integration.",
  },
];

const selfLearningProjects: ProjectCardData[] = [
  {
    id: "blinkplay",
    num: "01",
    title: "BlinkPlay - A short form drama platform",
    caseId: "blinkplayCase",
    tags: ["Short-Form Video", "Drama Streaming", "Mobile UX", "2025"],
    gradient: "linear-gradient(135deg, #1C1226, #3B1B38)",
    mobileImages: ["/EpisodeViewing.png", "/HomeScreen.png", "/EpisodesModal.png"],
    description: "A fast-paced, vertical-scrolling short-form drama platform designed for binge-worthy micro-episodes with frictionless monetization and immersive storytelling.",
    ctaText: "View Prototype",
    link: "https://www.figma.com/proto/WAUU3LyJDX658QYqz2fvDu/Short-Form-Drama-application?node-id=20-75&t=jDDxnTvv6c8hSuct-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A8",
    external: true,
  },
];

const ProjectCard = ({ project, index }: { project: ProjectCardData; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // Mouse coordinates for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform mapped coordinates to rotation degrees and magnetic movement
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1500 }}
      className="h-full"
    >
      <motion.a
        ref={ref}
        href={project.link || `/case-studies/${project.id}`}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        style={{
          x: translateX,
          y: translateY,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: project.gradient
        }}
        className="group flex flex-col h-full w-full rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)]"
      >
        {/* Content Side (Top) */}
        <div className="p-6 sm:p-8 md:p-12 flex-1 flex flex-col z-10" style={{ transform: "translateZ(50px)" }}>
          <div className="font-serif text-lg sm:text-xl text-white/40 italic mb-3 sm:mb-4">
            {project.num}
          </div>
          <h3 className="font-serif text-[clamp(1.5rem,2.8vw,2.5rem)] text-white leading-tight mb-3 sm:mb-4 group-hover:text-[var(--color-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 text-[0.9rem] sm:text-[0.95rem] leading-relaxed mb-6 sm:mb-8 flex-1">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap mb-6 sm:mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[1.2px] sm:tracking-[1.5px] border border-white/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white/80 transition-colors group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] bg-black/20 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-white/50 font-serif italic text-base sm:text-lg mt-auto group-hover:text-[var(--color-primary)] transition-colors">
            <span>{project.ctaText || "Explore Case Study"}</span>
            <motion.svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          </div>
        </div>

        {/* Image Side (Bottom) - Mockups */}
        <div className="relative h-[220px] sm:h-[300px] w-full mt-auto overflow-hidden flex items-end justify-center px-2 sm:px-6 pt-4 sm:pt-6" style={{ transform: "translateZ(30px)" }}>
          {project.mobileImages ? (
            <div className="flex gap-2.5 sm:gap-6 justify-center items-end h-[130%] w-full relative top-8 sm:top-10">
              {project.mobileImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50 + (i === 1 ? 0 : 30) }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-[31%] max-w-[140px] aspect-[9/19.5] bg-[#111] rounded-[0.85rem] sm:rounded-[1.25rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-[3px] sm:p-[6px] border border-white/10 ${i === 1 ? 'z-20 -translate-y-5 sm:-translate-y-10' : 'z-10'}`}
                >
                  {/* Outer Frame (Bezel) */}
                  <div className="relative w-full h-full bg-black rounded-[0.65rem] sm:rounded-[1rem] overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                    {/* Screen Reflection / Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-20 mix-blend-overlay" />

                    <div className="relative w-full h-full">
                      <Image src={img} alt={`${project.title} screen ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 30vw, 150px" />
                    </div>
                  </div>

                  {/* Hardware Buttons */}
                  <div className="absolute top-[20%] -left-[2px] sm:-left-[3px] w-[2px] sm:w-[3px] h-[8%] bg-[#444] rounded-l-sm" />
                  <div className="absolute top-[32%] -left-[2px] sm:-left-[3px] w-[2px] sm:w-[3px] h-[8%] bg-[#444] rounded-l-sm" />
                  <div className="absolute top-[25%] -right-[2px] sm:-right-[3px] w-[2px] sm:w-[3px] h-[12%] bg-[#444] rounded-r-sm" />
                </motion.div>
              ))}
            </div>
          ) : project.image ? (
            project.rawImage ? (
              <motion.div
                className="relative w-full h-[110%] mt-auto flex flex-col justify-end"
                initial={{ y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full h-[95%]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-bottom scale-[1.15]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ) : (
            <motion.div
              className="relative w-full h-full rounded-t-xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-x border-[rgba(255,255,255,0.15)] bg-[#1e1e1e] flex flex-col"
              initial={{ y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* macOS Browser Header */}
              <div className="w-full h-7 sm:h-8 bg-[#2d2d2d] flex items-center px-3 border-b border-black/40">
                <div className="flex gap-1.5">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27C93F]" />
                </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full flex-1 bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="font-serif text-9xl">✧</span>
            </div>
          )}
        </div>
      </motion.a>
    </motion.div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"office" | "self">("office");
  const currentProjects = activeTab === "office" ? officeProjects : selfLearningProjects;

  return (
    <section id="work" className="py-20 sm:py-32 px-5 sm:px-8 md:px-12 max-w-[1400px] mx-auto min-h-screen relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-baseline gap-4 sm:gap-6 mb-4"
      >
        <span className="text-sm uppercase tracking-[3px] text-[var(--color-primary)] font-bold">03</span>
        <h2 className="font-serif font-normal text-[clamp(2.2rem,5vw,4rem)] text-[var(--foreground)] tracking-tighter">
          Selected work
        </h2>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-start items-center flex-wrap gap-4 mb-12 sm:mb-20 md:ml-14"
      >
        <div className="flex gap-3 sm:gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("office")}
            className={`font-sans text-[0.78rem] sm:text-[0.85rem] font-semibold uppercase tracking-[1.2px] sm:tracking-[1.5px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${activeTab === "office"
                ? "bg-[var(--foreground)] text-[var(--background)] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                : "bg-transparent text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              }`}
          >
            Office Work
          </button>
          <button
            onClick={() => setActiveTab("self")}
            className={`font-sans text-[0.78rem] sm:text-[0.85rem] font-semibold uppercase tracking-[1.2px] sm:tracking-[1.5px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${activeTab === "self"
                ? "bg-[var(--foreground)] text-[var(--background)] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                : "bg-transparent text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              }`}
          >
            Self Learnings
          </button>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={`${activeTab}-${project.id}`} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
