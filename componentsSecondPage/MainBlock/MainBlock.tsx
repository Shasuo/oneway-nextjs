import styles from "./MainBlock.module.css";

function MainBlock() {
  return (
    <section className={styles.block}>
      <div className={styles.wrapper}>
        <h1 className="text text_type_big text_type_3x__mobile font-semibold">
          Помогаем инвестировать в&nbsp;автомобили
        </h1>
        <p className="text text_type_2x text_type_normal__mobile">
          Привезем машину из-за&nbsp;рубежа для&nbsp;последующей продажи
        </p>
      </div>
    </section>
  );
}

export default MainBlock;
