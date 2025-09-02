
import styles from "./Process.module.css";
import Circle from "../Circle/Circle";
import CircleMobile from "../Circle/CircleMobile";

function ProcessMobile() {
  return (
    <section className="flex flex-col gap-[8.533vw] items-center">
      <h2
        className="text_type_2_5x font-semibold w-[87.2vw] text-center"
      >
        Ведём авто от выкупа до&nbsp;выдачи. Отчёт — по&nbsp;каждому этапу
      </h2>
      <div className="flex flex-col mt-[17.333vw]">
        <CircleMobile>{"Клиент оставляет заявку на\u00a0авто"}</CircleMobile>
        <CircleMobile>{"Бронируем, проверяем и\u00a0оформляем"}</CircleMobile>
        <CircleMobile>{"Машина приезжает\u00a0— клиент оплачивает"}</CircleMobile>
        <CircleMobile>{"Получаете свою долю прибыли"}</CircleMobile>
      </div>
    </section>
  );
}

export default ProcessMobile;
