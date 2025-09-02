
import FAQItemMobile from "../FAQItem/FAQItemMobile";
import FAQList from "../FAQList/FAQList";
import { FAQDataMain } from "./FAQDataMain";

function FAQBlockMobile() {

  const FAQdata = FAQDataMain;
  return (
    <div id="faq">
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
  );
}

export default FAQBlockMobile;
