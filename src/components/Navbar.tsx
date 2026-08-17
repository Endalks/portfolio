"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Eye, Download, FileText } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

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
    <>
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

            {/* CV & Resume Modal Trigger Button */}
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl text-sm font-medium shadow-lg hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
            >
              <FileText size={16} />
              <span>CV & Resume</span>
            </button>

            <motion.a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 neon-glow font-medium"
            >
              Hire Me
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white cursor-pointer"
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
            className="absolute top-full left-0 right-0 glass-card p-6 flex flex-col space-y-4 md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-md shadow-2xl"
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

            <button
              onClick={() => {
                setIsOpen(false);
                setShowResumeModal(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium shadow-lg transition-all cursor-pointer"
            >
              <FileText size={18} />
              <span>View CV & Resume</span>
            </button>

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

      {/* CV & Resume Selection Modal (Popup) */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass bg-[#12121a]/95 border border-white/20 p-6 md:p-8 rounded-2xl max-w-lg w-full relative space-y-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">My CV & Resume</h3>
              <p className="text-muted-foreground text-sm">
                Choose whether you want to view online or download my official documents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* CV Section */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Curriculum Vitae (CV)</h4>
                  <p className="text-xs text-muted-foreground mt-1">Detailed academic and technical background.</p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="/Endale_Gebeyehu_CV_2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-all text-xs font-medium cursor-pointer"
                  >
                    <Eye size={14} /> View
                  </a>
                  <a
                    href="/Endale_Gebeyehu_CV_2026.pdf"
                    download="Endale_Gebeyehu_CV_2026.pdf"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-xs font-medium cursor-pointer"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>

              {/* Resume Section */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Professional Resume</h4>
                  <p className="text-xs text-muted-foreground mt-1">Concise summary of experience and skills.</p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="/ENDALE_GEBEYEHU_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-all text-xs font-medium cursor-pointer"
                  >
                    <Eye size={14} /> View
                  </a>
                  <a
                    href="/ENDALE_GEBEYEHU_Resume.pdf"
                    download="ENDALE_GEBEYEHU_Resume.pdf"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all text-xs font-medium cursor-pointer"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}