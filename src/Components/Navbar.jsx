import {
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineGTranslate } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import { RiFileList3Fill } from "react-icons/ri";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      h="90px"
      p="0px 5%"
      bg="#090b13"
      zIndex="3"
      gap="20px"
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
            <MenuItem
              p="8px 0px 8px 15px"
              bg="#192133"
              _hover={{ bg: "#0c111b", color: "#ffffff" }}
            >
              <Flex alignItems="center" gap="8px">
                <IoMdAlbums mr="10px" color="#B5b5b5" />
                <span>Channel</span>
              </Flex>
            </MenuItem>
            <MenuItem
              p="8px 0px 8px 15px"
              bg="#192133"
              _hover={{ bg: "#0c111b", color: "#ffffff" }}
            >
              <Flex alignItems="center" gap="8px">
                <MdOutlineGTranslate mr="10px" color="#B5b5b5" />
                <span>Languages</span>
              </Flex>
            </MenuItem>
            <MenuItem
              p="8px 0px 8px 15px"
              _hover={{ bg: "#0c111b", color: "#ffffff" }}
              bg="#192133"
            >
              <Flex alignItems="center" gap="8px">
                <RiFileList3Fill mr="10px" color="#B5b5b5" />
                <span>Genres</span>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
        <Image src="images/logo.svg" alt="" w="180px" mb="4px" maxH="90px" />
      </Flex>
      <Button color="#0c111b">Login</Button>
    </Flex>
  );
};
