import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <input
            className={classes.Input}
            type="text" 
            placeholder={props.placeholder}
            onChange={props.onchangedHandler}
            defaultValue={props.value} />
    )
}

export default Input