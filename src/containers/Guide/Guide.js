import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { Component } from 'react'
import './Guide.css'
//JobChain is a Recruitment Website which provides a blockchain-based solution to Educational and Resources management. 
class Guide extends Component {
    render() {
        window.scrollTo({ top: 0 });
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Adding process"
                    iconStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    icon={<i className="fas fa-cubes" style={{
                        position: "absolute",
                        fontSize: "1.7em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}></i>}
                >
                    <h3 className="vertical-timeline-element-title">JobChain</h3>
                    <h4 className="vertical-timeline-element-subtitle">Blockchain Platform</h4>
                    <p>JobChain Founder examinies the standard of issuers and adds them to the network</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Certificate creation process"
                    contentStyle={{ background: 'rgb(9, 56, 68)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(9, 56, 68)', color: '#fff' }}
                    icon={<i className="fas fa-school" style={{
                        position: "absolute",
                        fontSize: "1.4em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}></i>}
                >
                    <h3 className="vertical-timeline-element-title">Qualified Issuers</h3>
                    <h4 className="vertical-timeline-element-subtitle">Universitys, Schools, Institutions</h4>
                    <p>Once a issuer is included in JobChain network. It is then able to create a Digital Certificate for its students</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Job application process"
                    iconStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    icon={<i className="fas fa-user-graduate" style={{
                        position: "absolute",
                        fontSize: "1.4em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }} ></i>}
                >
                    <h3 className="vertical-timeline-element-title">JobChain Users</h3>
                    <h4 className="vertical-timeline-element-subtitle">Students, Job seekers</h4>
                    <p>Students and Job seekers in JobChain can build trust with the employers by providing them with Proof of Achievement, Membership and Experience thanks to Digital Certificate and Experience Calculation based on Blockchain technology and Smart Contract</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Verification process"
                    contentStyle={{ background: 'rgb(9, 56, 68)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(9, 56, 68)', color: '#fff' }}
                    icon={<i className="fas fa-building" style={{
                        position: "absolute",
                        fontSize: "1.4em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}></i>}
                >
                    <h3 className="vertical-timeline-element-title">Companies in JobChain</h3>
                    <h4 className="vertical-timeline-element-subtitle">High quality human resources recruitment</h4>
                    <p>The verification process is pretty simple. The employers check the Digital Certificate to know where it comes from, if it is from JobChain, it is authentic and vice versa.
                        Next, they check the Experience field and the previous company of the candidates. Keep in mind that the employees' experience is recorded by Smart Contract, there is no chance to cheat with it.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Working time"
                    iconStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    icon={<i className="fas fa-business-time" style={{
                        position: "absolute",
                        fontSize: "1.4em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}></i>}
                >
                    <h3 className="vertical-timeline-element-title">Start Job and Gain Experience</h3>
                    <h4 className="vertical-timeline-element-subtitle">Enjoy your new working environment</h4>
                    <p>Start your new journey and obtain more valuable skills, knowledge and experience.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(165, 108, 3)', color: '#fff' }}
                    icon={<i className="far fa-check-circle" style={{
                        position: "absolute",
                        fontSize: "1.4em",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}></i>}
                >
                </VerticalTimelineElement>
            </VerticalTimeline >
        )
    }
}


export default Guide