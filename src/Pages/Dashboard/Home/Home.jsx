import React from 'react'
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import {logout} from "../../../Redux/Actions/Authentication"
import { useSelector,useDispatch } from "react-redux";
import NewsCard from "./Card";
import { Card,Button } from 'reactstrap';
import * as firebase from "firebase/app";
import "firebase/auth"

export default function Home(props){
    const dispatch = useDispatch()
    //dispatch(fetchPostsIfNeeded("home","'india'"))
   // const item = useSelector(state=> state.homeNews.items)
    //const newses= item.map((n)=> <NewsCard title={n.title} image={n.urlToImage} description={n.description}/>)
    //console.log(newses);
    
    return (
        <Card color="secondary" className="shadow-sm--hover rounded-top border-0 flex-row justify-content-around" style={{height:"100%",padding:10}}>
            <div className="display-1 flex-column">Hello there Home Page<span> 💙</span></div>
            <div className="flex-column">
                <Button color="neutral"  onClick={()=>firebase.logout() }>Logout</Button>
            </div>
        </Card>
    )
}