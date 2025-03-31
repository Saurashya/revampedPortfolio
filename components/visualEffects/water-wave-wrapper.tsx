"use client";
import { FC, ReactNode, useEffect, useState } from "react";

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
    const [WaterWaveComponent, setWaterWaveComponent] = useState<any>(null);

    useEffect(() => {
        // Only import the component on the client side
        import("react-water-wave").then((mod) => {
            setWaterWaveComponent(() => mod.default);
            setIsMounted(true);
        });
    }, []);

    if (!isMounted || !WaterWaveComponent) {
        return null;
    }

    return (
        <WaterWaveComponent
            imageUrl={imageUrl}
            dropRadius={dropRadius}
            perturbance={perturbance}
            resolution={resolution}
        >
            {children}
        </WaterWaveComponent>
    );
};

export default WaterWaveWrapper;