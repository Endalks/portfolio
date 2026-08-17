"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://t.me/abianas19"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on Telegram"
      // ፍጹም ክብ ቅርጹን ሳይቀይር constantly ወደ ላይ እና ወደ ታች እንዲወዛወዝ (Wave/Float)
      animate={{ 
        y: [0, -10, 0] 
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      // ማውስ ሲነካው ቅርጹ ሳይለወጥ ትንሽ እንዲደምቅ (Glow) ብቻ
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#0088cc] text-white shadow-[0_0_20px_rgba(0,136,204,0.6)] flex items-center justify-center group cursor-pointer"
    >
      <FaTelegramPlane size={26} className="text-white" />

      {/* Tooltip text */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#0088cc]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none">
        Chat on Telegram
      </span>
    </motion.a>
  );
}