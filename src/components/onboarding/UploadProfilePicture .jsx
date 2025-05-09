import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MakeupArtists } from "../../assets/artists";
import { useOnboarding } from "../../context/OnboardingContext";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #666;
  margin-top: 0.5rem;
`;

const UploadCard = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const UploadButton = styled.label`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: 2px solid #ff8c00;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadProfilePicture = () => {
  const [image, setImage] = useState(MakeupArtists);
  const { updateFormData } = useOnboarding();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    updateFormData({ profilePicture: image });
  }, [image]);

  return (
    <Wrapper>
      <Title>Upload your profile picture</Title>
      <Subtitle>Help us connect you with opportunities in your area</Subtitle>

      <UploadCard>
        {image && <ImagePreview src={image} alt="Profile Preview" />}
        {!image && (
          <ImagePreview
            src="https://via.placeholder.com/120x120.png?text=👤"
            alt="Default avatar"
          />
        )}

        <UploadButton htmlFor="profile-upload">
          📤 Upload profile picture
        </UploadButton>
        <HiddenInput
          type="file"
          id="profile-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
      </UploadCard>
    </Wrapper>
  );
};

export default UploadProfilePicture;
