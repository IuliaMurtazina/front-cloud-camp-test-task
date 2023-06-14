import React from "react";
import Label from "../label/Label";
import classes from "../InputGroup.module.scss";
import { ErrorMessage, useFormikContext } from "formik";
import Input from "../inputs/Input";

const SelectionGroup = ({ id, name, fields, type, label }) => {
  const formik = useFormikContext();

  return (
    <div className={classes["input-group"]}>
      <Label id={id}>{label}</Label>
      {fields.map((value, index) => {
        return (
          <Input
            key={index}
            label={value}
            name={name}
            id={`field-${id}-group-option-${index + 1}`}
            type={type}
            value={value}
            dataType={id}
            error={formik.errors[name] && formik.touched[name]}
          />
        );
      })}
      {formik.errors && (
        <ErrorMessage
          name={name}
          className={classes["error-text"]}
          component="span"
        />
      )}
    </div>
  );
};

export default SelectionGroup;
