import React from "react";
import styled from "styled-components";
import StepperComponent from "../components/StepperBar/StepperComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 20px 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 10px;
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
  return (
    <Wrapper>
      <Logo>Bewittch</Logo>
      <Content>{children}</Content>
      <StepperWrapper>
        <StepperComponent />
      </StepperWrapper>
    </Wrapper>
  );
};

export default ProfileSetupLayout;
