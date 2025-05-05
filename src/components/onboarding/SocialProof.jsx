import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtext = styled.p`
  color: #777;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #9b5de5;
    outline: none;
  }
`;

const SocialProof = () => {
  const [links, setLinks] = useState({
    instagram: "",
    xlink: "",
  });

  const handleChange = (e) => {
    setLinks({
      ...links,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Heading>Social Proof</Heading>
      <Subtext>Help us connect you with opportunities in your area</Subtext>
      <FormGroup>
        <div>
          <Label htmlFor="instagram">Instagram link*</Label>
          <Input
            id="instagram"
            name="instagram"
            placeholder="www.instagram.com/profilename/9003"
            value={links.instagram}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="xlink">X Link</Label>
          <Input
            id="xlink"
            name="xlink"
            placeholder="www.x.com/profilename/9003"
            value={links.xlink}
            onChange={handleChange}
          />
        </div>
      </FormGroup>
    </Container>
  );
};

export default SocialProof;
