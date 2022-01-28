import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';

const DatasetPage = () => {
    const router = useRouter()
    const [dataset, setDataset] = useState({})
    const [token, setToken] = useAuth()


    const getDataset = async () => {
        const { id } = router.query
        const { data } = await axios.get("/database/" + id, {headers: { user_auth_token: token}})
        console.log(data)
        return data
    }

    useEffect(() => {
        if (!token) router.push("/login")
        getDataset().then(d => setDataset(d))
    }, [])

    if (!dataset) return <div></div>
    const {name, fields, datapoints, description, organization} = dataset
    return (
        <div className='main-wrapper'>
            <div className='ds-page-wrapper'>
                <h2>{name}</h2>
                <p>{organization}</p>
                <br></br>
                <div>Tags: {fields && fields.map(f => <span className='blob'>{f}</span>)}</div>
                <br></br>
                <br></br>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default DatasetPage