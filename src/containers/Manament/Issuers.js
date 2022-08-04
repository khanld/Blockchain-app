import React, { Component } from 'react'
import Management from '../../components/Management/Management'
import UEFLogo from '../../assets/UEF.png'
import HUTECGLogo from '../../assets/hutech.png'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Companies extends Component {
    state = {
        title: "School Management",
        companies: [
            {
                src: UEFLogo,
                name: "Đại học Kinh Tế - Tài Chính Tp.HCM",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x14a812669cC393290416Ab9613737B7958FF134c"
            },
            {
                src: HUTECGLogo,
                name: "Đại học Công Nghệ Tp.HCM",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x14a812669cC393290416Ab9613737B7958FF134c"
            },
            {
                src: UEFLogo,
                name: "Đại học Kinh Tế - Tài Chính Tp.HCM",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x14a812669cC393290416Ab9613737B7958FF134c"
            },
            {
                src: HUTECGLogo,
                name: "Đại học Công Nghệ Tp.HCM",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x14a812669cC393290416Ab9613737B7958FF134c"
            }
        ]
    }

    render() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return (
            <React.Fragment>
                {!this.props.isFounder ? <Redirect to="/"/> : null}
                <Management title={this.state.title} companies={this.state.companies} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFounder: state.web3.currentProvider.selectedAddress === "0x9113a1d7a8d600f69024550c276106bdcd52259a"
    }
}

export default connect(mapStateToProps)(Companies)