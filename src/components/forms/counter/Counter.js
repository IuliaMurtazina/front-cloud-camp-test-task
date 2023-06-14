import React from "react";
import classes from "./Counter.module.scss";

const Counter = ({ length, maxLength }) => {
  return (
    <div className={classes.counter}>
      {length}/{maxLength}
    </div>
  );
};

export default Counter;
