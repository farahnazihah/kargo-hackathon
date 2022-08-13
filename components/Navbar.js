import { useColorMode, Flex, HStack, Spacer, Button } from "@chakra-ui/react";
import NextLink from "next/link";

import styled from "@emotion/styled";

const Navbar = () => {
  const { colorMode } = useColorMode({});

  const Navbar = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    background: ${colorMode === "light" ? "#F8F8F8" : "#1A202C"};
  `;

  return (
    <Navbar width="100%" as="nav" py={2} mb={[0, 0, 8]} px={["5px", "5rem"]}>
      <HStack spacing="2rem">
        <NextLink href="/" passHref>
          <Button as="a" _hover={{ bgColor: "primary", color: "white" }}>
            Shipment
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button as="a" _hover={{ bgColor: "primary", color: "white" }}>
            Truck
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button as="a" _hover={{ bgColor: "primary", color: "white" }}>
            Driver
          </Button>
        </NextLink>
      </HStack>
      <Spacer />
    </Navbar>
  );
};

export default Navbar;
