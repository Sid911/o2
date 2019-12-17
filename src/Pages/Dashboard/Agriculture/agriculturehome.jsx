import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import NewsCards from "../Home/News";
import Excard from "../Home/Card";
import { useSelector,useDispatch } from "react-redux"

export default function Agriculture() {
    const dispatch = useDispatch()
    var x = 0;
    while (x<1) {
        dispatch(fetchPostsIfNeeded("agriculture","'agriculture'"))
        x+=1
    } 
    const item = useSelector(state=> state.agricultureNews.items)
    const newses= item.map((n)=> <Excard title={n.title} image={n.urlToImage} description={n.description}/>)
return (

        <div>
        <div className="d-inline-flex p-2">
        <NewsCards newseElement={newses}  style={{marginLeft:"10%"}}/>
        </div>
        <div>
        <div className="container d-inline-flex p-2" style={{marginLeft:"10%"}}>
            <Card color="neutral" className="d-inline-flex p-2 shadow  border-blue" style={{padding :"10%"}}>
            <h1>Today's News 📰 </h1>
            </Card>
            </div>
            </div>
    </div>
    )
    }