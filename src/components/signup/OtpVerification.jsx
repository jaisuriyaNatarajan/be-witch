import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styled, { useTheme } from "styled-components";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import Icon from "../../utils/Icon";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";

const OtpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
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
  transition: 0.3s ease;
  margin: 0 5px;
  position: relative;

  &:focus {
    border: 2px solid #e84c6a;
    background: #ffffff;
  }

  &::placeholder {
    color: #d0d5dd;
    font-size: 48px;
    text-align: center;
    font-weight: 500px;
    position: absolute;
    top: 20%;
    left: 32%;
  }
`;

const ResendText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #4a4a4a;
  cursor: pointer;
  text-align: center;

  &:hover {
    color:#e84c6a;
    text-decoration: underline;
  }
  .resend-otp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: 10px;
  height: 100%;
  div:nth-child(3) {
    margin: 20px;
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
`;

const OtpVerification = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const [otp, setOtp] = useState("");

  const StyledLink = styled(Link)`
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  `;

  return (
    <>
      <Logo
        src={BeWitch}
        alt="BeWitch Logo"
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
        }}
      />
      <Container>
        <div>
          <Icon
            name="Mail"
            borderCircle
            bordersize="10"
            height="48px"
            width="48px"
            nopadding
          />
        </div>
        <div>
          <h4>Please check your email.</h4>
        </div>
        <div>We've sent a code to 9078563412</div>
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
            <div className="resend-otp">
              <div>Didn’t get a code?</div>
              <div>
                <span>Click to resend.</span>
              </div>
            </div>
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
