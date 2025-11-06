import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import type { IUsers } from '../modals/IUser';

interface Istate {
    user: IUsers
}

const EachUser:React.FC = () => {
    const { id } = useParams<{id: string }>();
    const [state,setState] = useState<Istate>({user: {} as IUsers});
    useEffect(()=>{
        const fetchdata = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json();
            console.log(data);
            setState({user: data})
            
        }
        fetchdata();
    },[id,setState])


    return (
        <div>
            <h1>Personal User Details: </h1>
            <h2> URL Params : {id}</h2>
            <Link to='/'>
                Go Back
            </Link>
            <h4>{state.user?.name}</h4>
            <h4>{state.user?.address?.city}</h4>
            <h4>{state.user?.company?.name}</h4>
            <h4>{state.user?.address?.street}</h4>
            <h4>{state.user?.address?.geo?.lat}</h4>
        </div>
    )
}

export default EachUser
