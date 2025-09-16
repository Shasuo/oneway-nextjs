import Link from "next/link";

import { Header } from "../FirstScreen/Header";
import { LinkUsPopup } from "../LinkUsPopup/LinkUsPopup";
import { BorderLines } from "../BorderLines/BorderLines";
import { SendFormPopup } from "../SendFormPopup/SendFormPopup";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <BorderLines />
    <Header />
    <LinkUsPopup />
    <SendFormPopup/>
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
        <Link
          href="https://disk.360.yandex.ru/i/ID5xWuZxUmF8_Q"
          className="underline"
        >
          Политика конфиденциальности
        </Link>
        <div className="max-lg:hidden">Все права защищены 2025</div>
      </div>
    </footer>
  </div>
);
