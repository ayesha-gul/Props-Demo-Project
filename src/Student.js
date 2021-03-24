import React from 'react'
import { Friends } from './Friends'

export const Student = (props) => {
    return (
        <div>
            <h1> I'm Student Of 7th CLass</h1>
            <p>My name is {props.s} </p>
            <Friends Q={props.r} />
        </div>
    )
}
