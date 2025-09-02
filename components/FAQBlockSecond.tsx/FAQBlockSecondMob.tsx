import { useMediaQuery } from "react-responsive";

import styles from "./FAQBlock.module.css";
import FAQList from "../FAQList/FAQList";
import FAQItem from "../FAQItem/FAQItem";
import FAQItemMobile from "../FAQItem/FAQItemMobile";
import { FAQDataSecond } from "./FAQDataSecond";

function FAQBlockSecondMob() {
  const FAQdata = FAQDataSecond;
  return (
    <section className="h-auto relative w-full min-h-[48.75vw]">
      <div className="absolute top-[-19.667vw] left-0 w-full h-[90vw] z-[-1]" 
      style={{background: `url("FAQ_car_mob.png")`, backgroundSize: "cover"}} />
      <div className={styles.wrapper}>
        <h2 className={`text_type_3x font-semibold`}>
          FAQ
        </h2>
        <FAQList width={"100%"}>
          {FAQdata.map((item, key) => (
          <FAQItemMobile
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

export default FAQBlockSecondMob;
