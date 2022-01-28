import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/authContext';
import { getContributions } from '../../../components/helpers';

const ContributionsPage = () => {
    const [token, setToken] = useAuth()
    const [contributions, setContributions] = useState([])
    const router = useRouter()
    console.log(contributions)

    useEffect(() => {
        if (token) {
            getContributions(token).then(data => setContributions(data))
        }
        else router.push("/login")
    },[]) 
    return (
    <div className='main-wrapper'> 
    <div className='contribution-wrapper'>

    <h3>Your Contributions</h3>
        {contributions.map(d => <span>{d.name}<br></br></span>)}

    </div>
    </div>
    )
}

export default ContributionsPage