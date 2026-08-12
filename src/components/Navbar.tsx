"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Eye, Download } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-heading font-bold text-gradient"
        >
          Endalk Tech
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Resume Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1 py-2">
              Resume ▾
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-gray-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
              <a 
                href="/ENDALE_GEBEYEHU_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <Eye size={14} /> View
              </a>
              <a 
                href="/ENDALE_GEBEYEHU_Resume.pdf" 
                download="ENDALE_GEBEYEHU_Resume.pdf"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <Download size={14} /> Download
              </a>
            </div>
          </div>

          {/* CV Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1 py-2">
              CV ▾
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-gray-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
              <a 
                href="/Endale_Gebeyehu_CV_2026.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <Eye size={14} /> View
              </a>
              <a 
                href="/Endale_Gebeyehu_CV_2026.pdf" 
                download="Endale_Gebeyehu_CV_2026.pdf"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <Download size={14} /> Download
              </a>
            </div>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 neon-glow font-medium"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-card p-6 flex flex-col space-y-4 md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {/* Mobile Resume Section */}
            <div>
              <p className="text-xs text-gray-400 mb-1 font-bold">RESUME</p>
              <div className="flex gap-2">
                <a
                  href="/ENDALE_GEBEYEHU_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 text-center text-sm font-medium text-white flex items-center justify-center gap-1 hover:bg-white/10"
                >
                  <Eye size={14} /> View
                </a>
                <a
                  href="/ENDALE_GEBEYEHU_Resume.pdf"
                  download="ENDALE_GEBEYEHU_Resume.pdf"
                  className="flex-1 py-2 px-3 rounded-lg bg-primary/20 text-center text-sm font-medium text-primary flex items-center justify-center gap-1 hover:bg-primary/30"
                >
                  <Download size={14} /> Download
                </a>
              </div>
            </div>

            {/* Mobile CV Section */}
            <div>
              <p className="text-xs text-gray-400 mb-1 font-bold">FULL CV</p>
              <div className="flex gap-2">
                <a
                  href="/Endale_Gebeyehu_CV_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 text-center text-sm font-medium text-white flex items-center justify-center gap-1 hover:bg-white/10"
                >
                  <Eye size={14} /> View
                </a>
                <a
                  href="/Endale_Gebeyehu_CV_2026.pdf"
                  download="Endale_Gebeyehu_CV_2026.pdf"
                  className="flex-1 py-2 px-3 rounded-lg bg-primary/20 text-center text-sm font-medium text-primary flex items-center justify-center gap-1 hover:bg-primary/30"
                >
                  <Download size={14} /> Download
                </a>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-3 rounded-full bg-primary text-white text-center font-medium mt-2"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </header>
  );
}