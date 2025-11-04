import React, { useState } from 'react'

interface Iprops {
    name: string,
    age: number
}

interface Istate {
    name: string,
    title: string
}

const Funcomp:React.FC<Iprops> = (props) => {
    const [state,setState] = useState<Istate>({name: "Surya Pratap Singh", title: "MERN Stack Developer"})
    return (
        <div>
            <h1>Funtional Components</h1>
            <div>
                <h3>
                    name: <b>{props.name}</b>
                    <br />
                    age: <b>{props.age}</b>
                </h3>
            </div>
            <div>
                <h1>Values from State</h1>
                <h4>Name: {state.name}</h4>
                <h4>Title: {state.title}</h4>
            </div>
        </div>
    )
}

export default Funcomp
