import React from "react";
import styled from "styled-components";
import StepperComponent from "../components/StepperBar/StepperComponent";
import { useLocation } from "react-router-dom";
import { Logo } from "../components/Navbar/Navbar.styles";
import BeWitch from "../assets/Bewittch.png";
import { useOnboarding } from "../context/OnboardingContext";

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

const ProfileSetupLayout = ({ children, hide }) => {
  const location = useLocation();
  const { formData } = useOnboarding() || {};
  const isOnboarding = formData?.onboardingCompleted || false;

  const steps = formData?.onboardingCompleted
    ? [
        "/servicePhotos",
        "/uploadPortfolio",
        "/serviceTitle",
        "/highlightsSelector",
        "/basePrice",
        "/discounts",
        "/additonalCharges",
      ]
    : ["/", "/upload-photo", "/social-proof", "/about-you"];

  console.log(steps, "steps");

  const completePercentage =
    steps.findIndex(
      (step) =>
        location.pathname === `${!isOnboarding ? "/onboarding" : "/web"}${step}`
    ) + 1;
  console.log(isOnboarding, "foxx");
  return (
    <Wrapper>
      <Logo src={BeWitch} />
      <Content>{children}</Content>
      {!hide && (
        <StepperWrapper>
          <StepperComponent
            currentStep={completePercentage}
            totalSteps={!isOnboarding ? 4 : 7}
            isOnboarding={isOnboarding}
          />
        </StepperWrapper>
      )}
    </Wrapper>
  );
};

export default ProfileSetupLayout;
