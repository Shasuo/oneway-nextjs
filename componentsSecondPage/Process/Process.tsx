import classNames from "classnames";
import styles from "./Process.module.css";
import Circle from "../Circle/Circle";

function Process() {
  return (
    <section className={styles.block}>
      <h2
        className={classNames(
          "text text_type_4x text_type_2_5x__mobile",
          [styles.title]
        )}
      >
        Ведём авто от выкупа до&nbsp;выдачи. Отчёт&nbsp;—&nbsp;по&nbsp;каждому этапу
      </h2>
      <div className={styles.circles}>
        <Circle >
          {"Клиент оставляет заявку на\u00a0авто"}
        </Circle>
        <Circle >
          {"Бронируем, проверяем и\u00a0оформляем"}
        </Circle>
        <Circle >
          {"Машина приезжает -\u00a0клиент оплачивает"}
        </Circle>
        <Circle >{"Получаете свою долю прибыли"}</Circle>
      </div>
    </section>
  );
}

export default Process;
