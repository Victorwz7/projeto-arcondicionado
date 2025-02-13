"use client";

import { PhoneCall, MessageCircle, Clock } from "lucide-react";

export function ContactBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-xl font-bold">DS-Arcondicionado</div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white">
            <a href="tel:1199999999" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <PhoneCall className="h-5 w-5" />
              <span>(11) 99999-9999</span>
            </a>
            <a href="https://wa.me/5511999999999" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Seg-Sáb: 8h-18h</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}