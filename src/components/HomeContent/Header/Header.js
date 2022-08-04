import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <p>{props.subTitle}</p>
            <h2>{props.title}</h2>
            <p 
                style={{maxWidth: "550px", margin: "0 auto", color: "gray" }}>
                {props.content}
            </p>
        </div>
    )
}

export default Header