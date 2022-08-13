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
  const [editTruck, setEditTruck] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [stnk, setStnk] = useState(undefined);
  const [kir, setKir] = useState(undefined);

  // fetch data truck
  const fetchTruckData = async () => {
    let res = [];
    try {
      res = await fetch("localhost:8080/api/trucks");
      res = res.json();
    } catch (error) {
      console.log(error);
    }
    console.log(res);

    setDataTruck(res);
    setContentTruck(res);
  };

  const handleDeactivate = async (id) => {
    // fetch data togle truck
    const payload = { id: id, status: false };
    let res = await fetch("localhost:8080/api/trucks", {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    fetchTruckData();
  };

  const handleShowUpdate = async (id) => {
    setEditTruck(contentTruck.map((truck) => truck.id == id));
    setShowModal(true);
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

  const handleAddTruck = async () => {
    // fetch data add truck
    console.log({ licenseNumber, licenseType, truckType, productionYear });
    const payload = {
      truckLicenseNumber: licenseNumber,
      truckType: truckType,
      truckProductionYear: productionYear,
      attachmentIdSTNK: stnk,
      attachmentIdKIR: kir,
    };

    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

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
          {/* <Select
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
          </Select> */}
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>License Number</Th>
                <Th>Truck Type</Th>
                <Th>Plate Type</Th>
                <Th>Production Year</Th>
                <Th>Action</Th>
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
                    <Td>
                      <Button onClick={() => handleUpdateTruck(truck.id)}>
                        Update
                      </Button>
                      <Button onClick={() => handleDeactivate(truck.id)}>
                        Deactivate Unit
                      </Button>
                    </Td>
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
                <Input onChange={(e) => setLicenseNumber(e.target.value)}>
                  {editTruck.license}
                </Input>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>License Type</FormLabel>
                <Input onChange={(e) => setLicenseType(e.target.value)}>
                  {editTruck.license_type}
                </Input>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Truck Type</FormLabel>
                <Input onChange={(e) => setTruckType(e.target.value)}>
                  {editTruck.type}
                </Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Production Year</FormLabel>
                <Input onChange={(e) => setProductionYear(e.target.value)}>
                  {editTruck.production}
                </Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>STNK</FormLabel>
                <Input
                  type={"file"}
                  onChange={(e) => setStnk(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>KIR</FormLabel>
                <Input type={"file"} onChange={(e) => setKir(e.target.value)} />
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
