import React from "react";
import styled, { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background-color: #eee;
  border-radius: 5px;
  margin: 10px 0;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #000;
  transition: width 0.3s ease-in-out;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 25%;
  padding: 0.9rem;
  background-color: ${(props) => props.bg || "#000"};
  color: ${(props) => props.color || "white"};
  border: 1px solid ${(props) => props.border || props.theme.colors.secondary};
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

const StepperComponent = ({ currentStep = 1, totalSteps = 4 }) => {
  const progress = (currentStep / totalSteps) * 100;
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    {
      path: "/onboarding",
      next: "/onboarding/upload-photo",
    },
    {
      path: "/onboarding/upload-photo",
      next: "/onboarding/social-proof",
    },
    {
      path: "/onboarding/social-proof",
      next: "/onboarding/about-you",
    },
  ];

  const currentPath = location.pathname === "/onboarding/about-you";
  const currentStepIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  const handleNext = () => {
    if (currentStepIndex !== -1 && steps[currentStepIndex].next) {
      navigate(steps[currentStepIndex].next);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <StepperContainer>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
        <Steps>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Step key={index} />
          ))}
        </Steps>
      </StepperContainer>
      <Row>
        <SubmitButton
          onClick={handleBack}
          bg={theme.colors.white}
          color={theme.colors.black}
        >
          Back
        </SubmitButton>
        <SubmitButton onClick={handleNext}>
          {currentPath ? "Create profile" : "Next"}
        </SubmitButton>
      </Row>
    </>
  );
};

export default StepperComponent;
