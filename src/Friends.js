
import React from 'react'
import { FoodPoint } from './FoodPoint'

export const Friends = (props) => {
    return (
        <div>
             <h1>I'm her Friend {props.Q}</h1>
             <p>Our gang Of <strong>merab</strong> and <strong> {props.Q}</strong> is VEry popluar in our class</p>
             <FoodPoint />
        </div>
    )
}
