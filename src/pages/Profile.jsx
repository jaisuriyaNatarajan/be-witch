import React, { useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { homeNavItems, socialIcons } from "../components/Navbar/Navbarconfig";
import {
  IconContainer,
  Nav,
  NavContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from "../components/Navbar/Navbar.styles";
import Icon from "../utils/Icon";
import { Outlet } from "react-router-dom";
import profileAvatar from "../assets/sampleProfile.png";
import profileCover from "../assets/profileCover.jpg";
import Button from "../components/Button/Button";
import Paragraph from "../components/Paragraph/Paragraph";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: ${({ gap }) => (gap ? gap : "")};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  position: relative;
  right: 28px;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const ProfileCard = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: 345px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div``;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 29px 0px;
  gap: 8px;
`;

const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Profile = () => {
  const theme = useTheme();
  const [coverImage, setCoverImage] = useState(profileCover);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setCoverImage(newImageUrl);
    }
  };

  return (
    <Container>
      <ProfileCard>
        <LeftWrapper>
          <ProfileInfo>
            <ImageContainer>
              <img
                src={profileAvatar}
                alt="Profile Avatar"
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: 200,
                  objectFit: "cover",
                }}
              />
            </ImageContainer>
            <div>
              <h2>Olivia Rhyne</h2>
            </div>
            <div>
              <Paragraph color={theme.colors.secondary}>
                I’m a certified makeup artist with over 7 years of experience in
                the industry. I’ve w..
              </Paragraph>
            </div>
            <div>
              <a>Https://bewittch.oliviaryhne.com</a>
            </div>
          </ProfileInfo>
          <Container gap="8px">
            <InfoContainer>
              <Button>
                <Icon noborder name="Send" text="Message" clickable hover />
              </Button>
              <Icon />
              <Icon />
            </InfoContainer>
            <div>
              <Paragraph color={theme.colors.secondary} fontSize="16px">
                Typically responds within 24hrs
              </Paragraph>
            </div>
          </Container>
        </LeftWrapper>
        <RightWrapper>
          <ImageContainer onClick={handleImageClick}>
            <img
              src={coverImage}
              alt="Profile Cover"
              style={{
                width: "100%",
                height: "345px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <HiddenInput
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
          </ImageContainer>
        </RightWrapper>
      </ProfileCard>

      <NavWrapper>
        <NavContainer>
          <Nav noBroder>
            <NavList>
              {homeNavItems.map(({ path, element, end }) => (
                <NavItem key={path}>
                  <StyledNavLink to={path} end={end}>
                    {element}
                  </StyledNavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </NavContainer>
        <IconContainer>
          {socialIcons.map(({ name, size }) => (
            <Icon
              key={name}
              name={name}
              size={size}
              color={theme.colors.secondary}
              hover
              clickable
            />
          ))}
        </IconContainer>
      </NavWrapper>

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Profile;
