// HighlightsSelector.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const Tag = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ selected }) => (selected ? "#e91e63" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#e91e63" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e91e63;
    color: ${({ selected }) => (selected ? "white" : "#e91e63")};
  }
`;

const highlights = [
  "Runway",
  "Commercial",
  "Editorial",
  "Fitness",
  "Plus-Size",
  "Swimwear/Lingerie",
  "Hand/Foot",
  "Parts",
];

const HighlightsSelector = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Container>
      <Title>Next, let’s describe your service</Title>
      <Subtitle>
        Choose up to 2 highlights. We’ll use these to get your description
        started
      </Subtitle>
      <TagsWrapper>
        {highlights.map((tag) => (
          <Tag
            key={tag}
            selected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagsWrapper>
    </Container>
  );
};

export default HighlightsSelector;
