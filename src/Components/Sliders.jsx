import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { SliderComp } from "./SliderComp";
import {
  animatedAdventures,
  disneyOrigin,
  latestOnDisney,
  recommendedSliderData,
  twistInTheTale,
} from "../Utils/constantSliderData";

export const Sliders = () => {
  const [isSmallerThan570] = useMediaQuery("(max-width: 570px)");

  return (
    <Box>
      {/*Recommended  slider  */}
      <Box>
        <Box mt={isSmallerThan570 ? "20px" : "40px"} mb="20px">
          <Heading
            fontSize={isSmallerThan570 ? "11px" : "1.5vw"}
            _hover={{ color: "#1f80e0", cursor: "pointer" }}
            display="inline-block"
          >
            Recommended for You
          </Heading>
        </Box>

        <Box>
          <SliderComp sliderData={recommendedSliderData} slideToShow={8} />
        </Box>
      </Box>

      {/*Disney+ Origin slider  */}
      <Box>
        <Box mt={isSmallerThan570 ? "20px" : "40px"} mb="20px">
          <Heading
            fontSize={isSmallerThan570 ? "11px" : "1.5vw"}
            _hover={{ color: "#1f80e0", cursor: "pointer" }}
            display="inline-block"
          >
            Disney+ Originals
          </Heading>
        </Box>

        <Box>
          <SliderComp sliderData={disneyOrigin} slideToShow={8} />
        </Box>
      </Box>

      {/*  Twist in the Tale slider */}
      <Box>
        <Box mt={isSmallerThan570 ? "20px" : "40px"} mb="20px">
          <Heading
            fontSize={isSmallerThan570 ? "11px" : "1.5vw"}
            _hover={{ color: "#1f80e0", cursor: "pointer" }}
            display="inline-block"
          >
            Twist in the Tale
          </Heading>
        </Box>

        <Box>
          <SliderComp sliderData={twistInTheTale} slideToShow={8} />
        </Box>
      </Box>

      {/* Animated Adventures slider */}
      <Box>
        <Box mt={isSmallerThan570 ? "20px" : "40px"} mb="20px">
          <Heading
            fontSize={isSmallerThan570 ? "11px" : "1.5vw"}
            _hover={{ color: "#1f80e0", cursor: "pointer" }}
            display="inline-block"
          >
            Animated Adventures
          </Heading>
        </Box>

        <Box>
          <SliderComp sliderData={animatedAdventures} slideToShow={8} />
        </Box>
      </Box>
      {/* Latest on Disney+ slider */}
      <Box>
        <Box mt={isSmallerThan570 ? "20px" : "40px"} mb="20px">
          <Heading
            fontSize={isSmallerThan570 ? "11px" : "1.5vw"}
            _hover={{ color: "#1f80e0", cursor: "pointer" }}
            display="inline-block"
          >
            Latest on Disney+
          </Heading>
        </Box>

        <Box>
          <SliderComp sliderData={latestOnDisney} slideToShow={8} />
        </Box>
      </Box>
    </Box>
  );
};
