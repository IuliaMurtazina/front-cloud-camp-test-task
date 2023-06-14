import React from "react";
import { Field, useField } from "formik";

const TextInput = (props) => {
  const { type, id, name, placeholder, className, disabled } = props;
  const [fieldProps] = useField(name);

  return (
    <Field
      className={className}
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      {...fieldProps}
    />
  );
};

export default TextInput;
