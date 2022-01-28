import React, {useEffect, useState} from 'react';
import { useAuth } from '../../contexts/authContext';
import Navbar from '../../components/navbar/Index';
import axios from "axios"
import { useRouter } from 'next/router';
import { getEMRData } from '../../components/helpers';
import {toast} from "react-toastify"

export const EMRpage = () => {
    const [token, setToken] = useAuth()
    const router = useRouter()

    // EMR data state 

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [notes, setNotes] = useState()
    const [dateOfPrevVisit, setDateOfPrevVisit] = useState()

    const submitEMRData = async () => {
        const body = {data: {name, age, weight, height, notes, dateOfPrevVisit}}
        const { data } = await axios.post("/emr/create", body, {headers: {user_auth_token: token}})
        toast.success("Sucessfully updated patient record")
    }
    

    useEffect(() => {
        if (token) {    
             getEMRData(token).then(data => {
                const {name: Name, age: Age, weight: Weight, height: Height, notes: Notes, dateOfPrevVisit: DateOfPrevVisit} = data
                setName(Name)
                setAge(Age)
                setWeight(Weight)
                setHeight(Height)
                setNotes(Notes)
                setDateOfPrevVisit(DateOfPrevVisit)
            } )
        } 
        else router.push("/login")
    }, [token])


    return (
        <React.Fragment>
            <Navbar />
        <div className='main-wrapper'>
            <div className='form-wrapper emr-wrapper'>
            <h3>Electronic Patient Medical Record</h3>
                <div>
                    <label>Name</label>
                    <input value = {name} className = "input-outlined" type = "text" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Age</label>
                    <input value = {age} className = "input-outlined" type = "text" onChange={e => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Weight</label>
                    <input value = {weight} className = "input-outlined" type = "text" onChange={e => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Height (cm)</label>
                    <input value = {height} className = "input-outlined" type = "text" onChange={e => setHeight(e.target.value)} />
                </div>
                <div>
                    <label>Notes</label>
                    <textarea value = {notes} className = "input-outlined" type = "text" onChange={e => setNotes(e.target.value)} />
                </div>
                <div>
                    <label>Date of Previous Visit</label>
                    <input value = {dateOfPrevVisit} className = "input-outlined" type = "date" onChange={e => setDateOfPrevVisit(e.target.value)} />
                </div>
                <button className = "btn-filled" onClick={submitEMRData}>Submit</button>
            </div>

        </div>
        </React.Fragment>
    )
}


export default EMRpage