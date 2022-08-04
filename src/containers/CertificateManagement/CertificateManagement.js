import React, { Component } from 'react'
import Certificate from '../../components/Certificate/Certificate'
import { connect } from 'react-redux'
import abi from '../../contracts/Certificate.json'
import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'


class CertificateManagement extends Component {
    state = {
        certificates: [],
        loading: false,
        error: false
    }

    async componentDidMount() {
        this.setState({
            loading: true,
            error: false
        })

        try {

            let certificateAddresses = [];
            let certificates = []

            for (let i = 0; i < this.props.balance; i++) {
                let tokenId = await this.props.factory.methods.tokenOfOwnerByIndex(window.ethereum.selectedAddress, i).call()
                let certificateAddress = await this.props.factory.methods.getCertificateAddress(tokenId).call({
                    from: window.ethereum.selectedAddress
                })

                certificateAddresses.push(certificateAddress)
            }

            for (let i = 0; i < certificateAddresses.length; i++) {
                try {
                    if(i == 3 || i == 1) continue;
                    const certificateContract = new this.props.web3.eth.Contract(abi, certificateAddresses[i])

                    const certificateString = await certificateContract.methods.getCertificateInfo().call({
                        from: window.ethereum.selectedAddress
                    })

                    const certificateArray = certificateString.split('&')
                    const issuer = await certificateContract.methods.issuer().call()
                    const factory = await certificateContract.methods.factory().call()
                    let timeStamp = await certificateContract.methods.timeStamp().call()
                    let approverCount = await certificateContract.methods.approverCount().call()

                    var newDate = new Date();
                    newDate.setTime(timeStamp * 1000);
                    timeStamp = newDate.toUTCString();

                    console.log(approverCount)

                    const certificate = {
                        student: certificateArray[0],
                        dateOfBirth: certificateArray[1],
                        major: certificateArray[2],
                        graduationTime: certificateArray[3],
                        degreeType: certificateArray[4].toUpperCase(),
                        degreeClassification: certificateArray[5],
                        modeOfStudy: certificateArray[6],
                        certAddress: certificateAddresses[i],
                        issuer,
                        factory,
                        timeStamp,
                        approverCount
                    }

                    certificates.push(certificate)
                } catch (error) {
                    console.log(error)
                }



            }
            console.log(certificates)
            this.setState({
                certificates,
                loading: false,
                error: false
            })
        } catch (error) {
            console.log(error)
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    onBackdropClickHandler = () => {
        this.props.history.push('/')
    }

    render() {
        let content = this.state.certificates.map(certificate => (
            <Certificate
                key={certificate.certAddress}

                headMaster="HEADMASTER"
                school="UEF UNIVERSITY"
                degreeType={certificate.degreeType}
                major={certificate.major}
                student={certificate.student}
                dateOfBirth={certificate.dateOfBirth}
                degreeClassification={certificate.degreeClassification}
                modeOfStudy={certificate.modeOfStudy}
                graduationTime={certificate.graduationTime}

                title={certificate.degreeType}
                content="Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!"
                releasedDate={certificate.timeStamp}
                issuer={`Đại Học Kinh Tế - Tài Chính TP.HCM - ${certificate.issuer}`}
                factory={certificate.factory}
                certAddress={certificate.certAddress}
                loved={Math.floor(Math.random() * 100)}
                watched={certificate.approverCount}
                link={`https://rinkeby.etherscan.io/address/${certificate.certAddress}`} />
        ))

        if (this.state.loading) content = <Spinner />

        if (this.state.err) content = (
            <Modal
                onBackdropClickHandler={this.onBackdropClickHandler}
                show>
                <h3><i className="fas fa-exclamation-circle"></i></h3>
                <p>OOPS!!! SOMETHING WENT WRONG. PLEASE COMBACK LATER</p>
            </Modal>
        )

        if (this.props.balance === '0') content = (
            <Modal show onBackdropClickHandler={this.onBackdropClickHandler}>
                <h3><i className="fas fa-exclamation-circle"></i></h3>
                <p>You do not have any Certificate</p>
                <Button btnType='posterBtn' btnWidth='100px'>Get One</Button>
            </Modal>
        )
        return (
            <div style={{ minHeight: '500px', backgroundColor: "rgb(242, 242, 242)" }}>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        factory: state.factory,
        balance: state.balance
    }
}

export default connect(mapStateToProps)(CertificateManagement)