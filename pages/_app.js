import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const colors = { primary: "#1691D6" };
  const customTheme = extendTheme({
    colors,
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
