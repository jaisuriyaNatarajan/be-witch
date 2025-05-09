import React, { use, useEffect } from "react";
import styled from "styled-components";
import MacbookPro from "../../assets/MacbookPro.png";
import { useNavigate } from "react-router-dom";

// Container layout
const SetupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Left section
const LeftSection = styled.div`
  max-width: 500px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtext = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
`;

const Box = styled.div`
  background: #f5f5f5;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StartButton = styled.button`
  background-color: #ff5c7c;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e84e6f;
  }
  &:focus {
    outline: none;
  }
`;

const Note = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin-top: 1rem;
`;

// Right section with image
const RightSection = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const ProfileSetup = ({ setHide }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate("/web/servicePhotos");
  };

  useEffect(() => {
    setHide(true);
    return () => {
      setHide(false);
    };
  }, [setHide]);

  return (
    <SetupWrapper>
      <LeftSection>
        <Heading>Let’s Set Up your Profile</Heading>
        <Subtext>
          To start receiving bookings and collaborations, you need to complete
          both your service and portfolio section
        </Subtext>

        <Box>
          <strong>Service Section</strong>
          <ul>
            <li>Add what you offer</li>
            <li>Set pricing, availability, and extras</li>
            <li>Upload sample images</li>
          </ul>
        </Box>

        <Box>
          <strong>Portfolio Section</strong>
          <ul>
            <li>Highlights your best past work</li>
            <li>Add behind-the-scene content</li>
            <li>Showcase your style and creativity</li>
          </ul>
        </Box>

        <StartButton onClick={handlerClick}>
          Start Creating your Website
        </StartButton>
        <Note>
          This may take around 10–15 mins to complete. Please be patient – a
          well-built profile gets more visibility and trust.
        </Note>
      </LeftSection>

      <RightSection>
        <img
          src={MacbookPro}
          alt="Portfolio preview on laptop"
          style={{ width: "100%", height: "auto" }}
        />
      </RightSection>
    </SetupWrapper>
  );
};

export default ProfileSetup;
