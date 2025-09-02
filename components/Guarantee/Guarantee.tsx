import GuaranteeDetail from "../GuaranteeDetail/GuaranteeDetail";
import styles from "./Guarantee.module.css";
import { GuaranteeData } from "./guaranteeData";

function Guarantee() {
  const data = GuaranteeData
  return (
    <section className="flex flex-col gap-[4.44vw] py-0 px-[5vw]">
      <h2 className="text_type_big font-semibold">
        Не&nbsp;понравится —&nbsp;вернём деньги
      </h2>
      <div className="flex justify-between">
        {data.map((item, key) => (
          <GuaranteeDetail key={key}>{item.guarantee}</GuaranteeDetail>
        ))}
      </div>
    </section>
  );
}

export default Guarantee;
