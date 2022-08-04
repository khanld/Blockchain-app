import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../UI/Spinner/Spinner'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import abi from '../../contracts/Certificate.json'
import { Route } from 'react-router-dom'
import Certificate from '../Certificate/Certificate'
import singlePostData from '../JobCategoty/singlePostData'
import candidates from '../../containers/Candidates/candidates'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import HDWalletWeb3 from '../../HdWallet'
import ERC20ABI from '../../contracts/ERC-20'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/Button'
import * as actionCreators from '../../store/actions/actionCreators'

const ERC20Address = "0x26215066bf67b7097Ca722Ddaf970595433D7568"

class CV extends React.Component {
    state = {
        experience: {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0
        },
        preCompanies: [],
        positions: [],
        loading: false,
        certificates: [],
        isApproved: true,
        isPublic: false,
        tokenIds: [],
        certificateAddresses: [],
        index: 0,
        modalShow: false,
        isPayBack: false,
        message: "",
        warning: true
    }

    componentDidUpdate() {
        if (this.props.location.pathname === '/CV' || this.props.location.pathname === '/candidates/CV') window.scrollTo({ top: 0 })
        else window.scrollTo({ top: 1500, behavior: 'smooth' })
    }

    async componentDidMount() {
        window.scrollTo({ top: 0 })

        this.setState({
            loading: true
        })
        try {
            const queryString = this.props.location.search
            const urlParams = new URLSearchParams(queryString);
            const entries = urlParams.entries();
            let index = Object.fromEntries(entries).index

            let isApproved = true
            console.log(candidates)
            if (!index) index = 0
            let seconds = await this.props.factory.methods.getEmployeeExperience(candidates[index].address).call()
            let isPublic = await this.props.factory.methods.isPublished(candidates[index].address).call()
            console.log(isPublic)

            const years = Math.floor(seconds / (12 * 30 * 24 * 60 * 60))
            seconds %= (12 * 30 * 24 * 60 * 60)
            const months = Math.floor(seconds / (30 * 24 * 60 * 60))
            seconds %= (30 % 24 * 60 * 60)
            const days = Math.floor(seconds / (24 * 60 * 60))
            seconds %= (24 * 60 * 60)
            const hours = Math.floor(seconds / (60 * 60))
            seconds %= (60 * 60)
            const minutes = Math.floor(seconds / 60)
            seconds %= 60

            const experience = { seconds, minutes, hours, days, months, years }



            const preCompaniesAddresses = await this.props.factory.methods.getEmployeePrevCompanies(candidates[index].address).call()
            const positions = []


            let preCompanies = []
            preCompaniesAddresses.forEach(companyAddress => {
                singlePostData.forEach((companyInfo) => {
                    if (companyInfo.details.titles[1].replace("Pubkey: ", "") === companyAddress)
                        preCompanies.push(companyInfo)
                })

            })


            for (let i = 0; i < preCompaniesAddresses.length; i++) {
                const position = await this.props.factory.methods.positions(candidates[index].address, i).call()
                positions.push(position)
            }


            //Certificate information
            let certificateAddresses = [];
            let certificates = []
            let tokenIds = []

            const balance = await this.props.factory.methods.balanceOf(candidates[index].address).call()

            for (let i = 0; i < balance; i++) {
                if(i === 3 || i == 1) continue
                let tokenId = await this.props.factory.methods.tokenOfOwnerByIndex(candidates[index].address, i).call()
                let certificateAddress = await this.props.factory.methods.getCertificateAddress(tokenId).call({
                    from: window.ethereum.selectedAddress
                })
                certificateAddresses.push(certificateAddress)
                tokenIds.push(tokenId)
            }


            for (let i = 0; i < certificateAddresses.length; i++) {
                try {
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
            // console.log(preCompanies)
            this.setState({
                certificates,
                experience,
                preCompanies,
                positions,
                loading: false,
                isApproved,
                isPublic,
                tokenIds,
                certificateAddresses,
                index
            })
        } catch (error) {
            console.log(error)
            this.setState({
                loading: false,
                isApproved: false,
                isPublic: false
            })
            store.addNotification({
                title: "Error!",
                message: "Maybe you are not allow to access this information! Please try it again later.",
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

    refuseToPayBack = () => this.setState({ modalShow: false })

    continueToPayPack = async () => {
        this.setState({
            loading: true,
            modalShow: false
        })
        if (!this.state.isPublic) {
            console.log("Not Public")
            try {
                await this.props.factory.methods.setPublicCV(this.state.tokenIds, this.state.certificateAddresses).send({
                    from: window.web3.currentProvider.selectedAddress
                })
                const accounts = await HDWalletWeb3.eth.getAccounts()
                const erc20Contract = new HDWalletWeb3.eth.Contract(ERC20ABI, ERC20Address)
                await erc20Contract.methods.transfer(window.web3.currentProvider.selectedAddress, 5).send({
                    from: accounts[0],
                    gas: "300000"
                })
                await this.props.onUpdateJCTToken(erc20Contract, this.props.web3.currentProvider.selectedAddress)
                store.addNotification({
                    title: "Wonderful!",
                    message: "You have public successfully!!!",
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

                let isPublic = await this.props.factory.methods.isPublished(candidates[this.state.index].address).call()
                this.setState({
                    loading: false,
                    isPublic
                })
            } catch (error) {
                console.log(error)
                let isPublic = await this.props.factory.methods.isPublished(candidates[this.state.index].address).call()
                this.setState({
                    loading: false,
                    isPublic
                })
            }
        } else {
            try {
                await this.props.erc20Contract.methods.transfer("0x9113A1d7A8d600f69024550C276106bDCD52259A", 5).send({
                    from: this.props.web3.currentProvider.selectedAddress
                })
                await this.props.onUpdateJCTToken(this.props.erc20Contract, window.web3.currentProvider.selectedAddress)
                this.setState({
                    loading: false,
                    isPayBack: true
                })
            } catch (error) {
                console.log(error)
                this.setState({
                    loading: false,
                    isPayBack: false
                })
            }
        }
    }

    togglePublic = async () => {
        try {
            if (!this.state.isPublic) {
                this.setState({
                    modalShow: true,
                    warning: false,
                    message: "YOU WILL RECIEVE 5 JCTS TOKEN IF YOU PUBLIC YOUR CV!!!"
                })

            } else {
                if (this.state.isPayBack) {
                    this.setState({
                        loading: true
                    })
                    await this.props.factory.methods.unPublicCV(this.state.tokenIds, this.state.certificateAddresses).send({
                        from: this.props.web3.currentProvider.selectedAddress
                    })
                    let isPublic = await this.props.factory.methods.isPublished(candidates[0].address).call()
                    console(isPublic)
                    store.addNotification({
                        title: "Wonderful!",
                        message: "You have unpublic successfully!!!",
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
                } else {
                    this.setState({ modalShow: true, warning: true, message: "YOU HAVE TO PAY PACK 5 JCT TO UNPUBLIC YOUR CV AGAIN!!!" })
                }
            }

            let isPublic = await this.props.factory.methods.isPublished(candidates[this.state.index].address).call()


            this.setState({
                isPublic,
                loading: false
            })
        } catch (error) {
            console.log(error)
            let isPublic = await this.props.factory.methods.isPublished(candidates[this.state.index].address).call()
            this.setState({
                loading: false,
                isPublic
            })
            store.addNotification({
                title: "Error!",
                message: "Maybe you are not allow to access this information! Please try it again later.",
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

    render() {
        if (!this.state.isApproved) this.props.history.push('/')


        const queryString = this.props.location.search
        const urlParams = new URLSearchParams(queryString);
        const entries = urlParams.entries();
        const index = Object.fromEntries(entries).index

        let content = (<div className="wrapper">
            <div style={{ position: "absolute", right: "300px", top: "60px", zIndex: "100" }}>
                <FormControlLabel
                    control={
                        <Switch value={this.state.isPublic}
                            onChange={this.togglePublic}
                            color="secondary"
                            checked={this.state.isPublic} />
                    }
                    label="Public"
                />
            </div>
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" src={index ? candidates[index].src : candidates[0].src} alt="" />
                    <h1 className="name">{index ? candidates[index].name : candidates[0].name}</h1>
                    <h3 className="tagline">{index ? candidates[index].school : candidates[0].school}</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fas fa-envelope"></i><Link >alan.doe@website.com</Link></li>
                        <li className="phone"><i className="fas fa-phone"></i><Link >0123 456 789</Link></li>
                        <li className="website"><i className="fas fa-globe"></i><Link  >portfoliosite.com</Link></li>
                        <li className="linkedin"><i className="fab fa-linkedin-in"></i><Link  >linkedin.com/in/alandoe</Link></li>
                        <li className="github"><i className="fab fa-github"></i><Link  >github.com/username</Link></li>
                        <li className="twitter"><i className="fab fa-twitter"></i><Link  >@twittername</Link></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <Link to={`/candidates/CV/certificate${queryString}`}><h2 className="container-block-title">Education</h2></Link>
                    {this.state.certificates.map((certificate, index) => (
                        <div className="item" key={certificate.student + certificate.certAddress}>
                            <h4 className="degree">{certificate.degreeType}</h4>
                            <h5 className="meta">{certificate.major}</h5>
                            <div className="time">{certificate.graduationTime}</div>
                        </div>
                    ))}
                </div>

                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>English <span className="lang-desc">(Native)</span></li>
                        <li>French <span className="lang-desc">(Professional)</span></li>
                        <li>Spanish <span className="lang-desc">(Professional)</span></li>
                    </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div>

            </div>

            <div className="main-wrapper">

                <section className="section summary-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                    <div className="summary">
                        <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <Link href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" >download this free resume/CV template here</Link>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                    </div>
                </section>

                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                    <h6 style={{ marginTop: "10px", marginBottom: "20px" }}>{this.state.experience.years} Year(s), {this.state.experience.months} Month(s), {this.state.experience.days} Day(s), {this.state.experience.hours} Hour(s), {this.state.experience.minutes} Minute(s), {this.state.experience.seconds} Second(s)</h6>
                    {this.state.preCompanies.map((preCompany, index) => (
                        <div className="item" key={preCompany.details.titles[2]}>
                            <div className="meta">
                                <div className="upper-row">
                                    <h2 className="job-title"><strong>{preCompany.details.titles[0]}</strong></h2>
                                    <div className="time"><strong><i className="far fa-check-circle" style={{ color: "green", fontWeight: "none" }}></i></strong> Confirmed by Jobchain </div>
                                </div>
                                <div className="company"><strong>Company: </strong>{preCompany.details.company}</div>
                                <div className="company"><strong>Pubkey: </strong>{preCompany.details.titles[1].replace("Pubkey: ", "")}</div>
                            </div>
                            <div className="details">
                                <p>{preCompany.details.briefDesc}</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    ))}

                </section>

                <section className="section projects-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                    <div className="intro">
                        <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="#hook">Velocity</Link></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" >DevStudio</Link></span> -
            <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" >Tempo</Link></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" >Atom</Link></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                    </div>
                    <div className="item">
                        <span className="project-title"><Link href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" >Delta</Link></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                    </div>
                </section>

                <section className="skills-section section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">
                        <div className="item">
                            <h3 className="level-title">Python &amp; Django</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "99%" }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Javascript &amp; jQuery</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Angular</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">HTML5 &amp; CSS</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Ruby on Rails</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Sketch &amp; Photoshop</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>)
        return (
            <div style={{ minHeight: "1400px" }}>
                {content}
                {this.state.modalShow ? <Modal show={this.state.modalShow} onBackdropClickHandler={this.refuseApplingJobs}>
                    <h3>{this.state.warning ? <i className="fas fa-exclamation-circle"></i> : <i className="fas fa-gifts"></i>}</h3>
                    <p><strong>{this.state.message}</strong></p>
                    <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.refuseToPayBack} >REFUSE</Button>
                    <Button btnType="posterBtn" btnWidth="100px" btnHeight="35px" onSubmitHandler={this.continueToPayPack}>CONTINUE</Button>
                </Modal> : null}
                <div className="app-container">
                    <ReactNotification />
                </div>
                {this.state.loading ? <div style={{ position: "fixed", top: "30%", left: "0", right: "0" }}><Spinner /></div> : null}
                <Route path="/candidates/CV/certificate" render={() => {
                    return (
                        < div style={{ minHeight: '500px', backgroundColor: "rgb(242, 242, 242)", marginTop: "30px" }}>
                            {this.state.certificates.map(certificate => (
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
                            ))}
                        </div>)
                }} />

            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        web3: state.web3,
        factory: state.factory,
        erc20Contract: state.erc20Contract
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateJCTToken: (erc20Contract, account) => dispatch(actionCreators.updateJCTTokens(erc20Contract, account))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CV)