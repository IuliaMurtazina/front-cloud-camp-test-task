import React from "react";
import classes from "../components/layout/Layout.module.scss";
import ButtonBack from "../components/forms/actions/buttons/ButtonBack";

const NotFound = () => {
  return (
    <div className={classes["not-found"]}>
      <p>Запрашиваемая страница не найдена.</p>
      <ButtonBack />
    </div>
  );
};

export default NotFound;
