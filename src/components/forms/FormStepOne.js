import React from "react";
import { Formik, Form } from "formik";
import InputGroup from "./input-group/InputGroup";
import classes from "./Form.module.scss";
import YupFormStepOneValidation, {
  FIELD_NAME,
  FIELD_NICKNAME,
  FIELD_SEX,
  FIELD_SEX_OPTIONS,
  FIELD_SERNAME,
} from "./validation/YupFormStepOneValidation";
import ButtonsActions from "./actions/ButtonsActions";
import { useSelector } from "react-redux";
import useSubmitForm from "../../hooks/useSubmitForm";

const FormStepOne = () => {
  const { nickname, name, sername, sex } = useSelector(
    (state) => state.user.userInfo,
  );

  const { currentStep } = useSelector((state) => state.ui);
  const submitFormHandler = useSubmitForm();

  const initialValues = {
    nickname: nickname ? nickname : "",
    name: name ? name : "",
    sername: sername ? sername : "",
    sex: sex ? sex : "",
  };

  const formFields = [
    {
      id: "field-nickname",
      name: FIELD_NICKNAME,
      type: "text",
      label: "Nickname",
      placeholder: "Nickname",
    },
    {
      id: "field-name",
      name: FIELD_NAME,
      type: "text",
      label: "Name",
      placeholder: "Name",
    },
    {
      id: "field-sername",
      name: FIELD_SERNAME,
      type: "text",
      label: "Sername",
      placeholder: "Sername",
    },
    {
      id: "field-sex",
      name: FIELD_SEX,
      type: "select",
      label: "Sex",
      placeholder: "Не выбрано",
      options: FIELD_SEX_OPTIONS,
    },
  ];

  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      validationSchema={YupFormStepOneValidation}
      onSubmit={(values) => submitFormHandler(values, currentStep + 1)}
    >
      {(formikProps) => {
        return (
          <Form className={`${classes.form} ${classes["form-start"]}`}>
            {formFields.map((field) => (
              <InputGroup key={field.id} {...field} />
            ))}
            <ButtonsActions buttonText="Далее" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormStepOne;
