"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Palette, Layout, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

// እዚህ ጋር የፈለግካቸውን ሙያዎችና ክህሎቶች ጨምሬአለሁ
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Graphics Designer",
  "UI/UX Designer",
  "Problem Solver"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // በየ 3 ሰከንዱ ይቀያየራል
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-tight">
              Building Digital <br />
              <span className="text-gradient">Experiences</span> That Convert
            </h1>

            {/* atractive animation style 
 */}
            <div className="h-10 flex items-center">
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-semibold text-primary flex items-center gap-3"
              >
                <Cpu size={24} className="text-accent" />
                {roles[currentRoleIndex]}
              </motion.p>
            </div>

            <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
              Crafting robust software systems, stunning user interfaces, and creative graphic designs that bring ideas to life.
            </p>

            {/* Skills / Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground flex items-center gap-1.5">
                <Code2 size={14} className="text-primary" /> Full Stack
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground flex items-center gap-1.5">
                <Layout size={14} className="text-accent" /> UI/UX Design
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground flex items-center gap-1.5">
                <Palette size={14} className="text-emerald-400" /> Graphics Design
              </span>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-95 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-white font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:border-transparent cursor-pointer"
              >
                <Mail size={18} /> Hire Me
              </a>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Animated Glow Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 animate-spin blur-md opacity-70 [animation-duration:8s]" />

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-1.5 bg-background shadow-[0_0_50px_rgba(139,92,246,0.5)] z-10">
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                <img
                  src="/about-me.jpg"
                  alt="Endale Gebeyehu"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Tag 1 */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-8 -left-4 glass px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-primary shadow-lg z-20"
              >
                • Software Engineer
              </motion.div>

              {/* Floating Tag 2 */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 -right-4 glass px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-primary shadow-lg z-20"
              >
                🎨 UI/UX & Graphics
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}