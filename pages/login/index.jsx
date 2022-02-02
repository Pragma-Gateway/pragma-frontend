import React from 'react';
import { useState } from 'react';
import { ThirdwebWeb3Provider, useWeb3 } from "@3rdweb/hooks";
import { useAuth } from '../../contexts/authContext';
import axios from "axios"
import { useRouter } from 'next/router';
import {toast}  from 'react-toastify';

const LoginPage = () => {
    const { connectWallet, address, error } = useWeb3();
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [token, setToken] = useAuth()
    const router = useRouter()
    const login = async () => {
       try {
           console.log(address, password)
            const { data } = await axios.post("/login", {
                username,
                password
            })
            const { token } = data;
            toast.info("Logged in!")
            setToken(token)
            router.back()
       }
       catch(err) {
           console.log(err.toJSON())
           toast.error("Invalid Login Credentials")
       }
    }

    return (
        <div className='main-wrapper'>
            <div className='login-box'>
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
          type="password"
          className="input-outlined"
          placeholder="Password"
        />
                {/* <span className='blob'>Wallet Address: {address}</span>
                <input 
                    type="password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                    className='input-outlined' 
                    placeholder='Password'/>
                <button className = "btn-filled" onClick={() => connectWallet("injected")}>Connect Wallet</button> */}
                <button className = "btn-filled" onClick={() => login()}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage