import styles from "./Team.module.css";

export default function Team() {
  return (
    <section
      className={styles.block}
      style={{ background: `url("bottom_bg.png")` }}
    >
      <div className="flex flex-col gap-[0.833vw] items-center text-center w-[17.847vw]">
        <img src="guarantee_icon.svg" className="w-[1.736vw] h-[1.736vw]" />
        <p className="text_type_2x">
          Своя команда: юристы, логисты, подборщики
        </p>
      </div>
      <div className="flex justify-between items-center text-center w-[78.75vw]">
        <div className="flex flex-col gap-[0.833vw] items-start text-left w-[17.847vw]">
          <img src="guarantee_icon.svg" className="w-[1.736vw] h-[1.736vw]" />
          <p className="text_type_2x">Работаем с&nbsp;2021 года</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-[10.069vw] h-[10.069vw] mb-[0.556vw]"
            style={{
              background: `url("CEO.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p className="font-medium text_type_2x">Василий Абрамов</p>
          <p className="font-medium text_type_normal">CEO OneWay</p>
        </div>
        <div className="flex flex-col gap-[0.833vw] items-end text-right w-[17.847vw]">
          <img src="guarantee_icon.svg" className="w-[1.736vw] h-[1.736vw]" />
          <p className="text_type_2x">
            Есть представительства в&nbsp;Корее и&nbsp;России
          </p>
        </div>
      </div>
    </section>
  );
}
