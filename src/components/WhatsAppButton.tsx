"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://t.me/abianas19"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on Telegram"
      animate={{ 
        y: [0, -10, 0] 
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#0088cc] text-white shadow-[0_0_20px_rgba(0,136,204,0.6)] flex items-center justify-center group cursor-pointer"
    >
      <FaTelegramPlane size={26} className="text-white" />

      <span className="absolute right-16 hidden sm:group-hover:block bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#0088cc]/40 whitespace-nowrap shadow-xl pointer-events-none">
        Chat on Telegram
      </span>
    </motion.a>
  );
}