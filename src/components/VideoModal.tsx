"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!videoUrl) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-5xl aspect-video bg-black/50 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden glass shadow-[0_0_50px_rgba(139,92,246,0.3)] z-10 flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* Loading placeholder behind iframe */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>

            <iframe
              src={videoUrl}
              title="Project Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full relative z-0 border-0"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
