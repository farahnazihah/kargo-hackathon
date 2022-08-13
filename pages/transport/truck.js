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
} from "@chakra-ui/react";

export default function Truck() {
  const [dataTruck, setDataTruck] = useState(undefined);
  const router = useRouter();

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
        type: "tronton",
        plate: "yellow",
        production: "2002",
      },
      {
        id: "4",
        license: "ABC1234",
        type: "tronton",
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
    console.log(dataTruck);
    router.push("/");
  }, []);

  return (
    <>
      <PageLayout>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>License Number</Th>
                <Th>Truck Type</Th>
                <Th>Plate Type</Th>
                <Th>Production Year</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataTruck?.map((truck, idx) => {
                <Tr>
                  <Td key={truck.id}>{truck.license}</Td>
                  <Td>{truck.type}</Td>
                  <Td>{truck.plate}</Td>
                  <Td>{truck.production}</Td>
                </Tr>;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </PageLayout>
    </>
  );
}
