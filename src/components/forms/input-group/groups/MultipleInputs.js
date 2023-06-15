import { FieldArray } from "formik";
import React from "react";
import Button from "../../../ui/Button";
import IconSmall from "../../../ui/IconSmall";
import classes from "../InputGroup.module.scss";
import InputGroup from "../InputGroup";
import Label from "../label/Label";

const MultipleInputs = ({ id, label, type, fields, placeholder }) => {
  return (
    <div className={classes["input-group"]}>
      <FieldArray
        name={id}
        render={({ remove, push }) => {
          return (
            <>
              <Label id={id}>{label}</Label>

              {fields.map((value, index) => (
                <InputGroup
                  key={index}
                  id={`field-${id}-${index + 1}`}
                  name={`${id}.${index}`}
                  type={type}
                  placeholder={placeholder}
                  inputAction={
                    <Button
                      type="button"
                      variant="text"
                      className={classes["btn-delete"]}
                      onClick={() => remove(index)}
                      id={`button-remove-${index + 1}`}
                    >
                      <IconSmall iconId="delete" />
                    </Button>
                  }
                />
              ))}

              <Button
                type="button"
                variant="outlined"
                view="square"
                id="button-add"
                className={classes["btn-add"]}
                onClick={() => push("")}
              >
                <IconSmall iconId="plus" className={classes.add} />
              </Button>
            </>
          );
        }}
      />
    </div>
  );
};

export default MultipleInputs;
