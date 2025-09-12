interface TeamPointIcon {
  position: "center" | "left" | "right";
}

interface PointPosition {
  position: React.CSSProperties;
  text: string;
  dotMarginClass: string;
}

const pointsPositions: Record<"center" | "left" | "right", PointPosition> = {
  center: {
    position: {
      left: "50%",
      transform: "translateX(-50%)",
      top: 0,
      textAlign: "center",
      maxWidth: "17.84vw",
    },
    text: "Своя команда: юристы, логисты, подборщики",
    dotMarginClass: "mx-auto",
  },
  left: {
    position: { left: "10.1vw", top: "16.74vw", textAlign: "left" },
    text: "Работаем с 2021 года",
    dotMarginClass: "mr-auto",
  },
  right: {
    position: {
      right: "10.1vw",
      top: "16.74vw",
      textAlign: "right",
      maxWidth: "15.7vw",
    },
    text: "Есть представительства в Корее и России",
    dotMarginClass: "ml-auto",
  },
};

const TeamPointIcon = ({ position }: TeamPointIcon) => {
  const pointData = pointsPositions[position];
  return (
    <div style={pointData.position} className="absolute">
      <img
        src="/TeamIcon.svg"
        className={`w-[1.74vw] ${pointData.dotMarginClass}`}
      />
      <p className="text_type_2x mt-[0.9vw]">{pointData.text}</p>
    </div>
  );
};

const TeamPointMobile = ({ text, width }: { text: string; width?: number }) => {
  return (
    <div
      className="text-center text_type_normal__mobile mx-auto"
      style={{ maxWidth: `${width}vw` }}
    >
      <img src="/TeamIcon.svg" className="w-[6.66vw] mb-[3.2vw] mx-auto" />
      {text}
    </div>
  );
};

export default function Team() {
  return (
    <section className="mt-[11.11vw] relative overflow-hidden w-full h-[36vw] max-lg:mt-0 max-lg:h-fit">
      <div
        className="w-[107.01vw] h-[107.01vw] rounded-[50%] absolute top-[0.87vw] max-lg:w-[166.66vw] max-lg:h-[166.66vw] max-lg:top-[3vw]"
        style={{
          border: "0.07vw dashed white",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div className="min-lg:hidden space-y-[11.73vw] mt-0">
        <TeamPointMobile text="Своя команда: юристы, логисты, подборщики" width={68.53}/>
        <TeamPointMobile text="Работаем с 2021 года"/>
        <TeamPointMobile text="Есть представительства в Корее и России"/>

      </div>
      <div className="mx-auto mt-[12.08vw] w-fit text-center font-medium">
        <img src="/SEO.webp" className="w-[10.07vw] max-lg:w-[38.6vw]" />
        <h4 className="mt-[2vw] text_type_2x text_type_2x__mobile max-lg:font-medium">
          Василий Абрамов
        </h4>
        <p className="mt-[0.1vw] text_type_normal max-lg:mt-0 text_type_normal__mobile">
          CEO OneWay
        </p>
      </div>
      <div className="max-lg:hidden">
        <TeamPointIcon position="center" />
        <TeamPointIcon position="left" />
        <TeamPointIcon position="right" />
      </div>
      
    </section>
  );
}
