import React, { useState, useRef, useEffect } from "react";
import classes from "./SelectInput.module.scss";
import IconSmall from "../../../../ui/IconSmall";
import { useField } from "formik";

const SelectInput = ({ type, id, name, placeholder, options, className }) => {
  const [fieldProps, , fieldActions] = useField(name);

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const setIsOpenSelectHandler = () => setIsSelectOpen(!isSelectOpen);

  const selectOptionHandler = (option) => {
    fieldActions.setValue(option);
    setIsSelectOpen(false);
  };

  const handleClickOutsideHandler = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideHandler);
    return () => {
      document.removeEventListener("click", handleClickOutsideHandler);
    };
  }, []);

  return (
    <>
      <div
        className={classes.select}
        ref={selectRef}
        onClick={setIsOpenSelectHandler}
      >
        <input
          className={className}
          type={type}
          readOnly
          placeholder={placeholder}
          id={id}
          {...fieldProps}
        ></input>
        <IconSmall iconId="arrow-down" />
      </div>

      {isSelectOpen && (
        <ul className={classes.list}>
          {options.map((option) => (
            <li
              key={option.option}
              id={option.id}
              onClick={selectOptionHandler.bind(null, option.option)}
            >
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SelectInput;
