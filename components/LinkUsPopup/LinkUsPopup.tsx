import { useAtom } from "jotai";
import { isLinkUsPopupOpen } from "../Jotai/atoms";
import { FormInput } from "../FormComponents/FormInput";
import { FormEvent, useEffect, useState } from "react";
import { PrivacyConsentCheckbox } from "../FormComponents/PrivacyConsentCheckbox";
import { FormButton } from "../FormComponents/FormButton";

export const LinkUsPopup = () => {
  const [isOpen, setIsOpen] = useAtom(isLinkUsPopupOpen);
  const [isOpenAnimations, setIsOpenAnimations] = useState(false);

  const [isCheckbox, setIsCheckbox] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleFormClose = () => {
    if (isOpenAnimations) {
      setIsOpenAnimations(false);
      setTimeout(() => setIsOpen(false), 600);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpenAnimations(true), 10);
    }
  }, [isOpen, setIsOpenAnimations]);

  if (isOpen)
    return (
      <section className="fixed bottom-0 left-1/2 -translate-x-1/2 z-60 w-full h-full">
        <div
          className="absolute w-full h-full bg-[#08090B] top-0 left-0"
          onClick={handleFormClose}
          style={{ transition: ".2s", opacity: isOpenAnimations ? .9 : 0 }}
        />
        <div
          className="absolute w-[37.9vw] bg-[#141519] rounded-[1.11vw] box-border left-1/2 -translate-x-1/2 top-[8.26vw] py-[2.22vw] px-[1.67vw] max-lg:top-[unset] max-lg:bottom-[5%] max-lg:w-[91.7vw] max-lg:rounded-[4.26vw] max-lg:py-[8.53vw] max-lg:px-[4.26vw]"
          style={{ border: "0.14vw solid #400F47", transition: ".5s", opacity: isOpenAnimations ? 1 : 0 }}
        >
          <img
            className="w-[1.67vw] absolute right-0 top-[-2.23vw] cursor-pointer hover:opacity-80 max-lg:w-[6.4vw] max-lg:top-[-7.73vw]"
            src="/closeForm.svg"
            onClick={handleFormClose}
          />
          <div className="text-center">
            <div className="text_type_big font-semibold text_type_3x__mobile">
              Связаться с нами
            </div>
            <p className="mt-[1.67vw] text_type_2x max-lg:mt-[6.4vw] max-lg:font-medium text_type_normal__mobile">
              Оставьте заявку — и наш менеджер свяжется с вами в ближайшее время
            </p>
          </div>
          <form
            className="mt-[2.22vw] max-lg:mt-[8.53vw]"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="space-y-[1.11vw] max-lg:space-y-[4.27vw]">
              <FormInput
                inputName="Имя"
                placeholder="Василий"
                inputType="text"
              />
              <FormInput
                inputName="Телефон"
                placeholder="+7 (900) 423 23 23"
                inputType="tel"
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
        </div>
      </section>
    );
};
