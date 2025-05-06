import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/banner-laptop.png";

const Banner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #bdbdbd66;
  border-radius: 16px;
  padding: 24px 32px;
  margin: 40px 0;
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
  return (
    <Banner>
      <Text>
        <Heading>Build Your Dream Studio Starts Here !</Heading>
        <SubText>
          Create your studio website. Get discovered. Get booked.
        </SubText>
        <Button>Get started</Button>
      </Text>
      <Image
        src={bannerImage}
        alt="Banner"
        style={{ width: "318px", height: "207px" }}
      />
    </Banner>
  );
};

export default StudioBanner;
