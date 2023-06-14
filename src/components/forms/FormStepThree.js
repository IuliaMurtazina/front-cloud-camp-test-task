import React from "react";
import { Formik, Form } from "formik";
import ButtonsActions from "./actions/ButtonsActions";
import classes from "./Form.module.scss";
import YupFormStepThreeValidation, {
  FIELD_ABOUT,
  FIELD_ABOUT_MAX_LENGTH,
} from "./validation/YupFormStepThreeValidation";
import useSubmitForm from "../../hooks/useSubmitForm";
import InputGroup from "./input-group/InputGroup";

const FormStepThree = () => {
  const submitFormHandler = useSubmitForm();
  const initialValues = { about: "" };

  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      validationSchema={YupFormStepThreeValidation}
      onSubmit={(values) => submitFormHandler(values)}
    >
      {(formikProps) => {
        return (
          <Form className={`${classes.form} ${classes["form-start"]}`}>
            <InputGroup
              id="field-about"
              name={FIELD_ABOUT}
              type="textarea"
              width="full"
              label="About"
              placeholder="About"
              maxLength={FIELD_ABOUT_MAX_LENGTH}
            />
            <ButtonsActions buttonText="Отправить" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormStepThree;
