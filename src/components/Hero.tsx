"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu } from "lucide-react";

const words = [
  "Software Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
          if (currentText === targetWord) {
            setTimeout(() => setIsDeleting(true), 1500); // Wait before start deleting
          }
        } else {
          setCurrentText(targetWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-[#0a0712]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400">
              Available for new opportunities
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              Experiences
            </span>{" "}
            That <br />
            Convert
          </h1>

          {/* Typewriter Effect Line (Text size increased and color changed) */}
          <div className="flex items-center gap-3 text-purple-400 text-xl sm:text-2xl font-mono pt-2 min-h-[40px]">
            <Cpu className="w-6 h-6 text-indigo-400 animate-pulse shrink-0" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-bold">{currentText}</span>
            <span className="animate-pulse text-indigo-400 font-bold">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Crafting robust software systems, stunning user interfaces, and creative graphic designs.
          </p>

          {/* Call to Action Buttons (CV/Resume Style Hover & Colors) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 text-white font-medium hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 backdrop-blur-md shadow-sm cursor-pointer"
            >
              <Mail size={18} className="text-blue-400" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Right Side: Circular Avatar & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px]">
            
            {/* Outer Glowing Gradient Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-70 blur-md animate-pulse" />

            {/* Circular Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30 bg-gray-900">
              <Image
                src="/about-me.jpg"
                alt="Endale Gebeyehu"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Top-Left Badge: "Software Engineer" (Text Size Increased & Color Changed) */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-2 -left-4 bg-[#13111c]/95 border border-indigo-500/30 text-indigo-300 text-sm font-bold px-4 py-2 rounded-lg shadow-xl backdrop-blur-md z-20"
            >
              Software Engineer
            </motion.div>

            {/* Bottom-Right Badge: "Full Stack Developer" (Text Size Increased & Color Changed) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-4 bg-[#13111c]/95 border border-blue-500/30 text-blue-300 text-sm font-bold px-4 py-2 rounded-lg shadow-xl backdrop-blur-md z-20"
            >
              Full Stack Developer
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;