import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getLocalData } from "../Utils/localStorage";
import { FaPlay } from "react-icons/fa";
import { Footer } from "../Components/Footer";

export const Details = () => {
  const [isSmallerThan1020] = useMediaQuery("(max-width: 1020px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(getLocalData("singleMovieData"));
  }, []);

  return (
    <Box
      pos="relative"
      minH="calc(100vh - 250px)"
      overflow="hidden"
      display="block"
      top="80px"
      color="white"
      p="0px 3%"
    >
      <Box>
        <Flex
          direction="column"
          p="3%"
          pos="absolute"
          zIndex="1"
          h={isSmallerThan1020 ? "50vw" : "60vh"}
          justifyContent={isSmallerThan720 ? "flex-end" : "space-between"}
        >
          {!isSmallerThan720 && (
            <Flex direction="column" gap="20px">
              <Badge color="#dea300" bg="transparent">
                SUBSCRIBER
              </Badge>
              <Heading>{movie.title}</Heading>
              <Text fontSize="20px" fontWeight="600" color="#c2c2c2d9">
                {movie.subTitle}
              </Text>
              <Text fontSize="22px" fontWeight="600" w="60%" color="#d9d9d9f5">
                {movie.description}
              </Text>
            </Flex>
          )}
          <Flex>
            <Button
              leftIcon={
                <FaPlay fontSize={isSmallerThan720 ? "25px" : "30px"} />
              }
              _hover={false}
              _active={false}
              bg="transparent"
              fontSize={isSmallerThan720 ? "22px" : "28px"}
              color="#d9d9d9f5"
              gap="20px"
            >
              Watch Movie
            </Button>
          </Flex>
        </Flex>
        <Flex>
          {!isSmallerThan1020 && (
            <Box
              w="50%"
              bg="#030b17"
              pos="relative"
              shadow="40px 8px 50px 50px #030b17"
            ></Box>
          )}
          <Image
            rounded="5px"
            src={movie.backgroundImg}
            h={isSmallerThan1020 ? "50vw" : "62vh"}
            w={isSmallerThan1020 && "100%"}
          />
        </Flex>
      </Box>

      {/* footer added */}
      <Footer />
    </Box>
  );
};
