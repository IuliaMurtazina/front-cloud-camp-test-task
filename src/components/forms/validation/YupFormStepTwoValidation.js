import * as yup from "yup";

export const FIELDS_ADVANTAGES = "advatages";
export const FIELDS_CHECKBOX = "checkbox";
export const FIELDS_RADIO = "radio";

const YupFormStepTwoValidation = yup.object().shape({
  [FIELDS_ADVANTAGES]: yup
    .array()
    .of(yup.string().required("Advantage is required")),
  [FIELDS_CHECKBOX]: yup.array().min(1, "Please select at least one value"),
  [FIELDS_RADIO]: yup
    .mixed()
    .oneOf([1, 2, 3])
    .required("Please select at least one value"),
});

export default YupFormStepTwoValidation;
