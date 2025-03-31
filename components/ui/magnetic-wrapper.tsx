import { FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps {
  className?: string;
  children: ReactNode;
}

const MagneticWrapper: FC<MagneticWrapperProps> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, left, top } = boundingRect;
      const middleX = e.clientX - (left + width / 2);
      const middleY = e.clientY - (top + height / 2);
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Adjust effect intensity
    }
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      }}
      onMouseMove={handleMouse} // ✅ Fixed type
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
