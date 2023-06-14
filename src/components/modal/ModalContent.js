import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Modal.module.scss";
import { sendUserInfoStatus } from "../../store/reducers/user";
import ButtonGoToMain from "../forms/actions/buttons/ButtonGoToMain";
import Button from "../ui/Button";
import { SET_MODAL_CLOSE } from "../../store/reducers/ui";

const ModalContent = () => {
  const { status } = useSelector((state) => state.user);
  const { modalMessage } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const renderButton = () => {
    if (status === sendUserInfoStatus.SUCCESS) return <ButtonGoToMain />;
    if (status === sendUserInfoStatus.ERROR)
      return (
        <Button variant="contained" onClick={() => dispatch(SET_MODAL_CLOSE())}>
          Закрыть
        </Button>
      );
  };

  return (
    <div className={classes.modal}>
      <div className={classes["modal__content"]}>
        <p className={classes.title}>{modalMessage}</p>

        <img src={`${process.env.PUBLIC_URL}/img/${status}.svg`} alt="status" />

        {renderButton()}
      </div>
    </div>
  );
};

export default ModalContent;
