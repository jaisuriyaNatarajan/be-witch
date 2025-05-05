import React, { use } from "react";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";
import styled, { useTheme } from "styled-components";
import { Field, Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";

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
  align-items: center;
`;
const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
`;

const Input = styled.input`
  width: 360px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 2rem;
  text-align: center;
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
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Loginpage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("Form Submitted", values);
    navigate("/signup/otp-verification");
  };

  return (
    <>
      <PageWrapper>
        <Header>
          <Logo src={BeWitch} alt="BeWitch Logo" />
        </Header>
        <Main>
          <Wrapper>
            <FormContainer>
              <Heading>Let’s Get You Known</Heading>
              <Subheading>
                Join the world of beauty, fashion, connections.
              </Subheading>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Label>Email*</Label>
                      <Field name="email" component="input" type="email">
                        {({ input }) => (
                          <Input
                            {...input}
                            placeholder="you@example.com"
                            required
                          />
                        )}
                      </Field>
                      <Label>Password</Label>
                      <Field name="password" component="input" type="password">
                        {({ input }) => (
                          <Input {...input} placeholder="********" required />
                        )}
                      </Field>
                    </Row>
                    <Row>
                      <SubmitButton type="submit">Sign in</SubmitButton>
                      <SubmitButton
                        bg={theme.colors.white}
                        color={theme.colors.black}
                      >
                        {/* TODO Google Logo Image have to set */}
                        <span>Logo</span> &nbsp; Sign in with Google
                      </SubmitButton>
                    </Row>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <span>
                        <StyledLink to="/register">
                          Don’t have an account? <strong>Sign up</strong>
                        </StyledLink>
                      </span>
                    </div>
                  </form>
                )}
              />
            </FormContainer>
          </Wrapper>
        </Main>
        <Footer>© bewittch 2025</Footer>
      </PageWrapper>
    </>
  );
};

export default Loginpage;
