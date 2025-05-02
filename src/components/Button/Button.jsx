import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0.75rem 1.5rem"};
  background-color: ${({ bg, theme }) => bg || theme.colors.primary};
  color: ${({ color, theme }) => color || theme.colors.white};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ radius }) => radius || "8px"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hoverBg, theme }) =>
      hoverBg || theme.colors.primaryDark};
    color: ${({ hoverColor }) => hoverColor || "inherit"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
