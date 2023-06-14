import React from "react";
import Stepper from "../components/stepper/Stepper";
import FormStepOne from "../components/forms/FormStepOne";
import FormStepTwo from "../components/forms/FormStepTwo";
import FormStepThree from "../components/forms/FormStepThree";
import { useSelector } from "react-redux";

const CreatePage = () => {
  const { countOfSteps, currentStep } = useSelector((state) => state.ui);

  return (
    <>
      <Stepper currentStep={currentStep} steps={countOfSteps} />
      {currentStep === 1 && <FormStepOne />}
      {currentStep === 2 && <FormStepTwo />}
      {currentStep === 3 && <FormStepThree />}
    </>
  );
};

export default CreatePage;
