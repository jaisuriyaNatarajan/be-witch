import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 1rem;
`;

const MainLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/profile");
  return (
    <LayoutContainer>
      <Navbar hideNavbar={hideNavbar} />
      <Content>
        <Outlet />
      </Content>
      <Footer>&copy; 2025 MyApp</Footer>
    </LayoutContainer>
  );
};

export default MainLayout;
