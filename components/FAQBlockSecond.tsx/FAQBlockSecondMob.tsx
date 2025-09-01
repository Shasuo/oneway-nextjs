import { useMediaQuery } from "react-responsive";

import styles from "./FAQBlock.module.css";
import FAQList from "../FAQList/FAQList";
import FAQItem from "../FAQItem/FAQItem";

function FAQBlockSecondMob() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <section className="h-auto relative w-full min-h-[48.75vw]">
      <div className="absolute top-[-19.667vw] left-0 w-full h-[90vw] z-[-1]" 
      style={{background: `url("FAQ_car_mob.png")`, backgroundSize: "cover"}} />
      <div className={styles.wrapper}>
        <h2 className={`text text_type_h${isMobile ? "1" : "2"}_semibold`}>
          FAQ
        </h2>
        <FAQList width={`${isMobile ? "100%" : "45.278vw"}`}>
          <FAQItem
            question={"Нужен опыт?"}
            answer={
              "Нет. Опыт не нужен — всё делаем мы.\u000aВы просто выбираете, сколько хотите вложить.\u000aВсю работу — от подбора до выдачи авто клиенту — берём на себя:\u000a \u2022 Анализ рынка\u000a \u2022 Проверка автомобилей\u000a \u2022 Логистика и оформление\u000a \u2022 Коммуникация с клиентом\u000a \u2022 Контроль прибыли и возврата\u000aВы получаете отчёты и фиксированную прибыль. Всё прозрачно и удобно."
            }
          />
          <FAQItem
            question={"С\u00a0какой суммой можно зайти?"}
            answer={
              "от 10.000.000 ₽"
            }
          />
          <FAQItem
            question={"Какой риск?"}
            answer={
              "Любые инвестиции связаны с риском, но мы его минимизируем\u000aЧто мы делаем:\u000a \u2022 Покупаем авто только после одобрения клиента\u000a \u2022 Проверяем машины по 30+ параметрам\u000a \u2022 Составляем подробный техотчёт и подтверждаем его фото/видео\u000a \u2022 Прописываем все условия в договоре\u000a \u2022 Предусматриваем запасные сценарии (перепродажа, возврат)\u000a \u2022 Работаем только с проверенными поставщиками и логистами"
            }
          />
          <FAQItem
            question={"Можно без физического участия?"}
            answer={
              "Да, полностью удалённо.\u000a \u2022 Все этапы — от согласования до отчётности — онлайн\u000a \u2022 Видео и фото на каждом шаге\u000a \u2022 Документы подписываются дистанционно\u000a \u2022 Отчёты и статус сделки\u000a \u2022 Связь с менеджером — Telegram, WhatsApp, звонки\u000aВы инвестируете — мы делаем всё остальное.\u000aНикаких поездок, встреч или бумажной волокиты."
            }
          />
          <FAQItem
            question={"Когда я получу прибыль?"}
            answer={
              "Выплаты согласуются индивидуально с\u00a0инвестором, зависит от\u00a0ваших денежных\u00a0целей и\u00a0суммы инвестиций"
            }
          />
        </FAQList>
      </div>
    </section>
  );
}

export default FAQBlockSecondMob;
