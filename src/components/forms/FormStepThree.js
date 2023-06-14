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
import { useDispatch, useSelector } from "react-redux";
import { sendUserInfo, sendUserInfoStatus } from "../../store/reducers/user";
import Modal from "../modal/Modal";

const FormStepThree = () => {
  const submitFormHandler = useSubmitForm();
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.ui);
  const initialValues = { about: "" };

  const submitForm = (values) => {
    submitFormHandler(values);
    dispatch(sendUserInfo());
  };

  return (
    <>
      <Formik
        validateOnMount={true}
        initialValues={initialValues}
        validationSchema={YupFormStepThreeValidation}
        onSubmit={(values) => submitForm(values)}
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

      {isModalOpen && <Modal />}
    </>
  );
};

export default FormStepThree;
