import { useAtom } from "jotai";
import { sendFormPopup } from "../Jotai/atoms";
import { useEffect, useState } from "react";

export const SendFormPopup = () => {
  const [formState, setFormState] = useAtom(sendFormPopup);
  const [isOpenAnimations, setIsOpenAnimations] = useState(false);

  const handleFormClose = () => {
    if (isOpenAnimations) {
      setIsOpenAnimations(false);
      setTimeout(() => setFormState(null), 600);
    }
  };

  useEffect(() => {
    if (formState) {
      setTimeout(() => setIsOpenAnimations(true), 10);
    }
  }, [formState, setIsOpenAnimations]);

  if (formState)
    return (
      <section className="fixed bottom-0 left-1/2 -translate-x-1/2 z-60 w-full h-full">
        <div
          className="absolute w-full h-full bg-[#08090B] top-0 left-0"
          onClick={handleFormClose}
          style={{ transition: ".2s", opacity: isOpenAnimations ? 0.9 : 0 }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-[17.26vw] box-border p-[2.22vw] rounded-[1.67vw] text-center max-lg:p-[8.53vw]"
          style={{
            background: "rgba(64, 15, 71, 0.4)",
            transition: ".5s",
            opacity: isOpenAnimations ? 1 : 0,
          }}
        >
          {formState === "success" ? (
            <img
              src="/success.png"
              className="w-[3.68vw] mx-auto max-lg:w-[14.13vw]"
            />
          ) : null}

          <div
            className={`${
              formState === "success"
                ? "mt-[1.11vw] max-lg:mt-[4.27vw]"
                : "mt-0"
            }`}
          >
            <h3
              className="text_type_3x font-semibold text_type_2_25x__mobile"
              style={{ whiteSpace: "nowrap" }}
            >
              {formState === "success"
                ? "Заявка успешно отправлена"
                : "Ошибка отправки"}
            </h3>
            {formState === "success" ? (
              <p className="mt-[0.56vw] font-medium text_type_2x text_type_normal__mobile max-lg:mt-[2.13vw]">
                Менеджер свяжется с вами
                <br /> в ближайшее время
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
};
