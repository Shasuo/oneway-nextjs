import Link from "next/link";
import { useEffect, useState } from "react";
import {
  carAnimationGoingClose,
  isInitialCarFramesLoaded,
  isLinkUsPopupOpen,
  isMainPage,
} from "../Jotai/atoms";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const HeaderLink = ({
  text,
  href,
  anchor,
}: {
  text: string;
  href: string;
  anchor?: (id: string) => void;
}) => {
  const handleAnchorCheck = (e: React.MouseEvent) => {
    if (anchor) {
      e.preventDefault();
      anchor(href);
    }
  };
  return (
    <Link
      className={"text_type_2x block text_type_normal__mobile"}
      href={href}
      onClick={(e) => handleAnchorCheck(e)}
    >
      {text}
    </Link>
  );
};
interface HeaderLinksType {
  text: string;
  href?: string;
}

const headerLinks: HeaderLinksType[] = [
  { text: "О нас", href: "ABOUT" },
  { text: "Кейсы", href: "REVIEWS" },
  { text: "Услуги", href: "SERVICES" },
  { text: "FAQ", href: "FAQ" },
  { text: "Контакты", href: "CONTACTS" },
];

const investorsLink = "/investors";

export const Header = () => {
  const isThisMainPage = useAtom(isMainPage)[0];

  const isLoaded = useAtom(isInitialCarFramesLoaded)[0];
  const [isScrollOver, setIsScrollOver] = useAtom(carAnimationGoingClose);

  const router = useRouter();

  const [defferedAnchorId, setDefferedAnchorId] = useState<null | string>(null);
  const setLinkUsPopupOpen = useAtom(isLinkUsPopupOpen)[1];

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isMobileMenuAnimations, setIsMobileMenuAnimations] = useState(false);

  const mobileMenuHandleClose = () => {
    if (isMobileMenuAnimations) {
      setIsMobileMenuAnimations(false);
      setTimeout(() => setIsMobileMenuActive(false), 600);
    }
  };

  const mobileMenuHandleOpen = () => {
    if (!isMobileMenuActive) {
      setIsMobileMenuActive(true);
      setTimeout(() => setIsMobileMenuAnimations(true), 10);
    }
  };

  const scrollTo = (id: string) => {
    mobileMenuHandleClose();
    if (!isThisMainPage) {
      setDefferedAnchorId(id);
      router.push("/");
      return;
    }

    if (!isScrollOver) {
      setIsScrollOver(true);
    }

    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Элемент с id="${id}" не найден`);
      return;
    }

    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    const offsetVw = 7;
    const vwInPx = (offsetVw / 100) * window.innerWidth;

    const targetScrollY = elementTop - vwInPx;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (defferedAnchorId && isThisMainPage) {
      scrollTo(defferedAnchorId);
      setDefferedAnchorId(null);
    }
  }, [defferedAnchorId, isThisMainPage, setDefferedAnchorId]);

  return (
    <header>
      <div
        className={`fixed left-[5vw] w-full top-0 z-30 max-w-[90vw] flex justify-between max-lg:hidden ${
          isScrollOver || !isThisMainPage ? "items-center" : "items-start"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" onClick={() => setDefferedAnchorId(null)}>
            <img
              src="/main_logo.svg"
              alt="OneWay"
              className="w-[6.25vw] h-[6.25vw]"
            />
          </Link>

          <nav className="ml-[5.63vw] overflow-hidden">
            <div className="space-x-[2.64vw] flex items-center">
              {headerLinks.map((el, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded || !isThisMainPage
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <HeaderLink
                    text={el.text}
                    href={el.href || ""}
                    anchor={(id) => scrollTo(id)}
                  />
                </motion.div>
              ))}
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isLoaded || !isThisMainPage
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <div className="ml-[2.2vw] mr-[2.2vw] w-[0.06vw] h-[1.94vw] bg-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isLoaded || !isThisMainPage
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            <HeaderLink text="Инвесторам" href={investorsLink} />
          </motion.div>
        </div>
        {isScrollOver || !isThisMainPage ? (
          <div
            className="px-[2.22vw] py-[0.73vw] bg-white rounded-[200px] text_type_normal text-[#16171A] cursor-pointer font-medium hover:opacity-75"
            onClick={() => setLinkUsPopupOpen(true)}
          >
            Связаться
          </div>
        ) : (
          <div className="max-w-[31.46vw] w-full mt-[2.57vw]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isLoaded || !isThisMainPage
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <h2 className="text_type_3x font-semibold">
                Помогаем приобрести премиум-авто за рубежом
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isLoaded || !isThisMainPage
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            >
              <p className="mt-[1.67vw] text_type_2x">
                Подберём, купим и безопасно доставим в руки
                <br /> за 5 недель
              </p>
            </motion.div>
          </div>
        )}
      </div>
      <div className="min-lg:hidden">
        <img
          src="/logo_mobile.webp"
          alt="OneWay"
          className="w-[24vw] h-[24vw] mx-auto absolute left-1/2 -translate-x-1/2"
        />
        <img
          src="/burger.svg"
          alt="menu"
          className="fixed right-[4.26vw] top-[4.26vw] w-[8.53vw] h-[8.53vw] z-50"
          onClick={mobileMenuHandleOpen}
        />
      </div>
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-60 w-full h-full"
        style={{
          transition: ".3s",
          display: isMobileMenuActive ? "block" : "none",
        }}
      >
        <div
          className="absolute w-full h-full bg-[#08090B] top-0 left-0"
          style={{
            transition: ".3s",
            opacity: isMobileMenuAnimations ? 0.9 : 0,
          }}
          onClick={mobileMenuHandleClose}
        />
        <div
          className="z-10 absolute h-[85%] w-full bg-[#141519] overflow-auto"
          style={{
            transition: ".5s",
            bottom: isMobileMenuAnimations ? 0 : "-100vh",
          }}
        >
          <img
            src="/menu_close_icon.svg"
            className="w-[8.53vw] h-[8.53vw] absolute right-[4.26vw] top-[4.26vw]"
            onClick={mobileMenuHandleClose}
          />
          <Link href="/" onClick={mobileMenuHandleClose}>
            <img
              src="/menu_icon.png"
              className="w-[38.1vw] absolute left-[4.26vw] top-[4.26vw]"
            />
          </Link>

          <div className="max-w-[91.5vw] mx-auto">
            <div className="mt-[22.4vw] box-border p-[2.133vw] space-y-[8.53vw]">
              {headerLinks.map((el, index) => (
                <HeaderLink
                  text={el.text}
                  href={el.href || ""}
                  anchor={(id) => scrollTo(id)}
                  key={index}
                />
              ))}
              <div
                style={{ borderTop: "0.26vw dashed white" }}
                className="opacity-40 mt-[-2.13vw]"
              />
              <div className="mt-[-2.13vw]" onClick={mobileMenuHandleClose}>
                <HeaderLink text="Инвесторам" href={investorsLink} />
              </div>
            </div>
            <div
              className="mt-[8.53vw] w-full bg-white rounded-[53.3vw] py-[2.93vw] text-center text_type_normal__mobile text-[#16171A] font-medium mb-[9.33vw]"
              onClick={() => setLinkUsPopupOpen(true)}
            >
              Связаться
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
