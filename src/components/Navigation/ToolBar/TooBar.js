import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../UI/Logo/Logo'
import classes from './ToolBar.module.css'
import DrawerToggle from './DrawerToggle/DrawerToggle'
import UserLogo from '../../../components/UI/UserLogo/Userlogo'
import { connect } from "react-redux"

const ToolBar = (props) => {
    return (
        <div className={["row", classes.ToolBar].join(' ')}>
            <DrawerToggle toggleSideDrawerHandler={props.toggleSideDrawerHandler} />
            <Logo isSignedIn={props.isSignedIn} />
            <div className={[classes.DesktopOnly, 'col-md-8'].join(' ')}>
                <NavigationItems />
            </div>
            {props.isSignedIn ? <UserLogo /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: !state.web3.currentProvider.host
    }
}

export default connect(mapStateToProps)(ToolBar)