import { useEffect, useRef } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const progressRef = useRef(0);
  const reqIdRef = useRef<number | null>(null);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);

  const animateIn = () => {
    if (reqIdRef.current !== null) {
      cancelAnimationFrame(reqIdRef.current);
      timeRef.current = Math.PI / 2;
    }

    setPath(progressRef.current);
    reqIdRef.current = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementY } = e;
    const box = (e.target as HTMLElement).getBoundingClientRect();
    xRef.current = (e.clientX - box.left) / box.width;
    progressRef.current += movementY;
  };

  const resetAnimation = () => {
    if (reqIdRef.current !== null) {
      cancelAnimationFrame(reqIdRef.current);
    }
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    let newProgress = progressRef.current * Math.sin(timeRef.current);
    setPath(newProgress);
    progressRef.current = lerp(progressRef.current, 0, 0.04);
    timeRef.current += 0.2;

    if (Math.abs(progressRef.current) > 0.5) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      timeRef.current = Math.PI / 2;
      progressRef.current = 0;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPath(progressRef.current);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener and animations on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (reqIdRef.current !== null) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, []);

  const setPath = (value: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${width * xRef.current} ${50 + value} ${width} 50`
    );
  };

  return (
    <div className="line">
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
