import React from 'react';
import "./Login.css"
import {
Card,
Button,
FormGroup,
Form,
Input
} from "reactstrap"

import { useSelector} from "react-redux";
// Add the Firebase services that you want to use

import * as firebase from "firebase/app";
import "firebase/auth"
import Auto from "./auto"

function Login (){
function emailandpass(e,p){
firebase.login({email:e,password:p})
}

function googlePop(){
firebase.login({
provider: 'google',
type: 'popup',
})
}
const fire = useSelector(state=>state.firebase)

return (
<Card color="secondary" className="shadow-sm--hover rounded-top border-0 full" style={{padding:"15%"}}>

    <div className="flex-row cen">
        <Auto className="border-blue hover shadow-lg--hover"/>
    </div>
  <div className="justify-content-center flex-row">
    {/* <Button color="neutral" onClick={googlePop}><i className="ni ni-planet" />Google Login</Button>

    <Button color="neutral"><i className="ni ni-planet" />SignIn Annyomously</Button> */}

    <Button color="neutral" onClick={()=>{emailandpass("sid@dev.com","sid911")}}>Search</Button>
  </div>
</Card>
);
}

export default Login;