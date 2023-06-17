import { Form, Formik } from "formik";
import React from "react";
import classes from "./Form.module.scss";
import YupFormStartValidationSchema, {
  FIELD_EMAIL,
  FIELD_PHONE,
} from "./validation/YupFormStartValidationSchema";
import InputGroup from "./input-group/InputGroup";
import { useSelector } from "react-redux";
import useSubmitForm from "../../hooks/useSubmitForm";
import Button from "../ui/Button";
import { getInitialValues } from "./validation/functions";

const FormStart = () => {
  const submitFormHandler = useSubmitForm("/create");

  const { phone, email } = useSelector((state) => state.user.userInfo);

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
    <>
      <Formik
        validateOnMount={true}
        initialValues={getInitialValues(YupFormStartValidationSchema, {
          phone,
          email,
        })}
        validationSchema={YupFormStartValidationSchema}
        onSubmit={(values) => submitFormHandler(values, 1)}
      >
        {(formikProps) => {
          return (
            <Form className={`${classes.form} ${classes["form-start"]}`}>
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
    </>
  );
};

export default FormStart;
