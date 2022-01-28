import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
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
    return <div></div>
}

export default ContributionsPage