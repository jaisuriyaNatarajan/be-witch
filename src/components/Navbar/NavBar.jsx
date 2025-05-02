import React from "react";
import {
  NavContainer,
  Container,
  IconContainer,
  StyledNavLink,
  NavItem,
  NavList,
  Nav,
  Logo,
} from "./Navbar.styles";
import { useTheme } from "styled-components";
import BeWitch from "../../assets/Bewittch.png";
import Icon from "../../utils/Icon";
import { navItems, iconItems } from "./Navbarconfig";
import Button from "../Button/Button";

const Navbar = ({ hideNavbar }) => {
  const theme = useTheme();

  return (
    <Container>
      <div>
        <Logo src={BeWitch} alt="BeWitch" />
      </div>
      {!hideNavbar && (
        <NavContainer nomargin>
          <Nav>
            <NavList>
              {navItems.map(({ path, element, end }) => (
                <NavItem key={path}>
                  <StyledNavLink to={path} end={end}>
                    {element}
                  </StyledNavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </NavContainer>
      )}
      <IconContainer>
        {hideNavbar && <Button>Get Bewittch Pro</Button>}
        {iconItems.map(({ name, size }) => (
          <Icon
            key={name}
            name={name}
            size={size}
            color={theme.colors.black}
            hover
            clickable
          />
        ))}
      </IconContainer>
    </Container>
  );
};

export default Navbar;
