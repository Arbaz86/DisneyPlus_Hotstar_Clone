import { Flex, MenuItem } from "@chakra-ui/react";
import React from "react";

export const NavMenu = (props) => {
  return (
    <>
      <MenuItem
        p="8px 0px 8px 15px"
        bg="#192133"
        _hover={{ bg: "#0c111b", color: "#ffffff" }}
      >
        <Flex alignItems="center" gap="8px">
          {props.icon && <props.icon mr="10px" color="#B5b5b5" />}
          <span>{props.name}</span>
        </Flex>
      </MenuItem>
    </>
  );
};
