import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 459px;
  height: 68px;
  border-radius: 32px;
  border-width: 1px;
  padding: 12px;
  margin: ${({ nomargin }) => !nomargin && `24px 0px 6px 0px`};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  max-height: 116px;
  margin: 0px 32px;
`;

const Nav = styled.nav`
  padding: 1rem;
  border: ${({ theme, noBroder }) =>
    !noBroder && `1px solid ${theme.colors.secondary}`};
  border-radius: ${({ noBroder }) => !noBroder && `32px`};
  box-shadow: ${({ noBroder }) =>
    !noBroder &&
    `
  0 4px 12px rgba(0, 0, 0, 0.08)
  `};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Logo = styled.img`
  width: 153px;
  height: 52px;
  object-fit: contain;
`;

export {
  NavContainer,
  Container,
  IconContainer,
  StyledNavLink,
  NavItem,
  NavList,
  Nav,
  Logo,
};
