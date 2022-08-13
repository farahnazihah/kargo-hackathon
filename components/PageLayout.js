import {
  Flex,
  Box,
  Image,
  Center,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Center direction="row" width={"100%"}>
        <Box w={["100%", "90%", "80%"]} h="100vh" p={["1rem", "5rem", "5rem"]}>
          <div>{children}</div>
        </Box>
      </Center>
    </>
  );
};

export default PageLayout;
