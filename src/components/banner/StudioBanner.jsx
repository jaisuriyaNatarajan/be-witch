import React, { use } from "react";
import styled, { useTheme } from "styled-components";
import bannerImage from "../../assets/banner-laptop.png";
import { useNavigate } from "react-router-dom";

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.gradients.lightGray};
  border-radius: 16px;
  padding: 24px 32px;
  width: 100%;
  max-height: 120px;
`;

const Text = styled.div`
  max-width: 60%;
`;

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`;

const Image = styled.img`
  width: 180px;
  height: auto;
`;

const StudioBanner = () => {
  const navigate = useNavigate();
  return (
    <Banner>
      <Text>
        <Heading>Build Your Dream Studio Starts Here !</Heading>
        <SubText>
          Create your studio website. Get discovered. Get booked.
        </SubText>
        <Button onClick={() => navigate("/web/profile-setup")}>
          Get started
        </Button>
      </Text>
      <Image
        src={bannerImage}
        alt="Banner"
        style={{ width: "398px", height: "231px" }}
      />
    </Banner>
  );
};

export default StudioBanner;
