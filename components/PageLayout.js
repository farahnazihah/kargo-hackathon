import {
  Flex,
  Box,
  Image,
  Center,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";

const PageLayout = ({ children }) => {
  return (
    <Flex direction="row">
      <Box w={["100%", "90%", "80%"]} h="100vh" p={["1rem", "5rem", "5rem"]}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
