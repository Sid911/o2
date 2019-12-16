import React from 'react'
import Excard from "./Card";
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import ReactCardCarousel from 'react-card-carousel'
import { useSelector,useDispatch } from "react-redux"

export default function HomeNews(props) {
    const dispatch = useDispatch()
    //dispatch(fetchPostsIfNeeded("home","'india'"))
    const item = useSelector(state=> state.homeNews.items)
    const newses= item.map((n)=> <Excard title={n.title} image={n.urlToImage} description={n.description}/>)
    return (
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 7500 } disable_box_shadow={true} spread="wide">
        {newses}
        </ReactCardCarousel>
    ) 
}
