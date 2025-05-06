import { css } from "styled-components";

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const media = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => {
    acc[label] = (...args) => css`
      @media (max-width: ${size}) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {}
);
