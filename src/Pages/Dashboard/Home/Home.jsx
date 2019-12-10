import React, { Component } from 'react'
import fetch from "cross-fetch"
import {login,logout} from "../../../Redux/Actions/Authentication"
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import { useSelector,useDispatch } from "react-redux";
import NewsCard from "./Card";
import {Button} from "reactstrap";
import { persistor } from '../../../Redux/configStore';

export default function Home(props){

    const logged = useSelector(state=> state.auth.Login.LoggedIn)
    const store = useSelector(state=> state)
    const dispatch = useDispatch()

    return (
        <div>
            <Button className="btn-neutral border-neutral" onClick={()=>logged?dispatch(logout()):dispatch(login(true))}>Helloworld</Button>
            <NewsCard show={false}/>
            <Button className="btn-outline-default border-default" onClick={()=>dispatch(fetchPostsIfNeeded("home","india"))}>Click to fetch thingies</Button>
        </div>
    )
}