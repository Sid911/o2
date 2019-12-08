import React from 'react'

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Titlebar from "./Titlebar/titlebar";
import Login from "./Login/Login";

import {Scrollbars} from 'react-custom-scrollbars'


import vid from "./assets/videos/FountainGrass.mp4"
import "./Login/App.css"

export default class Wrapper extends React.Component{
    render(){
        
        const logged = false;
        return (
            
            <div>
                <Titlebar id="element"/>

                <Scrollbars autoHide style={{position:"fixed"}}>
                <video autoPlay={true} muted loop={true} id="myVideo">
                <source src={vid} type="video/mp4"/>
                </video>
                <div id="overlay"></div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={logged?console.log("somehow logged in"):Login}/>
                        </Switch>
                    </Router>
                </Scrollbars>
            </div>
        )
    }
}
