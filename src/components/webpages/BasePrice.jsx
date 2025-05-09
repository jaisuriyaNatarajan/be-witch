// BasePrice.js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Subtext = styled.p`
  color: #666;
  margin: 0.25rem 0 1.5rem;
  font-size: 0.9rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  margin: 1.5rem 0 0.5rem;
  padding: 0.6rem 1rem;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;

const Link = styled.a`
  display: block;
  font-size: 0.8rem;
  color: #555;
  text-decoration: underline;
  margin-top: 0.75rem;
`;

const BasePrice = () => {
  const [price, setPrice] = React.useState(5000);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Wrapper>
      <Heading>Now, Set a base price</Heading>
      <Subtext>Tip: ₹2,305. You'll set a weekend price</Subtext>
      <Price>
        <span>₹</span>
        <input
          type="input"
          value={price}
          onChange={handlePriceChange}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            border: 'none',
            outline: 'none',
            width: '150px',
          }}
        />
      </Price>
      <Subtext>Tip: ₹2,305. You’ll set a weekend price</Subtext>
      <Button>● Show similar Services</Button>
      <Link href="#">learn more about listing</Link>
    </Wrapper>
  );
};

export default BasePrice;