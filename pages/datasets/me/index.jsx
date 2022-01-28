import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/authContext';
import { getContributions } from '../../../components/helpers';
import Link from "next/link"
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
        {contributions.map(d => <Link href = {"/datasets/" + d._id}><span>{d.name} - {d.organization}<br></br></span></Link>)}

    </div>
    </div>
    )
}

export default ContributionsPage