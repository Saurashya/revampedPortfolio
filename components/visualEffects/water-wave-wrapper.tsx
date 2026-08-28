"use client";
import {
    Component,
    ComponentType,
    FC,
    ReactNode,
    useEffect,
    useState,
} from "react";

interface WaterWaveComponentProps {
    imageUrl: string;
    dropRadius: number;
    perturbance: number;
    resolution: number;
    className?: string;
    children: () => ReactNode;
}

interface WaterWaveWrapperProps {
    imageUrl: string;
    dropRadius: number;
    perturbance: number;
    resolution: number;
    children: () => ReactNode;
}

class WaterWaveBoundary extends Component<
    { children: ReactNode; fallback: ReactNode },
    { failed: boolean }
> {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    render() {
        return this.state.failed ? this.props.fallback : this.props.children;
    }
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    children,
}) => {
    const [WaterWaveComponent, setWaterWaveComponent] = useState<ComponentType<WaterWaveComponentProps> | null>(null);

    useEffect(() => {
        const canvas = document.createElement("canvas");
        const supportsWebGL = Boolean(
            canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        );
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!supportsWebGL || reduceMotion) return;

        let active = true;
        import("react-water-wave")
            .then((mod) => {
                if (active) {
                    setWaterWaveComponent(() => mod.default as ComponentType<WaterWaveComponentProps>);
                }
            })
            .catch(() => {
                // The portfolio remains fully usable without the optional effect.
            });

        return () => {
            active = false;
        };
    }, []);

    const content = children();

    if (!WaterWaveComponent) return content;

    return (
        <WaterWaveBoundary fallback={content}>
            <WaterWaveComponent
                imageUrl={imageUrl}
                dropRadius={dropRadius}
                perturbance={perturbance}
                resolution={resolution}
                className="water-wave min-h-screen bg-black"
            >
                {() => content}
            </WaterWaveComponent>
        </WaterWaveBoundary>
    );
};

export default WaterWaveWrapper;
