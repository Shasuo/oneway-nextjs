import { useEffect, useRef, useState } from "react";
import { BottomThresholdInView } from "../BottomThresholdInView/BottomThresholdInViewю";

interface TextPointProps {
  mt: number;
  ml: number;
  text: string;
  lineWidth: number;
  isActive: boolean;
  needAlign?: boolean;
}

const TextPoint = ({
  mt,
  ml,
  text,
  lineWidth,
  isActive,
  needAlign,
}: TextPointProps) => {
  return (
    <div
      className={`flex ${needAlign ? "items-start" : "items-center"}`}
      style={{
        opacity: isActive ? 1 : 0.5,
        marginLeft: `${ml}vw`,
        marginTop: `${mt}vw`,
        transition: ".3s",
      }}
    >
      <div className="flex items-center">
        <div
          className="rounded-[100%] bg-white"
          style={{
            width: isActive ? "1.94vw" : "0.97vw",
            height: isActive ? "1.94vw" : "0.97vw",
            transition: ".3s",
          }}
        />
        <div
          className="h-[0.07vw] bg-white ml-[0.55vw] mr-[1.11vw]"
          style={{ width: `${lineWidth}vw` }}
        />
      </div>
      <p
        className="w-full font-medium text_type_3x text-white"
        style={{
          maxWidth: `38vw`,
          marginTop: needAlign ? (isActive ? "-.15vw" : "-.6vw") : undefined,
        }}
      >
        {text}
      </p>
    </div>
  );
};

const FRAME_DURATION_MS = 100;
const SCROLL_MULTIPLIER = 0.4;
const TOTAL_FRAMES = 86;

const WheelSequence = () => {
  const [frame, setFrame] = useState(0);
  const lastY = useRef(0);
  const scrollAccumulator = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const delta = window.scrollY - lastY.current;
      lastY.current = window.scrollY;

      scrollAccumulator.current += delta * SCROLL_MULTIPLIER;

      const frameStep = scrollAccumulator.current / (FRAME_DURATION_MS / 16.66);

      const frameDelta = Math.trunc(frameStep);

      if (frameDelta !== 0) {
        scrollAccumulator.current -= frameDelta * (FRAME_DURATION_MS / 16.66);

        setFrame((prev) => {
          let next =
            frameDelta > 0
              ? (prev + frameDelta) % TOTAL_FRAMES
              : (prev + (frameDelta % TOTAL_FRAMES) + TOTAL_FRAMES) %
                TOTAL_FRAMES;
          return next;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const src = `/wheelFrames/Wheel_new${frame.toString().padStart(2, "0")}.webp`;

  return (
    <img
      src={src}
      alt="Wheel animation"
      className="absolute inset-0 w-full h-full object-cover left-[-7vw]"
      loading="eager"
      fetchPriority="high"
    />
  );
};

export const WheelBlock = () => {
  return (
    <section className="bg-black relative overflow-hidden max-lg:hidden mt-[11.11vw]">
      <div
        className="w-[118.47vw] h-[118.47vw] absolute rounded-[100%] top-[-11vw] left-[-70.4vw] z-[2]"
        style={{ border: "0.07vw dashed white" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "22.43vw", 
          background:
            "linear-gradient(to bottom, rgba(20, 21, 25, 1), rgba(20, 21, 25, 0))",
          pointerEvents: "none", 
          zIndex: 10, 
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22.43vw", 
          background:
            "linear-gradient(to top, rgba(20, 21, 25, 1), rgba(20, 21, 25, 0))",
          pointerEvents: "none", 
          zIndex: 10, 
        }}
      />
      <div className="pt-[12.8vw] pb-[5.76vw] relative z-10">
        <BottomThresholdInView thresholdVw={13}>
          {(isActive: any) => (
            <TextPoint
              mt={0}
              ml={36.6}
              text="Купим  и безопасно доставим за 5 недель"
              lineWidth={10.3}
              isActive={isActive}
            />
          )}
        </BottomThresholdInView>
        <BottomThresholdInView thresholdVw={13}>
          {(isActive: any) => (
            <TextPoint
              mt={7.6}
              ml={42}
              text="На каждом этапе проверим состояние авто и пришлем видео-отчёт"
              lineWidth={8.2}
              isActive={isActive}
              needAlign
            />
          )}
        </BottomThresholdInView>
        <BottomThresholdInView thresholdVw={13}>
          {(isActive: any) => (
            <TextPoint
              mt={5.625}
              ml={45.5}
              text="Контролируем сроки и информируем о текущем статусе перевозки"
              lineWidth={7.71}
              isActive={isActive}
              needAlign
            />
          )}
        </BottomThresholdInView>

        <BottomThresholdInView thresholdVw={13}>
          {(isActive: any) => (
            <TextPoint
              mt={5.625}
              ml={47.25}
              text="Автомобиль перевозится в крытом прицепе и застрахован на всём пути — от покупки до передачи в руки"
              lineWidth={10.41}
              isActive={isActive}
              needAlign
            />
          )}
        </BottomThresholdInView>
      </div>
      <WheelSequence />
    </section>
  );
};
