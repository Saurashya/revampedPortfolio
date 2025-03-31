"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WaterWave = dynamic(() => import("react-water-wave"), {
    ssr: false, // Disable SSR for this component
});

interface WaterWaveWrapperProps {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    children,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? (
        <WaterWave
            imageUrl={imageUrl}
            dropRadius={dropRadius}
            perturbance={perturbance}
            resolution={resolution}
        >
            {children}
        </WaterWave>
    ) : null;
};

export default WaterWaveWrapper;
