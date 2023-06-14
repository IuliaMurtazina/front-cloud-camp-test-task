import React from "react";
import classes from "./InputGroup.module.scss";
import { ErrorMessage } from "formik";
import Input from "./inputs/Input";
import Label from "./label/Label";

const InputGroup = (props) => {
  const { label, type, id, name, inputAction, width } = props;
  return (
    <div
      className={`${classes["input-group"]} 
      ${width === "full" ? classes["input-group__full"] : ""}`}
    >
      {label && <Label id={id}>{label}</Label>}

      <div className={classes["input-container"]}>
        <Input type={type} {...props} />
        {inputAction}
      </div>

      <ErrorMessage
        name={name}
        className={classes["error-text"]}
        component="span"
      />
    </div>
  );
};

export default InputGroup;
