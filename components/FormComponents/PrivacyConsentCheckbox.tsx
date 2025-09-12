interface PrivacyConsentCheckboxProps {
  active: boolean;
  setActive: (isActive: boolean) => void;
}

export const PrivacyConsentCheckbox = ({
  active,
  setActive,
}: PrivacyConsentCheckboxProps) => {
  return (
    <div
      className="flex items-start cursor-pointer"
      onClick={() => setActive(!active)}
    >
      <div
        className="relative w-[1.11vw] h-[1.11vw] rounded-[0.14vw] flex items-center justify-center max-lg:w-[4.27vw] max-lg:h-[4.27vw] max-lg:rounded-[0.53vw]"
        style={{ border: "0.07vw solid #696A6C" }}
      >
        <img
          src="/checbox.svg"
          className="w-[0.7vw] max-lg:w-[2.6vw]"
          style={{ opacity: active ? 1 : 0 }}
        />
      </div>
      <p className="max-w-[26.11vw] text_type_normal ml-[0.83vw] max-lg:ml-[3.2vw] max-lg:max-w-[75.73vw] text_type_1_5x__mobile">
        Я согласен с политикой конфиденциальности и обработкой моих персональных
        данных
      </p>
    </div>
  );
};
