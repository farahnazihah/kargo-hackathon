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
    <Center direction="row" width={"100%"}>
      <Box w={["100%", "90%", "80%"]} h="100vh" p={["1rem", "5rem", "5rem"]}>
        <div bgColor="red.500">{children}</div>
      </Box>
    </Center>
  );
};

export default PageLayout;
