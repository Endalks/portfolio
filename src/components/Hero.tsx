"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const roles = ["Software Engineer", "Full Stack Developer", "Graphics Designer", "UI/UX Designer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % roles.length;
      let fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-[90vh] pt-32 pb-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experiences</span> That Convert
          </h1>

          <div className="h-10 flex items-center gap-3">
            <Cpu className="text-purple-400" size={24} />
            <h2 className="text-2xl font-semibold text-purple-400 flex items-center">
              {text}<span className="animate-pulse ml-1">|</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-lg">
            Crafting robust software systems, stunning user interfaces, and creative graphic designs.
          </p>

          {/* Buttons styled exactly like CV & Resume button */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full glass border border-primary/30 text-white font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:border-transparent flex items-center gap-2 cursor-pointer"
            >
              <Mail size={18} className="text-purple-400" /> Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Image with Glow & Badges */}
        <div className="flex justify-center items-center">
          <motion.div 
            className="relative w-80 h-80 rounded-full flex items-center justify-center group"
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

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-2 -left-2 bg-gray-900/90 text-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold border border-gray-700"
            >
              Software Engineer
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-2 -right-2 bg-gray-900/90 text-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold border border-gray-700"
            >
              Full Stack Developer
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}