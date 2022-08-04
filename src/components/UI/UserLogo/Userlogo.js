import React, { Component } from 'react'
import classes from './UserLogo.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class UserLogo extends Component {
    state = {
        isDropdown: false,
        certificates: []
    }

    toggleDropdown = () => {
        this.setState(() => ({
            isDropdown: !this.state.isDropdown
        }))
    }

    async componentDidMount() {
        const certificates = await this.props.factory.methods.getCertificateList().call({
            from: window.ethereum.selectedAddress
        })
        this.setState({
            certificates
        })
    }

    render() {
        let dropdownContentClasses = [classes.dropdownContent]
        if (this.state.isDropdown) dropdownContentClasses.push(classes.show)

        let role = "User"
        let content = (
            <React.Fragment>
                <Link to>Your CRTs: {this.props.balance - 2}</Link>
                <Link to="/CV">View CV</Link>
                <Link to="/certificates">View Certificates</Link>
                <Link to="/mycourses">My courses</Link>
                <Link to>Your JCT Token(s): {this.props.erc20Token} ~ {this.props.web3.utils.fromWei(this.props.ethers.toString(), 'ether')} Ether(s)</Link>
            </React.Fragment>
        )

        if (window.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a") {
            role = "Founder"
            content = (
                <React.Fragment>
                    <Link to="/registerIssuer">Register Issuer</Link>
                    <Link to="/registerCompany">Register Company</Link>
                    <Link to="/companyList">Company Management</Link>
                    <Link to="/SchoolList">School Management</Link>
                    <Link to>Your JCT Token(s): {this.props.erc20Token} ~ {this.props.web3.utils.fromWei(this.props.ethers.toString())} Ether(s)</Link>
                </React.Fragment>
            )
        }

        if (this.props.isIssuer) {
            role = "Issuer"
            content = (<React.Fragment>
                <Link to="/createCertificate">Certificate Creation</Link>
                <Link to="/course-creation">Course Creation</Link>
                <Link to>ToTal Creation: {this.state.certificates.length}</Link>
                <Link to="/certificateManagement">Certificate Management</Link>
                <Link to>Your JCT Token(s): {this.props.erc20Token} ~ {this.props.web3.utils.fromWei(this.props.ethers.toString())} ether(s)</Link>
            </React.Fragment>)
        }

        if (this.props.isCompany) {
            role = "Company"
            content = (<React.Fragment>
                <Link to="/course-creation">Course Creation</Link>
                <Link to="/candidates">Candidates</Link>
                <Link to="employeeManagement">Employee Management</Link>
                <Link to>Your JCT Token(s): {this.props.erc20Token} ~ {this.props.web3.utils.fromWei(this.props.ethers.toString())} ether(s)</Link>
            </React.Fragment>)
        }

        return (
            <div className={["col-md-1", classes.UserLogo].join(' ')}>
                <div onClick={this.toggleDropdown}>
                    <i className="far fa-user"></i>

                    <div className={dropdownContentClasses.join(" ")}>
                        <Link to="">Role: {role}</Link>
                        {content}
                        {!this.props.isExpired ? <Link to="/CVPackage">View Your CV Package</Link> : null}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        isIssuer: state.issuer.registered,
        isCompany: state.company.registered,
        factory: state.factory,
        erc20Token: state.erc20Token,
        ethers: state.JCTValue * state.erc20Token,
        web3: state.web3,
        isExpired: state.isExpired
    }
}

export default connect(mapStateToProps)(UserLogo)