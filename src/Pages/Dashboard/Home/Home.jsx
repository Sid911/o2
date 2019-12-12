import React from 'react'
import {login,logout} from "../../../Redux/Actions/Authentication"
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import { useSelector,useDispatch } from "react-redux";
import NewsCard from "./Card";

export default function Home(props){
    const dispatch = useDispatch()
    //dispatch(fetchPostsIfNeeded("home","'india'"))
   // const item = useSelector(state=> state.homeNews.items)
    //const newses= item.map((n)=> <NewsCard title={n.title} image={n.urlToImage} description={n.description}/>)
    //console.log(newses);
    
    return (
        <div className="flex-nowrap">
        </div>
    )
}