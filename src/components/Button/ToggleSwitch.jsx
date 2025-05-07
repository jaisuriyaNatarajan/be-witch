import React, { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: inline-flex;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ccc;
  background: #f1f1f1;
  height: 40px;
`;

const ToggleButton = styled.button`
  padding: 8px 20px;
  border: none;
  background: ${({ active }) =>
    active ? "linear-gradient(to right, #444, #aaa, #444)" : "white"};
  color: ${({ active }) => (active ? "white" : "#333")};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:focus {
    outline: none;
  }
`;

const ToggleSwitch = () => {
  const [active, setActive] = useState("Portfolio");

  return (
    <ToggleWrapper>
      <ToggleButton
        active={active === "Portfolio"}
        onClick={() => setActive("Portfolio")}
      >
        Portfolio
      </ToggleButton>
      <ToggleButton
        active={active === "People"}
        onClick={() => setActive("People")}
      >
        People
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
