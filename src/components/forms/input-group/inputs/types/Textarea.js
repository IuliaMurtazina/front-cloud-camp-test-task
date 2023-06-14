import React from "react";
import { Field, useField } from "formik";
import Counter from "../../../counter/Counter";

const TextArea = (props) => {
  const { type, id, name, placeholder, className, disabled, maxLength } = props;
  const [fieldProps] = useField(name);
  return (
    <>
      <Field
        as="textarea"
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...fieldProps}
      />
      <Counter length={fieldProps.value.length} maxLength={maxLength} />
    </>
  );
};

export default TextArea;
