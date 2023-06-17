import React from "react";
import { Formik, Form } from "formik";
import ButtonsActions from "./actions/ButtonsActions";
import classes from "./Form.module.scss";
import YupFormStepThreeValidationSchema, {
  FIELD_ABOUT,
  FIELD_ABOUT_MAX_LENGTH,
} from "./validation/YupFormStepThreeValidationSchema";
import useSubmitForm from "../../hooks/useSubmitForm";
import InputGroup from "./input-group/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { sendUserInfo } from "../../store/reducers/user";
import Modal from "../modal/Modal";
import Button from "../ui/Button";
import { getInitialValues } from "./validation/functions";

const FormStepThree = () => {
  const submitFormHandler = useSubmitForm();
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.ui);
  const { about } = useSelector((state) => state.user.userInfo);

  const submitForm = (values) => {
    submitFormHandler(values);
    dispatch(sendUserInfo());
  };

  return (
    <>
      <Formik
        validateOnMount={true}
        initialValues={getInitialValues(YupFormStepThreeValidationSchema, { about })}
        validationSchema={YupFormStepThreeValidationSchema}
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
              <ButtonsActions>
                <Button
                  variant="contained"
                  type="submit"
                  dataAction={true}
                  id="button-send"
                >
                  Отправить
                </Button>
              </ButtonsActions>
            </Form>
          );
        }}
      </Formik>

      {isModalOpen && <Modal />}
    </>
  );
};

export default FormStepThree;
