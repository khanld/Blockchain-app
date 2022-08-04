import React, { Component } from 'react'
import ToolBar from '../../components/Navigation/ToolBar/TooBar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawerHandler = () => {
        this.setState((state) => ({
            showSideDrawer: !state.showSideDrawer
        }))
    }

    render() {
        return (
            <div className={this.props.inHome ? [classes.Layout].join(' '): ""}>
                <nav style={{ height: "92px", zIndex: "9999" }}>
                    <SideDrawer
                        showSideDrawer={this.state.showSideDrawer}
                        toggleSideDrawerHandler={this.toggleSideDrawerHandler} />
                    <ToolBar toggleSideDrawerHandler={this.toggleSideDrawerHandler} />
                </nav>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout