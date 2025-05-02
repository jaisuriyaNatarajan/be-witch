import React from "react";
import styled from "styled-components";

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

const StepperComponent = ({ currentStep = 1, totalSteps = 3 }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <StepperContainer>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      <Steps>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Step key={index}/>
        ))}
      </Steps>
    </StepperContainer>
  );
};

export default StepperComponent;
