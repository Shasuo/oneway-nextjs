import { useEffect, useState, useRef } from "react";

const START_FRAME = 100;
const END_FRAME = 189;
const FRAME_COUNT = END_FRAME - START_FRAME + 1;

const FRAME_DURATION_MS = 30;
const SCROLL_MULTIPLIER = 0.04;

export default function PreloadCar() {
  const [currentFrame, setCurrentFrame] = useState(START_FRAME);
  const [isScrollOver, setIsScrollOver] = useState(false);
  const [isFinalClose, setIsFinalClose] = useState(false);

  const targetFrameRef = useRef(START_FRAME);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    let animationId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      if (deltaTime >= FRAME_DURATION_MS) {
        setCurrentFrame((prev) => {
          let next = prev;

          if (prev === 170 && !isAutoScrollingRef.current) {
            isAutoScrollingRef.current = true;
            targetFrameRef.current = END_FRAME;
            setIsScrollOver(true);
          }

          if (targetFrameRef.current !== prev) {
            if (targetFrameRef.current > prev) {
              next = prev + 1;
              if (next > END_FRAME) next = END_FRAME;
            } else {
              next = prev - 1;
              if (next < START_FRAME) next = START_FRAME;
            }
          }

          return next;
        });

        lastTime = time;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
     if (isFinalClose) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isAutoScrollingRef.current) return;

      const step = Math.round(e.deltaY * SCROLL_MULTIPLIER);
      if (step !== 0) {
        targetFrameRef.current += step;
        targetFrameRef.current = Math.max(
          START_FRAME,
          Math.min(END_FRAME, targetFrameRef.current)
        );
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isFinalClose]);

  useEffect(() => {
    if (isScrollOver) {
      setTimeout(() => {
        setIsFinalClose(true);
      }, 700);
    }
  }, [isScrollOver]);

  if (isFinalClose) return null;

  return (
    <div
      className="fixed left-0 top-0 w-full h-screen overflow-hidden bg-black z-18 max-lg:hidden"
      style={{ transition: ".7s", opacity: isScrollOver ? 0 : 1 }}
    >
      <div
        className="w-[38.1vw] h-[38.1vw] rounded-[50%] bg-[#400F47] mx-auto"
        style={{ filter: "blur(265px)" }}
      />
      <div
        className="w-[120vw] h-[0.06vw] absolute left-[-10vw] top-[50%]"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          transform: "rotate(-29deg)",
        }}
      />

      <img
        src={`/frames/${currentFrame}.webp`}
        alt="Animation frame"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
