import classNames from "classnames";
import styles from "./Benefits.module.css";


function Benefits() {
  const textClassName = classNames(
    "text text_type_3x text_type_normal__mobile font-semibold max-lg:font-medium",
    [styles.benefit]
  );
  return (
    <section className={styles.block}>
      <div className={styles.logo}></div>
      <div className={styles.benefits}>
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
