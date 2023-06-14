import React from "react";
import Button from "../../../ui/Button";
import { useSelector } from "react-redux";
import { sendUserInfoStatus } from "../../../../store/reducers/user";

const ButtonNext = () => {
  const { currentStep, countOfSteps } = useSelector((state) => state.ui);
  const { status } = useSelector((state) => state.user);

  const isDisabled = status === sendUserInfoStatus.LOADING;

  return (
    <Button
      variant="contained"
      type="submit"
      dataAction={true}
      disabled={isDisabled}
      id={currentStep !== countOfSteps ? "button-send" : "button-next"}
    >
      {currentStep !== countOfSteps
        ? "Далее"
        : isDisabled
        ? "Отправка..."
        : "Отправить"}
    </Button>
  );
};

export default ButtonNext;
