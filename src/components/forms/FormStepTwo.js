import React from "react";
import { Form, Formik } from "formik";
import YupFormStepTwoValidation, {
  FIELDS_ADVANTAGES,
  FIELDS_CHECKBOX,
  FIELDS_RADIO,
} from "./validation/YupFormStepTwoValidation";
import ButtonsActions from "./actions/ButtonsActions";
import classes from "./Form.module.scss";
import MultipleInputs from "./input-group/groups/MultipleInputs";
import SelectionGroup from "./input-group/groups/SelectionGroup";
import useSubmitForm from "../../hooks/useSubmitForm";
import { useSelector } from "react-redux";

const FormStepTwo = () => {
  const submitFormHandler = useSubmitForm("/create/step/3");
  const { advatages, checkbox, radio } = useSelector(
    (state) => state.user.userInfo,
  );

  const initialValues = {
    advatages: advatages ? advatages : ["", "", ""],
    checkbox: checkbox ? checkbox : [],
    radio: radio ? radio : "",
  };

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
      initialValues={initialValues}
      validationSchema={YupFormStepTwoValidation}
      onSubmit={(values) => submitFormHandler(values)}
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
