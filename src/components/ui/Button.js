import React from "react";
import classes from "./Button.module.scss";

const Button = ({
  children,
  type,
  variant,
  view,
  onClick,
  className,
  id,
  dataAction,
  disabled,
}) => {
  return (
    <button
      className={`${classes.btn} ${classes[`btn__${variant}`]} 
      ${view ? classes[`btn__${view}`] : ""}
      ${className ? className : ""}
      `}
      type={type}
      onClick={onClick}
      data-action={dataAction}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
