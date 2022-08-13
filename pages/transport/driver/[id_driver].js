import PageLayout from "@components/PageLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Add() {
  const router = useRouter();
  const { id_driver } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    const res = {
      id: "1",
      driver_name: "ABC1234",
      phone_number: "tronton",
      created_at: "yellow",
      status: "2002",
    };
    setData(res);
    console.log(data);
  }, [id_driver]);

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
              <Text>Driver Name</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.driver_name}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Phone Number</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.phone_number}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Created At</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.created_at}
              </Text>
            </Box>
            <Box my={"1rem"}>
              <Text>Status</Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {data.status}
              </Text>
            </Box>
          </Box>
          <Box minH={"100%"} w={["100%", "50%"]}></Box>
        </Flex>
      </PageLayout>
    </>
  );
}
