import React from 'react';
import './assets/css/argon-dashboard-react.min.css';
import Card from "./Card"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function Login() {
 
  
  return (
    <div className="d-flex align-items-center full">
      <div className="container" style={{padding:"10%"}}>
        <Router>
          <Switch>
            <Route path="/" exact component={Card}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Login;
