import { useEffect, useRef } from "react";

interface FormInputProps {
  inputName: string;
  placeholder: string;
  inputType: "text" | "tel";
  value: string;
  onChange: (e: string) => void;
}

export const FormInput = ({
  inputName,
  placeholder,
  inputType,
  value,
  onChange,
}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputType !== "tel" || !inputRef.current) return;
    const importInputMask = async () => {
      const Inputmask = (await import("inputmask")).default;

      const inputmask = new Inputmask("+7 (999) 999-99-99", {
        clearIncomplete: true,
        showMaskOnHover: false,
        showMaskOnFocus: true,
        autoUnmask: true,
        greedy: false,
        onUnMask: function (maskedValue, unmaskedValue) {
          return maskedValue;
        },
        onBeforeMask: function (value, opts) {
          if (value.startsWith("8")) {
            return "+7" + value.slice(1);
          }
          return value;
        },
      });

      inputmask.mask(inputRef.current!);
    };

    importInputMask();
  }, [inputType]);

  return (
    <div>
      <div className="font-medium text_type_1x opacity-80 text_type_1x__mobile">
        {inputName}
      </div>
      <input
        ref={inputRef}
        className="mt-[0.28vw] w-full box-border rounded-[0.56vw] bg-[#1F2024] px-[0.56vw] py-[0.73vw] placeholder:text-[#79797C] font-medium text_type_normal outline-0 focus:bg-[#121317] hover:bg-[#121317] max-lg:mt-[1.1vw] max-lg:px-[2.13vw] max-lg:py-[2.8vw] max-lg:rounded-[2.133vw] text_type_normal__mobile"
        placeholder={placeholder}
        type={inputType}
        maxLength={inputType === "tel" ? 18 : 100}
        aria-label={inputName}
        onChange={(e)=>onChange(e.target.value)}
        value={value}
        required
      />
    </div>
  );
};
