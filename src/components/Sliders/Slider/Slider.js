import React from 'react'
import classes from './Slider.module.css'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'

const Slider = (props) => {
    return (
        <div className={[classes.Slider, classes.clearfix].join(' ')} >
            <div className={classes.Backdrop}></div>
            <img src={props.url} alt=""/>
            <div className={classes.Content}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button><Link to={props.link}>{props.btnContent}</Link></Button>
                <Button><Link to='/signup'>Sign up</Link></Button>
            </div>
        </div>
    )
}
export default Slider