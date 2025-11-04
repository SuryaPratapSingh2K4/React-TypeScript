import React, { useState } from 'react'

interface iState {
    count: number
}

const Counter:React.FC = () => {
    const [num,setNum] = useState<iState>({count: 0});
    const handleAdd = () => {
        setNum({count : num.count + 1})
    }
    const handleSub = () => {
        setNum({count: num.count - 1})
    }
    return (
        <div>
            <h1>Event Handling</h1>
            <h2>{num.count}</h2>
            <button  onClick={handleAdd} className='ms-3'>INC</button>
            <button onClick={handleSub} className='ml-3'>DSC</button>
        </div>
    )
}

export default Counter
