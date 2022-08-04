import React from 'react'
import certificateImage from '../../../assets/certificate.jpg'
import classes from './CertificateImage.module.css'

const Certificate = (props) => {
    return (
        <div className={classes.Certificate} >
            <div>
                <img src={certificateImage} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div className={classes.Content}>
                <div className={classes.Header}>
                    <p>{props.header}</p>
                    <h6><strong>{props.headMaster}</strong></h6>
                    <h6><strong>{props.school}</strong></h6>
                </div>
                <div className={classes.Center}>
                    <h3>{props.degreeType}</h3>
                    <h5>{props.major}</h5>
                    <div>
                        <p><span>Upon: </span><strong>{props.student}</strong></p>
                        <p><span>Date of birth: </span><strong>{props.dateOfBirth}</strong></p>
                        <p><span>Degree classification: </span><strong>{props.degreeClassification}</strong></p>
                        <p><span>Mode of study: </span><strong>{props.modeOfStudy}</strong></p>
                    </div>
                </div>
                <div className={classes.Footer}>
                    <p>{props.graduationTime}</p>
                </div>
            </div>
        </div>
    )
}

export default Certificate