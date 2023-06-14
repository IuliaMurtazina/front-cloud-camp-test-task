import React from "react";
import PhoneInput from "./types/PhoneInput";
import TextInput from "./types/TextInput";
import SelectInput from "./types/SelectInput";
import Checkbox from "./types/CheckboxInput";
import classes from "./Input.module.scss";
import Radio from "./types/RadioInput";
import TextArea from "./types/Textarea";

const Input = (props) => {
  const { type } = props;

  const renderInput = () => {
    if (type === "tel")
      return <PhoneInput className={classes.input} {...props} />;
    else if (type === "select")
      return <SelectInput className={classes.input} {...props} />;
    else if (type === "checkbox") return <Checkbox {...props} />;
    else if (type === "radio") return <Radio {...props} />;
    else if (type === "textarea")
      return <TextArea className={classes.input} {...props} />;
    else return <TextInput className={classes.input} {...props} />;
  };

  return <>{renderInput()}</>;
};

export default Input;
