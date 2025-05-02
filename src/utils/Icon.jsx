import React from "react";
import * as Icons from "lucide-react";
import styled from "styled-components";

// Styled wrapper
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ hasText }) => (hasText ? "8px" : "0")};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  transition: 0.2s ease;
  padding: ${({ nopadding }) => !nopadding && "8px 16px"};
  border: ${({ theme, noborder, bordersize }) =>
    !noborder && `${bordersize || 1}px solid ${theme.colors.liteGrey}`};
  border-radius: ${({ borderCircle }) => (borderCircle ? "100%" : "8px")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};

  &:hover {
    opacity: ${({ hover }) => (hover ? 0.7 : 1)};
  }

  span {
    font-size: 1rem;
    line-height: 1;
  }
`;
const Icon = ({
  name = "Circle",
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  hover = false,
  clickable = false,
  text = null,
  borderCircle = false,
  nopadding = false,
  backgroundColor = "transparent",
  ...rest
}) => {
  const LucideIcon = Icons[name] || Icons.Circle;

  return (
    <IconWrapper
      hover={hover}
      clickable={clickable}
      hasText={!!text}
      borderCircle={borderCircle}
      style={{ backgroundColor }}
      nopadding={nopadding}
      {...rest}
    >
      <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />
      {text && <span>{text}</span>}
    </IconWrapper>
  );
};

export default Icon;
