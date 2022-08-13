import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SimpleGrid, Box, FormControl, FormLabel, RadioGroup, Radio, VStack, Center } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(undefined);

  const handleChange = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }
  console.log(user)
  return (
    <>
      <SimpleGrid columns={2} spacing={0}>
        <Box bg='white' height='400px'>
        <Center>
          <img
            style ={{margin :'auto', paddingTop:'300px'}}
            src="https://kargo.tech/wp-content/themes/kargo-landing/img/logo-dark.png"
          />
        </Center>
        </Box>
        
        <Box bg='blue' height='100vh'>
          <Center style={{marginTop:'200px'}}>
            <Box as='button' borderRadius='md' bg='lightGrey' color='white' px={200} h={400}>
              <FormControl as='fieldset' onChange={(e) => handleChange(e)}>
                <FormLabel as='legend'>Sign In</FormLabel>
                <RadioGroup>
                  <VStack spacing='24px'>
                    <Radio value='Transporter'>Transporter</Radio>
                    <Radio value='Shipper'>Shipper</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
            </Box>
          </Center>
          
        </Box>
      </SimpleGrid>
    </>
  );
}
