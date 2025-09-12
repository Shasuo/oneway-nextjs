import Link from "next/link";

interface ContactButtonProps {
  href: string;
  text: string;
  iconSrc: string;
}

const ContactButton = ({ href, text, iconSrc }: ContactButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center py-[0.83vw] px-[1.11vw] rounded-[0.83vw] font-medium text_type_2x text_type_2x__mobile max-lg:px-0 max-lg:py-[3.2vw] max-lg:max-w-full max-lg:justify-center max-lg:rounded-[3.2vw] max-lg:w-[61.86vw]"
      style={{ border: "0.07vw solid #383839" }}
    >
      <img
        src={iconSrc}
        className="w-[2.22vw] mr-[0.85vw] max-lg:w-[8.53vw] max-lg:mr-[3.2vw]"
      />
      {text}
    </Link>
  );
};

export default function Contacts() {
  return (
    <section className="relative max-lg:mt-[10.6vw]" id="CONTACTS">
      <img src="/contactsCar.webp" className="w-full max-lg:hidden" />
      <img src="/contacts_car_mobile.webp" className="w-full min-lg:hidden" />
      <div
        className="text-center mx-auto w-fit absolute top-[3.2vw] max-lg:top-[14.66vw] max-lg:w-full"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <h3 className="text_type_big font-semibold text_type_3x__mobile">
          Контакты для связи
        </h3>
        <p className="text_type_2x mt-[0.83vw] text_type_normal__mobile max-lg:mt-[4.26vw]">
          Адрес: Москва, 3-й силикатный проезд 4, к1
        </p>
      </div>

      <div
        style={{ left: "50%", transform: "translateX(-50%)" }}
        className="bottom-[3.47vw] flex items-center gap-[1.11vw] absolute max-lg:bottom-[10.66vw] max-lg:flex-col max-lg:gap-[4.26vw]"
      >
        <ContactButton text="+79660076457" href="" iconSrc="/wa.svg" />
        <ContactButton text="@one_way_manager" href="" iconSrc="/tg.svg" />
      </div>
    </section>
  );
}
