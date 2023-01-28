import { Box } from "@chakra-ui/react";
import React from "react";
import { ImgSlider } from "./ImgSlider";
import { Recommends } from "./Recommends";
import { Viewers } from "./Viewers";

export const Home = () => {
  return (
    <Box
      pos="relative"
      minH="calc(100vh - 250px)"
      overflow="hidden"
      display="block"
      top="80px"
      _after={{
        background:
          "url('/images/home-background.png') center center no-repeat fixed",
        position: "absolute",
        inset: "0px",
        opacity: 1,
        zIndex: -1,
      }}
      p="0px 3%"
    >
      <Box>
        <ImgSlider />
      </Box>
      <Box>
        <Viewers />
      </Box>
      <Box>
        <Recommends />
      </Box>
    </Box>
  );
};
