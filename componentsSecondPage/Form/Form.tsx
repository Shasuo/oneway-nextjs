import { useState } from "react";
import styles from "./Form.module.css";
import FormPopup from "../FormPopup/FormPopup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useForm } from "../hooks/useForm";

function Form({ isMobile }: { isMobile: boolean }) {
  const [submit, setSubmit] = useState(false);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Обязательное поле";
    }
    if (values.phone === "") {
      errors.phone = "Обязательное поле";
    }
    if (!values.contribution.trim()) {
      errors.contribution = "Обязательное поле";
    }
    if (Number(values.contribution) < 10000000 && values.contribution) {
      errors.contribution = "Cумма должна быть от 10.000.000";
    }
    if (values.phone && !/(?:\D*\d){11}\D*/.test(values.phone)) {
      errors.phone = "Неверный формат номера";
    }
    if (!values.checkbox) {
      errors.checkbox = "Требуется ваше согласие";
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      form: "Форма для партнеров",
      name: "",
      phone: "",
      contribution: "",
      checkbox: false,
    },
    validate,
    setSubmit
  );

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Input
            name={"name"}
            label={"Имя"}
            placeholder={"Василий"}
            onChange={handleChange}
            //@ts-ignore
            value={values.name}
            //@ts-ignore
            error={!!errors.name}
          >
            {
              //@ts-ignore
              errors.name && (
                <div
                  className={`text text_type_2x font-medium ${styles.error}`}
                >
                  {
                    //@ts-ignore
                    errors.name
                  }
                </div>
              )
            }
          </Input>

          <Input
            name={"phone"}
            label={"Телефон"}
            placeholder={"+7 999 999 99 99"}
            onChange={handleChange}
            value={
              //@ts-ignore
              values.phone
            }
            error={
              //@ts-ignore
              !!errors.phone
            }
          >
            {
              //@ts-ignore
              errors.phone && (
                <div
                  className={`text text_type_2x font-medium ${styles.error}`}
                >
                  {
                    //@ts-ignore
                    errors.phone
                  }
                </div>
              )
            }
          </Input>
          <Input
            name={"contribution"}
            label={"Сколько готовы вложить ₽"}
            placeholder={"25000000"}
            onChange={handleChange}
            value={
              //@ts-ignore
              values.contribution
            }
            error={
              //@ts-ignore
              !!errors.contribution
            }
          >
            {
              //@ts-ignore
              errors.contribution && (
                <div
                  className={`text text_type_2x font-medium ${styles.error}`}
                >
                  {
                    //@ts-ignore
                    errors.contribution
                  }
                </div>
              )
            }
          </Input>

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className={`${styles.checkbox_input} ${
                //@ts-ignore
                errors.checkbox && styles.error_checkbox
              }`}
              onChange={handleChange}
            />
            <label
              htmlFor="checkbox"
              className={`text text_type_${isMobile ? "1_5x" : "normal"} ${
                styles.label
              }`}
            >
              Я&nbsp;согласен&nbsp;с&nbsp;
              <a
                href={"https://disk.yandex.ru/i/ID5xWuZxUmF8_Q"}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                политикой&nbsp;конфиденциальности
              </a>{" "}
              и&nbsp;обработкой моих персональных данных
            </label>
          </div>
        </div>

        <Button className={styles.button} type={"submit"}>
          Отправить
        </Button>
      </form>
      <FormPopup isOpen={submit} onClose={() => setSubmit(false)} />
    </>
  );
}

export default Form;
