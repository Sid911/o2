import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import "./assets/css/argon-dashboard-react.min.css"
import { PersistGate } from 'redux-persist/integration/react'

import {data,persistor} from "./Redux/configStore";


import TitleBar from './Titlebar/titlebar'
import HomePage from "./Pages/Dashboard/Home/Home"

export default class App extends Component {
    render() {
        return (
            <Provider store={data}>
            <PersistGate loading={null} persistor={persistor} >
                <TitleBar/>
                <HomePage logged={true}/>
            </PersistGate>
            </Provider>
        )
    }
}
