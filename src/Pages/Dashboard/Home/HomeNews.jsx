import React from 'react'
import Excard from "./Card";
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import { Carousel } from "react-responsive-carousel";
import { useSelector,useDispatch } from "react-redux"

export default function HomeNews() {
    const dispatch = useDispatch()
    dispatch(fetchPostsIfNeeded("home","'india'"))
    const item = useSelector(state=> state.homeNews.items)
    const newses= item.map((n)=> <Excard title={n.title} image={n.urlToImage} description={n.description}/>)
    return (
        <div>
            <Carousel></Carousel>
        </div>
    )
}
