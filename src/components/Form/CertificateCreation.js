import React from 'react'
import Form from '../../containers/ContactForm/ContactForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Certificate = (props) => (
    <React.Fragment>
        {!props.isIssuer? <Redirect to="/" /> : null}
        <Form certificate header="Certificate Creation Form" registerForm />
    </React.Fragment>
)

const mapStateToProps = (state) => {
    return {
        isIssuer: state.issuer.registered
    }
}

export default connect(mapStateToProps)(Certificate)