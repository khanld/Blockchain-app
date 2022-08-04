import React from 'react'
import classes from './service.module.css'

const Service = (props) => (
    <div className={["", classes.Service].join(' ')}>
        <div>
            <h3><i className={props.icon}></i></h3>
        </div>
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>Learn More</p>
        </div>
    </div>
)

export default Service