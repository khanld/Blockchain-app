import React, { Component } from 'react'
import JobCategory from '../../components/JobCategoty/index'
import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import singlePostData from '../../components/JobCategoty/singlePostData'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import * as actionCreators from '../../store/actions/actionCreators'

class Jobs extends Component {
    state = {
        modalShow: false,
        error: false,
        loading: false,
        singlePostData,
        selectedId: null
    }

    applyJobs = (selectedId) => {
        this.setState((state) => ({ modalShow: !state.modalShow, selectedId }))
        this.props.chosenJobIndex(selectedId);
    }

    refuseApplingJobs = () => {
        this.setState((state) => ({ modalShow: false, error: false }))
    }

    submitToBlockchain = async () => {
        try {
            this.setState({
                modalShow: false,
                error: false,
                loading: true
            })

            let certificateAddresses = [];
            let tokenIds = []


            for (let i = 0; i < this.props.balance; i++) {
                let tokenId = await this.props.factory.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, i).call()
                let certificateAddress = await this.props.factory.methods.getCertificateAddress(tokenId).call({
                    from: window.ethereum.selectedAddress
                })
                
                tokenIds.push(tokenId)
                certificateAddresses.push(certificateAddress)
            }

            await this.props.factory.methods.setApprovalForAccessingCertificates(
                this.state.singlePostData[this.state.selectedId - 1].details.titles[1].replace("Pubkey: ", ""),
                tokenIds,
                certificateAddresses
            ).send({
                from: window.ethereum.selectedAddress
            })

            const singlePostData = [...this.state.singlePostData]
            const selectedPostData = { ...singlePostData[this.state.selectedId - 1] }
            selectedPostData.tick = true

            singlePostData[this.state.selectedId - 1] = selectedPostData

            store.addNotification({
                title: "Wonderful!",
                message: "You have applied successfully. Good luck!!",
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

            this.setState({
                modalShow: false,
                error: false,
                loading: false,
                singlePostData
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
                modalShow: false,
                error: true,
                loading: false
            })
        }
    }

    render() {
        window.scrollTo({ top: 0 });
        return (
            <React.Fragment>
                <JobCategory onApplyHandler={this.applyJobs} singlePostData={this.state.singlePostData} />
                {this.state.modalShow ?
                    <Modal show={this.state.modalShow} onBackdropClickHandler={this.refuseApplingJobs}>
                        <h3><i className="fas fa-exclamation-circle"></i></h3>
                        <p><strong>By applying this Jobs, you give this Company the right to access your information</strong></p>
                        <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.refuseApplingJobs} >REFUSE</Button>
                        <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.submitToBlockchain}>CONTINUE</Button>
                    </Modal> : null}
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
        factory: state.factory,
        web3: state.web3,
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chosenJobIndex: (index) => dispatch(actionCreators.chosenJobIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)