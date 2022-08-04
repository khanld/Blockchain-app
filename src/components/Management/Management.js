import React from 'react'
import Card from '../UI/Card/Card'
import classes from './Management.module.css'
import Wrapper from '../../hoc/Wrapper/Wrapper'

const Management = (props) => (
    <Wrapper>
        <div className={["container", classes.Management].join(" ")}>
            <h2>{props.title}</h2>
            {props.companies.map((company, index) => (
                <Card
                    key={company.src + index}
                    {...company}
                    onViewDetailsHandler={() => props.onViewDetailsHandler(index)}
                    onAcceptHandler={props.onAcceptHandler}
                    onDeclineHandler={props.onDeclineHandler}
                    candidates={props.candidates} />
            ))}
        </div>
    </Wrapper>
)

export default Management;
