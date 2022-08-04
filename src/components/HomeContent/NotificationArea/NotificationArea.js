import React from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './NotificationArea.module.css'

const NotificationArea = (props) => {
    return (
        <div className={classes.NotificationArea}>
            <h4>Get notified on each updates</h4>
            <div>
                <Input />
                <Button>SUBSCRIBE</Button>
                <p style={{maxWidth: "500px", margin: "30px auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
            </div>
        </div>
    )
}

export default NotificationArea