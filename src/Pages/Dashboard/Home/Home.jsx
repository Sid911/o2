import React, { Component } from 'react'
import fetch from "cross-fetch"
import {login,logout} from "../../../Redux/Actions/Authentication"
import { useSelector,useDispatch } from "react-redux";

import {Button} from "reactstrap";

export default function Home(props){
    const logged = useSelector(state=> state.Login.LoggedIn)
    console.log(logged)
    const dispatch = useDispatch()
    return (
        <Button className="btn-neutral border-neutral" onClick={()=>logged?dispatch(logout()):dispatch(login(true))}>Helloworld</Button>
    )
}