import Head from "next/head";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Navbar from "../components/navbar/Index";
import "../styles/globals.css";
import axios from "axios"

axios.defaults.baseURL = (process.env.NODE_ENV == "production") ? "" : "http://localhost:3001"

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001, 4];
  const connectors = {injected: {}};


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
        > 
          <Component {...pageProps} />
        </ThirdwebWeb3Provider>
    </>
  );
}

export default MyApp;
