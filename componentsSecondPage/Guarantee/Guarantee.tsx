import GuaranteeDetail from "../GuaranteeDetail/GuaranteeDetail";
import styles from "./Guarantee.module.css";

function Guarantee({ isMobile }: { isMobile: boolean }) {
  return (
    <section className={styles.block}>
      <h2
        className={`text text_type_big text_type_${
          isMobile ? "3x" : "big"
        } font-semibold`}
      >
        Не&nbsp;понравится —&nbsp;вернём деньги
      </h2>
      <div className={styles.details}>
        <GuaranteeDetail isMobile={isMobile}>
          {"Деньги берём только после\u00a0согласования покупки"}
        </GuaranteeDetail>
        <GuaranteeDetail isMobile={isMobile}>
          {"Отчёты с фото и видео —\u00a0на\u00a0каждом этапе"}
        </GuaranteeDetail>
        <GuaranteeDetail isMobile={isMobile}>
          {"Все инвестиции оформляем договором"}
        </GuaranteeDetail>
        <GuaranteeDetail isMobile={isMobile}>
          {"Можете приехать на\u00a0выдачу лично"}
        </GuaranteeDetail>
      </div>
    </section>
  );
}

export default Guarantee;
