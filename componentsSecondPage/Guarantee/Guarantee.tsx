import GuaranteeDetail from "../GuaranteeDetail/GuaranteeDetail";
import styles from "./Guarantee.module.css";

function Guarantee() {
  return (
    <section className={styles.block}>
      <h2
        className="text text_type_big text_type_big text_type_3x__mobile font-semibold"
      >
        Не&nbsp;понравится —&nbsp;вернём деньги
      </h2>
      <div className={styles.details}>
        <GuaranteeDetail>
          {"Деньги берём только после\u00a0согласования покупки"}
        </GuaranteeDetail>
        <GuaranteeDetail>
          {"Отчёты с фото и видео —\u00a0на\u00a0каждом этапе"}
        </GuaranteeDetail>
        <GuaranteeDetail>
          {"Все инвестиции оформляем договором"}
        </GuaranteeDetail>
        <GuaranteeDetail>
          {"Можете приехать на\u00a0выдачу лично"}
        </GuaranteeDetail>
      </div>
    </section>
  );
}

export default Guarantee;
