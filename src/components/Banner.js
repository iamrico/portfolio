import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/banner-image.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const BannerText = styled.p`
  font-size: 60px;
  letter-spacing: -2px;
  line-height: 70px;
  width: 916px;
  color: #183a5a;
  font-family: Axiforma-Bold;
  width: 624px;
  padding-left: 60px;
  padding-right: 70px;
`;

const Thin = styled.span`
  font-family: Axiforma-Thin;
`;

const Row = styled.div`
  display: flex;
`;

const BannerImage = styled.div`
  background-image: url(${bannerImage});
  width: 550px;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
const Dot = styled.span`
  color: #c34129;
`;

const HoverEffect = styled.span`
  background-image: linear-gradient(180deg, transparent 65%, #ff9b7f 0);
  background-repeat: repeat-x;
  background-size: 0 100%;
  transition: 0.1s linear;

  &:hover {
    background-size: 100% 100%;
  }
`

const Banner = () => {
  return (
    <section className="banner">
      <Row>
        <BannerText>
          <Thin>Welcome to my portfolio where I can </Thin>
          <HoverEffect>show you what I do</HoverEffect>
          <Thin> and you can get to </Thin> <HoverEffect>know me better</HoverEffect><Dot>.</Dot>
        </BannerText>
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <BannerImage />
        </ScrollAnimation>
      </Row>
    </section>
  );
};

export default Banner;
