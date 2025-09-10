import { useMediaQuery } from "react-responsive";
import styles from "./MainBlock.module.css";

function MainBlock({ isMobile }: { isMobile: boolean }) {
  return (
    <section className={styles.block}>
      <div className={styles.wrapper}>
        <h1
          className={`text text_type_${isMobile ? "3x" : "big"} font-semibold`}
        >
          Помогаем инвестировать в&nbsp;автомобили
        </h1>
        <p className={`text text_type_${isMobile ? "normal" : "2x"}`}>
          Привезем машину из-за&nbsp;рубежа для&nbsp;последующей продажи
        </p>
      </div>
    </section>
  );
}

export default MainBlock;
