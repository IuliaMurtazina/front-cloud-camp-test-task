import React from "react";
import classes from "./IconSmall.module.scss";

const IconSmall = ({ iconId, onClick, className }) => {
  return (
    <svg
      className={`${classes.icon} ${className ? className : ""}`}
      onClick={onClick}
    >
      <use xlinkHref={`/img/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default IconSmall;
