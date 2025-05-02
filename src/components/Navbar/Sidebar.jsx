import React from "react";
import styled, { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/Icon";
import { sideNavItems, bottomItems } from "./sidebarconfig";
import { Logo } from "./Navbar.styles";
import BeWitch from "../../assets/Bewittch.png";

// Styled Components
const SidebarWrapper = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s;

  &.active {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;

const Sidebar = () => {
  const theme = useTheme();

  return (
    <SidebarWrapper>
      <div>
        <Logo src={BeWitch} alt="BeWitch" />
      </div>
      <NavSection>
        {sideNavItems.map(({ label, icon }) => (
          <StyledLink to={`/profile/${label.toLowerCase()}`} key={label}>
            <Icon
              name={icon}
              size={20}
              color={theme.colors.secondary}
              clickable
              hover
            />
            {label}
          </StyledLink>
        ))}
      </NavSection>

      <NavSection>
        {bottomItems.map(({ label, icon }) => (
          <StyledLink to={`/profile/${label.toLowerCase()}`} key={label}>
            <Icon
              name={icon}
              size={20}
              color={theme.colors.secondary}
              clickable
              hover
            />
            {label}
          </StyledLink>
        ))}
      </NavSection>
    </SidebarWrapper>
  );
};

export default Sidebar;
