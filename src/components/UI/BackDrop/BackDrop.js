import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (props) => {
    return (
        <div
            className={classes.BackDrop}
            onClick={props.toggle}>
        </div>
    )
}

export default BackDrop