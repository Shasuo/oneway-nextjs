import { FormEvent, useMemo, useState } from "react";
import Form from "../Form/Form";
import styles from "./FormBlock.module.css";
import { FormInput } from "@/components/FormComponents/FormInput";
import { PrivacyConsentCheckbox } from "@/components/FormComponents/PrivacyConsentCheckbox";
import { FormButton } from "@/components/FormComponents/FormButton";

import emailjs from "emailjs-com";
import { Loader } from "@/components/Loader/Loader";
import { useAtom } from "jotai";
import { sendFormPopup } from "@/components/Jotai/atoms";

function FormBlock() {
  const setAlertPopup = useAtom(sendFormPopup)[1];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contribution, setContribution] = useState("");
  const [isCheckbox, setIsCheckbox] = useState(false);

  const [isLoader, setIsLoader] = useState(false);

  const resultData = useMemo(
    () => ({
      form: "Форма для партнеров",
      name: name,
      phone: phone,
      contribution: contribution,
      checkbox: isCheckbox,
    }),
    [name, phone, contribution, isCheckbox]
  );

  const clearFieldsHandle = () => {
    console.log("Setted");
    setName("");
    setPhone("");
    setContribution("");
    setIsCheckbox(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCheckbox) return;
    console.log("submit");
    setIsLoader(true);

    emailjs
      .send(
        "service_n8ilj0g",
        "template_5cxrn88",
        resultData,
        "Fo9KqzzDKJePki8Dc"
      )
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
          clearFieldsHandle();
          setIsLoader(false);
          setAlertPopup("success");
        },
        (err: any) => {
          console.error("FAILED...", err);
          setIsLoader(false);
          setAlertPopup("error");
        }
      );
  };

  console.log(resultData);
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
          <FormInput
            inputName="Имя"
            placeholder="Василий"
            inputType="text"
            value={name}
            onChange={setName}
          />
          <FormInput
            inputName="Телефон"
            placeholder="+7 (900) 423 23 23"
            inputType="tel"
            value={phone}
            onChange={setPhone}
          />
          <FormInput
            inputName="Сколько готовы вложить ₽"
            placeholder="≤ 10.000.000"
            inputType="text"
            value={contribution}
            onChange={setContribution}
          />
          <PrivacyConsentCheckbox
            active={isCheckbox}
            setActive={setIsCheckbox}
          />
        </div>
        {isLoader ? (
          <div className="mt-[2.22vw]">
            <Loader />
          </div>
        ) : (
          <div className="mt-[2.22vw] mx-auto max-w-[28.1vw] max-lg:mt-[8.53vw] max-lg:max-w-full">
            <FormButton />
          </div>
        )}
      </form>
    </section>
  );
}

export default FormBlock;
