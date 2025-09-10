import { useMediaQuery } from "react-responsive";
import Form from "../Form/Form";
import styles from "./FormBlock.module.css";

function FormBlock({ isMobile }: { isMobile: boolean }) {
  return (
    <section className={styles.block} id="form">
      <div className={styles.text_wrapper}>
        <h2
          className={`text text_type_${isMobile ? "3x" : "big"} font-semibold`}
        >
          Готовы стать нашим партнером?
        </h2>
        <p className={`text text_type_${isMobile ? "normal" : "2x"}`}>
          Оставьте заявку — и&nbsp;мы подробно обо всем расскажем и&nbsp;покажем
        </p>
      </div>
      <Form isMobile={isMobile} />
    </section>
  );
}

export default FormBlock;
