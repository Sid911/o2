import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { BrowserRouter as Router,Route,Link, Switch } from "react-router-dom";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";

import Home from "./agriculturehome";
import Info from "./info";
import map from "./map"
import healthcare from "./healthcare"
export default function Agriculture() {
    return (
        <div>
            <div className="X" >
             <ButtonGroup vertical>
            <Button color="primary" type="button" className="fa fa-address-card" onClick={()=>document.location.href="/agriculture/"}></Button>
            <Button color="primary" type="button" className="fa fa-info-circle" onClick={()=>document.location.href="/agriculture/info"}></Button>
            <Button color="primary" type="button" className="fa fa-map" onClick={()=>document.location.href="/agriculture/maps"} ></Button>
            <Button color="primary" type="button" className="fa fa-heartbeat" onClick={()=>document.location.href="/agriculture/healthcare"}></Button>
            </ButtonGroup>
            </div>
            <Router>
            <Switch>
               <Route exact path="/agriculture/" component={Home}/>
               <Route exact path="/agriculture/info/" component={Info}/>
               <Route exact path="/agriculture/map/" component={map}/>
               <Route exact path="/agriculture/healthcare/" component={map}/>
            </Switch>
            </Router>
        </div>
    )
}
