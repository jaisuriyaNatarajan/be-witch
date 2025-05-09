import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppStore from "../../assets/icons/appstore.png";
import PlayStore from "../../assets/icons/playstore.png";
import Bewittch from "../../assets/Bewittch.png";
import {
  facebookIcon,
  twitter,
  peace,
  github,
  Dribble,
  linkedIn,
} from "../../assets/social icons";

const FooterWrapper = styled.footer`
  background-color: #f9f9f9;
  padding: 3rem 2rem;
  font-family: Inter, sans-serif;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
  gap: 2rem;
`;

const Left = styled.div`
  max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
`;

const Description = styled.p`
  font-size: 14px;
  color: #4b5563;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  font-size: 14px;

  a {
    color: #374151;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`;

const AppSection = styled.div`
  /* text-align: right; */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: left;
  }

  p {
    font-size: 14px;
    color: #ef4444;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  img {
    height: 40px;
    margin: 0.25rem 0;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: #9ca3af;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
`;

console.log("first");

const Footer = () => {
  const socialLinks = [
    {
      name: "facebook",
      link: "https://facebook.com",
      icon: facebookIcon,
    },
    {
      name: "twitter",
      link: "https://twitter.com",
      icon: twitter,
    },
    {
      name: "peace",
      link: "https://peace.com", // placeholder or your custom link
      icon: peace,
    },
    {
      name: "github",
      link: "https://github.com",
      icon: github,
    },
    {
      name: "dribbble",
      link: "https://dribbble.com",
      icon: Dribble,
    },
    {
      name: "linkedin",
      link: "https://linkedin.com",
      icon: linkedIn,
    },
  ];

  return (
    <FooterWrapper>
      <Top>
        <Left>
          <img
            src={Bewittch}
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
          <Description>
            Design amazing digital experiences that create more happy in the
            world.
          </Description>
        </Left>

        <NavLinks>
          <Link to="/">Overview</Link>
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Help</Link>
          <Link to="/">Privacy</Link>
        </NavLinks>

        <AppSection>
          <p>Get the app</p>
          <img src={AppStore} alt="Download on App Store" />
          <img src={PlayStore} alt="Get it on Google Play" />
        </AppSection>
      </Top>

      <Bottom>
        <SocialIcons>
          <p>© 2077 Untitled UI. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            {socialLinks.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name.charAt(0).toUpperCase() + name.slice(1)}
              >
                <img
                  src={icon}
                  alt={`${name} icon`}
                  style={{
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                    padding: "0 0.5rem",
                  }}
                />
              </a>
            ))}
          </div>
        </SocialIcons>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;
