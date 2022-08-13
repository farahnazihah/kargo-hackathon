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
} from "@chakra-ui/react";

export default function Truck() {
  const router = useRouter();
  const truckType = ["Tronton", "Container", "CDE"];
  const [dataTruck, setDataTruck] = useState([]);
  const [contentTruck, setContentTruck] = useState([]);
  const [truckTypeInput, setTruckTypeInput] = useState("");

  useEffect(() => {
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
  }, []);

  //   useEffect(() => {
  //     const filteredData = dataTruck.filter(({ type }) => {
  //       type === truckTypeInput;
  //     });
  //     setContentTruck(filteredData);
  //     console.log(contentTruck);
  //   }, [truckTypeInput]);

  const handleInput = (event) => {
    setTruckTypeInput(event.target.value);
  };

  return (
    <>
      <PageLayout>
        <TableContainer width={"100%"}>
          <Select
            placeholder="Select option"
            w={["100%", "50%"]}
            mb="1rem"
            onChange={(value) => {
              setTruckTypeInput(value);
            }}
          >
            {truckType.map((type, idx) => (
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
                    <Td>{truck.license}</Td>
                    <Td>{truck.type}</Td>
                    <Td>{truck.plate}</Td>
                    <Td>{truck.production}</Td>
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
