import React from "react";
import Stepper from "../components/stepper/Stepper";
import FormStepOne from "../components/forms/FormStepOne";
import FormStepTwo from "../components/forms/FormStepTwo";
import FormStepThree from "../components/forms/FormStepThree";
import { useSelector } from "react-redux";
import { COUNT_OF_STEPS } from "../constants";

const CreatePage = () => {
  const { currentStep } = useSelector((state) => state.ui);

  return (
    <>
      <Stepper currentStep={currentStep} steps={COUNT_OF_STEPS} />
      {currentStep === 1 && <FormStepOne />}
      {currentStep === 2 && <FormStepTwo />}
      {currentStep === 3 && <FormStepThree />}
    </>
  );
};

export default CreatePage;
