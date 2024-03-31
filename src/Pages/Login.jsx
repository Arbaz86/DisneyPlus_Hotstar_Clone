import { Box, VStack, Flex, Image, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/AuthReducer/action";

export const Login = () => {
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(loginUser());
  };

  return (
    <VStack overflow="hidden" textAlign="center" height="100vh">
      {/* mid content */}
      <Flex
        direction="column"
        w="100%"
        position="relative"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        mb="10vw"
        p="80px 40px"
        h="100%"
        zIndex="1"
      >
        <Box
          h="100%"
          bgPos="top"
          bgImage="url('images/login-background.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          pos="absolute"
          top="0"
          right="0"
          left="0"
          zIndex="-1"
          p="0px 5%"
        >
          <Flex
            direction="column"
            justifyContent="center"
            mb="2vw"
            maxW="790px"
            flexWrap="wrap"
            m="0 auto"
            alignItems="center"
            textAlign="center"
            h="100%"
            transitionTimingFunction="ease-out"
            transition="opacity 0.2s"
            w="100%"
          >
            <Image
              src="images/cta-logo-one.svg"
              mb="12px"
              maxW="790px"
              minH="1px"
              display="block"
              w="100%"
            />
            <Button
              fontWeight="bold"
              colorScheme="blue"
              mb="12px"
              w="100%"
              fontSize="22px"
              letterSpacing="1.5px"
              p="1.3em 0px"
              onClick={handleAuth}
            >
              GET ALL THERE
            </Button>
            <Text
              fontSize="14px"
              m="0px 0px 24px"
              lineHeight="1.5"
              letterSpacing="1.5px"
            >
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+Hotstar subscription. As of 03/26/23, the price
              of Disney+Hotstar and The Disney Bundle will increase by $1.
            </Text>
            <Image
              src="images/cta-logo-two.png"
              mb="20px"
              maxW="730px"
              w="100%"
            />
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
};
