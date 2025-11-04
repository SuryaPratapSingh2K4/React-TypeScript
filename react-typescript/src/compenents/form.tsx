import React, { useState } from 'react'

interface IState {
    user: {
        mail: string | number,
        password: string | number
    }
}

const Form:React.FC = () => {
    const [state,setState] = useState<IState>({
        user: {
            mail: "",
            password: ""
        }
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) : void => {
    e.preventDefault();
    setState({
        user: {
            ...state.user,
            [e.target.name] : e.target.value
        }
    })
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.user);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <input type="text" name='mail' value={state.user.mail}
                onChange={handleChange}
                placeholder='enter your email' />
                <br />
                <br />
                <input type="text" name='password' value={state.user.password}
                onChange={handleChange}
                placeholder='enter your password'/>
                <br />
                <br />
                <button>Submit</button>
            </form>
            <div>
                <p>{JSON.stringify(state.user)}</p>
            </div>
        </div>
    )
}

export default Form
