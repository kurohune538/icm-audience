import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { VFXProvider } from "react-vfx";

function MyApp({ Component, pageProps }) {
  return (
    <VFXProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </VFXProvider>
  );
}

export default MyApp;
