import React, {Component} from 'react'
import Management from '../../components/Management/Management'
import TMALogo from '../../assets/TMALogo.jpg'
import FPTLogo from '../../assets/fptLogo.jpg'

class Companies extends Component {
    state = {
        title: "Company Management",
        companies: [
            {
                src: FPTLogo,
                name: "FPT Software",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x3A7f0D0b04FFc154f7650EA1b31368491D548a94"
            },
            {
                src: TMALogo,
                name: "TMA Solution",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x3A7f0D0b04FFc154f7650EA1b31368491D548a94"
            },
            {
                src: FPTLogo,
                name: "FPT Software",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x3A7f0D0b04FFc154f7650EA1b31368491D548a94"
            },
            {
                src: TMALogo,
                name: "TMA Solution",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.",
                address: "0x3A7f0D0b04FFc154f7650EA1b31368491D548a94"
            }
        ]
    }

    render () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return (
            <Management title={this.state.title} companies={this.state.companies} />
        )
    }
}

export default Companies