import React from 'react'
import classes from './Card.module.css'
import Button from '../../UI/Button/Button'

const Card = (props) => (
    <React.Fragment>
        <div className={[classes.Card, "row"].join(" ")}>
            <div className={[classes.Logo, "col-3"].join(" ")}>
                <img src={props.src} alt="" />
            </div>
            <div className={[classes.Content, "col-9"].join(" ")}>
                <h3>{props.name}</h3>
                <p><strong>Public key: </strong>{props.address}</p>
                {props.school ? <p><strong>School: </strong>{props.school}</p> : null}
                {props.school ? <p><strong>Experience: </strong>{props.experience}</p> : null}
                <p>{props.content}</p>
                <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={props.onViewDetailsHandler}>VIEW DETAIL</Button>
            </div>
            {props.candidates ? <div className={classes.JobStatus}>
                <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={props.onAcceptHandler} disabled={props.workingStatus === "1" ? true : false} >{props.workingStatus === "1" ? <strong><i className="far fa-check-circle" style={{ color: "white", fontSize: "initial" }}></i></strong> : "ACCEPT"}</Button>
                <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={props.onDeclineHandler}>DECLINE</Button>
            </div> : null}
        </div>
        {/* <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px"></Button> */}
    </React.Fragment>

)

export default Card