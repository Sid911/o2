import React, { Component } from 'react'
import { createStore} from "redux";
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import "../assets/css/argon-dashboard-react.min.css"

import TitleBar from '../Titlebar/titlebar'
import HomePage from "../Pages/Dashboard/Home/Home"

export default class App extends Component {
    render() {
        return (
            <div>
                <TitleBar/>
                <HomePage/>
            </div>
        )
    }
}
