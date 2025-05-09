import React from "react";
import styled, { useTheme } from "styled-components";
import StudioBanner from "../components/banner/StudioBanner";
import profileAvatar from "../assets/sampleProfile.png";
import jude from "../assets/judebot/jude.png";
import GetInspired from "../components/GetInspired/GetInspired";
import ToggleSwitch from "../components/Button/ToggleSwitch";

const Home = () => {
  const theme = useTheme();

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 78px;
  `;

  const Row = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: ${(props) =>
      props.row ? "row" : props.column ? "column" : "row"};
    height: ${(props) => props.height || "auto"};
  `;

  const Cell = styled.div`
    display: flex;
    flex-direction: ${(props) =>
      props.row ? "row" : props.column ? "column" : "row"};
    align-items: ${(props) => props.align || "stretch"};
    justify-content: ${(props) => props.justify || "flex-start"};
    gap: ${(props) => props.gap || "0"};
    padding: ${(props) => props.padding || "0"};
    margin: ${(props) => props.margin || "0"};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    background: ${(props) => props.background || "transparent"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.borderRadius || "0"};
  `;
  const ImageContainer = styled.div`
    cursor: pointer;
    position: relative;
  `;

  return (
    <Container>
      <Row column>
        <Cell row gap="12px" align="center">
          <ImageContainer>
            <img
              src={profileAvatar}
              alt="Profile Avatar"
              style={{
                width: 84,
                height: 84,
                borderRadius: 200,
                objectFit: "cover",
              }}
            />
          </ImageContainer>
          <Cell column>
            <Cell>Olivia Studio</Cell>
            <Cell margin="12px 0px 0px 0px" row gap="8px">
              <h3>Welcome , Olivia Rhyne !</h3>
              <Cell
                background="linear-gradient(90deg, #FFB6C1 0%, #FF69B4 100%)"
                borderRadius="8px"
                padding="4px 12px"
              />
            </Cell>
          </Cell>
        </Cell>
        <Cell>
          <StudioBanner />
        </Cell>
      </Row>
      <Row column>
        <Cell row gap="12px" align="center" justify="space-between">
          <Cell>
            <h3>Get Inspired </h3>
          </Cell>
          <Cell>
            <ToggleSwitch />
          </Cell>
        </Cell>
        <Cell>
          <GetInspired />
        </Cell>
      </Row>
      <Row column height="218px">
        <Cell>
          <h3>We’re here to help</h3>
        </Cell>
        <Cell
          row
          gap="12px"
          align="center"
          height="158px"
          background={theme.gradients.lightGray}
          borderRadius="16px"
        >
          <Cell margin="40px 16px 48px 32px">
            <img
              src={jude}
              alt="Jude Bot"
              style={{
                width: 70,
                height: 70,
                objectFit: "cover",
              }}
            />
          </Cell>
          <Cell column align="flex-start">
            <h4>Chat with jude</h4>
            <p>
              Need some guidance? Contact your superhost for information and
              tips
            </p>
          </Cell>
        </Cell>
      </Row>
    </Container>
  );
};

export default Home;
