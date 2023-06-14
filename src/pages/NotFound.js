import React from "react";
import ButtonsActions from "../components/forms/actions/ButtonsActions";
import { useNavigate } from "react-router-dom";
import classes from "../components/layout/Layout.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    console.log(123);
    navigate("/");
  };
  return (
    <div className={classes["not-found"]}>
      <p>Запрашиваемая страница не найдена.</p>
      <ButtonsActions buttonAction={goToMain} buttonText="На главную" />
    </div>
  );
};

export default NotFound;
