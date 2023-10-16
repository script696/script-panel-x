import { Box, Step, StepLabel, Stepper } from "@material-ui/core";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const steps = ["auth.registration.progress.one", "auth.registration.progress.two", "auth.registration.progress.three"];

type RegistrationStepperProps = {
  activeStep: number;
};
export const RegistrationStepper: FC<RegistrationStepperProps> = ({ activeStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{t(label)}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
