import React, { Component } from 'react'
import PosterInteraction from '../../components/HomeContent/Posters/PosterContent/PosterInteraction'
import Button from '../../components/UI/Button/Button'
import classes from './Service.module.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import Modal from '../../components/UI/Modal/Modal'
import * as actionCreators from '../../store/actions/actionCreators'

class Service extends Component {
    state = {
        loading: false,
        modalShow: false,
        price: 0
    }

    onConinueHandler = async () => {
        this.setState({
            modalShow: false,
            loading: true
        })
        try {
            await this.props.factory.methods.buyCVPackage().send({
                from: this.props.web3.currentProvider.selectedAddress,
                value: this.props.web3.utils.toWei(this.state.price.toString())
            })

            await this.props.onUpdateJCTValue(this.props.factory)

            this.setState({
                loading: false
            })
            store.addNotification({
                title: "Wonderful!",
                message: "PURCHASE SUCCESSFULLY. NOW YOU CAN ACCESS MANY VALUABLE CV!!",
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

    onPurchaseHandler = (price) => {
        this.setState({
            modalShow: true,
            price
        })
    }
    render() {
        return (
            <React.Fragment>
                <div style={{ marginTop: "20px" }}>
                    <div className={["container", classes.Container].join(' ')}>
                        <div className={[classes.MovieDetails, "row"].join(' ')}>
                            <div className="col-md-6">
                                <div className={classes.MovieContent}>
                                    <PosterInteraction
                                        service
                                        title="Standard Package"
                                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam."
                                        expiredDate="120 Seconds"
                                        accessTime="3 Times"
                                        price="0.1 ether"
                                        btnWidth="100%"
                                        loved={Math.floor(Math.random() * 100)}
                                        watched={Math.floor(Math.random() * 100000)} />
                                    <Button btnType="posterBtn" btnWidth="100%" onSubmitHandler={() => this.onPurchaseHandler(0.1)}>PURCHASE</Button>
                                    <Button btnType="posterBtn" btnWidth="100%">MORE DETAILS</Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={classes.MovieContent}>
                                    <PosterInteraction
                                        service
                                        title={<React.Fragment>Premium Package <i className="fas fa-star" style={{ color: "yellow" }}></i></React.Fragment>}
                                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam."
                                        expiredDate="10 Minutes"
                                        accessTime="5 Times"
                                        price="0.2 ethers"
                                        btnWidth="100%"
                                        loved={Math.floor(Math.random() * 100)}
                                        watched={Math.floor(Math.random() * 100000)} />
                                    <Button btnType="posterBtn" btnWidth="100%" onSubmitHandler={() => this.onPurchaseHandler(0.2)}>PURCHASE</Button>
                                    <Button btnType="posterBtn" btnWidth="100%">MORE DETAILS</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {this.state.modalShow ? <Modal show={this.state.modalShow} onBackdropClickHandler={this.onRefuseHandler}>
                    <h3><i className="fas fa-exclamation-circle"></i></h3>
                    <p><strong>You need to pay {this.state.price} ether(s) to use this service. Are you sure?</strong></p>
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
        factory: state.factory,
        web3: state.web3
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateJCTValue: (factory) => dispatch(actionCreators.updateJCTValue(factory))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)