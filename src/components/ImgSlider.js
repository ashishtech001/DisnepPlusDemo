import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import sliderBadgimg from "../components/images/slider-badging.jpg";
import sliderscaleimg from "../components/images/slider-scale.jpg";
import sliderbadagimg from "../components/images/slider-badag.jpg";
import sliderscalesimg from "../components/images/slider-scales.jpg";

function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={sliderBadgimg} alt="img not found" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src={sliderscaleimg} alt="img not found" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src={sliderbadagimg} alt="img not found" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={sliderscalesimg} alt="img not found" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
}

const Carousel = styled(Slider)`
  margin-top: 50px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgba(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overlow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radiud: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px rgb(0 0 0 73%) 0px 16px
      10px --10px;
      cursor:pointer;
      display:block;
      position:relative;

      padding:4px;

      img{
        width:100%;
        height:100%;

      }

      &:hover{
        padding:0;
        border:4px solid rgba(249, 249, 249, 0.8);
        transition-duration:300ms;
      }
  }
`;

export default ImgSlider;
