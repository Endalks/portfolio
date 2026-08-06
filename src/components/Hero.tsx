"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
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

            <p className="text-lg text-muted-foreground max-w-xl">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>

            {/* Buttons Section - የተስተካከለው እዚህ ጋር ነው */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-white font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:border-transparent"
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
                  alt="Abian"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Floating Tag 1 */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-8 -left-4 glass px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-primary shadow-lg z-20"
              >
                • Endalk Tech
              </motion.div>

              {/* Floating Tag 2 */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 -right-4 glass px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-primary shadow-lg z-20"
              >
                ⚡ Endalk Tech
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}