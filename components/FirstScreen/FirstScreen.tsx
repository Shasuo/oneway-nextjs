import { useEffect, useRef, useState } from "react";
import { BottomThresholdInView } from "../BottomThresholdInView/BottomThresholdInViewю";
import { useAtom } from "jotai";
import { isCarAnimationLoaded } from "../Jotai/atoms";
import { motion, useInView } from "framer-motion";

interface TexBlockType {
  headline: string;
  text: string;
  active: boolean;
  textWidth: number;
  position: { top: number; left: number };
  isLoaded: boolean;
}

interface InteractiveLineType {
  width: number;
  isActive: boolean;
  angle: number;
  animationTimeMs?: number;
  position: { top: number; left: number };
}

const TextBlock = ({
  headline,
  text,
  active,
  textWidth,
  position,
  isLoaded,
}: TexBlockType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div
      ref={ref}
      className="absolute"
      style={{
        left: `${position.left}vw`,
        top: `${position.top}vw`,
        opacity: isInView ? 1 : 0.3,
        transition: ".3s",
        zIndex: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
      >
        <h3 className="font-semibold text_type_4x">{headline}</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      >
        <p
          className="mt-[1.11vw] text_type_2x"
          style={{ maxWidth: `${textWidth}vw` }}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
};

type InteractiveLineProps = InteractiveLineType & {
  id: number;
  startLineAnimationById: (lineId: number) => void;
};

const InteractiveLine = ({
  id,
  width,
  isActive,
  angle,
  position,
  animationTimeMs,
  startLineAnimationById,
}: InteractiveLineProps) => {
  const [animate, setAnimate] = useState(false);
  let animationTime = 130;
  if (animationTimeMs) {
    animationTime = animationTimeMs;
  }

  if (isActive && !animate) {
    setAnimate(true);
    setTimeout(() => {
      startLineAnimationById(id + 1);
    }, animationTime);
  }
  return (
    <div
      className="overflow-hidden absolute"
      style={{
        width: `${width}vw`,
        left: `${position.left}vw`,
        top: `${position.top}vw`,
        transform: `rotate(${angle}deg)`,
      }}
    >
      <svg width="100%" height="0.07vw">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="white"
          strokeWidth="0.07vw"
          strokeDasharray="0.26vw"
        />
      </svg>
      <div
        className="absolute w-[100%] bg-white h-[1vw] top-0"
        style={{
          left: animate ? 0 : `-${width}vw`,
          transition: `${animationTime}ms`,
        }}
      />
    </div>
  );
};

const InteractiveLinesData: InteractiveLineType[] = [
  {
    width: 12.5,
    isActive: false,
    position: { left: -1.5, top: 32.22 },
    angle: -5.4,
    animationTimeMs: 100,
  },
  {
    width: 9.8,
    isActive: false,
    position: { left: 6.6, top: 26.8 },
    angle: -83.46,
    animationTimeMs: 100,
  },
  {
    width: 7.4,
    isActive: false,
    position: { left: 11.53, top: 20.1 },
    angle: -30.18,
    animationTimeMs: 100,
  },
  {
    width: 12.5,
    isActive: false,
    position: { left: 18.14, top: 20.05 },
    angle: 16.7,
    animationTimeMs: 100,
  },
  {
    width: 15.86,
    isActive: false,
    position: { left: 28.4, top: 26.97 },
    angle: 40.38,
    animationTimeMs: 100,
  },
  {
    width: 4.34,
    isActive: false,
    position: { left: 42.3, top: 31.8 },
    angle: -7.4,
    animationTimeMs: 100,
  },
  {
    width: 10.675,
    isActive: false,
    position: { left: 46.38, top: 33.1 },
    angle: 17,
    animationTimeMs: 100,
  },
  {
    width: 4.1,
    isActive: false,
    position: { left: 56.8, top: 34.65 },
    angle: 0,
    animationTimeMs: 100,
  },
  {
    width: 6.53,
    isActive: false,
    position: { left: 59.96, top: 36.97 },
    angle: 44.57,
    animationTimeMs: 100,
  },
  {
    width: 3.4,
    isActive: false,
    position: { left: 65.1, top: 38.1 },
    angle: -42.53,
    animationTimeMs: 91,
  },
  {
    width: 13.7,
    isActive: false,
    position: { left: 68, top: 37.15 },
    angle: 1.59,
    animationTimeMs: 265,
  },
  {
    width: 4.71,
    isActive: false,
    position: { left: 81.54, top: 38.19 },
    angle: 21.25,
    animationTimeMs: 125,
  },
  {
    width: 2.75,
    isActive: false,
    position: { left: 86.1, top: 39.08 },
    angle: 0,
    animationTimeMs: 73,
  },
  {
    width: 3.89,
    isActive: false,
    position: { left: 87.9, top: 40.74 },
    angle: 58.86,
    animationTimeMs: 104,
  },
  {
    width: 4,
    isActive: false,
    position: { left: 90.37, top: 43.64 },
    angle: 39.4,
    animationTimeMs: 107,
  },
  {
    width: 3,
    isActive: false,
    position: { left: 91.38, top: 46 },
    angle: 130,
    animationTimeMs: 80,
  },
  {
    width: 18.03,
    isActive: false,
    position: { left: 73.9, top: 47.78 },
    angle: 176.02,
    animationTimeMs: 481,
  },
  {
    width: 6.31,
    isActive: false,
    position: { left: 68.2, top: 50.26 },
    angle: 143.51,
    animationTimeMs: 168,
  },
  {
    width: 25.93,
    isActive: false,
    position: { left: 43.2, top: 54.7 },
    angle: 168.57,
    animationTimeMs: 691,
  },
  {
    width: 7.5,
    isActive: false,
    position: { left: 36.13, top: 58.37 },
    angle: 162.74,
    animationTimeMs: 200,
  },
  {
    width: 6.545,
    isActive: false,
    position: { left: 32.1, top: 62.55 },
    angle: 107.28,
    animationTimeMs: 174,
  },
  {
    width: 11.07,
    isActive: false,
    position: { left: 24.4, top: 69 },
    angle: 143.42,
    animationTimeMs: 295,
  },
  {
    width: 2.8,
    isActive: false,
    position: { left: 23.15, top: 73.3 },
    angle: 133.99,
    animationTimeMs: 75,
  },
  {
    width: 8.45,
    isActive: false,
    position: { left: 15.2, top: 75 },
    angle: 170.54,
    animationTimeMs: 225,
  },
  {
    width: 9.1,
    isActive: false,
    position: { left: 7.77, top: 72.24 },
    angle: -130.54,
    animationTimeMs: 243,
  },
  {
    width: 10.5,
    isActive: false,
    position: { left: 3.47, top: 63.54 },
    angle: -96.84,
    animationTimeMs: 280,
  },
  {
    width: 3.5,
    isActive: false,
    position: { left: 4.67, top: 58.1 },
    angle: -172.03,
    animationTimeMs: 93,
  },
  {
    width: 6.01,
    isActive: false,
    position: { left: 2.8, top: 55.05 },
    angle: -67.58,
    animationTimeMs: 160,
  },
  {
    width: 6.81,
    isActive: false,
    position: { left: 0.13, top: 52.26 },
    angle: -180,
    animationTimeMs: 181,
  },
  {
    width: 4,
    isActive: false,
    position: { left: -3.2, top: 50.78 },
    angle: -131.19,
    animationTimeMs: 107,
  },
];

export const FirstScreen = () => {
  const [animatedLines, setAnimatedLines] =
    useState<InteractiveLineType[]>(InteractiveLinesData);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const isLoaded = useAtom(isCarAnimationLoaded)[0];

  const startLineAnimationHandle = (lineId: number) => {
    if (lineId < animatedLines.length) {
      if (!animatedLines[lineId].isActive) {
        setAnimatedLines((prev) => {
          const updated = [...prev];
          updated[lineId] = { ...updated[lineId], isActive: true };
          return updated;
        });
      }
    }
  };

  useEffect(() => {
    if (isInView && isLoaded) {
      startLineAnimationHandle(0);
    }
  }, [isInView, isLoaded]);

  return (
    <section className="mt-[11.25vw] relative max-lg:hidden">
      <div
        className="absolute w-full overflow-hidden top-[19vw] left-0 z-10"
        style={{ height: "calc(100% + 20vw)" }}
      >
        <div className="w-[42.9vw] h-[42.9vw] absolute rounded-[100%] filter blur-[7vw] bg-[#400F47] right-[-36.25vw] top-[10vw] opacity-60" />
        <div className="w-[42.9vw] h-[42.9vw] absolute rounded-[100%] filter blur-[7vw] bg-[#0016FF] left-[-39.24vw] top-[33vw] opacity-50" />
      </div>

      <div className="max-w-[97vw] mx-auto w-full relative max-lg:max-w-[91.5vw] h-[77vw] overflow-hidden">
        <h1 className="text_type_big max-w-[59.03vw] ml-[6.25vw] font-semibold">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            <span className="opacity-[40%]">Автомобиль из-за рубежа —</span> это
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          >
            выше класс и лучше состояние —
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          >
            за те же деньги
          </motion.div>
        </h1>

        <div>
          <TextBlock
            active
            headline="Выгодно"
            text="Призвети машину из-за рубежа, дешевле, чем купить такую же в России"
            textWidth={24.24}
            position={{ top: 18.7, left: 36.04 }}
            isLoaded={isLoaded}
          />
          <TextBlock
            active={false}
            headline="Надежно"
            text="Авто за рубежом проходят ТО у официальных диллеров, поэтому служат дольше"
            textWidth={23.4}
            position={{ top: 39.5, left: 68.3 }}
            isLoaded={isLoaded}
          />
          <div ref={ref} className="w-full absolute top-[50vw] h-[1vw] " />

          <TextBlock
            active={false}
            headline="Прозрачно"
            text="Из-за строгого законодательства риск скурченного пробега и скрытых дефектов меньше"
            textWidth={23.5}
            position={{ top: 53.2, left: 11.1 }}
            isLoaded={isLoaded}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        >
          <div>
            <div
              style={{
                position: "absolute",
                top: "17vw",
                left: 0,
                right: 0,
                height: "30.43vw",
                background:
                  "linear-gradient(to bottom, rgba(20, 21, 25, 1), rgba(20, 21, 25, 0.7), rgba(20, 21, 25, 0))",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {animatedLines.map((line: InteractiveLineType, index: number) => (
              <InteractiveLine
                key={index}
                id={index}
                width={line.width}
                isActive={line.isActive}
                position={line.position}
                angle={line.angle}
                startLineAnimationById={startLineAnimationHandle}
                animationTimeMs={line.animationTimeMs}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
