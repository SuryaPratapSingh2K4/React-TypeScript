import React, { createContext, useState } from 'react'

interface CounterProviderProps {
    children: React.ReactNode
}

interface CounterContextProps {
    value: number,
    
}

const CounterContext = createContext<number | null>(null);

export const CounterProvider:React.FC<CounterProviderProps> = (props) => {
    const []
    return (
        <CounterContext.Provider value={1}>
            {props.children}
        </CounterContext.Provider>
    )
}
