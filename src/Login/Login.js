import React from 'react';
import "./App.css"
import LoginCard from "../LoginCard"
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

class Login extends React.Component {
  
  render(){
    
    return (
      <div className="full">
        <div className="d-flex align-items-center full">
          <div className="container">
            <LoginCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
