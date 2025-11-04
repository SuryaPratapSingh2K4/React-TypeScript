// import React from 'react'

// function Button() {
//   return <button>Click Me</button>
// }

// export default Button

import React,{useState} from 'react'

interface ButtonProps {
    text: string | number | boolean,
    name: string,
    onclick?: () => void
}

interface Book {
    name: string,
    price: number
}

const MyButton:React.FC<ButtonProps> = (props) => {
    const {text,name} = props;
    // const [value,setValue] = useState<Book>({
    //     name: "One",
    //     price: 10
    // });
    const [value,setValue] = useState<string | undefined>("");
    // return <button onClick={props.onclick}>{props.text} {props.name}</button>
    // return <button onClick={onclick}>{text} {name}</button>
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        
    }
    return (
        <div>
            {/* <h3>{value}</h3>
            <button onClick={()=>setValue(value+1)}>{text} {name}</button> */}
            {/* <h3>Name: {value.name} priced {value.price}</h3>
            <button onClick={() => setValue({name: 'second', price: 20})}>{text} {name}</button> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name' onChange={handleNameChange} />
                <button type='submit'>Submit</button>
            </form>
            <h1>{value}</h1>
        </div>
    )
}

export default MyButton;

