import React, { useState } from 'react'
import type { IUser } from '../modals/IUser'

interface IState {
    users:IUser[]
}

const Looping:React.FC = () => {
    const [state,setState] = useState<IState>({
        users: [
            {sno: 1, name: "meow", age:21},
            {sno: 2, name: "bark", age: 27},
            {sno: 3,name:"meow bark mwoe",age:69}
        ]
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.length > 0 && state.users.map((user) => (
                        <tr key={user.sno}>
                            <td>{user.sno}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Looping
