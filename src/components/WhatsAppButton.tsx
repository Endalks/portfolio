"use client";

import { FaTelegramPlane } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://t.me/abianas19"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on Telegram"
      className="fixed bottom-6 right-6 z-[9999] p-4 rounded-full bg-[#0088cc] text-white shadow-[0_0_25px_rgba(0,136,204,0.7)] hover:bg-[#229ED9] hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce"
    >
      <FaTelegramPlane size={30} className="text-white drop-shadow-md" />

      {/* Tooltip text */}
      <span className="absolute right-20 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#0088cc]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none">
        Chat on Telegram
      </span>
    </a>
  );
}