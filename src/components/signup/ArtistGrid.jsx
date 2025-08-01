import React from "react";
import styled from "styled-components";
import artistList from "./artistList";

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
  transition: transform 0.2s ease;

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
  return (
    <GridWrapper>
      {artistList.map((artist, index) => (
        <Card key={index}>
          <CardImage src={artist.image} alt={artist.role} />
          <CardLabel>{artist.role}</CardLabel>
        </Card>
      ))}
    </GridWrapper>
  );
};

export default ArtistGrid;
