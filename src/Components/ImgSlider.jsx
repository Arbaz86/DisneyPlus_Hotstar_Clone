import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let imgData = [
  { imgUrl: "/images/slider-spider-man.jpg", link: "" },
  { imgUrl: "/images/slider-tokyo-revengers.jpg", link: "" },
  { imgUrl: "/images/slider-moon-night.jpg", link: "" },
  { imgUrl: "/images/slider-black-panther.jpg", link: "" },
  { imgUrl: "/images/slider-avatar.jpg", link: "" },
  { imgUrl: "/images/slider-falcon-winter.jpg", link: "" },
];

export const ImgSlider = () => {
  const [isSmallerThan570] = useMediaQuery("(max-width: 570px)");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Carousel {...settings}>
      {imgData.map((el) => (
        <Box key={el.imgUrl} p="10px" pos="relative">
          <Link to={el.link}>
            <Image
              h={isSmallerThan570 ? "150px" : "100%"}
              w="100%"
              rounded="8px"
              src={el.imgUrl}
              alt="img"
            />
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
