import { Field, useFormikContext } from "formik";
import React from "react";
import Label from "../../label/Label";
import classes from "../../groups/SelectionGroup.module.scss";

const Checkbox = ({ type, id, name, value, label, dataType, error }) => {
  const formik = useFormikContext();

  const handleChange = () => {
    const checkboxValues = [...formik.values[name]];

    if (checkboxValues.includes(value)) {
      const updatedValues = checkboxValues.filter((v) => v !== value);
      formik.setFieldValue(name, updatedValues);
    } else {
      const updatedValues = [...checkboxValues, value];
      formik.setFieldValue(name, updatedValues);
    }
  };

  return (
    <div className={classes.selection}>
      <Field
        type={type}
        id={id}
        name={name}
        value={value}
        checked={formik.values[name].includes(value)}
        onChange={handleChange}
        error={error}
      ></Field>
      <Label type={type} id={id} dataType={dataType}>
        {label}
      </Label>
    </div>
  );
};

export default Checkbox;
