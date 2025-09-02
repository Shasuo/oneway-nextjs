
import styles from "./Benefits.module.css";
import { useMediaQuery } from "react-responsive";

function BenefitsMobile() {
  const textClassName = "text_type_normal font-medium pb-[6.4vw] border-b-[0.267vw] border-[rgba(255, 255, 255, 0.20)]"
  return (
    <section className="py-0 px-[6.4vw] flex flex-col justify-between items-center gap-[13.867vw]">
      <div className="w-[54.667vw] h-[24vw]"
      style={{background: `url("grey_logo.png")`, backgroundSize: "cover"}}></div>
      <div className="flex flex-col gap-[6.4vw] w-full">
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

export default BenefitsMobile;
