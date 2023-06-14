import * as yup from "yup";

export const FIELD_NICKNAME = "nickname";
export const FIELD_NAME = "name";
export const FIELD_SERNAME = "sername";
export const FIELD_SEX = "sex";

export const FIELD_SEX_OPTIONS = [
  { option: "man", id: "field-sex-man" },
  { option: "woman", id: "field-sex-woman" },
];

const nicknameRegex = /^[a-zA-Zа-яА-Я0-9]+$/;
const nameRegex = /^[a-zA-Zа-яА-Я]+$/;

const YupFormStepOneValidation = yup.object().shape({
  [FIELD_NICKNAME]: yup
    .string()
    .matches(nicknameRegex, "Nickname should only contain letters and numbers")
    .min(5, "Nickname should be at least 5 characters")
    .max(30, "Nickname should be maximum 30 characters")
    .required("Enter your nickname"),
  [FIELD_NAME]: yup
    .string()
    .matches(nameRegex, "Name should only contain letters")
    .min(2, "Name should be at least 2 characters")
    .max(50, "Name should be maximum 50 characters")
    .required("Enter your name"),
  [FIELD_SERNAME]: yup
    .string()
    .matches(nameRegex, "Surname should only contain letters")
    .min(2, "Surname should be at least 2 characters")
    .max(50, "Surname should be maximum 50 characters")
    .required("Enter your surname"),
  [FIELD_SEX]: yup.string().required("Choose your gender"),
});

export default YupFormStepOneValidation;
