import React from 'react';
import "./Login.css"
import {
Card,
Button,
FormGroup,
Form,
Input,
InputGroupAddon,
InputGroupText,
InputGroup,
} from "reactstrap"

import { useSelector} from "react-redux";
// Add the Firebase services that you want to use

import * as firebase from "firebase/app";
import "firebase/auth"

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

const Googlemaps = require("@google/maps").createClient({key: 'AIzaSyAp89ftnFZ-p3dm0lxczw00MIh1POlVqAc'})
return (
<Card color="secondary" className="shadow-sm--hover rounded-top border-0 full" style={{padding:10}}>
  <Form>
    <div className="flex-row">
      <FormGroup>
        <Input className="form-control-alternative" id="emailInput" placeholder="name@example.com" type="email"
          datatype="string" />
      </FormGroup>
      <FormGroup>
        <Input className="form-control-alternative" id="passwordInput" placeholder="Password" type="password" />
      </FormGroup>

    </div>
  </Form>
  <div className="justify-content-center flex-row">
    <Button color="neutral" onClick={googlePop}><i className="ni ni-planet" />Google Login</Button>

    <Button color="neutral"><i className="ni ni-planet" />SignIn Annyomously</Button>


    <Button color="neutral" onClick={()=>{emailandpass("sid@dev.com","sid911")}}>Login</Button>
  </div>
</Card>
);
}

export default Login;