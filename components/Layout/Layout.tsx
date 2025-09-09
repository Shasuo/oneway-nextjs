import Link from "next/link";
import { useState } from "react";
import { Header } from "../FirstScreen/Header";

const HeaderLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link className="text_type_2x" href={href}>
      {text}
    </Link>
  );
};
interface HeaderLinksType {
  text: string;
  href?: string;
}

const headerLinks: HeaderLinksType[] = [
  { text: "О нас", href: "" },
  { text: "Кейсы", href: "" },
  { text: "Услуги", href: "" },
  { text: "FAQ", href: "" },
  { text: "Контакты", href: "" },
];
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isPreloadOver, setIsPreloadOver] = useState(true);
  return (
    <div>
      <div
        className="max-w-[97vw] w-full fixed top-0 z-30 h-[100vh] max-lg:max-w-[91.46vw]"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          borderLeft: "0.06vw solid rgba(255, 255, 255, 0.2)",
          borderRight: "0.06vw solid rgba(255, 255, 255, 0.2)",
          userSelect: "none",
          pointerEvents: "none",
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
