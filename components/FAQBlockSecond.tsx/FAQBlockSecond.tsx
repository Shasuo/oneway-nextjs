import { useMediaQuery } from "react-responsive";

import styles from "./FAQBlock.module.css";
import FAQList from "../FAQList/FAQList";
import FAQItem from "../FAQItem/FAQItem";
import { FAQDataSecond } from "./FAQDataSecond";

function FAQBlockSecond() {
  const FAQdata = FAQDataSecond;
  return (
    <section className="w-full min-h-[48.75vw]" style={{background: `url("FAQ_car_mob.png")`, backgroundSize: "cover"}}>
      <div className="flex flex-col gap-[4.44vw] pt-[5.308vw] pr-0 pb-0 pl-[50vw]">
        <h2 className="font-semibold text_type_4x">
          FAQ
        </h2>
        <FAQList width={"100%"}>
          {FAQdata.map((item, key) => (
          <FAQItem
          key={key}
          question={
            item.question
          }
          answer={item.answer}
        />
        ))}
        </FAQList>
      </div>
    </section>
  );
}

export default FAQBlockSecond;
