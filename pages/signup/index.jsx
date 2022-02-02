import React from "react";
import { ThirdwebWeb3Provider, useWeb3 } from "@3rdweb/hooks";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { connectWallet, address, error } = useWeb3();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [token, setToken] = useAuth();
  const router = useRouter();

  const login = async () => {
    try {
      const { data } = await axios.post("/signup", {
        username,
        password,
      });
      const { token } = data;
      setToken(token);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="login-box">
        {/* <span className="blob">Wallet Address: {address}</span> */}
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input-outlined"
          placeholder="Username"
        />


        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="input-outlined"
          placeholder="Password"
        />
        {/* <button
          className="btn-filled"
          onClick={() => connectWallet("injected")}
        >
          Connect Wallet
        </button> */}
        <button className="btn-filled" onClick={() => login()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
