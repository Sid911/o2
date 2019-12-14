import React from 'react'
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import { useSelector,useDispatch } from "react-redux";
import NewsCard from "./Card";
import { Card } from 'reactstrap';

export default function Home(props){
    const dispatch = useDispatch()
    dispatch(fetchPostsIfNeeded("home","'india'"))
   // const item = useSelector(state=> state.homeNews.items)
    //const newses= item.map((n)=> <NewsCard title={n.title} image={n.urlToImage} description={n.description}/>)
    //console.log(newses);
    
    return (
        <Card color="secondary" className="shadow-sm--hover rounded-top border-0" style={{height:"100%",padding:10}}>
            <h1 className="text-center">Hello there Home Page 💙</h1>
        </Card>
    )
}