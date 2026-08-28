"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
  number: String;
  title_1: String;
  title_2: String;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-8 px-1 sm:my-10 sm:px-8 z-20">
      {/* oversized ghost index */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 select-none font-oswald text-[28vw] font-bold leading-none text-white/5 sm:-top-16 lg:text-[180px]"
      >
        {number}
      </span>

      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center flex-nowrap overflow-hidden p-0 w-full font-oswald"
      >
        <p className="text-[14vw] lg:text-[11vw] 2xl:text-[10rem] leading-[100%] text-primary-foreground mr-2 sm:mr-3">
          {title_1}
        </p>
        <div className="hidden sm:block">
          <HeadingAnimatedSvg text="LEARN MORE ABOUT OUT FEATURED WORK" />
        </div>
        <p className="text-[14vw] lg:text-[11vw] 2xl:text-[10rem] leading-[100%] text-primary-foreground italic">
          {title_2}
        </p>
      </motion.div>

      <SvgCurve />
    </div>
  );
};

export default Heading;
