"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = ["Software Engineer", "Full Stack Developer", "Graphics Designer", "UI/UX Designer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % roles.length;
      let fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  return (
    // 'relative z-0' ጨምሬበታለሁ - ሜኑ ከዚህ በላይ እንዲሆን
    <section className="min-h-[80vh] pt-24 pb-10 md:pt-32 flex items-center relative z-0 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experiences</span> That Convert
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400 h-8 flex items-center justify-center lg:justify-start">
            {text}<span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 text-base max-w-lg">
            Crafting robust software systems, stunning user interfaces, and creative graphic designs.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-2 transition-all">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-bold flex items-center gap-2 transition-all">
              <Mail size={18} /> Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Image - order-1 ስላደረግኩት ስልክ ላይ ከላይ ይታያል */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <motion.div 
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-blue-500 blur-[2px]" 
            />
            
            <img 
              src="/about-me.jpg" 
              alt="Endale Gebeyehu" 
              className="w-[90%] h-[90%] rounded-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}