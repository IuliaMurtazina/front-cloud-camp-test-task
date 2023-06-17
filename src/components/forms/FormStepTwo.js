import React from "react";
import { Form, Formik } from "formik";
import YupFormStepTwoValidationSchema, {
  FIELDS_ADVANTAGES,
  FIELDS_CHECKBOX,
  FIELDS_RADIO,
} from "./validation/YupFormStepTwoValidationSchema";
import ButtonsActions from "./actions/ButtonsActions";
import classes from "./Form.module.scss";
import MultipleInputs from "./input-group/groups/MultipleInputs";
import SelectionGroup from "./input-group/groups/SelectionGroup";
import useSubmitForm from "../../hooks/useSubmitForm";
import { useSelector } from "react-redux";
import { getInitialValues } from "./validation/functions";

const FormStepTwo = () => {
  const submitFormHandler = useSubmitForm();
  const { advatages, checkbox, radio } = useSelector(
    (state) => state.user.userInfo,
  );
  const { currentStep } = useSelector((state) => state.ui);

  const advantagesFieldsProps = {
    type: "text",
    placeholder: "advantage",
  };

  const formFields = [
    {
      id: FIELDS_CHECKBOX,
      name: FIELDS_CHECKBOX,
      type: "checkbox",
      label: "Checkbox group",
      fields: [1, 2, 3],
    },
    {
      id: FIELDS_RADIO,
      name: FIELDS_RADIO,
      type: "radio",
      label: "Radio group",
      fields: [1, 2, 3],
    },
  ];

  return (
    <Formik
      validateOnMount={true}
      initialValues={getInitialValues(YupFormStepTwoValidationSchema, {
        advatages,
        checkbox,
        radio,
      })}
      validationSchema={YupFormStepTwoValidationSchema}
      onSubmit={(values) => submitFormHandler(values, currentStep + 1)}
    >
      {(formikProps) => {
        return (
          <Form className={`${classes.form} ${classes["form-start"]}`}>
            <MultipleInputs
              id={FIELDS_ADVANTAGES}
              label="Advantages"
              fields={formikProps.values[FIELDS_ADVANTAGES]}
              {...advantagesFieldsProps}
            />

            {formFields.map((field) => (
              <SelectionGroup key={field.id} {...field} />
            ))}

            <ButtonsActions buttonText="Далее" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormStepTwo;
