import React from 'react'
import classes from './Button.module.css'


const Button = (props) => {
    let styles = classes.Button
    if (props.btnType === 'posterBtn')
        styles = classes.PosterButton
    return (
        <button 
            className={styles} 
            style={{width: props.btnWidth, height:props.btnHeight}}
            onClick={props.onSubmitHandler} 
            disabled={props.disabled}>{props.children}</button>
    )
}

export default Button