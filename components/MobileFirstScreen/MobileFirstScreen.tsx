const Block = ({ headline, text }: { headline: string; text: string }) => {
  return (
    <div>
      <div className="text_type_2x__mobile font-semibold">{headline}</div>
      <p className="mt-[3.73vw] text_type_normal__mobile">{text}</p>
    </div>
  );
};

export const MobileFirstScreen = () => {
  return (
    <section className="min-lg:hidden mt-[10.6vw] box-border px-[2.13vw]">
      <h3 className="font-semibold text_type_2_5x__mobile">
        <span className="opacity-40">Автомобиль из-за рубежа — </span>это выше
        класс и лучше состояние — за те же деньги
      </h3>
      <div className="mt-[8.53vw] space-y-[6.4vw]">
        <Block
          headline="Выгодно"
          text="Призвети машину из-за рубежа, дешевле, чем купить такую же в России"
        />
        <Block
          headline="Надежно"
          text="Авто за рубежом проходят ТО у официальных диллеров, поэтому служат дольше"
        />
        <Block
          headline="Прозрачно"
          text="Из-за строгого законодательства риск скурченного пробега и скрытых дефектов меньше"
        />
      </div>
    </section>
  );
};
