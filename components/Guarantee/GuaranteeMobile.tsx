import GuaranteeDetail from "../GuaranteeDetail/GuaranteeDetail";
import GuaranteeDetailMobile from "../GuaranteeDetail/GuaranteeDetailMobile";
import styles from "./Guarantee.module.css";
import { GuaranteeData } from "./guaranteeData";

function GuaranteeMobile() {
  const data = GuaranteeData
  return (
    <section className="flex flex-col gap-[8.533vw] py-0 px-[6.4vw]">
      <h2 className="text_type_3x font-semibold">
        Не&nbsp;понравится —&nbsp;вернём деньги
      </h2>
      <div className="flex flex-col justify-between gap-[8.533vw]">
        {data.map((item, key) => (
          <GuaranteeDetailMobile key={key}>{item.guarantee}</GuaranteeDetailMobile>
        ))}
      </div>
    </section>
  );
}

export default GuaranteeMobile;
