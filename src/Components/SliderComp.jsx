import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SliderComp = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: props.slideToShow,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings}>
      {props.sliderData.map((el) => (
        <Box key={el.imgUrl} p="10px" pos="relative">
          <Link to={el.link}>
            <Image h="100%" w="100%" rounded="8px" src={el.imgUrl} alt="img" />
          </Link>
        </Box>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: -10px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  &:hover > button {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -65px;
  }
  .slick-next {
    right: -65px;
  }
`;
