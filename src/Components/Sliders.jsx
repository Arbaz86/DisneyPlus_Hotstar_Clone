import { Box, Heading } from "@chakra-ui/react";
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
  return (
    <Box>
      {/*Recommended  slider  */}
      <Box>
        <Box m="40px 0px 20px">
          <Heading
            fontSize="1.5vw"
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
        <Box m="40px 0px 20px">
          <Heading
            fontSize="1.5vw"
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
        <Box m="40px 0px 20px">
          <Heading
            fontSize="1.5vw"
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
        <Box m="40px 0px 20px">
          <Heading
            fontSize="1.5vw"
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
        <Box m="40px 0px 20px">
          <Heading
            fontSize="1.5vw"
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
