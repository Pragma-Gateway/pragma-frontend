import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/authContext';
import { useRouter} from "next/router"
import Link from "next/link"
import axios from "axios"
import {AiOutlineClose}  from "react-icons/ai"

const DatasetPage = () => {
    const [token, setToken] = useAuth()
    const [datasets, setDatasets] = useState([])
    const router = useRouter()
    const [query, setQuery] = useState("")
    const getData = async () => {
            const { data } = await axios.get("/database", {headers: {user_auth_token: token}}) 
                                .catch(err => toast.error("There was an error fetching datasets"))
            console.log(data)
            return data
    }
    useEffect(() => {
        if (token) getData().then(data => setDatasets(data)) 
        else router.push("/login")
    }, [])

    return (
        <div className = "main-wrapper-dataset">
            <Sidebar/>
            <div className='main-data-page'>
                <Databar Query={query} onQueryChange = {setQuery}/> 
                <DatasetViewer Query={query} datasets={datasets}/>
                <CreateDSpopup />
            </div>
        </div>
    )
}


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link href = "/dataset/create">Create New Dataset</Link>
        </div>
    )
}

const DatasetViewer = ({ datasets , Query }) => {
    if (datasets && Query) datasets = datasets.filter(d => {
        console.log(d.name.toLowerCase(), Query.toLowerCase())
        return d.name.toLowerCase().includes(Query.toLowerCase())
    })
    return (
        <div className='dataset-container'>
                {datasets && datasets.map(d => <DSCard key = {d} dataset={d} />)}
        </div>

    )
}

const DSCard = ({dataset}) => {
    const {name, fields} = dataset
    return (
        <div className='ds-wrapper'>
            <h3>{name}</h3>
            {fields && fields.map(f => <span>{f}</span>)}
        </div>
    )
}

const Databar = ({onQueryChange, Query, onNew}) => {
    return (
        <div className='databar'>
            <input value = { Query } type = "text" onChange={e => onQueryChange(e.target.value)} />
            <button onClick={onNew}>Create New +</button>
        </div>
    )
}


const CreateDSpopup = ({ datasets, setDatasets, closeForm}) => {
    const [token, setToken] = useAuth()
    const router = useRouter()
    const [name, setName] = useState()
    const [fields, setFields] = useState([])



    const submitForm = () => {console.log({name, fields})}
    return (
        <div className='create-form-wrapper'>
            <AiOutlineClose onClick={closeForm}>Close</AiOutlineClose>
            <div className='form-wrapper'>
                <div>
                    <label>Name of Dataset</label>
                    <input type = "text" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Fields/Datapoints (Comma-separated)</label>
                    <input type = "text" onChange={e => setFields(e.target.value.split(","))} />
                </div>
                <button className='btn-filled' onClick={submitForm}>Submit</button>
            </div>
        </div>
    )

}



const DatasetCard = () => {null}

export default DatasetPage