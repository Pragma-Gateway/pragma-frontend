import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/authContext';
import { getContributions } from '../../../components/helpers';
const ContributionsPage = () => {
    const [token, setToken] = useAuth()
    const [contributions, setContributions] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (token) {
            getContributions(token).then(data => setContributions(data))
        }
        else router.push("/login")
    }) 
    return (
    <div className='main-wrapper'> 
        {contributions.map(d => <span>{d.name}</span>)}
    </div>
    )
}

export default ContributionsPage