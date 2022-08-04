import React from 'react'
import Slider from './Slider/Slider'
import classes from './Sliders.module.css'

const Sliders = (props) => {
 
    return (
        <div className={[classes.Sliders, classes.clearfix].join(' ')} >
            {props.images.map(image => (
                <Slider 
                    key={image.url}
                    btnContent={image.btnContent}
                    link={image.link}
                    url={image.url}
                    title={image.title}
                    content={image.content} />
            ))}
        </div>
    )

}

export default Sliders