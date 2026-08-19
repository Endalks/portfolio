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
    <section className="min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 flex items-center justify-center relative overflow-hidden bg-[#0a0712]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-950/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-5">
          
          {/* Availability Badge */}
          <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-lg mx-auto lg:mx-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide">
              Available for new opportunities
            </span>
          </div>

          {/* Main Title (Responsive Sizes for Mobile & PC) */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.2] lg:leading-[1.1] font-sans">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Experiences
            </span>{" "}
            That <br className="hidden sm:inline" />
            Convert
          </h1>

          {/* Typewriter Effect Line */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5 text-base sm:text-xl font-mono min-h-[35px]">
            <Cpu className="w-5 h-5 text-indigo-400 animate-pulse shrink-0" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-extrabold tracking-wide">{currentText}</span>
            <span className="animate-ping text-indigo-400 font-bold">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Crafting robust software systems, stunning user interfaces, and creative digital solutions with modern technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(79,70,229,0.5)] cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border-2 border-indigo-500/40 bg-indigo-950/30 hover:bg-indigo-900/40 hover:border-indigo-400 text-white font-bold text-sm sm:text-base hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <Mail size={18} className="text-indigo-400" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Right Side: Circular Avatar & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6 sm:py-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] flex items-center justify-center">
            
            {/* Outer Glowing Gradient Ring with Clockwise Rotation Animation */}
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-70 blur-md sm:blur-lg animate-spin" style={{ animationDuration: '10s' }} />

            {/* Circular Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/40 bg-gray-900 shadow-2xl z-10">
              <Image
                src="/about-me.jpg"
                alt="Endale Gebeyehu"
                fill
                className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Top-Left Badge: "Software Engineer" (Responsive placement) */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="absolute -top-3 -left-2 sm:-top-5 sm:-left-6 bg-gradient-to-r from-indigo-950/95 to-purple-950/95 border border-indigo-400/40 text-indigo-300 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xl backdrop-blur-xl z-30 flex items-center gap-1.5"
            >
              <Code2 size={14} className="text-indigo-400 animate-spin shrink-0" style={{ animationDuration: '6s' }} />
              <span>Software Engineer</span>
            </motion.div>

            {/* Bottom-Right Badge: "Full Stack Developer" (Responsive placement) */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-6 bg-gradient-to-r from-blue-950/95 to-cyan-950/95 border border-cyan-400/40 text-cyan-300 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xl backdrop-blur-xl z-30 flex items-center gap-1.5"
            >
              <Sparkles size={14} className="text-cyan-400 animate-bounce shrink-0" />
              <span>Full Stack Developer</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;