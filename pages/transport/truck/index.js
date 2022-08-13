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
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Spacer,
  ButtonGroup,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";

export default function Truck() {
  const router = useRouter();
  const listTruckType = ["Tronton", "Container", "CDE"];
  const [dataTruck, setDataTruck] = useState([]);
  const [contentTruck, setContentTruck] = useState([]);
  const [truckTypeInput, setTruckTypeInput] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");

  const fetchTruckData = () => {
    const data = [
      {
        id: "1",
        license: "ABC1234",
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
      {
        id: "2",
        license: "ABC1234",
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
      {
        id: "3",
        license: "ABC1234",
        type: "container",
        plate: "yellow",
        production: "2002",
      },
      {
        id: "4",
        license: "ABC1234",
        type: "CDE",
        plate: "yellow",
        production: "2002",
      },
      {
        id: "5",
        license: "ABC1234",
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
    ];

    setDataTruck(data);
    setContentTruck(data);
  };

  useEffect(() => {
    fetchTruckData();
  }, []);

  // useEffect(() => {
  //   const filteredData = dataTruck.filter(
  //     (data) => data.type === truckTypeInput
  //   );
  //   setContentTruck(filteredData);
  //   console.log(contentTruck);
  // }, [truckTypeInput]);

  const handleInput = (event) => {
    setTruckTypeInput(event.target.value);
  };

  const handleAddTruck = () => {
    console.log(licenseNumber, licenseType, truckType, productionYear);
    fetchTruckData();
  };

  return (
    <>
      <PageLayout>
        <Flex
          minWidth="max-content"
          marginBottom="20px"
          gap="2"
          flexDir={["column", "row"]}
        >
          <Spacer />
          <ButtonGroup gap="2">
            <Button
              colorScheme="teal"
              padding="0px 30px"
              onClick={() => setShowModal(true)}
            >
              Add Truck
            </Button>
          </ButtonGroup>
        </Flex>
        <TableContainer width={"100%"}>
          <Select
            placeholder="Select option"
            w={["100%", "50%"]}
            mb="1rem"
            onChange={(value) => {
              setTruckTypeInput(value);
            }}
          >
            {listTruckType.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>License Number</Th>
                <Th>Truck Type</Th>
                <Th>Plate Type</Th>
                <Th>Production Year</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contentTruck?.map((truck, index) => {
                return (
                  <Tr key={truck.id}>
                    <Td>
                      <Button
                        variant="ghost"
                        onClick={() =>
                          router.push(`/transport/truck/${truck.id}`)
                        }
                      >
                        {truck.license}
                      </Button>
                    </Td>
                    <Td>{truck.type}</Td>
                    <Td>{truck.plate}</Td>
                    <Td>{truck.production}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Truck</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>License Number</FormLabel>
                <Input onChange={(e) => setLicenseNumber(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>License Type</FormLabel>
                <Input onChange={(e) => setLicenseType(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Truck Type</FormLabel>
                <Input onChange={(e) => setTruckType(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Production Year</FormLabel>
                <Input onChange={(e) => setProductionYear(e.target.value)} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleAddTruck()}
              >
                Save
              </Button>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </PageLayout>
    </>
  );
}
