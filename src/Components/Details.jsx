import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getLocalData } from "../Utils/localStorage";

export const Details = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(getLocalData("singleMovieData"));
  }, []);

  console.log(movie);

  return (
    <Box
      pos="relative"
      minH="calc(100vh - 250px)"
      overflow="hidden"
      display="block"
      top="80px"
      color="white"
    >
      Details
    </Box>
  );
};
