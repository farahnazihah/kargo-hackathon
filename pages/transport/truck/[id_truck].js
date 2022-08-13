import PageLayout from "@components/PageLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Add() {
  const router = useRouter();
  const { id_truck } = router.query;
  const [data, setData] = useState({});
  useEffect(() => {
    const res = {
      id: "1",
      license: "ABC1234",
      type: "tronton",
      plate: "yellow",
      production: "2002",
    };
    setData(res);
    console.log(data);
  }, [id_truck]);

  return (
    <>
      <PageLayout>
        <Flex flexDir={["column", "row"]} minH={"100%"}>
          <Box
            minH={"100%"}
            w={["100%", "50%"]}
            boxShadow="lg"
            p="1rem"
            rounded="lg"
            mx="1rem"
          >
            <Box my={"1rem"}>
              <Text>License Number</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.id}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Truck Type</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.type}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Plate Type</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.plate}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Production Year</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.production}
              </Text>
            </Box>
          </Box>
          <Box minH={"100%"} w={["100%", "50%"]}></Box>
        </Flex>
      </PageLayout>
    </>
  );
}
