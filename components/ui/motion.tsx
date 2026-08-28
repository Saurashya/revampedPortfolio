"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { FC, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

/** Fades + slides content in when it scrolls into view. Honors reduced-motion. */
export const Reveal: FC<RevealProps> = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  once = true,
  amount = 0.25,
}) => {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

/** Parent that staggers the entrance of <StaggerItem> children. */
export const Stagger: FC<StaggerProps> = ({
  children,
  className,
  delay = 0,
  stagger = 0.12,
  once = true,
  amount = 0.2,
}) => {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={false}
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
}

export const StaggerItem: FC<StaggerItemProps> = ({
  children,
  className,
  direction = "up",
  distance = 24,
  ...props
}) => {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset(direction, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  );
};

/** Subtle lift + glow on hover for cards. Disabled under reduced-motion. */
export const HoverLift: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
};
