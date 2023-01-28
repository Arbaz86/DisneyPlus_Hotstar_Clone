import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { SliderComp } from "./SliderComp";

export const Recommends = () => {
  return (
    <Box>
      <Box mt="40px">
        <Heading
          fontSize="1.5vw"
          _hover={{ color: "#1f80e0", cursor: "pointer" }}
          display="inline-block"
        >
          Recommended for You{" "}
        </Heading>
      </Box>

      <Box>
        <SliderComp />
      </Box>
    </Box>
  );
};
