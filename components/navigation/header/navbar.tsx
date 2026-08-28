"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Saurashya from "@/public/assets/images/saurashya.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled
            ? "bg-black/60 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "bg-white/5 backdrop-blur-md"
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 pl-1 text-primary-foreground"
          aria-label="Go to top"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-joust to-green-benzol">
            <Image
              src={Saurashya}
              alt="Saurashya"
              className="h-[34px] w-[34px] rounded-full border border-blue-cosmos object-cover"
            />
          </span>
          <span className="hidden text-base font-semibold tracking-tight sm:inline">
            Saurashya
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors duration-200 hover:bg-white/5 hover:text-primary-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-green-benzol px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-green-benzol/90 sm:inline-flex"
          >
            Let&apos;s talk
            <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/5 text-primary-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3.5 text-lg font-medium text-primary-foreground transition-colors hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="p-1">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-green-benzol px-4 py-3.5 text-lg font-semibold text-black"
                >
                  Let&apos;s talk
                  <FaArrowRight />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
