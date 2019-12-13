import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route,Link, Switch } from "react-router-dom";
import "./assets/css/argon-dashboard-react.min.css"
import { PersistGate } from 'redux-persist/integration/react'

import {data,persistor} from "./Redux/configStore";
import {Scrollbars} from 'react-custom-scrollbars'

import TitleBar from './Titlebar/titlebar'
import HomePage from "./Pages/Dashboard/Home/Home"

export default class App extends Component {
render() {
return (
    <div style={{height:"inherit"}}>
        <TitleBar show={true} />
        <Scrollbars autoHide style={{position:"fixed"}} universal={true}>
            <div style={{padding:"3%", height:"100%"}}>
                <Provider store={data}>
                    <PersistGate loading={null} persistor={persistor} style={{margin:0}}>
                        <Router>
                            <Switch>
                            <Route exact path="/" component={HomePage}/>
                            </Switch>
                        </Router>
                    </PersistGate>
                </Provider>
            </div>
        </Scrollbars>
    </div>
        )
    }
}