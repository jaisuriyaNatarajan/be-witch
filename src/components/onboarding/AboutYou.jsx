import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useOnboarding } from "../../context/OnboardingContext";

const Container = styled.div`
  max-width: 700px;
  margin: 4rem auto;
  padding: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtext = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const TextAreaWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  line-height: 1.5;
  background-color: transparent;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const AboutYou = () => {
  const { updateFormData,formData } = useOnboarding();
  const [bio, setBio] = useState(
    `“I'm a certified makeup artist with 5+ years of experience in bridal, editorial, and glam makeovers. Passionate about enhancing natural beauty and collaborating with creatives.”`
  );

  useEffect(() => {
    updateFormData({ about: bio });
    console.log("Bio updated successfully!", JSON.stringify(formData, null, 2));
  }, [bio]);

  return (
    <Container>
      <Heading>Tell Us About You</Heading>
      <Subtext>
        Give clients and collaborators a quick glimpse into your personality,
        journey, and expertise.
      </Subtext>
      <TextAreaWrapper>
        <StyledTextarea
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </TextAreaWrapper>
    </Container>
  );
};

export default AboutYou;
