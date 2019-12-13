import React from 'react';
import "./Login.css"
import {Card,Button} from "reactstrap"
import {login} from "../../Redux/Actions/Authentication"

import { useSelector,useDispatch } from "react-redux";
// Add the Firebase services that you want to use
import initFirebase from "../../Redux/configFirebase"

import * as firebase from "firebase/app";
import "firebase/auth"
initFirebase()
var provider = new firebase.auth.GoogleAuthProvider();



function Login (){
  function googlePop(e){
    e.preventDefault();
    console.log("logginin");
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
  
      
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error,"error");
    });
  }
  function signout(e){ 
  e.preventDefault();
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  }

  const dispatch = useDispatch()
  const Googlemaps = require("@google/maps").createClient({key: 'AIzaSyAp89ftnFZ-p3dm0lxczw00MIh1POlVqAc'})
  return (
      <Card color="secondary" className="shadow-sm--hover rounded-top border-0 full container justify-content-around flex-row" style={{padding:10}}>
          <h1 >Hello there Login Page!</h1>
          <div>
          <Button color="neutral" onClick={googlePop}><i
                    className="ni ni-planet" />Google Login</Button>
          </div>
          <div>
          <Button color="neutral" onClick={signout}><i
                    className="ni ni-planet" />Google Signout</Button>
          </div>
          <div>
          <Button color="neutral" onClick={()=>dispatch(login(true))}>Login</Button>
          </div>
      </Card>
  );
}

export default Login;
