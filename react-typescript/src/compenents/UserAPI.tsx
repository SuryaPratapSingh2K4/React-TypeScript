import React, { useEffect, useState } from 'react';
import type { IUsers } from '../modals/IUser';
import { Link } from 'react-router-dom';

interface Iuser{
    loading: boolean,
    errormsg: string,
    users: IUsers[]
}

const UserAPI:React.FC = () => {
    const [state,setState] = useState<Iuser>({
        users: [],
        loading: false,
        errormsg: ''
    })

    useEffect(()=>{
        const fetchdata = async () => {
            try {
                setState((prev) => ({...prev,loading:true}));
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json();
                setState({loading: false,
                    errormsg: "",
                    users: data
                })
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error';
                    setState({
                    loading: false,
                    errormsg: message,
                    users: [],
                    });
            }
        }
        fetchdata();
    },[])
    
    return (
        <div>
            <h1>Data from API's</h1>
            {state.users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.users.map((u) => (
                            <Link to={`user/${u.id}`}>
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>{u.address.city}</td>
                                <td>{u.phone}</td>
                            </tr>
                            </Link>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users found.</p>
            )}
            
        </div>
    )
}

export default UserAPI;
