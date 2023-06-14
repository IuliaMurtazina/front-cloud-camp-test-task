import { Form, Formik } from "formik";
import React from "react";
import classes from "./Form.module.scss";
import Button from "../ui/Button";
import YupFormStartValidation, {
  FIELD_EMAIL,
  FIELD_PHONE,
} from "./validation/YupFormStartValidation";
import InputGroup from "./input-group/InputGroup";
import { useSelector } from "react-redux";
import useSubmitForm from "../../hooks/useSubmitForm";

const FormStart = () => {
  const submitFormHandler = useSubmitForm("create/step/1");

  const { phone, email } = useSelector((state) => state.user.userInfo);

  const initialValues = {
    phone: phone ? phone : "",
    email: email ? email : "",
  };

  const formFields = [
    {
      id: "field-phone",
      name: FIELD_PHONE,
      type: "tel",
      label: "Номер телефона",
      placeholder: "+7 (___) ___-__-__",
    },
    {
      id: "field-email",
      name: FIELD_EMAIL,
      type: "email",
      label: "Email",
      placeholder: "tim.jennings@example.com",
    },
  ];

  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      validationSchema={YupFormStartValidation}
      onSubmit={(values) => submitFormHandler(values)}
    >
      {(formikProps) => {
        return (
          <Form
            className={`${classes.form} ${classes["form-start"]}`}
          >
            {formFields.map((field) => (
              <InputGroup key={field.id} {...field} />
            ))}
            <Button
              variant="contained"
              type="submit"
              dataAction={true}
              id="button-start"
            >
              Начать
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormStart;
