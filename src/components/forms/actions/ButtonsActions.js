import React from "react";
import Button from "../../ui/Button";
import classes from "./ButtonsActions.module.scss";
import { useNavigate, useParams } from "react-router-dom";

const ButtonsActions = ({ buttonAction, buttonText }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.actions}>
      <Button
        dataAction={true}
        variant="outlined"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </Button>
      <Button
        variant="contained"
        type="submit"
        onClick={buttonAction}
        dataAction={true}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ButtonsActions;
