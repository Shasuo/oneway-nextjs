
import styles from "./Process.module.css";
import Circle from "../Circle/Circle";

function Process() {
  return (
    <section className="flex flex-col gap-[4.444vw] items-center">
      <h2
        className="w-[42.778vw] text-center text_type_4x font-semibold"
      >
        Ведём авто от выкупа до&nbsp;выдачи. Отчёт — по&nbsp;каждому этапу
      </h2>
      <div className="flex ml-[6.6vw]">
        <Circle>{"Клиент оставляет заявку на\u00a0авто"}</Circle>
        <Circle>{"Бронируем, проверяем и\u00a0оформляем"}</Circle>
        <Circle>{"Машина приезжает\u00a0— клиент оплачивает"}</Circle>
        <Circle>{"Получаете свою долю прибыли"}</Circle>
      </div>
    </section>
  );
}

export default Process;
