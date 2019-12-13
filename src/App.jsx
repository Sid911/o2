import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link, Switch } from "react-router-dom";
import "./assets/css/argon-dashboard-react.min.css"
import "./assets/vendor/fortawesome/fontawesome-free/css/all.min.css"
import {Scrollbars} from 'react-custom-scrollbars'

import TitleBar from './Titlebar/titlebar'
import HomePage from "./Pages/Dashboard/Home/Home"
import LoginPage from "./Pages/Login/Login"
import { useSelector,useDispatch,connect } from "react-redux";

class App extends Component {
    render() {
        const logged = this.props.logged
        return(
           <div style={{height:"inherit"}}>
               <TitleBar show={logged} />
               <Scrollbars autoHide style={{position:"fixed"}} universal={true}>
                   <div style={{padding:"3%", height:"100%"}}>
                       <Router>
                           <Switch>
                               <Route exact path="/" component={logged?HomePage:LoginPage} />
                           </Switch>
                       </Router>
                   </div>
               </Scrollbars>
           </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    return{
        logged : state.auth.Login.LoggedIn
    }
}

export default connect(mapStatetoProps)(App)