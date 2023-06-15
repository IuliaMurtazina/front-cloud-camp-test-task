import React from "react";
import Button from "../../../ui/Button";

const ButtonNext = () => {
  return (
    <Button
      variant="contained"
      type="submit"
      dataAction={true}
      id="button-next"
    >
      Далее
    </Button>
  );
};

export default ButtonNext;
