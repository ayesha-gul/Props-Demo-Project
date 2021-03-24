import React from 'react'
import { Student } from './Student'

export const Teacher = (props) => {
    console.log(props)
    return (
        <div>
             <h1>I'm the Teacher of YOur CLass</h1>
             <p>My name is {props.name}</p>
              {/* <p> {props.kill[1]}</p> */}
             <Student  s={props.nick} r={props.kick} />
        </div>
    )
}
