"use client"
import { FC, ReactNode, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface MagneticWrapperProps {
    className?: string;
    children: ReactNode;
}

const MagneticWrapper: FC<MagneticWrapperProps> = ({ className, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { x, y } = position;

    const handleMouse = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { width, height, left, top } = boundingRect;
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    }

    return (
        <motion.div
            className={cn("relative", className)}
            ref={ref}
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 0.5
            }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    );
}

export default MagneticWrapper;
