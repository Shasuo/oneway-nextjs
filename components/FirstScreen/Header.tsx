import Link from "next/link";
import { useState } from "react";

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

export const Header = () => {
  const [isPreloadOver, setIsPreloadOver] = useState(true);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(true)
  return (
    <header>
      <div
        className={`fixed left-[5vw] w-full top-0 z-30 max-w-[90vw] flex justify-between max-lg:hidden ${
          isPreloadOver ? "items-center" : "items-start"
        }`}
      >
        <div className="flex items-center">
          <img
            src="/main_logo.svg"
            alt="OneWay"
            className="w-[6.25vw] h-[6.25vw]"
          />
          <nav className="ml-[5.63vw]">
            <div className="space-x-[2.64vw]">
              {headerLinks.map((el, index) => (
                <HeaderLink text={el.text} href={el.href || ""} key={index} />
              ))}
            </div>
          </nav>
          <div className="ml-[2.2vw] mr-[2.2vw] w-[0.06vw] h-[1.94vw] bg-white" />
          <HeaderLink text="Инвесторам" href="" />
        </div>
        {isPreloadOver ? (
          <div className="px-[2.22vw] py-[0.73vw] bg-white rounded-[200px] text_type_normal text-[#16171A] cursor-pointer font-medium">
            Связаться
          </div>
        ) : (
          <div className="max-w-[31.46vw] w-full mt-[2.57vw]">
            <h2 className="text_type_3x font-semibold">
              Помогаем приобрести премиум-авто за рубежом
            </h2>
            <p className="mt-[1.67vw] text_type_2x">
              Подберём, купим и безопасно доставим в руки
              <br /> за 5 недель
            </p>
          </div>
        )}
      </div>
      <div className="max-lg:block hidden">
        <img
          src="/logo_mobile.svg"
          alt="OneWay"
          className="w-[24vw] h-[24vw] mx-auto"
        />
        <img
          src="/burger.svg"
          alt="menu"
          className="fixed right-[4.26vw] top-[4.26vw] w-[8.53vw] h-[8.53vw]"
        />
      </div>
    </header>
  );
};
