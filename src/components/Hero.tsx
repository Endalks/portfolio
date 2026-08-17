"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Code2, Palette, Layout, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Graphics Designer",
  "UI/UX Designer",
  "Problem Solver"
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[90vh] pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Building Digital <br />
              <span className="text-gradient">Experiences</span> That Convert
            </h1>

            <div className="h-12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl font-semibold text-primary flex items-center gap-3"
                >
                  <Cpu className="text-accent" /> {roles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg">
              Crafting robust software systems, stunning user interfaces, and creative graphic designs.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#projects" className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition flex items-center gap-2">
                <Mail size={18} /> Hire Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl absolute" />
            <img 
              src="/about-me.jpg" 
              alt="Endale Gebeyehu" 
              className="relative w-72 h-72 rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}