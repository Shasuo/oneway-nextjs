import emailjs from "emailjs-com";
import { useState } from "react";

export const useForm = (
  inputValues = {},
  validate = (values: any) => ({}),
  setSubmit: any
) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;
    setValues({ ...values, [name]: name === "checkbox" ? checked : value });
  };

  console.log(values);

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_t8y6rty",
          "template_xpmu9cf",
          values,
          "fj1jSAeTJtY16nT5F"
        )
        .then(
          (response: any) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmit(true);
          },
          (err: any) => {
            console.error("FAILED...", err);
          }
        );

      setValues(inputValues);
    }
  };

  return { values, setValues, errors, handleChange, handleSubmit };
};
