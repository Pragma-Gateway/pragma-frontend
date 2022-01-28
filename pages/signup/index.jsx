import React from 'react';
import { ThirdwebWeb3Provider, useWeb3 } from "@3rdweb/hooks";
import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import axios from "axios"

const LoginPage = () => {
    const { connectWallet, address, error } = useWeb3();
    const [password, setPassword] = useState("")
    const [token, setToken] = useAuth()

    const login = async () => {
        console.log({
            username: address,
            password
        })

        // const { data } = await axios.post("/signup", {
        //     username: address,
        //     password
        // })
        // const { token } = data;
    }

    return (
        <div className='main-wrapper'>
            <div className='login-box'>
                <span className='blob'>Wallet Address: {address}</span>
                <input 
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="text" 
                    className='input-outlined' 
                    placeholder='Password'/>
                <button className = "btn-filled" onClick={() => connectWallet("injected")}>Connect Wallet</button>
                <button className = "btn-filled" onClick={() => login()}>Login</button>
            </div>
        </div>
    )

  
}

export default LoginPage