import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

interface SocialMediaLineProps {
  text: string;
  icon?: "tg" | "inst";
}

interface CasesDataType {
  from: string;
  to: string;
  carName: string;
  text: string;
  social?: SocialMediaLineProps;
  img: string;
}

const CasesData: CasesDataType[] = [
  {
    from: "Корея",
    to: "Москва",
    carName: "Audi A7 45 TFSI",
    text: "От души благодарю команду OnewayImport за то, что помогли обновить машину 🙌\u000aХотел обновиться на Audi A7 45 TFSI. Очень оперативно нашли несколько вариантов, подборщики выехали на место и полностью отсняли автомобиль. Что не мало важно, когда у меня возникли дополнительные вопросы через какое‑то время, то мы смогли договориться о повторном оперативном осмотре. В итоге, получилось подобрать отличную машину, с мини повреждением, но с большим дисконтом относительно рынка. Доволен. По процессу доставки все четко, видео и фото в течение самой доставки присылались. По процедуре таможни тоже все быстро и прозрачно. Ну и был доволен сервисом и процессом выдачи машины! Рекомендую!",
    social: { icon: "inst", text: "@malakhov_nikita" },
    img: "Audi A7 45 TFSI.webp",
  },
  {
    from: "Германия",
    to: "Москва",
    carName: "BMW M3 xDrive Germany",
    text: "Процесс подбора был быстрым, нашли не стандартный вариант цвета авто, техническим состоянием доволен полностью. Перед покупкой прислали очень много видео с детального осмотра!",
    social: { icon: "tg", text: "@dpulya" },
    img: "BMW M3 xDrive Germany.webp",
  },
  {
    from: "Германия",
    to: "Самара",
    carName: "Mercedes Benz E350",
    text: "Подбор и покупка автомобиля прошли отлично. Спасибо вам за оперативную доставку, помощь в выборе авто! Буду рекомендовать своим знакомым однозначно",
    social: { icon: "tg", text: "@dpulya" },
    img: "Mercedes Benz E350.webp",
  },
  {
    from: "Корея",
    to: "Москва",
    carName: "Mercedes-AMG GT 43 4MATIC+",
    text: "Я заказал машину в компании One Way Import. И что могу сказать, Машину привезли очень быстро, прям в кратчайшие сроки. Проверили ее вдоль и поперек. Проверили на все ошибки в компьютере. Проверили полностью кузов. Все, что могли проверить, проверили. Ребята молодцы, работают хорошо и качественно. И сразу видно, что они знают, что они делают. Советую всем заказывать здесь. Ну и, собственно, результатом доволен. Молодцы. Лайк. Подписка.",
    social: { icon: "inst", text: "@andry_polo" },
    img: "Mercedes-AMG GT 43 4MATIC+.webp",
  },
  {
    from: "Корея",
    to: "Москва",
    carName: "BMW M4 xDrive",
    text: `Покупал у вас машину в мае, привезли в сроки учитывая новогодние праздники
Подобрали и быстро выкупили
Машиной очень доволен. Это мой первый такой быстрый автомобиль.
Сервисом так же доволен, ребята сопровождали на каждом этапе и рассказывали почему конкретный автомобиль лучше других, учитывая все особенности данного авто относительно гражданской машины. Было ощущение, что я нахожусь во всех процессах и понимаю детали, для меня это было важно. Советую вас своим друзьям
Они сравнивают цены у вас и у других компаний, говорят что у вас лучше цены,
но при этом ничего не хромает, всё приезжает целое и в сроки, но главное сервис действительно премиальный.`,
    img: "BMW M4 xDrive.webp",
  },
  {
    from: "Корея",
    to: "Москва",
    carName: "BMW M340i 2",
    text: `Доволен всем, с момента заказа машины, оперативного просмотра, детального отчета о машине перед оплатой, до доставки быстрой, со всех этапов были видео-отчеты
Катаюсь уже пару месяцев, машина идеальная, лучший вариант, который был на тот момент под мои запросы`,
    social: { icon: "inst", text: "@offsultan" },
    img: "BMW M340i 2.webp",
  },
  {
    from: "Германия",
    to: "Казань",
    carName: "BMW X5 40D rest",
    text: `Благодарю компанию One Way Import за помощь в приобретение BMW X5
Автомобиль привезли из Германии
Искал именно автомобиль в М пакете, чёрном цвете кузова и черного цвета салон
Обязательным требованием была модификация 40d
Смогли найти такой только в Германии, доставка с момента оплаты заняла примерно 5.5 недель
Процесс доставки сопровождался фото и видео отчетом
В подарок сделали полировку, химчистку, загрузили руссификацию и карты
Так же хочу отметить что ребята на связи и помогают с процессом дооснащения по сей день
Покупкой доволен, буду обращаться ещё 👍`,
    img: "BMW X5 40D rest.webp",
  },
  {
    from: "Корея",
    to: "Казань",
    carName: "Hyundai Palisad 2.2d 4wd rest",
    text: `Palisade 2.2d 4wd Рестайлинг
2022.12г, на момент покупки пробег был около 13т

Покупкой доволен, ребятам огромное спасибо 🙏
Помогли осуществить давнюю хотелку, так как искал именно в сером цвете и чёрном салоне с минимальным пробегом. Обязательным критерием был рестайлинг.

В процессе доставки проблем не возникло, каждый этап сопровождался фото и видео отчетом. Переживал за таможню, так как с привозом авто из-за границы столкнулся впервые, но все прошло гладко, быстро и без проблем.
Срок доставки составил около 6 недель.

Буду рекомендовать друзьям, дай Бог вернусь ещё раз, спасибо 🙌`,
    img: "Hyundai Palisad 2.2d 4wd rest.webp",
  },
  {
    from: "Корея",
    to: "Санкт-Петербург",
    carName: "BMW X7 40d",
    text: `Благодарю команду One Way Import за комплексную помощь в поиске и приобретении моего нового автомобиля.
Был долгий выбор модели с моей стороны. Сначала ребята подбирали мне варианты Q7 как в Европе, так и в Корее. Мы просматривали варианты, были оперативно предоставлены несколько вариантов понравившейся мне комплектации с описанием плюсов и минусов, особо понравившейся вариант был сразу же осмотрен в Корее, с предоставлением видео, фото и комментариев.
Затем я изменил решение на поиск не Audi Q7, а BMW X7, и Команда не потеряла интерес ко мне, как к "трудному" клиенту, а незамедлительно с энтузиазмом занялась поиском BMW X7. Без промедления мне были предоставлены варианты автомобилей, с объяснением ньюансов комплектации.`,
    img: "BMW X7 40d.webp",
  },
];

const SocialMediaLine = ({ text, icon }: SocialMediaLineProps) => {
  return (
    <div className="flex items-center gap-[0.56vw] text_type_1_5x max-lg:gap-[2.13vw] text_type_1_5x__mobile">
      {icon && icon === "tg" ? (
        <img src="/cases/tg.svg" className="w-[1.11vw] max-lg:w-[4.27vw]" />
      ) : (
        <img src="/cases/inst.svg" className="w-[1.11vw] max-lg:w-[4.27vw]" />
      )}

      {text}
    </div>
  );
};

export const Cases = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isElementVisible, setIsElementVisible] = useState(true);

  const activeSlideData = CasesData[activeSlide];

  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  const slideChangeHandle = (id: number) => {
    Object.values(timeoutRefs.current).forEach((timerId) =>
      clearTimeout(timerId)
    );
    timeoutRefs.current = {};

    setIsElementVisible(false);

    setTimeout(() => setActiveSlide(id), 220);
    setTimeout(() => setIsElementVisible(true), 250);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeSlide, 0);
    }
  }, [activeSlide]);

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex !== activeSlide) {
      slideChangeHandle(swiper.activeIndex);
    }
  };

  const swiperRef = useRef<any>(null);

  return (
    <section
      className="h-[57.78vw] relative w-full box-border pl-[7.92vw] mt-[11.11vw] max-lg:h-full max-lg:pl-0 max-lg:w-[87.2vw] max-lg:mx-auto max-lg:mt-[21.33vw]"
      id="REVIEWS"
    >
      <div
        style={{ opacity: isElementVisible ? 1 : 0, transition: ".1s" }}
        className="pt-[12.88vw] font-semibold max-lg:pt-0"
      >
        <div className="text_type_1_5x flex items-center text_type_1_5x__mobile">
          {activeSlideData.from}
          <img src="/cases_line.svg" className="w-[5.7vw] mx-[0.83vw]" />
          {activeSlideData.to}
        </div>
        <h3 className="mt-[1.04vw] text_type_4x text_type_2_25x__mobile max-lg:mt-[2.13vw]">
          {activeSlideData.carName}
        </h3>
      </div>

      <div className="absolute top-0 right-[0.7vw] w-[51.94vw] max-lg:relative max-lg:w-full max-lg:right-unset max-lg:mt-[6.4vw]">
        <Swiper
          ref={swiperRef}
          grabCursor
          spaceBetween={60}
          loop={false}
          onSlideChange={handleSlideChange}
          autoHeight={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".cases-button-next",
            prevEl: ".cases-button-prev",
          }}
        >
          {CasesData.map((el, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-[51.94vw] object-cover max-lg:w-[87.2vw]"
                src={`/cases/${el.img}`}
                alt={`Case ${index}`}
                loading="eager"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        style={{ opacity: isElementVisible ? 1 : 0, transition: ".1s" }}
        className="min-lg:hidden mt-[3.2vw]"
      >
        {activeSlideData.social && (
          <SocialMediaLine
            text={activeSlideData.social.text}
            icon={activeSlideData.social.icon}
          />
        )}
      </div>

      <div
        className="w-[34.65vw] mt-[1.04vw] text_type_2x text_type_normal__mobile max-lg:w-full max-lg:mt-[3.2vw]"
        style={{
          whiteSpace: "pre-line",
          opacity: isElementVisible ? 1 : 0,
          transition: ".2s",
        }}
      >
        {activeSlideData.text}
      </div>

      <div className="absolute left-[7.92vw] bottom-[9.37vw] max-lg:relative max-lg:left-[unset] max-lg:bottom-[unset]">
        <div
          style={{ opacity: isElementVisible ? 1 : 0, transition: ".1s" }}
          className="max-lg:hidden"
        >
          {activeSlideData.social && (
            <SocialMediaLine
              text={activeSlideData.social.text}
              icon={activeSlideData.social.icon}
            />
          )}
        </div>

        <div className="flex items-center gap-[1.11vw] mt-[1.63vw] max-lg:mt-[3.2vw] max-lg:gap-[3.2vw]">
          <div className="cases-button-prev">
            <img
              src="/cases/cases_arrow_left.svg"
              className="w-[1.875vw] cursor-pointer hover:opacity-75 max-lg:w-[7.2vw]"
              alt="Previous"
            />
          </div>
          <div className="cases-button-next">
            <img
              src="/cases/cases_arrow_right.svg"
              className="w-[1.875vw] cursor-pointer hover:opacity-75 max-lg:w-[7.2vw]"
              alt="Next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
