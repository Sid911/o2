import React from 'react';
import './assets/css/argon-dashboard-react.min.css';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css"
import Login_Card from "./LoginCard"
import Titlebar from "./titlebar/titlebar";

import {Scrollbars} from 'react-custom-scrollbars'
function Login() {
  return (
    <div>
      <Titlebar id="element"/>
      <Scrollbars autoHide style={{position:"fixed"}}>
        <div className="d-flex align-items-center full">
          <div className="container">
            <Router>
              <Switch>
                <Route path="/" exact component={Login_Card}/>
              </Switch>
            </Router>
          </div>
        </div>
      </Scrollbars>
      </div>
    );
  }

export default Login;
