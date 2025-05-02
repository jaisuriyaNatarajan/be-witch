import React from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";
import { Link, useNavigate } from "react-router-dom";

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

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
`;

const Subheading = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Select = styled.select`
  width: 107%;
  padding: 0.75rem;
  margin-bottom: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div {
    flex: 1;
  }
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Agreement = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 1.5rem;

  a {
    color: #000;
    font-weight: 600;
    text-decoration: underline;
    margin: 0 0.25rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }
`;

const Footer = styled.footer`
  font-size: 0.7rem;
  color: #aaa;
  text-align: left;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SignupForm = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("Form Submitted", values);
    navigate("/signup/otp-verification");
  };

  return (
    <>
      <Wrapper>
        <FormContainer>
          <Heading>Finish signing Up</Heading>
          <Subheading>
            Join the world of beauty, fashion, connections.
          </Subheading>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Label>Legal Name*</Label>
                <Row>
                  <Field name="firstName" component="input">
                    {({ input }) => (
                      <Input
                        {...input}
                        placeholder="First name on ID"
                        required
                      />
                    )}
                  </Field>
                  <Field name="lastName" component="input">
                    {({ input }) => (
                      <Input
                        {...input}
                        placeholder="Last name on ID"
                        required
                      />
                    )}
                  </Field>
                </Row>

                <Label>Date of Birth*</Label>
                <Field name="dob" component="input" type="date">
                  {({ input }) => <Input {...input} required />}
                </Field>

                <Label>Location*</Label>
                <Field name="location" component="select">
                  {({ input }) => (
                    <Select {...input} required>
                      <option value="">Select</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </Select>
                  )}
                </Field>
                <HelperText>
                  Help us connect you with opportunities in your area
                </HelperText>

                <Label>Email*</Label>
                <Field name="email" component="input" type="email">
                  {({ input }) => (
                    <Input {...input} placeholder="you@example.com" required />
                  )}
                </Field>
                <HelperText>We’ll email you booking information</HelperText>

                <Agreement>
                  By selecting Agree and continue, I agree to bewittch’s
                  <a href="#">Terms & Conditions</a> and
                  <a href="#">Nondiscrimination Policy</a> and acknowledge the
                  <a href="#">Privacy Policy</a>.
                </Agreement>

                <SubmitButton type="submit">Agree and Continue</SubmitButton>
              </form>
            )}
          />
          <Footer>© bewittch 2025</Footer>
        </FormContainer>
      </Wrapper>
    </>
  );
};
