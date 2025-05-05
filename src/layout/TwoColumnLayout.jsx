// src/pages/TwoColumnLayout.js
import styled from "styled-components";
import image from "../assets/signing.png";
import Paragraph from "../components/Paragraph/Paragraph";

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1140px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  background: #fff;
  padding: 2rem;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightColumn = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const TwoColumnLayout = ({ children }) => (
  <LayoutContainer>
    <LeftColumn>
      <div style={{ width: "100%", maxWidth: "500px" }}>{children}</div>
    </LeftColumn>
    <RightColumn>
      <ImageWrapper>
        <StyledImage src={image} alt="Fashion" />
        <OverlayContent>
          <Paragraph fontSize="32px" fontWeight="800" color="#fff">
            Replace your Bio link. Boost your Fashion, Beauty & Influencer
            Career.
          </Paragraph>
          <Paragraph
            fontSize="14px"
            fontWeight="400"
            color="#F6F6F6"
            lineHeight={"1.5"}
            margin="1rem 0"
          >
            Create a free link in bio page to showcase your work and get
            discovered by brands and clients. A powerful link-in-bio platform
            designed for fashion, beauty & influencer professionals.
          </Paragraph>
        </OverlayContent>
      </ImageWrapper>
    </RightColumn>
  </LayoutContainer>
);
