import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  width: 90%;
  margin: 0 auto; /* Adds left and right gap */
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
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;
