import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

let viewerData = [
  {
    imgUrl: "/images/viewers-disney.png",
    videoSrc: "/videos/1564674844-disney.mp4",
    name: "disney",
  },
  {
    imgUrl: "/images/viewers-pixar.png",
    videoSrc: "/videos/1564676714-pixar.mp4",
    name: "pixar",
  },
  {
    imgUrl: "/images/viewers-marvel.png",
    videoSrc: "/videos/1564676115-marvel.mp4",
    name: "marvel",
  },
  {
    imgUrl: "/images/viewers-starwars.png",
    videoSrc: "/videos/1608229455-star-wars.mp4",
    name: "starwars",
  },
  {
    imgUrl: "/images/viewers-national.png",
    videoSrc: "/videos/1564676296-national-geographic.mp4",
    name: "national",
  },
];

export const Viewers = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" templateRows="190px" gap={6}>
      {viewerData.map((el) => (
        <GridItem
          kay={el.name}
          bg="#192133"
          style={gridItemStyles}
          _hover={{ transform: "scale(1.12)" }}
        >
          <Image top="0" src={el.imgUrl} alt={el.name} style={imgStyles} />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            src={el.videoSrc}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

let gridItemStyles = {
  borderRadius: "5px",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  transition: "all 0.3s",
};

let imgStyles = {
  position: "absolute",
  top: "0",
  opacity: 1,
  objectFit: "cover",
  inset: "0px",
  display: "block",
  transition: "opacity 500ms ease-in-out 0s",
  zIndex: "1",
  width: "100%",
};
