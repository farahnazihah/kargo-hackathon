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
  Select, Flex, Box, Heading, Spacer, ButtonGroup, Button, InputGroup, Input, InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl, FormLabel,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";

// import AllocateShipment from './allocateShipment'

export default function Truck() {
  const router = useRouter();
  const [dataShipment, setDataShipment] = useState(undefined);
  const [dataTruck, setDataTruck] = useState(undefined);
  const [dataDriver, setDataDriver] = useState(undefined);
  
  const [openModalAddShipment, setOpenModalAddShipment] = useState(false);
  const [openModalAllocateShipment, setOpenModalAllocateShipment] = useState(false);
  const [openModalUpdateStatus, setOpenModalUpdateStatus] = useState(false);
  const [shipmentChoosed, setShipmentChoosed] = useState({})
  const [truckIDChoosed, setTruckIDChoosed] = useState({})
  const [driverIDChoosed, setDriverIDChoosed] = useState({})
  const [statusShipmentChoosed, setStatusShipmentChoosed] = useState({})
  
  const [loadingDate, setLoadingDate] = useState(new Date());
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();

  const [listStatus, setListStatus] = useState([
    "Ongoing to Origin",
    "At Origin",
    "Ongoing to Destination",
    "At Destination",
    "Completed"
  ]);
  
  useEffect(() => {
    const data = [
      {
        id: 1,
        license: "ABC1234",
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
      {
        id: 2,
        license: "ABC1235",
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
      {
        id: 3,
        license: "ABC1236",
        type: "container",
        plate: "yellow",
        production: "2002",
      },
    ]

    setDataTruck(data);
  }, []);

  useEffect(() => {
    const data = [
      {
        id: 1,
        driver_name : "Driver 1",
        phone_number : "081234567890",
        created_at : "2022-08-12",
        status : true,
      },
      {
        id: 2,
        driver_name : "Driver 2",
        phone_number : "081234567890",
        created_at : "2022-08-12",
        status : true,
      },
      {
        id: 3,
        driver_name : "Driver 3",
        phone_number : "081234567890",
        created_at : "2022-08-12",
        status : true,
      },
    ]

    setDataDriver(data);
  }, []);

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
  }, []);

  const handleAddShipment = () => {
    if(!destination || destination == "" || !origin || origin == ""){
      alert("Silahkan lengkapi form data terlebih dahulu")
    } else {
      const item = {
        origin : origin,
        destination : destination,
        loading_date : dateFormat(loadingDate, "yyyy-mm-dd"),
        status : 'Created',
      }
      console.log(item)
      
      // axios.post('url',item)
      // .then(response => {        
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  }

  const handleAllocateShipment = () => {
    if(!driverIDChoosed || driverIDChoosed == "" || !truckIDChoosed || truckIDChoosed == ""){
      alert("Silahkan lengkapi form data terlebih dahulu")
    } else {
      const item = {
        id : shipmentChoosed?.id,
        id_truck : truckIDChoosed,
        id_driver : driverIDChoosed,
        status : 'Allocated',
      }
      console.log(item)
      
      // axios.put('url',item)
      // .then(response => {        
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  }

  const handleUpdateStatus = () => {
    if(!statusShipmentChoosed || statusShipmentChoosed == ""){
      alert("Silahkan lengkapi form data terlebih dahulu")
    } else {
      const item = {
        id : shipmentChoosed?.id,
        status : statusShipmentChoosed,
      }
      
      // axios.put('url',item)
      // .then(response => {        
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  }

  const handleSelecOption = (e, s) => {
    setShipmentChoosed(s)
    if(e.target.value == 'allocateShipment'){
      setOpenModalAllocateShipment(true)
    } else if(e.target.value == 'updateStatus'){
      setOpenModalUpdateStatus(true)
    }
  }

  return (
    <>
      <PageLayout>
        <Flex minWidth='max-content' alignItems='center' marginBottom='20px' gap='2'>
          <Box p='2'>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button colorScheme='teal' padding="0px 30px" onClick={() => setOpenModalAddShipment(true)}> Add Shipment</Button>
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
                <Th>Action</Th>
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
                    <Td>
                      <Select
                        placeholder="Select action"
                        mb="1rem"
                        onChange={(e) => handleSelecOption(e, s)}
                      >
                          <option value="allocateShipment">
                            Allocate Shipment
                          </option>
                          <option value="updateStatus">
                            Update Status
                          </option>
                      </Select>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </PageLayout>

      <Modal
        isOpen={openModalAddShipment}
        onClose={() => setOpenModalAddShipment(false)}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Shipment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Origin</FormLabel>
              <Input placeholder='Type Origin' onChange={(e) => setOrigin(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Destination</FormLabel>
              <Input placeholder='Type Destination' onChange={(e) => setDestination(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <DatePicker selected={loadingDate} onChange={(date) => setLoadingDate(date)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleAddShipment()}>
              Save
            </Button>
            <Button onClick={() => setOpenModalAddShipment(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={openModalAllocateShipment}
        onClose={() => setOpenModalAllocateShipment(false)}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Allocate Shipment {shipmentChoosed?.shipment_number}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Truck</FormLabel>
              <Select
                placeholder="Select truck"
                mb="1rem"
                onChange={(e) => setTruckIDChoosed(e.target.value)}
              >
                {dataTruck?.map((item) => (
                  <option value={item.id}>
                    {item.license} - {item.type}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Driver</FormLabel>
              <Select
                placeholder="Select driver"
                mb="1rem"
                onChange={(e) => setDriverIDChoosed(e.target.value)}
              >
                {dataDriver?.map((item) => (
                  <option value={item.id}>
                    {item.driver_name} - {item.phone_number}
                  </option>
                ))}
              </Select>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button onClick={() => setOpenModalAllocateShipment(false)}>Cancel</Button>
            <Button colorScheme='blue' mr={3} onClick={() => handleAllocateShipment()}>
              Allocate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Modal
        isOpen={openModalUpdateStatus}
        onClose={() => setOpenModalUpdateStatus(false)}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Status {shipmentChoosed?.shipment_number}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select
                placeholder="Select status"
                mb="1rem"
                onChange={(e) => setStatusShipmentChoosed(e.target.value)}
              >
                {listStatus?.map((item) => (
                  <option value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => setOpenModalUpdateStatus(false)}>Cancel</Button>
            <Button colorScheme='blue' mr={3} onClick={() => handleUpdateStatus()}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}