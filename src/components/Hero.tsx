"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  // የ Typewriter አኒሜሽን ሎጂክ
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

          <h2 className="text-2xl font-semibold text-purple-400 h-10">
            {text}<span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-lg">
            Crafting robust software systems, stunning user interfaces, and creative graphic designs.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-2 transition-all">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white font-bold flex items-center gap-2 transition-all">
              <Mail size={20} /> Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Image with Original Effects */}
        <div className="flex justify-center items-center">
          <motion.div 
            className="relative w-80 h-80 rounded-full flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin opacity-70 blur-xl" />
            
            <img 
              src="/about-me.jpg" 
              alt="Endale Gebeyehu" 
              className="relative w-[92%] h-[92%] rounded-full object-cover border-4 border-gray-900 shadow-2xl"
            />

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold border border-gray-700"
            >
              Software Engineer
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold border border-gray-700"
            >
              Full Stack Developer
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}