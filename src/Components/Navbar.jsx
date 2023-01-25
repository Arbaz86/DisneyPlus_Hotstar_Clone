import {
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  Text,
  Input,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavMenu } from "./NavMenu";
import { inHamIcon } from "../Utils/NavData";
import { useMediaQuery } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      h="80px"
      p="0px 3%"
      bg="#090b13"
      zIndex="3"
      gap="10px"
      w="100%"
    >
      {/*left navbar part  */}
      <Flex alignItems="center" gap="10px">
        <Menu isOpen={isOpen}>
          <MenuButton
            p="10px"
            as={Text}
            bg="transparent"
            _hover={false}
            _active={false}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <RxHamburgerMenu fontSize="22px" />
          </MenuButton>
          <MenuList
            bg="#192133"
            color="#B5b5b5"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            border="0px"
          >
            {inHamIcon.map((el) => (
              <NavMenu key={el.name} {...el} />
            ))}
          </MenuList>
        </Menu>
        <Image
          src="images/logo.svg"
          alt=""
          w="160px"
          mb="4px"
          maxH="90px"
          mt="-10px"
        />
        {!isSmallerThan1100 && (
          <Flex
            fontSize="1vw"
            color="#FFFFFFCC"
            fontWeight="500"
            justifyContent="center"
            alignItems="center"
          >
            <Text cursor="default" p="20px 15px" _hover={{ color: "#f9f9f9" }}>
              TV
            </Text>
            <Text cursor="default" p="20px 15px" _hover={{ color: "#f9f9f9" }}>
              Movies
            </Text>
            <Text cursor="default" p="20px 15px" _hover={{ color: "#f9f9f9" }}>
              Sports
            </Text>
            <Text cursor="default" p="20px 15px" _hover={{ color: "#f9f9f9" }}>
              Disney+
            </Text>
            <Image src="images/kidsText.svg" alt="kids" p="20px 15px" />
          </Flex>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap="10px">
        <Flex justifyContent="flex-end">
          <InputGroup size="sm">
            <Input
              type="text"
              w="13vw"
              variant="flushed"
              _focus={{ width: "18vw" }}
              placeholder="Search"
              _placeholder={{ color: "#FFFFFFCC", fontWeight: "600" }}
              transition="width 0.3s ease"
              color="#FFFFFFCC"
              fontSize={isSmallerThan530 ? "14px" : "18px"}
              fontFamily="revert-layer"
            />
            <InputRightAddon
              bg="transparent"
              border="0"
              borderBottom="1px solid"
              children={
                <AiOutlineSearch
                  fontSize={isSmallerThan530 ? "14px" : "18px"}
                />
              }
              cursor="text"
            />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue" size="xs" fontStyle="700">
          SUBSCRIBE
        </Button>
        <Button
          display={isSmallerThan530 ? "none" : "inline"}
          fontSize="18px"
          bg="transparent"
          color="#ffffffcc"
          _hover={false}
          _active={false}
          onClick={handleAuth}
        >
          LOGIN
        </Button>
      </Flex>
    </Flex>
  );
};
