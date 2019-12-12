import React, { Component } from 'react'
import fetch from "cross-fetch"
import {login,logout} from "../../../Redux/Actions/Authentication"
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import { useSelector,useDispatch } from "react-redux";
import NewsCard from "./Card";
import {Button} from "reactstrap";

export default function Home(props){

    const logged = useSelector(state=> state.auth.Login.LoggedIn)
    const store = useSelector(state=> state)
    const dispatch = useDispatch()

    return (
        <div>
        </div>
    )
}