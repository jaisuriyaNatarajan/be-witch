import React from "react";
import styled from "styled-components";
import StepperComponent from "../components/StepperBar/StepperComponent";
import { useLocation } from "react-router-dom";
import { Logo } from "../components/Navbar/Navbar.styles";
import BeWitch from '../assets/Bewittch.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 20px 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const StepperWrapper = styled.div`
  padding-top: 10px;
`;

const ProfileSetupLayout = ({ children }) => {
  const location = useLocation();
  const steps = ["/", "/upload-photo", "/social-proof", "/about-you"];
  const completePercentage =
    steps.findIndex((step) => `/onboarding${step}` === location.pathname) + 1;
  console.log(completePercentage);

  return (
    <Wrapper>
      <Logo src={BeWitch} />
      <Content>{children}</Content>
      <StepperWrapper>
        <StepperComponent currentStep={completePercentage} />
      </StepperWrapper>
    </Wrapper>
  );
};

export default ProfileSetupLayout;
