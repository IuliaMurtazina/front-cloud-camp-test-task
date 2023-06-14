import React from "react";
import Button from "../../../ui/Button";

const ButtonStart = () => {
  return (
    <Button
      variant="contained"
      type="submit"
      dataAction={true}
      id="button-start"
    >
      Начать
    </Button>
  );
};

export default ButtonStart;
