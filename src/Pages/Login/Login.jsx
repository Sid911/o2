import React from 'react';
import "./App.css"
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

class Login extends React.Component {
  
  render(){
    
    return (
        <Card color="secondary" className="shadow-sm--hover rounded-top border-0 full" style={{padding:10}}>
            <h1 className="text-center">Hello there Login Page</h1>
        </Card>
    );
  }
}

export default Login;
