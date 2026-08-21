"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <Link
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center border border-white/15 bg-black/80 text-foreground backdrop-blur-sm transition-colors hover:border-gold hover:text-gold md:right-8 md:bottom-8"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  );
}
