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
          isScrolled ? "bg-gray-950/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"
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

            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl text-sm font-medium shadow-lg hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
            >
              <FileText size={16} />
              <span>CV & Resume</span>
            </button>
          </nav>

          <button
            className="md:hidden text-white cursor-pointer p-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Solid Dark Background, Heavy Blur & Border */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-full left-0 right-0 p-6 flex flex-col space-y-4 md:hidden bg-gray-950/95 backdrop-blur-2xl border-b border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowResumeModal(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium shadow-lg transition-all cursor-pointer mt-2"
            >
              <FileText size={18} />
              <span>View CV & Resume</span>
            </button>
          </motion.div>
        )}
      </header>

      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass bg-[#12121a]/95 border border-white/20 p-6 md:p-8 rounded-2xl max-w-lg w-full relative space-y-6 shadow-2xl"
          >
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
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white">CV</h4>
                  <p className="text-xs text-muted-foreground mt-1">Official Curriculum Vitae</p>
                </div>
                <div className="flex gap-2 pt-4">
                  <a href="/Endale-Gebeyehu-CV.pdf" target="_blank" rel="noreferrer" className="flex-1 text-center py-2 bg-primary/20 text-primary rounded-lg text-xs font-medium hover:bg-primary/30 transition-all">View</a>
                  <a href="/Endale-Gebeyehu-CV.pdf" download="Endale-Gebeyehu-CV.pdf" className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary/90 transition-all">Download</a>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white">Resume</h4>
                  <p className="text-xs text-muted-foreground mt-1">Professional Resume</p>
                </div>
                <div className="flex gap-2 pt-4">
                  <a href="/Endale-Gebeyehu-Resume.pdf" target="_blank" rel="noreferrer" className="flex-1 text-center py-2 bg-accent/20 text-accent rounded-lg text-xs font-medium hover:bg-accent/30 transition-all">View</a>
                  <a href="/Endale-Gebeyehu-Resume.pdf" download="Endale-Gebeyehu-Resume.pdf" className="flex-1 text-center py-2 bg-accent text-white rounded-lg text-xs font-medium hover:bg-accent/90 transition-all">Download</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}