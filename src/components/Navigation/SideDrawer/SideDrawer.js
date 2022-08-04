import React from 'react'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const SideDrawer = (props) => {
    let styles = [classes.SideDrawer]
    let backDrop = null
    if (props.showSideDrawer) {
        styles.push(classes.showSideDrawer)
        backDrop = <BackDrop toggle={props.toggleSideDrawerHandler}/>
    }
    return (
        <React.Fragment>
            <div className={styles.join(' ')}>
                <div className={classes.close} onClick={props.toggleSideDrawerHandler}></div>
                <NavigationItems />
            </div>
            {backDrop}
        </React.Fragment>
    )
}

export default SideDrawer