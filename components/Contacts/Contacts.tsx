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
      className="flex items-center py-[0.83vw] px-[1.11vw] rounded-[0.83vw] font-medium text_type_2x"
      style={{ border: "0.07vw solid #383839" }}
    >
      <img src={iconSrc} className="w-[2.22vw] mr-[0.85vw]" />
      {text}
    </Link>
  );
};

export default function Contacts() {
  return (
    <section className="relative">
      <img src="/contactsCar.webp" className="w-full" />
      <div
        className="text-center mx-auto w-fit absolute top-[3.2vw]"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <h3 className="text_type_big font-semibold">Контакты для связи</h3>
        <p className="text_type_2x mt-[0.83vw]">
          Адрес: Москва, 3-й силикатный проезд 4, к1
        </p>
      </div>

      <div
        style={{ left: "50%", transform: "translateX(-50%)" }}
        className="bottom-[3.47vw] flex items-center gap-[1.11vw] absolute"
      >
        <ContactButton text="+79660076457" href="" iconSrc="/wa.svg" />
        <ContactButton text="@one_way_manager" href="" iconSrc="/tg.svg" />
      </div>
    </section>
  );
}
