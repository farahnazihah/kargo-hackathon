import PageLayout from "@components/PageLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
  Flex, Box, Heading, Spacer, ButtonGroup, Button, InputGroup, Input, InputRightElement,
} from "@chakra-ui/react";

export default function Truck() {
  const router = useRouter();
  const [dataShipment, setDataShipment] = useState(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  useEffect(() => {
    const data = [
      {
        id: 1,
        shipment_number: "ABC1234",
        truck: {
          id: 2,
          license: "ABC1234",
          type: "tronton",
          plate: "yellow",
          production: "2002",
        },
        driver : {
          id: 1,
          driver_name : "Driver 1",
          phone_number : "081234567890",
          created_at : "2022-08-12",
          status : true,
        },
        origin : "Jakarta",
        destination : "Bandung",
        loading_date : "2022-08-13",
        status : "Ongoing to Origin",
      },
      {
        id: 1,
        shipment_number: "ABC1234",
        truck: {
          id: 2,
          license: "ABC1234",
          type: "tronton",
          plate: "yellow",
          production: "2002",
        },
        driver : {
          id: 1,
          driver_name : "Driver 2",
          phone_number : "081234567890",
          created_at : "2022-08-12",
          status : true,
        },
        origin : "Jakarta",
        destination : "Bandung",
        loading_date : "2022-08-13",
        status : "Ongoing to Origin",
      },
      {
        id: 1,
        shipment_number: "ABC1234",
        truck: {
          id: 2,
          license: "ABC1234",
          type: "tronton",
          plate: "yellow",
          production: "2002",
        },
        driver : {
          id: 1,
          driver_name : "Driver 3",
          phone_number : "081234567890",
          created_at : "2022-08-12",
          status : true,
        },
        origin : "Jakarta",
        destination : "Bandung",
        loading_date : "2022-08-13",
        status : "Ongoing to Origin",
      },
    ];

    setDataShipment(data);
    console.log(dataShipment);
  }, []);

  return (
    <>
      <PageLayout>
        <Flex minWidth='max-content' alignItems='center' marginBottom='20px' gap='2'>
          <Box p='2'>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button colorScheme='teal' padding="0px 30px" onClick={onOpen}> Add Shipment</Button>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='type here'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm'>
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </ButtonGroup>
        </Flex>
        <TableContainer width={"100%"}>
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>Shipment</Th>
                <Th>License</Th>
                <Th>Driver's Name</Th>
                <Th>Origin</Th>
                <Th>Destination</Th>
                <Th>Loading Date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataShipment?.map((s, index) => {
                return (
                  <Tr key={s.id}>
                    <Td>{s.shipment_number}</Td>
                    <Td>{s.truck.license}</Td>
                    <Td>{s.driver.driver_name}</Td>
                    <Td>{s.origin}</Td>
                    <Td>{s.destination}</Td>
                    <Td>{s.loading_date}</Td>
                    <Td>{s.status}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </PageLayout>

      
    </>
  );
}
