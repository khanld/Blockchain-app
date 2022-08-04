import React from 'react'
import PlayButton from '../../../UI/PlayButton/PlayButton'
import classes from './PosterImage.module.css'

const PosterImage = (props) => {
    return (
        <div className={classes.PosterImage}>
            <div className={classes.Point}>{props.price ? props.price : "6.5"}</div>
            <img src={props.poster} alt={`poster${props.index}`} />
            <PlayButton />
        </div>
    )
}

export default PosterImage