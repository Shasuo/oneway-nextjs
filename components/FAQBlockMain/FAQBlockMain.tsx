import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQLineType {
  question: string;
  answer: string;
}

export const FAQDataMain: FAQLineType[] = [
  {
    question:
      "Почему покупка авто из-за\u00a0границы выгоднее чем в\u00a0России?",
    answer: ` \u2022 За ту же сумму — авто свежее, лучше комплектация, честный пробег\u000a \u2022 Прямые поставки — без перекупов и наценок\u000a \u2022 Машина приходит "под вас", без истории такси, битых деталей и скрученных одометров\u000a \u2022 Настоящий выбор: Корея, Япония, Европа\u000a \u2022 Мы полностью проверяем авто до покупки`,
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Мы работаем по\u00a0комиссии —\u00a0в\u00a0среднем 3% от\u00a0стоимости автомобиля.\u000aЭта сумма уже включает в\u00a0себя все организационные процессы: от\u00a0подбора до\u00a0выдачи машины.",
  },
  {
    question: "Если автомобиль будет не\u00a0соответствовать моим ожиданиям?",
    answer:
      "Никаких сюрпризов — вы одобряете авто перед покупкой.\u000aМы присылаем:\u000a \u2022 Детальный фото- и видеоотчёт\u000a \u2022 Диагностику по технике\u000a \u2022 Проверку документов и истории\u000a \u2022 Итоговую стоимость с растаможкой и доставкой\u000aЕсли полученый авто не устроит — вернем деньги или подберем новое",
  },
  {
    question:
      "Вдруг у\u00a0моего авто будет скрученный пробег или неоригинальные детали?",
    answer:
      "Риск скрученного пробега при покупке за границей сводится к минимуму.\u000aВ таких странах, как Южная Корея, действует уголовная ответственность за вмешательство в одометр,\u000aа все сделки проходят через официальные площадки и аукционы с полной историей автомобиля.\u000aМы дополнительно проверяем:\u000a \u2022 Пробег — по базам, сервисной истории и диагностике\u000a \u2022 Состояние кузова, двигателя и ключевых узлов\u000a \u2022 Наличие неоригинальных или заменённых деталей\u000a \u2022 Юридическую чистоту и участие в ДТП\u000aЕсли авто вызывает сомнения — оно не будет выкуплено.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer:
      "Все этапы сделки сопровождаются договором и официальными документами.\u000aВы получаете прозрачные условия и защиту на каждом этапе.\u000aМы гарантируем:\u000a \u2022 Покупку автомобиля только после вашего письменного одобрения\u000a \u2022 Полную фото- и видеофиксацию всех этапов подбора, проверки и доставки\u000a \u2022 Возврат средств в случае невозможности исполнения обязательств\u000a \u2022 Компенсации при выявлении несоответствий (если они произошли по нашей вине)\u000a \u2022 Постоянную связь с персональным менеджером",
  },
];

const FAQLine = ({ question, answer }: FAQLineType) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="relative w-full overflow-hidden cursor-pointer max-lg:min-h-[6.5vw]"
      layout="position"
      onClick={() => setIsActive(!isActive)}
    >
      <h4 className="text_type_3x font-semibold text_type_normal__mobile flex justify-between items-center">
        <div className="max-lg:max-w-[72vw]">{question}</div>

        <motion.img
          src={isActive ? "/circle_minus.svg" : "/circle_plus.svg"}
          className="w-[1.66vw] max-lg:w-[6.4vw]"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </h4>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.25, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <p
              className="font-medium text_type_2x opacity-60 mt-[1.67vw] text_type_1_5x__mobile max-lg:font-semibold"
              style={{ whiteSpace: "pre-line" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQBlock = () => {
  return (
    <section
      className="mt-[11.1vw] w-full flex flex-col gap-[3.47vw] max-lg:mt-[10.6vw] box-border max-lg:px-[2.133vw]"
      id="FAQ"
    >
      {FAQDataMain.map((faq, index) => (
        <FAQLine key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};
