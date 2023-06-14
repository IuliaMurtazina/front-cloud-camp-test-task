import { Field, useFormikContext } from "formik";
import React from "react";
import Label from "../../label/Label";
import classes from "../../groups/SelectionGroup.module.scss";

const Radio = ({ type, id, name, value, label, dataType }) => {
  const formik = useFormikContext();

  const handleChange = (event) => {
    formik.setFieldValue(name, Number(event.target.value));
  };

  return (
    <div className={classes.selection}>
      <Field
        type={type}
        id={id}
        name={name}
        value={value}
        checked={formik.values[name] === value}
        onChange={handleChange}
      />
      <Label id={id} dataType={dataType}>
        {label}
      </Label>
    </div>
  );
};

export default Radio;
