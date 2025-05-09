import React from "react";
import styled from "styled-components";
import servicePhotos from "../../assets/serivesPhotos.png";

const Container = styled.div`
  width: 100%;
  min-height: 50%;
  max-width: 420px;
  margin: auto;
  background-color: #f6f6f6;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    padding: 16px 12px;
    gap: 12px;
  }
`;

const Step = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UploadButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ExploreLink = styled.a`
  color: black;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ServicePhotos = ({ setImages }) => {
  const dummyImages = [servicePhotos];

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <Container>
      <Step>Step 1</Step>
      <Title>Add Service photos</Title>
      <Description>
        Upload high-quality images or videos that best represent your service.
        This helps clients know what to expect from your work.
      </Description>

      <ImageGrid>
        <Image src={dummyImages} alt={`Service sample pic`} />
      </ImageGrid>

      <ButtonGroup>
        <UploadButton>
          <label>
            + Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
          </label>
        </UploadButton>
        <ExploreLink href="#">Explore Inspiring Portfolios</ExploreLink>
      </ButtonGroup>
    </Container>
  );
};

export default ServicePhotos;
