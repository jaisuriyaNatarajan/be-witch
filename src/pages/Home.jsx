import React from "react";
import styled from "styled-components";
import StudioBanner from "../components/banner/StudioBanner";

const Home = () => {
  const Container = styled.div``;

  const Row = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: ${(props) =>
      props.row ? "row" : props.column ? "column" : "row"};
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

  return (
    <Container>
      <Row column>
        <Cell row gap="12px" align="center">
          <Cell>Avatar circle</Cell>
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
      <Row>
        <Cell></Cell>
        <Cell></Cell>
      </Row>
      <Row>
        <Cell></Cell>
        <Cell></Cell>
      </Row>
    </Container>
  );
};

export default Home;
