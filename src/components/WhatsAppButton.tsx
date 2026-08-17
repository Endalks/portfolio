"use client";

import { FaTelegramPlane } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://t.me/abianas19"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on Telegram"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#229ED9] text-white shadow-lg hover:bg-[#1d8ebf] transition-all duration-200 flex items-center justify-center group cursor-pointer"
    >
      <FaTelegramPlane size={24} />

      {/* Tooltip text */}
      <span className="absolute right-16 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat on Telegram
      </span>
    </a>
  );
}