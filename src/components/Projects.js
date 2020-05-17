import React, { Component } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Slide from '../components/Slide';
import '../App.scss';

const Title = styled.h2`
  font-family: Axiforma-Bold;
  line-height: 50px;
  color: #183A5A;
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
      slidesPerView: 2,
      centeredSlides: true,
      mousewheel: true,
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
                <div className="swiper-slide" ><Slide/></div>
                <div className="swiper-slide"><Slide/></div>
                <div className="swiper-slide"><Slide/></div>
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
