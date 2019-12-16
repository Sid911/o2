import React from 'react'
import ReactCardCarousel from 'react-card-carousel'
export default function HomeNews(props) {
    return (
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 7500 } disable_box_shadow={true} spread="wide">
        {props.newseElement}
        </ReactCardCarousel>
    ) 
}
