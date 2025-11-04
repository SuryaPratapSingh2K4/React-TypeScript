import React,{useState} from 'react'

interface IState {
    message:  string
}

const EventHandling:React.FC = () => {
    const [state,setState] = useState<IState>({message: "Welcome"})
    const handleChange = (greet: string) => {
        setState({message: greet})
    }
    return (
        <div>
            <h1>{state.message}</h1>
            <button onClick={()=>handleChange("LIKE")}>Like</button>
            <button onClick={()=>handleChange("COMMENT")}>Comment</button>
            <button onClick={()=>handleChange("SHARE")}>Share</button>
        </div>
    )
}

export default EventHandling
