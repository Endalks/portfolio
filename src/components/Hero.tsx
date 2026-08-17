"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Graphics Designer",
  "UI/UX Designer",
  "Problem Solver"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section className="min-h-[80vh] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experiences</span> That Convert
          </h1>

          <div className="flex items-center gap-2 text-xl font-semibold text-purple-400">
            <Cpu className="text-purple-400" />
            <span className="h-8 flex items-center border-l-2 border-purple-400 pl-3">{currentText}</span>
          </div>

          <p className="text-gray-400 text-lg max-w-lg">
            Crafting robust software systems, stunning user interfaces, and creative graphic designs.
          </p>

          {/* Buttons: የታረሙት ቁልፎች */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 transition-all">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium flex items-center gap-2 transition-all">
              <Mail size={18} /> Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Image with Glow & Hover Effects */}
        <div className="flex justify-center items-center">
          <motion.div 
            className="relative w-80 h-80 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin blur-xl opacity-50" />
            
            <img 
              src="/about-me.jpg" 
              alt="Endale Gebeyehu" 
              className="relative w-[90%] h-[90%] rounded-full object-cover border-4 border-gray-800 shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}