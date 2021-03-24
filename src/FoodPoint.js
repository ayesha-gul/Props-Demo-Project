import React,{useContext} from 'react'
import Value from './Context'

export const FoodPoint = () => {
    const UsngContext = useContext(Value)
    return (
        
        <div>
        <h1>FOodPoint</h1>
        <h5>{UsngContext[0]}
        </h5>
        </div>
       
    )
}
