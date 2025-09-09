

export default function TeamMobile() {
  return (
    <section
      className="flex flex-col gap-[11.73vw] w-[100vw] items-center justify-center pb-[21.33vw]"
      style={{ background: `url("bg_mobile.png")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
       }}
    >
      <div className="flex flex-col gap-[0.833vw] items-center text-center w-[68.53vw]">
        <img src="guarantee_icon.svg" className="w-[6.67vw] h-[6.67vw]" />
        <p className="text_type_normal">
          Своя команда: юристы, логисты, подборщики
        </p>
      </div>
      <div className="flex flex-col gap-[0.833vw] items-center text-center w-[68.53vw]">
          <img src="guarantee_icon.svg" className="w-[6.67vw] h-[6.67vw]" />
        <p className="text_type_normal">
            Есть представительства в&nbsp;Корее и&nbsp;России
          </p>
        </div>
        <div className="flex flex-col gap-[0.833vw] items-center text-center w-[68.53vw]">
          <img src="guarantee_icon.svg" className="w-[6.67vw] h-[6.67vw]" />
        <p className="text_type_normal">Работаем с&nbsp;2021 года</p>
        </div>

          <div
            className="w-[38.67vw] h-[38.67vh] mb-[0.556vw] flex flex-col items-center"
            // style={{
            //   background: `url("CEO.png")`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <img src="CEO.png" className="w-full"/>
          <p className="font-medium text_type_2x">Василий Абрамов</p>
          <p className="font-medium text_type_normal">CEO OneWay</p>
          </div>
          

    </section>
  );
}
