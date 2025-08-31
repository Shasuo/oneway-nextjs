export default function ContactsMobile() {
  return (
    <section
      className=" w-full h-[500px] flex flex-col justify-between items-center overflow-hidden relative "
      //   style={{
      //     background: `url("ContactsAuto.png")`,
      //     backgroundSize: "contain",
      //     backgroundPosition: "center center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <div className="flex flex-col items-center gap-[12px] mt-[30px] z-1">
        <h1 className="text_type_big">Контакты для связи</h1>
        <p className=" text_type_2x">
          Адрес: Москва, 3-й силикатный проезд 4, к1
        </p>
      </div>
      <div className="flex gap-[16px] mb-[30px]">
        <div className="flex items-center px-[16px] py-[12px] border rounded-[12px] border-opacity-20">
          <img src="WhatsUp.svg" className="mr-[12px]" />
          <p>+79660076457</p>
        </div>
        <div className="flex items-center  px-[16px] py-[12px] border rounded-[12px] border-opacity-20">
          <img src="TelegramNegative.svg" className="mr-[12px] w-[32px]" />
          <p>@one_way_manager</p>
        </div>
      </div>
    </section>
  );
}
