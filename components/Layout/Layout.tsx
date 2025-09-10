import Link from "next/link";

import { Header } from "../FirstScreen/Header";
import { useAtom } from "jotai";
import { isInitialCarFramesLoaded } from "../Jotai/atoms";
import { motion } from "framer-motion";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  
  const isLoaded = useAtom(isInitialCarFramesLoaded)[0];
  return (
    <div>
      
       <motion.div
        initial={{ y: "100vh" }} 
        animate={isLoaded ? { y: 0 } : { y: "100vh" }} 
        transition={{ duration: .6, ease: "easeOut", delay: 1.4 }}
        className="max-w-[97vw] w-full fixed top-0 left-1/2 -translate-x-1/2 h-[100vh] pointer-events-none user-select-none z-40"
        style={{
          borderLeft: "0.08vw solid rgba(255, 255, 255, 0.4)",
          borderRight: "0.08vw solid rgba(255, 255, 255, 0.4)",
        }}
      />
      <Header />
      {children}
      <footer
        className="max-w-[97vw] mx-auto w-full relative mt-[5vw] box-border flex items-center justify-between text_type_normal py-[2.22vw] px-[1.66vw]"
        style={{ borderTop: "0.07vw solid #434447" }}
      >
        <Link href="https://vondo.ru/" target="_blank" className="underline">
          Сайт сделан в VONDO
        </Link>
        <Link href="" className="underline">
          Политика конфеданциальности
        </Link>
      </footer>
    </div>
  );
};
