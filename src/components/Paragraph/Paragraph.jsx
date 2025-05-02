import React from "react";
import styled from "styled-components";

// Styled Paragraph
const StyledParagraph = styled.p`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color, theme }) => color || theme.colors.text};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;

const Paragraph = ({
  children,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  textAlign,
  margin,
  padding,
  letterSpacing,
  maxWidth,
  nowrap,
  ...rest
}) => {
  return (
    <StyledParagraph
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
      textAlign={textAlign}
      margin={margin}
      padding={padding}
      letterSpacing={letterSpacing}
      maxWidth={maxWidth}
      nowrap={nowrap}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
