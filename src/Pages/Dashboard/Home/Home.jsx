import React from 'react'
import NewsCard from "./HomeNews";
import { Card, Button, Row, Col } from 'reactstrap';
import * as firebase from "firebase/app";
import WeatherCard from "./WeatherCard"
import "firebase/auth"

export default function Home() {

    return (
        <Card color="secondary" className="shadow-sm--hover rounded-top border-0" style={{ height: "100%", padding: 10 }}>
            
            <Row style={{marginTop:"10%"}}><Col><div className="flex-row justify-content-around">
           
                {/* <Button color="neutral" onClick={() => firebase.logout()}>Logout</Button> */}
                <NewsCard/>
                
            </div>
            </Col>
            <Col>
            <WeatherCard/>
            </Col>
            </Row>
        </Card>
    )
}