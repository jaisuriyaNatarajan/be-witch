import React from "react";
import styled from "styled-components";
import { IconContainer } from "../components/Navbar/Navbar.styles";
import profileAvatar from "../assets/sampleProfile.png";
import Icon from "../utils/Icon";
import Paragraph from "../components/Paragraph/Paragraph";
import Button from "../components/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  /* border: ${({ theme }) => `1px solid ${theme.colors.secondary}`}; */
  height: 480px;
  border-radius: 12px;
  padding: 24px;
  justify-content: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  gap: 12px;
  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "")};
  justify-content: ${({ center }) => (center ? "center" : "")};
`;

const About = () => {
  const experienceInfo = [
    "7+ years in makeup artistry",
    "Worked on over 500 events and photoshoots",
    "Published in magazines like Glamour and Vogue",
    "Experienced in all skin tones and types",
  ];

  const Services = [
    "Extensive skin prep with hydration treatment",
    "HD/Airbrush foundation for long-lasting coverage",
    "Detailed contouring, blush & highlighter",
    "Custom eye makeup (cut crease, smokey, glitter options)",
    "Luxury false eyelashes application",
    "Waterproof & transfer-proof makeup",
    "Hairstyling (Updo, curls, or any preferred bridal style)",
  ];

  return (
    <Container>
      <LeftContainer>
        <Wrapper gap="8px">
          <IconContainer>
            <img
              src={profileAvatar}
              alt="Profile Avatar"
              style={{
                width: 64,
                height: 64,
                borderRadius: 200,
                objectFit: "cover",
              }}
            />
          </IconContainer>
          <div>
            <h4 style={{ margin: "0px" }}>Olivia Rhynes</h4>
            <Icon name="Star" text={4.5} color="gold" noborder />
          </div>
        </Wrapper>
        <Wrapper column>
          <h3>About Me</h3>
          <Paragraph>
            I’m a certified makeup artist with over 7 years of experience in the
            industry. I’ve worked with top photographers, influencers, and
            brides, delivering beautiful looks tailored to every client. My work
            focuses on enhancing your natural beauty with professional
            techniques and high-quality products. I pride myself on creating a
            comfortable, fun, and personalized experience.
          </Paragraph>
        </Wrapper>
        <Wrapper column>
          <h3>Experience</h3>
          {experienceInfo.map((info, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              {info}
            </div>
          ))}
        </Wrapper>
      </LeftContainer>
      <RightContainer>
        <Wrapper>
          <h3>₹12,000</h3>
        </Wrapper>
        <Wrapper alignCenter center>
          <h4>Premium Package: Bridal Perfection</h4>
          <Button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              justifyContent: "center",
              width: "100px",
              height: "28px",
              margin: "10px",
            }}
          >
            <span>Premium</span>
          </Button>
        </Wrapper>
        <Wrapper column>
          <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
            {Services.map((info, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "12px",
                  listStyleType: "disc", // optional, you can use "circle", "square", etc.
                }}
              >
                {info}
              </li>
            ))}
          </ul>
        </Wrapper>

        <Button>Book Now</Button>
      </RightContainer>
    </Container>
  );
};

export default About;
