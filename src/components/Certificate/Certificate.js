import React from 'react'
import classes from './Certificate.module.css'
import Button from '../UI/Button/Button'
import PosterInteraction from '../../components/HomeContent/Posters/PosterContent/PosterInteraction'
import CertificateImage from './CertificateImage/CertificateImage'

const Certificate = (props) => {
    window.scrollTo({ top: 0 });
    return (
        <div className={classes.Certificate}>
        <div className={["container", classes.Container].join(' ')}>
            <div className={[classes.MovieDetails, "row"].join(' ')}>
                <div className="col-md-6">
                    <div className={classes.MoviePoster}>
                      <CertificateImage
                        header="SOCIALIST REPUBLIC OF VIETNAM"
                        headMaster={props.headMaster}
                        school={props.school}
                        degreeType={props.degreeType}
                        major={props.major}
                        student={props.student}
                        dateOfBirth={props.dateOfBirth}
                        degreeClassification={props.degreeClassification}
                        modeOfStudy={props.modeOfStudy}
                        graduationTime={props.graduationTime}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.MovieContent}>
                        <PosterInteraction 
                            title={props.title}
                            content={props.content}
                            date={props.releasedDate}
                            issuer={props.issuer}
                            factory={props.factory}
                            certAddress={props.certAddress}
                            btnWidth="100%"
                            loved={Math.floor(Math.random()*100)}
                            watched={props.watched} />
                            <Button btnType="posterBtn" btnWidth="100%"><a href={props.link} style={{color: "white", display: "block"}}>VIEW ON ETHERSCAN</a></Button>
                            <Button btnType="posterBtn" btnWidth="100%">GET MORE</Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Certificate