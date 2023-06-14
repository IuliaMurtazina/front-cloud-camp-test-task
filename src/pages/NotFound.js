import React from "react";
import ButtonsActions from "../components/forms/actions/ButtonsActions";
import classes from "../components/layout/Layout.module.scss";
import ButtonGoToMain from "../components/forms/actions/buttons/ButtonGoToMain";

const NotFound = () => {

  return (
    <div className={classes["not-found"]}>
      <p>Запрашиваемая страница не найдена.</p>
      <ButtonsActions>
        <ButtonGoToMain />
      </ButtonsActions>
    </div>
  );
};

export default NotFound;
