import { FormEvent, useState } from "react";
import Form from "../Form/Form";
import styles from "./FormBlock.module.css";
import { FormInput } from "@/components/FormComponents/FormInput";
import { PrivacyConsentCheckbox } from "@/components/FormComponents/PrivacyConsentCheckbox";
import { FormButton } from "@/components/FormComponents/FormButton";

function FormBlock() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const [isCheckbox, setIsCheckbox] = useState(false);
  return (
    <section className={styles.block} id="form">
      <div className={styles.text_wrapper}>
        <h2 className="text text_type_big text_type_3x__mobile font-semibold">
          Готовы стать нашим партнером?
        </h2>
        <p className="text_type_2x text_type_normal__mobile">
          Оставьте заявку — и&nbsp;мы подробно обо всем расскажем и&nbsp;покажем
        </p>
      </div>
      {/*<Form isMobile={isMobile} />*/}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="space-y-[1.11vw] max-lg:space-y-[4.27vw]">
          <FormInput inputName="Имя" placeholder="Василий" inputType="text" />
          <FormInput
            inputName="Телефон"
            placeholder="+7 (900) 423 23 23"
            inputType="tel"
          />
          <FormInput
            inputName="Сколько готовы вложить ₽"
            placeholder="≤ 10.000.000"
            inputType="text"
          />
          <PrivacyConsentCheckbox
            active={isCheckbox}
            setActive={setIsCheckbox}
          />
        </div>
        <div className="mt-[2.22vw] mx-auto max-w-[28.1vw] max-lg:mt-[8.53vw] max-lg:max-w-full">
          <FormButton />
        </div>
      </form>
    </section>
  );
}

export default FormBlock;
