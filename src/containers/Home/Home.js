import React, { Component } from 'react'
import Posters from '../../components/HomeContent/Posters/Posters'
import NotificationArea from '../../components/HomeContent/NotificationArea/NotificationArea'
import Header from '../../components/HomeContent/Header/Header'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import MovieDetails from '../../components/HomeContent/MovieDetails/MovieDetails'
import Clock from './Clock/Clock'
import Services from '../../components/HomeContent/Services/Services'
import Team from '../../components/HomeContent/Team/Team'
import ContactForm from '../ContactForm/ContactForm'
import Sliders from '../../components/Sliders/Sliders'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'

class Home extends Component {
    render() {
        window.scrollTo({ top: 0 });
        return (
            <React.Fragment>
                <Sliders images={[
                    {
                        url: image1,
                        title: "WelCome!",
                        content: "We are NoReact, which is stand for NodeJs and ReactJs. This is our first project with these technology. Wanna learn something?",
                        btnContent: "Read our Blog",
                        link: '/blog'
                    },
                    {
                        url: image2,
                        title: "Enjoy your time",
                        content: "Our destination is to give you the best experience while using our services. Hope you enjoy yourself here!",
                        btnContent: "Watch Movies",
                        link: '/movies'
                    },
                    {
                        btnContent: "Go for the API",
                        link: '/API',
                        url: image3,
                        title: "Developer",
                        content: "If you are a front-end developer, then we'd like to provide you a massive Movies API. Check it out!"
                    }]} />
                <div style={{ backgroundColor: "#f2f2f2" }}>
                    <Header
                        subTitle="TRAINING COURSE"
                        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam."
                        title="Our Courses" />
                    <Posters />
                </div>
                <NotificationArea />
                <Wrapper>
                    <Header
                        subTitle="ACHIEVEMENT"
                        title="Digital Certificate"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam." />
                    <MovieDetails />
                </Wrapper>
                <Clock />
                <Wrapper>
                    <Header
                        subTitle="OUR SERVICES"
                        title="We Offer Services" />
                    <Services />
                </Wrapper>
                <Wrapper>
                    <Header
                        subTitle="TEAM"
                        title="Leadership" />
                    <Team />
                </Wrapper>
                <div style={{ color: "white" }}>
                    <Header
                        subTitle="SIGNUP"
                        title="Join Our Network" />
                    <ContactForm header="Leave Your Contact"/>
                </div>
            </React.Fragment>
        )
    }
}


export default Home