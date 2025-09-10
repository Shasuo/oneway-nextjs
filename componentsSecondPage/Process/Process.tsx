import classNames from "classnames";
import styles from "./Process.module.css";
import Circle from "../Circle/Circle";
import { useMediaQuery } from "react-responsive";

function Process({ isMobile }: { isMobile: boolean }) {
  return (
    <section className={styles.block}>
      <h2
        className={classNames(
          "text",
          `text_type_${isMobile ? "2_5x" : "4x"} `,
          [styles.title]
        )}
      >
        Ведём авто от выкупа до&nbsp;выдачи. Отчёт — по&nbsp;каждому этапу
      </h2>
      <div className={styles.circles}>
        <Circle isMobile={isMobile}>
          {"Клиент оставляет заявку на\u00a0авто"}
        </Circle>
        <Circle isMobile={isMobile}>
          {"Бронируем, проверяем и\u00a0оформляем"}
        </Circle>
        <Circle isMobile={isMobile}>
          {"Машина приезжает -\u00a0клиент оплачивает"}
        </Circle>
        <Circle isMobile={isMobile}>{"Получаете свою долю прибыли"}</Circle>
      </div>
    </section>
  );
}

export default Process;
