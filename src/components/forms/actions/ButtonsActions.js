import React from "react";
import classes from "./ButtonsActions.module.scss";
import ButtonBack from "./buttons/ButtonBack";
import ButtonNext from "./buttons/ButtonNext";

const ButtonsActions = ({ children }) => {
  return (
    <div className={classes.actions}>
      <ButtonBack />
      {children ? children : <ButtonNext />}
    </div>
  );
};

export default ButtonsActions;
