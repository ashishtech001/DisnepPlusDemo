import React from "react";
import styled from "styled-components";
import imgViewersdisnep from "../components/images/viewers-disney.png";
import imgViewerspixar from "../components/images/viewers-pixar.png";
import imgViewersmarvels from "../components/images/viewers-marvel.png";
import imgViewersstarwars from "../components/images/viewers-starwars.png";
import imgViewersnational from "../components/images/viewers-national.png";
import VidDisnep from "../components/videos/1564674844-disney.mp4";
import VidMarvel from "../components/videos/1564676115-marvel.mp4";
import VidNational from "../components/videos/1564676296-national-geographic.mp4";
import VidPixar from "../components/videos/1564676714-pixar.mp4";
import VidStarWars from "../components/videos/1608229455-star-wars.mp4";

function Viewers(props) {
  return (
    <Container>
      <Wrap>
        <img src={imgViewersdisnep} alt="img not found" />
        <video
          width="100%"
          height="100%"
          autoplay="autoplay"
          loop
          muted
          playsInline
        >
          <source src={VidDisnep} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imgViewerspixar} alt="img not found" />
        <video
          width="100%"
          height="100%"
          autoplay="autoplay"
          loop
          muted
          playsInline
        >
          <source src={VidPixar} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imgViewersmarvels} alt="img not found" />
        <video
          width="100%"
          height="100%"
          autoplay="autoplay"
          loop
          muted
          playsInline
        >
          <source src={VidMarvel} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imgViewersstarwars} alt="img not found" />
        <video
          width="100%"
          height="100%"
          autoplay="autoplay"
          loop
          muted
          playsInline
        >
          <source src={VidStarWars} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imgViewersnational} alt="img not found" />
        <video
          width="100%"
          height="100%"
          autoplay="autoplay"
          loop
          muted
          playsInline
        >
          <source src={VidNational} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
