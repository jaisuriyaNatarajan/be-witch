import React, { use } from "react";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";
import styled, { useTheme } from "styled-components";
import { Field, Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/icons/GoogleIcon.png";
import Paragraph from "../Paragraph/Paragraph";

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #aaa;
  text-align: left;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden; /* Prevent vertical scrollbar */
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: absolute;
  left: 50px;
  top: 50px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
`;

const Input = styled.input`
  width: 336px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 30px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-family: Inter;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0%;
`;

const Subheading = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0%;
  color: ${(props) => props.theme.colors.secondary};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: ${(props) => props.bg || "#000"};
  color: ${(props) => props.color || "white"};
  border: 1px solid ${(props) => props.border || props.theme.colors.secondary};
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.darkGrey};
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;

  strong {
    color: ${(props) => props.theme.colors.black};
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Loginpage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    navigate("/signup/otp-verification");
  };

  const PhoneNumberInput = ({ input }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        height: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F6F6F6",
          padding: "0 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid #ccc",
          height: "100%",
          fontSize: "14px",
        }}
      >
        <span style={{ marginLeft: "6px" }}>IN</span>
      </div>
      <input
        {...input}
        placeholder="Enter your phone number"
        required
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          height: "100%",
          padding: "0 12px",
          fontSize: "14px",
        }}
      />
    </div>
  );

  const GoogleSignInButton = ({ theme }) => (
    <SubmitButton
      bg={theme.colors.white}
      color={theme.colors.black}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={googleLogo}
        height="24px"
        width="24px"
        alt="Google Logo"
        style={{ marginRight: "8px" }}
      />
      Sign in with Google
    </SubmitButton>
  );

  const SignUpLink = () => (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <span>
        <StyledLink to="/register">
          Don’t have an account? <strong>Sign up</strong>
        </StyledLink>
      </span>
    </div>
  );

  return (
    <PageWrapper>
      <Header>
        <Logo src={BeWitch} alt="BeWitch Logo" />
      </Header>
      <Main>
        <Wrapper>
          <FormContainer>
            <Heading>Let’s Get You Known</Heading>
            <Subheading>
              Set up your profile to get discovered by clients and
              collaborators.
            </Subheading>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Label>Phone Number*</Label>
                    <Field name="phoneNumber" component="input" type="text">
                      {({ input }) => <PhoneNumberInput input={input} />}
                    </Field>
                    <Paragraph color={theme.colors.darkGrey} fontSize="14px">
                      we will send you a text with a verification code .
                    </Paragraph>
                  </Row>
                  <Row>
                    <SubmitButton type="submit">Sign in</SubmitButton>
                    <GoogleSignInButton theme={theme} />
                  </Row>
                  <SignUpLink />
                </form>
              )}
            />
          </FormContainer>
        </Wrapper>
      </Main>
      <Footer>© bewittch 2025</Footer>
    </PageWrapper>
  );
};

export default Loginpage;
