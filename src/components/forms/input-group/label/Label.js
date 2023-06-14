import React from "react";

const Label = ({ id, children, dataType }) => {
  return (
    <label htmlFor={id} data-type={dataType}>
      {children}
    </label>
  );
};

export default Label;
