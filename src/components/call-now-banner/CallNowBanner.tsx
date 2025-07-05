"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function CallNowBanner() {
  return (
    <Link
      href="tel:+905340181933"
      aria-label="Hemen arayın"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-3 shadow-md hover:bg-blue-700 transition-colors
                 text-sm font-medium
                 sm:bottom-6 sm:right-6
                 md:bottom-8 md:right-8
                 animate-bounce-slow"
    >
      <Phone className="w-5 h-5" />
      <span className="whitespace-nowrap">Hemen Arayın: +90 534 018 1933</span>
    </Link>
  );
}
