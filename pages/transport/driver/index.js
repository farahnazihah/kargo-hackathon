import PageLayout from "@components/PageLayout";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

    axios.get("http://localhost:8080/api/drivers").then(function (response) {
      // handle success
      console.log(response.data)
      // setDataTruck(response.data.payload);
      setDataDriver(response.data);
      setContentDriver(response.data);


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    // setDataDriver(data);
    // setContentDriver(data);
  };
console.log(contentDriver)
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
    
    // const item = {
    //   driverName: null,
    //   phoneNumber: null
    // }
    // axios.post('http://localhost:8080/api/drivers',payload)
    // .then(response => {        
    //   console.log(response.data)
    //   window.location.reload();
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
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
              {contentDriver?.map((driver) => {
                return (
                  <Tr key={driver.id}>
                    <Td>
                      <Button
                        variant="ghost"
                        onClick={() =>
                          router.push(`/transport/driver/${driver.id}`)
                        }
                      >
                        {driver.driverName}
                      </Button>
                    </Td>
                    <Td>{driver.phoneNumber}</Td>
                    <Td>{driver.createdAt}</Td>
                    <Td>{driver.status ? 'Active' : 'Nonactive'}</Td>
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
                <FormLabel>Driver Name</FormLabel>
                <Input onChange={(e) => setDriverName(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Phne Number</FormLabel>
                <Input onChange={(e) => setPhoneNumber(e.target.value)} />
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
