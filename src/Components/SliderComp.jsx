import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Box, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { saveLocalData } from "../Utils/localStorage";

export const SliderComp = (props) => {
  const navigate = useNavigate();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: props.slideToShow,
    slidesToScroll: props.slideToShow,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.slideToShow - 2,
          slidesToScroll: props.slideToShow - 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: props.slideToShow - 3,
          slidesToScroll: props.slideToShow - 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.slideToShow - 4,
          slidesToScroll: props.slideToShow - 4,
        },
      },
    ],
  };

  const handleClick = (el) => {
    saveLocalData("singleMovieData", { ...el });

    navigate(`/disneyplus/watch/${el.id}`);
  };

  return (
    <Carousel {...settings}>
      {props.sliderData.map((el) => (
        <Box
          key={el.id}
          p="5px"
          pos="relative"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.25)",
            zIndex: 1,
          }}
          onClick={() => handleClick(el)}
        >
          <Image
            loading="lazy"
            h="100%"
            w="100%"
            rounded="8px"
            src={el.cardImg}
            alt="img"
          />
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
