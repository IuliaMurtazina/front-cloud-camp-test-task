import React from "react";
import classes from "./Stepper.module.scss";

const Stepper = ({ currentStep, steps }) => {

  const renderSteps = () => {
    const totalSteps = [];
    for (let i = 1; i <= steps; i++) {
      const stepClassName =
        i < currentStep
          ? classes.passed
          : i === currentStep
          ? classes.active
          : "";
      totalSteps.push(
        <div key={i} className={`${classes.step} ${stepClassName}`} />,
      );
    }
    return totalSteps;
  };

  const renderProgressBar = () => {
    const progressWidth = ((currentStep - 1) / (steps - 1)) * 100;
    
    return (
      <div
        className={`${classes.progress} ${classes["progress__filled"]}`}
        style={{ width: `${progressWidth}%` }}
      />
    );
  };

  return (
    <div className={classes.stepper}>
      <div className={classes.steps}>{renderSteps()}</div>
      <div className={classes.progress}>{renderProgressBar()}</div>
    </div>
  );
};

export default Stepper;
