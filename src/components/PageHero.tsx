"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] tracking-[0.4em] text-gold uppercase"
        >
          Glaube Exotics
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-4xl text-4xl sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-8 text-silver"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
