import React from "react";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR_USER_INFO } from "../../../../store/reducers/user";

const ButtonGoToMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMain = () => {
    navigate("/");
    dispatch(CLEAR_USER_INFO());
  };

  return (
    <Button variant="contained" onClick={goToMain}>
      На главную
    </Button>
  );
};

export default ButtonGoToMain;
