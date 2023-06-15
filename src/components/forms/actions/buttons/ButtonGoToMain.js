import React from "react";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR_USER_INFO } from "../../../../store/reducers/user";
import { CLEAR_UI_STATE } from "../../../../store/reducers/ui";

const ButtonGoToMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMain = () => {
    navigate("/");
    dispatch(CLEAR_USER_INFO());
    dispatch(CLEAR_UI_STATE());
  };

  return (
    <Button variant="contained" onClick={goToMain} id="button-to-main">
      На главную
    </Button>
  );
};

export default ButtonGoToMain;
