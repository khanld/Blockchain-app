import React, { Component } from 'react'
import Poster from '../../components/HomeContent/Posters/Posters'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import Sliders from '../../components/Sliders/Sliders'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Button from '../../components/UI/Button/Button'
import * as actionCreators from '../../store/actions/actionCreators'
import Header from '../../components/HomeContent/Header/Header'

class Playground extends Component {
    state = {
        loading: false,
        modalShow: false
    }

    componentDidMount() {
        window.scrollTo({ top: 0 });
    }

    onPurchaseHandler = () => {
        this.setState({
            modalShow: true
        })
    }
    onConinueHandler = async () => {
        this.setState({
            modalShow: false,
            loading: true
        })
        try {
            await this.props.erc20Contract.methods.transfer("0x9113a1d7a8d600f69024550c276106bdcd52259a", 5).send({
                from: this.props.web3.currentProvider.selectedAddress
            })

            await this.props.onUpdateJCTToken(this.props.erc20Contract, this.props.web3.currentProvider.selectedAddress)

            this.setState({
                loading: false
            })
            store.addNotification({
                title: "Wonderful!",
                message: "BUY SUCCESSFULLY. Good luck!!",
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
            this.setState({
                loading: false
            })
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
        }
    }

    onRefuseHandler = () => {
        this.setState({
            modalShow: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Sliders images={[
                    {
                        url: image1,
                        title: "WelCome!",
                        content: "We are NoReact, which is stand for NodeJs and ReactJs. This is our first project with these technology. Wanna learn something?",
                        btnContent: "Read our Blog",
                        link: '/blog'
                    },
                    {
                        url: image2,
                        title: "Enjoy your time",
                        content: "Our destination is to give you the best experience while using our services. Hope you enjoy yourself here!",
                        btnContent: "Watch Movies",
                        link: '/movies'
                    },
                    {
                        btnContent: "Go for the API",
                        link: '/API',
                        url: image3,
                        title: "Developer",
                        content: "If you are a front-end developer, then we'd like to provide you a massive Movies API. Check it out!"
                    }]} />
                <Header
                    subTitle="EXCHANGE YOUR TOKEN"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam."
                    title="Jobchain Rewards" />
                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <Poster
                        playground
                        onPurchaseHandler={this.onPurchaseHandler} />
                </div>
                {this.state.modalShow ? <Modal show={this.state.modalShow} onBackdropClickHandler={this.onRefuseHandler}>
                    <h3><i className="fas fa-exclamation-circle"></i></h3>
                    <p><strong>You need to pay 5 JCTs to use this service. Are you sure?</strong></p>
                    <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.onRefuseHandler} >REFUSE</Button>
                    <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.onConinueHandler}>CONTINUE</Button>
                </Modal> : null}
                <div className="app-container">
                    <ReactNotification />
                </div>
                {this.state.loading ? <div style={{
                    position: "fixed",
                    left: "0",
                    right: "0",
                    top: "30%"
                }}><Spinner /></div> : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        erc20Contract: state.erc20Contract,
        web3: state.web3
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateJCTToken: (erc20Contract, account) => dispatch(actionCreators.updateJCTTokens(erc20Contract, account))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground)