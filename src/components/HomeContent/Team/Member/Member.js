import React from 'react'
import classes from './Member.module.css'

const Member = (props) => (
    <div className={classes.Member}>
        <div className={classes.Image}>
            <img src={props.image} alt="hello" />
        </div>
        <div className={classes.Content}>
            <h4>{props.name}</h4>
            <h6>{props.role}</h6>
            <p>{props.description}</p>
        </div>
        <div className={classes.Icon}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-linkedin"></i>
        </div>
    </div>
)

export default Member