import * as yup from "yup";

export const FIELD_ABOUT = "about";
export const FIELD_ABOUT_MAX_LENGTH = 200;

const YupFormStepThreeValidation = yup.object().shape({
  [FIELD_ABOUT]: yup
    .string()
    .min(5, "Field must be at least 5 characters long")
    .max(FIELD_ABOUT_MAX_LENGTH, "Field must be no more than 200 characters")
    .required("Fill in the field"),
});

export default YupFormStepThreeValidation;
