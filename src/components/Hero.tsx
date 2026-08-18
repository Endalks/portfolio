"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu, Code2, Sparkles } from "lucide-react";

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
            setTimeout(() => setIsDeleting(true), 1500);
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] font-sans">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Experiences
            </span>{" "}
            That <br />
            Convert
          </h1>

          {/* Typewriter Effect Line */}
          <div className="flex items-center gap-3 text-lg sm:text-2xl font-mono pt-2 min-h-[40px]">
            <Cpu className="w-6 h-6 text-indigo-400 animate-pulse shrink-0" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-extrabold tracking-wide">{currentText}</span>
            <span className="animate-ping text-indigo-400 font-bold">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Crafting robust software systems, stunning user interfaces, and creative digital solutions with modern technologies.
          </p>

          {/* Call to Action Buttons (Updated with Premium CV/Resume Hover & Glow Effects) */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 shadow-[0_10px_25px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.8)] cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-950/30 hover:bg-indigo-900/40 hover:border-indigo-400 text-white font-bold text-sm sm:text-base hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <Mail size={18} className="text-indigo-400" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Right Side: Circular Avatar & Floating Badges Outside the Circle */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] flex items-center justify-center">
            
            {/* Outer Glowing Gradient Ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-60 blur-xl animate-pulse" />

            {/* Circular Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/40 bg-gray-900 shadow-2xl">
              <Image
                src="/about-me.jpg"
                alt="Endale Gebeyehu"
                fill
                className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Top-Left Badge: "Software Engineer" */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="absolute -top-6 -left-6 sm:-left-10 bg-gradient-to-r from-indigo-950/90 to-purple-950/90 border border-indigo-400/40 text-indigo-300 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl z-30 flex items-center gap-2"
            >
              <Code2 size={16} className="text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Software Engineer</span>
            </motion.div>

            {/* Bottom-Right Badge: "Full Stack Developer" */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="absolute -bottom-6 -right-6 sm:-right-10 bg-gradient-to-r from-blue-950/90 to-cyan-950/90 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl z-30 flex items-center gap-2"
            >
              <Sparkles size={16} className="text-cyan-400 animate-bounce" />
              <span>Full Stack Developer</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;