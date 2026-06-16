"use client";

import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const words = ["Code", "Crafting", "Brilliance"];

export default function Landing() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const line: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "40%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-32 pt-28 sm:px-8 sm:pb-40"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-benzol/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center"
      >
        <motion.span
          variants={fade}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground backdrop-blur-sm sm:text-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-benzol" />
          Available for work
        </motion.span>

        <h1 className="flex flex-col items-center font-medium uppercase leading-[0.92] tracking-tight text-primary-foreground">
          {words.map((w) => (
            <span key={w} className="overflow-hidden">
              <motion.span
                variants={line}
                className="block text-[clamp(3rem,14vw,12rem)]"
              >
                {w === "Brilliance" ? (
                  <span className="bg-gradient-to-r from-blue-joust via-blue-hera to-green-benzol bg-clip-text text-transparent">
                    {w}
                  </span>
                ) : (
                  w
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fade}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-secondary-foreground sm:text-lg"
        >
          Empowering innovation through inspired design — where challenges spark
          creativity and solutions redefine possibilities.
        </motion.p>

        <motion.div
          variants={fade}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-benzol px-7 py-3.5 text-base font-semibold text-black transition-all duration-200 hover:bg-green-benzol/90 sm:w-auto"
          >
            Let&apos;s talk
            <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 sm:w-auto"
          >
            About me
          </a>
        </motion.div>
      </motion.div>

      {/* Live clock — desktop only to avoid clutter on mobile */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 right-8 z-10 hidden lg:block"
      >
        <LiveClock timeZone="Asia/Kathmandu" />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <MagneticWrapper>
          <a href="#about" aria-label="Scroll to about section">
            <ScrollDown />
          </a>
        </MagneticWrapper>
      </motion.div>
    </section>
  );
}
