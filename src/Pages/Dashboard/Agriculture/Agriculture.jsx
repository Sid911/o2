import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { BrowserRouter as Router,Route,Link, Switch } from "react-router-dom";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";

import Home from "./agriculturehome"
import Info from "./info"

export default function Agriculture() {
    return (
        <div>
            <div className="X" >
             <ButtonGroup vertical>
            <Button color="primary" type="button" className="fa fa-address-card" ></Button>
            <Button color="primary" type="button" className="fa fa-info-circle"></Button>
            <Button color="primary" type="button" className="fa fa-map" ></Button>
            <Button color="primary" type="button" className="fa fa-heartbeat" ></Button>
            </ButtonGroup>
            </div>
            <Router>
            <Switch>
               <Route exact path="/agriculture/" component={Home}/>
               <Route exact path="/agriculture/info/" component={Info}/>
            </Switch>
            </Router>
        </div>
    )
}
