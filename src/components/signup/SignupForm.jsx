import React from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { Logo } from "../Navbar/Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px; /* Add some padding around the form on mobile */
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    /* Styles for screens smaller than 600px (typical mobile) */
    padding: 16px; /* Add padding inside the form container on mobile */
  }
`;

const Heading = styled.h3`
  font-family: Inter;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 12px; /* Reduce margin for better mobile spacing */

  @media (max-width: 600px) {
    font-size: 20px; /* Slightly smaller heading on mobile */
    line-height: 28px;
  }
`;

const Subheading = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: center;
  margin: 0px 0px 24px 0px;
  color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 600px) {
    font-size: 14px; /* Slightly smaller subheading on mobile */
    line-height: 22px;
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  margin-bottom: 4px; /* Add a little space below the label */
`;

const Input = styled.input`
  width: calc(100% - 1rem); /* Adjust width for padding */
  padding: 0.75rem;
  margin-bottom: 0.75rem; /* Reduce margin for tighter spacing on mobile */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: calc(100% - 1rem); /* Adjust width for padding */
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 0.75rem; /* Reduce margin for tighter spacing on mobile */
`;

const Row = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically on mobile */
  gap: 0; /* Remove gap between first and last name on mobile */

  & > div {
    flex: 1;
    margin-bottom: 0.75rem; /* Add margin between the stacked inputs */
  }

  .first-name {
    margin-right: 0; /* Remove right margin for the first name on mobile */
  }

  @media (min-width: 601px) {
    flex-direction: row; /* Keep side-by-side on larger screens */
    gap: 0.5rem; /* Add gap between first and last name on larger screens */
    & > div {
      margin-bottom: 1rem; /* Restore larger margin on larger screens */
    }
  }
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  color: #777;
  margin-top: 4px; /* Add a little space above the helper text */
  margin-bottom: 0.75rem; /* Add some bottom margin */
`;

const Agreement = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 1rem; 

  a {
    color: #000;
    font-weight: 600;
    text-decoration: underline;
    margin: 0 0.25rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%; /* Make the button full width on mobile */
  padding: 0.9rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem; /* Add some bottom margin to the button */

  &:hover {
    background-color: #111;
  }
`;

const Footer = styled.footer`
  font-size: 0.7rem;
  color: #aaa;
  text-align: center; /* Center the footer text on mobile */
  margin-top: 2rem;
  position: static; /* Adjust positioning for mobile layout */
  bottom: auto;
  left: auto;
`;

export const SignupForm = () => {
  const navigate = useNavigate();
  const { updateSignupData } = useOnboarding();

  const onSubmit = (values) => {
    updateSignupData({
      legalName: `${values.firstName} ${values.lastName}`,
      dob: values.dob,
      location: values.location,
      email: values.email,
    });

    navigate("/onboarding");
  };

  return (
    <>
      <Logo src={BeWitch} alt="BeWitch Logo" style={{ marginBottom: "24px" }} />{" "}
      {/* Add some margin below the logo */}
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
                        className="first-name"
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
