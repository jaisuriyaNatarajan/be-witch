// Discounts.js
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
`;

const Subtext = styled.p`
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;

    a {
        color: #6D6D6D;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background-color: #fafafa;
  cursor: pointer;

  input {
    margin-left: 1rem;
  }
`;

const OfferText = styled.div`
  text-align: left;
`;

const Discounts = () => {
  const [selected, setSelected] = useState("10");

  return (
    <Wrapper>
      <Heading>Add Discounts</Heading>
      <Subtext>
        Help your service stand out to get booked faster and earn your first
        reviews
      </Subtext>

      <Option onClick={() => setSelected("10")}>
        <OfferText>
          <strong>10%</strong> New Listing offer
          <br />
          <small>
            Attract your first few clients with a limited-time welcome offer.
          </small>
        </OfferText>
        <input type="radio" checked={selected === "10"} readOnly />
      </Option>

      <Option onClick={() => setSelected("20")}>
        <OfferText>
          <strong>20%</strong> Festival Season offer
          <br />
          <small>
            Celebrate the season by offering a special festival discount
          </small>
        </OfferText>
        <input type="radio" checked={selected === "20"} readOnly />
      </Option>

      <Subtext style={{ textAlign: "center", marginTop: "1rem" }}>
        <a href="#"> learn more about listing</a>
      </Subtext>
    </Wrapper>
  );
};

export default Discounts;
