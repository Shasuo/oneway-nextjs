import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { isInitialCarFramesLoaded, isMainPage } from "../Jotai/atoms";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const BorderLines = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const isThisMainPage = useAtom(isMainPage)[0];
  const [isLoaded, setIsLoaded] = useAtom(isInitialCarFramesLoaded);

  useEffect(() => {
    if (isMobile) {
      setIsLoaded(true);
    }
  }, [isMobile]);
  return (
    <>
      <motion.div
        initial={{ y: "100vh" }}
        animate={isLoaded || !isThisMainPage ? { y: 0 } : { y: "100vh" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: isThisMainPage ? 1.4 : 0.4,
        }}
        className="max-w-[97vw] w-full fixed top-0 left-1/2 -translate-x-1/2 h-[100vh] pointer-events-none user-select-none z-40 max-lg:hidden"
        style={{
          borderLeft: "0.08vw solid rgba(255, 255, 255, 0.4)",
          borderRight: "0.08vw solid rgba(255, 255, 255, 0.4)",
        }}
      />
      <motion.div
        initial={{ y: "100vh" }}
        animate={isLoaded || !isThisMainPage ? { y: 0 } : { y: "100vh" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-[91.5vw] w-full fixed top-0 left-1/2 -translate-x-1/2 h-[100vh] pointer-events-none user-select-none z-40 hidden max-lg:block"
        style={{
          borderLeft: "0.08vw solid rgba(255, 255, 255, 0.4)",
          borderRight: "0.08vw solid rgba(255, 255, 255, 0.4)",
        }}
      />
    </>
  );
};
