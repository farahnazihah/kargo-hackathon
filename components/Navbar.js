import { useColorMode, Flex, HStack, Spacer, Button } from "@chakra-ui/react";
import NextLink from "next/link";

import styled from "@emotion/styled";
import { Image, Box } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode } = useColorMode({});

  const Navbar = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
  `;

  return (
    <Box borderBottomColor="primary" borderWidth="5px">
      <Navbar width="100%" as="nav" py={2} px={["5px", "5rem"]}>
        <Image src={"/logo.png"} alt="logo" width={"100px"} mr="5rem" />
        <HStack spacing="2rem">
          <NextLink href="/" passHref>
            <Button
              as="a"
              bg={"white"}
              _hover={{ bgColor: "primary", color: "white" }}
            >
              Shipment
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button
              as="a"
              bg={"white"}
              _hover={{ bgColor: "primary", color: "white" }}
            >
              Truck
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button
              as="a"
              bg={"white"}
              _hover={{ bgColor: "primary", color: "white" }}
            >
              Driver
            </Button>
          </NextLink>
        </HStack>
        <Spacer />
      </Navbar>
    </Box>
  );
};

export default Navbar;
