"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2200&q=80)",
        }}
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:px-10">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[11px] tracking-[0.42em] text-gold uppercase"
        >
          Driven by Exclusivity
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-6 max-w-4xl text-5xl leading-[0.95] sm:text-7xl md:text-8xl"
        >
          Beyond Ordinary.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 max-w-xl text-base leading-8 text-silver sm:text-lg"
        >
          Glaube Exotics connects you to exceptional automobiles, bespoke
          builds and global automotive opportunities.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink href="/inventory">Explore Vehicles</ButtonLink>
          <ButtonLink href="/request" variant="outline">
            Request a Vehicle
          </ButtonLink>
        </motion.div>
      </div>

      <a
        href="#introduction"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-silver uppercase"
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
