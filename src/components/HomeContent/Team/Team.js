import React from 'react'
import Member from './Member/Member'
import member1 from '../../../assets/member-1.jpg'
import member2 from '../../../assets/member-2.png'
import member3 from '../../../assets/member-3.jpg'
import classes from './Team.module.css'

const Team = (props) => {
    const team = [{
        image: member1,
        name: "Maximilian Schwarzmüller",
        role: "Reactjs Teacher",
        description: "My name is Maximilian Schwarzmüller, I'm a freelance web developer and worked with React in many projects. I'm also a 5-star rated instructor here on Udemy."
    }, {
        image: member2,
        name: "Andrew Mead",
        role: "Nodejs Teacher",
        description: "I'm Andrew, a full-stack developer living in beautiful Philadelphia! I launched my first Udemy course in 2014 and had a blast teaching and helping others."
    }, {
        image: member3,
        name: "Jonas Schmedtmann",
        role: "Javascript Teacher",
        description: "I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2007."
    }]
    return (
        <div className={["container", classes.Team].join(' ')}>
            <div className="row">
                {team.map(member => (
                    <div className={["col-md-6 col-lg-4", classes.Content].join(' ')} key={member.name}>
                        <Member
                        image={member.image}
                        name={member.name}
                        role={member.role}
                        description={member.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team