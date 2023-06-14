import { useField } from "formik";
import React from "react";
import { PatternFormat } from "react-number-format";

const PhoneInput = ({ type, id, name, className, placeholder, disabled }) => {
  const [fieldProps] = useField(name);
  return (
    <PatternFormat
      className={className}
      format="+7 (###) ###-##-##"
      allowEmptyFormatting
      mask="_"
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      {...fieldProps}
    />
  );
};

export default PhoneInput;
