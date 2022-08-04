import React, { Component } from 'react'
import Management from '../../components/Management/Management'
import { connect } from 'react-redux'
import HDWalletWeb3 from '../../HdWallet'
import Spinner from '../../components/UI/Spinner/Spinner'
import factoryABI from '../../contracts/Factory'
import Header from '../../components/HomeContent/Header/Header'
import profileLogo from '../../assets/profileLogo.jpg'

import { factoryAddress } from '../../address'


class DataPackage extends Component {
    state = {
        title: "CV DATA",
        companies: [],
        loading: false
    }

    viewDetails = (index) => {
        this.props.history.push(`/candidates/CV?index=${index}`)
    }

    async componentDidMount() {
        if (this.props.isExpired) this.props.history.push("/")
        this.setState({
            loading: true
        })
        try {
            const accounts = await HDWalletWeb3.eth.getAccounts()
            const factory = new HDWalletWeb3.eth.Contract(factoryABI, factoryAddress)

            const publicUsers = await factory.methods.getPublicUsers().call({
                from: accounts[0]
            })

            let companies = publicUsers.map(publicUser => {
                return {
                    src: profileLogo,
                    name: "Le Duy Khanh",
                    school: "University Of Economics And Finance",
                    experience: "0 year(s)",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                    address: publicUser,
                    workingStatus: 0
                }
            })

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

    render() {
        return (
            <React.Fragment>
                <Header
                    subTitle="YOUR CV PACKAGE"
                    title="We Offer CVs"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam." />
                <div style={{ minHeight: "400px" }}>
                    <Management
                        companies={this.state.companies}
                        onViewDetailsHandler={this.viewDetails} />
                    {this.state.loading ?
                        <div style={{ position: "fixed", width: "100%", top: "40%" }}>
                            <Spinner />
                        </div> : null}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        isExpired: state.isExpired
    }
}


export default connect(mapStateToProps)(DataPackage)