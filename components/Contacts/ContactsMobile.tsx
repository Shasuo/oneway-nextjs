export default function ContactsMobile() {
  return (
    <section
      className=" w-full mx-auto max-w-[90vw] h-[148vw] flex flex-col justify-between items-center rounded-[10.5vw]"
      style={{
        background: `url("ContactsAuto.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center gap-[3.2vw] mt-[8vh]">
        <h1 className="text_type_3x font-semibold">Контакты для связи</h1>
        <p className="font-regular text_type_normal">
          Адрес: Москва, 3-й силикатный проезд 4, к1
        </p>
      </div>
      <div className="flex flex-col  gap-[3vw] mb-[8vw] w-[61.87vw]">
        <div className="flex items-center pl-[10.26vw] py-[4.27vw]  border rounded-[3.2vw] border-opacity-20">
          <img src="WhatsUp.svg" className="mr-[3.2vw]" />
          <p className="font-regular text_type_normal">+79660076457</p>
        </div>
        <div className="flex items-center  pl-[10.26vw] py-[3.2vw] w-[61.87vw] border rounded-[3.2vw] border-opacity-20">
          <img src="TelegramNegative.svg" className="mr-[12px] w-[32px]" />
          <p className="font-regular text_type_normal">@one_way_manager</p>
        </div>
      </div>
    </section>
  );
}
