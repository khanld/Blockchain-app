import React, { Component } from 'react'
import Management from '../../components/Management/Management'
import { connect } from 'react-redux'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Spinner from '../../components/UI/Spinner/Spinner'
import singlePostData from '../../components/JobCategoty/singlePostData'
import companies from './candidates'

class Candidates extends Component {
    state = {
        title: "Candidates",
        companies,
        loading: false
    }

    viewDetails = (index) => {
        this.props.history.push(`/candidates/CV?index=${index}`)
    }

    updateWorkingStatus = async () => {
            //Make copy of companies array
            const companies = [...this.state.companies]

            for (let i = 0; i < companies.length; i++) {
                const companyObject = { ...companies[i] }
                const workingStatus = await this.props.factory.methods.employeeWorkingStatus(companyObject.address).call()

                console.log(typeof (workingStatus))

                companyObject.workingStatus = workingStatus
                companies[i] = companyObject
            }

            return companies
    }

    async componentDidMount() {
        this.setState({
            loading: true
        })
        try {
            const companies = await this.updateWorkingStatus()
            this.setState({
                loading: false,
                companies
            })
        } catch (error) {
            this.setState({
                loading: false
            })
        }

    }

    acceptCandidate = async () => {
        this.setState({
            loading: true
        })


        const chosenJob = singlePostData[this.props.chosenIndex]

        try {
            await this.props.factory.methods.startJob('0x4dF231C38b4Bb27c3060F5817Cd831286C94A49C', chosenJob.details.titles[0]).send({
                from: window.ethereum.selectedAddress
            })

            const companies = await this.updateWorkingStatus();

            this.setState({
                loading: false,
                companies
            })
            store.addNotification({
                title: "Wonderful!",
                message: "You have accept successfully!!!",
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

        } catch (error) {
            console.log(error)
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
            this.setState({
                loading: false
            })

        }
    }

    declineCandidate = async () => {
        this.setState({
            loading: true
        })
        try {
            await this.props.factory.methods.endJob('0x4dF231C38b4Bb27c3060F5817Cd831286C94A49C').send({
                from: window.ethereum.selectedAddress
            })

            store.addNotification({
                title: "Wonderful!",
                message: "You have accept successfully!!!",
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
            const companies = await this.updateWorkingStatus();

            this.setState({
                loading: false,
                companies
            })
        } catch (error) {
            console.log(error)
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
            this.setState({
                loading: false
            })
        }
    }

    render() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return (
            <React.Fragment>
                <Management
                    title={this.state.title}
                    candidates
                    companies={this.state.companies}
                    onViewDetailsHandler={this.viewDetails}
                    onAcceptHandler={this.acceptCandidate}
                    onDeclineHandler={this.declineCandidate} />
                {this.state.loading ?
                    <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                        <Spinner />
                    </div> : null}
                <div className="app-container">
                    <ReactNotification />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        factory: state.factory,
        chosenIndex: state.chosenIndex
    }
}

export default connect(mapStateToProps)(Candidates)