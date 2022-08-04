import React from 'react'
import classes from './Logo.module.css'

const Logo = (props) => {
    let setColumn = "col-md-4"
    if (props.isSignedIn) setColumn = "col-md-3"
    
    return (
        <div className={["col-sm-12", setColumn, classes.Logo].join(' ')}>
            <h1 style ={{margin: "0 0 20px 0"}}>
                <strong>
                    <span style={{color: "#20561f"}}>Job</span>
                    <span style={{color: "#093844"}}>Chain</span>
                </strong>
                <span style={{ color: '#a56c03', fontSize: '60px' }}>.</span>
            </h1>
        </div>
    )
}


export default Logo