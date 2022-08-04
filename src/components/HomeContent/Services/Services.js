import React from 'react'
import Service from './Service/Service'
import classes from './Services.module.css'
//<i class="fab fa-react"></i>

const Services = (props) => {
    const services = [{
        icon: "fab fa-react",
        title: "Reactjs Developer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }, {
        icon: "fab fa-node-js",
        title: "Nodejs Developer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }, {
        icon: "fas fa-video",
        title: "Digital Certificate",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }, {
        icon: "fab fa-quinscape",
        title: "Degree Fraud Tracking",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }, {
        icon: "fas fa-rss-square",
        title: "Blockchain Solution",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }, {
        icon: "fab fa-github",
        title: "Github - Source Code",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }]
    return (
        <div className={["container", classes.Services].join(' ')}>
            <div className={["row", classes.ROW].join(' ')}>
                {services.map(service => (
                    <div className="col-lg-4 col-md-6" key={service.icon}>
                        <Service
                        icon={service.icon}
                        title={service.title}
                        content={service.content} />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Services