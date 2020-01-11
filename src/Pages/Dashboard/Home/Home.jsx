import React from 'react'
import NewsCard from "./News";
import { Card, Button, Row, Col } from 'reactstrap';
import * as firebase from "firebase/app";
import WeatherCard from "./WeatherCard"
import Excard from "./Card";
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import "firebase/auth"
import { useSelector,useDispatch } from "react-redux"

export default function Home() {
    const dispatch = useDispatch()
    dispatch(fetchPostsIfNeeded("home","'india'"))
    const item = useSelector(state=> state.homeNews.items)
    const newses= item.map((n)=> <Excard title={n.title} image={n.urlToImage} description={n.description}/>)
    return (
        <Card color="secondary" className="shadow-sm--hover rounded-top border-0" style={{ height: "100%", padding: 10 }}>
            
            <Row style={{marginTop:"10%"}}><Col><div className="flex-row justify-content-around">
           
                <NewsCard newseElement={newses}/>
                
            </div>
            </Col>
            <Col>
            <Button color="neutral" onClick={() => firebase.logout()}>Logout</Button>
            </Col>
            </Row>
        </Card>
    )
}