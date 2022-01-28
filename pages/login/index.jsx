import React from 'react';
import { ThirdwebWeb3Provider, useWeb3 } from "@3rdweb/hooks";

const LoginPage = () => {
    const { connectWallet, address, error } = useWeb3();

    return (
        <div className='main-wrapper'>
            <div className='login-box'>
                <span className='blob'>Wallet Address: {address}</span>
                <input type="text" className='input-outlined' placeholder='Password'/>
                <button className = "btn-filled" onClick={() => connectWallet("injected")}>Connect Wallet</button>
            </div>
        </div>
    )
}

export default LoginPage