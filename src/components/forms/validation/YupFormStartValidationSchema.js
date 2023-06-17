import * as yup from "yup";

export const FIELD_PHONE = "phone";
export const FIELD_EMAIL = "email";

const YupFormStartValidation = yup.object().shape({
  [FIELD_PHONE]: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Enter a valid phone number")
    .required("Enter your phone number"),

  [FIELD_EMAIL]: yup
    .string()
    .email("Enter a valid e-mail")
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Enter a valid e-mail")
    .required("Enter your e-mail"),
});

export default YupFormStartValidation;
