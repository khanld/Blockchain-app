import React from 'react'
import classes from './Spinner.module.css'
import Backdrop from '../BackDrop/BackDrop'

const Spinner = (props) => {
    return (
        <React.Fragment>
            <div className={classes.loader}></div>
            <Backdrop/>
        </React.Fragment>

    )
}

export default Spinner