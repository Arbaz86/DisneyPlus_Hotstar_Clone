import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";

export const Footer = () => {
  const [isSmallerThan920] = useMediaQuery("(max-width: 920px)");
  const [isSmallerThan420] = useMediaQuery("(max-width: 420px)");

  return (
    <Box
      pos="relative"
      overflow="hidden"
      display="block"
      top="40px"
      p="30px 3%"
      m="30px 0px 40px"
      fontWeight="600"
      color="#f1f1f1d6"
    >
      <Flex
        justifyContent="space-between"
        direction={isSmallerThan920 ? "column" : "row"}
        gap="30px"
      >
        <Box w={isSmallerThan920 ? "100%" : "50%"}>
          <Flex gap="16px" fontSize={isSmallerThan420 ? "10px" : "14px"}>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              About Disney+ Hotstar
            </Text>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              Terms Of Use
            </Text>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              Privacy Policy
            </Text>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              FAQ
            </Text>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              Feedback
            </Text>
            <Text cursor="pointer" _hover={{ color: "#1f80e0" }}>
              Careers
            </Text>
          </Flex>
          <Text
            mt="10px"
            fontSize={isSmallerThan420 ? "9px" : "13px"}
            color="#ffffffd7"
          >
            © 2023 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </Text>
        </Box>
        <Flex
          color="#ffffffc0"
          justifyContent="space-evenly"
          w={isSmallerThan920 ? "100%" : "50%"}
          gap="20px"
        >
          <Box>
            <Text fontSize={isSmallerThan420 ? "10px" : "14px"}>
              Connect with us
            </Text>
            <Flex gap="10px" mt="6px">
              <Button
                p="0px"
                _hover={{ bg: "#1f80e0" }}
                _active={false}
                bg="#1a1c27"
                size={isSmallerThan420 ? "sm" : "md"}
              >
                <ImFacebook fontSize={isSmallerThan420 ? "16px" : "25px"} />
              </Button>
              <Button
                p="0px"
                _hover={{ bg: "#1f80e0" }}
                _active={false}
                bg="#1a1c27"
                size={isSmallerThan420 ? "sm" : "md"}
              >
                <ImTwitter fontSize={isSmallerThan420 ? "16px" : "25px"} />
              </Button>
            </Flex>
          </Box>
          <Box>
            <Text fontSize={isSmallerThan420 ? "10px" : "14px"}>
              Disney+ Hotstar App
            </Text>
            <Flex
              gap="10px"
              mt="8px"
              direction={isSmallerThan420 ? "column" : "row"}
            >
              <Image
                h="50%"
                src={"/images/google-play-badge-logo.svg"}
                w={isSmallerThan420 ? "80px" : "120px"}
              />
              <Image
                src={"/images/app-store-apple-logo.svg"}
                w={isSmallerThan420 ? "80px" : "120px"}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
