import React from 'react'
import classes from './PosterInteraction.module.css'

const PosterInteraction = (props) => (
    <div className={props.title ? classes.MovieContent : classes.PosterInteraction}>
        {props.title ? <h3>{props.title}</h3> : <h5>{props.name}</h5>}
        <div className={classes.Icon}>
            <span>
                <i className={["fa", "fa-heart"].join(' ')} ></i>
                <span>{props.loved}</span>
            </span>
            <span>
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>{props.watched}</span>
            </span>
            <span>
                <i className={["fa", "fa-bell-o"].join(' ')} style={{ color: "rgb(165, 108, 3)" }}></i>
            </span>
        </div>
        <p>{props.content}</p>
        {props.title && !props.service ? <div>
            <p><strong>Premiere date:</strong></p>
            <p>{props.date}</p>
            <p><strong>Issuer:</strong></p>
            <p>{props.issuer}</p>
            <p><strong>Factory Address:</strong></p>
            <p>{props.factory}</p>
            <p><strong>Certificate Address:</strong></p>
            <p>{props.certAddress}</p>
        </div> : null}
        {props.service ? <div>
            <p><strong>Expired date:</strong></p>
            <p>{props.expiredDate}</p>
            <p><strong>Access time:</strong></p>
            <p>{props.accessTime}</p>
            <p><strong>Price:</strong></p>
            <p><strong>{props.price}</strong></p>
        </div> : null}
    </div>
)

export default PosterInteraction