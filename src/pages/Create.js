import React from "react";
import { useParams } from "react-router-dom";
import Stepper from "../components/stepper/Stepper";
import FormStepOne from "../components/forms/FormStepOne";
import FormStepTwo from "../components/forms/FormStepTwo";
import FormStepThree from "../components/forms/FormStepThree";
import NotFound from "./NotFound";

export const COUNT_OF_STEPS = 3;

const CreatePage = () => {
  const params = useParams();
  const stepId = +params.stepId;

  if (stepId > COUNT_OF_STEPS) return <NotFound />;

  return (
    <>
      <Stepper stepId={stepId} steps={COUNT_OF_STEPS} />
      {stepId === 1 && <FormStepOne />}
      {stepId === 2 && <FormStepTwo />}
      {stepId === 3 && <FormStepThree />}
    </>
  );
};

export default CreatePage;
