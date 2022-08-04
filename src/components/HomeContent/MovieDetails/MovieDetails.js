import React from 'react'
import classes from './MovieDetails.module.css'
import Button from '../../UI/Button/Button'
import PosterInteraction from '../Posters/PosterContent/PosterInteraction'
import CertificateImage from '../../Certificate/CertificateImage/CertificateImage'

const MovieDetails = (props) => {
    return (
        <React.Fragment>
        <div className={["container", classes.Container].join(' ')}>
            <div className={[classes.MovieDetails, "row"].join(' ')}>
                <div className="col-md-6">
                    <div className={classes.MoviePoster}>
                      <CertificateImage
                        header="SOCIALIST REPUBLIC OF VIETNAM" 
                        headMaster="HEADMASTER"
                        school="UEF UNIVERSITY"
                        degreeType="THE DEGREE OF ENGINEER"
                        major="Information Technology"
                        student="Lê Duy Khánh"
                        dateOfBirth="25/07/2000"
                        degreeClassification="Good"
                        modeOfStudy="Fulltime"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.MovieContent}>
                        <PosterInteraction 
                            title="Graduate Certificate"
                            content="Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                            asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem
                            ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!"
                            date="25/7/2000"
                            issuer="Đại Học Kinh Tế - Tài Chính TP.HCM - 0x14a812669cC393290416Ab9613737B7958FF134c"
                            factory="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42" 
                            btnWidth="100%"
                            loved={Math.floor(Math.random()*100)}
                            watched={Math.floor(Math.random()*10000)}
                            certAddress="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42" />
                            <Button btnType="posterBtn" btnWidth="100%">VIEW DETAILS</Button>
                            <Button btnType="posterBtn" btnWidth="100%">GET ONE</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className={["container", classes.Container].join(' ')}>
            <div className={[classes.MovieDetails, "row", classes.RowReverse].join(' ')}>
                <div className="col-md-6">
                    <div className={classes.MoviePoster}>
                    <CertificateImage
                        header="SOCIALIST REPUBLIC OF VIETNAM" 
                        headMaster="COURSE TRAINER"
                        school="WEB DEVELOPMENT"
                        degreeType="COURSE COMPLETION CERTIFICATE"
                        major="Information Technology"
                        student="Lê Duy Khánh"
                        dateOfBirth="25/07/2000"
                        degreeClassification="Completed"
                        modeOfStudy="Online learning"
                        graduationTime="Ho Chi Minh, 13 October 2020" /> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.MovieContent}>
                        <PosterInteraction 
                            title="Course Completion Certificate"
                            content="Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                            asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem
                            ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!"
                            date="25/7/2000"
                            issuer="JobChain Traning Courses - 0x9113A1d7A8d600f69024550C276106bDCD52259A"
                            factory="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42"  
                            btnWidth="100%"
                            certAddress="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42"
                            loved={Math.floor(Math.random()*100)}
                            watched={Math.floor(Math.random()*10000)} />
                            <Button btnType="posterBtn" btnWidth="100%">VIEW DETAILS</Button>
                            <Button btnType="posterBtn" btnWidth="100%">GET ONE</Button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default MovieDetails