"use client";

import { motion } from "framer-motion";
import { User, Target, Zap, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Personal <span className="text-gradient">Branding</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* ሁለተኛው ፎቶ የተቀመጠበት ቦታ */}
            <div className="aspect-square relative rounded-3xl overflow-hidden glass border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="/about-me2.jpg"
                  alt="Abian Branding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:-right-10 glass px-6 py-4 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                   <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Top Tier</h4>
                  <p className="text-sm text-primary">Web Engineer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-3 flex items-center gap-3">
                <User size={26} /> Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[17px] border-l-2 border-white/10 pl-6">
                I am a passionate software engineer specializing in high-conversion web applications. I bridge the gap between stunning aesthetic design and robust backend architecture, ensuring every project is visually breathtaking and technically flawless.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 flex items-center gap-3">
                <Target size={26} /> My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[17px] border-l-2 border-white/10 pl-6">
                To transform ambitious ideas into digital realities. I build scalable, maintainable, and client-focused systems that generate genuine business value, rather than just writing code and calling it a day.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck size={26} className="text-green-400" /> Why Choose Me
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                     <span className="text-primary text-sm font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide">Client-Centric Approach</h4>
                    <p className="text-[15px] text-muted-foreground mt-1">I don&apos;t just build websites; I craft comprehensive conversion systems tailored meticulously to your target audience.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                     <span className="text-accent text-sm font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide">Pixel-Perfect Engineering</h4>
                    <p className="text-[15px] text-muted-foreground mt-1">Every animation, shadow, and mobile interaction is systematically constructed for an unrivaled premium feel.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}