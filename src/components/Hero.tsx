"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling completely when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "static";
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
          Endalk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </nav>

        {/* CV & Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all cursor-pointer"
          >
            <FileText size={16} /> CV & Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none relative z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen Fixed & Blured Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-gray-950/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden touch-none">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            Experience
          </a>

          <div className="pt-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] cursor-pointer"
            >
              <FileText size={18} /> CV & Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}