import React, { useState } from 'react'

interface Istate{
    Auth: boolean
}

const ConditionalRender:React.FC = () => {
    const [state,setState] = useState<Istate>({Auth: false})

    const handleLogIn = () => {
        setState({Auth:true})
    }

    const handleLogOut = () => {
        setState({Auth:false})
    }
    
    return (
        <div>
            {state.Auth && state.Auth ? <h1>Please Login to dashboard</h1> : <h1>Welcome User</h1>}
            <br />
            {
                state.Auth && state.Auth ? (
                <button onClick={handleLogOut}>Logout</button>
                ) : (
                <button onClick={handleLogIn}>Login</button>
            )
            }

            <br />
            <br />

        </div>
    )
}

export default ConditionalRender
