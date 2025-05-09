import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styled, { useTheme } from "styled-components";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import Icon from "../../utils/Icon";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";

// Styled Components
const OtpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  width: 100%;
`;

const OtpBox = styled.input`
  width: 80px;
  height: 80px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: #f5f5f5;
  color: #101828;
  outline: none;
  margin: 0 5px;
  transition: 0.3s ease;

  &:focus {
    border: 2px solid #e84c6a;
    background: #ffffff;
  }

  &::placeholder {
    color: #d0d5dd;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`;

const ResendText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #4a4a4a;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #e84c6a;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: 10px;
  height: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #aaa;
  text-align: left;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 50px;
  left: 50px;

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    width: 100px;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    width: 80px;
  }
`;


const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const OtpVerification = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <>
      <StyledLogo src={BeWitch} alt="BeWitch Logo" />
      <Container>
        <Icon
          name="Mail"
          borderCircle
          bordersize="10"
          height="48px"
          width="48px"
          nopadding
        />
        <h4>Please check your email.</h4>
        <div>
          We've sent a code to <strong>9078563412</strong>
        </div>

        <OtpWrapper>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            isInputNum
            shouldAutoFocus
            renderInput={(props) => (
              <OtpBox
                {...props}
                placeholder="0"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
            )}
          />

          <ResendText>
            Didn’t get a code? <span>Click to resend.</span>
          </ResendText>
        </OtpWrapper>

        <Container row>
          <Button
            width="213px"
            height="44px"
            bg={theme.colors.white}
            color={theme.colors.black}
            border="1px solid #A3A3A3"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            width="213px"
            height="44px"
            bg={theme.colors.black}
            color={theme.colors.white}
            hoverColor={theme.colors.white}
            border
            onClick={() => navigate("/dashboard")}
          >
            Verify
          </Button>
        </Container>

        <Paragraph>
          <StyledLink to="/login">
            Already have an account? &nbsp; <strong>Login</strong>
          </StyledLink>
        </Paragraph>
      </Container>

      <Footer>© bewittch 2025</Footer>
    </>
  );
};

export default OtpVerification;
