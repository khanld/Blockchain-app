import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Contact.module.css'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

class ContactForm extends Component {
    state = {
        pubKey: "",
        email: "",
        name: "",
        address: "",
        degreeType: "Degree Of Enginner",
        falcuty: "Information Technology",
        graduationYear: "Ho Chi Minh, October 19 2022",
        classification: "Good",
        modeOfStudy: "Fulltime",
        dateOfBirth: "25/07/2000",
        loading: false,
        error: false
    }

    getInputValue = (event, type) => {
        if (type === "pubKey") {
            this.setState({
                pubKey: event.target.value
            })
        }
        if (type === "email") {
            this.setState({
                email: event.target.value
            })
        }
        if (type === "name") {
            this.setState({
                name: event.target.value
            })
        }
        if (type === "address") {
            this.setState({
                address: event.target.value
            })
        }
        if (type === "degreeType") {
            this.setState({
                degreeType: event.target.value
            })
        }
        if (type === "falcuty") {
            this.setState({
                falcuty: event.target.value
            })
        }
        if (type === "graduationYear") {
            this.setState({
                graduationYear: event.target.value
            })
        }
        if (type === "classification") {
            this.setState({
                classification: event.target.value
            })
        }
        if (type === "modeOfStudy") {
            this.setState({
                modeOfStudy: event.target.value
            })
        }
        if(type === "dateOfBirth") {
            this.setState({
                dateOfBirth: event.target.value
            })
        }
    }

    submitToBlockchain = async () => {
        try {
            this.setState({ loading: true, error: false })

            if (this.props.issuer) {
                await this.props.factory.methods.registerIssuer(this.state.pubKey).send({
                    from: this.props.web3.currentProvider.selectedAddress
                })
            }
            if (this.props.company) {
                await this.props.factory.methods.registerCompany(this.state.pubKey).send({
                    from: this.props.web3.currentProvider.selectedAddress
                })
            }

            if (this.props.certificate) {
                const info = this.state.name + '&' + this.state.dateOfBirth + '&' + this.state.falcuty + '&' + this.state.graduationYear + '&' + this.state.degreeType + '&' + this.state.classification + '&' + this.state.modeOfStudy;
                console.log(info)
                await this.props.factory.methods.createCertificateToken(this.state.pubKey, info).send({
                    from: this.props.web3.currentProvider.selectedAddress
                })
            }
            store.addNotification({
                title: "Wonderful!",
                message: "Registered Successfully. Good luck!!",
                type: "success",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
            this.setState({ loading: false, error: false,
                pubKey: "",
                email: "",
                name: "",
                address: "",
                degreeType: "",
                falcuty: "",
                graduationYear: "",
                classification: "",
                modeOfStudy: "",
                dateOfBirth: ""})
        } catch (e) {
            console.log(e)
            store.addNotification({
                title: "Error!",
                message: "Something went wrong! Please try it again later.",
                type: "danger",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
            this.setState({ loading: false, error: true })
        }
    }

    toggleBackDropAndModal = () => {
        this.setState({
            error: false
        })
    }

    render() {
        let formType = null
        if (this.props.registerForm) formType = classes.RegisterForm

        let content = (
            <React.Fragment>
                <p>Public Key: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "pubKey")}
                    placeholder="Enter your public key"
                    value={this.state.pubKey}
                />
                <p>Email: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "email")}
                    placeholder="Enter your email"
                    value={this.state.email} />
                <p>Name: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "name")}
                    placeholder="Enter your organization name"
                    value={this.state.name} />
                <p>Address: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "address")}
                    placeholder="Enter your organization address"
                    value={this.state.address} />
                <Button onSubmitHandler={this.submitToBlockchain}>Submit</Button>
            </React.Fragment>
        )

        if (this.props.certificate) content = (
            <React.Fragment>
                <p>Public Key: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "pubKey")}
                    placeholder="Enter owner public key"
                    value={this.state.pubKey}
                />
                <p>Name: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "name")}
                    placeholder="Enter owner name"
                    value={this.state.name} />
                <p>Date of birth: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "dateOfBirth")}
                    placeholder="Enter owner Date of birth"
                    value={this.state.dateOfBirth} />
                <p>Falcuty: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "falcuty")}
                    placeholder="Enter owner Falcuty"
                    value={this.state.falcuty} />
                <p>Degree type: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "degreeType")}
                    placeholder="Enter owner Degree type"
                    value={this.state.degreeType} />
                <p>Degree classification: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "classification")}
                    placeholder="Enter owner Degree classification"
                    value={this.state.classification} />
                <p>Graduation Year: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "graduationYear")}
                    placeholder="Enter owner Graduation Year"
                    value={this.state.graduationYear} />
                <p>Mode of study: </p>
                <Input
                    onchangedHandler={(event) => this.getInputValue(event, "modeOfStudy")}
                    placeholder="Enter owner Mode of study"
                    value={this.state.modeOfStudy} />
                <Button onSubmitHandler={this.submitToBlockchain}>Submit</Button>
            </React.Fragment>
        )

        if (this.state.loading) content = <Spinner />

        return (
            <div className={[classes.ContactForm, formType].join(' ')}>
                <h2>{this.props.header}</h2>
                {content}         
                <div className="app-container">
                    <ReactNotification />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        factory: state.factory,
        web3: state.web3,
        isFounder: state.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a"
    }
}

export default connect(mapStateToProps)(ContactForm)