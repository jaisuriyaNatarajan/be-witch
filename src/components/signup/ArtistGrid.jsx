import React, { useState } from "react";
import styled from "styled-components";
import artistList from "./artistList";
import { useOnboarding } from "../../context/OnboardingContext";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1000px;
`;

const Card = styled.div`
  width: 130px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;
  transform: ${(props) => (props.isFocused ? "translateY(-5px)" : "none")};
  box-shadow: ${(props) =>
    props.isFocused
      ? "0 4px 12px rgba(0, 0, 0, 0.2)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  border: ${(props) =>
    props.isFocused ? "1px solid #E84C6A" : "2px solid transparent"};

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardLabel = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
`;

const ArtistGrid = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const { updateFormData } = useOnboarding();

  const handleCardClick = (artistName, index) => {
    setFocusedCard(index);
    updateFormData({ artist: artistName });
  };

  return (
    <GridWrapper>
      {artistList.map((artist, index) => (
        <Card
          key={index}
          isFocused={focusedCard === index}
          onClick={() => handleCardClick(artist.role, index)}
        >
          <CardImage src={artist.image} alt={artist.role} />
          <CardLabel>{artist.role}</CardLabel>
        </Card>
      ))}
    </GridWrapper>
  );
};

export default ArtistGrid;
