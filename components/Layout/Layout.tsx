import Link from "next/link";

import { Header } from "../FirstScreen/Header";
import { useAtom } from "jotai";
import { isInitialCarFramesLoaded } from "../Jotai/atoms";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { LinkUsPopup } from "../LinkUsPopup/LinkUsPopup";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [isLoaded, setIsLoaded] = useAtom(isInitialCarFramesLoaded);

  useEffect(() => {
    if (isMobile) {
      setIsLoaded(true);
    }
  }, [isMobile]);
  return (
    <div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={isLoaded ? { y: 0 } : { y: "100vh" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
        className="max-w-[97vw] w-full fixed top-0 left-1/2 -translate-x-1/2 h-[100vh] pointer-events-none user-select-none z-40 max-lg:hidden"
        style={{
          borderLeft: "0.08vw solid rgba(255, 255, 255, 0.4)",
          borderRight: "0.08vw solid rgba(255, 255, 255, 0.4)",
        }}
      />
      <motion.div
        initial={{ y: "100vh" }}
        animate={isLoaded ? { y: 0 } : { y: "100vh" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-[91.5vw] w-full fixed top-0 left-1/2 -translate-x-1/2 h-[100vh] pointer-events-none user-select-none z-40 hidden max-lg:block"
        style={{
          borderLeft: "0.08vw solid rgba(255, 255, 255, 0.4)",
          borderRight: "0.08vw solid rgba(255, 255, 255, 0.4)",
        }}
      />
      <Header />
      <LinkUsPopup/>
      <div className="min-h-[90vh]">{children}</div>

      <footer
        className="max-w-[97vw] mx-auto w-full relative mt-[5vw] box-border flex items-center justify-between text_type_normal text_type_1_5x__mobile py-[2.22vw] px-[1.66vw] max-lg:max-w-[91.5vw] max-lg:py-[8.53vw] max-lg:flex-col max-lg:gap-[1.86vw] max-lg:text-[#727375]"
        style={{ borderTop: "0.07vw solid #434447" }}
      >
        <div className="min-lg:hidden">Все права защищены 2025</div>
        <Link href="https://vondo.ru/" target="_blank" className="underline">
          Сайт сделан в VONDO
        </Link>
        <div className="flex items-center gap-[1.67vw] max-lg:block">
          <Link href="" className="underline">
            Политика конфеданциальности
          </Link>
          <div className="max-lg:hidden">Все права защищены 2025</div>
        </div>
      </footer>
    </div>
  );
};
