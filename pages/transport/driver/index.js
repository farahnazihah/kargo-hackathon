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

export default function Driver() {
  const router = useRouter();
  const listDriverType = ["Tronton", "Container", "CDE"];
  const [dataDriver, setDataDriver] = useState([]);
  const [contentDriver, setContentDriver] = useState([]);
  const [driverTypeInput, setDriverTypeInput] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [driverType, setDriverType] = useState("");
  const [productionYear, setProductionYear] = useState("");

  const fetchDriverData = () => {
    const data = [
      {
        id: "1",
        driver_name: "ABC1234",
        phone_number: "tronton",
        created_at: "yellow",
        status: "2002",
      },
    ];

    setDataDriver(data);
    setContentDriver(data);
  };

  useEffect(() => {
    fetchDriverData();
  }, []);

  // useEffect(() => {
  //   const filteredData = dataDriver.filter(
  //     (data) => data.type === driverTypeInput
  //   );
  //   setContentDriver(filteredData);
  //   console.log(contentDriver);
  // }, [driverTypeInput]);

  const handleInput = (event) => {
    setDriverTypeInput(event.target.value);
  };

  const handleAddDriver = () => {
    console.log(licenseNumber, licenseType, driverType, productionYear);
    fetchDriverData();
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
              Add Driver
            </Button>
          </ButtonGroup>
        </Flex>
        <TableContainer width={"100%"}>
          <Select
            placeholder="Select option"
            w={["100%", "50%"]}
            mb="1rem"
            onChange={(value) => {
              setDriverTypeInput(value);
            }}
          >
            {listDriverType.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>Driver Name</Th>
                <Th>Phone Number</Th>
                <Th>Created At</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contentDriver?.map((driver, index) => {
                return (
                  <Tr key={driver.id}>
                    <Td>
                      <Button
                        variant="ghost"
                        onClick={() =>
                          router.push(`/transport/driver/${driver.id}`)
                        }
                      >
                        {driver.driver_name}
                      </Button>
                    </Td>
                    <Td>{driver.phone_number}</Td>
                    <Td>{driver.created_at}</Td>
                    <Td>{driver.status}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Driver</ModalHeader>
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
                <FormLabel>Driver Type</FormLabel>
                <Input onChange={(e) => setDriverType(e.target.value)} />
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
                onClick={() => handleAddDriver()}
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
