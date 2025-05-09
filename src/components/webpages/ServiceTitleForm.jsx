// ServiceTitleForm.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #111;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const CharCount = styled.p`
  font-size: 0.75rem;
  color: #666;
  text-align: right;
  margin-top: 0.25rem;
`;

const ServiceTitleForm = () => {
  return (
    <Container>
      <FormWrapper>
        <Heading>Now, Let’s give your service a title</Heading>
        <Description>
          Short titles work best. Have fun with it – you can always change it
          later
        </Description>
        <Label htmlFor="service-title">Service Title</Label>
        <Input
          id="service-title"
          type="text"
          placeholder="Photographer"
          maxLength={32}
          defaultValue="Photographer"
        />
        <CharCount>29/32</CharCount>
      </FormWrapper>
    </Container>
  );
};

export default ServiceTitleForm;
