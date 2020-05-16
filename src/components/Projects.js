import React, { Component } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css/swiper.css";

const Title = styled.h2`
  font-family: Axiforma-Bold;
  line-height: 50px;
  color: #394247;
  font-size: 34px;
  letter-spacing: 1.5px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 49px;
  margin-top: 84px;
`;

class Project extends Component {
  mySwiper;

  componentDidMount() {
    this.mySwiper = new Swiper(".swiper-container", {
      speed: 400,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
          hide: true,
      },
    });
  }

  render(props) {
    return (
      <div>
        <Title>My Projects</Title>
        <div className="container-fluid">
          <div className="row">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
