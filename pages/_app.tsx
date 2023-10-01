import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  zerionWallet,
  rainbowWallet,
  phantomWallet,
} from "@thirdweb-dev/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import theme from "./theme"
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="1e83bfebeb5ca87de89692857d336e9a"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        embeddedWallet({ recommended: true }),
        trustWallet(),
        zerionWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  </ThirdwebProvider>
  );
}

export default MyApp;
