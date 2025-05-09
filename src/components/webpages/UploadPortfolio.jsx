import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtext = styled.p`
  font-size: 0.95rem;
  text-align: center;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const UploadSlot = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  height: 100px;
  position: relative;
  overflow: hidden;
  background: #f9f9f9;

  label {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Placeholder = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 0.9rem;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const UploadPortfolio = ({ images = [] }) => {
  const [uploadedImages, setUploadedImages] = useState(
    images.map((image) => ({ file: null, preview: image }))
  );

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const newImages = [...uploadedImages];
    newImages[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setUploadedImages(newImages);
  };

  return (
    <Wrapper>
      <Header>Now, Let’s start by showcasing your best works.</Header>
      <Subtext>
        Upload at least 5 images or a video that represents your portfolio.
      </Subtext>

      <Grid>
        {Array.from({ length: 6 }).map((_, index) => (
          <UploadSlot key={index}>
            <label htmlFor={`upload-${index}`}>
              {uploadedImages[index]?.preview ? (
                <img src={uploadedImages[index].preview} alt="Preview" />
              ) : (
                <Placeholder>
                  <span>+</span>
                  <p>Add a photo</p>
                </Placeholder>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              id={`upload-${index}`}
              onChange={(e) => handleImageUpload(e, index)}
              hidden
            />
          </UploadSlot>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default UploadPortfolio;
