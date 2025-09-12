const TextPoint = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <div className="w-[3.73vw] h-[3.73vw] rounded-[50%] mr-[8vw] bg-white" />
      <div className="max-w-[74.13vw] font-semibold text_type_normal__mobile">
        {text}
      </div>
    </div>
  );
};

export const MobileWheelBlock = () => {
  return (
    <section className="min-lg:hidden mt-[2vw] relative" id="SERVICES">
      <img src="/mobile_wheel.webp" className="w-full" />
      <div className="absolute left-[5.86vw] top-[12.26vw] flex">
        <div
          className="h-[81.2vw]"
          style={{ borderLeft: "0.26vw dashed white", opacity: 0.2 }}
        />
        <div className="space-y-[10.93vw] mt-[2.67vw] ml-[-1.8vw]">
          <TextPoint text="Купим  и безопасно доставим за 5 недель" />
          <TextPoint text="На каждом этапе проверим состояние авто и пришлем видео-отчёт" />
          <TextPoint text="Контролируем сроки и информируем о текущем статусе перевозки" />
          <TextPoint text="Автомобиль перевозится в крытом прицепе и застрахован на всём пути — от покупки до передачи в руки" />
        </div>
      </div>
    </section>
  );
};
