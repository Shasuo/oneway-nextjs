import { useEffect, useState, useRef } from "react";
import { useAtom } from "jotai";
import {
  carAnimationGoingClose,
  isCarAnimationLoaded,
  isInitialCarFramesLoaded,
} from "../Jotai/atoms";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const START_FRAME = 100;
const END_FRAME = 189;

const FRAME_DURATION_MS = 30;
const SCROLL_MULTIPLIER = 0.04;

export default function PreloadCar() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [currentFrame, setCurrentFrame] = useState(START_FRAME);
  const [isScrollOver, setIsScrollOver] = useAtom(carAnimationGoingClose);
  const [isFinalClose, setIsFinalClose] = useAtom(isCarAnimationLoaded);
  const [isLoaded, setIsLoaded] = useAtom(isInitialCarFramesLoaded);

  const targetFrameRef = useRef(START_FRAME);
  const isAutoScrollingRef = useRef(false);
  const loadedImagesRef = useRef<Record<number, HTMLImageElement>>({});

  useEffect(() => {
    if(isMobile) return;
    const loadAllFrames = async () => {
      const promises: Promise<void>[] = [];

      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new Image();
        img.src = `/frames/${i}.webp`;
        loadedImagesRef.current[i] = img;

        const promise = new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load frame ${i}`));
        });

        promises.push(promise);
      }

      try {
        await Promise.all(promises);
        console.log("✅ Все кадры успешно загружены");
        setIsLoaded(true);
      } catch (err) {
        console.error("❌ Ошибка загрузки кадров:", err);
        setIsLoaded(true);
      }
    };

    loadAllFrames();
  }, [isMobile]);

  useEffect(() => {
    if (!isLoaded) return;

    let animationId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      if (deltaTime >= FRAME_DURATION_MS) {
        setCurrentFrame((prev) => {
          let next = prev;

          if (prev === 150 && !isAutoScrollingRef.current) {
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
  }, [isLoaded]);

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
      const timer = setTimeout(() => {
        setIsFinalClose(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isScrollOver]);

  if (isFinalClose) return null;

  if (!isLoaded) {
    return (
      <div className="fixed left-0 top-0 w-full h-screen overflow-hidden bg-black z-18 max-lg:hidden" />
    );
  }

  return (
    <div
      className="fixed left-0 top-0 w-full h-screen overflow-hidden bg-black z-18 max-lg:hidden"
      style={{ transition: ".7s", opacity: isScrollOver ? 0 : 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
      >
        <div
          className="w-[38.1vw] h-[38.1vw] rounded-[50%] bg-[#400F47] mx-auto"
          style={{ filter: "blur(265px)" }}
        />
      </motion.div>

      <motion.div
        initial={{ x: "-120vw", y: "120vh" }}
        animate={isLoaded ? { x: 0, y: "-10vw" } : { x: "-120vw", y: "120vh" }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 1.4,
        }}
      >
        <div
          className="w-[120vw] h-[0.06vw] absolute left-[-10vw] top-0"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            transform: "rotate(-29deg)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      >
        <img
          src={
            loadedImagesRef.current[currentFrame]?.src ||
            `/frames/${currentFrame}.webp`
          }
          alt="Animation frame"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}
