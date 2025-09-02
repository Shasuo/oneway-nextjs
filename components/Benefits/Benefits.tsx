import styles from "./Benefits.module.css";
import { useMediaQuery } from "react-responsive";

function Benefits() {
  const textClassName = "text_type_3x font-semibold pb-[2.222vw] border-b-[0.07vw] border-[rgba(255, 255, 255, 0.20)]"
  return (
    <section className="py-0 px-[5vw] flex justify-between">
      <div className="w-[33.889vw] h-[12.639vw]"
      style={{background: `url("grey_logo.png")`, backgroundSize: "cover"}}></div>
      <div className="flex flex-col gap-[2.222vw] w-[46.528vw]">
        <h3 className={textClassName}>Работаем без&nbsp;посредников</h3>
        <h3 className={textClassName}>
          Имеем своё&nbsp;юр.&nbsp;лицо и&nbsp;экспортную лицензию
        </h3>
        <h3 className={textClassName}>
          Знаем, как&nbsp;растаможить и&nbsp;сэкономить
        </h3>
        <h3 className={textClassName}>Более 1000&nbsp;продаж</h3>
        <h3 className={textClassName}>Сами подбираем, проверяем, доставляем</h3>
      </div>
    </section>
  );
}

export default Benefits;
