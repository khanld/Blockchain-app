import React from 'react'
import Form from '../../containers/ContactForm/ContactForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const IssuerRegister = (props) => (
    <React.Fragment>
         {!props.isFounder ? <Redirect to="/"/> : null}
         <Form issuer header="Issuer Register Form" registerForm />
    </React.Fragment>
)

const mapStateToProps = (state) => {
    return {
        isFounder: state.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a"
    }
}


export default connect(mapStateToProps)(IssuerRegister)