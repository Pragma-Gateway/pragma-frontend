import Head from "next/head";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Navbar from "../components/navbar/Index";
import "../styles/globals.css";
import axios from "axios"
import { AuthContext } from "../contexts/authContext"
import { useState } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
toast.configure()


axios.defaults.baseURL = (process.env.NODE_ENV == "production") 
                        ? process.env.REACT_APP_API_URL
                        : "http://localhost:3001"


function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001, 4];
  const connectors = {injected: {}};
  const [token, setToken] = useState("")


  return (
   <AuthContext.Provider value={[token, setToken]}>
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
   </AuthContext.Provider>
  );
}

export default MyApp;
