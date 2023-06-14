import React from "react";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_STEP } from "../../../../store/reducers/ui";

const ButtonBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.ui);

  return (
    <Button
      dataAction={true}
      variant="outlined"
      type="button"
      id="button-back"
      onClick={() => {
        if (currentStep > 1) dispatch(SET_STEP(currentStep - 1));
        else navigate("/");
      }}
    >
      Назад
    </Button>
  );
};

export default ButtonBack;
