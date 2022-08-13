import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SimpleGrid, Box, FormControl, FormLabel, RadioGroup, Radio, VStack, Center } from '@chakra-ui/react'
import Cookies from "universal-cookie";

export default function Home() {
  const cookies = new Cookies();
  const router = useRouter();
  const [user, setUser] = useState(undefined);

  const handleChange = (e) => {
    console.log(e.target.value)
    cookies.set("user", e.target.value, { path: "/" });
    setUser(e.target.value)
  }

  const handleSignIn = (e) => {
    if(user == 'Transporter'){
      router.push("/transport/truck");
    } else if(user = 'Shipper'){
      // router.push("/shipment");
    }
  }

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
                <RadioGroup>
                  <VStack spacing='24px' color='black'>
                    <Radio value='Transporter'>Transporter</Radio>
                    <Radio value='Shipper'>Shipper</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
              <Box as='button' borderRadius='md' bg='tomato' color='white' marginTop='20px' px={10} h={12} onClick={(e) => handleSignIn(e)}>
                Sign In
              </Box>
            </Box>
          </Center>
          
        </Box>
      </SimpleGrid>
    </>
  );
}
