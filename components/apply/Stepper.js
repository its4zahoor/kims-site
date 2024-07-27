import styled from "@emotion/styled";
import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  stepLabelClasses,
  Stepper,
} from "@mui/material";
import React from "react";

const StepItem = ({ active, completed, icon, onClick }) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        data-step={icon}
        className={`w-[80px] h-[80px] rounded-full  ${
          active
            ? "bg-[#04824B] text-white"
            : completed
            ? "bg-[#1C3E68] text-white"
            : "text-[#101010] bg-[#F3F3F3]"
        } gap-0 flex  items-center justify-center text-center flex-col`}
      >
        <div className="uppercase text-[12px]">Step</div>
        <div className="leading-[24px] text-[24px] font-bold">{icon}</div>
      </div>
    </div>
  );
};
const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 38,
    left: "calc(-50% + 48px)",
    right: "calc(50% + 48px)",
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: "4px",
    borderColor: "#F3F3F3",
  },
}));
const Label = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label},& .${stepLabelClasses.active}`]: {
    color: "#1C3E68",
    fontSize: "16px",
  },
}));
const MyStepper = ({ steps = [], activeStep = 0, onClick }) => {
  return (
    <>
      <Stepper
        onClick={onClick}
        connector={<Connector />}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((step, idx) => {
          return (
            <Step key={step}>
              <Label
                StepIconComponent={StepItem}
                StepIconProps={{ step: idx + 1 }}
              >
                {step}
              </Label>
            </Step>
          );
        })}
      </Stepper>{" "}
    </>
  );
};
export default MyStepper;
