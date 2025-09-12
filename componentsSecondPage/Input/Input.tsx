import React, { useState } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";


function Input({
  label,
  placeholder,
  name,
  error = false,
  onChange,
  value,
  children,
}: {
  label: any;
  placeholder: any;
  name: any;
  error: boolean;
  onChange: any;
  value: any;
  children: any;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [mask, setMask] = useState(false);
  const [useRussianMask, setUseRussianMask] = useState(false);

  const handleChange = (e: any) => {
    let val = e.target.value;
    if (val === "7" || val === "8") {
      val = "+7";
    } else if (val === "9") {
      val = "+7 (9";
    } else if (val && /[^0-9]$/.test(val) && val !== "+") {
      val = val.replace(/[^0-9]$/, "");
      e.target.value = val;
    }
    if (val && !val.startsWith("+")) {
      val = "+" + val;
    }
    val ? setMask(true) : setMask(false);
    if (val.startsWith("+7")) {
      if (!useRussianMask) setUseRussianMask(true);
    } else {
      if (useRussianMask) setUseRussianMask(false);
    }
    e.target.value = val;
    if (onChange) {
      onChange({ target: { name: "phone", value: val } });
    }
  };

  const transformValue = (val: any) => {
    let cleaned = val.trim();
    if (cleaned.startsWith("+")) {
      cleaned = "+" + cleaned.slice(1).replace(/\D/g, "");
    } else {
      cleaned = cleaned.replace(/\D/g, "");
      if (cleaned.length === 10) {
        cleaned = "8" + cleaned;
      }
    }
    if (
      cleaned.startsWith("+7") ||
      cleaned.startsWith("7") ||
      cleaned.startsWith("8")
    ) {
      let digits = cleaned.startsWith("+7")
        ? cleaned.slice(2)
        : cleaned.slice(1);

      const part1 = digits.substring(0, 3);
      const part2 = digits.substring(3, 6);
      const part3 = digits.substring(6, 8);
      const part4 = digits.substring(8, 10);

      let formatted = "+7";
      if (part1) {
        formatted += " (" + part1;
        if (part1.length === 3) {
          formatted += ")";
        }
      }
      if (part2) {
        formatted += " " + part2;
      }
      if (part3) {
        formatted += part3 ? "-" + part3 : "";
      }
      if (part4) {
        formatted += part4 ? "-" + part4 : "";
      }
      return formatted;
    } else {
      return cleaned.startsWith("+") ? cleaned : "+" + cleaned;
    }
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text");
    const newVal = transformValue(pasteData);

    e.target.value = newVal;
    if (onChange) {
      onChange({ target: { name: "phone", value: newVal } });
    }

    if (newVal.startsWith("+7")) {
      setUseRussianMask(true);
    } else {
      setUseRussianMask(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={classNames("text", styles.label)} htmlFor={name}>
        {label}
      </label>
      <input
        className={classNames("text", "text_type_1x", styles.input, {
          [styles.filled]: value && !isFocused,
          [styles.focused]: isFocused,
          [styles.error]: error && !isFocused,
        })}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
        id={name}
        value={value}
        autoComplete="off"
        type={
          name === "phone" ? "tel" : name === "contribution" ? "number" : "text"
        }
        onChange={name === "phone" ? handleChange : onChange}
        onPaste={name === "phone" ? handlePaste : undefined}
        
      />
      {children}
    </div>
  );
}

export default Input;
